import type { ReactNode } from 'react'

type Variant = 'ai' | 'erp' | 'web' | 'cloud' | 'security' | 'consulting'

function MockWindow({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex size-full flex-col overflow-hidden rounded-lg border border-border bg-background shadow-sm">
      <div className="flex shrink-0 items-center gap-1.5 border-b border-border bg-muted/50 px-2.5 py-1.5">
        <span className="size-1.5 rounded-full bg-red-400/70" />
        <span className="size-1.5 rounded-full bg-amber-400/70" />
        <span className="size-1.5 rounded-full bg-emerald-400/70" />
        <span className="ml-1.5 text-[9px] font-medium text-muted-foreground">{title}</span>
      </div>
      <div className="relative flex-1 p-2.5">{children}</div>
    </div>
  )
}

function AiVisual() {
  const points = '0,28 10,24 20,26 30,18 40,20 50,10 60,13 70,6 80,8 90,2 100,4'
  return (
    <MockWindow title="AI Insights · Live">
      <div className="flex h-full flex-col gap-1.5">
        <div className="flex gap-1.5">
          <div className="flex-1 rounded-md border border-border bg-muted/40 px-2 py-1">
            <p className="text-[12px] font-bold text-foreground">94.2%</p>
            <p className="text-[7px] text-muted-foreground">Model accuracy</p>
          </div>
          <div className="flex-1 rounded-md border border-border bg-muted/40 px-2 py-1">
            <p className="text-[12px] font-bold text-foreground">1.2M</p>
            <p className="text-[7px] text-muted-foreground">Predictions / day</p>
          </div>
          <span className="flex h-fit items-center gap-1 self-start rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[7px] font-medium text-emerald-500">
            <span className="size-1 animate-pulse rounded-full bg-emerald-500" />
            Live
          </span>
        </div>
        <div className="relative flex-1 overflow-hidden rounded-md border border-border bg-muted/20">
          <svg viewBox="0 0 100 32" preserveAspectRatio="none" className="size-full">
            <defs>
              <linearGradient id="ai-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polyline points={`0,32 ${points} 100,32`} fill="url(#ai-area)" />
            <polyline
              points={points}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-line"
              pathLength={100}
            />
          </svg>
        </div>
      </div>
    </MockWindow>
  )
}

function ErpVisual() {
  const rows = [
    { label: 'Raw Materials', pct: 82, tone: 'bg-emerald-500' },
    { label: 'Finished Goods', pct: 54, tone: 'bg-[var(--accent)]' },
    { label: 'In Transit', pct: 23, tone: 'bg-amber-500' },
  ]
  return (
    <MockWindow title="Inventory · Overview">
      <div className="flex h-full flex-col justify-center gap-2">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center gap-2">
            <span className="w-14 shrink-0 text-[7.5px] font-medium text-muted-foreground">{row.label}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
              <div
                className={`h-full animate-grow-bar-x rounded-full ${row.tone}`}
                style={{ width: `${row.pct}%` }}
              />
            </div>
            <span className="w-6 shrink-0 text-right text-[7.5px] font-semibold text-foreground">{row.pct}%</span>
          </div>
        ))}
      </div>
    </MockWindow>
  )
}

function WebVisual() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-0 right-6">
        <MockWindow title="arvision.in">
          <div className="flex h-full flex-col gap-1.5">
            <div
              className="h-full w-full rounded-md"
              style={{ backgroundImage: 'linear-gradient(135deg, var(--accent), #60a5fa)' }}
            />
            <div className="space-y-1">
              <div className="h-1 w-4/5 rounded-full bg-muted-foreground/30" />
              <div className="h-1 w-3/5 rounded-full bg-muted-foreground/20" />
            </div>
          </div>
        </MockWindow>
      </div>
      <div className="absolute bottom-0 right-0 flex h-[85%] w-10 flex-col overflow-hidden rounded-xl border border-border bg-background shadow-lg">
        <div className="flex h-3 shrink-0 items-center justify-center bg-muted/60">
          <span className="h-0.5 w-3 rounded-full bg-muted-foreground/40" />
        </div>
        <div
          className="h-6 shrink-0"
          style={{ backgroundImage: 'linear-gradient(135deg, var(--accent), #60a5fa)' }}
        />
        <div className="flex-1 space-y-1 p-1">
          <div className="h-2.5 rounded bg-muted" />
          <div className="h-2.5 rounded bg-muted" />
        </div>
        <div className="flex shrink-0 justify-around border-t border-border py-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-1 rounded-full bg-muted-foreground/40" />
          ))}
        </div>
      </div>
    </div>
  )
}

