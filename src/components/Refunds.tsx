import { LegalModal } from './legal/LegalModal'
import { RefundsContent } from './legal/RefundsContent'
import type { Locale } from '../i18n'

interface RefundsProps {
  onClose: () => void
  lang?: Locale
}

export function Refunds({ onClose, lang = 'de' }: RefundsProps) {
  return (
    <LegalModal onClose={onClose} lang={lang}>
      <RefundsContent lang={lang} />
    </LegalModal>
  )
}
