import { getCaseStudies } from '@/lib/supabase/queries/case-studies'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'

export const metadata = { title: 'Case Studies — Admin' }

export default async function AdminCaseStudiesPage() {
  const caseStudies = await getCaseStudies()
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Case Studies ({caseStudies.length})</h1>
      <div className="flex flex-col gap-3">
        {caseStudies.map((cs) => (
          <Link key={cs.id} href={`/admin/case-studies/${cs.id}`} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-6 py-4 hover:border-cyan-500/50 transition-colors">
            <div>
              <p className="font-medium">{cs.title}</p>
              <p className="text-white/40 text-xs mt-1">{cs.client}</p>
            </div>
            <Badge label={cs.industry} />
          </Link>
        ))}
        {caseStudies.length === 0 && <p className="text-white/50">No case studies yet.</p>}
      </div>
    </div>
  )
}
