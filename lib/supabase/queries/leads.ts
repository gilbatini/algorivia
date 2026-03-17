import { createClient } from '@/lib/supabase/server'
import type { Lead } from '@/types/lead'

export async function getLeads(): Promise<Lead[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function createLead(lead: Omit<Lead, 'id' | 'created_at'>): Promise<void> {
  const supabase = await createClient()
  const { error } = await supabase.from('leads').insert(lead)
  if (error) throw error
}
