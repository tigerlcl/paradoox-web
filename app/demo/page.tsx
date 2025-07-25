'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { ActiveTab } from '@/components/demo/types'
import { useDemoData } from '@/hooks/useDemoData'
import DemoLayout from '@/components/demo/DemoLayout'
import PortfolioCanvas from '@/components/demo/portfolio/PortfolioCanvas'
import AgentLaboratory from '@/components/demo/agent/AgentLaboratory'
import Community from '@/components/demo/community/Community'

export default function DemoPage() {
  const { user, signOut } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<ActiveTab>('portfolio')
  const { portfolios, agents, communityPosts } = useDemoData()

  useEffect(() => {
    if (!user) {
      router.push('/auth/login')
    }
  }, [user, router])

  const handleSignOut = async () => {
    await signOut()
  }

  if (!user) {
    return null
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
      user={user}
      onSignOut={handleSignOut}
    >
      {renderActiveTab()}
    </DemoLayout>
  )
} 