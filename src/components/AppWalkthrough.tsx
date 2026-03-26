import { useEffect, useRef, useState } from 'react'
import { getTranslations, type Locale } from '../i18n'

export function AppWalkthrough({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).appWalkthrough
  const [activeIndex, setActiveIndex] = useState(0)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    stepsRef.current.forEach((el, i) => {
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i)
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const images =
    t.images ??
    t.steps.map((_: unknown, i: number) => `/smartphone/${i + 1}.png`)

  // Check if the active image is a non-phone image (not inside smartphone mockup)
  const isFrameless =
    images[activeIndex] && !images[activeIndex].startsWith('/smartphone/')

  return (
    <section className="relative w-full bg-zinc-950 text-zinc-50">
      {/* Header */}
      <div className="container px-4 md:px-6 mx-auto max-w-6xl pt-12 md:pt-16 pb-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 font-medium backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2" />
            {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter uppercase leading-tight">
            {t.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {t.titleAccent}
            </span>
          </h2>
          <p className="max-w-[650px] text-zinc-400 md:text-xl/relaxed font-medium">
            {t.description}
          </p>
        </div>
      </div>

      {/* Scrollytelling area */}
      <div className="relative">
        {/* Sticky phone — stays centered behind the text */}
        <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-[260px] sm:w-[280px] md:w-[300px]">
            {/* Phone frame — fades out for frameless images */}
            <div
              className={`relative rounded-[3rem] border-[6px] border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/50 overflow-hidden transition-opacity duration-500 ${
                isFrameless ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-zinc-900 rounded-b-2xl z-20" />
              <div className="relative aspect-[9/19.5] overflow-hidden bg-zinc-900">
                {t.steps.map((step, i) => {
                  if (!images[i]?.startsWith('/smartphone/')) return null
                  return (
                    <img
                      key={i}
                      src={images[i]}
                      alt={step.title}
                      className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ${
                        i === activeIndex
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-105'
                      }`}
                    />
                  )
                })}
              </div>
            </div>

            {/* Frameless image — shown outside the phone frame */}
            {t.steps.map((step, i) => {
              if (images[i]?.startsWith('/smartphone/')) return null
              return (
                <img
                  key={`frameless-${i}`}
                  src={images[i]}
                  alt={step.title}
                  className={`absolute inset-0 w-full h-full object-contain rounded-3xl transition-all duration-500 ${
                    i === activeIndex
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                />
              )
            })}

            <div className="absolute -inset-4 bg-gradient-to-b from-emerald-500/10 via-transparent to-cyan-500/10 rounded-[4rem] blur-2xl -z-10" />
          </div>

          {/* Dot indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {t.steps.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-8 h-3 bg-emerald-500'
                    : 'w-3 h-3 bg-zinc-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scrollable text cards — overlay on top of phone */}
        <div className="relative z-10 -mt-[100vh]">
          <div className="h-[10vh]" />

          {t.steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => {
                stepsRef.current[i] = el
              }}
              className="min-h-[60vh] flex items-center justify-center px-4"
            >
              <div
                className={`max-w-md w-full p-6 md:p-8 rounded-2xl border backdrop-blur-md transition-all duration-500 ${
                  i === activeIndex
                    ? 'border-emerald-500/30 bg-zinc-950/80 shadow-lg shadow-emerald-500/5'
                    : 'border-zinc-800/50 bg-zinc-950/60'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-500 ${
                      i === activeIndex
                        ? 'bg-emerald-500/20 border border-emerald-500/30'
                        : 'bg-zinc-800/50 border border-zinc-700/30'
                    }`}
                  >
                    <span
                      className={`text-lg font-extrabold transition-colors duration-500 ${
                        i === activeIndex ? 'text-emerald-400' : 'text-zinc-500'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3
                      className={`text-xl font-bold tracking-tight transition-colors duration-500 ${
                        i === activeIndex ? 'text-zinc-100' : 'text-zinc-400'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`leading-relaxed font-medium transition-colors duration-500 ${
                        i === activeIndex ? 'text-zinc-300' : 'text-zinc-500'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="h-[40vh]" />
        </div>
      </div>
    </section>
  )
}
