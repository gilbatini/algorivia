import Link from 'next/link'

export const metadata = { title: 'Admin — Algorivia' }

const sections = [
  { href: '/admin/leads', label: 'Leads', description: 'View contact form submissions' },
  { href: '/admin/posts', label: 'Posts', description: 'Manage blog articles' },
  { href: '/admin/case-studies', label: 'Case Studies', description: 'Manage client work' },
]

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((s) => (
          <Link key={s.href} href={s.href} className="block bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
            <h2 className="text-lg font-semibold mb-1">{s.label}</h2>
            <p className="text-white/50 text-sm">{s.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
