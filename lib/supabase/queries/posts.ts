import { createClient } from '@/lib/supabase/server'
import type { Post } from '@/types/post'

export async function getPosts(): Promise<Post[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('published_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single()
  if (error) return null
  return data
}
