import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@12.1.1?target=deno'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') as string, {
  apiVersion: '2022-11-15',
  httpClient: Stripe.createFetchHttpClient(),
})

const cryptoProvider = Stripe.createSubtleCryptoProvider()

serve(async (req) => {
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
      const session = event.data.object

      // Initialize Supabase client
      const supabaseUrl = Deno.env.get('SUPABASE_URL') as string
      const supabaseServiceKey = Deno.env.get(
        'SUPABASE_SERVICE_ROLE_KEY'
      ) as string
      const supabase = createClient(supabaseUrl, supabaseServiceKey)

      const customerName = session.customer_details?.name || 'Unknown'
      const customerEmail = session.customer_details?.email || 'Unknown'
      const shippingAddress = session.shipping_details?.address
        ? `${session.shipping_details.address.line1 || ''}, ${session.shipping_details.address.postal_code || ''} ${session.shipping_details.address.city || ''}, ${session.shipping_details.address.country || ''}`.trim()
        : null

      // Save the order to DB
      const { error } = await supabase.from('orders').insert({
        stripe_session_id: session.id,
        customer_email: customerEmail,
        customer_name: customerName,
        shipping_address: shippingAddress,
        amount_total: session.amount_total,
        currency: session.currency,
        payment_status: session.payment_status,
        created_at: new Date().toISOString(),
      })

      if (error) {
        console.error(
          'Error inserting order (possibly missing column):',
          error.message
        )
        console.log(
          'Ensure your "orders" table has these columns: stripe_session_id, customer_email, customer_name, shipping_address, amount_total, currency, payment_status, created_at'
        )
        return new Response('Database error', { status: 500 })
      }

      console.log(`Order saved for ${customerEmail}`)
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 })
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`)
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }
})
