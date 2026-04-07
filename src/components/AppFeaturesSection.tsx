import { useState } from 'react'
import {
  Smartphone,
  Bluetooth,
  MonitorSmartphone,
  Trophy,
  ScanLine,
  WifiOff,
  Mail,
} from 'lucide-react'
import { getTranslations, type Locale } from '../i18n'
import { track } from '../lib/analytics'

function BetaSignup({
  t,
}: {
  t: ReturnType<typeof getTranslations>['appFeatures']
}) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    try {
      const subject = encodeURIComponent('Klikkr Beta Anmeldung')
      const body = encodeURIComponent(
        `Bitte ladet mich zur Klikkr Beta ein.\n\nE-Mail: ${email}`
      )
      track('beta-signup')
      window.location.href = `mailto:support@klikkr.ch?subject=${subject}&body=${body}`
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto mt-8 mb-4">
      {/* Store badges */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        {/* Google Play badge */}
        <div className="flex items-center gap-3 bg-zinc-950/80 border border-zinc-700/50 px-5 py-2.5 rounded-xl shadow-lg backdrop-blur-sm">
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 flex-shrink-0"
            fill="none"
          >
            <path
              d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734c0-.389.226-.727.609-.92z"
              fill="#4285F4"
            />
            <path
              d="M17.219 8.381l-3.427 3.62 3.427 3.618 3.862-2.178a1.004 1.004 0 000-1.882l-3.862-2.178z"
              fill="#FBBC04"
            />
            <path
              d="M3.609 22.186c.243.132.538.172.84.1l9.77-5.508-3.427-3.619L3.61 22.186z"
              fill="#EA4335"
            />
            <path
              d="M3.609 1.814L13.792 12l-3.427-3.619L4.45 1.714a1.064 1.064 0 00-.84.1z"
              fill="#34A853"
            />
          </svg>
          <div className="text-left">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 leading-none mb-0.5">
              {t.betaBadge}
            </div>
            <div className="text-base font-bold text-zinc-50 leading-none tracking-tight">
              Google Play
            </div>
          </div>
        </div>

        {/* App Store badge */}
        <div className="flex items-center gap-3 bg-zinc-950/80 border border-zinc-700/50 px-5 py-2.5 rounded-xl shadow-lg backdrop-blur-sm">
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 flex-shrink-0"
            fill="currentColor"
          >
            <path
              d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
              className="text-zinc-300"
            />
          </svg>
          <div className="text-left">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 leading-none mb-0.5">
              {t.betaBadge}
            </div>
            <div className="text-base font-bold text-zinc-50 leading-none tracking-tight">
              App Store
            </div>
          </div>
        </div>
      </div>

      {/* Beta signup */}
      <p className="text-center text-zinc-400 text-sm mb-4">
        {t.betaDescription}
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status !== 'idle') setStatus('idle')
            }}
            placeholder={t.betaPlaceholder}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-100 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-all"
          />
        </div>
        <button
          type="submit"
          className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all cursor-pointer whitespace-nowrap"
        >
          {t.betaButton}
        </button>
      </form>
      {status === 'success' && (
        <p className="text-emerald-400 text-sm text-center mt-3">
          {t.betaSuccess}
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm text-center mt-3">{t.betaError}</p>
      )}
    </div>
  )
}

const icons = [
  Trophy,
  Bluetooth,
  MonitorSmartphone,
  Smartphone,
  ScanLine,
  WifiOff,
]
const iconColors = [
  'text-yellow-400',
  'text-blue-400',
  'text-emerald-400',
  'text-purple-400',
  'text-rose-400',
  'text-red-400',
]
const iconBgs = [
  'bg-yellow-400/10',
  'bg-blue-400/10',
  'bg-emerald-400/10',
  'bg-purple-400/10',
  'bg-rose-400/10',
  'bg-red-400/10',
]

export function AppFeaturesSection({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).appFeatures

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 border-t border-zinc-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400 border border-emerald-500/20">
            {t.badge}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            {t.title}
          </h2>
          <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            {t.description}
          </p>

          <BetaSignup t={t} />

          <div className="relative w-full max-w-3xl mx-auto mt-12 overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent z-10 pointer-events-none"></div>
            <img
              src="/Gemini_Generated_Image_y804huy804huy804.png"
              alt={t.appPreviewAlt}
              className="w-full h-auto object-cover opacity-90 transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {t.items.map((feature, i) => {
            const Icon = icons[i]
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all hover:border-zinc-700 hover:shadow-2xl hover:shadow-emerald-900/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBgs[i]}`}
                  >
                    <Icon className={`h-6 w-6 ${iconColors[i]}`} />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
