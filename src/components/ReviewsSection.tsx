import { Star, Quote } from 'lucide-react'
import { getTranslations, type Locale } from '../i18n'

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
      </div>
    </section>
  )
}
