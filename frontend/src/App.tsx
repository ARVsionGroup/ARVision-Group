import { useEffect } from 'react'
import { About } from './components/About'
import { CallToAction } from './components/CallToAction'
import { Contact } from './components/Contact'
import { DeliveryProcess } from './components/DeliveryProcess'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HomeSolutions } from './components/HomeSolutions'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { ServiceDetail } from './components/ServiceDetail'
import { Stats } from './components/Stats'
import { WhyChooseUs } from './components/WhyChooseUs'
import { SITE_URL } from './lib/site-config'
import { SERVICES } from './lib/services'
import './App.css'

const PAGE_METADATA: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Arvision | AI, ERP & Custom Software Solutions',
    description:
      'Arvision delivers AI, ERP, and custom software solutions to help businesses automate operations, make better decisions, and grow.',
  },
  '/about': {
    title: 'About Arvision | Our Vision & Engineering Team',
    description:
      'Meet Arvision: a technology company combining AI, enterprise systems, and modern engineering to solve real business challenges.',
  },
  '/services': {
    title: 'AI, ERP & Software Development Services | Arvision',
    description:
      'Explore Arvision services in AI and machine learning, ERP systems, web and mobile development, cloud, DevOps, and IT consulting.',
  },
  '/why-us': {
    title: 'Why Choose Arvision | Technology Partner',
    description:
      'Discover Arvision’s vision-driven approach, expert engineering team, transparent process, and scalable technology solutions.',
  },
  '/contact': {
    title: 'Contact Arvision | Start a Project',
    description:
      'Contact Arvision to discuss AI, ERP, or custom software projects and explore practical next steps with our team.',
  },
  ...Object.fromEntries(
    SERVICES.map((service) => [
      `/services/${service.slug}`,
      {
        title: `${service.title} | Arvision`,
        description: service.description,
      },
    ]),
  ),
}

function setMetaTag(attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.append(tag)
  }
  tag.content = content
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const metadata = PAGE_METADATA[path]

  useEffect(() => {
    const title = metadata?.title ?? 'Page not found | Arvision'
    const description = metadata?.description ?? 'The requested Arvision page could not be found.'
    const canonicalUrl = new URL(path === '/' ? '/' : path, SITE_URL).href

    document.title = title
    setMetaTag('name', 'description', description)
    setMetaTag('name', 'robots', metadata ? 'index, follow' : 'noindex, follow')
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', canonicalUrl)
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = canonicalUrl
  }, [metadata, path])

  const page = {
    '/': (
      <>
        <Hero />
        <Stats />
        <HomeSolutions />
        <DeliveryProcess />
        <WhyChooseUs />
        <CallToAction />
      </>
    ),
    '/about': (
      <>
        <About />
        <CallToAction />
      </>
    ),
    '/services': (
      <>
        <Services />
        <DeliveryProcess />
        <CallToAction />
      </>
    ),
    '/why-us': (
      <>
        <WhyChooseUs />
        <CallToAction />
      </>
    ),
    '/contact': <Contact />,
  }[path]
  const serviceSlug = path.startsWith('/services/') ? path.slice('/services/'.length) : ''
  const servicePage = SERVICES.some((service) => service.slug === serviceSlug)
    ? <ServiceDetail slug={serviceSlug} />
    : undefined

  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        {page ?? servicePage ?? (
          <section className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
            <h1 className="text-3xl font-semibold text-foreground">Page not found</h1>
            <a
              href="/"
              className="mt-4 inline-block text-sm font-medium text-[var(--accent)] hover:underline"
            >
              Return home
            </a>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
