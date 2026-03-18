-- 1. Tabelle für die Produkte (Stammdaten)
CREATE TABLE public.products (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  sku text UNIQUE, -- Artikelnummer
  unit text DEFAULT 'Stk.',
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
  CONSTRAINT products_pkey PRIMARY KEY (id)
);

-- 2. Tabelle für die Bestellpositionen (Verknüpfung Order <-> Product)
CREATE TABLE public.order_items (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id uuid REFERENCES public.products(id) ON DELETE SET NULL,
  quantity integer NOT NULL DEFAULT 1,
  unit_price_cents integer NOT NULL, -- Preis in Cents zum Zeitpunkt des Kaufs
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
  CONSTRAINT order_items_pkey PRIMARY KEY (id)
);

-- 3. Tabelle für die generierten Lieferscheine (Tracking)
CREATE TABLE public.deliveries (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL UNIQUE REFERENCES public.orders(id) ON DELETE CASCADE,
  delivery_number text NOT NULL UNIQUE, -- z.B. LS-2026-0001
  pdf_path text, -- Pfad im Supabase Storage (optional)
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
  CONSTRAINT deliveries_pkey PRIMARY KEY (id)
);

-- Index für schnellere Abfragen beim Generieren
CREATE INDEX idx_orders_payment_status ON public.orders(payment_status);
