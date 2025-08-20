'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { ProblemSection, SolutionSection, CustomerSection } from '@/components/Sections'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import WaitlistModal from '@/components/WaitlistModal'


export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header onWaitlistOpen={() => setIsWaitlistOpen(true)} />
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <CustomerSection />
        <Footer />
      </div>
      
      {/* Waitlist Modal - Rendered at page level for full coverage */}
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </main>
  )
} 