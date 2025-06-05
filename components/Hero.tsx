import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight text-display">
            <span className="gradient-text">Paradoox AI</span>
            <br />
            <span className="text-gray-100">Research</span>
            <br />
            <span className="text-gray-300 text-5xl md:text-6xl">Innovation</span>
          </h1>

          {/* New Slogan */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-heading tracking-tight">
            How AI can shape your trust?
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed text-body">
            Pioneering trustworthy AI through cutting-edge <span className="text-blue-400 font-semibold">LLM research</span> and <span className="text-purple-400 font-semibold">Multi-Agent systems</span> 
            that transform industries and empower the future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="https://deepfund.paradoox.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-ui"
            >
              <span className="flex items-center gap-2">
                Explore DeepFund 
                <i className="fas fa-rocket text-sm"></i>
              </span>
            </Link>
            <Link
              href="#research"
              className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 text-ui"
            >
              Learn More
            </Link>
          </div>

          {/* Featured Project Highlight */}
          <div className="animate-slide-up dark-card rounded-2xl p-8 shadow-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-100 mb-4 text-heading">Featured Project</h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-blue-400 mb-2 text-heading">DeepFund</h4>
                <p className="text-gray-300 text-body leading-relaxed">
                  Our flagship AI-powered financial intelligence platform, revolutionizing 
                  investment analysis through advanced <span className="text-blue-400 font-medium">LLM</span> and <span className="text-purple-400 font-medium">Multi-Agent</span> architectures.
                </p>
              </div>
              <Link
                href="https://deepfund.paradoox.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 text-ui"
              >
                <span className="flex items-center gap-2">
                  Try Live Demo
                  <i className="fas fa-external-link-alt text-sm"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-gray-400 text-xl"></i>
      </div>
    </section>
  )
} 