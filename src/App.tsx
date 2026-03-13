import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { CheckoutSection } from './components/CheckoutSection'
import { AppFeaturesSection } from './components/AppFeaturesSection'
import type { Locale } from './i18n'

function App({ lang = 'de' }: { lang?: Locale }) {
  return (
    <>
      <HeroSection lang={lang} />
      <FeaturesSection lang={lang} />
      <AppFeaturesSection lang={lang} />
      <CheckoutSection lang={lang} />
    </>
  )
}

export default App
