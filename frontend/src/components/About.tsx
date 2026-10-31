import { BrainCircuit, Database, ShieldCheck } from 'lucide-react'
import type { CSSProperties } from 'react'
import logoFull from '../assets/logo-full.png'
import { useInView } from '../hooks/use-in-view'
import { ParticleField } from './ParticleField'
import { Reveal } from './Reveal'

const POINTS = [
  { label: 'Innovation-first engineering mindset', tone: 'text-[var(--accent)] bg-[var(--accent)]/10' },
  { label: 'Cross-industry product expertise', tone: 'text-emerald-500 bg-emerald-500/10' },
  { label: 'Agile, transparent delivery process', tone: 'text-violet-500 bg-violet-500/10' },
  { label: 'Long-term technology partnership', tone: 'text-amber-500 bg-amber-500/10' },
]

const BADGES = [
  { icon: BrainCircuit, label: 'AI-Powered', tone: 'bg-[var(--accent)] text-white', pos: '-left-6 top-10', delay: '0s' },
  { icon: ShieldCheck, label: 'Secure', tone: 'bg-emerald-500 text-white', pos: '-right-5 top-1/3', delay: '1.3s' },
  { icon: Database, label: 'Scalable', tone: 'bg-violet-500 text-white', pos: '-left-4 bottom-8', delay: '0.7s' },
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function About() {
  const { ref: imgRef, inView: imgInView } = useInView<HTMLDivElement>()
  const { ref: textRef, inView: textInView } = useInView<HTMLDivElement>()

  return (
    <section id="about" className="mx-auto max-w-7xl overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div
          ref={imgRef}
          className={`relative mx-auto w-full max-w-sm py-6 motion-reduce:animate-none motion-reduce:opacity-100 lg:max-w-none ${imgInView ? 'animate-reveal-up' : 'opacity-0'}`}
        >
          <span className="absolute -left-10 -top-10 size-36 rounded-full bg-[var(--accent)]/25 blur-3xl animate-float-slow" />
          <span
            className="absolute -bottom-10 -right-6 size-44 rounded-full bg-violet-500/20 blur-3xl animate-float-slow"
            style={{ animationDelay: '1.2s' }}
          />

          <div className="relative overflow-hidden rounded-[28px] p-[3px] shadow-[var(--shadow)]">
            <span
              className="absolute inset-[-60%] animate-spin-slower"
              style={{
                backgroundImage:
                  'conic-gradient(from 0deg, var(--accent), #a855f7, #38bdf8, var(--accent))',
              }}
            />
            <div className="relative flex items-center justify-center overflow-hidden rounded-[25px] bg-white p-10">
              {/* bold moving mesh-gradient blobs */}
              <div className="pointer-events-none absolute inset-0 opacity-80 mix-blend-multiply">
                <span className="absolute left-0 top-0 size-[70%] rounded-full bg-blue-400 blur-3xl animate-blob-a" />
                <span className="absolute left-0 top-0 size-[65%] rounded-full bg-fuchsia-400 blur-3xl animate-blob-b" />
                <span className="absolute left-0 top-0 size-[60%] rounded-full bg-cyan-300 blur-3xl animate-blob-c" />
                <span className="absolute left-0 top-0 size-[55%] rounded-full bg-violet-400 blur-3xl animate-blob-d" />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[25px] bg-white/35" />

              {/* live particle network */}
              <ParticleField count={52} />

              {/* sonar rings pulsing from the eye */}
              <span className="pointer-events-none absolute left-1/2 top-[54%] size-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[var(--accent)] animate-sonar" />
              <span
                className="pointer-events-none absolute left-1/2 top-[54%] size-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-violet-500 animate-sonar"
                style={{ animationDelay: '0.9s' }}
              />
              <span
                className="pointer-events-none absolute left-1/2 top-[54%] size-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sky-400 animate-sonar"
                style={{ animationDelay: '1.8s' }}
              />

              {/* pulsing glow behind the eye */}
              <span className="pointer-events-none absolute left-1/2 top-[54%] size-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/40 blur-xl animate-glow-pulse" />

              <img
                src={logoFull}
                alt="Arvision — Our Vision"
                className="relative w-full max-w-[280px] animate-hue-cycle drop-shadow-[0_0_18px_rgba(37,99,235,0.35)]"
              />

              {/* scan-line sweep */}
              <span className="pointer-events-none absolute inset-x-6 top-0 h-10 animate-scan-sweep bg-gradient-to-b from-transparent via-[var(--accent)]/25 to-transparent" />
            </div>
          </div>

          {BADGES.map((badge, i) => (
            <div
              key={badge.label}
              className={`absolute ${badge.pos} z-10 hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold shadow-lg animate-badge-float sm:flex ${badge.tone}`}
              style={
                {
                  animationDelay: badge.delay,
                  '--badge-rot': `${i % 2 === 0 ? -2 : 2}deg`,
                } as CSSProperties
              }
            >
              <badge.icon className="size-3.5" />
              {badge.label}
            </div>
          ))}
        </div>

        <div ref={textRef} className={`${textInView ? 'animate-reveal-up' : 'opacity-0'} motion-reduce:animate-none motion-reduce:opacity-100`} style={{ animationDelay: '150ms' }}>
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            Who we are
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            <span className="bg-gradient-to-r from-[var(--text-h)] via-[var(--accent)] to-violet-500 bg-clip-text text-transparent">
              Vision
            </span>{' '}
            drives everything we build
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Arvision is a technology company built around a single idea — that vision
            drives progress. We combine artificial intelligence, enterprise systems,
            and modern engineering to help businesses solve real problems, automate
            what slows them down, and build products people love to use.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From early-stage startups to established enterprises, we partner closely
            with every client to turn ambitious ideas into reliable, scalable software.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {POINTS.map((point) => (
              <li
                key={point.label}
                className="flex items-start gap-2.5 rounded-xl border border-border bg-card px-3.5 py-3 text-sm text-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow)]"
              >
                <span className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${point.tone}`}>
                  <CheckIcon />
                </span>
                {point.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 grid gap-5 border-t border-border pt-12 md:grid-cols-2 lg:mt-24">
        <Reveal>
          <article className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
              Our mission
            </p>
            <h3 className="mt-3 text-xl font-semibold text-foreground">
              Make technology useful to the people who rely on it
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We bring together thoughtful engineering and a clear understanding
              of business needs to create practical, dependable digital solutions.
            </p>
          </article>
        </Reveal>
        <Reveal delay={100}>
          <article className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
              Our vision
            </p>
            <h3 className="mt-3 text-xl font-semibold text-foreground">
              A future where better tools make room for better ideas
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We see technology as a way to help teams spend less time on friction
              and more time building, serving, and moving forward.
            </p>
          </article>
        </Reveal>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          Principles behind the work
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Start with people', 'Understand the teams and customers who will use what we build.'],
            ['Keep it practical', 'Choose technology for its fit and value, not just because it is new.'],
            ['Build with care', 'Consider reliability, security, and maintainability from the start.'],
            ['Learn as we go', 'Use feedback and changing needs to guide thoughtful improvements.'],
          ].map(([title, description], index) => (
            <Reveal key={title} delay={index * 90}>
              <article className="h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  0{index + 1}
                </p>
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
