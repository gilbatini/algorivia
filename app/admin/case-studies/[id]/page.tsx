interface Props {
  params: Promise<{ id: string }>
}

export default async function EditCaseStudyPage({ params }: Props) {
  const { id } = await params
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Case Study</h1>
      <p className="text-white/50">Case Study ID: {id}</p>
      <p className="text-white/40 text-sm mt-4">Editor coming soon.</p>
    </div>
  )
}
