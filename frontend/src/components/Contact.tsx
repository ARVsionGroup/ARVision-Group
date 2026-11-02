import { type FormEvent, useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CONTACT_EMAIL, CONTACT_PHONES } from '@/lib/site-config'
import { Reveal } from './Reveal'

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  ...CONTACT_PHONES.map((phone, index) => ({
    icon: Phone,
    label: index === 0 ? 'Phone' : 'Alternate phone',
    ...phone,
  })),
  { icon: MapPin, label: 'Office', value: 'Remote-first, serving clients worldwide', href: undefined },
]

const NEXT_STEPS = [
  ['Share the context', 'Tell us about the challenge, the people involved, and what you hope to change.'],
  ['Explore the options', 'We can discuss possible approaches, relevant services, and open questions.'],
  ['Agree on a starting point', 'If there is a fit, define a focused scope and practical next steps together.'],
]

export function Contact() {
  const [draftPrepared, setDraftPrepared] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    const message = String(form.get('message') ?? '')

    const subject = encodeURIComponent(`Project inquiry from ${name || 'website visitor'}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setDraftPrepared(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let's bring your vision to life
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Tell us a bit about your project and one of our engineers will follow up
            to schedule a free discovery call.
          </p>

          <ul className="mt-9 space-y-5">
            {CONTACT_INFO.map((item) => (
              <li key={item.label} className="flex items-start gap-3.5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] transition-transform duration-300 hover:rotate-6 hover:scale-110">
                  <item.icon className="size-4.5" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium text-foreground hover:text-[var(--accent)]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow)] sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" required />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Project details
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project, timeline, and goals..."
                required
              />
            </div>

            <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
              Send message
              <Send className="size-4" />
            </Button>

            {draftPrepared && (
              <p role="status" className="mt-4 text-sm text-muted-foreground">
                Your email app should open with a draft. Review it and press Send to contact us.
              </p>
            )}
          </form>
        </Reveal>
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
