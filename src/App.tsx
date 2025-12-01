import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Problem } from './components/sections/Problem'
import { WhatIs } from './components/sections/WhatIs'
import { Flow } from './components/sections/Flow'
import { Features } from './components/sections/Features'
import { UIShowcase } from './components/sections/UIShowcase'
import { Testimonials } from './components/sections/Testimonials'
import { Philosophy } from './components/sections/Philosophy'
import { FinalCTA } from './components/sections/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <main>
        <Hero />
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
