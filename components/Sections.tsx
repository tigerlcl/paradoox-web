import Link from 'next/link'

interface SectionProps {
  onOpenWaitlist: () => void
}

export function ProblemSection({ onOpenWaitlist }: SectionProps) {
  return (
    <section id="problem" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6 text-heading tracking-tight">
            Investing is Complex. <br />
            <span className="gradient-text">Your Tools Shouldn't Be.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-body leading-relaxed">
            Are you struggling with the challenges that make rational investing feel impossible? 
            You're not alone. Here's what we resolve:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Problem 1: Information Overload */}
          <div className="dark-card p-8 rounded-2xl hover:bg-gray-700/70 transition-all duration-300 group">
            <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-brain text-red-400 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-4 text-heading">Information Overload & Emotional Decisions</h3>
            <p className="text-gray-300 text-body leading-relaxed">
              The modern market is a <span className="text-red-400 font-medium">flood of information</span>. For most individual investors, 
              this leads to emotional choices and <span className="text-red-400 font-medium">'gut-feel' trades</span> rather than rational analysis.
            </p>
          </div>

          {/* Problem 2: Limited Tools */}
          <div className="dark-card p-8 rounded-2xl hover:bg-gray-700/70 transition-all duration-300 group">
            <div className="w-16 h-16 bg-yellow-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-tools text-yellow-400 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-4 text-heading">Limited & Unclear Tools</h3>
            <p className="text-gray-300 text-body leading-relaxed">
              Traditional <span className="text-yellow-400 font-medium">'demo accounts'</span> show you what happens, but never why. 
              They are one-size-fits-all and lack the <span className="text-yellow-400 font-medium">personalized, logical explanations</span> you need to actually learn.
            </p>
          </div>

          {/* Problem 3: Black Box */}
          <div className="dark-card p-8 rounded-2xl hover:bg-gray-700/70 transition-all duration-300 group">
            <div className="w-16 h-16 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-question-circle text-purple-400 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-4 text-heading">The 'Black Box' Problem</h3>
            <p className="text-gray-300 text-body leading-relaxed">
              As AI becomes more common, its decision-making process is often a <span className="text-purple-400 font-medium">mystery</span>. 
              Investors need and deserve <span className="text-purple-400 font-medium">transparency</span>, but the market is full of 'black box' solutions.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="dark-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-100 mb-4 text-heading">
              Ready for a Solution That Actually Makes Sense?
            </h3>
            <p className="text-gray-300 mb-6 text-body leading-relaxed">
              Join our waitlist to be the first to experience AI-driven investing that's
              <span className="text-blue-400 font-medium"> transparent</span>, <span className="text-purple-400 font-medium">personalized</span>, and <span className="text-green-400 font-medium">rational</span>.
            </p>
            <button
              onClick={onOpenWaitlist}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-ui inline-flex items-center gap-2"
            >
              Get Early Access
              <i className="fas fa-arrow-right text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SolutionSection({ onOpenWaitlist }: SectionProps) {
  return (
    <section id="solution" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6 text-heading tracking-tight">
            Welcome to the Future of Investing: <br />
            <span className="gradient-text">Transparent, Automated, and Yours.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto text-body leading-relaxed">
            Introducing Paradoox AI as the answer to complex investing. Our vision transforms 
            how you understand and interact with financial markets.
          </p>
        </div>

        {/* Core Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* DeepFund */}
          <div className="dark-card p-8 rounded-2xl hover:bg-gray-800/70 transition-all duration-300 group">
            <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-robot text-blue-400 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-100 mb-4 text-heading">DeepFund</h3>
            <p className="text-gray-300 text-body leading-relaxed">
              Our core platform, DeepFund, is an <span className="text-blue-400 font-medium">AI-powered financial twin system</span>. 
              It allows you to build, test, and deploy a team of AI analysts in a zero-risk environment. 
              We translate complex data into <span className="text-blue-400 font-medium">clear logic</span>, showing you the 'why' behind every decision.
            </p>
          </div>

          {/* InvestArena */}
          <div className="dark-card p-8 rounded-2xl hover:bg-gray-800/70 transition-all duration-300 group">
            <div className="w-16 h-16 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-users text-purple-400 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-100 mb-4 text-heading">InvestArena</h3>
            <p className="text-gray-300 text-body leading-relaxed">
              Fueling our ecosystem is InvestArena, a <span className="text-purple-400 font-medium">community and leaderboard</span> for AI models. 
              Here, you can discover strategies built by other users, rate their performance, and even contribute your own, 
              fostering a <span className="text-purple-400 font-medium">collaborative environment of innovation</span>.
            </p>
          </div>
        </div>

        {/* Visual Product Showcase */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-100 text-center mb-12 text-heading">
            Core Features That Set Us Apart
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Build Your AI Team */}
            <div className="dark-card p-8 rounded-2xl text-center hover:bg-gray-800/70 transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-user-cog text-white text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-100 mb-4 text-heading">Build Your AI Team Easily</h4>
              <p className="text-gray-300 text-body leading-relaxed">
                Build a <span className="text-blue-400 font-medium">professional-grade AI investment team</span> with just a few clicks. 
                No complex knowledge required.
              </p>
            </div>

            {/* Feature 2: Analyze AI Performance */}
            <div className="dark-card p-8 rounded-2xl text-center hover:bg-gray-800/70 transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-chart-line text-white text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-100 mb-4 text-heading">Analyze AI Performance</h4>
              <p className="text-gray-300 text-body leading-relaxed">
                Go beyond simple returns. Get <span className="text-green-400 font-medium">multi-dimensional performance reports</span> for every AI agent 
                and learn from their strategic logic.
              </p>
            </div>

            {/* Feature 3: Explore Markets */}
            <div className="dark-card p-8 rounded-2xl text-center hover:bg-gray-800/70 transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-globe text-white text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-100 mb-4 text-heading">Explore a Universe of Markets</h4>
              <p className="text-gray-300 text-body leading-relaxed">
                From <span className="text-purple-400 font-medium">US Stocks and Crypto to Gold and Oil</span>, our platform is designed to analyze 
                a diverse range of markets.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="dark-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-100 mb-4 text-heading">
              Ready to Experience the Future of Investing?
            </h3>
            <p className="text-gray-300 mb-6 text-body leading-relaxed">
              Join thousands of investors who are already building their AI-powered investment strategies. 
              Get early access to DeepFund and InvestArena.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={onOpenWaitlist}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-ui inline-flex items-center gap-2"
              >
                Join the Waitlist
                <i className="fas fa-arrow-right text-sm"></i>
              </button>
              <Link
                href="https://deepfund.paradoox.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 text-ui inline-flex items-center gap-2"
              >
                Try DeepFund Demo
                <i className="fas fa-external-link-alt text-sm"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CustomerSection({ onOpenWaitlist }: SectionProps) {
  return (
    <section id="customers" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6 text-heading tracking-tight">
            Built for the <span className="gradient-text">Curious Investor</span> <br />
            and the <span className="gradient-text">Forward-Thinking Institution.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto text-body leading-relaxed">
            Our platform is designed for those who believe investing should be rational, transparent, 
            and accessible. Discover if Paradoox AI is built for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Profile 1: Individual Investors & Learners (C-end) */}
          <div className="dark-card p-8 rounded-2xl hover:bg-gray-700/70 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-user-graduate text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-100 text-heading">Individual Investors & Learners</h3>
                <span className="text-blue-400 font-medium text-ui">Consumer-End (C-end)</span>
              </div>
            </div>
            <p className="text-gray-300 text-body leading-relaxed mb-6">
              If you are an investor looking to replace <span className="text-blue-400 font-medium">guesswork with rational strategy</span>, 
              Paradoox AI is your risk-free sandbox. Understand the market, test your ideas, and learn the principles of 
              sound investing with an <span className="text-blue-400 font-medium">AI guide by your side</span>.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300 text-ui">Replace emotional trading with data-driven decisions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300 text-ui">Learn investment principles through AI guidance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300 text-ui">Test strategies in a zero-risk environment</span>
              </div>
            </div>
          </div>

          {/* Profile 2: Financial Institutions & Advisors (B-end) */}
          <div className="dark-card p-8 rounded-2xl hover:bg-gray-700/70 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-building text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-100 text-heading">Financial Institutions & Advisors</h3>
                <span className="text-purple-400 font-medium text-ui">Business-End (B-end)</span>
              </div>
            </div>
            <p className="text-gray-300 text-body leading-relaxed mb-6">
              For financial institutions, we offer a <span className="text-purple-400 font-medium">powerful tool to enhance your advisory services</span>. 
              Our platform provides the personalized, explainable, and interactive experience that modern clients demand, 
              giving you a <span className="text-purple-400 font-medium">competitive edge</span>.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300 text-ui">Enhance client advisory services with AI insights</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-gray-300 text-ui">Provide transparent, explainable investment strategies</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-300 text-ui">Deliver personalized client experiences at scale</span>
              </div>
            </div>
          </div>
        </div>

        {/* Self-Identification CTA */}
        <div className="text-center mt-16">
          <div className="dark-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-100 mb-4 text-heading">
              Which Profile Describes You?
            </h3>
            <p className="text-gray-300 mb-8 text-body leading-relaxed">
              Whether you're an individual investor seeking clarity or an institution looking to innovate, 
              Paradoox AI has the tools to transform how you approach investing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={onOpenWaitlist}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-ui inline-flex items-center gap-2"
              >
                <i className="fas fa-user-graduate text-sm"></i>
                Individual Access
              </button>
              <button
                onClick={onOpenWaitlist}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-ui inline-flex items-center gap-2"
              >
                <i className="fas fa-building text-sm"></i>
                Enterprise Solution
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

 