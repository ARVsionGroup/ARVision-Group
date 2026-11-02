import type { ReactNode } from 'react'
import { Monitor, Smartphone } from 'lucide-react'
import type { ServiceVisualVariant } from './ServiceVisual'

interface DashboardInfo {
  workspace: string
  description: string
  chartTitle: string
  footnote: string
}

const DASHBOARDS: Record<ServiceVisualVariant, DashboardInfo> = {
  ai: {
    workspace: 'Model evaluation lab',
    description: 'Confidence distribution · evaluation sample',
    chartTitle: 'Prediction confidence',
    footnote: 'Illustrative model-evaluation view · not production data',
  },
  erp: {
    workspace: 'Operations control room',
    description: 'Stock composition · warehouse sample',
    chartTitle: 'Inventory by category',
    footnote: 'Illustrative inventory distribution · sample values',
  },
  web: {
    workspace: 'Web & mobile engineering lab',
    description: 'Responsive release validation · sample audit',
    chartTitle: 'Web vs mobile quality scores',
    footnote: 'Illustrative Lighthouse-style comparison · sample values, not a live audit',
  },
  cloud: {
    workspace: 'Cloud infrastructure monitor',
    description: 'Multi-zone service topology · illustrative environment',
    chartTitle: 'Live cloud topology & autoscaling',
    footnote: 'Animated infrastructure concept · sample metrics, not connected to a live cloud account',
  },
  security: {
    workspace: 'Security posture review',
    description: 'Finding severity · sample assessment',
    chartTitle: 'Risk distribution',
    footnote: 'Illustrative severity breakdown · not a security scan',
  },
  consulting: {
    workspace: 'Transformation planning room',
    description: 'Initiative status · sample roadmap',
    chartTitle: 'Roadmap portfolio',
    footnote: 'Illustrative planning board · sample progress only',
  },
}

function Panel({
  title,
  hint,
  children,
  className = '',
}: {
  title: string
  hint?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`service-stat-panel ${className}`}>
      <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-xs font-semibold text-slate-200">{title}</h3>
          {hint && <p className="mt-1 text-[10px] text-slate-500">{hint}</p>}
        </div>
      </div>
      {children}
    </section>
  )
}

function Stat({
  label,
  value,
  detail,
  tone = 'sky',
}: {
  label: string
  value: string
  detail: string
  tone?: 'sky' | 'violet' | 'green' | 'amber' | 'red'
}) {
  return (
    <div className={`service-stat-card service-stat-card--${tone}`}>
      <p className="text-[9px] font-medium text-slate-400">{label}</p>
      <p className="mt-1.5 font-mono text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {value}
      </p>
      <p className="mt-1 text-[9px] text-slate-500">{detail}</p>
    </div>
  )
}

