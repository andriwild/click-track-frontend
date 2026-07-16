import { LegalModal } from './legal/LegalModal'
import { AGBContent } from './legal/AGBContent'
import type { Locale } from '../i18n'

interface AGBProps {
  onClose: () => void
  lang?: Locale
}

export function AGB({ onClose, lang = 'de' }: AGBProps) {
  return (
    <LegalModal onClose={onClose} lang={lang}>
      <AGBContent lang={lang} />
    </LegalModal>
  )
}
