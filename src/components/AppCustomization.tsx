import { Music, Palette, SunMoon } from 'lucide-react'
import { getTranslations, type Locale } from '../i18n'

const icons = [Music, Palette, SunMoon]
const iconColors = ['text-pink-400', 'text-cyan-400', 'text-amber-400']
const iconBgs = ['bg-pink-400/10', 'bg-cyan-400/10', 'bg-amber-400/10']

export function AppCustomization({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).appCustomization

  return (
    <section className="w-full bg-zinc-950 text-zinc-50 py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 font-medium backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2" />
            {t.badge}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter uppercase leading-tight">
            {t.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {t.titleAccent}
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {t.items.map(
            (item: { title: string; description: string }, i: number) => {
              const Icon = icons[i]
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:shadow-2xl hover:shadow-emerald-900/20"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBgs[i]}`}
                    >
                      <Icon className={`h-6 w-6 ${iconColors[i]}`} />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-100">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}
