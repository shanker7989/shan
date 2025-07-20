/*
  # Create order_items table for order line items

  1. New Tables
    - `order_items`
      - `id` (uuid, primary key)
      - `order_id` (uuid, foreign key to orders)
      - `product_id` (text)
      - `product_name` (text)
      - `product_image` (text)
      - `price` (decimal)
      - `quantity` (integer)
      - `selected_color` (text, optional)
      - `selected_size` (text, optional)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `order_items` table
    - Add policies for users to read their own order items
*/

CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE,
  product_id text NOT NULL,
  product_name text NOT NULL,
  product_image text,
  price decimal(10,2) NOT NULL,
  quantity integer NOT NULL DEFAULT 1,
  selected_color text,
  selected_size text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Policy for users to read their own order items
CREATE POLICY "Users can read own order items"
  ON order_items
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders 
      WHERE orders.id = order_items.order_id 
      AND orders.user_id = auth.uid()
    )
  );

-- Policy for users to insert their own order items
CREATE POLICY "Users can insert own order items"
  ON order_items
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM orders 
      WHERE orders.id = order_items.order_id 
      AND orders.user_id = auth.uid()
    )
  );