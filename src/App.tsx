import { useState } from 'react'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { CheckoutSection } from './components/CheckoutSection'
import { Imprint } from './components/Imprint'

function App() {
  const [showImprint, setShowImprint] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30 font-sans">
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
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
