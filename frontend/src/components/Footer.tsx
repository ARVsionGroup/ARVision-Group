import { ArrowRight, ArrowUp, ArrowUpRight, Mail, Phone } from 'lucide-react'
import { CONTACT_EMAIL, CONTACT_PHONES } from '@/lib/site-config'
import logoIcon from '../assets/logo-icon.png'
import { TaperLine } from './TaperLine'
import { Reveal } from './Reveal'

const LINK_GROUPS = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About us', href: '/about' },
      { label: 'Why Arvision', href: '/why-us' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'What we do',
    links: [
      { label: 'AI & machine learning', href: '/services' },
      { label: 'ERP systems', href: '/services' },
      { label: 'Web & mobile apps', href: '/services' },
      { label: 'Cloud & DevOps', href: '/services' },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative isolate overflow-hidden border-t border-border bg-[#08111f] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <span className="absolute -right-32 -top-44 size-[28rem] rounded-full bg-[var(--accent)]/20 blur-[100px] animate-blob-b motion-reduce:animate-none" />
        <span className="absolute -bottom-48 left-[18%] size-80 rounded-full bg-sky-400/10 blur-[100px] animate-blob-c motion-reduce:animate-none" />
        <span className="footer-ambient-glow absolute left-[8%] top-[42%] size-72 rounded-full bg-indigo-500/10 blur-[100px]" />
        <span className="footer-ambient-glow footer-ambient-glow-delay absolute -right-24 top-[70%] size-96 rounded-full bg-sky-400/10 blur-[110px]" />
        <div className="bg-grid footer-grid-drift absolute inset-0 opacity-20" />
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 1500"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full opacity-30"
        >
          <path
            d="M-80 420C180 310 270 520 520 430S850 320 1280 470"
            className="footer-backdrop-trail"
          />
          <path
            d="M-80 900C230 760 310 1040 620 910S970 810 1280 960"
            className="footer-backdrop-trail footer-backdrop-trail-delay"
          />
          <path
            d="M-80 1260C220 1130 400 1390 700 1260S1030 1160 1280 1290"
            className="footer-backdrop-trail footer-backdrop-trail-slow"
          />
          <circle cx="520" cy="430" r="4" className="footer-backdrop-node" />
          <circle cx="620" cy="910" r="4" className="footer-backdrop-node footer-backdrop-trail-delay" />
          <circle cx="700" cy="1260" r="4" className="footer-backdrop-node footer-backdrop-trail-slow" />
        </svg>
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <section className="group/cta relative isolate mt-8 overflow-hidden rounded-[2rem] border border-sky-300/15 bg-[#080f20] px-6 py-9 shadow-[0_24px_80px_-36px_rgba(37,99,235,0.5)] sm:px-10 sm:py-12 lg:mt-12 lg:px-14 lg:py-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
              <span className="absolute -right-20 -top-40 size-96 rounded-full bg-blue-500/20 blur-[90px] transition-transform duration-1000 group-hover/cta:scale-125" />
              <span className="absolute -bottom-48 right-1/4 size-72 rounded-full bg-violet-500/15 blur-[90px] animate-blob-c motion-reduce:animate-none" />
              <div className="bg-grid absolute inset-0 opacity-20" />
              <svg
                viewBox="0 0 620 400"
                fill="none"
                className="absolute -right-24 -top-8 h-[115%] w-[82%] opacity-80 transition-transform duration-1000 group-hover/cta:scale-[1.04] sm:-right-12 sm:top-0 sm:w-[68%] lg:right-0 lg:top-1/2 lg:h-[130%] lg:w-[58%] lg:-translate-y-1/2"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <radialGradient id="footer-orb" cx="0" cy="0" r="1" gradientTransform="matrix(0 178 -178 0 390 184)" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38BDF8" stopOpacity=".38" />
                    <stop offset=".48" stopColor="#4F46E5" stopOpacity=".2" />
                    <stop offset="1" stopColor="#080F20" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="footer-ribbon" x1="185" x2="535" y1="112" y2="296" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#67E8F9" />
                    <stop offset=".48" stopColor="#60A5FA" />
                    <stop offset="1" stopColor="#A78BFA" />
                  </linearGradient>
                  <filter id="footer-glow" x="125" y="46" width="430" height="315" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feGaussianBlur stdDeviation="11" />
                  </filter>
                </defs>
                <circle cx="390" cy="190" r="176" fill="url(#footer-orb)" />
                <circle cx="390" cy="190" r="143" stroke="#93C5FD" strokeOpacity=".12" className="footer-orbit" />
                <circle cx="390" cy="190" r="116" stroke="#C4B5FD" strokeOpacity=".18" strokeDasharray="3 8" className="footer-orbit footer-orbit-reverse" />
                <ellipse cx="390" cy="190" stroke="#7DD3FC" strokeOpacity=".32" transform="rotate(-32 390 190)" rx="168" ry="70" className="footer-orbit" />
                <ellipse cx="390" cy="190" stroke="#A5B4FC" strokeOpacity=".28" transform="rotate(36 390 190)" rx="168" ry="70" className="footer-orbit footer-orbit-reverse" />
                <path d="M225 229c53-92 112-122 169-88 38 23 62 77 103 83 21 3 43-7 69-30" stroke="url(#footer-ribbon)" strokeLinecap="round" strokeWidth="2" className="footer-light-trail" />
                <path d="M237 267c59-63 106-83 145-60 39 22 63 75 108 77 25 1 50-13 76-42" stroke="url(#footer-ribbon)" strokeLinecap="round" strokeOpacity=".58" strokeWidth="1.5" className="footer-light-trail footer-light-trail-slow" />
                <path d="M246 150c49 66 91 89 128 68 39-22 70-89 116-94 24-3 49 10 76 37" stroke="url(#footer-ribbon)" strokeLinecap="round" strokeOpacity=".45" strokeWidth="1.5" className="footer-light-trail footer-light-trail-reverse" />
                <path d="M225 229c53-92 112-122 169-88 38 23 62 77 103 83 21 3 43-7 69-30" filter="url(#footer-glow)" stroke="#38BDF8" strokeLinecap="round" strokeWidth="13" className="footer-energy-glow" />
                <g fill="#BAE6FD">
                  <circle cx="225" cy="229" r="3" className="footer-spark" />
                  <circle cx="394" cy="141" r="3.5" className="footer-spark footer-spark-delay-one" />
                  <circle cx="497" cy="224" r="3" className="footer-spark footer-spark-delay-two" />
                  <circle cx="450" cy="208" r="2.5" className="footer-spark footer-spark-delay-one" />
                  <circle cx="353" cy="207" r="2" className="footer-spark footer-spark-delay-two" />
                  <circle cx="474" cy="124" r="2" className="footer-spark" />
                </g>
                <circle cx="394" cy="141" r="9" stroke="#7DD3FC" strokeOpacity=".5" className="footer-node-ring" />
                <circle cx="497" cy="224" r="8" stroke="#A5B4FC" strokeOpacity=".5" className="footer-node-ring footer-spark-delay-one" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-[#080f20] via-[#080f20]/90 to-transparent" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-300 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-sky-300" />
                </span>
                Thoughtful engineering. Real-world impact.
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Complex challenges.
                <br />
                <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                  Thoughtfully solved.
                </span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base">
                AI, business systems, and digital products designed to make
                meaningful work simpler.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/services"
                  className="group/button inline-flex min-h-11 items-center gap-3 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-10px_rgba(56,189,248,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-8px_rgba(99,102,241,0.8)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
                >
                  Explore our services
                  <span className="flex size-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover/button:translate-x-0.5">
                    <ArrowRight className="size-3.5" />
                  </span>
                </a>
                <a
                  href="/contact"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
                >
                  Contact our team
                  <ArrowUpRight className="size-4 text-sky-300" />
                </a>
              </div>
            </div>
          </section>
        </Reveal>

        <div className="grid gap-10 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1.1fr] lg:py-14">
          <Reveal>
            <a href="/" aria-label="Arvision home" className="group inline-flex items-center gap-1">
              <img
                src={logoIcon}
                alt=""
                className="h-11 w-auto transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
              />
              <span className="flex flex-col items-center leading-tight">
                <span className="bg-gradient-to-r from-white via-sky-300 to-[var(--accent)] bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
                  ARVISION
                </span>
                <span className="flex items-center gap-1 text-[9px] font-medium tracking-[0.1em] text-white/55 uppercase">
                  <TaperLine />
                  Our Vision
                  <TaperLine flip />
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Thoughtful AI, connected systems, and software built around the
              people who use it.
            </p>
          </Reveal>

          {LINK_GROUPS.map((group, index) => (
            <Reveal key={group.title} delay={index * 100}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group/link inline-flex items-center gap-1 text-sm text-white/70 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="size-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group/contact inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
                >
                  <Mail className="size-4 text-sky-300 transition-transform group-hover/contact:-translate-y-0.5" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              {CONTACT_PHONES.map((phone) => (
                <li key={phone.value}>
                  <a
                    href={phone.href}
                    className="group/contact inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
                  >
                    <Phone className="size-4 text-sky-300 transition-transform group-hover/contact:rotate-6" />
                    {phone.value}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">
            © {year} Arvision. Made with vision.
          </p>
          <a
            href="#top"
            className="group/top inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-3.5 py-2 text-xs font-medium text-white/70 transition-all duration-200 hover:border-[var(--accent)]/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300 sm:self-auto"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform duration-200 group-hover/top:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
