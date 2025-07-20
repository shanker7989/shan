import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          phone: string | null
          date_of_birth: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          phone?: string | null
          date_of_birth?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string | null
          date_of_birth?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      addresses: {
        Row: {
          id: string
          user_id: string
          type: string
          first_name: string
          last_name: string
          phone: string
          address: string
          city: string
          state: string
          pincode: string
          is_default: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type?: string
          first_name: string
          last_name: string
          phone: string
          address: string
          city: string
          state: string
          pincode: string
          is_default?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: string
          first_name?: string
          last_name?: string
          phone?: string
          address?: string
          city?: string
          state?: string
          pincode?: string
          is_default?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string
          order_number: string
          status: string
          subtotal: number
          tax: number
          shipping: number
          total: number
          shipping_address: any
          payment_method: string
          tracking_number: string | null
          estimated_delivery: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          order_number?: string
          status?: string
          subtotal: number
          tax?: number
          shipping?: number
          total: number
          shipping_address: any
          payment_method: string
          tracking_number?: string | null
          estimated_delivery?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          order_number?: string
          status?: string
          subtotal?: number
          tax?: number
          shipping?: number
          total?: number
          shipping_address?: any
          payment_method?: string
          tracking_number?: string | null
          estimated_delivery?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string
          product_name: string
          product_image: string | null
          price: number
          quantity: number
          selected_color: string | null
          selected_size: string | null
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id: string
          product_name: string
          product_image?: string | null
          price: number
          quantity?: number
          selected_color?: string | null
          selected_size?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          product_name?: string
          product_image?: string | null
          price?: number
          quantity?: number
          selected_color?: string | null
          selected_size?: string | null
          created_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          price: number
          original_price: number | null
          image: string
          images: string[] | null
          description: string
          category: string
          subcategory: string
          brand: string
          rating: number
          reviews: number
          in_stock: boolean
          featured: boolean
          is_new: boolean
          is_on_sale: boolean
          specifications: any | null
          colors: string[] | null
          sizes: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          name: string
          price: number
          original_price?: number | null
          image: string
          images?: string[] | null
          description: string
          category: string
          subcategory: string
          brand: string
          rating?: number
          reviews?: number
          in_stock?: boolean
          featured?: boolean
          is_new?: boolean
          is_on_sale?: boolean
          specifications?: any | null
          colors?: string[] | null
          sizes?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          price?: number
          original_price?: number | null
          image?: string
          images?: string[] | null
          description?: string
          category?: string
          subcategory?: string
          brand?: string
          rating?: number
          reviews?: number
          in_stock?: boolean
          featured?: boolean
          is_new?: boolean
          is_on_sale?: boolean
          specifications?: any | null
          colors?: string[] | null
          sizes?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}