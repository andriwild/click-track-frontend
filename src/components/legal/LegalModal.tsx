import { X } from 'lucide-react'
import type { ReactNode } from 'react'
import type { Locale } from '../../i18n'

interface LegalModalProps {
  onClose: () => void
  lang?: Locale
  children: ReactNode
}

export function LegalModal({
  onClose,
  lang = 'de',
  children,
}: LegalModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6 animate-in fade-in duration-300">
      <div
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-zinc-800 bg-zinc-900 p-6 sm:p-10 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-zinc-50 hover:bg-zinc-700 transition-colors"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">
            {lang === 'de' ? 'Schliessen' : 'Close'}
          </span>
        </button>

        {children}
      </div>
    </div>
  )
}
