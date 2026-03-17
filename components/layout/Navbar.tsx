import Link from 'next/link'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white tracking-tight">
          Algorivia
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="text-sm text-white/70 hover:text-white transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          Get in touch
        </Link>
      </nav>
    </header>
  )
}
