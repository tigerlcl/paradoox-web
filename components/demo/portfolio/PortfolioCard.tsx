'use client'

import { Portfolio } from '../types'

interface PortfolioCardProps {
  portfolio: Portfolio
  isExpanded: boolean
  onExpand: () => void
}

export default function PortfolioCard({ portfolio, isExpanded, onExpand }: PortfolioCardProps) {
  return (
    <div 
      className={`dark-card rounded-xl p-6 transition-all duration-300 cursor-pointer group ${
        isExpanded 
          ? 'ring-2 ring-yellow-500 shadow-2xl shadow-yellow-500/20 scale-[1.02]' 
          : 'hover:shadow-2xl hover:scale-[1.02]'
      }`}
      onClick={onExpand}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <h3 className="text-xl font-semibold text-gray-100 text-heading">{portfolio.name}</h3>
          {isExpanded && (
            <span className="px-2 py-1 bg-yellow-500 bg-opacity-20 text-yellow-400 text-xs rounded-full">
              Expanded
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 text-sm hidden group-hover:block">
            {isExpanded ? 'Click to collapse' : 'Click to expand'}
          </span>
          <div className={`text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    
      <div className="grid grid-cols-3 gap-8 mb-4">
        <div className="group/metric hover:scale-105 transition-transform duration-200">
          <div className="text-sm text-gray-400 mb-1 text-ui">Total Value</div>
          <div className="text-2xl font-bold text-gray-100 text-heading">${portfolio.totalValue.toLocaleString()}</div>
        </div>
        <div className="group/metric hover:scale-105 transition-transform duration-200">
          <div className="text-sm text-gray-400 mb-1 text-ui">24H Change</div>
          <div className={`text-2xl font-bold text-heading ${portfolio.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {portfolio.change24h >= 0 ? '+' : ''}${Math.abs(portfolio.change24h).toLocaleString()}
          </div>
          <div className={`text-sm text-ui ${portfolio.changePercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            ({portfolio.changePercent >= 0 ? '+' : ''}{portfolio.changePercent}%)
          </div>
        </div>
        <div className="group/metric hover:scale-105 transition-transform duration-200">
          <div className="text-sm text-gray-400 mb-1 text-ui">Cum. Return</div>
          <div className="text-2xl font-bold text-gray-100 text-heading">{portfolio.cumulativeReturn}%</div>
        </div>
      </div>

      {/* Timestamp Information */}
      <div className="border-t border-gray-700 pt-3 flex justify-between text-xs text-gray-400">
        <div>
          <span className="font-medium">Created:</span> {new Date(portfolio.createdDate).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}
        </div>
        <div>
          <span className="font-medium">Last Updated:</span> {new Date(portfolio.lastUpdated).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}
        </div>
      </div>
    </div>
  )
} 