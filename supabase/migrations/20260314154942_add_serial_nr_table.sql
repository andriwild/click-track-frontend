  -- 1. Neue Tabelle für die Seriennummern der zugewiesenen/versendeten Geräte
 CREATE TABLE serial_numbers (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     order_item_id UUID NOT NULL REFERENCES order_items(id) ON DELETE CASCADE,
     serial_number TEXT NOT NULL UNIQUE,
     assigned_at TIMESTAMP WITH TIME ZONE DEFAULT now()
 );
 
 -- Index für schnellere Suche nach Seriennummern (hilfreich für spätere Support-Anfragen)
 CREATE INDEX idx_serial_numbers_serial_number ON serial_numbers(serial_number);
 
 -- 2. Erweiterung der orders Tabelle für den Versandstatus
 ALTER TABLE orders
 ADD COLUMN shipping_status TEXT DEFAULT 'pending',
 ADD COLUMN tracking_number TEXT;
 
 -- 3. (Optional) RLS Policies für die neue Tabelle aktivieren
 ALTER TABLE serial_numbers ENABLE ROW LEVEL SECURITY;
 
 -- Beispiel-Policy: Service Role darf alles (für dein Python Skript/Backend)
 CREATE POLICY "Service Role has full access to serial_numbers"
 ON serial_numbers
 FOR ALL
 USING (auth.jwt() ->> 'role' = 'service_role');
