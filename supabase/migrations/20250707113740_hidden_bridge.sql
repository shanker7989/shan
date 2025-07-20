/*
  # Create orders table for order management

  1. New Tables
    - `orders`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to users)
      - `order_number` (text, unique)
      - `status` (text)
      - `subtotal` (decimal)
      - `tax` (decimal)
      - `shipping` (decimal)
      - `total` (decimal)
      - `shipping_address` (jsonb)
      - `payment_method` (text)
      - `tracking_number` (text)
      - `estimated_delivery` (date)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `orders` table
    - Add policies for users to read their own orders
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  order_number text UNIQUE NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled')),
  subtotal decimal(10,2) NOT NULL,
  tax decimal(10,2) NOT NULL DEFAULT 0,
  shipping decimal(10,2) NOT NULL DEFAULT 0,
  total decimal(10,2) NOT NULL,
  shipping_address jsonb NOT NULL,
  payment_method text NOT NULL CHECK (payment_method IN ('cod', 'upi', 'card')),
  tracking_number text,
  estimated_delivery date,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Policy for users to read their own orders
CREATE POLICY "Users can read own orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Policy for users to insert their own orders
CREATE POLICY "Users can insert own orders"
  ON orders
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Function to generate order number
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS text AS $$
BEGIN
  RETURN 'FL' || UPPER(SUBSTRING(MD5(RANDOM()::text) FROM 1 FOR 8));
END;
$$ LANGUAGE plpgsql;

-- Function to auto-generate order number and tracking number
CREATE OR REPLACE FUNCTION set_order_defaults()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.order_number IS NULL THEN
    NEW.order_number := generate_order_number();
  END IF;
  
  IF NEW.tracking_number IS NULL AND NEW.status = 'shipped' THEN
    NEW.tracking_number := 'TRK' || UPPER(SUBSTRING(MD5(RANDOM()::text) FROM 1 FOR 10));
  END IF;
  
  NEW.updated_at := now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to set order defaults
CREATE TRIGGER set_order_defaults_trigger
  BEFORE INSERT OR UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION set_order_defaults();