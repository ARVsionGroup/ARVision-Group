import { ArrowRight, Compass, Layers3, Rocket, Search } from 'lucide-react'
import { Reveal } from './Reveal'

const STEPS = [
  {
    icon: Search,
    title: 'Understand the challenge',
    description:
      'We learn about your goals, users, workflows, and constraints before recommending a solution.',
  },
  {
    icon: Compass,
    title: 'Choose a clear direction',
    description:
      'We outline the scope, priorities, and a practical plan so everyone knows what comes next.',
  },
  {
    icon: Layers3,
    title: 'Build in useful steps',
    description:
      'We develop and review the solution in manageable stages, keeping feedback part of the process.',
  },
  {
    icon: Rocket,
    title: 'Launch and keep improving',
    description:
      'We prepare for handover and identify sensible next steps as your needs change.',
  },
]

export function DeliveryProcess() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            How we work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A clear path from idea to delivery
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Good technology starts with understanding the problem. Each step
            keeps the work focused, collaborative, and connected to your goals.
          </p>
        </Reveal>

        <div role="list" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 100}>
              <article
                role="listitem"
                className="group relative h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <step.icon className="size-5" />
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                {index < STEPS.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-8 z-10 hidden size-5 text-[var(--accent)] lg:block" />
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
