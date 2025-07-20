/*
  # Fix RLS policies for user registration and authentication

  1. Security Updates
    - Fix RLS policies to allow proper user registration
    - Ensure users can create profiles during signup
    - Allow proper authentication flow
*/

-- Drop existing problematic policies
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Users can update own data" ON users;
DROP POLICY IF EXISTS "Users can insert own data" ON users;
DROP POLICY IF EXISTS "Allow registration" ON users;

-- Create new working policies
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

-- Allow public registration (needed for signup process)
CREATE POLICY "Allow registration"
  ON users
  FOR INSERT
  TO public
  WITH CHECK (true);