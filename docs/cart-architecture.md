# Warenkorb-System — Architektur

## Überblick

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser                               │
│                                                              │
│  ┌──────────┐  ┌──────────────┐  ┌────────────────────────┐ │
│  │ CartIcon  │  │  CartDrawer  │  │   CheckoutSection      │ │
│  │ (Header)  │  │  (Slide-in)  │  │   (Produktkarten)      │ │
│  └─────┬─────┘  └──────┬───────┘  └───────────┬────────────┘ │
│        │               │                      │              │
│        └───────────────┼──────────────────────┘              │
│                        │                                     │
│                 ┌──────▼───────┐                             │
│                 │  Nanostores  │                             │
│                 │  Cart Store  │◄──── localStorage           │
│                 └──────┬───────┘      (Persistenz)           │
│                        │                                     │
│                        │ POST /create-checkout-session        │
│                        ▼                                     │
└────────────────────────┬─────────────────────────────────────┘
                         │
                         ▼
┌────────────────────────────────────────────────────────────┐
│              Supabase Edge Functions (Deno)                 │
│                                                            │
│  ┌───────────────────────┐    ┌─────────────────────────┐  │
│  │ create-checkout-session│    │    stripe-webhook        │  │
│  │                        │    │                          │  │
│  │ - Validiert Price IDs  │    │ - checkout.session.      │  │
│  │ - Erstellt Stripe      │    │   completed              │  │
│  │   Checkout Session     │    │ - Speichert Order        │  │
│  │ - Gibt Session URL     │    │ - Upserts Products       │  │
│  │   zurück               │    │ - Erstellt Order Items   │  │
│  └───────────┬────────────┘    └──────────┬───────────────┘  │
│              │                            │                  │
└──────────────┼────────────────────────────┼──────────────────┘
               │                            │
               ▼                            ▼
┌──────────────────────┐        ┌──────────────────────────┐
│       Stripe API     │        │      Supabase DB         │
│                      │        │                          │
│  - Checkout Session  │───────>│  orders                  │
│  - Payment           │webhook │  order_items             │
│  - Line Items        │        │  products                │
│                      │        │  deliveries              │
│                      │        │  serial_numbers          │
└──────────────────────┘        └──────────────────────────┘
```

## Das Kernproblem: Astro Islands

Astro rendert die Seite als statisches HTML. React-Komponenten werden als isolierte **Islands** hydriert — sie teilen keinen React-Context. Der Cart-State muss aber zwischen 3 Islands synchron sein:

| Island            | Ort                    | Aufgabe                           |
| ----------------- | ---------------------- | --------------------------------- |
| `CartIcon`        | Header (Layout.astro)  | Badge mit Anzahl anzeigen         |
| `CartDrawer`      | Body (Layout.astro)    | Items verwalten, Checkout starten |
| `CheckoutSection` | Main Content (App.tsx) | "Add to Cart" Buttons             |

**Lösung: Nanostores** — ein winziger (<1KB) reaktiver Store, der im JavaScript-Module-Scope lebt. Alle Islands importieren denselben Store und bleiben reaktiv synchron. `persistentMap` serialisiert den State in localStorage, sodass der Cart auch SSG-Seitennavigation (= voller Page-Reload) überlebt.

## Datenfluss

### 1. Produkt zum Warenkorb hinzufügen

```
Kunde klickt "In den Warenkorb"
└─> CheckoutSection ruft addToCart(priceId)
    └─> $cart Store wird aktualisiert (nanostores)
        ├─> CartIcon re-rendert (Badge: +1)
        ├─> CartDrawer öffnet sich (neues Item sichtbar)
        └─> localStorage wird aktualisiert
```

### 2. Checkout starten

```
Kunde klickt "Zur Kasse" im Drawer
└─> initiateCheckout(lang) wird aufgerufen
    └─> POST an create-checkout-session Edge Function
        │   Body: { items: [{ priceId, quantity }], lang }
        └─> Edge Function validiert Price IDs (Allowlist)
            └─> stripe.checkout.sessions.create(...)
                └─> Gibt Session URL zurück
                    └─> Browser redirect zu Stripe Checkout
