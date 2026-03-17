import { getPosts } from '@/lib/supabase/queries/posts'
import { formatDate } from '@/lib/utils/formatDate'
import Link from 'next/link'

export const metadata = { title: 'Insights — Algorivia' }

export default async function InsightsPage() {
  const posts = await getPosts()
  return (
    <main className="pt-20 bg-white min-h-screen">
      <section className="bg-black py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Insights</h1>
          <p className="text-white/60">Thinking on AI, software, and the future of work.</p>
        </div>
      </section>
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/insights/${post.slug}`} className="group block">
              {post.cover_image_url && (
                <img src={post.cover_image_url} alt={post.title} className="w-full h-48 object-cover rounded-xl mb-4" />
              )}
              <p className="text-black/40 text-xs mb-2">{post.published_at ? formatDate(post.published_at) : 'Draft'}</p>
              <h2 className="text-lg font-semibold text-black group-hover:text-cyan-600 transition-colors">{post.title}</h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
