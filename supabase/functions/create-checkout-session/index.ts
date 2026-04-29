import Stripe from 'npm:stripe@^14.0.0'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') as string, {
  apiVersion: '2024-11-20.acacia',
  httpClient: Stripe.createFetchHttpClient(),
})

// Server-side allowlist of valid Stripe Price IDs
const ALLOWED_PRICE_IDS = new Set([
  'price_1TEvAVApnOf6m4doqtBC7OJX', // wristband
  'price_1TEvJPApnOf6m4dozIv5Ze8W', // holder squash S
  'price_1TFVZDApnOf6m4doCkFyvOI7', // holder squash M
  'price_1TFVZiApnOf6m4do3uj4HloR', // holder squash L
])

const ALLOWED_ORIGINS = [
  'https://klikkr.ch',
  'https://www.klikkr.ch',
  'http://localhost:4321', // Astro dev server
]

function corsHeaders(origin: string | null) {
  const allowedOrigin =
    ALLOWED_ORIGINS.find((o) => o === origin) || ALLOWED_ORIGINS[0]
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }
}

Deno.serve(async (req) => {
  const origin = req.headers.get('Origin')

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders(origin) })
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', {
      status: 405,
      headers: corsHeaders(origin),
    })
  }

  try {
    const { items, lang = 'de', newsletter = false } = await req.json()

    if (!Array.isArray(items) || items.length === 0) {
      return new Response(JSON.stringify({ error: 'No items provided' }), {
        status: 400,
        headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
      })
    }

    // Validate and build line items
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = []

    for (const item of items) {
      if (!ALLOWED_PRICE_IDS.has(item.priceId)) {
        continue // Skip invalid price IDs
      }
      const qty = Math.min(Math.max(1, Math.floor(Number(item.quantity))), 10)
      lineItems.push({ price: item.priceId, quantity: qty })
    }

    if (lineItems.length === 0) {
      return new Response(JSON.stringify({ error: 'No valid items' }), {
        status: 400,
        headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
      })
    }

    // Build locale-aware URLs
    const baseUrl = 'https://klikkr.ch'
    const langPrefix = lang !== 'de' ? `/${lang}` : ''
    const successUrl = `${baseUrl}${langPrefix}/thanks?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${baseUrl}${langPrefix}/#checkout`

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      metadata: { newsletter: newsletter ? 'true' : 'false' },
      line_items: lineItems,
      shipping_options: [
        { shipping_rate: Deno.env.get('SHIPPING_RATE_ID') as string },
      ],
      shipping_address_collection: {
        allowed_countries: ['CH'],
      },
      allow_promotion_codes: true,
      success_url: successUrl,
      cancel_url: cancelUrl,
      locale: lang as Stripe.Checkout.SessionCreateParams.Locale,
    })

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
    })
  } catch (err) {
    const error = err as Error
    console.error('Checkout session error:', error.message)
    return new Response(
      JSON.stringify({ error: 'Failed to create checkout session' }),
      {
        status: 500,
        headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
      }
    )
  }
})
