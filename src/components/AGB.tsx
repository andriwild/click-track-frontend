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
              5. Lieferbedingungen
            </h3>
            <p className="leading-relaxed">
              Die Lieferung erfolgt an die vom Kunden im Bestellprozess
              angegebene Lieferadresse. Die Lieferzeit richtet sich nach dem
              Bestimmungsort und der Verfügbarkeit. Bei Lieferverzögerungen wird
              der Kunde umgehend per E-Mail informiert. Der Anbieter haftet
              nicht für Lieferverzögerungen, die durch Dritte (wie Post oder
              Kurierdienste) verursacht werden.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              6. Gewährleistung und Mängelhaftung
            </h3>
            <p className="leading-relaxed">
              Dem Kunden steht die gesetzliche Gewährleistung für
              Mängelreparaturen (in der Schweiz gemäss OR) von 2 Jahren zu. Der
              Kunde ist verpflichtet, die gelieferte Ware umgehend nach Erhalt
              zu prüfen und offensichtliche Mängel unverzüglich schriftlich per
              E-Mail zu melden. Von der Gewährleistung ausgeschlossen sind
              Schäden, die durch unsachgemässe Behandlung, normale Abnutzung
              oder Fremdeinwirkung entstanden sind.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              7. Haftungsausschluss
            </h3>
            <p className="leading-relaxed">
              Die Haftung des Anbieters für leichte Fahrlässigkeit wird
              ausgeschlossen. Die Haftung für Hilfspersonen wird ebenfalls
              vollständig ausgeschlossen. Zwingende gesetzliche Bestimmungen
              (wie z.B. das Produkthaftpflichtgesetz) bleiben unberührt.
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
