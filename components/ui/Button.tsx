import { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-cyan-500 hover:bg-cyan-400 text-black font-semibold',
  secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
  ghost: 'text-cyan-400 hover:text-cyan-300 underline-offset-4 hover:underline',
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center px-6 py-3 rounded-lg transition-colors duration-200 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
