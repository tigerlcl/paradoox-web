'use client'

import { useState } from 'react'
import Link from 'next/link'

interface HeaderProps {
  onOpenWaitlist: () => void
}

export default function Header({ onOpenWaitlist }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { name: 'Products', href: '/' },
    { name: 'Blog', href: '/' },
    { name: 'Company', href: '/' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/paradoox ai logo.svg" 
                alt="Paradoox AI" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-ui text-xl font-medium tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Section - Social Icons + Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Icons */}
            <div className="flex items-center space-x-3 mr-2">
              <Link
                href="https://github.com/HKUSTDial/deepfund"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-yellow-400 transition-colors duration-200"
              >
                <i className="fab fa-github text-3xl"></i>
              </Link>
              {/* <Link
                href="https://discord.gg/paradoox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <i className="fab fa-discord text-lg"></i>
              </Link> */}
              {/* <Link
                href="https://x.com/paradoox_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <i className="fab fa-twitter text-lg"></i>
              </Link> */}
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={onOpenWaitlist}
                className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black px-6 py-2 rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 font-medium text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Join the Waitlist
              </button>
              <Link
                href="https://deepfund.paradoox.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-yellow-500 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition-colors duration-200 font-medium text-base"
              >
                Try Demo
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-yellow-400 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-ui font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Social Icons */}
              <div className="flex items-center justify-center space-x-6 py-2">
                <Link
                  href="https://github.com/HKUSTDial/deepfund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <i className="fab fa-github text-xl"></i>
                </Link>
                <Link
                  href="https://discord.gg/paradoox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  <i className="fab fa-discord text-xl"></i>
                </Link>
                <Link
                  href="https://x.com/paradoox_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  <i className="fab fa-x-twitter text-xl"></i>
                </Link>
              </div>

              <button
                onClick={() => {
                  onOpenWaitlist()
                  setIsMenuOpen(false)
                }}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-2 rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-colors duration-200 font-medium text-center w-full"
              >
                Join Waitlist
              </button>
              <Link
                href="https://deepfund.paradoox.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-yellow-500 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition-colors duration-200 font-medium text-center"
              >
                Try Demo
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 