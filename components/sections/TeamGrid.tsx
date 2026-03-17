import type { TeamMember } from '@/types/team-member'

interface TeamGridProps {
  members: TeamMember[]
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12">The team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.id} className="flex flex-col gap-4">
              {member.photo_url ? (
                <img src={member.photo_url} alt={member.name} className="w-20 h-20 rounded-full object-cover" />
              ) : (
                <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl font-bold">
                  {member.name[0]}
                </div>
              )}
              <div>
                <p className="font-semibold text-black">{member.name}</p>
                <p className="text-cyan-600 text-sm">{member.role}</p>
                <p className="text-black/60 text-sm mt-1">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
