import { JobStatus, JobProgress } from '@/components/demo/types'

export class JobTracker {
  private jobId: string
  private pollInterval: NodeJS.Timeout | null = null
  private baseUrl: string

  constructor(jobId: string, baseUrl: string = 'http://localhost:8000') {
    this.jobId = jobId
    this.baseUrl = baseUrl
  }

  async startTracking(
    onUpdate: (progress: JobProgress) => void,
    onComplete: (result: any) => void,
    onError: (error: string) => void
  ): Promise<void> {
    this.pollInterval = setInterval(async () => {
      try {
        const response = await fetch(`${this.baseUrl}/status/${this.jobId}`)
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }

        const status: JobStatus = await response.json()
        
        if (status.status === 'running' && status.progress) {
          onUpdate(status.progress)
        } 
        else if (status.status === 'completed') {
          this.stopTracking()
          onComplete(status.result || {})
        }
        else if (status.status === 'failed') {
          this.stopTracking()
          onError(status.error || 'Job failed with unknown error')
        }
        // For 'queued' status, we just continue polling
      } catch (error) {
        this.stopTracking()
        onError(error instanceof Error ? error.message : 'Failed to check job status')
      }
    }, 2000) // Poll every 2 seconds
  }

  stopTracking(): void {
    if (this.pollInterval) {
      clearInterval(this.pollInterval)
      this.pollInterval = null
    }
  }

  getJobId(): string {
    return this.jobId
  }
}

// Cache for API responses
interface ApiCache {
  models: { data: string[]; timestamp: number } | null
  analysts: { data: string[]; timestamp: number } | null
}

const apiCache: ApiCache = {
  models: null,
  analysts: null
}

// Track in-flight requests to prevent duplicates
interface InflightRequests {
  models: Promise<string[]> | null
  analysts: Promise<string[]> | null
}

const inflightRequests: InflightRequests = {
  models: null,
  analysts: null
}

const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes in milliseconds

// API utility functions
export const tradingAPI = {
  baseUrl: 'http://localhost:8000',

  async getModels(): Promise<string[]> {
    const now = Date.now()
    
    // Check cache first
    if (apiCache.models && (now - apiCache.models.timestamp) < CACHE_DURATION) {
      return apiCache.models.data
    }

    // If there's already a request in flight, return that promise
    if (inflightRequests.models) {
      return inflightRequests.models
    }

    // Create new request
    const requestPromise = this._fetchModels()
    inflightRequests.models = requestPromise

    try {
      const result = await requestPromise
      return result
    } finally {
      // Clear the in-flight request
      inflightRequests.models = null
    }
  },

  async _fetchModels(): Promise<string[]> {
    const now = Date.now()
    
    try {
      const response = await fetch(`${tradingAPI.baseUrl}/models`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      })
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Models response error:', errorText)
        throw new Error(`Failed to fetch models: ${response.status} ${response.statusText}`)
      }
      
      const data = await response.json()
      
      // Handle both possible response formats
      let models: string[] = []
      if (Array.isArray(data)) {
        models = data
      } else if (data.available_models && Array.isArray(data.available_models)) {
        models = data.available_models
      } else {
        console.warn('Unexpected models response format:', data)
        models = []
      }

      // Cache the result
      apiCache.models = { data: models, timestamp: now }
      return models
    } catch (error) {
      console.error('Error fetching models:', error)
      
      // Return cached data if available, otherwise fallback
      if (apiCache.models) {
        return apiCache.models.data
      }
      
      // Return some default models for testing
      const fallbackModels = ['GPT 4o mini', 'Claude 4 Sonnet', 'Deepseek v3.1']
      apiCache.models = { data: fallbackModels, timestamp: now }
      return fallbackModels
    }
  },

  async getAnalysts(): Promise<string[]> {
    const now = Date.now()
    
    // Check cache first
    if (apiCache.analysts && (now - apiCache.analysts.timestamp) < CACHE_DURATION) {
      return apiCache.analysts.data
    }

    // If there's already a request in flight, return that promise
    if (inflightRequests.analysts) {
      return inflightRequests.analysts
    }

    // Create new request
    const requestPromise = this._fetchAnalysts()
    inflightRequests.analysts = requestPromise

    try {
      const result = await requestPromise
      return result
    } finally {
      // Clear the in-flight request
      inflightRequests.analysts = null
    }
  },

  async _fetchAnalysts(): Promise<string[]> {
    const now = Date.now()
    
    try {
      const response = await fetch(`${tradingAPI.baseUrl}/analysts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      })
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Analysts response error:', errorText)
        throw new Error(`Failed to fetch analysts: ${response.status} ${response.statusText}`)
      }
      
      const data = await response.json()
      
      // Handle both possible response formats
      let analysts: string[] = []
      if (Array.isArray(data)) {
        analysts = data
      } else if (data.available_analysts && Array.isArray(data.available_analysts)) {
        analysts = data.available_analysts
      } else {
        console.warn('Unexpected analysts response format:', data)
        analysts = []
      }

      // Cache the result
      apiCache.analysts = { data: analysts, timestamp: now }
      return analysts
    } catch (error) {
      console.error('Error fetching analysts:', error)
      
      // Return cached data if available, otherwise fallback
      if (apiCache.analysts) {
        return apiCache.analysts.data
      }
      
      // Return some default analysts for testing
      const fallbackAnalysts = ['technical', 'fundamental', 'company_news', 'insider']
      apiCache.analysts = { data: fallbackAnalysts, timestamp: now }
      return fallbackAnalysts
    }
  },

  async submitConfig(config: any): Promise<{ job_id: string; status: string; message: string }> {
    const response = await fetch(`${tradingAPI.baseUrl}/run`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config)
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.detail || `HTTP ${response.status}: ${response.statusText}`)
    }

    return await response.json()
  },

  async getJobStatus(jobId: string): Promise<JobStatus> {
    const response = await fetch(`${tradingAPI.baseUrl}/status/${jobId}`)
    if (!response.ok) {
      throw new Error(`Failed to get job status: ${response.statusText}`)
    }
    return await response.json()
  },

  // Cache management utilities
  clearCache(): void {
    apiCache.models = null
    apiCache.analysts = null
    // Also clear any in-flight requests
    inflightRequests.models = null
    inflightRequests.analysts = null
  },

  // Force refresh - clears cache and refetches
  async refreshModels(): Promise<string[]> {
    // Clear cache and in-flight requests
    apiCache.models = null
    inflightRequests.models = null
    return await this.getModels()
  },

  async refreshAnalysts(): Promise<string[]> {
    // Clear cache and in-flight requests  
    apiCache.analysts = null
    inflightRequests.analysts = null
    return await this.getAnalysts()
  },

  getCacheStatus(): { models: boolean; analysts: boolean; modelsAge?: number; analystsAge?: number } {
    const now = Date.now()
    return {
      models: !!apiCache.models && (now - apiCache.models.timestamp) < CACHE_DURATION,
      analysts: !!apiCache.analysts && (now - apiCache.analysts.timestamp) < CACHE_DURATION,
      modelsAge: apiCache.models ? now - apiCache.models.timestamp : undefined,
      analystsAge: apiCache.analysts ? now - apiCache.analysts.timestamp : undefined
    }
  }
}
