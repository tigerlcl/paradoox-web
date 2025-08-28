export type ActiveTab = 'portfolio' | 'agent-lab' | 'community'

export interface Portfolio {
  id: number
  name: string
  totalValue: number
  change24h: number
  changePercent: number
  cumulativeReturn: number
  createdDate: string
  lastUpdated: string
}

export interface Agent {
  id: number
  name: string
  type: string
  status: 'active' | 'draft' | 'testing'
  description: string
}

export interface CommunityPost {
  id: number
  author: string
  title: string
  content: string
  returns: string
  likes: number
  comments: number
  timestamp: string
}

export interface DemoLayoutProps {
  children: React.ReactNode
  activeTab: ActiveTab
  onTabChange: (tab: ActiveTab) => void
  user: any
  onSignOut: () => Promise<void>
}

// Trading Configuration Types
export interface TradingConfig {
  exp_name: string
  start_date: string
  end_date: string
  local_db: boolean
  cashflow: number
  tickers: string[]
  workflow_analysts: string[]
  model: string
}

export interface JobProgress {
  current_day: number
  total_days: number
  current_date: string
  completed_days: string[]
}

export interface JobStatus {
  job_id: string
  status: 'queued' | 'running' | 'completed' | 'failed'
  started_at?: string
  progress?: JobProgress
  result?: any
  error?: string
}

export interface ValidationError {
  field: string
  message: string
}

export interface AvailableOptions {
  models: string[]
  analysts: string[]
} 