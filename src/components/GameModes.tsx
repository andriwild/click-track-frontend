import { useEffect, useRef, useState } from 'react'
import { Hand, Watch, Trophy } from 'lucide-react'
import { getTranslations, type Locale } from '../i18n'
import { track } from '../lib/analytics'

const modeKeys = ['swipe', 'oneBeacon', 'twoBeacons', 'tournament'] as const
type ModeKey = (typeof modeKeys)[number]

const modeIcons: Record<ModeKey, typeof Hand> = {
  swipe: Hand,
  oneBeacon: Watch,
  twoBeacons: Watch,
  tournament: Trophy,
}

const modeColors: Record<
  ModeKey,
  { active: string; glow: string; accent: string }
> = {
  swipe: {
    active: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400',
    glow: 'from-cyan-500/10 to-blue-500/10',
    accent: 'bg-cyan-500',
  },
  oneBeacon: {
    active: 'border-blue-500/40 bg-blue-500/10 text-blue-400',
    glow: 'from-blue-500/10 to-indigo-500/10',
    accent: 'bg-blue-500',
  },
  twoBeacons: {
    active: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
    glow: 'from-emerald-500/10 to-cyan-500/10',
    accent: 'bg-emerald-500',
  },
  tournament: {
    active: 'border-yellow-500/40 bg-yellow-500/10 text-yellow-400',
    glow: 'from-yellow-500/10 to-orange-500/10',
    accent: 'bg-yellow-500',
  },
}

export function GameModes({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).gameModes
  const [activeMode, setActiveMode] = useState<ModeKey>('swipe')
  const [activeStep, setActiveStep] = useState(0)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const mode = t.modes[activeMode]
  const steps = mode.steps
  const images = mode.images
  const colors = modeColors[activeMode]

  // Scrollytelling: observe which step card is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    stepsRef.current.forEach((el, i) => {
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(i)
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [activeMode])

  // Reset refs when mode changes
  useEffect(() => {
    stepsRef.current = []
  }, [activeMode])

  function switchMode(key: ModeKey) {
    track('gamemode-switch', { mode: key })
    setActiveMode(key)
    setActiveStep(0)
    // Scroll back to the top of the section
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-zinc-950 text-zinc-50"
    >
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

        {/* Mode tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {modeKeys.map((key) => {
            const Icon = modeIcons[key]
            const isActive = key === activeMode
            const modeData = t.modes[key]
            return (
              <button
                key={key}
                onClick={() => switchMode(key)}
                className={`flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 rounded-full border font-semibold text-sm md:text-base transition-all duration-300 cursor-pointer ${
                  isActive
                    ? modeColors[key].active
                    : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300'
                }`}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                {modeData.label}
              </button>
            )
          })}
        </div>

        {/* Mode description */}
        <p className="text-center text-zinc-400 font-medium mt-6 max-w-lg mx-auto">
          {mode.description}
        </p>
      </div>

      {/* Scrollytelling area */}
      <div className="relative">
        {/* Sticky phone — stays centered behind the text */}
        <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-[260px] sm:w-[280px] md:w-[300px]">
            <div className="relative rounded-[3rem] border-[6px] border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/50 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-zinc-900 rounded-b-2xl z-20" />
              <div className="relative aspect-[9/19.5] overflow-hidden bg-zinc-900">
                {images.map((src: string, i: number) => (
                  <img
                    key={`${activeMode}-${i}`}
                    src={src}
                    alt={steps[i]?.title ?? ''}
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ${
                      i === activeStep
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* Glow behind phone */}
            <div
              className={`absolute -inset-4 bg-gradient-to-b ${colors.glow} rounded-[4rem] blur-2xl -z-10 transition-all duration-700`}
            />
          </div>

          {/* Dot indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {steps.map((_: unknown, i: number) => (
              <div
                key={`${activeMode}-dot-${i}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeStep
                    ? `w-8 h-3 ${colors.accent}`
                    : 'w-3 h-3 bg-zinc-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scrollable text cards — overlay on top of phone */}
        <div className="relative z-10 -mt-[100vh]">
          <div className="h-[10vh]" />

          {steps.map(
            (step: { title: string; description: string }, i: number) => (
              <div
                key={`${activeMode}-card-${i}`}
                ref={(el) => {
                  stepsRef.current[i] = el
                }}
                className="min-h-[60vh] flex items-center justify-center px-4"
              >
                <div
                  className={`max-w-md w-full p-6 md:p-8 rounded-2xl border backdrop-blur-md transition-all duration-500 ${
                    i === activeStep
                      ? `${colors.active} shadow-lg`
                      : 'border-zinc-800/50 bg-zinc-950/60'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-500 ${
                        i === activeStep
                          ? 'bg-white/10 border border-white/20'
                          : 'bg-zinc-800/50 border border-zinc-700/30'
                      }`}
                    >
                      <span
                        className={`text-lg font-extrabold transition-colors duration-500 ${
                          i === activeStep ? 'text-white' : 'text-zinc-500'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3
                        className={`text-xl font-bold tracking-tight transition-colors duration-500 ${
                          i === activeStep ? 'text-zinc-100' : 'text-zinc-400'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`leading-relaxed font-medium transition-colors duration-500 ${
                          i === activeStep ? 'text-zinc-300' : 'text-zinc-500'
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}

          <div className="h-[40vh]" />
        </div>
      </div>
    </section>
  )
}
