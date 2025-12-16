'use client'

import { 
  AlertTriangle, 
  RefreshCw, 
  GitCompare, 
  PieChart, 
  Newspaper, 
  TrendingDown,
  Activity,
  ShieldCheck,
  FileText,
  Layers,
  Users,
  Search,
  Zap,
  Play
} from 'lucide-react'
import Link from 'next/link'

// Why AI Fails Section
export function WhyAIFailsSection() {
  const challenges = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'No Explainability',
      description: 'Direct buy/sell recommendations with no reasoning or transparency.'
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Inconsistent Decisions',
      description: 'Same model produces different recommendations across time.'
    },
    {
      icon: <GitCompare className="w-6 h-6" />,
      title: 'Preference Instability',
      description: 'Model A says Buy, Model B says Sell. Which one to trust?'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Safe and Secure',
      description: 'How to ensure the safety and security of the AI model when assisting with asset management?'
    },
    {
      icon: <Newspaper className="w-6 h-6" />,
      title: 'Misinformation',
      description: 'Signal vs Noise. How to distinguish between the two?'
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: 'Accountability Gap',
      description: 'Market volatility causes losses → who is responsible?'
    }
  ]

  return (
    <section id="why-ai-fails" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">The Problem</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-primary mb-6">
            AI is powerful. <br />
            <span className="text-secondary">But not yet trustworthy.</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl font-light">
            Current AI approaches fail in financial decision-making due to critical reliability gaps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-500">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-medium text-primary mb-3">{challenge.title}</h3>
              <p className="text-secondary leading-relaxed font-light">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Our Mission Section
export function MissionSection() {
  const capabilities = [
    {
      title: "Model Evaluation",
      desc: "Comprehensive testing frameworks for production systems.",
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: "Risk Management",
      desc: "Intelligent decision support with built-in risk assessment.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: "Explainable AI",
      desc: "Transparent decisions for regulatory compliance.",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Enterprise Integration",
      desc: "Seamless integration with existing infrastructure.",
      icon: <Layers className="w-5 h-5" />
    }
  ]

  return (
    <section id="mission" className="py-32 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-primary mb-8 leading-tight">
              Trusted AI Infrastructure <br />
              <span className="text-secondary">for Finance.</span>
            </h2>
            <p className="text-xl text-secondary mb-12 font-light leading-relaxed">
              We provide the enterprise-grade middleware necessary to enable secure, transparent, and reliable AI adoption in financial institutions.
            </p>
            
            <a 
              href="mailto:hello@paradoox.ai"
              className="inline-flex items-center gap-3 text-primary border-b border-accent pb-1 hover:text-accent transition-colors duration-300"
            >
              <span className="font-medium">Get in touch</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((item, i) => (
              <div key={i} className="p-8 bg-background/50 rounded-sm hover:bg-background transition-colors duration-300">
                <div className="text-accent mb-4">{item.icon}</div>
                <h3 className="text-lg font-medium text-primary mb-2">{item.title}</h3>
                <p className="text-secondary text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Research Section - DeepFund
export function ResearchSection() {
  return (
    <section id="research" className="py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">Research</span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-primary mb-6">
            DeepFund
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto font-light">
            A live benchmarking system for AI investment strategies.
          </p>
        </div>

        <div className="space-y-24">
          {/* Video Section */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative aspect-video bg-surface overflow-hidden rounded-sm shadow-2xl shadow-black/50">
              <video 
                className="w-full h-full object-cover"
                controls
                poster='/arena_v1.png'
              >
                <source src="/deepfund_paper.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-center text-xs text-secondary mt-4 uppercase tracking-wider">
              Research Presentation
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              <Users className="w-8 h-8 text-accent" />
              <h4 className="text-lg font-medium text-primary">Multi-Agent</h4>
              <p className="text-sm text-secondary font-light">Collaborative decision-making across specialized AI agents.</p>
            </div>
            <div className="space-y-4">
              <Search className="w-8 h-8 text-accent" />
              <h4 className="text-lg font-medium text-primary">Transparency</h4>
              <p className="text-sm text-secondary font-light">End-to-end traceability from data signal to execution.</p>
            </div>
            <div className="space-y-4">
              <ShieldCheck className="w-8 h-8 text-accent" />
              <h4 className="text-lg font-medium text-primary">Governance</h4>
              <p className="text-sm text-secondary font-light">Rigorous evaluation and monitoring frameworks.</p>
            </div>
            <div className="space-y-4">
              <Zap className="w-8 h-8 text-accent" />
              <h4 className="text-lg font-medium text-primary">Explainable</h4>
              <p className="text-sm text-secondary font-light">Interpretability for every investment recommendation.</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://deepfund.paradoox.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-accent text-black px-8 py-4 rounded-full font-medium hover:bg-white transition-colors duration-300"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Check Live Demo</span>
            </a>
            
            <a 
              href="https://arxiv.org/abs/2505.11065"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-secondary hover:text-white transition-colors duration-300 px-8 py-4"
            >
              <FileText className="w-4 h-4" />
              <span>Read Paper</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
