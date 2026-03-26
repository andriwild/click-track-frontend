import {
  Smartphone,
  Bluetooth,
  MonitorSmartphone,
  Trophy,
  ScanLine,
  WifiOff,
} from 'lucide-react'
import { getTranslations, type Locale } from '../i18n'

const icons = [
  Trophy,
  Bluetooth,
  MonitorSmartphone,
  Smartphone,
  ScanLine,
  WifiOff,
]
const iconColors = [
  'text-yellow-400',
  'text-blue-400',
  'text-emerald-400',
  'text-purple-400',
  'text-rose-400',
  'text-red-400',
]
const iconBgs = [
  'bg-yellow-400/10',
  'bg-blue-400/10',
  'bg-emerald-400/10',
  'bg-purple-400/10',
  'bg-rose-400/10',
  'bg-red-400/10',
]

export function AppFeaturesSection({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).appFeatures

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 border-t border-zinc-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400 border border-emerald-500/20">
            {t.badge}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            {t.title}
          </h2>
          <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 mb-4">
            <div className="opacity-60 saturate-0 transition-all duration-300 hover:saturate-100 hover:opacity-100 cursor-not-allowed">
              <div className="flex items-center gap-4 bg-zinc-950/60 border border-zinc-700/50 px-6 py-3 rounded-2xl shadow-xl backdrop-blur-sm">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-emerald-500"
                  fill="currentColor"
                >
                  <path d="M4 2.691V21.31c0 .484.554.758.94.464l14.24-10.846a.584.584 0 000-.928L4.94 2.227A.582.582 0 004 2.691z" />
                </svg>
                <div className="text-left">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-400/80 leading-none mb-1.5">
                    {t.storeBadgeLabel}
                  </div>
                  <div className="text-xl font-bold text-zinc-50 leading-none tracking-tight">
                    {t.storeName}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-3xl mx-auto mt-12 overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent z-10 pointer-events-none"></div>
            <img
              src="/Gemini_Generated_Image_y804huy804huy804.png"
              alt={t.appPreviewAlt}
              className="w-full h-auto object-cover opacity-90 transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {t.items.map((feature, i) => {
            const Icon = icons[i]
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all hover:border-zinc-700 hover:shadow-2xl hover:shadow-emerald-900/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBgs[i]}`}
                  >
                    <Icon className={`h-6 w-6 ${iconColors[i]}`} />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
