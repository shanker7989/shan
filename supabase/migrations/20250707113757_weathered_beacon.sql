/*
  # Create products table for product catalog

  1. New Tables
    - `products`
      - `id` (text, primary key)
      - `name` (text)
      - `price` (decimal)
      - `original_price` (decimal, optional)
      - `image` (text)
      - `images` (text array, optional)
      - `description` (text)
      - `category` (text)
      - `subcategory` (text)
      - `brand` (text)
      - `rating` (decimal)
      - `reviews` (integer)
      - `in_stock` (boolean)
      - `featured` (boolean)
      - `is_new` (boolean)
      - `is_on_sale` (boolean)
      - `specifications` (jsonb, optional)
      - `colors` (text array, optional)
      - `sizes` (text array, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS products (
  id text PRIMARY KEY,
  name text NOT NULL,
  price decimal(10,2) NOT NULL,
  original_price decimal(10,2),
  image text NOT NULL,
  images text[],
  description text NOT NULL,
  category text NOT NULL CHECK (category IN ('accessories', 'menswear')),
  subcategory text NOT NULL,
  brand text NOT NULL,
  rating decimal(2,1) NOT NULL DEFAULT 0,
  reviews integer NOT NULL DEFAULT 0,
  in_stock boolean NOT NULL DEFAULT true,
  featured boolean NOT NULL DEFAULT false,
  is_new boolean NOT NULL DEFAULT false,
  is_on_sale boolean NOT NULL DEFAULT false,
  specifications jsonb,
  colors text[],
  sizes text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Policy for public read access to products
CREATE POLICY "Products are publicly readable"
  ON products
  FOR SELECT
  TO public
  USING (true);

-- Policy for authenticated users to insert products (admin functionality)
CREATE POLICY "Authenticated users can insert products"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy for authenticated users to update products (admin functionality)
CREATE POLICY "Authenticated users can update products"
  ON products
  FOR UPDATE
  TO authenticated
  USING (true);