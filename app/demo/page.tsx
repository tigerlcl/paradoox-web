'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'

export default function DemoPage() {
  const { user, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if ( !user) {
      router.push('/auth/login')
    }
  }, [user, router])

  const handleSignOut = async () => {
    await signOut()
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold gradient-text">
                Paradoox AI
              </Link>
              <span className="ml-4 px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                Demo
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user.email}</span>
              <button
                onClick={handleSignOut}
                className="text-gray-500 hover:text-gray-700 font-medium"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 mb-8 text-black">
          <h1 className="text-3xl font-bold mb-2">Welcome to Paradoox AI Demo</h1>
          <p className="text-lg opacity-90">
            Experience the future of AI-driven investment strategies. This is a preview of our upcoming platform.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Portfolio Overview */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Portfolio Overview</h3>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <i className="fas fa-chart-line text-green-600"></i>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Value</span>
                <span className="font-semibold text-gray-900">$125,430</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Today's Change</span>
                <span className="font-semibold text-green-600">+$2,340 (+1.9%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Active Positions</span>
                <span className="font-semibold text-gray-900">12</span>
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">AI Insights</h3>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="fas fa-robot text-blue-600"></i>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Opportunity:</strong> Tech sector showing strong momentum based on recent earnings.
                </p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Risk Alert:</strong> Consider rebalancing international exposure.
                </p>
              </div>
            </div>
          </div>

          {/* Market Sentiment */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Market Sentiment</h3>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="fas fa-brain text-purple-600"></i>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Overall Sentiment</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">Bullish</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Confidence Level</span>
                <span className="font-semibold text-gray-900">87%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent AI Recommendations</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { action: 'BUY', symbol: 'AAPL', name: 'Apple Inc.', amount: '$5,000', status: 'Executed', time: '2 hours ago' },
                { action: 'SELL', symbol: 'TSLA', name: 'Tesla Inc.', amount: '$3,200', status: 'Pending', time: '4 hours ago' },
                { action: 'BUY', symbol: 'MSFT', name: 'Microsoft Corp.', amount: '$4,500', status: 'Executed', time: '1 day ago' },
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      transaction.action === 'BUY' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      <i className={`fas ${transaction.action === 'BUY' ? 'fa-arrow-up text-green-600' : 'fa-arrow-down text-red-600'}`}></i>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-900">{transaction.symbol}</span>
                        <span className="text-gray-600">{transaction.name}</span>
                      </div>
                      <div className="text-sm text-gray-500">{transaction.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{transaction.amount}</div>
                    <div className={`text-sm ${
                      transaction.status === 'Executed' ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {transaction.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 