function AiStatistics() {
  const distribution = [12, 18, 30, 48, 69, 88, 96, 83, 62, 40, 23, 12]
  return (
    <div className="grid gap-4 lg:grid-cols-[1.35fr_0.85fr]">
      <Panel title="Confidence distribution" hint="Predictions grouped by model confidence">
        <div className="flex items-end justify-between gap-1.5 border-b border-l border-white/10 px-2 pb-2 pt-5">
          {distribution.map((height, index) => (
            <div key={index} className="flex h-36 flex-1 items-end justify-center">
              <span
                className={`service-stat-bar service-stat-bar--ai w-full max-w-7 rounded-t-sm ${
                  index >= 7 ? 'opacity-90' : 'opacity-45'
                }`}
                style={{
                  height: `${height}%`,
                  animationDelay: `${index * 65}ms`,
                }}
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none relative -mt-36 ml-[39%] hidden h-36 border-l border-dashed border-amber-300/70 sm:block" />
        <div className="mt-2 flex justify-between pl-2 text-[9px] text-slate-500">
          <span>Lower confidence</span>
          <span>Confidence score</span>
          <span>Higher confidence</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[9px] text-slate-400">
          <span className="inline-flex items-center gap-2">
            <i className="size-2 rounded-sm bg-violet-400" /> Needs review
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="size-2 rounded-sm bg-sky-300" /> Higher confidence
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="h-3 border-l border-dashed border-amber-300" /> Review threshold
          </span>
        </div>
      </Panel>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        <Stat label="Evaluation set" value="2,480" detail="Representative examples" />
        <Stat label="Reviewed answers" value="91.6%" detail="Illustrative acceptance rate" tone="violet" />
        <Stat label="Escalated to people" value="8.4%" detail="Human review path" tone="amber" />
      </div>
    </div>
  )
}

function ErpStatistics() {
  const inventory = [
    { name: 'Raw materials', value: 74, amount: '$148k', tone: 'service-erp-segment--one' },
    { name: 'Work in progress', value: 48, amount: '$96k', tone: 'service-erp-segment--two' },
    { name: 'Finished goods', value: 88, amount: '$176k', tone: 'service-erp-segment--three' },
    { name: 'In transit', value: 34, amount: '$68k', tone: 'service-erp-segment--four' },
  ]
  return (
    <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
      <Panel title="Stock by operational stage" hint="Relative value across a sample warehouse">
        <div className="flex flex-wrap gap-4 text-[9px] text-slate-400">
          {[
            ['service-erp-dot--one', 'Raw'],
            ['service-erp-dot--two', 'In progress'],
            ['service-erp-dot--three', 'Finished'],
            ['service-erp-dot--four', 'In transit'],
          ].map(([tone, label]) => (
            <span key={label} className="inline-flex items-center gap-1.5">
              <i className={`size-2 rounded-sm ${tone}`} />
              {label}
            </span>
          ))}
        </div>
        <div className="mt-6 grid gap-5">
          {inventory.map((item, index) => (
            <div key={item.name} className="service-erp-row" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-[10px] font-medium text-slate-300">{item.name}</span>
                <span className="font-mono text-[10px] text-slate-400">{item.amount}</span>
              </div>
              <div className="flex h-3 overflow-hidden rounded-sm bg-white/5">
                <span className={`service-erp-segment ${item.tone}`} style={{ width: `${item.value}%` }} />
                <span className="h-full flex-1 bg-white/[0.035]" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-between border-t border-white/10 pt-3 text-[9px] text-slate-500">
          <span>0</span>
          <span>Relative stock value</span>
          <span>100</span>
        </div>
      </Panel>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        <Stat label="Open purchase orders" value="128" detail="Across sample suppliers" tone="green" />
        <Stat label="Orders to fulfill" value="64" detail="Current work queue" />
        <Stat label="Needs replenishment" value="12" detail="Items below reorder point" tone="amber" />
      </div>
    </div>
  )
}

function WebMobileStatistics() {
  const categories = [
    { label: 'Performance', web: 94, mobile: 88 },
    { label: 'Accessibility', web: 97, mobile: 96 },
    { label: 'SEO readiness', web: 92, mobile: 90 },
    { label: 'Best practices', web: 96, mobile: 93 },
  ]

  return (
    <div className="grid gap-4">
      <Panel
        title="One product, designed for every screen"
        hint="Animated interface concept · desktop web and mobile app"
      >
        <div className="service-app-preview grid items-center gap-5 md:grid-cols-[1fr_auto_0.45fr] md:gap-8">
          <div className="service-web-window">
            <div className="service-web-window__chrome">
              <span />
              <span />
              <span />
              <div className="service-web-window__url">app.arvision.in / dashboard</div>
            </div>
            <div className="service-web-window__body">
              <div className="service-web-window__nav">
                <span className="service-web-window__brand">NORTHSTAR</span>
                <span>Overview</span>
                <span>Projects</span>
                <span>Reports</span>
                <i className="service-web-window__avatar">A</i>
              </div>
              <div className="service-web-window__content">
                <div className="service-web-window__greeting">
                  <span className="service-web-window__eyebrow">MONDAY, 09:41 AM</span>
                  <strong>Your workspace</strong>
                  <span>Here is what is happening today.</span>
                </div>
                <div className="service-web-window__tiles">
                  <div><span>Open tasks</span><strong>12</strong><i>+3 this week</i></div>
                  <div><span>Completion</span><strong>84%</strong><i>On track</i></div>
                  <div><span>Team activity</span><strong>26</strong><i>Across 4 projects</i></div>
                </div>
                <div className="service-web-window__chart">
                  <span>Weekly activity</span>
                  <div>
                    {[38, 58, 46, 75, 62, 88, 69, 96, 78, 91].map((height, index) => (
                      <i key={index} style={{ height: `${height}%`, animationDelay: `${index * 70}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
              <span className="service-web-window__sync">
                <i /> Changes synced
              </span>
            </div>
          </div>

          <div className="service-app-preview__link" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="service-mobile-device" role="img" aria-label="Animated mobile app interface preview">
            <div className="service-mobile-device__frame">
              <span className="service-mobile-device__speaker" />
              <div className="service-mobile-device__screen">
                <div className="service-mobile-device__status">
                  <span>9:41</span>
                  <span>●●●  ▰</span>
                </div>
                <div className="service-mobile-device__header">
                  <div><span>Good morning,</span><strong>Alex Morgan</strong></div>
                  <i>A</i>
                </div>
                <div className="service-mobile-device__highlight">
                  <span>YOUR WEEK</span>
                  <strong>Looking good.</strong>
                  <div><i /><span>4 of 5 goals on track</span></div>
                  <b><i /></b>
                </div>
                <div className="service-mobile-device__section">
                  <span>Today</span>
                  <span>See all</span>
                </div>
                <div className="service-mobile-device__task">
                  <i className="service-mobile-device__task-check" />
                  <span><b>Product review</b><small>Design team · 10:30</small></span>
                  <em />
                </div>
                <div className="service-mobile-device__task">
                  <i className="service-mobile-device__task-check service-mobile-device__task-check--done" />
                  <span><b>Update project brief</b><small>Completed · 9:15</small></span>
                  <em />
                </div>
                <div className="service-mobile-device__tabbar">
                  <i className="service-mobile-device__tab service-mobile-device__tab--active" />
                  <i className="service-mobile-device__tab" />
                  <i className="service-mobile-device__tab" />
                  <i className="service-mobile-device__tab" />
                </div>
              </div>
            </div>
            <span className="service-mobile-device__notification"><i /> Synced just now</span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-white/10 pt-3 text-[9px] text-slate-400">
          <span className="inline-flex items-center gap-2"><i className="size-1.5 rounded-full bg-sky-300" /> Responsive web experience</span>
          <span className="inline-flex items-center gap-2"><i className="size-1.5 rounded-full bg-violet-300" /> Native-feeling mobile UI</span>
          <span className="inline-flex items-center gap-2"><i className="size-1.5 rounded-full bg-emerald-300" /> Shared product data</span>
        </div>
      </Panel>

      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
      <Panel title="Web and mobile quality comparison" hint="Four quality dimensions · sample release">
        <div className="mb-5 flex flex-wrap gap-5 text-[9px] text-slate-300">
          <span className="inline-flex items-center gap-2">
            <Monitor className="size-3.5 text-sky-300" />
            Web
            <i className="size-2 rounded-sm bg-sky-300" />
          </span>
          <span className="inline-flex items-center gap-2">
            <Smartphone className="size-3.5 text-violet-300" />
            Mobile
            <i className="size-2 rounded-sm bg-violet-300" />
          </span>
        </div>
        <div className="grid grid-cols-[5.5rem_1fr_2.4rem] items-center gap-x-3 gap-y-4">
          {categories.map((category, index) => (
            <div key={category.label} className="contents">
              <span className="text-[9px] leading-tight text-slate-400">{category.label}</span>
              <div className="grid gap-1.5">
                <div className="h-2.5 overflow-hidden rounded-sm bg-white/[0.06]">
                  <span
                    className="service-device-score service-device-score--web block h-full rounded-sm"
                    style={{ width: `${category.web}%`, animationDelay: `${index * 90}ms` }}
                  />
                </div>
                <div className="h-2.5 overflow-hidden rounded-sm bg-white/[0.06]">
                  <span
                    className="service-device-score service-device-score--mobile block h-full rounded-sm"
                    style={{ width: `${category.mobile}%`, animationDelay: `${index * 90 + 100}ms` }}
                  />
                </div>
              </div>
              <span className="flex flex-col gap-1 text-right font-mono text-[8px] text-slate-400">
                <span>{category.web}</span>
                <span>{category.mobile}</span>
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-between border-t border-white/10 pt-3 text-[9px] text-slate-500">
          <span>Lower score</span>
          <span>Relative quality score · out of 100</span>
          <span>100</span>
        </div>
      </Panel>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        <Stat label="Web performance" value="94 / 100" detail="Illustrative sample audit" tone="sky" />
        <Stat label="Mobile performance" value="88 / 100" detail="Illustrative sample audit" tone="violet" />
        <Stat label="Responsive viewports" value="12" detail="Example device test matrix" tone="green" />
      </div>
      </div>
    </div>
  )
}

function CloudStatistics() {
  const capacity = [
    { label: 'API gateway', value: 38, max: 100 },
    { label: 'App cluster', value: 72, max: 100 },
    { label: 'Worker pool', value: 54, max: 100 },
  ]

  return (
    <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
      <Panel title="Service topology" hint="Requests flowing across a sample multi-zone cloud setup">
        <div className="service-cloud-topology relative">
          <svg
            viewBox="0 0 600 270"
            role="img"
            aria-label="Animated diagram connecting an API gateway to application servers, a worker pool, and a database across two availability zones"
            className="service-cloud-topology__svg"
          >
            <defs>
              <linearGradient id="cloud-zone-fill" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity=".05" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity=".02" />
              </linearGradient>
              <linearGradient id="cloud-node-fill" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#132b46" />
                <stop offset="100%" stopColor="#111c31" />
              </linearGradient>
            </defs>
            <rect x="134" y="34" width="216" height="202" rx="18" className="service-cloud-zone" fill="url(#cloud-zone-fill)" />
            <rect x="363" y="34" width="216" height="202" rx="18" className="service-cloud-zone" fill="url(#cloud-zone-fill)" />
            <text x="150" y="55" className="service-cloud-zone-label">ZONE A</text>
            <text x="379" y="55" className="service-cloud-zone-label">ZONE B</text>

            <path d="M92 135H160M265 106V135M328 135H390M265 164V194M463 164V194" className="service-cloud-link" />
            <path d="M265 135H463V106" className="service-cloud-link service-cloud-link--secondary" />

            <g className="service-cloud-node service-cloud-node--gateway">
              <rect x="12" y="106" width="80" height="58" rx="12" fill="url(#cloud-node-fill)" />
              <path d="M38 129h28M38 137h20M38 145h24" className="service-cloud-node-detail" />
              <circle cx="27" cy="127" r="3" className="service-cloud-node-dot" />
              <text x="52" y="181" textAnchor="middle" className="service-cloud-label">API GATEWAY</text>
            </g>

            <g className="service-cloud-node service-cloud-node--app">
              <rect x="201" y="77" width="128" height="58" rx="12" fill="url(#cloud-node-fill)" />
              <rect x="216" y="91" width="12" height="12" rx="3" className="service-cloud-instance" />
              <rect x="234" y="91" width="12" height="12" rx="3" className="service-cloud-instance service-cloud-instance--delay" />
              <rect x="252" y="91" width="12" height="12" rx="3" className="service-cloud-instance service-cloud-instance--delay-two" />
              <text x="265" y="119" textAnchor="middle" className="service-cloud-node-title">APP CLUSTER</text>
              <text x="265" y="151" textAnchor="middle" className="service-cloud-label">AUTO-SCALING</text>
            </g>

            <g className="service-cloud-node service-cloud-node--database">
              <rect x="390" y="77" width="146" height="58" rx="12" fill="url(#cloud-node-fill)" />
              <ellipse cx="414" cy="95" rx="9" ry="4" className="service-cloud-db-cap" />
              <path d="M405 95v20c0 5 18 5 18 0V95M405 105c0 5 18 5 18 0" className="service-cloud-db-line" />
              <text x="468" y="101" textAnchor="middle" className="service-cloud-node-title">DATABASE</text>
              <text x="468" y="117" textAnchor="middle" className="service-cloud-label">REPLICATED</text>
              <text x="463" y="151" textAnchor="middle" className="service-cloud-label">PRIVATE SUBNET</text>
            </g>

            <g className="service-cloud-node service-cloud-node--worker">
              <rect x="201" y="164" width="128" height="58" rx="12" fill="url(#cloud-node-fill)" />
              <rect x="216" y="177" width="10" height="10" rx="2" className="service-cloud-worker-block" />
              <rect x="231" y="177" width="10" height="10" rx="2" className="service-cloud-worker-block service-cloud-worker-block--delay" />
              <rect x="246" y="177" width="10" height="10" rx="2" className="service-cloud-worker-block service-cloud-worker-block--delay-two" />
              <text x="265" y="206" textAnchor="middle" className="service-cloud-node-title">WORKER POOL</text>
            </g>

            <g className="service-cloud-node service-cloud-node--cache">
              <rect x="390" y="164" width="146" height="58" rx="12" fill="url(#cloud-node-fill)" />
              <circle cx="414" cy="190" r="10" className="service-cloud-cache-ring" />
              <path d="M410 190h8M414 186v8" className="service-cloud-cache-line" />
              <text x="468" y="188" textAnchor="middle" className="service-cloud-node-title">CACHE</text>
              <text x="468" y="204" textAnchor="middle" className="service-cloud-label">LOW-LATENCY</text>
            </g>

            <circle r="4" className="service-cloud-packet service-cloud-packet--one">
              <animateMotion dur="3.2s" repeatCount="indefinite" path="M92 135H160L201 106" />
            </circle>
            <circle r="4" className="service-cloud-packet service-cloud-packet--two">
              <animateMotion dur="3.8s" begin="-1.1s" repeatCount="indefinite" path="M329 106H390" />
            </circle>
            <circle r="4" className="service-cloud-packet service-cloud-packet--three">
              <animateMotion dur="4.3s" begin="-2s" repeatCount="indefinite" path="M265 135V164" />
            </circle>
            <circle r="4" className="service-cloud-packet service-cloud-packet--four">
              <animateMotion dur="4s" begin="-1.7s" repeatCount="indefinite" path="M329 135H363L390 193" />
            </circle>
          </svg>
          <div className="mt-1 flex flex-wrap justify-center gap-x-4 gap-y-2 border-t border-white/10 pt-3 text-[9px] text-slate-400">
            <span className="inline-flex items-center gap-1.5"><i className="size-1.5 rounded-full bg-emerald-400" /> Healthy</span>
            <span className="inline-flex items-center gap-1.5"><i className="size-1.5 rounded-full bg-sky-300" /> Traffic flow</span>
            <span className="inline-flex items-center gap-1.5"><i className="size-1.5 rounded-full bg-violet-300" /> Scalable compute</span>
          </div>
        </div>
      </Panel>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        <Panel title="Autoscaling capacity" hint="Current utilization · illustrative">
          <div className="grid gap-3">
            {capacity.map((resource, index) => (
              <div key={resource.label}>
                <div className="mb-1.5 flex justify-between text-[9px]">
                  <span className="text-slate-300">{resource.label}</span>
                  <span className="font-mono text-slate-400">{resource.value}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                  <span
                    className="service-cloud-capacity-bar block h-full rounded-full"
                    style={{ width: `${resource.value}%`, animationDelay: `${index * 180}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <Stat label="Service availability" value="99.95%" detail="Illustrative SLO target" tone="green" />
        <Stat label="Active compute nodes" value="08 → 12" detail="Autoscaling range · sample" tone="violet" />
      </div>
    </div>
  )
}

function SecurityStatistics() {
  const segments = [
    { label: 'Critical', value: 8, color: '#fb7185', tone: 'text-rose-300' },
    { label: 'High', value: 18, color: '#fb923c', tone: 'text-orange-300' },
    { label: 'Medium', value: 34, color: '#facc15', tone: 'text-amber-200' },
    { label: 'Low', value: 40, color: '#4ade80', tone: 'text-emerald-300' },
  ]
  let offset = 0
  const circumference = 2 * Math.PI * 48
  const arcs = segments.map((segment) => {
    const dash = (segment.value / 100) * circumference
    const arc = { ...segment, dash, offset }
    offset += dash
    return arc
  })

  return (
    <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
      <Panel title="Finding severity" hint="Share of findings in an illustrative assessment">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-around">
          <div className="relative size-44 shrink-0">
            <svg viewBox="0 0 120 120" className="size-full -rotate-90">
              <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="13" />
              {arcs.map((arc) => (
                <circle
                  key={arc.label}
                  cx="60"
                  cy="60"
                  r="48"
                  fill="none"
                  stroke={arc.color}
                  strokeWidth="13"
                  strokeDasharray={`${arc.dash} ${circumference - arc.dash}`}
                  strokeDashoffset={-arc.offset}
                  strokeLinecap="butt"
                  className="service-security-arc"
                  style={{ animationDelay: `${arc.offset / circumference}s` }}
                />
              ))}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-mono text-3xl font-semibold text-white">100%</span>
              <span className="text-[9px] text-slate-500">sample findings</span>
            </div>
          </div>
          <div className="grid w-full gap-3 sm:max-w-52">
            {segments.map((segment) => (
              <div key={segment.label} className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-[10px] text-slate-300">
                  <i className="size-2 rounded-sm" style={{ backgroundColor: segment.color }} />
                  {segment.label}
                </span>
                <span className={`font-mono text-xs font-semibold ${segment.tone}`}>{segment.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </Panel>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        <Stat label="Critical findings" value="02" detail="Illustrative assessment" tone="red" />
        <Stat label="Remediation tracked" value="76%" detail="Sample action register" tone="green" />
        <Stat label="Access paths reviewed" value="18" detail="Example review scope" tone="amber" />
      </div>
    </div>
  )
}

function ConsultingStatistics() {
  const quarters = ['Q1', 'Q2', 'Q3', 'Q4']
  const initiatives = [
    { name: 'Data foundation', start: 0, span: 2, progress: 100, tone: 'service-roadmap-bar--one' },
    { name: 'Core platform', start: 1, span: 2, progress: 64, tone: 'service-roadmap-bar--two' },
    { name: 'Team enablement', start: 1, span: 3, progress: 48, tone: 'service-roadmap-bar--three' },
    { name: 'Customer launch', start: 2, span: 2, progress: 22, tone: 'service-roadmap-bar--four' },
  ]
  return (
    <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
      <Panel title="Initiative roadmap" hint="Sequencing and progress · illustrative portfolio">
        <div className="ml-[7.5rem] grid grid-cols-4 border-b border-white/10 pb-2">
          {quarters.map((quarter) => (
            <span key={quarter} className="text-center font-mono text-[9px] text-slate-500">{quarter}</span>
          ))}
        </div>
        <div className="mt-2 space-y-4">
          {initiatives.map((initiative, index) => (
            <div key={initiative.name} className="grid grid-cols-[7rem_1fr] items-center gap-2">
              <span className="truncate text-[9px] text-slate-300">{initiative.name}</span>
              <div className="relative h-8">
                <span className="service-roadmap-track absolute inset-0" />
                <div
                  className={`service-roadmap-bar ${initiative.tone}`}
                  style={{
                    left: `${initiative.start * 25}%`,
                    width: `${initiative.span * 25 - 2}%`,
                    animationDelay: `${index * 120}ms`,
                  }}
                >
                  <span className="service-roadmap-bar__progress" style={{ width: `${initiative.progress}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[9px] text-slate-500">
          <span>Quarterly planning horizon</span>
          <span>Progress shown within each initiative</span>
        </div>
      </Panel>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        <Stat label="Initiatives in view" value="04" detail="Illustrative roadmap" tone="amber" />
        <Stat label="Milestones completed" value="06 / 12" detail="Sample planning period" tone="green" />
        <Stat label="Decision checkpoints" value="03" detail="Cross-team alignment" />
      </div>
    </div>
  )
}

const VISUALIZATIONS: Record<ServiceVisualVariant, () => ReactNode> = {
  ai: AiStatistics,
  erp: ErpStatistics,
  web: WebMobileStatistics,
  cloud: CloudStatistics,
  security: SecurityStatistics,
  consulting: ConsultingStatistics,
}

export function LiveServiceDashboard({ variant }: { variant: ServiceVisualVariant }) {
  const dashboard = DASHBOARDS[variant]
  const Visualization = VISUALIZATIONS[variant]

  return (
    <div className={`service-dashboard service-dashboard--${variant} relative overflow-hidden rounded-3xl border border-white/10 bg-[#07111f] p-4 text-white shadow-[0_30px_90px_-38px_rgba(37,99,235,0.55)] sm:p-6`}>
      <div className="pointer-events-none absolute -right-24 -top-28 size-72 rounded-full bg-blue-500/15 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-36 left-1/4 size-72 rounded-full bg-cyan-400/10 blur-[90px]" />
      <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <span className="size-2 rounded-full bg-sky-300 shadow-[0_0_14px_#7dd3fc]" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{dashboard.workspace}</p>
            <p className="mt-0.5 text-[11px] text-slate-400">{dashboard.description}</p>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-wide text-sky-200">
          Illustrative sample
        </span>
      </div>

      <div className="relative mt-5">
        <div className="mb-4 flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-[var(--service-tone)] shadow-[0_0_10px_var(--service-tone)]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
            {dashboard.chartTitle}
          </p>
        </div>
        <Visualization />
      </div>

      <p className="relative mt-4 border-t border-white/10 pt-3 text-[9px] text-slate-500">
        {dashboard.footnote}
      </p>
    </div>
  )
}
