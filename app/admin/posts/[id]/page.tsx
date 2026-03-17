import { getPostBySlug } from '@/lib/supabase/queries/posts'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ id: string }>
}

export default async function EditPostPage({ params }: Props) {
  const { id } = await params
  // TODO: fetch by id when query is available
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Post</h1>
      <p className="text-white/50">Post ID: {id}</p>
      <p className="text-white/40 text-sm mt-4">Editor coming soon.</p>
    </div>
  )
}
