import { ArrowUpRight, Mail, MapPin, Sparkles } from 'lucide-react'
import { CONTACT_EMAIL } from '@/lib/site-config'
import { Reveal } from './Reveal'

const CONTACT_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdxlAX15cKSajpuKX_YPutVXX1oaByO3vtIKweiDR6TQDE1TQ/viewform?embedded=true'
const CONTACT_FORM_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSdxlAX15cKSajpuKX_YPutVXX1oaByO3vtIKweiDR6TQDE1TQ/viewform'

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: MapPin, label: 'Office', value: 'Remote-first, serving clients worldwide', href: undefined },
]

const NEXT_STEPS = [
  ['Share the context', 'Tell us about the challenge, the people involved, and what you hope to change.'],
  ['Explore the options', 'We can discuss possible approaches, relevant services, and open questions.'],
  ['Agree on a starting point', 'If there is a fit, define a focused scope and practical next steps together.'],
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="relative">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card/80 p-7 shadow-[var(--shadow)] sm:p-9">
          <div className="contact-heading-glow pointer-events-none absolute -right-20 -top-32 size-72 rounded-full bg-[var(--accent)]/15 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
                <Sparkles className="size-4" />
                Get in touch
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Let's bring your vision to life
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Tell us about your project. Our team will review your requirements
                and get back to you with the right next steps.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2 lg:min-w-[26rem]">
              {CONTACT_INFO.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/70 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow)]"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)]">
                    <item.icon className="size-4.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="break-all text-sm font-medium text-foreground hover:text-[var(--accent)]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">Serving clients worldwide</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="contact-form-layout mt-8 grid items-start gap-6">
          <Reveal delay={120} className="relative min-w-0">
            <div className="contact-form-frame relative isolate rounded-[1.75rem] p-px">
              <div className="contact-frame-gradient pointer-events-none absolute inset-0 rounded-[inherit]" />
              <div className="relative overflow-hidden rounded-[calc(1.75rem-1px)] border border-border/80 bg-card p-3 shadow-[var(--shadow)] sm:p-5">
                <div className="flex flex-col justify-between gap-3 px-2 pb-4 pt-2 sm:flex-row sm:items-center sm:px-4 sm:pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                      Project inquiry
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">
                      A few details to get us started
                    </h3>
                  </div>
                  <a
                    href={CONTACT_FORM_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-[var(--accent-border)] hover:text-foreground"
                  >
                    Open form separately
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
                <iframe
                  src={CONTACT_FORM_URL}
                  title="Client Project Requirement & Inquiry Form"
                  className="block h-[min(78vh,820px)] min-h-[480px] w-full rounded-2xl border-0 bg-white"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={240} className="relative">
            <aside className="contact-side-panel overflow-hidden rounded-[1.75rem] border border-border bg-card p-6 shadow-[var(--shadow)] xl:p-8">
              <div className="contact-orbit-art relative mx-auto aspect-square max-w-[19rem]" aria-hidden="true">
                <span className="contact-orbit contact-orbit--outer" />
                <span className="contact-orbit contact-orbit--middle" />
                <span className="contact-orbit contact-orbit--inner" />
                <span className="contact-orbit-core">
                  <Sparkles className="size-8 text-sky-300" />
                </span>
                <span className="contact-orbit-node contact-orbit-node--one" />
                <span className="contact-orbit-node contact-orbit-node--two" />
                <span className="contact-orbit-node contact-orbit-node--three" />
                <span className="contact-orbit-satellite contact-orbit-satellite--one" />
                <span className="contact-orbit-satellite contact-orbit-satellite--two" />
              </div>

              <div className="relative z-10 -mt-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Your vision, in motion
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground">
                  Big ideas start with a conversation.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Share what you have in mind. We’ll help shape the right path from first steps to launch.
                </p>
                <div className="mt-6 space-y-3">
                  {['Understand your goals', 'Shape a clear plan', 'Build for what’s next'].map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-bg)] text-[11px] font-semibold text-[var(--accent)]">
                        0{index + 1}
                      </span>
                      <span className="text-sm font-medium text-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 border-t border-border pt-12">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            What to expect
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            A useful first conversation, without the pressure
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A little context helps us make the conversation more relevant. Share
            what you can, and we can work through the details together.
          </p>
        </Reveal>
        <div role="list" className="mt-8 grid gap-5 md:grid-cols-3">
          {NEXT_STEPS.map(([title, description], index) => (
            <Reveal key={title} delay={index * 100}>
              <article
                role="listitem"
                className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)]"
              >
                <span className="text-sm font-semibold text-[var(--accent)]">
                  0{index + 1}
                </span>
                <h4 className="mt-3 font-semibold text-foreground">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
