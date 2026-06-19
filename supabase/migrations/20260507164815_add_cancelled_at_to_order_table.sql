alter table orders
  add column if not exists cancelled_at timestamptz;
