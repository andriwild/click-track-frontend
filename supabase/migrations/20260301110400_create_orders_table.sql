create table public.orders (
    id uuid default gen_random_uuid() primary key,
    stripe_session_id text unique not null,
    customer_email text,
    customer_name text,
    shipping_address text,
    amount_total integer,
    currency text,
    payment_status text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
alter table public.orders enable row level security;

-- Create policy to allow insert from service role (Webhook)
create policy "Allow inserts from service role"
on public.orders
for insert
to service_role
with check (true);

-- Create policy to allow select from authenticated admin users (optional, currently just service_role)
create policy "Allow read access to service role"
on public.orders
for select
to service_role
using (true);