function CloudVisual() {
  const nodes = ['API Gateway', 'App Server', 'Database']
  return (
    <MockWindow title="Infrastructure · 3 nodes">
      <div className="flex h-full flex-col justify-center gap-1.5">
        {nodes.map((node, i) => (
          <div key={node} className="flex items-center gap-1.5 rounded-md border border-border bg-muted/30 px-2 py-1">
            <span className="relative flex size-1.5 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="flex-1 text-[7.5px] font-medium text-foreground">{node}</span>
            <span className="text-[7px] text-emerald-500">99.9{i === 1 ? '8' : '9'}%</span>
          </div>
        ))}
      </div>
    </MockWindow>
  )
}

function SecurityVisual() {
  return (
    <MockWindow title="Security · Monitoring">
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <div className="relative flex size-9 items-center justify-center rounded-full bg-emerald-500/10">
          <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-emerald-400/40" />
          <svg viewBox="0 0 24 24" className="relative size-5" fill="none" stroke="rgb(16 185 129)" strokeWidth="2">
            <path d="M12 2 4 5v6c0 5 3.4 8.4 8 11 4.6-2.6 8-6 8-11V5z" />
            <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-[8px] font-semibold text-emerald-500">All systems protected</p>
        <div className="h-1 w-3/4 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-full animate-shimmer-bar rounded-full bg-[length:200%_100%]" style={{ backgroundImage: 'linear-gradient(90deg, var(--accent), #60a5fa, var(--accent))' }} />
        </div>
      </div>
    </MockWindow>
  )
}

function ConsultingVisual() {
  const stages = ['Discover', 'Design', 'Build', 'Launch']
  return (
    <MockWindow title="Roadmap · Q3 Strategy">
      <div className="flex h-full flex-col justify-center gap-3">
        <div className="flex gap-1.5">
          <div className="flex-1 rounded-md border border-border bg-muted/40 px-1.5 py-1">
            <p className="text-[10px] font-bold text-emerald-500">+38%</p>
            <p className="text-[6.5px] text-muted-foreground">Efficiency gain</p>
          </div>
          <div className="flex-1 rounded-md border border-border bg-muted/40 px-1.5 py-1">
            <p className="text-[10px] font-bold text-foreground">Q3</p>
            <p className="text-[6.5px] text-muted-foreground">On track</p>
          </div>
        </div>
        <div className="relative flex items-center justify-between px-1">
          <div className="absolute inset-x-1 top-1/2 h-px -translate-y-1/2 bg-border" />
          {stages.map((stage, i) => (
            <div key={stage} className="relative flex flex-col items-center gap-1">
              <span
                className={`size-2 rounded-full border-2 ${
                  i <= 1 ? 'border-[var(--accent)] bg-[var(--accent)]' : 'border-border bg-background'
                }`}
              />
              <span className="text-[6px] font-medium text-muted-foreground">{stage}</span>
            </div>
          ))}
        </div>
      </div>
    </MockWindow>
  )
}

const VARIANTS: Record<Variant, React.FC> = {
  ai: AiVisual,
  erp: ErpVisual,
  web: WebVisual,
  cloud: CloudVisual,
  security: SecurityVisual,
  consulting: ConsultingVisual,
}

export function ServiceVisual({ variant }: { variant: Variant }) {
  const Visual = VARIANTS[variant]
  return (
    <div className="relative h-36 w-full overflow-hidden rounded-xl border border-border bg-[radial-gradient(circle_at_30%_20%,var(--accent-bg),transparent_70%)] p-2">
      <Visual />
    </div>
  )
}

export type { Variant as ServiceVisualVariant }
