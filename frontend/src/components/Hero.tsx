import { ArrowRight, Eye, Sparkles, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useCountUp } from '../hooks/use-count-up'
import { ParticleField } from './ParticleField'

function useLiveBars(count: number) {
  const [bars, setBars] = useState<number[]>(() =>
    Array.from({ length: count }, () => 35 + Math.random() * 60)
  )

  useEffect(() => {
    const id = setInterval(() => {
      setBars((prev) => prev.map((v) => Math.min(96, Math.max(30, v + (Math.random() - 0.5) * 36))))
    }, 1400)
    return () => clearInterval(id)
  }, [])

  return bars
}

const BAR_COLORS = ['#2563eb', '#4f5fe0', '#7c5bd6', '#a855c9', '#d454ab', '#ec4899']

function barColor(index: number, total: number) {
  const t = index / Math.max(total - 1, 1)
  const pos = t * (BAR_COLORS.length - 1)
  const i = Math.min(Math.floor(pos), BAR_COLORS.length - 2)
  return BAR_COLORS[i]
}

function StatTile({
  label,
  target,
  decimals = 0,
  suffix = '',
  tone,
}: {
  label: string
  target: number
  decimals?: number
  suffix?: string
  tone: string
}) {
  const factor = 10 ** decimals
  const value = useCountUp(Math.round(target * factor), true, 1600)
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-background px-3 py-3 text-center transition-transform duration-300 hover:-translate-y-1">
      <span className={`absolute inset-x-0 top-0 h-0.5 ${tone}`} />
      <p className="text-lg font-semibold text-foreground">
        {(value / factor).toFixed(decimals)}
        {suffix}
      </p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  )
}

