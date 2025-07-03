import Link from 'next/link'

interface FooterProps {
  onOpenWaitlist: () => void
}

export default function Footer({ onOpenWaitlist }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800/50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-white opacity-95 rounded-lg p-2 shadow-sm border-2 border-gray-300/40">
                <img 
                  src="/paradoox ai logo.svg" 
                  alt="Paradoox AI" 
                  className="h-8 w-auto"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-body leading-relaxed">
              Building your personal <span className="text-blue-400 font-medium">AI-driven Fund Manager</span> and making sophisticated, 
              data-backed investment strategies accessible to <span className="text-purple-400 font-medium">everyone</span>.
            </p>
            <div className="text-sm text-gray-400 text-ui">
              <p>© {currentYear} Paradoox AI. All rights reserved.</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100 text-heading">Navigate</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-ui flex items-center gap-2">
                  <i className="fas fa-cube text-xs"></i>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-ui flex items-center gap-2">
                  <i className="fas fa-blog text-xs"></i>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-ui flex items-center gap-2">
                  <i className="fas fa-building text-xs"></i>
                  Company
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100 text-heading">Get Started</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={onOpenWaitlist}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-ui flex items-center gap-2"
                >
                  <i className="fas fa-user-plus text-blue-400 text-xs"></i>
                  <span className="text-sm">Join Waitlist</span>
                </button>
              </li>
              <li>
                <Link 
                  href="https://deepfund.paradoox.ai/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-ui flex items-center gap-2"
                >
                  <i className="fas fa-rocket text-purple-400 text-xs"></i>
                  <span className="text-sm">Try DeepFund Demo</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/HKUSTDial/deepfund" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-ui flex items-center gap-2"
                >
                  <i className="fab fa-github text-green-400 text-xs"></i>
                  <span className="text-sm">View on GitHub</span>
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-700">
                <a 
                  href="mailto:hello@paradoox.ai" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-ui flex items-center gap-2"
                >
                  <i className="fas fa-envelope text-cyan-400 text-xs"></i>
                  <span className="text-sm">hello@paradoox.ai</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0 text-ui flex items-center gap-2">
            <span>Made with</span>
            <i className="fas fa-heart text-red-400 animate-pulse"></i>
            <span>for rational investing</span>
          </div>
          <div className="flex space-x-6">
            <Link href="#privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 text-ui">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 text-ui">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 