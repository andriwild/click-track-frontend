ALTER TABLE orders
  ADD COLUMN IF not exists shipping_amount_cents int;
