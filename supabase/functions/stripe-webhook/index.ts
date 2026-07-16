// This enables autocomplete, go to definition, etc. in a Deno environment
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'npm:stripe@^14.0.0'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') as string, {
  apiVersion: '2024-11-20.acacia',
  httpClient: Stripe.createFetchHttpClient(),
})

const cryptoProvider = Stripe.createSubtleCryptoProvider()

type SupabaseClient = ReturnType<typeof createClient>

function getSupabase(): SupabaseClient | null {
  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase environment variables')
    return null
  }
  return createClient(supabaseUrl, supabaseServiceKey)
}

// Risk-Signale der Zahlung von Stripe holen (Radar-Einstufung + 3DS-Resultat)
async function getRiskSignals(paymentIntentId: string | null) {
  let riskLevel: string | null = null
  let threeDSecure: string | null = null
  if (!paymentIntentId) return { riskLevel, threeDSecure }
  try {
    const pi = await stripe.paymentIntents.retrieve(paymentIntentId, {
      expand: ['latest_charge'],
    })
    const charge = pi.latest_charge as Stripe.Charge | null
    riskLevel = charge?.outcome?.risk_level ?? null
    threeDSecure =
      charge?.payment_method_details?.card?.three_d_secure?.result ?? null
  } catch (err) {
    console.error('Failed to fetch risk signals:', (err as Error).message)
  }
  return { riskLevel, threeDSecure }
}

async function handleCheckoutSession(
  session: Stripe.Checkout.Session,
  supabase: SupabaseClient
): Promise<Response> {
  const customerName =
    session.customer_details?.name ||
    session.collected_information?.shipping_details?.name ||
    'Unknown'
  const customerEmail = session.customer_details?.email || 'Unknown'
  const customerPhone = session.customer_details?.phone || null

  // Helper to format Stripe addresses consistently
  const formatAddress = (addr: Stripe.Address | null | undefined) => {
    if (!addr) return null
    return `${addr.line1 || ''}, ${addr.postal_code || ''} ${addr.city || ''}, ${addr.country || ''}`.trim()
  }

  const billingAddress =
    formatAddress(session.customer_details?.address) ||
    'Keine Rechnungsadresse hinterlegt'
  const shippingAddress =
    formatAddress(
      session.shipping_details?.address ||
        session.collected_information?.shipping_details?.address
    ) || 'Keine Lieferadresse hinterlegt'

  const paymentIntentId =
    typeof session.payment_intent === 'string'
      ? session.payment_intent
      : (session.payment_intent?.id ?? null)
  const { riskLevel, threeDSecure } = await getRiskSignals(paymentIntentId)

  // 1. Save the order to DB and get the generated order UUID
  const { data: orderData, error: orderError } = await supabase
    .from('orders')
    .insert({
      stripe_session_id: session.id,
      payment_intent_id: paymentIntentId,
      customer_email: customerEmail,
      customer_name: customerName,
      customer_phone: customerPhone,
      billing_address: billingAddress,
      shipping_address: shippingAddress,
      amount_total: session.amount_total,
      shipping_amount_cents: session.shipping_cost?.amount_total ?? null,
      currency: session.currency,
      payment_status: session.payment_status,
      risk_level: riskLevel,
      three_d_secure: threeDSecure,
      created_at: new Date().toISOString(),
    })
    .select('id')
    .single()

  if (orderError) {
    console.error('Error inserting order:', orderError.message)
    return new Response('Database error', { status: 500 })
  }

  console.log(`Order saved for ${customerEmail} with ID: ${orderData.id}`)

  // 2. Fetch Line Items from Stripe (they are not fully included in the session object by default)
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id)

  // 3. Loop through Line Items, create/update Product and insert Order Item
  for (const item of lineItems.data) {
    // Stripe Product ID als SKU (Stock Keeping Unit) nutzen
    const sku =
      typeof item.price?.product === 'string'
        ? item.price.product
        : 'unknown-sku'

    // 3a. Produkt in DB anlegen oder aktualisieren (Upsert anhand der SKU)
    const { data: productData, error: productError } = await supabase
      .from('products')
      .upsert(
        {
          name: item.description || 'Unbekanntes Produkt',
          sku: sku,
          unit: 'Stk.', // Standardwert
        },
        { onConflict: 'sku' }
      ) // <- Verhindert Duplikate, wenn das Produkt schon existiert
      .select('id')
      .single()

    if (productError) {
      console.error('Error upserting product:', productError.message)
      continue // Wir machen mit dem nächsten Item weiter
    }

    // 3b. Bestellposition (Order Item) speichern
    const quantity = item.quantity || 1
    // Der Preis in Cents für 1 Stück (amount_total des Items geteilt durch Menge)
    const unitPriceCents = Math.round(item.amount_total / quantity)

    const { error: itemError } = await supabase.from('order_items').insert({
      order_id: orderData.id, // Verknüpfung zur gerade erstellten Order
      product_id: productData.id, // Verknüpfung zum Produkt
      quantity: quantity,
      unit_price_cents: unitPriceCents,
    })

    if (itemError) {
      console.error('Error inserting order item:', itemError.message)
    }
  }

  console.log(`Order Items saved for Session ${session.id}`)

  // Newsletter opt-in: add customer to Brevo list
  // Source: metadata.newsletter (CH flow) or client_reference_id (international payment link)
  const newsletterOptIn =
    session.metadata?.newsletter === 'true' ||
    session.client_reference_id === 'newsletter_yes'
  if (newsletterOptIn && customerEmail !== 'Unknown') {
    const brevoApiKey = Deno.env.get('BREVO_API_KEY')
    if (brevoApiKey) {
      try {
        const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            'api-key': brevoApiKey,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            email: customerEmail,
            listIds: [5],
            updateEnabled: false,
          }),
        })
        if (brevoRes.ok) {
          console.log(`Newsletter signup for ${customerEmail}`)
        } else {
          const body = await brevoRes.text()
          console.error('Brevo API error:', body)
        }
      } catch (err) {
        console.error('Brevo signup failed:', (err as Error).message)
      }
    }
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 })
}

