import { getLeads } from '@/lib/supabase/queries/leads'
import { formatDate } from '@/lib/utils/formatDate'

export const metadata = { title: 'Leads — Admin' }

export default async function LeadsPage() {
  const leads = await getLeads()
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Leads ({leads.length})</h1>
      <div className="flex flex-col gap-4">
        {leads.map((lead) => (
          <div key={lead.id} className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-semibold">{lead.name}</p>
                <p className="text-white/50 text-sm">{lead.company} · {lead.email}</p>
              </div>
              <p className="text-white/40 text-xs">{formatDate(lead.created_at)}</p>
            </div>
            <p className="text-white/70 text-sm">{lead.message}</p>
          </div>
        ))}
        {leads.length === 0 && <p className="text-white/50">No leads yet.</p>}
      </div>
    </div>
  )
}
