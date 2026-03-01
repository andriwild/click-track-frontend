import { X } from 'lucide-react'

interface PrivacyProps {
  onClose: () => void
}

export function Privacy({ onClose }: PrivacyProps) {
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
              Datenschutzerklärung
            </h2>
            <p className="text-zinc-400">
              Verantwortliche Stelle: Andri Wild, Im Baumgarten 4, 6252
              Dagmersellen, andri.wild@gmx.ch
            </p>
          </div>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              1. Grundsätzliches
            </h3>
            <p className="leading-relaxed">
              Basierend auf Artikel 13 der schweizerischen Bundesverfassung und
              den datenschutzrechtlichen Bestimmungen des Bundes
              (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer
              Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen
              Daten. Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst
              und behandeln Ihre personenbezogenen Daten vertraulich und
              entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              2. Datenerhebung im Webshop
            </h3>
            <p className="leading-relaxed">
              Für die Abwicklung Ihrer Bestellung (Vertragserfüllung) benötigen
              wir und erheben wir folgende Daten: Vor- und Nachname,
              E-Mail-Adresse, Lieferadresse sowie allfällige Rechnungsadressen.
              Diese Daten nutzen wir ausschliesslich zur Auslieferung der Waren,
              Bearbeitung von Rückfragen und Rechnungsstellung.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              3. Zahlungsabwicklung (Stripe)
            </h3>
            <p className="leading-relaxed">
              Wir speichern selbst <strong>keine</strong> sensiblen
              Zahlungsdaten (Kreditkartennummern etc.). Alle Bezahlvorgänge
              werden hochsicher über den externen Zahlungsdienstleister Stripe
              (Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, Grand
              Canal Dock, Dublin, Irland) verarbeitet. Wenn Sie eine Bestellung
              aufgeben, werden Ihre Bestellinformationen und Zahlungsangaben
              direkt über eine verschlüsselte Verbindung an Stripe übermittelt
              und von Stripe gemäss deren eigenen Datenschutzrichtlinien
              verarbeitet. Dies kann Datenübermittlungen in die USA beinhalten.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              4. Datenbank und Hosting (Supabase)
            </h3>
            <p className="leading-relaxed">
              Die zur Erfüllung des Kaufvertrags von uns gesammelten Kunden- und
              Bestelldaten (ohne Kreditkartendaten) werden sicher mit dem
              Technologieunternehmen Supabase Inc. verwaltet und gespeichert.
              Dies dient der Ausführung und Dokumentation unseres
              Handelsgeschäfts in Erfüllung des Kaufvertrages.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              5. Web Analytics & Cookies
            </h3>
            <p className="leading-relaxed">
              Wir legen Wert auf Datenschutz. Diese Website verwendet keine
              aufdringlichen Tracking-Cookies für Werbezwecke. Soweit auf der
              Webseite anonymisierte Zugriffsstatistiken erhoben werden,
              geschieht dies ohne Speicherung von personenbezogenen
              Tracking-Profilen und dient rein der inhaltlichen Optimierung des
              Shop-Erlebnisses.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              6. Rechte der betroffenen Person
            </h3>
            <p className="leading-relaxed">
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung
              oder Einschränkung der Verarbeitung Ihrer gespeicherten Daten,
              sofern keine gesetzlichen Aufbewahrungspflichten (z.B. steuerliche
              Belege) dem entgegenstehen. Wenden Sie sich hierfür bitte per
              E-Mail an uns.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
