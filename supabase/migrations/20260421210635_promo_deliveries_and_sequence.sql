-- Fortlaufende Sequence für alle Lieferscheinnummern (regular + promo)
create sequence if not exists delivery_number_seq;

-- Sequence auf aktuellen Maximalwert setzen damit keine Kollisionen entstehen
select setval(
  'delivery_number_seq',
  coalesce(
    (select max(split_part(delivery_number, '-', 3)::int)
     from deliveries
     where delivery_number ~ '^LS-\d{4}-\d+$'),
    0
  )
);

-- Atomare Nummernvergabe: garantiert eindeutig, auch bei parallelen Aufrufen
create or replace function next_delivery_number()
returns text
language sql
as $$
  select 'LS-' || extract(year from now())::int::text || '-'
      || lpad(nextval('delivery_number_seq')::text, 4, '0');
$$;

-- Tabelle für Werbegeschenke / manuelle Lieferscheine
create table promo_deliveries (
  id               uuid        primary key default gen_random_uuid(),
  delivery_number  text        not null unique,
  recipient_name   text        not null,
  recipient_address text       not null,
  product          text        not null,
  quantity         int         not null default 1,
  price_chf        numeric(10,2) not null default 0,
  serial_numbers   text,
  message          text,
  source_file      text,
  pdf_path         text,
  created_at       timestamptz not null default now()
);

alter table promo_deliveries enable row level security;
