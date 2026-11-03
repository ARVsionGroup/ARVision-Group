import {
  Award,
  Crown,
  BrainCircuit,
  ClipboardList,
  Cloud,
  Code2,
  Database,
  Handshake,
  Headset,
  HeartHandshake,
  Lock,
  MessagesSquare,
  Server,
  ShieldCheck,
  Target,
  UserPlus,
  Users,
} from 'lucide-react'
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import founderOne from '../assets/founder-one-portrait.jpg'
import founderTwo from '../assets/founder-two-wide.jpg'
import founderThree from '../assets/founder-three-portrait.jpg'
import logoFull from '../assets/logo-full.png'
import { useInView } from '../hooks/use-in-view'
import { ParticleField } from './ParticleField'
import { Reveal } from './Reveal'
import { TypingText } from './TypingText'

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

type TeamMember = {
  image: string
  name: string
  founder?: boolean
  label: string
  role: string
  icon: typeof Code2
  accent: string
  hex: string
  bio: string
  skillGroups: { title: string; icon: typeof Code2; items: string[] }[]
  focus: { label: string; value: number }[]
  highlights: { value: string; label: string }[]
  stack: string[]
  building?: { name: string; status: string; progress: number }[]
  buildingTitle?: string
  activityLabel?: string
  graphic: 'neural' | 'pipeline' | 'journey'
  terminal?: string[]
}