```

### 3. Bezahlung abschliessen

```
Kunde bezahlt bei Stripe
└─> Stripe feuert checkout.session.completed Webhook
    └─> stripe-webhook Edge Function
        ├─> Erstellt Order in DB
        ├─> Holt Line Items von Stripe API
        ├─> Upserts Products (nach SKU)
        └─> Erstellt Order Items (Menge + Preis)
```

### 4. Danke-Seite

```
Stripe leitet zu /thanks weiter
└─> Inline-Script löscht cart:* aus localStorage
```

## Dateistruktur

```
src/
├── config/
│   └── products.ts          <- Produktkatalog (Source of Truth)
│                               Slug, Stripe Price ID, Preis, Bild
│
├── stores/
│   └── cart.ts              <- Nanostores Cart-State
│                               $cart (persistentMap), $cartOpen (atom)
│                               $cartCount, $cartTotal (computed)
│                               addToCart, removeFromCart, updateQuantity
│
├── lib/
│   ├── checkout.ts          <- Client: Cart -> Edge Function -> Redirect
│   └── utils.ts             <- (bestehend)
│
├── components/
│   ├── CartIcon.tsx          <- React Island: Bag-Icon + Badge
│   ├── CartDrawer.tsx        <- React Island: Slide-in Panel
│   ├── CheckoutSection.tsx   <- Dynamische Produktkarten + "Add to Cart"
│   └── ...
│
├── i18n/
│   ├── de.ts                 <- +cart.* und products.* Keys
│   ├── en.ts
│   ├── fr.ts
│   └── it.ts
│
├── layouts/
│   └── Layout.astro          <- CartIcon + CartDrawer Islands eingebunden
│
└── pages/
    └── thanks.astro          <- Cart-Cleanup Script

supabase/functions/
├── stripe-webhook/           <- Bestehend (KEINE Änderung nötig)
│   └── index.ts
└── create-checkout-session/  <- NEU
    └── index.ts                 Validiert Items, erstellt Stripe Session
```

## Sicherheitskonzept

```
Client (untrusted)          Server (trusted)
─────────────────           ────────────────
Sendet priceId + qty  --->  Allowlist-Check gegen
                            ALLOWED_PRICE_IDS Set

                            Quantity: min 1, max 10,
                            floor() gegen Floats

                            CORS: nur klikkr.ch +
                            localhost:4321

                            Stripe Secret Key nur
                            serverseitig (Deno.env)
```

Der Client sendet nur `priceId` und `quantity` — keine Preise. Die Edge Function validiert die Price IDs gegen eine hardcoded Allowlist. Es ist unmöglich, beliebige Produkte oder manipulierte Preise einzuschleusen.

## Warum der bestehende Webhook weiterhin funktioniert

Der Webhook (`stripe-webhook/index.ts`) arbeitet **unabhängig** davon, wie die Checkout Session erstellt wurde:

```ts
// Holt Line Items von Stripe (nicht aus dem Request)
const lineItems = await stripe.checkout.sessions.listLineItems(session.id)

// Iteriert über ALLE Items, egal wie viele
for (const item of lineItems.data) { ... }
```

Ob 1 Item (Payment Link) oder 5 Items (Checkout Session API) — Stripe normalisiert alles identisch. Der Webhook upserted Produkte nach SKU und erstellt Order Items mit korrekter Menge.

## Neues Produkt hinzufügen

1. Produkt in Stripe Dashboard anlegen → Price ID kopieren
2. `src/config/products.ts` — neues Product-Objekt mit `slug`, `stripePriceId`, `priceCHF`, `image`
3. `src/i18n/{de,en,fr,it}.ts` — Name + Description unter `products['neuer-slug']`
4. `supabase/functions/create-checkout-session/index.ts` — Price ID in `ALLOWED_PRICE_IDS` Set eintragen
5. Edge Function neu deployen: `supabase functions deploy create-checkout-session`

## Setup-Voraussetzungen

| Was                   | Wo                                                            |
| --------------------- | ------------------------------------------------------------- |
| Stripe Price IDs      | `src/config/products.ts` + `create-checkout-session/index.ts` |
| `PUBLIC_SUPABASE_URL` | `.env` (z.B. `https://xyz.supabase.co`)                       |
| `STRIPE_SECRET_KEY`   | Supabase Edge Function Secrets                                |
| Edge Function Deploy  | `supabase functions deploy create-checkout-session`           |
