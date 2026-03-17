import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8 text-sm text-white/50">
        <p>© {new Date().getFullYear()} Algorivia. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/work" className="hover:text-white transition-colors">Work</Link>
          <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
