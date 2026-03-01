alter table public.orders
add column if not exists billing_address text;