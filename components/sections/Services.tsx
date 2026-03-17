import { Card } from '@/components/ui/Card'
import type { Service } from '@/types/service'

interface ServicesProps {
  services: Service[]
}

export function Services({ services }: ServicesProps) {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-4">What we do</h2>
        <p className="text-black/60 mb-12 max-w-xl">We bring AI capabilities to your business — from strategy to execution.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="bg-black/5 border-black/10">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-black/60 text-sm">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
