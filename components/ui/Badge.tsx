interface BadgeProps {
  label: string
  className?: string
}

export function Badge({ label, className = '' }: BadgeProps) {
  return (
    <span className={`inline-block bg-cyan-500/10 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full border border-cyan-500/30 ${className}`}>
      {label}
    </span>
  )
}
