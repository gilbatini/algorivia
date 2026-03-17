import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center text-center px-6">
      <div className="max-w-4xl">
        <p className="text-cyan-400 text-sm font-mono uppercase tracking-widest mb-6">AI-first consultancy</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Build smarter.<br />Move faster.<br />
          <span className="text-cyan-400">With AI.</span>
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
          We help mid-size businesses adopt AI workflows, build enterprise software, and automate operations — so your team can focus on what matters.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
        >
          Start a conversation
        </Link>
      </div>
    </section>
  )
}
