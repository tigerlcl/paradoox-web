'use client'

import { useState } from 'react'
import { useTradingWorkflow } from '@/hooks/useTradingWorkflow'

interface CreatePortfolioModalProps {
  isOpen: boolean
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

const getPresets = (availableModels: string[]) => {
  // Use the first available model, or fallback to gpt-4o-mini
  const defaultModel = availableModels.length > 0 ? availableModels[0] : 'gpt-4o-mini'
  
  return [
    {
      name: 'Day 1',
      icon: '🛡️',
      config: {
        start_date: '2025-08-20',
        end_date: '2025-08-20',
        cashflow: 50000,
        tickers: ['AAPL', 'MSFT', 'JNJ'],
        workflow_analysts: ['fundamental', 'company_news'],
        model: defaultModel
      }
    },
    {
      name: 'Multi-Day',
      icon: '🚀',
      config: {
        start_date: '2025-08-15',
        end_date: '2025-08-20',
        cashflow: 50000,
        tickers: ['NVDA', 'TSLA'],
        workflow_analysts: ['technical', 'insider', 'company_news'],
        model: defaultModel
      }
    }
  ]
}

export default function CreatePortfolioModal({ isOpen, onClose }: CreatePortfolioModalProps) {
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
    isJobComplete,
    resetJob,
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

  const handlePresetApply = (preset: any) => {
    const today = new Date().toISOString().split('T')[0]
    
    updateConfig({
      ...preset.config,
      exp_name: `${preset.name.replace(/\s+/g, '_')}_${today}`
    })
  }

  // Get dynamic presets based on available models
  const presets = getPresets(availableOptions.models)

  const handleClose = () => {
    // Only prevent closing during submission, allow closing during active jobs
    if (!isSubmitting) {
      resetJob()
      setShowProgress(false)
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl border border-gray-200 w-full max-w-3xl max-h-[90vh] flex flex-col">
        {/* Fixed Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold">Create New Portfolio</h3>
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
        {showProgress && (
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-4">🚀 Portfolio Created & Trading Started!</h4>
                
                {jobStatus !== 'completed' && (
                  <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-yellow-800">
                        {jobStatus === 'queued' ? 'Queued - Starting soon...' : `Processing Day ${jobProgress?.current_day || 0}/${jobProgress?.total_days || 0}`}
                      </span>
                      <span className="text-sm text-yellow-600">{progressPercent}%</span>
                    </div>
                    <div className="w-full bg-yellow-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    {jobProgress?.current_date && (
                      <p className="text-sm text-yellow-700 mt-2">Current: {jobProgress.current_date}</p>
                    )}
                  </div>
                )}

                {jobStatus === 'completed' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="text-green-800 font-medium">✅ Portfolio created and trading workflow completed successfully!</div>
                  </div>
                )}

                {jobStatus === 'failed' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="text-red-800 font-medium">❌ Trading workflow failed. Please try again.</div>
                  </div>
                )}
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2 rounded-lg font-medium bg-gray-800 text-white hover:bg-gray-700"
                >
                  {isJobActive ? 'Close (Running in Background)' : 'Done'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Unified Form */}
        {!showProgress && (
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Quick Presets */}
              <div>
                <h4 className="text-lg font-medium mb-4">🎯 Quick Start Presets</h4>
                {isLoadingOptions ? (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 border border-gray-200 rounded-lg bg-gray-50 animate-pulse">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gray-300 rounded mr-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-24"></div>
                      </div>
                    </div>
                    <div className="p-3 border border-gray-200 rounded-lg bg-gray-50 animate-pulse">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gray-300 rounded mr-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-24"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {presets.map((preset) => (
                      <button
                        key={preset.name}
                        type="button"
                        onClick={() => handlePresetApply(preset)}
                        className="p-3 border border-gray-200 rounded-lg hover:border-yellow-400 hover:bg-yellow-50 text-left transition-colors"
                      >
                        <div className="flex items-center">
                          <span className="text-lg mr-2">{preset.icon}</span>
                          <div>
                            <span className="font-medium">{preset.name}</span>
                            <div className="text-xs text-gray-500 mt-1">Model: {preset.config.model}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Basic Configuration */}
              <div>
                <h4 className="text-lg font-medium mb-4">📋 Basic Configuration</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio Name</label>
                    <input
                      type="text"
                      value={config.exp_name}
                      onChange={(e) => updateConfig({ exp_name: e.target.value })}
                      placeholder="My Trading Portfolio"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                    {getFieldError('exp_name') && (
                      <p className="text-sm text-red-600 mt-1">{getFieldError('exp_name')}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Initial Budget ($)</label>
                    <input
                      type="number"
                      value={config.cashflow}
                      onChange={(e) => updateConfig({ cashflow: Number(e.target.value) })}
                      placeholder="100000"
                      min="1000"
                      step="1000"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                    {getFieldError('cashflow') && (
                      <p className="text-sm text-red-600 mt-1">{getFieldError('cashflow')}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                    <input
                      type="date"
                      value={config.start_date}
                      onChange={(e) => updateConfig({ start_date: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                    {getFieldError('end_date') && (
                      <p className="text-sm text-red-600 mt-1">{getFieldError('end_date')}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Stock Selection */}
              <div>
                <h4 className="text-lg font-medium mb-4">📈 Stock Selection</h4>
                <div className="flex space-x-2 mb-3">
                  <input
                    type="text"
                    value={tickerInput}
                    onChange={(e) => setTickerInput(e.target.value.toUpperCase())}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleTickerAdd())}
                    placeholder="Enter ticker (e.g., NVDA)"
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
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
                      <span key={ticker} className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                        {ticker}
                        <button
                          type="button"
                          onClick={() => removeTicker(ticker)}
                          className="ml-2 text-yellow-600 hover:text-yellow-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
                
                <p className="text-sm text-gray-500">Popular examples: NVDA, TSLA, AAPL, MSFT, AMZN</p>
                {getFieldError('tickers') && (
                  <p className="text-sm text-red-600 mt-1">{getFieldError('tickers')}</p>
                )}
              </div>

              {/* Analysis Methods */}
              <div>
                <h4 className="text-lg font-medium mb-4">🔍 Analysis Methods</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {ANALYST_OPTIONS.map((analyst) => (
                    <label key={analyst.value} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={config.workflow_analysts.includes(analyst.value)}
                        onChange={() => toggleAnalyst(analyst.value)}
                        className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
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
                <h4 className="text-lg font-medium mb-4">🤖 AI Model</h4>
                <select
                  value={config.model}
                  onChange={(e) => updateConfig({ model: e.target.value })}
                  disabled={isLoadingOptions}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
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
                      ✓ Loaded {availableOptions.models.length} models from API
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

              {/* General Errors */}
              {errors.some(e => e.field === 'general') && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">{errors.find(e => e.field === 'general')?.message}</p>
                </div>
              )}
            </div>

            {/* Fixed Footer */}
            <div className="border-t border-gray-200 p-6">
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || isLoadingOptions}
                  className={`px-6 py-2 rounded-lg font-medium ${
                    isSubmitting || isLoadingOptions
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-yellow-500 text-black hover:bg-yellow-600'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin mr-2 w-4 h-4 border-2 border-black border-t-transparent rounded-full" />
                      Creating Portfolio...
                    </div>
                  ) : (
                    'Create & Start Trading!'
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
} 