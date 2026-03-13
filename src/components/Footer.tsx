import { useState } from 'react'
import { Imprint } from './Imprint'
import { AGB } from './AGB'
import { Privacy } from './Privacy'
import { Refunds } from './Refunds'
import { getTranslations, type Locale } from '../i18n'

export function Footer({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).footer
  const [showImprint, setShowImprint] = useState(false)
  const [showAGB, setShowAGB] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showRefunds, setShowRefunds] = useState(false)

  return (
    <>
      <footer className="w-full py-6 border-t border-zinc-900 bg-zinc-950 relative z-10">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between text-sm text-zinc-500">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p>
              © {new Date().getFullYear()} Klikkr Pro. {t.allRightsReserved}
            </p>
            <a
              href="mailto:support@klikkr.ch?subject=Website%20Inquiry"
              className="text-xs text-zinc-600 hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>{t.designBy}</span>
              <span className="font-medium text-zinc-400 hover:text-emerald-400">
                awild.ch
              </span>
            </a>
          </div>
          <div className="mt-6 sm:mt-0 flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2">
            <button
              onClick={() => setShowAGB(true)}
              className="hover:text-emerald-400 transition-colors"
            >
              {t.agb}
            </button>
            <button
              onClick={() => setShowPrivacy(true)}
              className="hover:text-emerald-400 transition-colors"
            >
              {t.privacy}
            </button>
            <button
              onClick={() => setShowRefunds(true)}
              className="hover:text-emerald-400 transition-colors"
            >
              {t.refunds}
            </button>
            <button
              onClick={() => setShowImprint(true)}
              className="hover:text-emerald-400 transition-colors"
            >
              {t.imprint}
            </button>
          </div>
        </div>
      </footer>

      {showAGB && <AGB onClose={() => setShowAGB(false)} />}
      {showPrivacy && <Privacy onClose={() => setShowPrivacy(false)} />}
      {showRefunds && <Refunds onClose={() => setShowRefunds(false)} />}
      {showImprint && <Imprint onClose={() => setShowImprint(false)} />}
    </>
  )
}
