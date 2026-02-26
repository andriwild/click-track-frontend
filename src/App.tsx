import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { CheckoutSection } from './components/CheckoutSection'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30 font-sans">
      <main>
        <HeroSection />
        <FeaturesSection />
        <CheckoutSection />
      </main>
    </div>
  )
}

export default App
