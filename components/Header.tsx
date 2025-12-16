'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Github, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: 'Why AI Fails?', href: '#why-ai-fails' },
    { name: 'Research', href: '#research' },
    { name: 'Mission', href: '#mission' },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-8 w-auto">
                <img 
                  src="/logo.svg" 
                  alt="Paradoox AI" 
                  className="h-full w-auto object-contain" 
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="https://github.com/HKUSTDial/deepfund"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </Link>
            
            <a
              href="mailto:hello@paradoox.ai"
              className="px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-accent transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-background/95 backdrop-blur-xl absolute left-0 right-0 px-6 h-screen">
            <nav className="flex flex-col space-y-6 pt-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-light text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-8 flex flex-col gap-6">
                <Link
                  href="https://github.com/HKUSTDial/deepfund"
                  target="_blank"
                  className="flex items-center gap-3 text-secondary"
                >
                  <Github className="w-6 h-6" />
                  <span>GitHub</span>
                </Link>

                <a
                  href="mailto:hello@paradoox.ai"
                  className="flex items-center gap-3 text-secondary"
                >
                  <Mail className="w-6 h-6" />
                  <span>Contact</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
