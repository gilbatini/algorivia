import { getCaseStudyBySlug } from '@/lib/supabase/queries/case-studies'
import { Badge } from '@/components/ui/Badge'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const cs = await getCaseStudyBySlug(slug)
  if (!cs) notFound()
  return (
    <main className="pt-20 bg-black min-h-screen">
      {cs.cover_image_url && (
        <img src={cs.cover_image_url} alt={cs.title} className="w-full h-96 object-cover" />
      )}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Badge label={cs.industry} className="mb-4" />
        <h1 className="text-4xl font-bold text-white mb-2">{cs.title}</h1>
        <p className="text-white/60 mb-4">{cs.client}</p>
        <p className="text-cyan-400 font-mono mb-8">{cs.outcome}</p>
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: cs.content }} />
      </article>
    </main>
  )
}
