import { useState } from 'react'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { CheckoutSection } from './components/CheckoutSection'
import { Imprint } from './components/Imprint'
import { Button } from './components/ui/button'
import { AppFeaturesSection } from './components/AppFeaturesSection'

function App() {
  const [showImprint, setShowImprint] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30 font-sans">
      <header className="w-full py-4 px-4 md:px-6 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="ClickTrack Logo"
            className="h-8 w-8 object-contain rounded-md"
          />
          <span className="font-bold text-xl tracking-tight text-zinc-50">
            ClickTrack <span className="text-emerald-400">Pro</span>
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
          <p>
            © {new Date().getFullYear()} ClickTrack Pro. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 space-x-4">
            <button
              onClick={() => setShowImprint(true)}
              className="hover:text-emerald-400 transition-colors"
            >
              Impressum
            </button>
          </div>
        </div>
      </footer>

      {showImprint && <Imprint onClose={() => setShowImprint(false)} />}
    </div>
  )
}

export default App
