import { getPosts } from '@/lib/supabase/queries/posts'
import { formatDate } from '@/lib/utils/formatDate'
import Link from 'next/link'

export const metadata = { title: 'Posts — Admin' }

export default async function AdminPostsPage() {
  const posts = await getPosts()
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Posts ({posts.length})</h1>
      </div>
      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <Link key={post.id} href={`/admin/posts/${post.id}`} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-6 py-4 hover:border-cyan-500/50 transition-colors">
            <div>
              <p className="font-medium">{post.title}</p>
              <p className="text-white/40 text-xs mt-1">{post.slug}</p>
            </div>
            <p className="text-white/40 text-xs">{post.published_at ? formatDate(post.published_at) : 'Draft'}</p>
          </Link>
        ))}
        {posts.length === 0 && <p className="text-white/50">No posts yet.</p>}
      </div>
    </div>
  )
}
