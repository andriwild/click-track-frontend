import { useState } from 'react'
import { Star, Quote, User, MessageSquare, Send } from 'lucide-react'
import { getTranslations, type Locale } from '../i18n'
import { track } from '../lib/analytics'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-zinc-700 text-zinc-700'
          }`}
        />
      ))}
    </div>
  )
}

function ReviewForm({
  t,
}: {
  t: ReturnType<typeof getTranslations>['reviews']['form']
}) {
  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [text, setText] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !text) return
    if (rating === 0) {
      setStatus('error')
      return
    }

    const subject = encodeURIComponent(t.mailSubject)
    const body = encodeURIComponent(
      `Name: ${name}\nRating: ${rating}/5\n\n${text}`
    )
    track('review-form-submit', { rating })
    window.location.href = `mailto:support@klikkr.ch?subject=${subject}&body=${body}`
    setStatus('success')
    setName('')
    setRating(0)
    setText('')
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-20">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-zinc-100 mb-2">{t.title}</h3>
        <p className="text-zinc-400">{t.description}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
      >
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              if (status !== 'idle') setStatus('idle')
            }}
            placeholder={t.namePlaceholder}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-100 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/25 transition-all"
          />
        </div>

        <div className="flex items-center gap-3 px-1 py-1">
          <span className="text-sm text-zinc-400 font-medium">
            {t.ratingLabel}
          </span>
          <div
            className="flex items-center gap-1"
            onMouseLeave={() => setHovered(0)}
          >
            {Array.from({ length: 5 }).map((_, i) => {
              const value = i + 1
              const previewing = hovered > 0
              const filled = previewing ? value <= hovered : value <= rating
              const committed = value <= rating
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setRating(value)
                    if (status !== 'idle') setStatus('idle')
                  }}
                  onMouseEnter={() => setHovered(value)}
                  aria-label={`${value}`}
                  aria-pressed={committed}
                  className="p-0.5 transition-transform hover:scale-110 cursor-pointer"
                >
                  <Star
                    className={`h-7 w-7 transition-all ${
                      filled
                        ? committed
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-yellow-400/40 text-yellow-400/40'
                        : 'fill-zinc-700 text-zinc-700'
                    }`}
                  />
                </button>
              )
            })}
            {rating > 0 && (
              <span className="ml-2 text-sm font-bold text-yellow-400">
                {rating}/5
              </span>
            )}
          </div>
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-zinc-500" />
          <textarea
            required
            value={text}
            onChange={(e) => {
              setText(e.target.value)
              if (status !== 'idle') setStatus('idle')
            }}
            placeholder={t.textPlaceholder}
            rows={4}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-100 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/25 transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-semibold text-sm transition-all cursor-pointer"
        >
          <Send className="w-4 h-4" />
          {t.submit}
        </button>

        {status === 'error' && (
          <p className="text-yellow-400 text-sm text-center mt-2">
            {t.ratingRequired}
          </p>
        )}
        {status === 'success' && (
          <p className="text-emerald-400 text-sm text-center mt-2">
            {t.success}
          </p>
        )}
      </form>
    </div>
  )
}

export function ReviewsSection({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).reviews
  const reviews = t.items
  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length

  return (
    <section className="relative w-full py-24 md:py-32 bg-zinc-950 text-zinc-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 font-medium backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-yellow-400 mr-2" />
            {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter uppercase leading-tight">
            {t.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400">
              {t.titleAccent}
            </span>
          </h2>
          <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed font-medium">
            {t.description}
          </p>

          <div className="flex items-center gap-3 pt-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.round(averageRating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-zinc-700 text-zinc-700'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-zinc-100">
              {averageRating.toFixed(1)}
            </span>
            <span className="text-zinc-500 text-sm font-medium">
              ({reviews.length} {t.reviewsCount})
            </span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-xl transition-all duration-500 hover:bg-zinc-800/80 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-500/5"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-zinc-800 group-hover:text-zinc-700 transition-colors" />

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-zinc-100">
                    {review.name}
                  </h3>
                  <StarRating rating={review.rating} />
                </div>

                <p className="text-zinc-400 leading-relaxed font-medium">
                  &ldquo;{review.text}&rdquo;
                </p>

                <p className="text-xs text-zinc-600 font-medium">
                  {review.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center text-center mt-16 space-y-3">
          <p className="text-zinc-500 text-lg font-medium">{t.bottomCta}</p>
        </div>

        <ReviewForm t={t.form} />
      </div>
    </section>
  )
}
