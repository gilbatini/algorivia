# Algorivia — File Structure

```
algorivia/
│
├── claude.md                        # Agent rules & project context (you are here)
├── FILE_STRUCTURE.md                # This file
├── .env.local                       # Secret keys — NEVER commit to GitHub
├── .gitignore                       # Must include .env.local
├── next.config.ts                   # Next.js config
├── tailwind.config.ts               # Tailwind config
├── tsconfig.json                    # TypeScript config
├── package.json
│
├── public/                          # Static assets
│   ├── logo.svg
│   ├── favicon.ico
│   └── og-image.png                 # Open Graph image for social sharing
│
├── app/                             # Next.js App Router
│   ├── layout.tsx                   # Root layout (fonts, metadata, navbar, footer)
│   ├── page.tsx                     # Homepage
│   ├── globals.css                  # Global styles + Tailwind imports
│   │
│   ├── about/
│   │   └── page.tsx                 # About & team page
│   │
│   ├── services/
│   │   └── page.tsx                 # Services overview page
│   │
│   ├── work/                        # Case studies
│   │   ├── page.tsx                 # All case studies
│   │   └── [slug]/
│   │       └── page.tsx             # Individual case study
│   │
│   ├── insights/                    # Blog
│   │   ├── page.tsx                 # All blog posts
│   │   └── [slug]/
│   │       └── page.tsx             # Individual blog post
│   │
│   ├── contact/
│   │   └── page.tsx                 # Contact page
│   │
│   ├── admin/                       # Protected admin area
│   │   ├── layout.tsx               # Admin layout (auth guard)
│   │   ├── page.tsx                 # Admin dashboard
│   │   ├── leads/
│   │   │   └── page.tsx             # View contact form submissions
│   │   ├── posts/
│   │   │   ├── page.tsx             # Manage blog posts
│   │   │   └── [id]/
│   │   │       └── page.tsx         # Edit blog post
│   │   └── case-studies/
│   │       ├── page.tsx             # Manage case studies
│   │       └── [id]/
│   │           └── page.tsx         # Edit case study
│   │
│   └── api/                         # Server-side API routes
│       ├── contact/
│       │   └── route.ts             # Handle contact form → saves to leads table
│       ├── posts/
│       │   └── route.ts             # Blog post CRUD
│       └── case-studies/
│           └── route.ts             # Case study CRUD
│
├── components/
│   │
│   ├── ui/                          # Reusable base components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   └── LoadingSpinner.tsx
│   │
│   ├── sections/                    # Page-specific sections
│   │   ├── Hero.tsx                 # Homepage hero
│   │   ├── Services.tsx             # Services grid
│   │   ├── CaseStudies.tsx          # Case studies preview
│   │   ├── InsightsPreview.tsx      # Blog preview on homepage
│   │   ├── ContactForm.tsx          # Lead capture form
│   │   └── TeamGrid.tsx             # Team members grid
│   │
│   └── layout/                      # Layout components
│       ├── Navbar.tsx
│       └── Footer.tsx
│
├── lib/
│   │
│   ├── supabase/
│   │   ├── client.ts                # Browser-side Supabase client
│   │   ├── server.ts                # Server-side Supabase client
│   │   └── queries/                 # All database queries live here
│   │       ├── leads.ts             # Contact form queries
│   │       ├── posts.ts             # Blog post queries
│   │       ├── case-studies.ts      # Case study queries
│   │       ├── services.ts          # Services queries
│   │       └── team.ts              # Team member queries
│   │
│   └── utils/
│       ├── formatDate.ts            # Date formatting helper
│       └── slugify.ts               # Convert title to URL slug
│
└── types/                           # TypeScript type definitions
    ├── lead.ts
    ├── post.ts
    ├── case-study.ts
    ├── service.ts
    └── team-member.ts
```
