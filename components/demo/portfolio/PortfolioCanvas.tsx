'use client'

import { useState } from 'react'
import { Portfolio } from '../types'
import PortfolioCard from './PortfolioCard'
import CreatePortfolioModal from './CreatePortfolioModal'

interface PortfolioCanvasProps {
  portfolios: Portfolio[]
}

export default function PortfolioCanvas({ portfolios }: PortfolioCanvasProps) {
  const [showCreatePortfolio, setShowCreatePortfolio] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-100 text-heading">Portfolio Canvas</h2>
        <button
          onClick={() => setShowCreatePortfolio(true)}
          className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition-all duration-200 font-medium text-ui hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25"
        >
          Add Portfolio
        </button>
      </div>

      <div className="grid gap-6">
        {portfolios.map((portfolio, index) => (
          <div
            key={portfolio.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <PortfolioCard portfolio={portfolio} />
          </div>
        ))}
      </div>

      <CreatePortfolioModal 
        isOpen={showCreatePortfolio}
        onClose={() => setShowCreatePortfolio(false)}
      />
    </div>
  )
} 