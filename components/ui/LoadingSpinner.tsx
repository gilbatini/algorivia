export function LoadingSpinner({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-block w-6 h-6 border-2 border-white/20 border-t-cyan-400 rounded-full animate-spin ${className}`} />
  )
}