export function Hero() {
  const bars = useLiveBars(10)
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)
  const peakIdx = bars.indexOf(Math.max(...bars))
  const activeIdx = hoverIdx ?? peakIdx

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span className="absolute left-[-10%] top-[-15%] size-[560px] rounded-full bg-[var(--accent)]/25 blur-[110px] animate-blob-a" />
        <span className="absolute right-[-10%] top-[-10%] size-[480px] rounded-full bg-violet-500/20 blur-[110px] animate-blob-b" />
        <span className="absolute bottom-[-20%] left-[25%] size-[520px] rounded-full bg-sky-400/15 blur-[110px] animate-blob-c" />
        <div className="bg-grid absolute inset-0 opacity-[0.35]" />
        <div className="absolute inset-0 opacity-50">
          <ParticleField count={34} />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <div
            className="inline-flex animate-reveal-up items-center gap-2 rounded-full border border-[var(--accent-border)] bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-[0_0_20px_var(--accent-bg)]"
          >
            <Sparkles className="size-3.5 animate-pulse text-[var(--accent)]" />
            AI &amp; Enterprise Technology Partner
          </div>

          <h1
            className="mt-6 animate-reveal-up text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[56px] lg:leading-[1.08]"
            style={{ animationDelay: '80ms' }}
          >
            Engineering the future through{' '}
            <span className="animate-gradient-breathe bg-gradient-to-r from-[var(--accent)] via-violet-500 to-sky-400 bg-clip-text text-transparent">
              intelligent vision
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl animate-reveal-up text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: '160ms' }}
          >
            Arvision designs and builds AI, ERP, and software products that help
            ambitious businesses see further, move faster, and compete smarter.
          </p>

          <div
            className="mt-9 flex animate-reveal-up flex-wrap items-center gap-4"
            style={{ animationDelay: '240ms' }}
          >
            <Button size="lg" render={<a href="#contact" />} nativeButton={false}>
              Start a project
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<a href="#services" />}
              nativeButton={false}
            >
              Explore services
            </Button>
          </div>

          <div
            className="mt-12 flex animate-reveal-up items-center gap-6 text-sm text-muted-foreground"
            style={{ animationDelay: '320ms' }}
          >
            <div className="flex -space-x-2">
              {['A', 'R', 'V', 'I'].map((letter, i) => (
                <span
                  key={letter}
                  className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-[var(--accent)] to-violet-500 text-xs font-semibold text-white transition-transform hover:z-10 hover:scale-110"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <p>Trusted by startups and enterprise teams worldwide</p>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-md animate-reveal-up lg:max-w-none"
          style={{ animationDelay: '200ms' }}
        >
          <div className="relative overflow-hidden rounded-[28px] p-[3px] shadow-[var(--shadow)]">
            <span
              className="absolute inset-[-60%] animate-spin-slower"
              style={{
                animationDuration: '12s',
                backgroundImage:
                  'conic-gradient(from 0deg, var(--accent), #a855f7, #38bdf8, var(--accent))',
              }}
            />
            <div className="relative overflow-hidden rounded-[25px] bg-card p-6">
              <span className="pointer-events-none absolute inset-x-6 top-0 h-12 animate-scan-sweep bg-gradient-to-b from-transparent via-[var(--accent)]/20 to-transparent" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex size-9 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)]">
                    <span className="absolute inline-flex size-full animate-ping-slow rounded-xl bg-[var(--accent)]/30" />
                    <Eye className="relative size-4.5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Vision Engine</p>
                    <p className="text-xs text-muted-foreground">Live inference</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-500">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Active
                </span>
              </div>

              <div className="relative mt-6 grid grid-cols-3 gap-3">
                <StatTile label="Accuracy" target={99.2} decimals={1} suffix="%" tone="bg-[var(--accent)]" />
                <StatTile label="Latency" target={18} suffix="ms" tone="bg-violet-500" />
                <StatTile label="Uptime" target={99.9} decimals={1} suffix="%" tone="bg-emerald-500" />
              </div>

              <div className="relative mt-5 flex items-center justify-between text-[11px]">
                <span className="font-medium text-muted-foreground">Inference throughput</span>
                <span className="flex items-center gap-1 font-medium text-emerald-500">
                  <TrendingUp className="size-3.5" />
                  +12% this week
                </span>
              </div>

              <div className="relative mt-2">
                <div className="relative flex h-32 items-end gap-[6px] rounded-xl border border-border bg-background px-3 pb-3 pt-7">
                  <div className="pointer-events-none absolute inset-x-3 top-7 bottom-3 flex flex-col justify-between">
                    {[0, 1, 2, 3].map((i) => (
                      <span key={i} className="h-px w-full bg-border/50" />
                    ))}
                  </div>

                  {bars.map((h, i) => {
                    const color = barColor(i, bars.length)
                    const isActive = activeIdx === i
                    return (
                      <div
                        key={i}
                        className="group relative flex h-full flex-1 items-end"
                        onMouseEnter={() => setHoverIdx(i)}
                        onMouseLeave={() => setHoverIdx(null)}
                      >
                        {isActive && (
                          <span
                            className="pointer-events-none absolute -top-1 left-1/2 z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md px-1.5 py-0.5 text-[10px] font-semibold text-white shadow-md transition-opacity"
                            style={{ backgroundColor: color }}
                          >
                            {Math.round(h)}%
                            <span
                              className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent"
                              style={{ borderTopColor: color }}
                            />
                          </span>
                        )}
                        <div
                          className="relative w-full origin-bottom transition-[height,transform] duration-[1200ms] ease-out group-hover:scale-x-110"
                          style={{ height: `${h}%` }}
                        >
                          <span
                            className="absolute inset-0 rounded-t-[4px] transition-[filter] duration-200"
                            style={{
                              backgroundImage: `linear-gradient(180deg, ${color}, ${color}cc)`,
                              boxShadow: `0 0 10px -2px ${color}aa`,
                              filter: isActive ? 'brightness(1.15)' : undefined,
                            }}
                          />
                          <span
                            className="absolute inset-x-0 top-0 h-[3px] rounded-t-[4px]"
                            style={{ backgroundColor: color, filter: 'brightness(1.4)' }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-1.5 flex items-center justify-between text-[10px] text-muted-foreground">
                  <span>9h ago</span>
                  <span>Now</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-12 -left-6 hidden animate-badge-float rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow)] sm:block">
            <p className="text-xs text-muted-foreground">Projects delivered</p>
            <p className="text-xl font-semibold text-foreground">50+</p>
          </div>

          <div
            className="absolute -right-4 top-10 hidden animate-badge-float items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 to-[var(--accent)] px-3 py-1.5 text-xs font-semibold text-white shadow-lg sm:flex"
            style={{ animationDelay: '1.4s' }}
          >
            <Sparkles className="size-3.5" />
            AI-Driven
          </div>
        </div>
      </div>
    </section>
  )
}
