import { About } from './components/About'
import { CallToAction } from './components/CallToAction'
import { Contact } from './components/Contact'
import { DeliveryProcess } from './components/DeliveryProcess'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HomeSolutions } from './components/HomeSolutions'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { WhyChooseUs } from './components/WhyChooseUs'
import './App.css'

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

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

  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        {page ?? (
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
