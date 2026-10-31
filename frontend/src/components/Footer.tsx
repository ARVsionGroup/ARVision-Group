import { AtSign, Briefcase, Camera, Terminal } from 'lucide-react'
import logoIcon from '../assets/logo-icon.png'
import { TaperLine } from './TaperLine'
import { Reveal } from './Reveal'

const SOCIAL_LINKS = [
  { icon: Terminal, label: 'GitHub', href: '#' },
  { icon: Briefcase, label: 'LinkedIn', href: '#' },
  { icon: AtSign, label: 'Twitter', href: '#' },
  { icon: Camera, label: 'Instagram', href: '#' },
]

const FOOTER_LINKS = {
  Company: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'AI & Machine Learning', href: '/services' },
    { label: 'ERP Systems', href: '/services' },
    { label: 'Web & Mobile Apps', href: '/services' },
    { label: 'Cloud & DevOps', href: '/services' },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <Reveal>
            <a href="/" className="flex items-center gap-0">
              <img src={logoIcon} alt="" className="h-9 w-auto -mr-2" />
              <span className="flex flex-col items-center leading-tight">
                <span className="block bg-gradient-to-r from-[var(--text-h)] via-[var(--accent)] to-sky-400 bg-clip-text text-lg font-extrabold tracking-tight text-transparent">
                  ARVISION
                </span>
                <span className="flex items-center gap-1 text-[9px] font-medium tracking-[0.1em] text-muted-foreground uppercase">
                  <TaperLine />
                  Our Vision
                  <TaperLine flip />
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Engineering the future through intelligent vision — AI, ERP, and
              software that moves your business forward.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </Reveal>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <Reveal key={heading} delay={heading === 'Company' ? 100 : 200}>
              <h3 className="text-sm font-semibold text-foreground">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-block text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} Arvision. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
