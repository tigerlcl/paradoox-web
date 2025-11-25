'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const compassRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (compassRef.current) {
      observer.observe(compassRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient light effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <div className="animate-fade-in">

          {/* Main Heading - Ultra Bold */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-display mb-6">
            <span className="block text-white">The Next-Generation</span>
            <span className="block bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
              Trusted AI FinTech
            </span>
            <span className="block text-white">Middleware</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Reinventing how financial institutions evaluate, deploy, and trust AI.
          </p>

          {/* Visual Metaphor - Compass */}
          <div ref={compassRef} className="compass-container mb-12 flex justify-center">
            <div className="relative w-28 h-28 md:w-36 md:h-36">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30 animate-spin-slow"></div>
              {/* Middle ring */}
              <div className="absolute inset-4 rounded-full border-2 border-yellow-500/40 animate-spin-reverse"></div>
              {/* Center compass */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-500/50">
                <svg className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-full bg-yellow-500/20 animate-ping"></div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#research">
              <button className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-3">
                  Latest Research
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
} 