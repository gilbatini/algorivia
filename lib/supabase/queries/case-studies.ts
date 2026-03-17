import { createClient } from '@/lib/supabase/server'
import type { CaseStudy } from '@/types/case-study'

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
  if (error) throw error
  return data ?? []
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .eq('slug', slug)
    .single()
  if (error) return null
  return data
}