const TEAM: TeamMember[] = [
  {
    image: founderOne,
    name: 'Abhilash Kumar Mishra',
    founder: true,
    label: 'Engineering · Full-stack & AI',
    role: 'Software Engineer',
    icon: Code2,
    accent: 'from-sky-400 to-blue-600',
    hex: '#38bdf8',
    bio: 'Builds modern web apps end to end — responsive interfaces, secure APIs, cloud deployments, and the machine-learning features that make products smarter.',
    skillGroups: [
      { title: 'Software development', icon: Code2, items: ['Python & FastAPI', 'Microservices', 'SQL & NoSQL databases', 'Testing & QA'] },
      { title: 'AI / ML', icon: BrainCircuit, items: ['Machine Learning', 'LLMs & RAG', 'Computer Vision'] },
      { title: 'Cloud & DevOps', icon: Cloud, items: ['AWS', 'Docker', 'CI/CD pipelines', 'Serverless'] },
      { title: 'Cyber security', icon: ShieldCheck, items: ['OWASP Top 10', 'OAuth & JWT auth', 'Secure coding', 'Vulnerability scanning'] },
    ],
    focus: [
      { label: 'Web development', value: 92 },
      { label: 'AI / ML engineering', value: 88 },
      { label: 'Cloud deployment', value: 85 },
      { label: 'Application security', value: 82 },
    ],
    highlights: [
      { value: '4', label: 'Core domains' },
      { value: '15+', label: 'Tools & frameworks' },
      { value: 'E2E', label: 'Idea to deployment' },
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'PyTorch', 'OpenAI API', 'AWS', 'Docker', 'GitHub Actions', 'PostgreSQL', 'OWASP ZAP'],
    building: [
      { name: 'Vision AI module', status: 'Training', progress: 64 },
      { name: 'Client web portal', status: 'In progress', progress: 78 },
      { name: 'Auth & security audit', status: 'Review', progress: 90 },
    ],
    graphic: 'neural',
    terminal: ['$ python train.py --model vision', '✔ model trained · serving via API'],
  },
  {
    image: founderTwo,
    name: 'Subhankar Pradhan',
    label: 'Senior leadership · People & Clients',
    role: 'HR Head & Customer Relations',
    icon: Award,
    accent: 'from-emerald-400 to-teal-600',
    hex: '#34d399',
    bio: 'Heads people strategy and client relations — leads hiring and culture, sets HR policy, and owns every key client relationship from first meeting to long-term partnership.',
    skillGroups: [
      { title: 'Talent strategy', icon: Target, items: ['Hiring & workforce planning', 'Leadership development', 'Performance reviews'] },
      { title: 'People operations', icon: Users, items: ['HR policy & compliance', 'Payroll & benefits', 'Employee engagement'] },
      { title: 'Client relations', icon: Handshake, items: ['Key account management', 'Contracts & SLAs', 'Escalation handling'] },
      { title: 'Leadership', icon: Award, items: ['Team building', 'Culture & values', 'Strategic planning'] },
    ],
    focus: [
      { label: 'People leadership', value: 95 },
      { label: 'Client success', value: 94 },
      { label: 'HR operations', value: 90 },
      { label: 'Strategic planning', value: 87 },
    ],
    highlights: [
      { value: '4', label: 'Leadership areas' },
      { value: '1:1', label: 'Care for every client' },
      { value: '24h', label: 'Response goal' },
    ],
    stack: ['Recruitment', 'Onboarding', 'HR policy', 'Payroll', 'Performance reviews', 'Employee engagement', 'Key accounts', 'SLAs', 'Client onboarding', 'Feedback loops', 'Culture building'],
    buildingTitle: 'Currently leading',
    activityLabel: 'Client & team touchpoints',
    building: [
      { name: 'Hiring drive', status: 'Interviews', progress: 60 },
      { name: 'Client onboarding', status: 'Ongoing', progress: 82 },
      { name: 'HR policy handbook', status: 'Drafting', progress: 45 },
    ],
    graphic: 'journey',
  },
  {
    image: founderThree,
    name: 'Gulshan Kumar Sinha',
    founder: true,
    label: 'Engineering · Backend & AI',
    role: 'Software Engineer',
    icon: Server,
    accent: 'from-violet-400 to-fuchsia-600',
    hex: '#a78bfa',
    bio: 'Turns business problems into reliable, intelligent software — scalable backends, hardened infrastructure, and AI automation that runs in production.',
    skillGroups: [
      { title: 'Software development', icon: Code2, items: ['React & TypeScript', 'Node.js & Express', 'REST & GraphQL APIs', 'Git & code review'] },
      { title: 'AI / ML', icon: BrainCircuit, items: ['Deep Learning', 'NLP & Chatbots', 'MLOps'] },
      { title: 'Cloud & DevOps', icon: Cloud, items: ['Azure & GCP', 'Kubernetes', 'Terraform', 'Monitoring'] },
      { title: 'Cyber security', icon: Lock, items: ['Network security', 'Encryption', 'IAM & access control', 'Threat monitoring'] },
    ],
    focus: [
      { label: 'Backend engineering', value: 90 },
      { label: 'Deep learning & NLP', value: 87 },
      { label: 'Cloud infrastructure', value: 86 },
      { label: 'Security operations', value: 83 },
    ],
    highlights: [
      { value: '4', label: 'Core domains' },
      { value: '15+', label: 'Tools & frameworks' },
      { value: '24/7', label: 'Systems that stay up' },
    ],
    stack: ['Python', 'FastAPI', 'TensorFlow', 'LangChain', 'MongoDB', 'Redis', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Prometheus', 'Wireshark'],
    building: [
      { name: 'Secure API gateway', status: 'In progress', progress: 72 },
      { name: 'CI/CD automation', status: 'Testing', progress: 86 },
      { name: 'AI chatbot backend', status: 'Planning', progress: 38 },
    ],
    graphic: 'pipeline',
    terminal: ['$ kubectl apply -f secure-cluster.yaml', '✔ 0 threats · auto-scaling on'],
  },
]

const NET_LAYERS = [
  [25, 55, 85],
  [15, 42, 68, 95],
  [35, 75],
]
const NET_X = [30, 120, 210]

function NeuralGraphic({ hex, terminal }: { hex: string; terminal: string[] }) {
  return (
    <div className="relative mt-6 pt-5 text-left">
      <span
        className="absolute inset-x-6 top-0 h-px"
        style={{ backgroundImage: `linear-gradient(90deg, transparent, ${hex}, transparent)` }}
      />
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          <BrainCircuit className="size-3.5" style={{ color: hex }} />
          Neural network
        </span>
        <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full opacity-60" style={{ background: hex }} />
            <span className="relative inline-flex size-2 rounded-full" style={{ background: hex }} />
          </span>
          training
        </span>
      </div>
      <svg viewBox="0 0 240 110" className="block h-28 w-full" aria-hidden="true">
        {NET_LAYERS.slice(0, -1).map((layer, l) =>
          layer.flatMap((y1, i) =>
            NET_LAYERS[l + 1].map((y2, j) => (
              <line
                key={`${l}-${i}-${j}`}
                x1={NET_X[l]}
                y1={y1}
                x2={NET_X[l + 1]}
                y2={y2}
                stroke={hex}
                strokeOpacity="0.45"
                strokeWidth="1"
                className="team-edge"
                style={{ animationDelay: `${(i + j) * 0.15}s` }}
              />
            )),
          ),
        )}
        {NET_LAYERS.map((layer, l) =>
          layer.map((y, i) => (
            <g key={`n-${l}-${i}`}>
              <circle cx={NET_X[l]} cy={y} r="8" fill={hex} fillOpacity="0.12" />
              <circle
                cx={NET_X[l]}
                cy={y}
                r="4"
                fill={hex}
                className="animate-node-pulse"
                style={{ animationDelay: `${l * 0.4 + i * 0.2}s` }}
              />
            </g>
          )),
        )}
      </svg>
      <div className="flex items-end gap-1" aria-hidden="true">
        {[0.5, 0.8, 0.4, 0.9, 0.6, 1, 0.7, 0.85, 0.55, 0.95, 0.65, 0.75].map((h, i) => (
          <span
            key={i}
            className="team-eq w-full rounded-sm"
            style={{ height: `${h * 18}px`, background: hex, opacity: 0.35 + h * 0.5, animationDelay: `${i * 0.12}s` }}
          />
        ))}
      </div>
      <div
        className="mt-3 space-y-1 rounded-r-lg border-l-2 bg-white/[0.03] py-2 pl-3 pr-2 font-mono text-[11px] leading-relaxed"
        style={{ borderColor: hex }}
      >
        <p className="text-slate-300">
          <TypingText text={terminal[0]} speed={35} />
        </p>
        <p style={{ color: hex }}>
          <TypingText text={terminal[1]} speed={35} cursor />
        </p>
      </div>
    </div>
  )
}

const CODE_LINES = [
  { text: '@app.post("/deploy")', tone: 'text-fuchsia-300' },
  { text: 'async def deploy(build: Build):', tone: 'text-sky-300' },
  { text: '    scan = security.audit(build)', tone: 'text-slate-300' },
  { text: '    assert scan.threats == 0', tone: 'text-amber-200' },
  { text: '    return cloud.release(build)', tone: 'text-emerald-300' },
]

const PIPELINE = [
  { icon: Code2, label: 'Build' },
  { icon: ClipboardList, label: 'Test' },
  { icon: Lock, label: 'Scan' },
  { icon: Cloud, label: 'Deploy' },
]

function PipelineGraphic({ hex, terminal, inView }: { hex: string; terminal: string[]; inView: boolean }) {
  return (
    <div className="relative mt-6 pt-5 text-left">
      <span
        className="absolute inset-x-6 top-0 h-px"
        style={{ backgroundImage: `linear-gradient(90deg, transparent, ${hex}, transparent)` }}
      />
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          <Server className="size-3.5" style={{ color: hex }} />
          Code to cloud pipeline
        </span>
        <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          deploying
        </span>
      </div>

      {/* code editor */}
      <div className="relative mt-3 overflow-hidden rounded-xl bg-[#050c17] ring-1 ring-white/10">
        <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
          <span className="size-2 rounded-full bg-rose-400/80" />
          <span className="size-2 rounded-full bg-amber-400/80" />
          <span className="size-2 rounded-full bg-emerald-400/80" />
          <span className="ml-2 font-mono text-[10px] text-slate-500">deploy_api.py</span>
        </div>
        <span
          className="team-code-scan pointer-events-none absolute inset-x-0 top-8 h-4"
          style={{ background: `linear-gradient(90deg, transparent, ${hex}33, transparent)` }}
        />
        <ol className="space-y-0.5 px-3 py-2.5 font-mono text-[10.5px] leading-relaxed">
          {CODE_LINES.map((line, i) => (
            <li
              key={line.text}
              className={`flex gap-3 whitespace-pre motion-reduce:animate-none motion-reduce:opacity-100 ${inView ? 'animate-reveal-up' : 'opacity-0'}`}
              style={{ animationDelay: `${400 + i * 260}ms` }}
            >
              <span className="w-3 select-none text-right text-slate-600">{i + 1}</span>
              <span className={`overflow-hidden text-ellipsis ${line.tone}`}>{line.text}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* CI/CD stages */}
      <ol className="mt-3 grid grid-cols-4 gap-2">
        {PIPELINE.map((step, i) => (
          <li
            key={step.label}
            className="team-chip flex flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] py-2 text-[10px] text-slate-300"
            style={{ '--chip-color': hex, animationDelay: `${i * 1.5}s` } as CSSProperties}
          >
            <step.icon className="size-3.5" style={{ color: hex }} />
            {step.label}
          </li>
        ))}
      </ol>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
        <span className="team-pipeline block h-full rounded-full" style={{ background: hex }} />
      </div>

      <div
        className="mt-3 space-y-1 rounded-r-lg border-l-2 bg-white/[0.03] py-2 pl-3 pr-2 font-mono text-[11px] leading-relaxed"
        style={{ borderColor: hex }}
      >
        <p className="text-slate-300">
          <TypingText text={terminal[0]} speed={35} />
        </p>
        <p style={{ color: hex }}>
          <TypingText text={terminal[1]} speed={35} cursor />
        </p>
      </div>
    </div>
  )
}

const JOURNEY = [
  { icon: UserPlus, label: 'Hire' },
  { icon: ClipboardList, label: 'Plan' },
  { icon: MessagesSquare, label: 'Support' },
  { icon: HeartHandshake, label: 'Delight' },
]

function JourneyGraphic({ hex, inView }: { hex: string; inView: boolean }) {
  const ringLen = 2 * Math.PI * 26
  const satisfaction = 0.96

  return (
    <div className="relative mt-6 pt-5 text-left">
      <span
        className="absolute inset-x-6 top-0 h-px"
        style={{ backgroundImage: `linear-gradient(90deg, transparent, ${hex}, transparent)` }}
      />
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          <Headset className="size-3.5" style={{ color: hex }} />
          Client journey
        </span>
        <span className="text-[11px] text-slate-400">always on</span>
      </div>
      <div className="relative pb-2 pt-4">
        <svg viewBox="0 0 240 20" className="absolute inset-x-0 top-[24px] h-5 w-full" preserveAspectRatio="none" aria-hidden="true">
          <line x1="20" y1="10" x2="220" y2="10" stroke={hex} strokeOpacity="0.5" strokeWidth="2" className="team-edge" />
        </svg>
        <ol className="relative grid grid-cols-4">
          {JOURNEY.map((step, i) => (
            <li key={step.label} className="flex flex-col items-center gap-1.5">
              <span
                className="flex size-9 items-center justify-center rounded-full border bg-[#07111f] animate-badge-float"
                style={{ borderColor: hex, color: hex, animationDelay: `${i * 0.35}s` }}
              >
                <step.icon className="size-4" />
              </span>
              <span className="text-[11px] text-slate-300">{step.label}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-3 flex items-center gap-4 rounded-2xl bg-white/[0.03] p-3">
        <svg viewBox="0 0 64 64" className="size-16 shrink-0 -rotate-90" aria-hidden="true">
          <circle cx="32" cy="32" r="26" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="6" />
          {inView && (
            <circle
              cx="32"
              cy="32"
              r="26"
              fill="none"
              stroke={hex}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={ringLen}
              strokeDashoffset={ringLen * (1 - satisfaction)}
              className="team-ring"
              style={{ '--ring-len': `${ringLen}px` } as CSSProperties}
            />
          )}
        </svg>
        <div>
          <p className="text-lg font-semibold text-white">{Math.round(satisfaction * 100)}%</p>
          <p className="text-[11px] leading-snug text-slate-400">
            Client satisfaction goal — every request answered, every project followed up.
          </p>
        </div>
      </div>
    </div>
  )
}

const ACTIVITY_CELLS = Array.from({ length: 84 }, (_, i) => ((i * 37) % 11) / 10)

function BuildingTile({
  items,
  title,
  activityLabel,
  icon: Icon,
  hex,
  accent,
  inView,
}: {
  items: { name: string; status: string; progress: number }[]
  title: string
  activityLabel: string
  icon: typeof Code2
  hex: string
  accent: string
  inView: boolean
}) {
  return (
    <div
      className={`relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 motion-reduce:animate-none motion-reduce:opacity-100 ${inView ? 'animate-reveal-up' : 'opacity-0'}`}
      style={{ animationDelay: '1100ms' }}
    >
      <span
        className="pointer-events-none absolute -bottom-16 -left-10 size-48 rounded-full opacity-20 blur-3xl"
        style={{ background: hex }}
      />
      <div className="relative flex items-center justify-between">
        <h5 className="flex items-center gap-2 text-sm font-semibold text-white">
          <span className={`flex size-7 items-center justify-center rounded-lg bg-gradient-to-br ${accent} text-white`}>
            <Icon className="size-3.5" />
          </span>
          {title}
        </h5>
        <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full opacity-60" style={{ background: hex }} />
            <span className="relative inline-flex size-2 rounded-full" style={{ background: hex }} />
          </span>
          live
        </span>
      </div>

      <ul className="relative mt-4 grid gap-3 sm:grid-cols-3">
        {items.map((item, i) => (
          <li key={item.name} className="rounded-xl bg-white/[0.04] p-3">
            <p className="text-xs font-semibold text-slate-100">{item.name}</p>
            <div className="mt-1 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">{item.status}</span>
              <span className="font-semibold tabular-nums" style={{ color: hex }}>
                {item.progress}%
              </span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              {inView && (
                <div
                  className="team-stripes h-full rounded-full animate-grow-bar-x"
                  style={{ width: `${item.progress}%`, backgroundColor: hex, animationDelay: `${1200 + i * 150}ms` }}
                />
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* commit activity, stretches to fill the remaining height */}
      <div className="relative mt-4 flex min-h-20 flex-1 flex-col">
        <p className="text-[11px] uppercase tracking-wider text-slate-500">{activityLabel}</p>
        <div className="mt-2 grid flex-1 grid-flow-col grid-cols-[repeat(21,minmax(0,1fr))] grid-rows-4 gap-1">
          {ACTIVITY_CELLS.map((level, i) => (
            <span
              key={i}
              className="team-cell rounded-[3px]"
              style={{
                background: hex,
                opacity: 0.12 + level * 0.6,
                animationDelay: `${((i * 13) % 29) * 0.25}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Horizontal swipe carousel on phones; dissolves into the parent grid from `sm` up
function SwipeRow({ count, hex, children }: { count: number; hex: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const onScroll = () => {
    const el = ref.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setActive(max > 0 ? Math.round((el.scrollLeft / max) * (count - 1)) : 0)
  }

  return (
    <div className="min-w-0 sm:contents">
      <div
        ref={ref}
        onScroll={onScroll}
        className="team-no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 pb-1 sm:contents"
      >
        {children}
      </div>
      <div className="mt-3 flex items-center justify-between sm:hidden">
        <div className="flex gap-1.5" aria-hidden="true">
          {Array.from({ length: count }, (_, i) => (
            <span
              key={i}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{ width: i === active ? 20 : 6, background: i === active ? hex : 'rgba(255,255,255,0.25)' }}
            />
          ))}
        </div>
        <span className="team-swipe-hint flex items-center gap-1 text-[11px] text-slate-400">
          Swipe <span aria-hidden="true">→</span>
        </span>
      </div>
    </div>
  )
}

// Skill meter that keeps drifting a few points around its base value
function LiveMeter({
  label,
  base,
  accent,
  hex,
  active,
  delay,
}: {
  label: string
  base: number
  accent: string
  hex: string
  active: boolean
  delay: number
}) {
  const [value, setValue] = useState(base)

  useEffect(() => {
    if (!active || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const tick = () => setValue(Math.min(99, base - 6 + Math.round(Math.random() * 9)))
    const id = window.setInterval(tick, 1300 + Math.random() * 900)
    return () => window.clearInterval(id)
  }, [active, base])

  const rising = value >= base

  return (
    <div>
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>{label}</span>
        <span className="flex items-center gap-1 font-semibold tabular-nums text-slate-200">
          <span
            className={`text-[9px] transition-transform duration-500 ${rising ? 'text-emerald-400' : 'rotate-180 text-rose-400'}`}
            aria-hidden="true"
          >
            ▲
          </span>
          {value}%
        </span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
        {active && (
          <div
            className={`relative h-full overflow-hidden rounded-full bg-gradient-to-r ${accent} animate-grow-bar-x transition-[width] duration-[1200ms] ease-in-out`}
            style={{ width: `${value}%`, animationDelay: `${delay}ms`, boxShadow: `0 0 10px ${hex}` }}
          >
            <span className="team-meter-shine absolute inset-y-0 w-1/3" />
          </div>
        )}
      </div>
    </div>
  )
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const { ref, inView } = useInView<HTMLElement>(0.1)
  const Icon = member.icon

  const reversed = index % 2 === 1

  return (
    <article
      ref={ref}
      className={`grid grid-cols-1 items-start gap-8 lg:items-stretch lg:gap-12 ${reversed ? 'lg:grid-cols-[1fr_340px]' : 'lg:grid-cols-[340px_1fr]'}`}
    >
      {/* profile column */}
      <div
        className={`group flex min-w-0 flex-col items-center motion-reduce:animate-none motion-reduce:opacity-100 ${reversed ? 'lg:order-2' : ''} ${inView ? 'animate-reveal-up' : 'opacity-0'}`}
      >
      <div className="relative size-52 shrink-0 sm:size-56 lg:size-60">
        {/* rotating gradient ring */}
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span
            className="absolute inset-[-40%] animate-spin-slower opacity-70 transition duration-500 group-hover:opacity-100"
            style={{ backgroundImage: 'conic-gradient(from 0deg, #38bdf8, transparent 35%, #a855f7, transparent 70%, #38bdf8)' }}
          />
        </span>
        <div className="absolute inset-[3px] overflow-hidden rounded-full bg-white shadow-[0_0_40px_rgba(56,189,248,0.12)] transition duration-500 group-hover:shadow-[0_0_55px_rgba(56,189,248,0.25)]">
          <img
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.05]"
            loading="lazy"
          />
        </div>
        <span
          className={`absolute bottom-3 right-3 z-10 flex size-11 items-center justify-center rounded-full bg-gradient-to-br ${member.accent} text-white shadow-lg ring-4 ring-[#07111f] animate-badge-float`}
          style={{ animationDelay: `${index * 0.6}s` }}
        >
          <Icon className="size-5" />
        </span>
      </div>

      <div className="mt-5 w-full text-center">
        {member.founder && (
          <span className="team-founder-badge relative mb-3 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#1a1200] shadow-[0_0_18px_rgba(251,191,36,0.45)]">
            <Crown className="size-3.5" aria-hidden="true" />
            Founder
          </span>
        )}
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
          {member.label}
        </p>
        <h4 className="mt-2 text-2xl font-semibold tracking-tight text-white">{member.name}</h4>
        <p className="mt-1 text-base font-medium" style={{ color: member.hex }}>
          <TypingText text={member.role} speed={45} cursor />
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{member.bio}</p>

        {member.graphic === 'neural' && member.terminal ? (
          <NeuralGraphic hex={member.hex} terminal={member.terminal} />
        ) : member.graphic === 'pipeline' && member.terminal ? (
          <PipelineGraphic hex={member.hex} terminal={member.terminal} inView={inView} />
        ) : (
          <JourneyGraphic hex={member.hex} inView={inView} />
        )}
      </div>

      <div className="mt-5 grid w-full flex-1 grid-cols-3 gap-3">
        {member.highlights.map((stat, i) => (
          <div
            key={stat.label}
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center flex flex-col justify-center motion-reduce:animate-none motion-reduce:opacity-100 ${inView ? 'animate-reveal-up' : 'opacity-0'}`}
            style={{ animationDelay: `${900 + i * 120}ms` }}
          >
            <span
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-15"
              style={{ backgroundImage: `linear-gradient(to top, ${member.hex}, transparent)` }}
            />
            <p className="relative text-2xl font-semibold" style={{ color: member.hex }}>
              {stat.value}
            </p>
            <p className="relative mt-1 text-[11px] leading-snug text-slate-400 sm:text-xs">{stat.label}</p>
          </div>
        ))}
      </div>
      </div>

      {/* detail tiles */}
      <div className="flex min-w-0 flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SwipeRow count={member.skillGroups.length} hex={member.hex}>
        {member.skillGroups.map((group, i) => (
          <div
            key={group.title}
            className={`group/tile relative w-[84%] shrink-0 snap-center overflow-hidden rounded-2xl sm:w-auto border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] motion-reduce:animate-none motion-reduce:opacity-100 ${inView ? 'animate-reveal-up' : 'opacity-0'}`}
            style={{ animationDelay: `${200 + i * 120}ms` }}
          >
            <span
              className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition duration-500 group-hover/tile:scale-x-100"
              style={{ background: member.hex }}
            />
            <span
              className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full opacity-20 blur-2xl transition duration-500 group-hover/tile:opacity-40"
              style={{ background: member.hex }}
            />
            <div className="relative flex items-center gap-3">
              <span
                className={`flex size-9 items-center justify-center rounded-xl bg-gradient-to-br ${member.accent} text-white shadow-lg transition duration-300 group-hover/tile:rotate-6 group-hover/tile:scale-110`}
              >
                <group.icon className="size-4.5" />
              </span>
              <h5 className="text-sm font-semibold text-white">{group.title}</h5>
            </div>
            <ul className="relative mt-4 flex flex-wrap gap-2">
              {group.items.map((item, j) => (
                <li
                  key={item}
                  className="team-chip rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-xs text-slate-200"
                  style={
                    {
                      '--chip-color': member.hex,
                      animationDelay: `${((i * 5 + j * 3) % 11) * 0.55}s`,
                    } as CSSProperties
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        </SwipeRow>

        <div
          className={`grid gap-x-6 gap-y-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 motion-reduce:animate-none motion-reduce:opacity-100 sm:col-span-2 sm:grid-cols-2 ${inView ? 'animate-reveal-up' : 'opacity-0'}`}
          style={{ animationDelay: '700ms' }}
        >
          {member.focus.map((item, i) => (
            <LiveMeter
              key={item.label}
              label={item.label}
              base={item.value}
              accent={member.accent}
              hex={member.hex}
              active={inView}
              delay={800 + i * 150}
            />
          ))}
        </div>

        <div
          className="team-marquee-mask relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] py-3 sm:col-span-2"
          aria-label={`${member.role} toolkit`}
        >
          <div className="team-marquee flex w-max gap-3">
            {[...member.stack, ...member.stack].map((tool, i) => (
              <span
                key={i}
                aria-hidden={i >= member.stack.length}
                className="flex items-center gap-2 whitespace-nowrap rounded-full bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-200"
              >
                <span className="size-1.5 rounded-full" style={{ background: member.hex }} />
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

        {member.building && (
          <BuildingTile
            items={member.building}
            title={member.buildingTitle ?? 'Currently building'}
            activityLabel={member.activityLabel ?? 'Commit activity'}
            icon={member.graphic === 'journey' ? Users : Code2}
            hex={member.hex}
            accent={member.accent}
            inView={inView}
          />
        )}
      </div>
    </article>
  )
}

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
    <section id="about" className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
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

      {/* tall section: a low threshold so it still reveals on phones */}
      <Reveal threshold={0.02}>
        <section
          aria-labelledby="founders-heading"
          className="relative mt-20 overflow-hidden rounded-[2rem] border border-slate-700/70 bg-[#07111f] px-4 py-10 text-white shadow-2xl sm:px-10 sm:py-14 lg:mt-24 lg:px-14"
        >
          <div className="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-36 left-1/4 size-80 rounded-full bg-violet-500/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                The people behind Arvision
              </p>
              <h3 id="founders-heading" className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
                A shared vision, brought to life by our team.
              </h3>
            </div>
            <div>
              <p className="text-base leading-relaxed text-slate-300">
                Arvision began two months ago with a shared ambition to make technology
                more useful for businesses. Our software engineers design and build
                every product, while our HR head leads the team and owns every client
                relationship — together turning practical ideas into
                thoughtful digital solutions.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-300 opacity-60" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-sky-300" />
                </span>
                <span className="text-sm font-medium text-sky-100">
                  Started two months ago · Building what comes next
                </span>
              </div>
            </div>
          </div>

          <div className="relative mt-14">
            {TEAM.map((member, index) => (
              <div key={index}>
                {index > 0 && (
                  <span
                    className="my-12 block h-px lg:my-16"
                    style={{ backgroundImage: `linear-gradient(90deg, transparent, ${member.hex}66, transparent)` }}
                  />
                )}
                <TeamCard member={member} index={index} />
              </div>
            ))}
          </div>
        </section>
      </Reveal>

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
