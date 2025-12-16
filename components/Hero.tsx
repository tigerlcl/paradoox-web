'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const compassRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Abstract Background - Subtle Swiss Style */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-white/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-accent/10 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in space-y-8">
          
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-medium tracking-wide uppercase text-secondary">Next Gen Fintech</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-8 leading-[1.1]">
            Trusted AI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-secondary">
              Middleware
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Reinventing how financial institutions evaluate, deploy, and trust AI.
          </p>

          {/* Minimalist Compass/Visual */}
          <div ref={compassRef} className="my-16 flex justify-center items-center relative h-32">
             <div className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
             <div className="absolute w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
             <div className="absolute w-24 h-24 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
             <div className="absolute w-16 h-16 border border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
             <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_15px_rgba(212,180,131,0.5)]"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="#research" className="group">
              <button className="bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2">
                Latest Research
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
