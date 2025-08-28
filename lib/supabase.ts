import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Database types
export interface UserProfile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  company: string | null
  investment_experience: string | null
  investor_type: string | null
  created_at: string
  updated_at: string
}

export interface WaitlistEntry {
  id: string
  name: string
  email: string
  investor_type: string
  investment_experience: string
  company: string | null
  message: string | null
  created_at: string
} 