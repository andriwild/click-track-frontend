import { Trophy, Target, Activity } from 'lucide-react'
import { getTranslations, type Locale } from '../i18n'

const icons = [Trophy, Target, Activity]
const images = ['/padel.png', '/squash.png', '/badminton.png']
const colors = [
  'from-blue-500/20 to-blue-900/20',
  'from-emerald-500/20 to-emerald-900/20',
  'from-purple-500/20 to-purple-900/20',
]
const accents = ['text-blue-400', 'text-emerald-400', 'text-purple-400']

export function FeaturesSection({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).features

  return (
    <section
      id="features"
      className="w-full py-24 bg-zinc-950 text-zinc-50 border-t border-zinc-900"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-lg bg-zinc-900 px-3 py-1 text-sm border border-zinc-800 text-zinc-300">
            {t.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">
            {t.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              {t.titleAccent}
            </span>
          </h2>
          <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((feature, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 transition-all hover:bg-zinc-800/80 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={images[index]}
                    alt={feature.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 grayscale-[50%] group-hover:grayscale-0"
                  />
                </div>

                <div className="p-8 relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`p-2 rounded-xl bg-zinc-950 border border-zinc-800 ${accents[index]}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase tracking-wide">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
