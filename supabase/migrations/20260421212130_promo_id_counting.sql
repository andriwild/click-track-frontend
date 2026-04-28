CREATE SEQUENCE IF NOT EXISTS promo_delivery_number_seq;

CREATE OR REPLACE FUNCTION next_promo_delivery_number()
returns text language sql AS $$
  SELECT 'LS-PROMO-' || lpad(nextval('promo_delivery_number_seq')::text, 4, '0');
$$;
