import { ArrowUpRight, BrainCircuit, Cloud, Code2, Database, type LucideIcon, Lightbulb, ShieldCheck } from 'lucide-react'
import { useInView } from '../hooks/use-in-view'
import { useTypewriter } from '../hooks/use-typewriter'
import { ServiceVisual, type ServiceVisualVariant } from './ServiceVisual'

interface Service {
  icon: LucideIcon
  variant: ServiceVisualVariant
  title: string
  description: string
}

const SERVICES: Service[] = [
  {
    icon: BrainCircuit,
    variant: 'ai',
    title: 'AI & Machine Learning',
    description:
      'Custom AI models, predictive analytics, and intelligent automation that turn your data into a competitive advantage.',
  },
  {
    icon: Database,
    variant: 'erp',
    title: 'ERP Systems',
    description:
      'Custom ERP solutions that unify inventory, finance, HR, and operations into one reliable system of record.',
  },
  {
    icon: Code2,
    variant: 'web',
    title: 'Web & Mobile Development',
    description:
      'Scalable, high-performance web and mobile applications engineered with modern frameworks and clean architecture.',
  },
  {
    icon: Cloud,
    variant: 'cloud',
    title: 'Cloud & DevOps',
    description:
      'Cloud architecture, CI/CD pipelines, and infrastructure automation that scales reliably with your business.',
  },
  {
    icon: ShieldCheck,
    variant: 'security',
    title: 'Cybersecurity',
    description:
      'End-to-end security audits, threat monitoring, and compliance-ready infrastructure to keep you protected.',
  },
  {
    icon: Lightbulb,
    variant: 'consulting',
    title: 'IT Consulting & Strategy',
    description:
      'Technology roadmaps and digital transformation strategy tailored to your goals and growth stage.',
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow)] ${
        inView ? 'animate-reveal-up' : 'opacity-0'
      }`}
      style={{ animationDelay: inView ? `${index * 90}ms` : undefined }}
    >
      <ServiceVisual variant={service.variant} />

      <span className="relative -mt-7 ml-1 inline-flex size-12 items-center justify-center rounded-xl border border-border bg-background text-[var(--accent)] shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
        <service.icon className="size-5" />
      </span>

      <h3 className="mt-4 flex items-center gap-1 text-lg font-semibold text-foreground">
        {service.title}
        <ArrowUpRight className="size-4 -translate-x-1 text-[var(--accent)] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
    </div>
  )
}

const LABEL_TEXT = 'What we do'
const HEADING_TEXT = 'Full-spectrum technology services'

const SUB_WORDS: { word: string; hl?: boolean }[] = [
  { word: 'From' },
  { word: 'intelligent', hl: true },
  { word: 'automation', hl: true },
  { word: 'to' },
  { word: 'enterprise', hl: true },
  { word: 'systems,', hl: true },
  { word: 'we' },
  { word: 'help' },
  { word: 'you' },
  { word: 'ship' },
  { word: 'technology' },
  { word: 'that' },
  { word: 'actually' },
  { word: 'moves', hl: true },
  { word: 'the', hl: true },
  { word: 'business', hl: true },
  { word: 'forward.', hl: true },
]

function AnimatedSubtext({ active }: { active: boolean }) {
  return (
    <p className="mt-5 text-base leading-relaxed text-muted-foreground">
      {SUB_WORDS.map((w, i) => (
        <span
          key={i}
          className={`inline-block transition-all duration-500 ease-out ${
            active ? 'translate-y-0 opacity-100 blur-none' : 'translate-y-2 opacity-0 blur-[3px]'
          }`}
          style={{ transitionDelay: active ? `${i * 45}ms` : '0ms' }}
        >
          <span
            className={
              w.hl
                ? 'rounded bg-[var(--accent-bg)] px-1 py-0.5 font-medium text-[var(--accent)]'
                : ''
            }
          >
            {w.word}
          </span>
          {i < SUB_WORDS.length - 1 && ' '}
        </span>
      ))}
    </p>
  )
}

function TypedIntro() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const label = useTypewriter(LABEL_TEXT, inView, 45)
  const heading = useTypewriter(HEADING_TEXT, label.done, 28, 200)

  return (
    <div ref={ref} className="mx-auto max-w-2xl text-center">
      <p className="inline-flex items-center justify-center gap-0.5 font-mono text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
        <span className="text-muted-foreground">{'>'}</span>
        {label.output}
        <span
          className={`ml-0.5 inline-block h-4 w-[2px] bg-[var(--accent)] align-middle ${
            label.done && heading.done ? 'animate-cursor-blink' : 'opacity-100'
          }`}
        />
      </p>
      <h2 className="mt-3 min-h-[1.2em] text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {heading.output}
        {label.done && !heading.done && (
          <span className="ml-0.5 inline-block h-[0.85em] w-[3px] bg-[var(--accent)] align-middle" />
        )}
      </h2>
      <AnimatedSubtext active={heading.done} />
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <TypedIntro />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
