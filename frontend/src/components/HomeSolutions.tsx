import { ArrowRight, BrainCircuit, Database, PanelsTopLeft } from 'lucide-react'
import { Reveal } from './Reveal'

const SOLUTIONS = [
  {
    icon: BrainCircuit,
    title: 'Make better use of data',
    description:
      'Bring AI, analytics, and automation into everyday work to help your team make informed decisions.',
    label: 'AI & data',
  },
  {
    icon: Database,
    title: 'Connect business operations',
    description:
      'Shape ERP and internal systems around the way your people manage finance, inventory, and operations.',
    label: 'Business systems',
  },
  {
    icon: PanelsTopLeft,
    title: 'Create useful digital products',
    description:
      'Design and build responsive web and mobile experiences that are ready to evolve with your needs.',
    label: 'Digital products',
  },
]

export function HomeSolutions() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
          What we help you do
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Technology shaped around real work
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Start with a business challenge. We help you find a practical way to
          solve it with the right mix of software, systems, and expertise.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {SOLUTIONS.map((solution, index) => (
          <Reveal key={solution.title} delay={index * 100}>
            <a
              href="/services"
              className="group block rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow)]"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <solution.icon className="size-5" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                {solution.label}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {solution.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {solution.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                Explore services
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
