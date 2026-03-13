import {
  PackageOpen,
  Smartphone,
  ScanLine,
  Play,
  MousePointerClick,
  Trophy,
} from 'lucide-react'
import { getTranslations, type Locale } from '../i18n'

const icons = [
  PackageOpen,
  Smartphone,
  ScanLine,
  Play,
  MousePointerClick,
  Trophy,
]
const stepStyles = [
  {
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-500/20',
    glow: 'from-cyan-500/20',
  },
  {
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-500/20',
    glow: 'from-blue-500/20',
  },
  {
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-500/20',
    glow: 'from-emerald-500/20',
  },
  {
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-500/20',
    glow: 'from-purple-500/20',
  },
  {
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-500/20',
    glow: 'from-orange-500/20',
  },
  {
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-500/20',
    glow: 'from-yellow-500/20',
  },
]

export function HowItWorksSection({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).howItWorks

  return (
    <section className="relative w-full py-24 md:py-32 bg-zinc-950 text-zinc-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
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

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-800 via-emerald-500/30 to-zinc-800 hidden lg:block -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {t.steps.map((step, index) => {
              const isEven = index % 2 === 0
              const style = stepStyles[index]
              const Icon = icons[index]
              const number = String(index + 1).padStart(2, '0')
              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div
                    className={`flex-1 w-full max-w-lg ${isEven ? 'lg:text-right' : 'lg:text-left'}`}
                  >
                    <div
                      className={`group relative overflow-hidden rounded-2xl border ${style.border} bg-zinc-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:bg-zinc-800/80 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/5`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${style.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />
                      <div
                        className={`relative z-10 flex items-start gap-5 ${isEven ? 'lg:flex-row-reverse lg:text-right' : ''}`}
                      >
                        <div
                          className={`flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-xl ${style.bg} border ${style.border}`}
                        >
                          <Icon className={`h-7 w-7 ${style.color}`} />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-zinc-100 tracking-tight">
                            {step.title}
                          </h3>
                          <p className="text-zinc-400 leading-relaxed font-medium">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-20 flex-shrink-0 order-first lg:order-none">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${style.border} ${style.bg} backdrop-blur-md shadow-lg`}
                    >
                      <span
                        className={`text-lg font-extrabold ${style.color} tracking-wider`}
                      >
                        {number}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col items-center text-center mt-20 space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-2xl rounded-full" />
            <p className="relative text-2xl md:text-3xl font-bold text-zinc-200 tracking-tight">
              {t.ctaLine1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                {t.ctaAccent}
              </span>
            </p>
          </div>
          <p className="text-zinc-500 text-lg">{t.ctaLine2}</p>
        </div>
      </div>
    </section>
  )
}
