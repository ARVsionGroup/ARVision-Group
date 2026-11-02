import type { CSSProperties, JSX } from 'react'
import { SERVICE_TONES } from '../lib/services'
import type { ServiceVisualVariant } from './ServiceVisual'

const ART: Record<
  ServiceVisualVariant,
  { index: string; label: string; summary: string; tags: string[] }
> = {
  ai: {
    index: '01',
    label: 'Intelligence map',
    summary: 'Signals become decisions',
    tags: ['Data', 'Models', 'People'],
  },
  erp: {
    index: '02',
    label: 'Business system',
    summary: 'One connected operation',
    tags: ['Finance', 'Supply', 'Teams'],
  },
  web: {
    index: '03',
    label: 'Product architecture',
    summary: 'One experience, every screen',
    tags: ['Web', 'Mobile', 'Services'],
  },
  cloud: {
    index: '04',
    label: 'Delivery pipeline',
    summary: 'Code moves with confidence',
    tags: ['Build', 'Release', 'Observe'],
  },
  security: {
    index: '05',
    label: 'Protection model',
    summary: 'Controls around what matters',
    tags: ['Identity', 'Apps', 'Data'],
  },
  consulting: {
    index: '06',
    label: 'Transformation map',
    summary: 'A clear route from now to next',
    tags: ['Assess', 'Prioritize', 'Deliver'],
  },
}

function NetworkArt() {
  const nodes = [
    { x: 65, y: 58, r: 5 },
    { x: 133, y: 36, r: 7 },
    { x: 200, y: 74, r: 5 },
    { x: 266, y: 42, r: 8 },
    { x: 325, y: 88, r: 5 },
    { x: 105, y: 134, r: 8 },
    { x: 182, y: 151, r: 5 },
    { x: 247, y: 122, r: 6 },
    { x: 310, y: 160, r: 8 },
    { x: 57, y: 204, r: 6 },
    { x: 149, y: 220, r: 7 },
    { x: 229, y: 199, r: 5 },
    { x: 342, y: 222, r: 6 },
  ]
  const edges = [
    [0, 1], [0, 5], [1, 2], [1, 5], [1, 6], [1, 3], [2, 3], [2, 6],
    [2, 7], [3, 4], [3, 7], [4, 8], [5, 6], [5, 9], [5, 10], [6, 7],
    [6, 10], [6, 11], [7, 8], [7, 11], [8, 11], [8, 12], [9, 10],
    [10, 11], [11, 12],
  ]

  return (
    <svg viewBox="0 0 400 270" className="service-cover-svg" aria-hidden="true">
      {edges.map(([from, to], index) => (
        <line
          key={`${from}-${to}`}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          className="service-cover-edge"
          style={{ animationDelay: `${index * 55}ms` }}
        />
      ))}
      {nodes.map((node, index) => (
        <g key={`${node.x}-${node.y}`} className="service-cover-node" style={{ animationDelay: `${index * 90}ms` }}>
          <circle cx={node.x} cy={node.y} r={node.r + 8} className="service-cover-node-halo" />
          <circle cx={node.x} cy={node.y} r={node.r} className="service-cover-node-core" />
        </g>
      ))}
    </svg>
  )
}

function OperationsArt() {
  const modules = [
    { x: 34, y: 35, label: 'ORDERS' },
    { x: 232, y: 35, label: 'FINANCE' },
    { x: 34, y: 151, label: 'INVENTORY' },
    { x: 232, y: 151, label: 'PEOPLE' },
  ]
  return (
    <svg viewBox="0 0 400 250" className="service-cover-svg" aria-hidden="true">
      <path d="M142 78h36v-28h39M178 78v93h39M142 194h36v-23" className="service-cover-route" />
      <path d="M142 78H108M258 78h34M142 194H108M258 194h34" className="service-cover-route service-cover-route-muted" />
      <rect x="151" y="94" width="98" height="70" rx="18" className="service-cover-center" />
      <text x="200" y="124" textAnchor="middle" className="service-cover-label">CORE</text>
      <text x="200" y="142" textAnchor="middle" className="service-cover-small">SYSTEM</text>
      {modules.map((module, index) => (
        <g key={module.label} className="service-cover-module" style={{ animationDelay: `${index * 160}ms` }}>
          <rect x={module.x} y={module.y} width="110" height="56" rx="13" className="service-cover-card" />
          <circle cx={module.x + 19} cy={module.y + 21} r="5" className="service-cover-node-core" />
          <text x={module.x + 13} y={module.y + 42} className="service-cover-label">{module.label}</text>
        </g>
      ))}
    </svg>
  )
}

