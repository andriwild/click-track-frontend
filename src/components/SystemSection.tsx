import { Watch, Bluetooth, Play } from 'lucide-react'
import { getTranslations, type Locale } from '../i18n'

const icons = [Watch, Bluetooth, Play]

export function SystemSection({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).system

  return (
    <section className="w-full py-24 md:py-32 bg-zinc-950 border-t border-zinc-900 text-zinc-50">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl aspect-[4/3]">
            <img
              src="/app_menu_in_woman_hand.png"
              alt={t.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent" />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold uppercase tracking-tighter md:text-4xl lg:text-5xl">
                {t.title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  {t.titleAccent}
                </span>
              </h2>
              <p className="max-w-md text-zinc-400 md:text-lg">{t.description}</p>
            </div>

            <ol className="space-y-6">
              {t.steps.map((step, i) => {
                const Icon = icons[i]
                return (
                  <li key={i} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-emerald-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg font-bold text-zinc-100">
                        {step.title}
                      </h3>
                      <p className="leading-relaxed text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
