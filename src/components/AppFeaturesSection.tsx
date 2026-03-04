import {
  Smartphone,
  Bluetooth,
  MonitorSmartphone,
  Volume2,
  Trophy,
  ScanLine,
} from 'lucide-react'

export function AppFeaturesSection() {
  const features = [
    {
      title: 'Intelligent Scoring',
      description:
        'Auto win-detection and optional "Win by Two" rules for complete peace of mind.',
      icon: Trophy,
      color: 'text-yellow-400',
      bg: 'bg-yellow-400/10',
    },
    {
      title: 'Seamless Connectivity',
      description:
        'Instant BLE pairing, QR-code scanner, and single-beacon support for solo gadgets.',
      icon: Bluetooth,
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
    },
    {
      title: 'Flexible Displays',
      description:
        'Table/Mirrored, Portrait, and Landscape modes. Perfectly readable from any angle.',
      icon: MonitorSmartphone,
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10',
    },
    {
      title: 'Intuitive Manual Control',
      description:
        'Easy full-screen swipe-to-score gestures directly on your device display.',
      icon: Smartphone,
      color: 'text-purple-400',
      bg: 'bg-purple-400/10',
    },
    {
      title: 'Audio Feedback',
      description:
        'Distinctive sounds for every point scored and a unique match point notification.',
      icon: Volume2,
      color: 'text-orange-400',
      bg: 'bg-orange-400/10',
    },
    {
      title: 'Quick QR Pairing',
      description:
        'Skip the Bluetooth settings. Scan the barcode on the wristband and you are ready.',
      icon: ScanLine,
      color: 'text-rose-400',
      bg: 'bg-rose-400/10',
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 border-t border-zinc-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400 border border-emerald-500/20">
            Digital Companion App
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            The Ultimate Companion App.
          </h2>
          <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            The free Klikkr Pro app turns your Bluetooth wristbands into a
            powerful, intelligent smart scoreboard. Perfectly designed for
            fast-paced racket sports like Padel, Tennis, and Squash.
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
                    Coming soon for Android
                  </div>
                  <div className="text-xl font-bold text-zinc-50 leading-none tracking-tight">
                    Google Play
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-3xl mx-auto mt-12 overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent z-10 pointer-events-none"></div>
            <img
              src="/Gemini_Generated_Image_y804huy804huy804.png"
              alt="Klikkr App Preview Interface"
              className="w-full h-auto object-cover opacity-90 transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all hover:border-zinc-700 hover:shadow-2xl hover:shadow-emerald-900/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg}`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-zinc-100">
                  {feature.title}
                </h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
