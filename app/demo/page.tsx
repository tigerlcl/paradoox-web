'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ActiveTab } from '@/components/demo/types'
import { useDemoData } from '@/hooks/useDemoData'
import DemoLayout from '@/components/demo/DemoLayout'
import PortfolioCanvas from '@/components/demo/portfolio/PortfolioCanvas'
import AgentLaboratory from '@/components/demo/agent/AgentLaboratory'
import Community from '@/components/demo/community/Community'
import { User } from '@supabase/supabase-js'

export default function DemoPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<ActiveTab>('portfolio')
  const { portfolios, agents, communityPosts } = useDemoData()

  // Create mock user for demo
  const mockUser: User = {
    id: 'demo-user-id',
    email: 'demo@paradoox.ai',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    email_confirmed_at: new Date().toISOString(),
    app_metadata: {},
    user_metadata: { full_name: 'Demo User' },
    aud: 'authenticated',
    role: 'authenticated'
  } as User

  const handleSignOut = async () => {
    // Just redirect to home
    router.push('/')
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'portfolio':
        return <PortfolioCanvas portfolios={portfolios} />
      case 'agent-lab':
        return <AgentLaboratory agents={agents} />
      case 'community':
        return <Community posts={communityPosts} />
      default:
        return <PortfolioCanvas portfolios={portfolios} />
    }
  }

  return (
    <DemoLayout
      activeTab={activeTab}
      onTabChange={setActiveTab}
      user={mockUser}
      onSignOut={handleSignOut}
    >
      {renderActiveTab()}
    </DemoLayout>
  )
} 