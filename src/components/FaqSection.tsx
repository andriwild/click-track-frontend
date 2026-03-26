import { useState } from 'react'
import { Mail, MessageSquare, Send } from 'lucide-react'
import { getTranslations, type Locale } from '../i18n'

function ContactForm({ t }: { t: ReturnType<typeof getTranslations>['faq'] }) {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !message) return

    const subject = encodeURIComponent('Klikkr Frage')
    const body = encodeURIComponent(`${message}\n\n---\nVon: ${email}`)
    window.location.href = `mailto:support@klikkr.ch?subject=${subject}&body=${body}`
    setStatus('success')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="w-full max-w-xs mx-auto mt-10">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-zinc-100 mb-2">
          {t.contactTitle}
        </h3>
        <p className="text-zinc-400">{t.contactDescription}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
      >
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status !== 'idle') setStatus('idle')
            }}
            placeholder={t.contactEmail}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-100 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-all"
          />
        </div>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-zinc-500" />
          <textarea
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
              if (status !== 'idle') setStatus('idle')
            }}
            placeholder={t.contactMessage}
            rows={4}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-100 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-all resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all cursor-pointer"
        >
          <Send className="w-4 h-4" />
          {t.contactButton}
        </button>
        {status === 'success' && (
          <p className="text-emerald-400 text-sm text-center mt-2">
            {t.contactSuccess}
          </p>
        )}
      </form>
    </div>
  )
}

export function FaqSection({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).faq

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="inline-block rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400 border border-emerald-500/20">
            {t.badge}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            {t.title} <span className="text-emerald-400">{t.titleAccent}</span>
          </h2>
          <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            {t.description}
          </p>
        </div>

        {/* Funny empty state */}
        <div className="max-w-lg mx-auto text-center mb-4 px-4">
          <h3 className="text-xl font-bold text-zinc-100 mb-2">
            {t.emptyTitle}
          </h3>
          <p className="text-zinc-400 leading-relaxed">{t.emptyDescription}</p>
        </div>

        <ContactForm t={t} />
      </div>
    </section>
  )
}
