import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import type { CaseStudy } from '@/types/case-study'

interface CaseStudiesProps {
  caseStudies: CaseStudy[]
}

export function CaseStudies({ caseStudies }: CaseStudiesProps) {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Selected work</h2>
        <p className="text-white/60 mb-12 max-w-xl">Real outcomes for real clients.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <Link key={cs.id} href={`/work/${cs.id}`} className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors">
              {cs.cover_image_url && (
                <img src={cs.cover_image_url} alt={cs.title} className="w-full h-56 object-cover" />
              )}
              <div className="p-6">
                <Badge label={cs.industry} className="mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">{cs.title}</h3>
                <p className="text-cyan-400 text-sm font-mono">{cs.outcome}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/work" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
            View all work →
          </Link>
        </div>
      </div>
    </section>
  )
}
