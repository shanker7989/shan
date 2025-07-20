-- Update the order number generation function to create 8-digit order numbers
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS text AS $$
BEGIN
  RETURN 'FL' || LPAD(FLOOR(RANDOM() * 1000000)::text, 6, '0');
END;
$$ LANGUAGE plpgsql;

-- Update the set_order_defaults function to ensure 8-digit order numbers
CREATE OR REPLACE FUNCTION set_order_defaults()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.order_number IS NULL OR NEW.order_number = '' THEN
    NEW.order_number := generate_order_number();
  END IF;
  
  IF NEW.tracking_number IS NULL AND NEW.status = 'shipped' THEN
    NEW.tracking_number := 'TRK' || LPAD(FLOOR(RANDOM() * 100000000)::text, 8, '0');
  END IF;
  
  NEW.updated_at := now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;