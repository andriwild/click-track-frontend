import { LegalModal } from './legal/LegalModal'
import { PrivacyContent } from './legal/PrivacyContent'
import type { Locale } from '../i18n'

interface PrivacyProps {
  onClose: () => void
  lang?: Locale
}

export function Privacy({ onClose, lang = 'de' }: PrivacyProps) {
  return (
    <LegalModal onClose={onClose} lang={lang}>
      <PrivacyContent lang={lang} />
    </LegalModal>
  )
}
