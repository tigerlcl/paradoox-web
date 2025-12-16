import Link from 'next/link'
import { Github, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-white/5 text-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link href="/" className="inline-block">
              <img 
                src="/logo.svg" 
                alt="Paradoox AI" 
                className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-secondary max-w-sm text-sm font-light leading-relaxed">
              The next-generation <span className="text-white font-medium">trusted AI FinTech middleware</span> for financial institutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-white uppercase tracking-widest">Platform</h3>
            <ul className="space-y-4">
              <li>
                <a href="#why-ai-fails" className="text-sm text-secondary hover:text-white transition-colors duration-200">
                  Why AI Fails?
                </a>
              </li>
              <li>
                <a href="#research" className="text-sm text-secondary hover:text-white transition-colors duration-200">
                  Research
                </a>
              </li>
              <li>
                <a href="#mission" className="text-sm text-secondary hover:text-white transition-colors duration-200">
                  Our Mission
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-white uppercase tracking-widest">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:hello@paradoox.ai" 
                  className="group flex items-center gap-3 text-sm text-secondary hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                  <span>hello@paradoox.ai</span>
                </a>
              </li>
              <li>
                <Link 
                  href="https://github.com/HKUSTDial/deepfund" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-secondary hover:text-white transition-colors duration-200"
                >
                  <Github className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                  <span>GitHub</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-secondary font-light">
            <p>© {currentYear} Paradoox AI. All rights reserved.</p>
          </div>
          <div className="flex space-x-8">
            <Link href="/privacy" className="text-xs text-secondary hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-secondary hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
