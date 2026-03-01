# Local Stripe Webhook Testing

Diese Anleitung beschreibt, wie du den Stripe Webhook (`stripe-webhook`) lokal auf deinem Rechner mit der Supabase CLI testen kannst, ohne ihn jedes Mal nach dem Code-Ändern auf die Live-Plattform deployen zu müssen.

## Voraussetzungen

1. Supabase CLI ist installiert (`supabase --version`)
2. Stripe CLI ist installiert (`stripe version`)
3. Docker läuft im Hintergrund (für die lokale Supabase Umgebung)

## 1. Umgebungsvariablen einrichten

Stelle sicher, dass du eine Datei namens `.env` im Hauptverzeichnis deines Projekts (wo auch `supabase/` liegt) hast.
Die Datei enthält deine geheimen Stripe Keys und die lokalen Supabase Credentials.

Eine Vorlage findest du in der Datei `.env.example`. Kopiere sie nach `.env` und fülle die Werte aus:

```bash
cp .env.example .env
```

## 2. Lokale Umgebung starten

Starte deine lokale Supabase-Instanz:

```bash
supabase start
```

_Notiere dir die ausgegebene `API URL` (meist `http://127.0.0.1:54321`) und den `service_role key`. Diese trägst du in dein `.env` File ein._

## 3. Webhook Listener (Stripe CLI) starten

Nutze die Stripe CLI, um eingehende Webhooks von Stripe an deine lokale Edge Function weiterzuleiten.

1. Logge dich einmalig in der Stripe CLI ein:

```bash
stripe login
```

2. Starte den Stripe Forwarder:

```bash
stripe listen --forward-to localhost:54321/functions/v1/stripe-webhook
```

3. Die Ausgabe zeigt dir nun ein **Webhook Signing Secret** (z.B. `whsec_xyz123...`).
   Trage genau dieses Secret in deine `.env` Datei als `STRIPE_WEBHOOK_SECRET` ein!

## 4. Edge Function lokal ausführen

Öffne ein zweites Terminal-Fenster und starte den Supabase local Edge Functions Server mit deinen hinterlegten Umgebungsvariablen:

```bash
supabase functions serve stripe-webhook --env-file .env --no-verify-jwt
```

## 5. Den Webhook testen (Erfolgreicher Kauf)

Öffne ein drittes Terminal-Fenster und löse manuell ein "Erfolgreicher Kauf"-Event in der Stripe CLI aus:

```bash
stripe trigger checkout.session.completed
```

Alternativ kannst du jetzt auch einfach über deinen Stripe Test-Payment-Link im Browser einen Testkauf tätigen.

Im Terminal deines Edge Function Servers (Schritt 4) solltest du jetzt die `console.log` Ausgaben für die erfolgreiche Bestellung oder allfällige Fehler beim Datenbankzugriff sehen!
