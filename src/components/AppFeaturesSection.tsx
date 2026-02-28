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
            More than just Hardware.
          </h2>
          <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The free Klikkr Pro app turns your wristbands into a powerful,
            intelligent scoreboard. Customize your game, connect instantly, and
            focus entirely on your match.
          </p>
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
