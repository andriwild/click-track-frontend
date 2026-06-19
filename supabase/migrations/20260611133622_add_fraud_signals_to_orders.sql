-- Fraud-Signale aus Stripe in der Bestellung speichern, damit das
-- Versand-Skript riskante Bestellungen zurückhalten kann.
alter table public.orders
  add column if not exists payment_intent_id text,
  add column if not exists risk_level text,
  add column if not exists three_d_secure text,
  add column if not exists fraud_warning_at timestamptz,
  add column if not exists disputed_at timestamptz;

-- Lookup vom Charge (Fraud-Warning/Dispute-Event) zur Bestellung
create index if not exists idx_orders_payment_intent_id
  on public.orders (payment_intent_id);
