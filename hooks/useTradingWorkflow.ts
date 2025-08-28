'use client'

import { useState, useEffect } from 'react'
import { TradingConfig, JobStatus, JobProgress, ValidationError, AvailableOptions } from '@/components/demo/types'
import { JobTracker, tradingAPI } from '@/lib/jobTracker'

export function useTradingWorkflow() {
  // Configuration state
  const [config, setConfig] = useState<TradingConfig>({
    exp_name: '',
    start_date: '',
    end_date: '',
    local_db: false,
    cashflow: 100000,
    tickers: [],
    workflow_analysts: [],
    model: ''
  })

  // Available options
  const [availableOptions, setAvailableOptions] = useState<AvailableOptions>({
    models: [],
    analysts: []
  })

  // Loading states
  const [isLoadingOptions, setIsLoadingOptions] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Validation
  const [errors, setErrors] = useState<ValidationError[]>([])

  // Job tracking
  const [jobId, setJobId] = useState<string | null>(null)
  const [jobStatus, setJobStatus] = useState<JobStatus['status']>('queued')
  const [jobProgress, setJobProgress] = useState<JobProgress | null>(null)
  const [jobError, setJobError] = useState<string | undefined>()
  const [jobResult, setJobResult] = useState<any>(null)
  const [jobTracker, setJobTracker] = useState<JobTracker | null>(null)

  // Load available options on mount
  useEffect(() => {
    loadAvailableOptions()
  }, [])

  // Cleanup job tracker on unmount
  useEffect(() => {
    return () => {
      if (jobTracker) {
        jobTracker.stopTracking()
      }
    }
  }, [jobTracker])

  const loadAvailableOptions = async (forceRefresh = false) => {
    setIsLoadingOptions(true)
    try {
      if (forceRefresh) {
        tradingAPI.clearCache()
      }

      const [models, analysts] = await Promise.all([
        tradingAPI.getModels(),
        tradingAPI.getAnalysts()
      ])
      
      setAvailableOptions({ models, analysts })
      
      // Clear any previous errors if successful
      setErrors(prev => prev.filter(e => e.field !== 'general'))
    } catch (error) {
      console.error('Failed to load options:', error)
      setErrors(prev => [...prev.filter(e => e.field !== 'general'), 
        { field: 'general', message: 'Failed to load available options. Please refresh the page.' }])
    } finally {
      setIsLoadingOptions(false)
    }
  }

  const validateConfig = (): ValidationError[] => {
    const errors: ValidationError[] = []

    // Required fields
    if (!config.exp_name.trim()) {
      errors.push({ field: 'exp_name', message: 'Experiment name is required' })
    }

    if (!config.start_date) {
      errors.push({ field: 'start_date', message: 'Start date is required' })
    }

    if (!config.end_date) {
      errors.push({ field: 'end_date', message: 'End date is required' })
    }

    // Date validation
    if (config.start_date && config.end_date) {
      const startDate = new Date(config.start_date)
      const endDate = new Date(config.end_date)
      
      if (startDate > endDate) {
        errors.push({ field: 'end_date', message: 'End date must be after start date' })
      }

      // Check if date range is reasonable (not too far in the past or future)
      const now = new Date()
      const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
      const oneYearFromNow = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate())

      if (endDate < oneYearAgo) {
        errors.push({ field: 'end_date', message: 'End date cannot be more than a year in the past' })
      }

      if (startDate > oneYearFromNow) {
        errors.push({ field: 'start_date', message: 'Start date cannot be more than a year in the future' })
      }
    }

    // Cashflow validation
    if (config.cashflow <= 0) {
      errors.push({ field: 'cashflow', message: 'Cashflow must be positive' })
    }

    if (config.cashflow < 1000) {
      errors.push({ field: 'cashflow', message: 'Minimum cashflow is $1,000' })
    }

    if (config.cashflow > 10000000) {
      errors.push({ field: 'cashflow', message: 'Maximum cashflow is $10,000,000' })
    }

    // Tickers validation
    if (config.tickers.length === 0) {
      errors.push({ field: 'tickers', message: 'At least one ticker is required' })
    }

    if (config.tickers.length > 20) {
      errors.push({ field: 'tickers', message: 'Maximum 20 tickers allowed' })
    }

    // Validate ticker format (basic check)
    const invalidTickers = config.tickers.filter(ticker => 
      !/^[A-Z]{1,5}$/.test(ticker)
    )
    if (invalidTickers.length > 0) {
      errors.push({ 
        field: 'tickers', 
        message: `Invalid ticker format: ${invalidTickers.join(', ')}. Use 1-5 uppercase letters.` 
      })
    }

    // Analysts validation
    if (config.workflow_analysts.length === 0) {
      errors.push({ field: 'workflow_analysts', message: 'At least one analyst must be selected' })
    }

    // Model validation
    if (!config.model) {
      errors.push({ field: 'model', message: 'LLM model selection is required' })
    }

    return errors
  }

  const submitConfig = async (): Promise<boolean> => {
    // Validate configuration
    const validationErrors = validateConfig()
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return false
    }

    setIsSubmitting(true)
    setErrors([])

    try {
      const result = await tradingAPI.submitConfig(config)
      
      // Initialize job tracking
      setJobId(result.job_id)
      setJobStatus('queued')
      setJobProgress(null)
      setJobError(undefined)
      setJobResult(null)
      
      // Start tracking
      const tracker = new JobTracker(result.job_id)
      setJobTracker(tracker)
      
      tracker.startTracking(
        (progress) => {
          setJobStatus('running')
          setJobProgress(progress)
        },
        (result) => {
          setJobStatus('completed')
          setJobResult(result)
        },
        (error) => {
          setJobStatus('failed')
          setJobError(error)
        }
      )
      
      return true
    } catch (error) {
      if (error instanceof Error) {
        try {
          // Try to parse as validation error from backend
          const errorData = JSON.parse(error.message)
          if (errorData.detail && Array.isArray(errorData.detail)) {
            const fieldErrors: ValidationError[] = errorData.detail.map((err: any) => ({
              field: err.loc[err.loc.length - 1],
              message: err.msg
            }))
            setErrors(fieldErrors)
          } else {
            setErrors([{ field: 'general', message: errorData.detail || error.message }])
          }
        } catch {
          setErrors([{ field: 'general', message: error.message }])
        }
      } else {
        setErrors([{ field: 'general', message: 'An unexpected error occurred' }])
      }
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  const stopTracking = () => {
    if (jobTracker) {
      jobTracker.stopTracking()
      setJobTracker(null)
    }
  }

  const resetJob = () => {
    stopTracking()
    setJobId(null)
    setJobStatus('queued')
    setJobProgress(null)
    setJobError(undefined)
    setJobResult(null)
  }

  const resetConfig = () => {
    setConfig({
      exp_name: '',
      start_date: '',
      end_date: '',
      local_db: false,
      cashflow: 100000,
      tickers: [],
      workflow_analysts: [],
      model: ''
    })
    setErrors([])
    resetJob()
  }

  const updateConfig = (updates: Partial<TradingConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }))
    // Clear related errors when updating
    if (Object.keys(updates).length > 0) {
      setErrors(prev => prev.filter(error => !Object.keys(updates).includes(error.field)))
    }
  }

  const getFieldError = (field: string): string | undefined => {
    return errors.find(error => error.field === field)?.message
  }

  const addTicker = (ticker: string) => {
    const normalizedTicker = ticker.trim().toUpperCase()
    if (normalizedTicker && !config.tickers.includes(normalizedTicker)) {
      updateConfig({ tickers: [...config.tickers, normalizedTicker] })
    }
  }

  const removeTicker = (ticker: string) => {
    updateConfig({ tickers: config.tickers.filter(t => t !== ticker) })
  }

  const toggleAnalyst = (analyst: string) => {
    const isSelected = config.workflow_analysts.includes(analyst)
    updateConfig({
      workflow_analysts: isSelected
        ? config.workflow_analysts.filter(a => a !== analyst)
        : [...config.workflow_analysts, analyst]
    })
  }

  return {
    // Configuration
    config,
    updateConfig,
    resetConfig,
    
    // Available options
    availableOptions,
    isLoadingOptions,
    loadAvailableOptions,
    refreshOptions: () => loadAvailableOptions(true),
    
    // Validation
    errors,
    getFieldError,
    validateConfig,
    
    // Submission
    submitConfig,
    isSubmitting,
    
    // Job tracking
    jobId,
    jobStatus,
    jobProgress,
    jobError,
    jobResult,
    stopTracking,
    resetJob,
    
    // Utility functions
    addTicker,
    removeTicker,
    toggleAnalyst,
    
    // Computed properties
    isJobActive: jobStatus === 'running' || jobStatus === 'queued',
    isJobComplete: jobStatus === 'completed',
    isJobFailed: jobStatus === 'failed',
    progressPercent: jobProgress ? Math.round((jobProgress.current_day / jobProgress.total_days) * 100) : 0
  }
}
