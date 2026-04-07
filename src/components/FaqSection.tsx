import { useState } from 'react'
import { ChevronDown, Mail, MessageSquare, Send } from 'lucide-react'
import { getTranslations, type Locale } from '../i18n'

function FAQAccordionItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`border rounded-2xl transition-all duration-300 ${
        isOpen
          ? 'border-emerald-500/30 bg-zinc-900/80 shadow-lg shadow-emerald-500/5'
          : 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-700'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-bold text-zinc-100 pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-zinc-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-emerald-400' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-6 text-zinc-400 leading-relaxed font-medium">
          {answer}
        </p>
      </div>
    </div>
  )
}

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
    <div className="w-full mx-auto mt-16">
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
    <section className="relative w-full py-24 md:py-32 bg-zinc-950 text-zinc-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] opacity-60 -translate-x-1/2" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-3xl">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 font-medium backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2" />
            {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter uppercase leading-tight">
            {t.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              {t.titleAccent}
            </span>
          </h2>
          <p className="max-w-[550px] text-zinc-400 md:text-xl/relaxed font-medium">
            {t.description}
          </p>
        </div>

        <div className="space-y-4">
          {t.items.map((faq, i) => (
            <FAQAccordionItem
              key={i}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <ContactForm t={t} />
      </div>
    </section>
  )
}
