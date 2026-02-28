import { Check, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

export function CheckoutSection() {
  const features = [
    '2x Klikkr Pro Wristbands',
    'One-click score tracking',
    'Water & sweat resistant',
    'Shockproof silicone build',
    '2-year battery life',
  ]

  return (
    <section
      id="checkout"
      className="w-full py-24 bg-zinc-950 text-zinc-50 relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase relative">
              Ready to <span className="text-emerald-500">Share</span> The Game?
            </h2>
            <p className="text-zinc-400 text-lg">
              Get the Klikkr Pro Duo Pack today. One for you, one for your
              opponent. Never disagree on the score again.
            </p>

            <ul className="space-y-3 pt-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center text-zinc-300">
                  <div className="mr-3 p-1 rounded-full bg-emerald-500/20 text-emerald-500">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 blur-3xl rounded-3xl" />

            <div className="space-y-6">
              <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 backdrop-blur-xl shadow-2xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">Klikkr Pro Single Pack</h3>
                  <p className="text-zinc-400 mt-2">
                    Perfect for individual tracking.
                  </p>
                </div>

                <div className="mb-8 flex items-baseline text-4xl font-extrabold">
                  29 CHF
                  <span className="ml-2 text-lg font-medium text-zinc-500">
                    / one-time
                  </span>
                </div>

                <Button
                  className="w-full h-14 text-lg font-bold bg-zinc-100 hover:bg-white text-zinc-900 transition-transform active:scale-95"
                  onClick={() => {
                    window.location.href =
                      'https://buy.stripe.com/4gM6oG7YF6Ut27ubn31ZS01'
                  }}
                >
                  Buy Single Pack
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="relative rounded-3xl border border-emerald-500/30 bg-zinc-900/80 p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-500 text-zinc-950 font-bold text-xs px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                  Most Popular
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">Klikkr Pro Duo Pack</h3>
                  <p className="text-zinc-400 mt-2">
                    The ultimate sports companion for you and your rival.
                  </p>
                </div>

                <div className="mb-8 flex items-baseline text-4xl font-extrabold">
                  49 CHF
                  <span className="ml-2 text-lg font-medium text-zinc-500">
                    / one-time
                  </span>
                </div>

                <Button
                  className="w-full h-14 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-zinc-950 transition-transform active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  onClick={() => {
                    window.location.href =
                      'https://buy.stripe.com/bJe14m6UB5Qp3bybn31ZS00'
                  }}
                >
                  Buy Duo Pack
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-center text-xs text-zinc-500 mt-4">
                  Secure payment processing by Stripe. Fully encrypted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
