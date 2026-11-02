import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Compass,
  Layers3,
  Target,
} from 'lucide-react'
import type { CSSProperties } from 'react'
import { SERVICES, SERVICE_TONES } from '../lib/services'
import { Button } from '@/components/ui/button'
import { LiveServiceDashboard } from './LiveServiceDashboard'
import { ServiceCoverArt } from './ServiceCoverArt'
import { Reveal } from './Reveal'
import { TypingText } from './TypingText'

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
        <TypingText text={eyebrow} speed={4} />
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        <TypingText text={title} speed={14} cursor />
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <TypingText text={description} />
        </p>
      )}
    </div>
  )
}

export function ServiceDetail({ slug }: { slug: string }) {
  const service = SERVICES.find((item) => item.slug === slug)
  if (!service) return null

  const Icon = service.icon
  const serviceNumber = String(SERVICES.indexOf(service) + 1).padStart(2, '0')
  const relatedServices = SERVICES.filter((item) => item.slug !== service.slug).slice(0, 3)

  return (
    <div
      className="service-detail-page"
      style={{ '--service-tone': SERVICE_TONES[service.variant] } as CSSProperties}
    >
      <section className="service-editorial-hero relative overflow-hidden border-b border-border bg-background">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -right-52 top-0 size-[38rem] rounded-full bg-[var(--accent)]/10 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-9 lg:px-8 lg:pb-20 lg:pt-12">
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All services
          </a>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
            <div className="relative">
              <p className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                <span className="size-2 rounded-full bg-[var(--accent)]" />
                Capability {serviceNumber} / 06
              </p>
              <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-[4.5rem]">
                <TypingText text={service.title} speed={24} cursor />
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                <TypingText text={service.intro} speed={6} />
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" render={<a href="/contact" />} nativeButton={false}>
                  Discuss your project
                  <ArrowRight className="size-4" />
                </Button>
                <a
                  href="#approach"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  How we work
                  <ChevronRight className="size-4" />
                </a>
              </div>
              <div className="mt-10 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex size-9 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)]">
                  <Icon className="size-4" />
                </span>
                <p className="text-xs font-medium text-muted-foreground">
                  <TypingText text="A focused team, built around this discipline" speed={6} />
                </p>
              </div>
            </div>
            <Reveal>
              <ServiceCoverArt variant={service.variant} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-7 sm:grid-cols-3 lg:px-8">
          {[
            { icon: Target, label: 'Start with the business problem' },
            { icon: Compass, label: 'Choose a clear, practical direction' },
            { icon: Layers3, label: 'Build in useful, reviewable steps' },
          ].map((item, index) => (
            <Reveal key={item.label} delay={index * 80}>
              <div className="flex items-center gap-3 sm:justify-center">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)]">
                  <item.icon className="size-4" />
                </span>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-28">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            The opportunity
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            <TypingText text={service.detailHeading} speed={14} cursor />
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            <TypingText text={service.detailBody} speed={6} />
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:gap-3"
          >
            Talk through your goals
            <ArrowRight className="size-4" />
          </a>
        </Reveal>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Common challenges we help solve
          </p>
          <div className="grid gap-3">
            {service.challenges.map((challenge, index) => (
              <Reveal key={challenge} delay={index * 90}>
                <article className="group flex gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-[var(--accent-border)] hover:shadow-[var(--shadow)] sm:p-6">
                  <span className="font-mono text-sm font-semibold text-[var(--accent)]">
                    0{index + 1}
                  </span>
                  <p className="text-base leading-relaxed text-foreground">
                    <TypingText text={challenge} speed={7} />
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-signal-section overflow-hidden bg-[#07111f] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-9 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-12">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                A closer look · {serviceNumber}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                <TypingText text="Inside the system" speed={14} cursor />
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              <TypingText
                text={`Every project has its own moving parts. This illustrative view shows how ${service.title.toLowerCase()} can connect signals, people, and everyday work—not a live customer system or measured result.`}
                speed={6}
              />
            </p>
          </div>
          <Reveal>
            <LiveServiceDashboard variant={service.variant} />
          </Reveal>
        </div>
      </section>

      <section id="capabilities" className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow={`What ${service.title} includes`}
            title="What this service means in practice"
            description={`Here is what each part of our ${service.title.toLowerCase()} work involves, from the underlying decisions to how it fits into your team's day-to-day operations.`}
            centered
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {service.capabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 80}>
                <article className="flex h-full gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow)] sm:p-6">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)]">
                    <span className="font-mono text-sm font-semibold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </span>
                  <div>
                    <h3 className="font-semibold leading-relaxed text-foreground">
                      <TypingText text={capability.title} speed={12} cursor />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      <TypingText text={capability.description} speed={5} />
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Where it creates value"
          title={`Where ${service.title.toLowerCase()} fits`}
          description="These examples show how the service can solve specific day-to-day needs. The right starting point depends on your systems, users, and priorities."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.applications.map((application, index) => (
            <Reveal key={application.title} delay={index * 75}>
              <article className="group h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow)] sm:p-6">
                <span className="font-mono text-sm font-semibold text-[var(--accent)]">
                  0{index + 1}
                </span>
                <div className="my-5 h-px w-full bg-gradient-to-r from-[var(--accent-border)] to-transparent transition-transform group-hover:scale-x-105" />
                <h3 className="font-semibold leading-relaxed text-foreground">
                  <TypingText text={application.title} speed={12} cursor />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <TypingText text={application.description} speed={5} />
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What you take away"
            title="Useful outputs—not just recommendations"
            description="The exact scope depends on your project. We aim to leave your team with tangible work products, clear decisions, and a practical next step at every stage."
          />
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {service.deliverables.map((deliverable, index) => (
              <Reveal key={deliverable.title} delay={index * 75}>
                <article className="group flex h-full gap-5 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow)] sm:p-6">
                  <span className="font-mono text-2xl font-semibold tracking-tight text-[var(--accent)]/60 transition-colors group-hover:text-[var(--accent)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{deliverable.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      <TypingText text={deliverable.description} speed={5} />
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="border-y border-border bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our delivery approach"
            title="Progress you can see at every stage"
            description="Good delivery is more than a handoff. We keep the work understandable, invite feedback early, and make the next decision clear."
            centered
          />
          <div className="relative mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-transparent via-[var(--accent-border)] to-transparent lg:block" />
            {service.deliveryStages.map((stage, index) => (
              <Reveal key={stage.title} delay={index * 100}>
                <article className="relative h-full rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="relative z-10 flex size-11 items-center justify-center rounded-full border border-[var(--accent-border)] bg-background font-mono text-sm font-semibold text-[var(--accent)] shadow-[0_0_0_6px_var(--background)]">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Phase {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-base font-semibold text-foreground">
                    <TypingText text={stage.title} speed={12} cursor />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <TypingText text={stage.description} speed={5} />
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Built for outcomes
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              <TypingText text="What better can look like" speed={14} cursor />
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              <TypingText
                text="The right measure of success depends on your starting point. We work with you to make the desired change visible and keep the solution connected to real business needs."
                speed={5}
              />
            </p>
          </Reveal>
          <div className="grid gap-3">
            {service.outcomes.map((outcome, index) => (
              <Reveal key={outcome} delay={index * 90}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent-bg)] text-sm font-semibold text-[var(--accent)]">
                    <Check className="size-4" />
                  </span>
                  <p className="font-medium leading-relaxed text-foreground">
                    <TypingText text={outcome} speed={7} />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#08111f] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
            <div className="pointer-events-none absolute -right-10 -top-32 size-80 rounded-full bg-blue-500/25 blur-[90px]" />
            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-300">
                  Ready when you are
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  <TypingText text="Let's make your next step a clear one." speed={14} cursor />
                </h2>
                <p className="mt-4 leading-relaxed text-slate-300">
                  <TypingText
                    text="Share what you're trying to solve. We can help you explore the options, define a useful first step, and plan what comes next."
                    speed={5}
                  />
                </p>
              </div>
              <Button size="lg" render={<a href="/contact" />} nativeButton={false}>
                Start a conversation
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border bg-muted/30 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Explore more" title="Related services" />
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-[var(--accent)]"
            >
              View all services
              <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedServices.map((related) => (
              <a
                key={related.slug}
                href={`/services/${related.slug}`}
                className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow)] sm:p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)]">
                  <related.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-semibold text-foreground">
                  <TypingText text={related.title} speed={12} cursor />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <TypingText text={related.description} speed={5} />
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)]">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
