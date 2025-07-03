import Link from 'next/link'

interface HeroProps {
  onOpenWaitlist: () => void
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced Financial Data Visualization Effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight text-display">
            <span className="gradient-text">Let AI Reshape Your</span>
            <br />
            <span className="text-gray-100">Exclusive Path to</span>
            <br />
            <span className="text-blue-400">Rational Investing</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed text-body">
            Paradoox AI is building your personal <span className="text-blue-400 font-semibold">AI-driven Fund Manager</span>, making sophisticated, 
            data-backed investment strategies accessible to <span className="text-purple-400 font-semibold">everyone</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={onOpenWaitlist}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-ui"
            >
              <span className="flex items-center gap-2">
                Join the Waitlist
                <i className="fas fa-arrow-right text-sm"></i>
              </span>
            </button>
            <Link
              href="https://deepfund.paradoox.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 text-ui"
            >
              <span className="flex items-center gap-2">
                View Demo
                <i className="fas fa-external-link-alt text-sm"></i>
              </span>
            </Link>
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