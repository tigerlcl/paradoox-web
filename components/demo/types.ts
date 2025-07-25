export type ActiveTab = 'portfolio' | 'agent-lab' | 'community'

export interface Portfolio {
  id: number
  name: string
  totalValue: number
  change24h: number
  changePercent: number
  cumulativeReturn: number
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