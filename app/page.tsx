'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { ProblemSection, SolutionSection, CustomerSection } from '@/components/Sections'
import Footer from '@/components/Footer'
import WaitlistModal from '@/components/WaitlistModal'
import AnimatedBackground from '@/components/AnimatedBackground'


export default function Home() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)

  const openWaitlistModal = () => setIsWaitlistModalOpen(true)
  const closeWaitlistModal = () => setIsWaitlistModalOpen(false)

  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header onOpenWaitlist={openWaitlistModal} />
        <Hero onOpenWaitlist={openWaitlistModal} />
        <ProblemSection onOpenWaitlist={openWaitlistModal} />
        <SolutionSection onOpenWaitlist={openWaitlistModal} />
        <CustomerSection onOpenWaitlist={openWaitlistModal} />
        <Footer onOpenWaitlist={openWaitlistModal} />
      </div>
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={closeWaitlistModal} />
    </main>
  )
} 