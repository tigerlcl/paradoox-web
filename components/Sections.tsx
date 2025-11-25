'use client'

// Why AI Fails Section
export function WhyAIFailsSection() {
  const challenges = [
    {
      icon: '⚠️',
      title: 'No Explainability',
      description: 'Direct buy/sell recommendations with no reasoning or transparency'
    },
    {
      icon: '🔄',
      title: 'Inconsistent Decisions',
      description: 'Same model produces different recommendations across time'
    },
    {
      icon: '⚔️',
      title: 'Preference Instability',
      description: 'Model A says Buy, Model B says Sell — which one to trust?'
    },
    {
      icon: '💰',
      title: 'Budget Allocation',
      description: 'How to allocate the budget and cashflow across different strategies and market regime?'

    },
    {
      icon: '📰',
      title: 'Fake News Manipulation',
      description: 'AI models can be misled by misinformation, leading to wrong actions'
    },
    {
      icon: '📉',
      title: 'Accountability Gap',
      description: 'Market volatility causes losses → who is responsible?'
    }
  ]

  return (
    <section id="why-ai-fails" className="py-20 bg-gradient-to-b from-black to-slate-900 relative">

      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 mb-6 rounded-full bg-yellow-500/10 border border-yellow-500/20">
            <span className="text-yellow-400 font-bold text-sm tracking-wider uppercase">Why AI Fails</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-display">
            AI Is Powerful.
            <span className="block mt-2 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
              But Not Yet Trustworthy in Finance.
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here's why current AI approaches fail in stock trading and financial decision-making:
          </p>
        </div>

        {/* Challenge cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="group bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/60 hover:border-red-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-3">{challenge.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2 text-heading">{challenge.title}</h3>
              <p className="text-gray-300 text-sm text-body leading-relaxed">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Our Mission Section
export function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Accent glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 
      to-transparent"></div>

      <div className="inline-block px-5 py-2 mb-6 rounded-full bg-yellow-500/10 border border-yellow-500/20">
        <span className="text-yellow-400 font-bold text-sm tracking-wider uppercase">Our Mission</span>
      </div>

        {/* Main heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Trusted AI Infrastructure
          <span className="block mt-2 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            for Financial Institutions
          </span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Enterprise-grade AI middleware that enables secure, transparent, and reliable AI adoption in finance.
        </p>

        {/* Core capabilities - Simple grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-2">AI Model Evaluation</h3>
            <p className="text-gray-400 text-sm">Comprehensive testing and monitoring frameworks for production AI systems</p>
          </div>
          
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-2">Risk Management</h3>
            <p className="text-gray-400 text-sm">Intelligent decision support with built-in risk assessment and compliance</p>
          </div>
          
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-2">Explainable AI</h3>
            <p className="text-gray-400 text-sm">Transparent and interpretable AI decisions for regulatory compliance</p>
          </div>
          
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-2">Enterprise Integration</h3>
            <p className="text-gray-400 text-sm">Seamless integration with existing financial infrastructure and workflows</p>
          </div>
        </div>

        {/* CTA */}
        <div id="institutions" className="pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">
            Trusted • Intelligent • Financial
          </p>
          <a 
            href="mailto:hello@paradoox.ai"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Reach Out Now <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

// Research Section - DeepFund
export function ResearchSection() {
  return (
    <section id="research" className="py-24 bg-black relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 mb-6 rounded-full bg-yellow-500/10 border border-yellow-500/20">
            <span className="text-yellow-400 font-bold text-sm tracking-wider uppercase">Our Research</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-display leading-tight">
            Introducing <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">DeepFund</span>
          </h2>
        </div>

        {/* Top-Down Layout: Video then Info */}
        <div className="space-y-12">
          {/* Video Section - Full Width */}
          <div className="relative group max-w-5xl mx-auto">
            <div className="relative overflow-hidden hover:border-yellow-500/40 transition-all duration-300 shadow-2xl shadow-yellow-500/10">
              <video 
                className="w-full h-auto"
                controls
                poster='/arena_v1.png'
              >
                <source src="/deepfund_paper.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            Paper video generated by Google NoteBookLM ❤️ 
          </div>

          {/* Information Section */}
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Description */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 text-heading">
              Live Benchmarking System For AI Investment
              </h3>
              <p className="text-gray-300 text-xl leading-relaxed mb-4">
              We evaluate the trading capability of LLM across various financial markets given a unified environment. 
              The LLM shall ingest external information, drive a multi-agent system, and make trading decisions. The LLM performance will be presented in a trading arena view across various dimensions.
              </p>
              
            </div>

            {/* Key Features - Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <svg className="w-8 h-8 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Multi-Agent Collaboration</h4>
                    <p className="text-gray-300 text-sm">Collaborative decision-making across specialized AI agents</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <svg className="w-8 h-8 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Workflow Transparency</h4>
                    <p className="text-gray-300 text-sm">From data to signal, from signal to decision, from decision to execution, all are transparent and explainable</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <svg className="w-8 h-8 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">AI-Driven Governance</h4>
                    <p className="text-gray-300 text-sm">Rigorous evaluation and monitoring frameworks</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <svg className="w-8 h-8 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Explainable Results</h4>
                    <p className="text-gray-300 text-sm">Transparent and interpretable investment recommendations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://deepfund.paradoox.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-10 py-6 rounded-full hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 font-bold text-lg"
              >
                <i className="fas fa-play text-xl"></i>
                <span>Check Live Demo</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a 
                href="https://arxiv.org/abs/2505.11065"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-yellow-400/50 text-yellow-400 px-10 py-6 rounded-full hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 inline-flex items-center gap-3 font-bold text-lg"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Research Paper</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

 