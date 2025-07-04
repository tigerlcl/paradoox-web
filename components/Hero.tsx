import Link from 'next/link'

interface HeroProps {
  onOpenWaitlist: () => void
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced Financial Data Visualization Effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <div className="bg-gray-100/90 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-display">
              <span className="gradient-text">Let AI Reshape Your</span>
              <br />
              <span className="text-gray-900">Exclusive Path to</span>
              <br />
              <span className="text-yellow-400">Rational Investing</span>
            </h1>
            
            <div className="h-6 md:h-8"></div>
            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed text-body">
              Paradoox AI is building your personal <span className="text-yellow-400 font-semibold">AI-driven Fund Manager</span>, making sophisticated, 
              data-backed investment strategies accessible to <span className="text-yellow-400 font-semibold">everyone</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={onOpenWaitlist}
              className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black px-10 py-4 rounded-full text-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-ui"
            >
              <span className="flex items-center gap-2">
                Join the Waitlist
                <i className="fas fa-arrow-right text-sm"></i>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-gray-600 text-xl"></i>
      </div>
    </section>
  )
} 