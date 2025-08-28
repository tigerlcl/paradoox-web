'use client'

import { useState } from 'react'
import { useTradingWorkflow } from '@/hooks/useTradingWorkflow'
import { Portfolio } from '../types'

interface PortfolioDetailsViewProps {
  portfolio: Portfolio
  onClose: () => void
}

const ANALYST_OPTIONS = [
  { value: 'technical', label: 'Technical Analysis' },
  { value: 'fundamental', label: 'Fundamental Analysis' },
  { value: 'insider', label: 'Insider Trading' },
  { value: 'company_news', label: 'Company News' },
  { value: 'macroeconomic', label: 'Macroeconomic' },
  { value: 'policy', label: 'Policy Analysis' }
]

export default function PortfolioDetailsView({ portfolio, onClose }: PortfolioDetailsViewProps) {
  const [activeTab, setActiveTab] = useState<'performance' | 'settings' | 'visualizations'>('performance')
  const {
    config,
    updateConfig,
    availableOptions,
    isLoadingOptions,
    submitConfig,
    isSubmitting,
    errors,
    getFieldError,
    jobStatus,
    jobProgress,
    progressPercent,
    addTicker,
    removeTicker,
    toggleAnalyst,
    isJobActive,
    resetConfig,
    refreshOptions
  } = useTradingWorkflow()

  const [tickerInput, setTickerInput] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await submitConfig()
    if (success) {
      // Could add success notification here
    }
  }

  const handleTickerAdd = () => {
    const ticker = tickerInput.trim().toUpperCase()
    if (ticker) {
      addTicker(ticker)
      setTickerInput('')
    }
  }

  // Initialize config with portfolio data if empty
  if (!config.exp_name && portfolio) {
    const today = new Date().toISOString().split('T')[0]
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 7)
    
    updateConfig({
      exp_name: `${portfolio.name}_Update_${today}`,
      start_date: today,
      end_date: endDate.toISOString().split('T')[0],
      cashflow: portfolio.totalValue
    })
  }

  const renderPerformanceTab = () => (
    <div className="space-y-6">
      {/* Current Portfolio Metrics */}
      <div className="dark-card rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-100 mb-4">📊 Performance Overview</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-100">${portfolio.totalValue.toLocaleString()}</div>
            <div className="text-sm text-gray-400">Total Portfolio Value</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${portfolio.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {portfolio.change24h >= 0 ? '+' : ''}${Math.abs(portfolio.change24h).toLocaleString()}
            </div>
            <div className={`text-sm ${portfolio.changePercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              24H Change ({portfolio.changePercent >= 0 ? '+' : ''}{portfolio.changePercent}%)
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-100">{portfolio.cumulativeReturn}%</div>
            <div className="text-sm text-gray-400">Cumulative Return</div>
          </div>
        </div>
        
        {/* Portfolio Timeline */}
        <div className="border-t border-gray-700 pt-4 flex justify-between text-sm text-gray-400">
          <div>
            <span className="font-medium text-gray-300">Created:</span> {new Date(portfolio.createdDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          <div>
            <span className="font-medium text-gray-300">Last Updated:</span> {new Date(portfolio.lastUpdated).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </div>

      {/* Job Progress */}
      {jobStatus && jobStatus !== 'completed' && (
        <div className="dark-card rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-100 mb-4">🚀 Active Trading Job</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">
                {jobStatus === 'queued' ? 'Queued - Starting soon...' : `Processing Day ${jobProgress?.current_day || 0}/${jobProgress?.total_days || 0}`}
              </span>
              <span className="text-sm text-yellow-400">{progressPercent}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div 
                className="bg-yellow-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            {jobProgress?.current_date && (
              <p className="text-sm text-gray-400">Current Date: {jobProgress.current_date}</p>
            )}
          </div>
        </div>
      )}

      {jobStatus === 'completed' && (
        <div className="dark-card rounded-lg p-6 border border-green-500">
          <div className="text-green-400 font-medium">✅ Portfolio update completed successfully!</div>
        </div>
      )}

      {jobStatus === 'failed' && (
        <div className="dark-card rounded-lg p-6 border border-red-500">
          <div className="text-red-400 font-medium">❌ Trading workflow failed. Please try again.</div>
        </div>
      )}
    </div>
  )

  const renderSettingsTab = () => (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Configuration */}
        <div className="dark-card rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-100 mb-4">🔄 Update Trading Strategy</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Strategy Name</label>
              <input
                type="text"
                value={config.exp_name}
                onChange={(e) => updateConfig({ exp_name: e.target.value })}
                placeholder="Portfolio Update Strategy"
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              {getFieldError('exp_name') && (
                <p className="text-sm text-red-400 mt-1">{getFieldError('exp_name')}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Additional Budget ($)</label>
              <input
                type="number"
                value={config.cashflow}
                onChange={(e) => updateConfig({ cashflow: Number(e.target.value) })}
                placeholder="Additional funds"
                min="0"
                step="1000"
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              {getFieldError('cashflow') && (
                <p className="text-sm text-red-400 mt-1">{getFieldError('cashflow')}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Start Date</label>
              <input
                type="date"
                value={config.start_date}
                onChange={(e) => updateConfig({ start_date: e.target.value })}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              {getFieldError('start_date') && (
                <p className="text-sm text-red-400 mt-1">{getFieldError('start_date')}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">End Date</label>
              <input
                type="date"
                value={config.end_date}
                onChange={(e) => updateConfig({ end_date: e.target.value })}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              {getFieldError('end_date') && (
                <p className="text-sm text-red-400 mt-1">{getFieldError('end_date')}</p>
              )}
            </div>
          </div>
        </div>

        {/* Stock Selection */}
        <div className="dark-card rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-100 mb-4">📈 Stock Selection</h4>
          <div className="flex space-x-2 mb-3">
            <input
              type="text"
              value={tickerInput}
              onChange={(e) => setTickerInput(e.target.value.toUpperCase())}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleTickerAdd())}
              placeholder="Add new ticker"
              className="flex-1 p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={handleTickerAdd}
              className="px-4 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 font-medium"
            >
              Add
            </button>
          </div>
          
          {config.tickers.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {config.tickers.map((ticker) => (
                <span key={ticker} className="inline-flex items-center px-3 py-1 bg-yellow-500 bg-opacity-20 text-yellow-400 text-sm rounded-full">
                  {ticker}
                  <button
                    type="button"
                    onClick={() => removeTicker(ticker)}
                    className="ml-2 text-yellow-300 hover:text-yellow-100"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
          {getFieldError('tickers') && (
            <p className="text-sm text-red-400 mt-1">{getFieldError('tickers')}</p>
          )}
        </div>

        {/* Analysis Methods */}
        <div className="dark-card rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-100 mb-4">🔍 Analysis Methods</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {ANALYST_OPTIONS.map((analyst) => (
              <label key={analyst.value} className="flex items-center p-3 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.workflow_analysts.includes(analyst.value)}
                  onChange={() => toggleAnalyst(analyst.value)}
                  className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500 bg-gray-700"
                />
                <span className="ml-3 text-sm font-medium text-gray-300">{analyst.label}</span>
              </label>
            ))}
          </div>
          {getFieldError('workflow_analysts') && (
            <p className="text-sm text-red-400 mt-1">{getFieldError('workflow_analysts')}</p>
          )}
        </div>

        {/* AI Model */}
        <div className="dark-card rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-100 mb-4">🤖 AI Model</h4>
          <select
            value={config.model}
            onChange={(e) => updateConfig({ model: e.target.value })}
            disabled={isLoadingOptions}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-yellow-500 focus:border-transparent disabled:bg-gray-700 disabled:cursor-not-allowed"
          >
            <option value="">
              {isLoadingOptions ? 'Loading models...' : 'Select a model...'}
            </option>
            {availableOptions.models.map((model) => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
          {getFieldError('model') && (
            <p className="text-sm text-red-400 mt-1">{getFieldError('model')}</p>
          )}
          {!isLoadingOptions && availableOptions.models.length > 0 && (
            <div className="mt-2 flex items-center justify-between">
              <p className="text-sm text-green-400">
                ✓ Loaded {availableOptions.models.length} models
              </p>
              <button
                type="button"
                onClick={refreshOptions}
                disabled={isLoadingOptions}
                className="text-xs text-yellow-400 hover:text-yellow-300 underline disabled:opacity-50"
              >
                Refresh
              </button>
            </div>
          )}
          {!isLoadingOptions && availableOptions.models.length === 0 && (
            <div className="mt-2 flex items-center justify-between">
              <p className="text-sm text-orange-400">
                ⚠️ Using fallback models (API unavailable)
              </p>
              <button
                type="button"
                onClick={refreshOptions}
                disabled={isLoadingOptions}
                className="text-xs text-yellow-400 hover:text-yellow-300 underline disabled:opacity-50"
              >
                Retry API
              </button>
            </div>
          )}
        </div>

        {/* General Errors */}
        {errors.some(e => e.field === 'general') && (
          <div className="dark-card rounded-lg p-4 border border-red-500">
            <p className="text-red-400 text-sm">{errors.find(e => e.field === 'general')?.message}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting || isLoadingOptions}
            className={`px-6 py-3 rounded-lg font-medium ${
              isSubmitting || isLoadingOptions
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-yellow-500 text-black hover:bg-yellow-600'
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="animate-spin mr-2 w-4 h-4 border-2 border-black border-t-transparent rounded-full" />
                Updating Portfolio...
              </div>
            ) : (
              'Update Portfolio Strategy'
            )}
          </button>
        </div>
      </form>
    </div>
  )

  const renderVisualizationsTab = () => (
    <div className="space-y-6">
      <div className="dark-card rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-100 mb-4">📈 Portfolio Visualizations</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg p-4 h-48 flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-400 text-4xl mb-2">📊</div>
              <div className="text-gray-400">Performance Chart</div>
              <div className="text-xs text-gray-500 mt-1">Coming Soon</div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 h-48 flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-400 text-4xl mb-2">🥧</div>
              <div className="text-gray-400">Asset Allocation</div>
              <div className="text-xs text-gray-500 mt-1">Coming Soon</div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 h-48 flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-400 text-4xl mb-2">📉</div>
              <div className="text-gray-400">Risk Analysis</div>
              <div className="text-xs text-gray-500 mt-1">Coming Soon</div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 h-48 flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-400 text-4xl mb-2">🎯</div>
              <div className="text-gray-400">Trade History</div>
              <div className="text-xs text-gray-500 mt-1">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="mt-6 border-t border-gray-700 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <h3 className="text-xl font-semibold text-gray-100">Portfolio Details: {portfolio.name}</h3>
        </div>
        <button
          onClick={() => {
            resetConfig()
            onClose()
          }}
          className="text-gray-400 hover:text-gray-200 transition-colors"
          title="Close Details"
        >
          ✕
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-gray-800 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('performance')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'performance'
              ? 'bg-yellow-500 text-black'
              : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
          }`}
        >
          📊 Performance
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'settings'
              ? 'bg-yellow-500 text-black'
              : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
          }`}
        >
          ⚙️ Settings
        </button>
        <button
          onClick={() => setActiveTab('visualizations')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'visualizations'
              ? 'bg-yellow-500 text-black'
              : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
          }`}
        >
          📈 Charts
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'performance' && renderPerformanceTab()}
        {activeTab === 'settings' && renderSettingsTab()}
        {activeTab === 'visualizations' && renderVisualizationsTab()}
      </div>
    </div>
  )
}
