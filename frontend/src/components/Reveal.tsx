import type { ReactNode } from 'react'
import { useInView } from '../hooks/use-in-view'

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`${inView ? 'animate-reveal-up' : 'opacity-0'} motion-reduce:animate-none motion-reduce:opacity-100 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
