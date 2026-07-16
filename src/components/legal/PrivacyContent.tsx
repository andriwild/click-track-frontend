import type { Locale } from '../../i18n'

function PrivacyDe() {
  return (
    <div className="space-y-8 text-zinc-300">
      <div>
        <h2 className="text-3xl font-bold text-zinc-50 mb-6 uppercase tracking-tight">
          Datenschutzerklärung
        </h2>
        <p className="text-zinc-400">
          Verantwortliche Stelle: Wild Tec, Inhaber Andri Rafael Wild, Im
          Baumgarten 4, 6252 Dagmersellen, Schweiz, UID: CHE-386.932.040,
          support@klikkr.ch. Stand: 16. Juli 2026
        </p>
      </div>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          1. Grundsätzliches und Rechtsgrundlagen
        </h3>
        <p className="leading-relaxed">
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und
          behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
          den gesetzlichen Datenschutzvorschriften, insbesondere dem
          Schweizerischen Datenschutzgesetz (DSG), sowie dieser
          Datenschutzerklärung. Soweit wir Waren an Personen in der EU oder in
          Norwegen liefern, beachten wir zusätzlich die Vorgaben der
          Datenschutz-Grundverordnung (DSGVO).
        </p>
        <p className="leading-relaxed mt-4">
          Wir verarbeiten Personendaten auf folgenden Grundlagen: zur Erfüllung
          eines Vertrags oder vorvertraglicher Massnahmen (z.B.
          Bestellabwicklung, Art. 6 Abs. 1 lit. b DSGVO), aufgrund Ihrer
          Einwilligung (z.B. Newsletter, Art. 6 Abs. 1 lit. a DSGVO), zur
          Erfüllung rechtlicher Pflichten (z.B. Buchführung, Art. 6 Abs. 1 lit.
          c DSGVO) sowie aufgrund unseres berechtigten Interesses an einem
          sicheren und stabilen Betrieb der Webseite (Art. 6 Abs. 1 lit. f
          DSGVO).
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          2. Hosting der Webseite (GitHub Pages)
        </h3>
        <p className="leading-relaxed">
          Diese Webseite wird über GitHub Pages bereitgestellt, einen Dienst der
          GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107,
          USA. Beim Aufruf der Webseite verarbeitet GitHub technisch notwendige
          Daten wie IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp und
          aufgerufene Seite (Server-Logs). Diese Verarbeitung dient der
          Auslieferung und der Sicherheit der Webseite und beruht auf unserem
          berechtigten Interesse an einem zuverlässigen Betrieb.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          3. Datenerhebung im Webshop
        </h3>
        <p className="leading-relaxed">
          Für die Abwicklung Ihrer Bestellung (Vertragserfüllung) erheben wir
          folgende Daten: Vor- und Nachname, E-Mail-Adresse, Lieferadresse sowie
          allfällige Rechnungsadressen. Diese Daten nutzen wir ausschliesslich
          zur Auslieferung der Waren, Bearbeitung von Rückfragen und
          Rechnungsstellung. Bestell- und Rechnungsdaten bewahren wir gemäss den
          gesetzlichen Aufbewahrungspflichten (insbesondere Art. 958f OR)
          während 10 Jahren auf und löschen sie danach.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          4. Zahlungsabwicklung (Stripe)
        </h3>
        <p className="leading-relaxed">
          Wir speichern selbst <strong>keine</strong> sensiblen Zahlungsdaten
          (Kreditkartennummern etc.). Alle Bezahlvorgänge werden über den
          externen Zahlungsdienstleister Stripe (Stripe Payments Europe, Ltd., 1
          Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland)
          verarbeitet. Wenn Sie eine Bestellung aufgeben, werden Ihre
          Bestellinformationen und Zahlungsangaben direkt über eine
          verschlüsselte Verbindung an Stripe übermittelt und von Stripe gemäss
          deren eigenen Datenschutzrichtlinien verarbeitet. Dies kann
          Datenübermittlungen in die USA beinhalten (siehe Ziffer 9).
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          5. Datenbank und Backend (Supabase)
        </h3>
        <p className="leading-relaxed">
          Die zur Erfüllung des Kaufvertrags von uns gesammelten Kunden- und
          Bestelldaten (ohne Kreditkartendaten) werden mit Diensten von Supabase
          Inc. (USA) verwaltet und gespeichert. Dies dient der Ausführung und
          Dokumentation unseres Handelsgeschäfts in Erfüllung des Kaufvertrages.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          6. Newsletter
        </h3>
        <p className="leading-relaxed">
          Wenn Sie sich für unseren Newsletter anmelden (über das Formular auf
          der Webseite oder die Checkbox im Warenkorb), verarbeiten wir Ihre
          E-Mail-Adresse auf Grundlage Ihrer Einwilligung, um Ihnen
          Informationen zu Klikkr Produkten und Neuigkeiten zuzusenden. Sie
          können sich jederzeit abmelden, etwa über den Abmeldelink im
          Newsletter oder per E-Mail an support@klikkr.ch. Nach der Abmeldung
          löschen wir Ihre E-Mail-Adresse aus dem Verteiler.
        </p>
        <p className="leading-relaxed mt-4">
          Für die Verwaltung und den Versand des Newsletters nutzen wir Brevo,
          einen Dienst der Sendinblue GmbH, Köpenicker Strasse 126, 10179
          Berlin, Deutschland. Ihre E-Mail-Adresse wird dazu an Brevo
          übermittelt und dort gespeichert.
        </p>
        <p className="leading-relaxed mt-4">
          Zum Schutz des Anmeldeformulars vor Missbrauch setzen wir Cloudflare
          Turnstile ein, einen Dienst der Cloudflare Inc., 101 Townsend Street,
          San Francisco, CA 94107, USA. Dabei werden technische Daten (z.B.
          IP-Adresse und Browserinformationen) an Cloudflare übermittelt, um zu
          prüfen, ob die Anmeldung durch einen Menschen erfolgt.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          7. Kontaktaufnahme
        </h3>
        <p className="leading-relaxed">
          Wenn Sie uns per E-Mail oder über das Kontaktformular kontaktieren,
          verarbeiten wir die von Ihnen mitgeteilten Angaben (E-Mail-Adresse,
          Inhalt der Nachricht) zur Bearbeitung Ihrer Anfrage. Diese Daten
          löschen wir, sobald sie für die Bearbeitung nicht mehr erforderlich
          sind und keine gesetzlichen Aufbewahrungspflichten bestehen.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          8. Web Analytics & Cookies
        </h3>
        <p className="leading-relaxed">
          Für Zugriffsstatistiken verwenden wir Umami, eine
          datenschutzfreundliche Analysesoftware, die wir selbst auf unserer
          eigenen Infrastruktur (analytics.klikkr.ch) betreiben. Umami setzt
          keine Cookies, erstellt keine personenbezogenen Tracking-Profile und
          speichert IP-Adressen nicht dauerhaft. Die erhobenen Statistiken sind
          anonymisiert und dienen rein der inhaltlichen Optimierung des
          Shop-Erlebnisses. Diese Webseite verwendet keine Tracking-Cookies für
          Werbezwecke.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          9. Datenübermittlung ins Ausland
        </h3>
        <p className="leading-relaxed">
          Bei einzelnen der genannten Dienstleister (Stripe, GitHub, Cloudflare,
          Supabase) können Personendaten in die USA oder in andere Drittstaaten
          übermittelt werden. Die Übermittlung stützt sich auf anerkannte
          Garantien, insbesondere das Swiss-U.S. bzw. EU-U.S. Data Privacy
          Framework oder die Standardvertragsklauseln der Europäischen
          Kommission.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          10. Rechte der betroffenen Person
        </h3>
        <p className="leading-relaxed">
          Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung
          oder Einschränkung der Verarbeitung Ihrer gespeicherten Daten sowie
          auf Datenherausgabe bzw. Datenübertragbarkeit, sofern keine
          gesetzlichen Aufbewahrungspflichten (z.B. steuerliche Belege) dem
          entgegenstehen. Erteilte Einwilligungen können Sie jederzeit mit
          Wirkung für die Zukunft widerrufen. Wenden Sie sich hierfür bitte per
          E-Mail an support@klikkr.ch.
        </p>
        <p className="leading-relaxed mt-4">
          Zudem haben Sie das Recht, sich bei einer Aufsichtsbehörde zu
          beschweren: in der Schweiz beim Eidgenössischen Datenschutz- und
          Öffentlichkeitsbeauftragten (EDÖB), für Personen in der EU bei der
          Datenschutzaufsichtsbehörde ihres Aufenthaltsstaates.
        </p>
      </section>
    </div>
  )
}

