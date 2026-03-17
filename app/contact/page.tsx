import { ContactForm } from '@/components/sections/ContactForm'

export const metadata = { title: 'Contact — Algorivia' }

export default function ContactPage() {
  return (
    <main className="pt-20 min-h-screen bg-black">
      <ContactForm />
    </main>
  )
}
