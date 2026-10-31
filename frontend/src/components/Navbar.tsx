import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logoIcon from '../assets/logo-icon.png'
import { Button } from '@/components/ui/button'
import { TaperLine } from './TaperLine'
import { ThemeToggle } from './ThemeToggle'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/why-us', label: 'Why Us' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? 'border-border bg-background/80 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-8">
        <a href="/" className="group flex items-center gap-0">
          <img src={logoIcon} alt="" className="h-10 w-auto -mr-2 transition-transform duration-300 group-hover:scale-105 sm:h-11" />
          <span className="flex flex-col items-center leading-tight">
            <span className="block bg-gradient-to-r from-[var(--text-h)] via-[var(--accent)] to-sky-400 bg-clip-text text-lg font-extrabold tracking-tight text-transparent transition-[filter] duration-300 group-hover:drop-shadow-[0_0_8px_var(--accent-bg)] sm:text-xl">
              ARVISION
            </span>
            <span className="flex items-center gap-1 text-[9px] font-medium tracking-[0.1em] text-muted-foreground uppercase">
              <TaperLine />
              Our Vision
              <TaperLine flip />
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={currentPath === link.href ? 'page' : undefined}
              className={`text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:text-foreground ${
                currentPath === link.href ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button render={<a href="/contact" />} nativeButton={false}>
            Get in touch
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex animate-reveal-up flex-col gap-1 border-t border-border bg-background px-6 py-4 motion-reduce:animate-none md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={currentPath === link.href ? 'page' : undefined}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:translate-x-1 hover:bg-muted hover:text-foreground ${
                currentPath === link.href ? 'bg-muted text-foreground' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            render={<a href="/contact" onClick={() => setOpen(false)} />}
            nativeButton={false}
            className="mt-2"
          >
            Get in touch
          </Button>
        </nav>
      )}
    </header>
  )
}
