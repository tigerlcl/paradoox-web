'use client'

import { useState } from 'react'
import { Agent } from '../types'
import AgentCard from './AgentCard'
import CreateAgentModal from './CreateAgentModal'

interface AgentLaboratoryProps {
  agents: Agent[]
}

export default function AgentLaboratory({ agents }: AgentLaboratoryProps) {
  const [showCreateAgent, setShowCreateAgent] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Agent Laboratory</h2>
        <button
          onClick={() => setShowCreateAgent(true)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Create Agent
        </button>
      </div>

      {showCreateAgent ? (
        <CreateAgentModal 
          isOpen={showCreateAgent}
          onClose={() => setShowCreateAgent(false)}
        />
      ) : (
        <div className="grid gap-4">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      )}
    </div>
  )
} 