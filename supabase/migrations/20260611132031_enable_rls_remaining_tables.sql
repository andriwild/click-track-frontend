-- RLS nachrüsten für die Tabellen aus 20260314113934_add_delivery_tables.sql.
-- Der Stripe-Webhook nutzt den Service-Role-Key und umgeht RLS — er braucht
-- keine Policies. Ohne Policies bleibt damit jeder Zugriff über den Anon-Key
-- (PostgREST) gesperrt.
alter table public.products enable row level security;
alter table public.order_items enable row level security;
alter table public.deliveries enable row level security;