function ProductArt() {
  return (
    <svg viewBox="0 0 400 260" className="service-cover-svg" aria-hidden="true">
      <rect x="42" y="32" width="257" height="178" rx="15" className="service-cover-card service-cover-product" />
      <path d="M42 70h257" className="service-cover-divider" />
      <circle cx="61" cy="51" r="3" className="service-cover-dot" />
      <circle cx="73" cy="51" r="3" className="service-cover-dot service-cover-dot-mid" />
      <circle cx="85" cy="51" r="3" className="service-cover-dot service-cover-dot-last" />
      <rect x="62" y="91" width="105" height="92" rx="9" className="service-cover-product-panel" />
      <path d="M76 158l25-26 18 13 29-34" className="service-cover-route" />
      <circle cx="101" cy="132" r="4" className="service-cover-node-core" />
      <circle cx="119" cy="145" r="4" className="service-cover-node-core" />
      <circle cx="148" cy="111" r="4" className="service-cover-node-core" />
      <rect x="184" y="95" width="91" height="11" rx="5.5" className="service-cover-product-line" />
      <rect x="184" y="119" width="69" height="7" rx="3.5" className="service-cover-product-line service-cover-product-line-muted" />
      <rect x="184" y="137" width="82" height="7" rx="3.5" className="service-cover-product-line service-cover-product-line-muted" />
      <rect x="184" y="163" width="61" height="20" rx="7" className="service-cover-product-button" />
      <g className="service-cover-phone">
        <rect x="273" y="103" width="91" height="142" rx="20" className="service-cover-phone-shell" />
        <rect x="281" y="119" width="75" height="111" rx="12" className="service-cover-phone-screen" />
        <rect x="292" y="133" width="53" height="37" rx="6" className="service-cover-product-panel" />
        <rect x="292" y="181" width="53" height="5" rx="2.5" className="service-cover-product-line" />
        <rect x="292" y="194" width="41" height="5" rx="2.5" className="service-cover-product-line service-cover-product-line-muted" />
        <rect x="292" y="210" width="34" height="10" rx="5" className="service-cover-product-button" />
      </g>
    </svg>
  )
}

function PipelineArt() {
  const steps = [
    { x: 52, label: 'COMMIT', sub: 'Source' },
    { x: 151, label: 'BUILD', sub: 'Validate' },
    { x: 250, label: 'RELEASE', sub: 'Deploy' },
    { x: 349, label: 'OBSERVE', sub: 'Improve' },
  ]
  return (
    <svg viewBox="0 0 400 240" className="service-cover-svg" aria-hidden="true">
      <path d="M52 97H349" className="service-cover-route service-cover-pipeline" />
      {steps.map((step, index) => (
        <g key={step.label} className="service-cover-pipeline-step" style={{ animationDelay: `${index * 180}ms` }}>
          <circle cx={step.x} cy="97" r="20" className="service-cover-pipeline-ring" />
          <circle cx={step.x} cy="97" r="7" className="service-cover-node-core" />
          <text x={step.x} y="145" textAnchor="middle" className="service-cover-label">{step.label}</text>
          <text x={step.x} y="164" textAnchor="middle" className="service-cover-small">{step.sub}</text>
        </g>
      ))}
      <circle r="5" className="service-cover-traveler">
        <animateMotion dur="5s" repeatCount="indefinite" path="M52 97H349" />
      </circle>
      <rect x="100" y="190" width="200" height="20" rx="10" className="service-cover-progress-track" />
      <rect x="100" y="190" width="142" height="20" rx="10" className="service-cover-progress-fill" />
      <text x="200" y="204" textAnchor="middle" className="service-cover-progress-text">REPEATABLE DELIVERY</text>
    </svg>
  )
}

