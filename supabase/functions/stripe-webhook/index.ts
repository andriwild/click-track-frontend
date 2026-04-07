// This enables autocomplete, go to definition, etc. in a Deno environment
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'npm:stripe@^14.0.0'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') as string, {
  apiVersion: '2024-11-20.acacia',
  httpClient: Stripe.createFetchHttpClient(),
})

const cryptoProvider = Stripe.createSubtleCryptoProvider()

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

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session

      // Initialize Supabase client
      const supabaseUrl = Deno.env.get('SUPABASE_URL')
      const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

      if (!supabaseUrl || !supabaseServiceKey) {
        console.error('Missing Supabase environment variables')
        return new Response('Server configuration error', { status: 500 })
      }

      const supabase = createClient(supabaseUrl, supabaseServiceKey)

      const customerName =
        session.customer_details?.name ||
        session.collected_information?.shipping_details?.name ||
        'Unknown'
      const customerEmail = session.customer_details?.email || 'Unknown'

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

      // 1. Save the order to DB and get the generated order UUID
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert({
          stripe_session_id: session.id,
          customer_email: customerEmail,
          customer_name: customerName,
          billing_address: billingAddress,
          shipping_address: shippingAddress,
          amount_total: session.amount_total,
          currency: session.currency,
          payment_status: session.payment_status,
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
      if (
        session.metadata?.newsletter === 'true' &&
        customerEmail !== 'Unknown'
      ) {
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
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 })
  } catch (err) {
    const error = err as Error
    console.error(`Webhook Error: ${error.message}`)
    return new Response(`Webhook Error: ${error.message}`, { status: 400 })
  }
})
