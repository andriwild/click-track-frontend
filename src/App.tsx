import { useState } from 'react'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { CheckoutSection } from './components/CheckoutSection'
import { Imprint } from './components/Imprint'
import { AGB } from './components/AGB'
import { Privacy } from './components/Privacy'
import { Refunds } from './components/Refunds'
import { Button } from './components/ui/button'
import { AppFeaturesSection } from './components/AppFeaturesSection'

function App() {
  const [showImprint, setShowImprint] = useState(false)
  const [showAGB, setShowAGB] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showRefunds, setShowRefunds] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30 font-sans">
      <header className="w-full py-4 px-4 md:px-6 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/favicon.svg"
            alt="Klikkr Logo"
            className="h-7 w-7 object-contain"
          />
          <span className="font-bold text-xl tracking-tight text-zinc-50">
            Klikkr <span className="text-cyan-400">Pro</span>
          </span>
        </div>
        <Button
          size="sm"
          className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold transition-transform hover:scale-105"
          onClick={() =>
            document
              .getElementById('checkout')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Order Now
        </Button>
      </header>

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AppFeaturesSection />
        <CheckoutSection />
      </main>

      <footer className="w-full py-6 border-t border-zinc-900 bg-zinc-950 relative z-10">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between text-sm text-zinc-500">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p>© {new Date().getFullYear()} Klikkr Pro. All rights reserved.</p>
            <a
              href="mailto:support@klikkr.ch?subject=Website%20Inquiry"
              className="text-xs text-zinc-600 hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>Design & Code by</span>
              <span className="font-medium text-zinc-400 hover:text-emerald-400">
                awild.ch
              </span>
            </a>
          </div>
          <div className="mt-6 sm:mt-0 flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2">
            <button
              onClick={() => setShowAGB(true)}
              className="hover:text-emerald-400 transition-colors"
            >
              AGB
            </button>
            <button
              onClick={() => setShowPrivacy(true)}
              className="hover:text-emerald-400 transition-colors"
            >
              Datenschutz
            </button>
            <button
              onClick={() => setShowRefunds(true)}
              className="hover:text-emerald-400 transition-colors"
            >
              Widerruf
            </button>
            <button
              onClick={() => setShowImprint(true)}
              className="hover:text-emerald-400 transition-colors"
            >
              Impressum
            </button>
          </div>
        </div>
      </footer>

      {showAGB && <AGB onClose={() => setShowAGB(false)} />}
      {showPrivacy && <Privacy onClose={() => setShowPrivacy(false)} />}
      {showRefunds && <Refunds onClose={() => setShowRefunds(false)} />}
      {showImprint && <Imprint onClose={() => setShowImprint(false)} />}
    </div>
  )
}

export default App
