import { createClient } from '@/lib/supabase/server'
import type { TeamMember } from '@/types/team-member'

export async function getTeamMembers(): Promise<TeamMember[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
  if (error) throw error
  return data ?? []
}
