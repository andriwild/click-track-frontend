import { X } from 'lucide-react'

interface RefundsProps {
  onClose: () => void
}

export function Refunds({ onClose }: RefundsProps) {
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
              Widerrufsrecht & Rückgaben
            </h2>
            <p className="text-zinc-400">
              Informationen zur Rückgabe Ihres Klikkr Armbands.
            </p>
          </div>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              Kein gesetzliches Widerrufsrecht in der Schweiz
            </h3>
            <p className="leading-relaxed">
              Das Schweizerische Obligationenrecht (OR) sieht für den
              Online-Handel kein allgemeines gesetzliches Widerrufsrecht oder
              Rückgaberecht vor. Der Kaufvertrag ist nach erfolgreicher
              Bestellung grundsätzlich bindend.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              Freiwilliges 14-tägiges Rückgaberecht
            </h3>
            <p className="leading-relaxed">
              Die Zufriedenheit unserer Kunden ist uns dennoch wichtig. Deshalb
              gewähren wir Ihnen freiwillig ein Rückgaberecht innerhalb von{' '}
              <strong>14 Tagen</strong> nach Erhalt der Ware.
            </p>
            <p className="leading-relaxed mt-4">
              Um eine Rückgabe in die Wege zu leiten, kontaktieren Sie uns
              zwingend vorab per E-Mail unter
              <span className="text-emerald-400 ml-1">support@klikkr.ch</span>,
              damit wir Ihnen die genaue Vorgehensweise (Rücksendeadresse)
              mitteilen können.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              Bedingungen für die freiwillige Rückgabe
            </h3>
            <div className="leading-relaxed space-y-2">
              <p>
                Sollte der Anbieter einer freiwilligen Rücknahme zustimmen, ist
                diese an folgende zwingende, kumulative Bedingungen geknüpft:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-zinc-400">
                <li>
                  Die Frist von 14 Tagen nach Empfang wird strikt eingehalten.
                </li>
                <li>
                  Der Klikkr ist{' '}
                  <strong>
                    komplett ungenutzt, versiegelt und in der ungeöffneten
                    Originalverpackung
                  </strong>
                  . Sobald das Siegel oder die Verpackung geöffnet wurde,
                  erlischt jegliches Rückgaberecht.
                </li>
                <li>
                  Das Rücksendeporto sowie das Risiko des Rückversands gehen
                  vollständig zu Lasten des Käufers.
                </li>
                <li>
                  Der Anbieter behält sich vor, eine Bearbeitungsgebühr
                  (Restocking Fee) von bis zu 20% des Kaufpreises, mindestens
                  aber die entstandenen initialen Versand- und Zahlungsgebühren,
                  vom Erstattungsbetrag abzuziehen.
                </li>
              </ul>
            </div>
            <p className="leading-relaxed mt-4">
              Trifft die Ware geöffnet, beschädigt oder in anderweitig genutztem
              Zustand bei uns ein, wird die Rücknahme verweigert und die Ware
              auf Kosten des Käufers retourniert.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              Rückerstattung
            </h3>
            <p className="leading-relaxed">
              Nach Erhalt und eingehender Prüfung der einwandfreien Retoure
              erstatten wir Ihnen den verbleibenden Kaufpreis (abzüglich aller
              Gebühren) innerhalb von 30 Tagen über dieselbe Zahlungsmethode
              zurück.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              Defekte Ware (Garantie)
            </h3>
            <p className="leading-relaxed">
              Weist Ihr Gerät einen nachweislichen Material- oder
              Herstellungsfehler auf, kontaktieren Sie uns bitte umgehend (max.
              3 Tage nach Entdeckung) per E-Mail. Bei berechtigten Reklamationen
              behält sich der Anbieter allein das Recht vor, nach eigenem
              Ermessen den Mangel durch kostenfreie Reparatur, Ersatzlieferung
              oder vollständige bzw. teilweise Rückerstattung des Kaufpreises zu
              beheben. Ein Anspruch des Käufers auf eine bestimmte Art der
              Mängelbehebung (z.B. Ersatz anstatt Reparatur) besteht
              ausdrücklich nicht.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
