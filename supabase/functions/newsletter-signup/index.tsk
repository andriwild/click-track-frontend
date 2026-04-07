const ALLOWED_ORIGINS = [
  'https://klikkr.ch',
  'https://www.klikkr.ch',
  'http://localhost:4321',
]

function corsHeaders(origin: string | null) {
  const allowedOrigin =
    ALLOWED_ORIGINS.find((o) => o === origin) || ALLOWED_ORIGINS[0]
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

Deno.serve(async (req) => {
  const origin = req.headers.get('Origin')

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
    const { email } = await req.json()

    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
      })
    }

    const brevoApiKey = Deno.env.get('BREVO_API_KEY')
    if (!brevoApiKey) {
      console.error('BREVO_API_KEY not configured')
      return new Response(
        JSON.stringify({ error: 'Newsletter service not configured' }),
        {
          status: 500,
          headers: {
            ...corsHeaders(origin),
            'Content-Type': 'application/json',
          },
        }
      )
    }

    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': brevoApiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [5],
        updateEnabled: false,
      }),
    })

    if (!res.ok) {
      const body = await res.text()
      console.error('Brevo API error:', res.status, body)

      if (body.includes('already exist')) {
        return new Response(JSON.stringify({ error: 'already_subscribed' }), {
          status: 409,
          headers: {
            ...corsHeaders(origin),
            'Content-Type': 'application/json',
          },
        })
      }

      return new Response(JSON.stringify({ error: 'Failed to subscribe' }), {
        status: 500,
        headers: {
          ...corsHeaders(origin),
          'Content-Type': 'application/json',
        },
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
    })
  } catch (err) {
    const error = err as Error
    console.error('Newsletter signup error:', error.message)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
    })
  }
})
