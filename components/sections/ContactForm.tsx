'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      setState('success')
      form.reset()
    } catch {
      setState('error')
    }
  }

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Get in touch</h2>
        <p className="text-white/60 mb-10">Tell us about your project and we'll be in touch within 24 hours.</p>
        {state === 'success' ? (
          <p className="text-cyan-400 text-lg">Thanks — we'll be in touch soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Input label="Name" id="name" name="name" placeholder="Jane Smith" required />
            <Input label="Company" id="company" name="company" placeholder="Acme Corp" required />
            <Input label="Email" id="email" name="email" type="email" placeholder="jane@acme.com" required />
            <Textarea label="What do you need?" id="message" name="message" placeholder="Tell us about your project..." rows={5} required />
            {state === 'error' && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
            )}
            <Button type="submit" disabled={state === 'loading'} className="self-start">
              {state === 'loading' ? <LoadingSpinner className="mr-2" /> : null}
              Send message
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
