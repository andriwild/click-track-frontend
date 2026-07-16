import { LegalModal } from './legal/LegalModal'
import { ImprintContent } from './legal/ImprintContent'
import type { Locale } from '../i18n'

interface ImprintProps {
  onClose: () => void
  lang?: Locale
}

export function Imprint({ onClose, lang = 'de' }: ImprintProps) {
  return (
    <LegalModal onClose={onClose} lang={lang}>
      <ImprintContent lang={lang} />
    </LegalModal>
  )
}
