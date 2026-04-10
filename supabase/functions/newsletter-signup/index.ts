const ALLOWED_ORIGINS = [
  'https://klikkr.ch',
  'https://www.klikkr.ch',
  'http://localhost:4321',
]

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function corsHeaders(origin: string | null) {
  const allowedOrigin =
    ALLOWED_ORIGINS.find((o) => o === origin) || ALLOWED_ORIGINS[0]
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

async function verifyTurnstile(
  token: string,
  remoteIp: string | null
): Promise<boolean> {
  const secret = Deno.env.get('TURNSTILE_SECRET_KEY')
  if (!secret) {
    console.error('TURNSTILE_SECRET_KEY not configured')
    return false
  }

  const form = new FormData()
  form.append('secret', secret)
  form.append('response', token)
  if (remoteIp) form.append('remoteip', remoteIp)

  try {
    const res = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      { method: 'POST', body: form }
    )
    const data = (await res.json()) as { success: boolean }
    return data.success === true
  } catch (err) {
    console.error('Turnstile verify failed:', (err as Error).message)
    return false
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
    const { email, website, turnstileToken } = await req.json()

    if (typeof website === 'string' && website.length > 0) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
      })
    }

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
      })
    }

    if (!turnstileToken || typeof turnstileToken !== 'string') {
      return new Response(JSON.stringify({ error: 'Captcha required' }), {
        status: 400,
        headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
      })
    }

    const remoteIp =
      req.headers.get('CF-Connecting-IP') ||
      req.headers.get('X-Forwarded-For')?.split(',')[0].trim() ||
      null

    const captchaOk = await verifyTurnstile(turnstileToken, remoteIp)
    if (!captchaOk) {
      return new Response(JSON.stringify({ error: 'Captcha failed' }), {
        status: 403,
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
