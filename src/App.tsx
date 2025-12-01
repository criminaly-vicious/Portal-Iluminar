import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Credibility } from './components/sections/Credibility'
import { Problem } from './components/sections/Problem'
import { WhatIs } from './components/sections/WhatIs' // Solution
import { Flow } from './components/sections/Flow' // How It Works
import { Features } from './components/sections/Features'
import { UIShowcase } from './components/sections/UIShowcase' // Dashboard
import { Testimonials } from './components/sections/Testimonials'
import { Philosophy } from './components/sections/Philosophy'
import { FinalCTA } from './components/sections/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-orange/20 selection:text-graphite">
      <Header />
      <main>
        <Hero />
        <Credibility />
        <Problem />
        <WhatIs />
        <Flow />
        <Features />
        <UIShowcase />
        <Testimonials />
        <Philosophy />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
