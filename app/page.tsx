'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { 
  WhyAIFailsSection, 
  MissionSection, 
  ResearchSection 
} from '@/components/Sections'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main className="min-h-screen relative bg-black">
      <div className="relative z-10">
        <Header />
        <Hero />
        <WhyAIFailsSection />
        <ResearchSection />
        <MissionSection />
        <Footer />
      </div>
    </main>
  )
} 