function PrivacyEn() {
  return (
    <div className="space-y-8 text-zinc-300">
      <div>
        <h2 className="text-3xl font-bold text-zinc-50 mb-6 uppercase tracking-tight">
          Privacy Policy
        </h2>
        <p className="text-zinc-400">
          Controller: Wild Tec, owner Andri Rafael Wild, Im Baumgarten 4, 6252
          Dagmersellen, Switzerland, UID: CHE-386.932.040, support@klikkr.ch.
          Last updated: July 16, 2026
        </p>
      </div>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          1. General principles and legal bases
        </h3>
        <p className="leading-relaxed">
          We take the protection of your personal data very seriously and treat
          your personal data confidentially and in accordance with the statutory
          data protection regulations, in particular the Swiss Federal Act on
          Data Protection (FADP), and this privacy policy. Where we deliver
          goods to persons in the EU or Norway, we additionally comply with the
          requirements of the General Data Protection Regulation (GDPR).
        </p>
        <p className="leading-relaxed mt-4">
          We process personal data on the following bases: for the performance
          of a contract or pre-contractual measures (e.g. order processing, Art.
          6 para. 1 lit. b GDPR), based on your consent (e.g. newsletter, Art. 6
          para. 1 lit. a GDPR), to comply with legal obligations (e.g.
          accounting, Art. 6 para. 1 lit. c GDPR) and based on our legitimate
          interest in the secure and stable operation of the website (Art. 6
          para. 1 lit. f GDPR).
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          2. Website hosting (GitHub Pages)
        </h3>
        <p className="leading-relaxed">
          This website is hosted via GitHub Pages, a service of GitHub Inc., 88
          Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. When you
          access the website, GitHub processes technically necessary data such
          as IP address, date and time of access, browser type and the page
          accessed (server logs). This processing serves the delivery and
          security of the website and is based on our legitimate interest in
          reliable operation.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          3. Data collected in the web shop
        </h3>
        <p className="leading-relaxed">
          To process your order (performance of the contract), we collect the
          following data: first and last name, email address, delivery address
          and, where applicable, billing address. We use this data exclusively
          to deliver the goods, handle inquiries and issue invoices. We retain
          order and invoice data in accordance with statutory retention
          obligations (in particular Art. 958f of the Swiss Code of Obligations)
          for 10 years and delete it thereafter.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          4. Payment processing (Stripe)
        </h3>
        <p className="leading-relaxed">
          We do <strong>not</strong> store any sensitive payment data (credit
          card numbers etc.) ourselves. All payment transactions are processed
          by the external payment service provider Stripe (Stripe Payments
          Europe, Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin,
          Ireland). When you place an order, your order information and payment
          details are transmitted directly to Stripe via an encrypted connection
          and processed by Stripe in accordance with its own privacy policies.
          This may involve data transfers to the USA (see section 9).
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          5. Database and backend (Supabase)
        </h3>
        <p className="leading-relaxed">
          The customer and order data collected by us for the performance of the
          purchase contract (excluding credit card data) is managed and stored
          using services of Supabase Inc. (USA). This serves the execution and
          documentation of our commercial business in performance of the
          purchase contract.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          6. Newsletter
        </h3>
        <p className="leading-relaxed">
          If you sign up for our newsletter (via the form on the website or the
          checkbox in the cart), we process your email address based on your
          consent in order to send you information about Klikkr products and
          news. You can unsubscribe at any time, for example via the unsubscribe
          link in the newsletter or by email to support@klikkr.ch. After
          unsubscribing, we delete your email address from the mailing list.
        </p>
        <p className="leading-relaxed mt-4">
          We use Brevo, a service of Sendinblue GmbH, Köpenicker Strasse 126,
          10179 Berlin, Germany, to manage and send the newsletter. Your email
          address is transmitted to and stored by Brevo for this purpose.
        </p>
        <p className="leading-relaxed mt-4">
          To protect the signup form against abuse, we use Cloudflare Turnstile,
          a service of Cloudflare Inc., 101 Townsend Street, San Francisco, CA
          94107, USA. Technical data (e.g. IP address and browser information)
          is transmitted to Cloudflare to verify that the signup is performed by
          a human.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">7. Contact</h3>
        <p className="leading-relaxed">
          If you contact us by email or via the contact form, we process the
          information you provide (email address, content of the message) to
          handle your inquiry. We delete this data as soon as it is no longer
          required for processing and no statutory retention obligations apply.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          8. Web analytics & cookies
        </h3>
        <p className="leading-relaxed">
          For access statistics we use Umami, a privacy-friendly analytics
          software that we operate ourselves on our own infrastructure
          (analytics.klikkr.ch). Umami does not set cookies, does not create
          personal tracking profiles and does not permanently store IP
          addresses. The statistics collected are anonymised and serve solely to
          optimise the shop experience. This website does not use tracking
          cookies for advertising purposes.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          9. Data transfers abroad
        </h3>
        <p className="leading-relaxed">
          Some of the service providers mentioned (Stripe, GitHub, Cloudflare,
          Supabase) may transfer personal data to the USA or other third
          countries. Such transfers are based on recognised safeguards, in
          particular the Swiss-U.S. or EU-U.S. Data Privacy Framework or the
          standard contractual clauses of the European Commission.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-zinc-50 mb-3">
          10. Rights of the data subject
        </h3>
        <p className="leading-relaxed">
          You have the right at any time to request information about,
          rectification, deletion or restriction of the processing of your
          stored data, as well as data portability, unless statutory retention
          obligations (e.g. tax records) prevent this. You may revoke any
          consent given at any time with effect for the future. Please contact
          us by email at support@klikkr.ch for this purpose.
        </p>
        <p className="leading-relaxed mt-4">
          You also have the right to lodge a complaint with a supervisory
          authority: in Switzerland with the Federal Data Protection and
          Information Commissioner (FDPIC), and for persons in the EU with the
          data protection supervisory authority of their country of residence.
        </p>
      </section>
    </div>
  )
}

export function PrivacyContent({ lang = 'de' }: { lang?: Locale }) {
  return lang === 'de' ? <PrivacyDe /> : <PrivacyEn />
}