// Bestellung zum Charge eines Fraud-Events finden. Fallback über die
// Checkout-Session deckt Bestellungen ab, die vor der Einführung von
// payment_intent_id angelegt wurden.
async function findOrder(supabase: SupabaseClient, paymentIntentId: string) {
  const { data } = await supabase
    .from('orders')
    .select('id, shipping_status')
    .eq('payment_intent_id', paymentIntentId)
    .maybeSingle()
  if (data) return data as { id: string; shipping_status: string | null }

  const sessions = await stripe.checkout.sessions.list({
    payment_intent: paymentIntentId,
    limit: 1,
  })
  const sessionId = sessions.data[0]?.id
  if (!sessionId) return null

  const { data: bySession } = await supabase
    .from('orders')
    .select('id, shipping_status')
    .eq('stripe_session_id', sessionId)
    .maybeSingle()
  return bySession as { id: string; shipping_status: string | null } | null
}

// Fraud-Warning oder Dispute: Bestellung markieren und Versand stoppen,
// solange sie noch nicht unterwegs ist.
async function flagOrder(
  supabase: SupabaseClient,
  paymentIntentId: string | null,
  timestampField: 'fraud_warning_at' | 'disputed_at',
  context: string
): Promise<Response> {
  if (!paymentIntentId) {
    console.error(`${context}: no payment intent on event`)
    return new Response(JSON.stringify({ received: true }), { status: 200 })
  }

  const order = await findOrder(supabase, paymentIntentId)
  if (!order) {
    console.error(`${context}: no order found for ${paymentIntentId}`)
    return new Response(JSON.stringify({ received: true }), { status: 200 })
  }

  const update: Record<string, string> = {
    [timestampField]: new Date().toISOString(),
  }
  if (!order.shipping_status || order.shipping_status === 'pending') {
    update.shipping_status = 'on_hold'
  }

  const { error } = await supabase
    .from('orders')
    .update(update)
    .eq('id', order.id)
  if (error) {
    console.error(`${context}: failed to flag order:`, error.message)
    return new Response('Database error', { status: 500 })
  }

  console.log(
    `${context}: order ${order.id} flagged` +
      (update.shipping_status ? ', shipping on hold' : '')
  )
  return new Response(JSON.stringify({ received: true }), { status: 200 })
}

Deno.serve(async (req) => {
  const signature = req.headers.get('Stripe-Signature')
  const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')

  if (!signature || !webhookSecret) {
    return new Response('Webhook secret or signature missing', { status: 400 })
  }

  try {
    const body = await req.text()
    // Verify the webhook request
    const event = await stripe.webhooks.constructEventAsync(
      body,
      signature,
      webhookSecret,
      undefined,
      cryptoProvider
    )

    const supabase = getSupabase()
    if (!supabase) {
      return new Response('Server configuration error', { status: 500 })
    }

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        // Asynchrone Zahlarten (z.B. Banküberweisung) sind hier noch unbezahlt;
        // die Bestellung kommt dann über async_payment_succeeded.
        if (session.payment_status !== 'paid') {
          console.log(
            `Session ${session.id} completed but unpaid, awaiting async payment`
          )
          return new Response(JSON.stringify({ received: true }), {
            status: 200,
          })
        }
        return await handleCheckoutSession(session, supabase)
      }

      case 'checkout.session.async_payment_succeeded': {
        const session = event.data.object as Stripe.Checkout.Session
        return await handleCheckoutSession(session, supabase)
      }

      case 'radar.early_fraud_warning.created': {
        const warning = event.data.object as Stripe.Radar.EarlyFraudWarning
        let paymentIntentId =
          typeof warning.payment_intent === 'string'
            ? warning.payment_intent
            : (warning.payment_intent?.id ?? null)
        if (!paymentIntentId) {
          const chargeId =
            typeof warning.charge === 'string'
              ? warning.charge
              : warning.charge.id
          const charge = await stripe.charges.retrieve(chargeId)
          paymentIntentId =
            typeof charge.payment_intent === 'string'
              ? charge.payment_intent
              : (charge.payment_intent?.id ?? null)
        }
        console.log(`Early fraud warning: ${warning.fraud_type}`)
        return await flagOrder(
          supabase,
          paymentIntentId,
          'fraud_warning_at',
          'Early fraud warning'
        )
      }

      case 'charge.dispute.created': {
        const dispute = event.data.object as Stripe.Dispute
        const paymentIntentId =
          typeof dispute.payment_intent === 'string'
            ? dispute.payment_intent
            : (dispute.payment_intent?.id ?? null)
        console.log(`Dispute created: ${dispute.reason}`)
        return await flagOrder(
          supabase,
          paymentIntentId,
          'disputed_at',
          'Dispute'
        )
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
        return new Response(JSON.stringify({ received: true }), {
          status: 200,
        })
    }
  } catch (err) {
    const error = err as Error
    console.error(`Webhook Error: ${error.message}`)
    return new Response('Webhook Error', { status: 400 })
  }
})
