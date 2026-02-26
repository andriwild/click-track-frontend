import { Trophy, Target, Activity } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      title: 'Squash',
      description:
        "Keep track of every brutal rally. One click and you're ready for the next serve.",
      icon: Trophy,
      image: '/squash.png',
      color: 'from-blue-500/20 to-blue-900/20',
      accent: 'text-blue-400',
    },
    {
      title: 'Padel',
      description:
        "Don't lose count during those long duels. Focus on your smash, we track the score.",
      icon: Target,
      image: '/padel.png',
      color: 'from-emerald-500/20 to-emerald-900/20',
      accent: 'text-emerald-400',
    },
    {
      title: 'Football',
      description:
        'Perfect for refs or casual matches. Keep the score straight without breaking a sweat.',
      icon: Activity,
      image: '/football.png',
      color: 'from-purple-500/20 to-purple-900/20',
      accent: 'text-purple-400',
    },
  ]

  return (
    <section
      id="features"
      className="w-full py-24 bg-zinc-950 text-zinc-50 border-t border-zinc-900"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-lg bg-zinc-900 px-3 py-1 text-sm border border-zinc-800 text-zinc-300">
            Engineered for Athletes
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">
            Built for Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              Sport
            </span>
          </h2>
          <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            ClickTrack Pro is designed to be invisible when you don't need it,
            and perfectly reliable when you do. Water resistant, sweat proof,
            and built to survive impacts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 transition-all hover:bg-zinc-800/80 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 grayscale-[50%] group-hover:grayscale-0"
                />
              </div>

              <div className="p-8 relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`p-2 rounded-xl bg-zinc-950 border border-zinc-800 ${feature.accent}`}
                  >
                    <feature.icon className="h-6 w-6" />
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
          ))}
        </div>
      </div>
    </section>
  )
}
