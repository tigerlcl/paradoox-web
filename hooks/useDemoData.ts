import { useState } from 'react'
import { Portfolio, Agent, CommunityPost } from '@/components/demo/types'

export function useDemoData() {
  const [portfolios] = useState<Portfolio[]>([
    { 
      id: 1, 
      name: 'Tiger Alpha Fund', 
      totalValue: 12150, 
      change24h: 2340, 
      changePercent: 1.9, 
      cumulativeReturn: 7.13,
      createdDate: '2025-03-17',
      lastUpdated: '2025-06-08'
    },
    { 
      id: 2, 
      name: 'Quantum Edge Portfolio', 
      totalValue: 7410, 
      change24h: 892, 
      changePercent: 0.6, 
      cumulativeReturn: 2.36,
      createdDate: '2025-05-01',
      lastUpdated: '2025-08-25'
    },
    { 
      id: 3, 
      name: 'Aurora Growth Vault', 
      totalValue: 39410, 
      change24h: -1810, 
      changePercent: -2.7, 
      cumulativeReturn: 7.13,
      createdDate: '2024-10-20',
      lastUpdated: '2024-12-23'
    }
  ])

  const [agents] = useState<Agent[]>([
    { id: 1, name: 'Conservative Growth', type: 'Risk Management', status: 'active', description: 'Focuses on steady growth with minimal risk' },
    { id: 2, name: 'Tech Momentum', type: 'Sector Specialist', status: 'testing', description: 'Specializes in technology sector momentum trading' },
    { id: 3, name: 'Value Hunter', type: 'Value Investing', status: 'draft', description: 'Identifies undervalued stocks with strong fundamentals' }
  ])

  const [communityPosts] = useState<CommunityPost[]>([
    { id: 1, author: 'TradingPro', title: 'My Q4 Strategy Results', content: 'Sharing my portfolio performance using the momentum agent...', returns: '+23.4%', likes: 45, comments: 12, timestamp: '2 hours ago' },
    { id: 2, author: 'AIInvestor', title: 'Custom Agent for Crypto', content: 'Built a specialized agent for cryptocurrency trading...', returns: '+18.7%', likes: 32, comments: 8, timestamp: '5 hours ago' },
    { id: 3, author: 'ValueSeeker', title: 'Long-term vs Short-term Agents', content: 'Comparing different agent strategies over 6 months...', returns: '+15.2%', likes: 28, comments: 15, timestamp: '1 day ago' }
  ])

  return {
    portfolios,
    agents,
    communityPosts
  }
} 