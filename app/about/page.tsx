import { getTeamMembers } from '@/lib/supabase/queries/team'
import { TeamGrid } from '@/components/sections/TeamGrid'

export const metadata = { title: 'About — Algorivia' }

export default async function AboutPage() {
  const members = await getTeamMembers()
  return (
    <main className="pt-20">
      <section className="bg-black py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6">About Algorivia</h1>
          <p className="text-white/60 text-lg">We are a team of engineers, strategists, and operators helping businesses harness AI to build better products and faster processes.</p>
        </div>
      </section>
      <TeamGrid members={members} />
    </main>
  )
}
