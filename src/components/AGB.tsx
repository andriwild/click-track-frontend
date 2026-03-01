import { X } from 'lucide-react'

interface AGBProps {
  onClose: () => void
}

export function AGB({ onClose }: AGBProps) {
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
              Allgemeine Geschäftsbedingungen (AGB)
            </h2>
            <p className="text-zinc-400">
              Stand: {new Date().toLocaleDateString('de-CH')}
            </p>
          </div>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              1. Geltungsbereich
            </h3>
            <p className="leading-relaxed">
              Für die Nutzung dieser Webseite sowie die Geschäftsbeziehungen
              zwischen Klikkr (Andri Wild, Im Baumgarten 4, 6252 Dagmersellen,
              nachfolgend "Anbieter") und ihren Kunden gelten die nachfolgenden
              Allgemeinen Geschäftsbedingungen (AGB) in der bei Aufruf der
              Webseite bzw. bei Warenbestellung aktuell abrufbaren und gültigen
              Fassung.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              2. Angebot und Vertragsschluss
            </h3>
            <p className="leading-relaxed">
              Die Darstellung der Produkte im Online-Shop stellt kein rechtlich
              bindendes Angebot, sondern eine Aufforderung zur Bestellung dar.
              Durch Anklicken des "Kaufen"-Buttons oder den durchgeführten
              Zahlungsprozess via Stripe gibt der Kunde eine verbindliche
              Bestellung der auf der Bestellseite aufgelisteten Waren ab. Der
              Kaufvertrag kommt zustande, wenn der Anbieter die Bestellung durch
              eine Auftragsbestätigung per E-Mail unmittelbar nach dem Erhalt
              der Bestellung annimmt oder die Ware ausliefert.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              3. Preise und Versandkosten
            </h3>
            <p className="leading-relaxed">
              Die auf der Produktseite genannten Preise sind in Schweizer
              Franken (CHF) ausgewiesen. Je nach Unternehmensstatus des
              Anbieters wird keine Mehrwertsteuer ausgewiesen (fehlende
              MwSt-Pflicht). Zusätzlich zu den angegebenen Preisen können je
              nach Lieferadresse Versandkosten anfallen. Diese werden im
              Bestellprozess (Checkout) vor Abschluss der Zahlung deutlich
              mitgeteilt.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              4. Zahlungsbedingungen
            </h3>
            <p className="leading-relaxed">
              Die Zahlung erfolgt ausschliesslich sicher und verschlüsselt über
              den Zahlungsdienstleister Stripe. Dem Kunden stehen die von Stripe
              im Checkout angebotenen Zahlungsmethoden (z.B. Kreditkarte, Apple
              Pay, Google Pay) zur Verfügung.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              5. Lieferbedingungen & Eigentumsvorbehalt
            </h3>
            <p className="leading-relaxed">
              Die auf der Webseite angegebenen Lieferfristen sind unverbindliche
              Richtwerte. Lieferverzögerungen begründen unter keinen Umständen
              Schadenersatzansprüche oder ein Recht auf Vertragsrücktritt des
              Käufers. Der Anbieter haftet nicht für Lieferverzögerungen, die
              durch Dritte (wie Post oder Kurierdienste) oder durch höhere
              Gewalt verursacht werden. Die gelieferte Ware bleibt bis zur
              vollständigen Bezahlung Eigentum des Anbieters.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              6. Prüfpflicht und Mängelgewährleistung
            </h3>
            <p className="leading-relaxed">
              Der Kunde ist verpflichtet, die gelieferte Ware unmittelbar nach
              Erhalt auf Mängel und Vollständigkeit zu prüfen. Offensichtliche
              sowie verdeckte Mängel müssen zwingend innerhalb von 3
              Kalendertagen nach Erhalt (oder nach Entdeckung) detailliert und
              schriftlich (per E-Mail) unter Beilage von Beweisfotos gemeldet
              werden. Versäumt der Kunde diese Rügefrist, gilt die Ware als
              mängelfrei genehmigt. Geringfügige, handelsübliche Abweichungen
              (z.B. im Farbton oder in leichten Spaltmassen) stellen keinen
              Mangel dar. Die Gewährleistung des Anbieters beschränkt sich nach
              dessen Wahl strikt auf Nachbesserung (Reparatur) oder
              Ersatzlieferung. Wandelung und Minderung sind explizit
              ausgeschlossen.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              7. Haftungsausschluss
            </h3>
            <p className="leading-relaxed">
              Die Haftung des Anbieters für direkte, indirekte oder Folgeschäden
              (wie entgangener Gewinn, entgangene Sportresultate oder
              immaterielle Schäden) wird – unabhängig von ihrem Rechtsgrund –
              soweit gesetzlich zulässig (d.h. ausser bei rechtswidriger Absicht
              oder grober Fahrlässigkeit) vollumfänglich und explizit
              ausgeschlossen. Ebenso wird jede Haftung für Hilfspersonen
              gestützt auf Art. 101 OR vollständig ausgeschlossen.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              8. Anwendbares Recht & Gerichtsstand
            </h3>
            <p className="leading-relaxed">
              Es gilt ausschliesslich Schweizer Recht unter Ausschluss des
              UN-Kaufrechts (CISG). Gerichtsstand ist der Sitz des Anbieters
              (Dagmersellen, Schweiz), soweit das Gesetz keine zwingenden
              Gerichtsstände vorsieht.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
