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
        <h2 className="text-2xl font-bold text-gray-900">Portfolio Canvas</h2>
        <button
          onClick={() => setShowCreatePortfolio(true)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Add Portfolio
        </button>
      </div>

      <div className="grid gap-6">
        {portfolios.map((portfolio) => (
          <PortfolioCard key={portfolio.id} portfolio={portfolio} />
        ))}
      </div>

      <CreatePortfolioModal 
        isOpen={showCreatePortfolio}
        onClose={() => setShowCreatePortfolio(false)}
      />
    </div>
  )
} 