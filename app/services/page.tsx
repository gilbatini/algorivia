import { getServices } from '@/lib/supabase/queries/services'
import { Card } from '@/components/ui/Card'

export const metadata = { title: 'Services — Algorivia' }

export default async function ServicesPage() {
  const services = await getServices()
  return (
    <main className="pt-20 bg-white min-h-screen">
      <section className="bg-black py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6">Our services</h1>
          <p className="text-white/60 text-lg">From AI strategy to full-stack delivery — we bring the expertise your team needs.</p>
        </div>
      </section>
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="bg-black/5 border-black/10">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-black mb-2">{service.title}</h2>
              <p className="text-black/60">{service.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
