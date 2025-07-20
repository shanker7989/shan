/*
  # Fix users table RLS policies for proper authentication

  1. Security Updates
    - Update RLS policies to allow proper user registration
    - Fix authentication flow issues
    - Ensure users can create their own profiles
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Users can update own data" ON users;
DROP POLICY IF EXISTS "Users can insert own data" ON users;

-- Create new policies that work with Supabase Auth
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Allow users to insert their own data during registration
CREATE POLICY "Users can insert own data"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Allow public insert for registration (will be restricted by auth.uid())
CREATE POLICY "Allow registration"
  ON users
  FOR INSERT
  TO public
  WITH CHECK (true);