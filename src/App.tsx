import { HeroSection } from './components/HeroSection'
import { SystemSection } from './components/SystemSection'
import { FeaturesSection } from './components/FeaturesSection'
import { CheckoutSection } from './components/CheckoutSection'
import { AppFeaturesSection } from './components/AppFeaturesSection'
import { AppStorySections } from './components/AppStorySections'
import { GameModes } from './components/GameModes'
import { NewsletterSection } from './components/NewsletterForm'
import type { Locale } from './i18n'

function App({ lang = 'de' }: { lang?: Locale }) {
  return (
    <>
      <HeroSection lang={lang} />
      <FeaturesSection lang={lang} />
      <SystemSection lang={lang} />
      {/* The mode story is the strongest thing the app has and used to
          sit on the how-it-works subpage. It belongs on the front. */}
      <GameModes lang={lang} />
      <AppStorySections lang={lang} />
      <AppFeaturesSection lang={lang} />
      <CheckoutSection lang={lang} />
      <NewsletterSection lang={lang} />
    </>
  )
}

export default App
