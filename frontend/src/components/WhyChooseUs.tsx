import { Layers, ShieldCheck, Target, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useInView } from '../hooks/use-in-view'
import { Reveal } from './Reveal'

interface Reason {
  icon: LucideIcon
  title: string
  description: string
  tone: string
}

const REASONS: Reason[] = [
  {
    icon: Target,
    title: 'Vision-driven approach',
    description: 'We start with your business goals, not our tech stack — every build maps back to a measurable outcome.',
    tone: 'bg-[var(--accent)]/10 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white',
  },
  {
    icon: Users,
    title: 'Expert engineering team',
    description: 'Senior engineers, designers, and strategists work on your project — not a revolving bench of juniors.',
    tone: 'bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent process',
    description: 'Clear timelines, regular updates, and honest communication at every stage of the build.',
    tone: 'bg-violet-500/10 text-violet-500 group-hover:bg-violet-500 group-hover:text-white',
  },
  {
    icon: Layers,
    title: 'Built to scale',
    description: 'Architecture designed to grow with you — from early MVP to enterprise-grade infrastructure.',
    tone: 'bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white',
  },
]

const PARTNERSHIP_POINTS = [
  {
    title: 'A shared understanding',
    description:
      'We align on the problem, priorities, and what a useful outcome looks like before the build begins.',
  },
  {
    title: 'Visible progress',
    description:
      'Work is broken into clear stages so you can review direction, share feedback, and make informed decisions.',
  },
  {
    title: 'A considered handover',
    description:
      'We keep the people who will operate the solution in mind, with attention to documentation and maintainability.',
  },
]

function ReasonItem({ reason, index }: { reason: Reason; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`group flex gap-4 rounded-2xl p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-[var(--shadow)] ${
        inView ? 'animate-reveal-up' : 'opacity-0'
      } motion-reduce:animate-none motion-reduce:opacity-100`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="flex flex-col items-center">
        <span
          className={`flex size-10 shrink-0 items-center justify-center rounded-xl border border-border transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:border-transparent group-hover:shadow-lg ${reason.tone}`}
        >
          <reason.icon className="size-4.5" />
        </span>
        <span className="mt-1 text-[11px] font-medium text-muted-foreground">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div>
        <h3 className="text-base font-semibold text-foreground">{reason.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {reason.description}
        </p>
      </div>
    </div>
  )
}

export function WhyChooseUs() {
  return (
    <section id="why-us" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            Why Arvision
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A partner that sees the whole picture
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            We don't just ship code — we build technology that's aligned with your
            business, your users, and where you're headed next.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {REASONS.map((reason, index) => (
            <ReasonItem key={reason.title} reason={reason} index={index} />
          ))}
        </div>
      </div>

      <div className="mt-20 border-t border-border pt-12">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            A thoughtful partnership
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Good delivery is about more than the code
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The way a solution is planned, reviewed, and handed over matters
            just as much as the technology behind it.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {PARTNERSHIP_POINTS.map((point, index) => (
            <Reveal key={point.title} delay={index * 100}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)]">
                <p className="text-sm font-semibold text-[var(--accent)]">
                  0{index + 1}
                </p>
                <h4 className="mt-3 font-semibold text-foreground">{point.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
