'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { ProblemSection, SolutionSection, CustomerSection } from '@/components/Sections'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'


export default function Home() {

  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <CustomerSection />
        <Footer />
      </div>
    </main>
  )
} 