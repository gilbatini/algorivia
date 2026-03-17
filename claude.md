# Algorivia — Agent Rules & Project Context

## What is Algorivia?
Algorivia is an AI-first software consultancy website. We help mid-size businesses adopt modern AI workflows, build enterprise software, and integrate AI-level automation into their operations.

**Live domain:** algorivia.com (hosted on Cloudflare)
**Database:** Supabase (project ref: tnvpqmqzpltselgwrdmn, West EU - Ireland)
**Framework:** Next.js (App Router, TypeScript, Tailwind CSS)

---

## Tech Stack
- **Frontend:** Next.js 14+ with App Router
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **Image storage:** Supabase Storage
- **Video storage:** Cloudflare Stream
- **Deployment:** Cloudflare Pages (auto-deploys from GitHub)

---

## Design Direction
- **Aesthetic:** Futuristic, AI-first, dark hero sections with clean light body sections
- **Accent color:** Electric blue or teal (decide early and stay consistent)
- **Typography:** Geometric/mono display font paired with clean body font — avoid Inter, Roboto, Arial
- **Motion:** Purposeful animations only — no decoration for decoration's sake
- **Layout:** Grid-based, generous whitespace, credibility-first structure

### Page order (homepage scroll):
1. Hero — bold headline, dark background, single CTA
2. Services — 3–4 cards (AI Workflows, Enterprise Software, Integrations, Consulting)
3. Case Studies — large visual cards, client industry + outcome stat
4. Insights/Blog — AI articles, thought leadership
5. Contact — simple lead capture form (name, company, need)

---

## File Structure
Follow the structure defined in `FILE_STRUCTURE.md` at the root of the project.
Never create files outside of this structure without a clear reason.

---

## Environment Variables
All secrets live in `.env.local` (never commit this file).

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=      # server-side only, never expose to browser
CLOUDFLARE_STREAM_TOKEN=        # for video uploads
```

---

## Supabase Rules
- Always use the **publishable/anon key** in frontend code
- Always use the **service role key** only in server-side API routes (`/app/api/`)
- Always enable **Row Level Security (RLS)** on every table before going live
- Use `lib/supabase/client.ts` for browser-side Supabase client
- Use `lib/supabase/server.ts` for server-side Supabase client

---

## Database Tables
These are the core tables. Do not modify structure without updating this file.

```
leads          → contact form submissions (name, company, email, message, created_at)
posts          → blog articles (title, slug, content, cover_image_url, published_at)
case_studies   → client work (title, client, industry, outcome, cover_image_url, content)
services       → what Algorivia offers (title, description, icon)
team_members   → staff profiles (name, role, bio, photo_url)
```

---

## Coding Rules
- Use **TypeScript** for everything — no plain `.js` files
- Use **server components** by default in the App Router — only add `"use client"` when needed
- All API routes go in `/app/api/`
- All reusable UI components go in `/components/ui/`
- All page-specific components go in `/components/sections/`
- All Supabase queries go in `/lib/supabase/queries/` — never write raw queries inline in pages
- Use **`@/`** import alias everywhere — no relative `../../` imports
- Always handle loading and error states in every component

---

## What NOT to do
- Never commit `.env.local` to GitHub
- Never use the Supabase service role key in client-side code
- Never write inline styles — use Tailwind classes only
- Never skip TypeScript types — define types in `/types/`
- Never build without mobile responsiveness
- Never use `any` as a TypeScript type

---

## Agent Instructions
When building new features:
1. Check this file for context before starting
2. Follow the file structure exactly
3. Create or update types in `/types/` first
4. Write the Supabase query in `/lib/supabase/queries/`
5. Build the component, then wire it to the page
6. Always test the mobile layout
