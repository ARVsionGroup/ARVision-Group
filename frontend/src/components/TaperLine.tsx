export function TaperLine({ flip = false, className = '' }: { flip?: boolean; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-[3px] w-5 shrink-0 bg-gradient-to-r from-sky-400 to-[var(--text-h)] ${
        flip ? 'scale-x-[-1]' : ''
      } ${className}`}
      style={{ clipPath: 'polygon(0% 48%, 100% 0%, 100% 100%)' }}
    />
  )
}
