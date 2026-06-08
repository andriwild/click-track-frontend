import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import LightRays from './LightRays'
import { getTranslations, type Locale } from '../i18n'
import { track } from '../lib/analytics'

const PERSON_SHIFT = 'translate-x-[8%] sm:translate-x-[12%] lg:translate-x-[16%]'
const PRODUCT_SHIFT = 'translate-x-[4%] sm:translate-x-[6%] lg:translate-x-[8%]'

const slides = [
  {
    src: '/shooting/Andri-Wild-271-2_(2).jpg',
    position: 'object-[65%_center]',
    shift: PERSON_SHIFT,
  },
  {
    src: '/shooting/Andri-Wild-75.jpg',
    position: 'object-center',
    shift: PRODUCT_SHIFT,
  },
  {
    src: '/shooting/Andri-Wild-326.jpg',
    position: 'object-[60%_center]',
    shift: PERSON_SHIFT,
  },
]

const SLIDE_INTERVAL_MS = 6000

export function HeroSection({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).hero
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      SLIDE_INTERVAL_MS,
    )
    return () => clearInterval(id)
  }, [])

  const sports = [
    t.sportPadel,
    t.sportSquash,
    t.sportBadminton,
    t.sportTennis,
    t.sportTableTennis,
    t.sportPickleball,
  ]

  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 text-zinc-50 min-h-[clamp(580px,_64vw,_880px)]">
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={t.productAlt}
          fetchPriority={i === 0 ? 'high' : 'low'}
          loading={i === 0 ? 'eager' : 'lazy'}
          aria-hidden={i === index ? undefined : true}
          className={`absolute inset-0 h-full w-full transform-gpu object-cover transition-opacity duration-1000 ease-in-out will-change-[opacity] ${slide.position} ${slide.shift} ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[3] opacity-50 mix-blend-screen"
      >
        <LightRays
          raysOrigin="right"
          raysColor="#34d399"
          raysSpeed={0.8}
          lightSpread={1.1}
          rayLength={2}
          followMouse
          mouseInfluence={0.06}
          fadeDistance={1.1}
          saturation={1}
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent md:via-zinc-950/55 lg:via-zinc-950/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-t from-zinc-950 to-transparent"
      />

      <div className="container relative z-10 mx-auto flex min-h-[clamp(580px,_64vw,_880px)] max-w-7xl transform-gpu flex-col justify-end px-4 pt-24 pb-12 md:px-6 md:pb-16 lg:pb-24">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-tighter text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.55)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
            {t.titleLine1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {t.titleAccent1}
            </span>
            <br />
            {t.titleLine2}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {t.titleAccent2}
            </span>
          </h1>

          <p className="max-w-xl text-base font-medium text-zinc-200 [text-shadow:0_1px_10px_rgba(0,0,0,0.7)] md:text-lg">
            {t.description}
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
            <Button
              size="lg"
              className="h-14 rounded-full bg-emerald-500 px-8 text-base font-bold uppercase tracking-wide text-zinc-950 transition-transform hover:scale-[1.03] hover:bg-emerald-400"
              onClick={() => {
                track('hero-cta-order')
                document
                  .getElementById('checkout')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {t.ctaPrimary}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <button
              onClick={() => {
                track('hero-cta-learn-more')
                document
                  .getElementById('features')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white/90 transition hover:text-emerald-400 sm:ml-2"
            >
              {t.ctaSecondary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-y-2 pt-4 text-xs font-bold uppercase tracking-[0.22em] text-zinc-300/90">
            {sports.map((sport, i) => (
              <span key={sport} className="flex items-center">
                {sport}
                {i < sports.length - 1 && (
                  <span className="mx-3 h-1 w-1 rounded-full bg-zinc-500" />
                )}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-2" role="tablist" aria-label="Hero slides">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-emerald-400' : 'w-4 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
