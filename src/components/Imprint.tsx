import { X } from 'lucide-react'

interface ImprintProps {
  onClose: () => void
}

export function Imprint({ onClose }: ImprintProps) {
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
          <span className="sr-only">Schliessen</span>
        </button>

        <div className="space-y-8 text-zinc-300">
          <div>
            <h2 className="text-3xl font-bold text-zinc-50 mb-6 uppercase tracking-tight">
              Impressum
            </h2>
            <p className="text-zinc-400">
              Informationen gemäss Art. 5 des Schweizerischen Bundesgesetzes
              über den unlauteren Wettbewerb (UWG):
            </p>
          </div>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              Kontaktadresse
            </h3>
            <address className="not-italic leading-relaxed">
              <strong className="text-emerald-400">Wild Tec</strong>
              <br />
              <p className="text-zinc-500 text-sm mt-2 italic">
                Im Baumgarten 4
                <br />
                6252 Dagmersellen
                <br />
                Schweiz
                <br />
                UID: CHE-386.932.040
              </p>
              <br />
              <br />
              <strong>E-Mail:</strong>{' '}
              <a
                href="mailto:support@klikkr.ch"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                support@klikkr.ch
              </a>
              <br />
              <strong>Webseite:</strong>{' '}
              <a
                href="https://klikkr.ch"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                https://klikkr.ch
              </a>
            </address>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              Haftungsausschluss
            </h3>
            <p className="leading-relaxed">
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen
              Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
              Vollständigkeit der Informationen.
              <br />
              <br />
              Haftungsansprüche gegen den Autor wegen Schäden materieller oder
              immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw.
              Nichtnutzung der veröffentlichten Informationen, durch Missbrauch
              der Verbindung oder durch technische Störungen entstanden sind,
              werden ausgeschlossen.
              <br />
              <br />
              Alle Angebote sind unverbindlich. Der Autor behält es sich
              ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne
              gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder
              die Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              Haftung für Links
            </h3>
            <p className="leading-relaxed">
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
              Verantwortungsbereichs. Es wird jegliche Verantwortung für solche
              Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
              erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              Urheberrechte
            </h3>
            <p className="leading-relaxed">
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
              oder anderen Dateien auf der Website gehören ausschliesslich{' '}
              <strong>Wild Tec</strong> oder den speziell genannten
              Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die
              schriftliche Zustimmung der Urheberrechtsträger im Voraus
              einzuholen.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
