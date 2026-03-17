import { NextResponse } from 'next/server'
import { getCaseStudies } from '@/lib/supabase/queries/case-studies'

export async function GET() {
  try {
    const caseStudies = await getCaseStudies()
    return NextResponse.json(caseStudies)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch case studies' }, { status: 500 })
  }
}
