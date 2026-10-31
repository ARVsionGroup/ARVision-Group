import { About } from './components/About'
import { CallToAction } from './components/CallToAction'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { WhyChooseUs } from './components/WhyChooseUs'
import './App.css'

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyChooseUs />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
