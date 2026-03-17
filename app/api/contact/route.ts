import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, company, email, message } = body
    if (!name || !company || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    const { error } = await supabase.from('leads').insert({ name, company, email, message })
    if (error) throw error
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
