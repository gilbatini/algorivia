import Link from 'next/link'
import { formatDate } from '@/lib/utils/formatDate'
import type { Post } from '@/types/post'

interface InsightsPreviewProps {
  posts: Post[]
}

export function InsightsPreview({ posts }: InsightsPreviewProps) {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-4">Insights</h2>
        <p className="text-black/60 mb-12 max-w-xl">Thinking on AI, software, and the future of work.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/insights/${post.slug}`} className="group block">
              {post.cover_image_url && (
                <img src={post.cover_image_url} alt={post.title} className="w-full h-48 object-cover rounded-xl mb-4" />
              )}
              <p className="text-black/40 text-xs mb-2">{post.published_at ? formatDate(post.published_at) : 'Draft'}</p>
              <h3 className="text-lg font-semibold text-black group-hover:text-cyan-600 transition-colors">{post.title}</h3>
            </Link>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/insights" className="text-cyan-600 hover:text-cyan-500 text-sm font-medium transition-colors">
            All insights →
          </Link>
        </div>
      </div>
    </section>
  )
}
