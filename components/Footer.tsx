import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800/50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/paradoox ai logo.svg" 
                alt="Paradoox AI" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-body leading-relaxed text-lg">
              The next-generation <span className="text-yellow-400 font-semibold">trusted AI FinTech middleware</span> for financial institutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white text-heading">Platform</h3>
            <ul className="space-y-3">
              <li>
                <a href="#why-ai-fails" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-ui">
                  Why AI Fails?
                </a>
              </li>
              <li>
                <a href="#research" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-ui">
                  Research
                </a>
              </li>
              <li>
                <a href="#mission" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-ui">
                  Our Mission
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white text-heading">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@paradoox.ai" 
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-ui flex items-center gap-2"
                >
                  <i className="fas fa-envelope text-yellow-400 text-xs"></i>
                  <span className="text-sm">hello@paradoox.ai</span>
                </a>
              </li>
              <li>
                <Link 
                  href="https://github.com/HKUSTDial/deepfund" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-ui flex items-center gap-2"
                >
                  <i className="fab fa-github text-yellow-400 text-xs"></i>
                  <span className="text-sm">GitHub</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0 text-ui">
            <p>© {currentYear} Paradoox AI. All rights reserved.</p>
            <p className="mt-2 text-xs text-gray-500">Trusted • Intelligent • Financial</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-ui">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-ui">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 