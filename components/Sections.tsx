import Link from 'next/link'

export function ResearchSection() {
  return (
    <section id="research" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6 text-heading tracking-tight">
            Cutting-Edge <span className="gradient-text">Research</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-body leading-relaxed">
            At the forefront of AI innovation, we're developing breakthrough technologies 
            that will shape the future of artificial intelligence and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="dark-card p-8 rounded-2xl hover:bg-gray-800/70 transition-all duration-300 group">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-brain text-white text-lg"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-4 text-heading">Large Language Models</h3>
            <p className="text-gray-300 text-body leading-relaxed">
              Advanced <span className="text-blue-400 font-medium">LLM architectures</span> and fine-tuning techniques driving intelligent 
              natural language understanding and generation capabilities.
            </p>
          </div>

          <div className="dark-card p-8 rounded-2xl hover:bg-gray-800/70 transition-all duration-300 group">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-users text-white text-lg"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-4 text-heading">Multi-Agent Systems</h3>
            <p className="text-gray-300 text-body leading-relaxed">
              Revolutionary <span className="text-purple-400 font-medium">Multi-Agent architectures</span> enabling collaborative AI reasoning, 
              coordination, and complex problem-solving at scale.
            </p>
          </div>

          <div className="dark-card p-8 rounded-2xl hover:bg-gray-800/70 transition-all duration-300 group">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-shield-alt text-white text-lg"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-4 text-heading">Trustworthy AI</h3>
            <p className="text-gray-300 text-body leading-relaxed">
              Building reliable and transparent AI systems that foster <span className="text-green-400 font-medium">trust</span> through 
              explainable algorithms and robust safety mechanisms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6 text-heading tracking-tight">
              About <span className="gradient-text">Paradoox AI</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 text-body leading-relaxed">
              We are a pioneering AI research company in the seed stage, dedicated to building 
              trustworthy artificial intelligence through innovative <span className="text-blue-400 font-medium">LLM research</span> and 
              <span className="text-purple-400 font-medium"> Multi-Agent system</span> development.
            </p>
            <p className="text-lg text-gray-300 mb-8 text-body leading-relaxed">
              Our team of brilliant researchers and engineers work tirelessly to develop 
              AI solutions that not only advance the field but also create real-world 
              impact while maintaining the highest standards of trust and reliability.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-ui">Cutting-edge LLM research</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-200"></div>
                <span className="text-gray-300 text-ui">Multi-Agent architectures</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-400"></div>
                <span className="text-gray-300 text-ui">Trustworthy AI development</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 text-heading">Our Mission</h3>
              <p className="text-blue-100 mb-6 text-body leading-relaxed">
                To democratize trustworthy AI technology and make advanced artificial intelligence 
                accessible to everyone, while maintaining the highest standards of 
                research excellence and ethical AI development.
              </p>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-sm text-blue-100 mb-2 text-ui">Featured Project</div>
                <div className="font-semibold text-heading">DeepFund AI Platform</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function DocsSection() {
  return (
    <section id="docs" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6 text-heading tracking-tight">
          <span className="gradient-text">Documentation</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto text-body leading-relaxed">
          Comprehensive guides, API references, and tutorials to help you 
          integrate and leverage our <span className="text-blue-400 font-medium">LLM</span> and <span className="text-purple-400 font-medium">Multi-Agent</span> technologies.
        </p>
        
        <div className="dark-card rounded-2xl p-12 max-w-4xl mx-auto">
          <div className="text-6xl mb-6">
            <i className="fas fa-file-code text-blue-400"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-100 mb-4 text-heading">Coming Soon</h3>
          <p className="text-gray-300 mb-8 text-body leading-relaxed">
            Our documentation portal is currently under development. 
            Stay tuned for comprehensive guides and API documentation.
          </p>
          <Link
            href="https://github.com/HKUSTDial/deepfund"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200 text-ui"
          >
            <i className="fab fa-github"></i>
            <span>View DeepFund Repository</span>
            <i className="fas fa-external-link-alt text-sm"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6 text-heading tracking-tight">
          Latest from our <span className="gradient-text">Blog</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto text-body leading-relaxed">
          Insights, research findings, and thoughts on <span className="text-blue-400 font-medium">LLM</span>, <span className="text-purple-400 font-medium">Multi-Agent systems</span>, 
          and the future of trustworthy artificial intelligence.
        </p>
        
        <div className="dark-card rounded-2xl p-12 max-w-4xl mx-auto">
          <div className="text-6xl mb-6">
            <i className="fas fa-blog text-purple-400"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-100 mb-4 text-heading">Blog Coming Soon</h3>
          <p className="text-gray-300 mb-8 text-body leading-relaxed">
            We're preparing exciting content about AI research, <span className="text-blue-400 font-medium">LLM developments</span>, 
            <span className="text-purple-400 font-medium"> Multi-Agent innovations</span>, and behind-the-scenes looks at our projects. Stay tuned!
          </p>
          <div className="inline-flex items-center space-x-2 text-blue-400 font-medium text-ui">
            <i className="fas fa-bell"></i>
            <span>Subscribe for updates</span>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </section>
  )
} 