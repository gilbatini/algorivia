import { createClient } from '@/lib/supabase/server'
import type { Service } from '@/types/service'

export async function getServices(): Promise<Service[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('services')
    .select('*')
  if (error) throw error
  return data ?? []
}
