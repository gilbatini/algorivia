import { TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export function Textarea({ label, id, className = '', ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm text-white/70">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500 transition-colors resize-none ${className}`}
        {...props}
      />
    </div>
  )
}
