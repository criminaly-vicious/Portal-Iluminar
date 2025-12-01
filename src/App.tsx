import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { Problem } from './components/sections/Problem'
import { WhatIs } from './components/sections/WhatIs'
import { HowItWorks } from './components/sections/HowItWorks'
import { Promise } from './components/sections/Promise'
import { Features } from './components/sections/Features'
import { Unique } from './components/sections/Unique'
import { Alignment } from './components/sections/Alignment'
import { Tagline } from './components/sections/Tagline'
import { SocialProof } from './components/sections/SocialProof'
import { FinalCTA } from './components/sections/FinalCTA'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-graphite">
      <Header />
      <main>
        <Hero />
        <Problem />
        <WhatIs />
        <HowItWorks />
        <Promise />
        <Features />
        <Unique />
        <Alignment />
        <Tagline />
        <SocialProof />
        <FinalCTA />
      </main>
      
      <footer className="bg-brand-graphite py-12 text-center text-white/40 text-sm">
        <p>&copy; {new Date().getFullYear()} Portal Iluminar. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
