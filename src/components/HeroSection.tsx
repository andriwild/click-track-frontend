import { ArrowRight, Trophy, Activity, Target } from 'lucide-react'
import { Button } from './ui/button'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden w-full pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-zinc-950 text-zinc-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-50 mix-blend-screen" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 font-medium backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                Now available for pre-order
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter uppercase leading-tight">
                Track Every{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Point.
                </span>
                <br />
                Own the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Game.
                </span>
              </h1>
              <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0 font-medium">
                The ultimate tactical score-tracking wristband for Squash,
                Padel, and Football. One click. Zero distractions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-zinc-950 rounded-full transition-transform hover:scale-105"
              >
                Get yours for 49 CHF
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-bold rounded-full border-zinc-700 hover:bg-zinc-800"
              >
                Learn more
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4 text-zinc-500">
              <div className="flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-zinc-400" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Squash
                </span>
              </div>
              <div className="flex items-center">
                <Target className="mr-2 h-5 w-5 text-zinc-400" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Padel
                </span>
              </div>
              <div className="flex items-center">
                <Activity className="mr-2 h-5 w-5 text-zinc-400" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Football
                </span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[500px] items-center justify-center lg:max-w-none">
            <div className="relative w-full aspect-square rounded-full flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-full blur-2xl animate-pulse" />
              <img
                src="https://images.unsplash.com/photo-1575311373937-040b8e1fd5b0?q=80&w=1200&auto=format&fit=crop"
                alt="ClickTrack Pro Wristband Concept"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border border-zinc-800/50 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
