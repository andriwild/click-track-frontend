import { useEffect, useRef, useState } from 'react'
import { Mail, Send, Loader2 } from 'lucide-react'
import { getTranslations, type Locale } from '../i18n'
import { track } from '../lib/analytics'

const NEWSLETTER_FUNCTION_URL =
  'https://xhhticogilsokkpypzwe.supabase.co/functions/v1/newsletter-signup'

const TURNSTILE_SITE_KEY = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY as
  | string
  | undefined

type Status = 'idle' | 'loading' | 'success' | 'already_subscribed' | 'error'

interface TurnstileRenderOptions {
  sitekey: string
  theme?: 'light' | 'dark' | 'auto'
  size?: 'normal' | 'flexible' | 'compact'
  callback?: (token: string) => void
  'expired-callback'?: () => void
  'error-callback'?: () => void
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: TurnstileRenderOptions
      ) => string | undefined
      reset: (widget?: string | HTMLElement) => void
      remove: (widget: string) => void
    }
  }
}

function waitForTurnstile(): Promise<NonNullable<Window['turnstile']>> {
  return new Promise((resolve) => {
    if (window.turnstile) return resolve(window.turnstile)
    const interval = setInterval(() => {
      if (window.turnstile) {
        clearInterval(interval)
        resolve(window.turnstile)
      }
    }, 100)
  })
}

function NewsletterFormFields({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).newsletter
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [turnstileToken, setTurnstileToken] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  const widgetContainerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | undefined>(undefined)

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !widgetContainerRef.current) return

    let cancelled = false
    waitForTurnstile().then((turnstile) => {
      if (cancelled || !widgetContainerRef.current) return
      widgetIdRef.current = turnstile.render(widgetContainerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'dark',
        size: 'flexible',
        callback: (token) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
        'error-callback': () => setTurnstileToken(''),
      })
    })

    return () => {
      cancelled = true
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = undefined
      }
    }
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return

    const formData = new FormData(e.currentTarget)
    const honeypot = (formData.get('website') as string | null) ?? ''

    if (honeypot) {
      setStatus('success')
      setEmail('')
      return
    }

    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setStatus('error')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch(NEWSLETTER_FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          website: honeypot,
          turnstileToken,
        }),
      })

      if (res.status === 409) {
        setStatus('already_subscribed')
        return
      }

      if (!res.ok) throw new Error('Signup failed')

      track('newsletter-signup')
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    } finally {
      setTurnstileToken('')
      if (widgetIdRef.current) window.turnstile?.reset(widgetIdRef.current)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status !== 'idle' && status !== 'loading') setStatus('idle')
            }}
            placeholder={t.placeholder}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === 'loading' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {t.button}
        </button>
      </div>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          opacity: 0,
          pointerEvents: 'none',
        }}
      />
      {TURNSTILE_SITE_KEY && <div ref={widgetContainerRef} className="mt-3" />}
      {status === 'success' && (
        <p className="text-emerald-400 text-sm mt-3">{t.success}</p>
      )}
      {status === 'already_subscribed' && (
        <p className="text-amber-400 text-sm mt-3">{t.alreadySubscribed}</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm mt-3">{t.error}</p>
      )}
      <p className="text-zinc-600 text-xs mt-2">{t.privacy}</p>
    </form>
  )
}

export function NewsletterSection({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).newsletter

  return (
    <section className="relative w-full py-24 md:py-32 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] opacity-60 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-2xl">
        <div className="flex flex-col items-center text-center mb-10 space-y-4">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2" />
            {t.badge}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            {t.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              {t.titleAccent}
            </span>
          </h2>
          <p className="max-w-[500px] text-zinc-400 md:text-lg">
            {t.description}
          </p>
        </div>
        <NewsletterFormFields lang={lang} />
      </div>
    </section>
  )
}

export function NewsletterFooter({ lang = 'de' }: { lang?: Locale }) {
  return (
    <div className="w-full py-6 border-b border-zinc-900">
      <div className="container mx-auto px-4 md:px-6 max-w-xl">
        <NewsletterFormFields lang={lang} />
      </div>
    </div>
  )
}
