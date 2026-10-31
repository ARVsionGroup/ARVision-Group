import { useCountUp } from '../hooks/use-count-up'
import { useInView } from '../hooks/use-in-view'

const STATS = [
  { target: 50, suffix: '+', label: 'Projects delivered' },
  { target: 30, suffix: '+', label: 'Global clients' },
  { target: 5, suffix: '+', label: 'Years of experience' },
  { target: 24, suffix: '/7', label: 'Dedicated support' },
]

function StatItem({ stat, index }: { stat: (typeof STATS)[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const value = useCountUp(stat.target, inView, 1200 + index * 150)

  return (
    <div
      ref={ref}
      className={`group text-center transition-transform duration-300 hover:-translate-y-1 motion-reduce:animate-none motion-reduce:opacity-100 ${
        inView ? 'animate-reveal-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <p className="bg-gradient-to-r from-[var(--text-h)] via-[var(--accent)] to-sky-400 bg-clip-text text-3xl font-bold text-transparent transition-all duration-300 group-hover:drop-shadow-[0_0_12px_var(--accent-bg)] sm:text-4xl">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
    </div>
  )
}

export function Stats() {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4 lg:px-8">
        {STATS.map((stat, index) => (
          <StatItem key={stat.label} stat={stat} index={index} />
        ))}
      </div>
    </section>
  )
}
