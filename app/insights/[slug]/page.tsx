import { getPostBySlug } from '@/lib/supabase/queries/posts'
import { formatDate } from '@/lib/utils/formatDate'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()
  return (
    <main className="pt-20 bg-white min-h-screen">
      {post.cover_image_url && (
        <img src={post.cover_image_url} alt={post.title} className="w-full h-80 object-cover" />
      )}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-black/40 text-sm mb-4">{post.published_at ? formatDate(post.published_at) : 'Draft'}</p>
        <h1 className="text-4xl font-bold text-black mb-8">{post.title}</h1>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  )
}
