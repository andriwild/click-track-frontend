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
      const formatAddress = (addr: Stripe.Address) => {
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

      // Save the order to DB
      const { error } = await supabase.from('orders').insert({
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

      if (error) {
        console.error(
          'Error inserting order (possibly missing column or constraint):',
          error.message
        )
        return new Response('Database error', { status: 500 })
      }

      console.log(`Order saved for ${customerEmail}`)
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 })
  } catch (err: Error) {
    console.error(`Webhook Error: ${err.message}`)
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }
})
