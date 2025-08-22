'use client'

import { useState } from 'react'
import { Portfolio } from '../types'
import EditPortfolioModal from './EditPortfolioModal'

interface PortfolioCardProps {
  portfolio: Portfolio
}

export default function PortfolioCard({ portfolio }: PortfolioCardProps) {
  const [showEditModal, setShowEditModal] = useState(false)

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{portfolio.name} Performance</h3>
          <button 
            onClick={() => setShowEditModal(true)}
            className="text-gray-400 hover:text-gray-600"
            title="Edit Portfolio"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
        </div>
      
      <div className="grid grid-cols-3 gap-8">
        <div>
          <div className="text-sm text-gray-600 mb-1">Total Value</div>
          <div className="text-2xl font-bold">${portfolio.totalValue.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-sm text-gray-600 mb-1">24H Change</div>
          <div className={`text-2xl font-bold ${portfolio.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {portfolio.change24h >= 0 ? '+' : ''}${Math.abs(portfolio.change24h).toLocaleString()}
          </div>
          <div className={`text-sm ${portfolio.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ({portfolio.changePercent >= 0 ? '+' : ''}{portfolio.changePercent}%)
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-600 mb-1">Cum. Return</div>
          <div className="text-2xl font-bold">{portfolio.cumulativeReturn}%</div>
        </div>
      </div>
      </div>

      <EditPortfolioModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        portfolio={portfolio}
      />
    </>
  )
} 