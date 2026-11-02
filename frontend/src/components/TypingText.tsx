import { useEffect, useState } from 'react'
import { useInView } from '../hooks/use-in-view'
import { useTypewriter } from '../hooks/use-typewriter'

export function TypingText({
  text,
  className = '',
  speed = 8,
  cursor = false,
}: {
  text: string
  className?: string
  speed?: number
  cursor?: boolean
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.05)
  const [reduceMotion, setReduceMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const { output, done } = useTypewriter(text, inView && !reduceMotion, speed)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReduceMotion(preference.matches)
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [])

  const visibleText = reduceMotion ? text : output

  return (
    <span ref={ref} className={`typing-text ${className}`} aria-label={text}>
      <span className="typing-text__layout" aria-hidden="true">
        {text}
      </span>
      <span
        className={`typing-text__output ${
          cursor && !done && !reduceMotion ? 'typing-text__output--cursor' : ''
        }`}
        aria-hidden="true"
      >
        {visibleText}
      </span>
    </span>
  )
}