function SecurityArt() {
  return (
    <svg viewBox="0 0 400 280" className="service-cover-svg" aria-hidden="true">
      <circle cx="200" cy="130" r="98" className="service-cover-orbit" />
      <circle cx="200" cy="130" r="76" className="service-cover-orbit service-cover-orbit-inner" />
      <path d="M200 45 259 67v48c0 41-24 70-59 92-35-22-59-51-59-92V67z" className="service-cover-shield" />
      <path d="m177 128 16 16 33-37" className="service-cover-check" />
      <circle cx="200" cy="32" r="5" className="service-cover-node-core" />
      <circle cx="299" cy="130" r="5" className="service-cover-node-core" />
      <circle cx="101" cy="130" r="5" className="service-cover-node-core" />
      <circle cx="200" cy="228" r="5" className="service-cover-node-core" />
      <path d="M65 241h270" className="service-cover-divider" />
      <text x="200" y="262" textAnchor="middle" className="service-cover-label">IDENTITY · APPLICATION · DATA</text>
      <path d="M200 31a99 99 0 0 1 98 99" className="service-cover-scan" />
    </svg>
  )
}

function RoadmapArt() {
  const milestones = [
    { x: 45, y: 196, label: 'ASSESS' },
    { x: 145, y: 154, label: 'PRIORITIZE' },
    { x: 245, y: 103, label: 'ROADMAP' },
    { x: 350, y: 48, label: 'DELIVER' },
  ]
  return (
    <svg viewBox="0 0 400 250" className="service-cover-svg" aria-hidden="true">
      {[67, 117, 167, 217].map((y) => (
        <line key={y} x1="30" x2="375" y1={y} y2={y} className="service-cover-gridline" />
      ))}
      <path d="M45 196 145 154 245 103 350 48" className="service-cover-route service-cover-roadmap" />
      <path d="M45 196 145 154 245 103 350 48V218H45z" className="service-cover-roadmap-fill" />
      {milestones.map((item, index) => (
        <g key={item.label} className="service-cover-milestone" style={{ animationDelay: `${index * 180}ms` }}>
          <circle cx={item.x} cy={item.y} r="13" className="service-cover-milestone-halo" />
          <circle cx={item.x} cy={item.y} r="5" className="service-cover-node-core" />
          <text x={item.x} y={item.y - 23} textAnchor="middle" className="service-cover-label">{item.label}</text>
        </g>
      ))}
      <text x="36" y="238" className="service-cover-small">TODAY</text>
      <text x="342" y="238" textAnchor="end" className="service-cover-small">NEXT</text>
    </svg>
  )
}

const ARTWORK: Record<ServiceVisualVariant, () => JSX.Element> = {
  ai: NetworkArt,
  erp: OperationsArt,
  web: ProductArt,
  cloud: PipelineArt,
  security: SecurityArt,
  consulting: RoadmapArt,
}

export function ServiceCoverArt({
  variant,
}: {
  variant: ServiceVisualVariant
}) {
  const art = ARTWORK[variant]
  const { index, label, summary, tags } = ART[variant]
  const tone = SERVICE_TONES[variant]

  return (
    <div
      className="service-cover-art relative overflow-hidden rounded-[2rem] border border-border bg-card p-5 shadow-[var(--shadow)] sm:p-7"
      style={{ '--cover-tone': tone } as CSSProperties}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_82%_18%,color-mix(in_oklch,var(--cover-tone)_13%,transparent),transparent_58%)]" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Service blueprint · {index}
          </p>
          <h2 className="mt-2 text-lg font-semibold text-foreground">{label}</h2>
          <p className="mt-1 text-xs text-muted-foreground">{summary}</p>
        </div>
        <span className="font-mono text-5xl font-semibold leading-none text-[var(--cover-tone)]/15 sm:text-6xl">
          {index}
        </span>
      </div>
      <div className="relative mt-3 h-56 sm:mt-1 sm:h-64">
        {art()}
      </div>
      <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Core building blocks
        </span>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
