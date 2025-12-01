import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Credibility } from './components/sections/Credibility'
import { Problem } from './components/sections/Problem'
import { WhatIs } from './components/sections/WhatIs'
import { Flow } from './components/sections/Flow'
import { StudentBenefits } from './components/sections/StudentBenefits'
import { Features } from './components/sections/Features'
import { UIShowcase } from './components/sections/UIShowcase'
import { Manifesto } from './components/sections/Manifesto'
import { CentraAlignment } from './components/sections/CentraAlignment'
import { FinalCTA } from './components/sections/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />
      <main>
        <Hero />
        <Credibility />
        <Problem />
        <WhatIs />
        <Flow />
        <StudentBenefits />
        <Features />
        <UIShowcase />
        <Manifesto />
        <CentraAlignment />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
