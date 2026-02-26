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
    const event = await stripe.webhooks.signature.verifyAsync(
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

      // Save the order to DB
      const { error } = await supabase.from('orders').insert({
        stripe_session_id: session.id,
        customer_email: session.customer_details?.email,
        customer_name: session.customer_details?.name,
        amount_total: session.amount_total,
        currency: session.currency,
        payment_status: session.payment_status,
        created_at: new Date().toISOString(),
      })

      if (error) {
        console.error('Error inserting order:', error)
        return new Response('Database error', { status: 500 })
      }

      console.log(`Order saved for ${session.customer_details?.email}`)
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 })
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`)
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }
})
