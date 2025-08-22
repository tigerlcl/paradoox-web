'use client'

import { ActiveTab, DemoLayoutProps } from './types'

export default function DemoLayout({ children, activeTab, onTabChange, user, onSignOut }: DemoLayoutProps) {
  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900/50 backdrop-blur-sm shadow-xl border-r border-gray-800/50 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-800/50">
          <div className="flex items-center">
            <img 
              src="/paradoox ai logo.svg" 
              alt="Paradoox AI" 
              className="h-8 w-auto"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <button
              onClick={() => onTabChange('portfolio')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-ui font-medium ${
                activeTab === 'portfolio' 
                  ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                  : 'text-gray-300 hover:bg-gray-800/50 hover:text-yellow-400'
              }`}
            >
              Portfolio Canvas
            </button>
            <button
              onClick={() => onTabChange('agent-lab')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-ui font-medium ${
                activeTab === 'agent-lab' 
                  ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                  : 'text-gray-300 hover:bg-gray-800/50 hover:text-yellow-400'
              }`}
            >
              Agent Laboratory
            </button>
            <button
              onClick={() => onTabChange('community')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-ui font-medium ${
                activeTab === 'community' 
                  ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                  : 'text-gray-300 hover:bg-gray-800/50 hover:text-yellow-400'
              }`}
            >
              Community
            </button>
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-800/50">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center p-1">
              <img 
                src="/cow-avatar.svg" 
                alt="Demo User Avatar" 
                className="w-full h-full"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-300 truncate text-ui">Hi, Tiger</div>
            </div>
            <button
              onClick={onSignOut}
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-slate-950/30">
        {children}
      </div>
    </div>
  )
} 