import {
  Smartphone,
  Bluetooth,
  MonitorSmartphone,
  Trophy,
  ScanLine,
  WifiOff,
} from 'lucide-react'
import { getTranslations, type Locale } from '../i18n'
import { track } from '../lib/analytics'

const APP_STORE_URL = 'https://apps.apple.com/ch/app/klikkr/id6761069158'
const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=ch.wild.klikkr'

function StoreBadges({
  t,
}: {
  t: ReturnType<typeof getTranslations>['appFeatures']
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-4">
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track('store-click-ios')}
        className="transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-lg"
        aria-label={t.downloadAppStore}
      >
        <img
          src="/badges/app-store-badge.svg"
          alt={t.downloadAppStore}
          className="h-12 w-auto"
          width={160}
          height={48}
          loading="lazy"
        />
      </a>
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track('store-click-android')}
        className="transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-lg"
        aria-label={t.downloadGooglePlay}
      >
        <img
          src="/badges/google-play-badge.png"
          alt={t.downloadGooglePlay}
          className="h-[72px] w-auto -my-3"
          width={186}
          height={72}
          loading="lazy"
        />
      </a>
    </div>
  )
}

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

          <StoreBadges t={t} />

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
