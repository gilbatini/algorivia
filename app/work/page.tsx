import { getCaseStudies } from '@/lib/supabase/queries/case-studies'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'

export const metadata = { title: 'Work — Algorivia' }

export default async function WorkPage() {
  const caseStudies = await getCaseStudies()
  return (
    <main className="pt-20 bg-black min-h-screen">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Our work</h1>
          <p className="text-white/60 mb-12">Real projects. Measurable outcomes.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <Link key={cs.id} href={`/work/${cs.id}`} className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors">
                {cs.cover_image_url && (
                  <img src={cs.cover_image_url} alt={cs.title} className="w-full h-56 object-cover" />
                )}
                <div className="p-6">
                  <Badge label={cs.industry} className="mb-3" />
                  <h2 className="text-xl font-semibold text-white mb-2">{cs.title}</h2>
                  <p className="text-white/60 text-sm mb-3">{cs.client}</p>
                  <p className="text-cyan-400 text-sm font-mono">{cs.outcome}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
