'use client'

import { useState } from 'react'
import { useTradingWorkflow } from '@/hooks/useTradingWorkflow'
import { Portfolio } from '../types'

interface EditPortfolioModalProps {
  isOpen: boolean
  onClose: () => void
  portfolio: Portfolio
}

const ANALYST_OPTIONS = [
  { value: 'technical', label: 'Technical Analysis' },
  { value: 'fundamental', label: 'Fundamental Analysis' },
  { value: 'insider', label: 'Insider Trading' },
  { value: 'company_news', label: 'Company News' },
  { value: 'macroeconomic', label: 'Macroeconomic' },
  { value: 'policy', label: 'Policy Analysis' }
]

export default function EditPortfolioModal({ isOpen, onClose, portfolio }: EditPortfolioModalProps) {
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
  const [showProgress, setShowProgress] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await submitConfig()
    if (success) {
      setShowProgress(true)
    }
  }

  const handleTickerAdd = () => {
    const ticker = tickerInput.trim().toUpperCase()
    if (ticker) {
      addTicker(ticker)
      setTickerInput('')
    }
  }

  const handleClose = () => {
    // Only prevent closing during submission, allow closing during active jobs
    if (!isSubmitting) {
      resetConfig()
      setShowProgress(false)
      onClose()
    }
  }

  // Initialize with portfolio name if config is empty
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Edit Portfolio: {portfolio.name}</h3>
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
            title={isSubmitting ? "Please wait..." : "Close"}
          >
            ✕
          </button>
        </div>

        {/* Progress View */}
        {showProgress && jobStatus !== 'completed' && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-800">
                {jobStatus === 'queued' ? 'Queued - Starting soon...' : `Processing Day ${jobProgress?.current_day || 0}/${jobProgress?.total_days || 0}`}
              </span>
              <span className="text-sm text-blue-600">{progressPercent}%</span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            {jobProgress?.current_date && (
              <p className="text-sm text-blue-700 mt-2">Current: {jobProgress.current_date}</p>
            )}
          </div>
        )}

        {/* Success Message */}
        {jobStatus === 'completed' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="text-green-800 font-medium">✅ Portfolio update completed successfully!</div>
            <button 
              onClick={() => setShowProgress(false)}
              className="mt-2 text-sm text-green-600 hover:text-green-800"
            >
              Configure new update →
            </button>
          </div>
        )}

        {!showProgress && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Current Portfolio Info */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Current Portfolio</h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Total Value:</span>
                  <div className="font-semibold">${portfolio.totalValue.toLocaleString()}</div>
                </div>
                <div>
                  <span className="text-gray-600">24H Change:</span>
                  <div className={`font-semibold ${portfolio.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {portfolio.change24h >= 0 ? '+' : ''}${Math.abs(portfolio.change24h).toLocaleString()}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600">Cum. Return:</span>
                  <div className="font-semibold">{portfolio.cumulativeReturn}%</div>
                </div>
              </div>
            </div>

            {/* Trading Configuration */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium">🔄 Update Trading Strategy</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Strategy Name</label>
                  <input
                    type="text"
                    value={config.exp_name}
                    onChange={(e) => updateConfig({ exp_name: e.target.value })}
                    placeholder="Portfolio Update Strategy"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {getFieldError('exp_name') && (
                    <p className="text-sm text-red-600 mt-1">{getFieldError('exp_name')}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Budget ($)</label>
                  <input
                    type="number"
                    value={config.cashflow}
                    onChange={(e) => updateConfig({ cashflow: Number(e.target.value) })}
                    placeholder="Additional funds"
                    min="0"
                    step="1000"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {getFieldError('cashflow') && (
                    <p className="text-sm text-red-600 mt-1">{getFieldError('cashflow')}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <input
                    type="date"
                    value={config.start_date}
                    onChange={(e) => updateConfig({ start_date: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {getFieldError('start_date') && (
                    <p className="text-sm text-red-600 mt-1">{getFieldError('start_date')}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                  <input
                    type="date"
                    value={config.end_date}
                    onChange={(e) => updateConfig({ end_date: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {getFieldError('end_date') && (
                    <p className="text-sm text-red-600 mt-1">{getFieldError('end_date')}</p>
                  )}
                </div>
              </div>

              {/* Stock Tickers */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Update Stock Selection</label>
                <div className="flex space-x-2 mb-3">
                  <input
                    type="text"
                    value={tickerInput}
                    onChange={(e) => setTickerInput(e.target.value.toUpperCase())}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleTickerAdd())}
                    placeholder="Add new ticker"
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={handleTickerAdd}
                    className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Add
                  </button>
                </div>
                
                {config.tickers.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {config.tickers.map((ticker) => (
                      <span key={ticker} className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {ticker}
                        <button
                          type="button"
                          onClick={() => removeTicker(ticker)}
                          className="ml-2 text-blue-600 hover:text-blue-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
                {getFieldError('tickers') && (
                  <p className="text-sm text-red-600 mt-1">{getFieldError('tickers')}</p>
                )}
              </div>

              {/* Analysis Methods */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Analysis Methods</label>
                <div className="grid grid-cols-2 gap-2">
                  {ANALYST_OPTIONS.map((analyst) => (
                    <label key={analyst.value} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={config.workflow_analysts.includes(analyst.value)}
                        onChange={() => toggleAnalyst(analyst.value)}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-3 text-sm font-medium text-gray-700">{analyst.label}</span>
                    </label>
                  ))}
                </div>
                {getFieldError('workflow_analysts') && (
                  <p className="text-sm text-red-600 mt-1">{getFieldError('workflow_analysts')}</p>
                )}
              </div>

              {/* AI Model */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">AI Model</label>
                <select
                  value={config.model}
                  onChange={(e) => updateConfig({ model: e.target.value })}
                  disabled={isLoadingOptions}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
                >
                  <option value="">
                    {isLoadingOptions ? 'Loading models...' : 'Select a model...'}
                  </option>
                  {availableOptions.models.map((model) => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
                {getFieldError('model') && (
                  <p className="text-sm text-red-600 mt-1">{getFieldError('model')}</p>
                )}
                {!isLoadingOptions && availableOptions.models.length > 0 && (
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-sm text-green-600">
                      ✓ Loaded {availableOptions.models.length} LLMs
                    </p>
                    <button
                      type="button"
                      onClick={refreshOptions}
                      disabled={isLoadingOptions}
                      className="text-xs text-blue-600 hover:text-blue-800 underline disabled:opacity-50"
                    >
                      Refresh
                    </button>
                  </div>
                )}
                {!isLoadingOptions && availableOptions.models.length === 0 && (
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-sm text-orange-600">
                      ⚠️ Using fallback models (API unavailable)
                    </p>
                    <button
                      type="button"
                      onClick={refreshOptions}
                      disabled={isLoadingOptions}
                      className="text-xs text-blue-600 hover:text-blue-800 underline disabled:opacity-50"
                    >
                      Retry API
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* General Errors */}
            {errors.some(e => e.field === 'general') && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">{errors.find(e => e.field === 'general')?.message}</p>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting || isJobActive}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || isLoadingOptions}
                className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  isSubmitting || isLoadingOptions
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    Updating...
                  </div>
                ) : (
                  'Update Portfolio Strategy'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
