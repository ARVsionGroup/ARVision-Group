import { type FormEvent, useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'hello@arvision.tech', href: 'mailto:hello@arvision.tech' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 012-3456', href: 'tel:+15550123456' },
  { icon: MapPin, label: 'Office', value: 'Remote-first, serving clients worldwide', href: undefined },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    const message = String(form.get('message') ?? '')

    const subject = encodeURIComponent(`Project inquiry from ${name || 'website visitor'}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
    window.location.href = `mailto:hello@arvision.tech?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
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
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)]">
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
        </div>

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

          {sent && (
            <p className="mt-4 text-sm text-muted-foreground">
              Opening your email client to send the message — we'll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
