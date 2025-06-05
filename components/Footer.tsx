import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl brand-font">P</span>
              </div>
              <span className="text-2xl font-bold brand-font">Paradoox AI</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-body leading-relaxed">
              Leading AI research and innovation company building the future of trustworthy 
              artificial intelligence through cutting-edge <span className="text-blue-400 font-medium">LLM</span> and <span className="text-purple-400 font-medium">Multi-Agent</span> research.
            </p>
            <div className="text-sm text-gray-400 text-ui">
              <p>© {currentYear} Paradoox AI. All rights reserved.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100 text-heading">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#research" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-ui flex items-center gap-2">
                  <i className="fas fa-brain text-xs"></i>
                  Research
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-ui flex items-center gap-2">
                  <i className="fas fa-info-circle text-xs"></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#docs" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-ui flex items-center gap-2">
                  <i className="fas fa-file-code text-xs"></i>
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-ui flex items-center gap-2">
                  <i className="fas fa-blog text-xs"></i>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100 text-heading">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@paradoox.ai" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-ui flex items-center gap-2"
                >
                  <i className="fas fa-envelope text-blue-400 text-xs"></i>
                  <span className="text-sm">hello@paradoox.ai</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:dev@paradoox.ai" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-ui flex items-center gap-2"
                >
                  <i className="fas fa-code text-green-400 text-xs"></i>
                  <span className="text-sm">dev@paradoox.ai</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:research@paradoox.ai" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-ui flex items-center gap-2"
                >
                  <i className="fas fa-flask text-purple-400 text-xs"></i>
                  <span className="text-sm">research@paradoox.ai</span>
                </a>
              </li>
              <li className="pt-2 border-t border-gray-700">
                <Link 
                  href="https://deepfund.paradoox.ai/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-ui flex items-center gap-2"
                >
                  <i className="fas fa-rocket text-xs"></i>
                  DeepFund Demo
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/HKUSTDial/deepfund" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-ui flex items-center gap-2"
                >
                  <i className="fab fa-github text-xs"></i>
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0 text-ui flex items-center gap-2">
            <span>Made with</span>
            <i className="fas fa-heart text-red-400 animate-pulse"></i>
            <span>for the future of trustworthy AI</span>
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