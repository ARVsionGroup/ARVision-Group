import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CallToAction() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground px-8 py-16 text-center sm:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklch,var(--accent)_35%,transparent),transparent_60%)]" />
        <h2 className="relative text-3xl font-semibold tracking-tight text-background sm:text-4xl">
          Have a project in mind?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-background/70">
          Let's build something your users will love. Tell us about your idea and
          we'll get back to you within one business day.
        </p>
        <div className="relative mt-8 flex justify-center">
          <Button size="lg" render={<a href="#contact" />} nativeButton={false}>
            Start a conversation
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
