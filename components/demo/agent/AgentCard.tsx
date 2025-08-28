'use client'

import { Agent } from '../types'

interface AgentCardProps {
  agent: Agent
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="dark-card rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg font-semibold text-gray-100 text-heading">{agent.name}</h3>
            <span className={`px-2 py-1 text-xs rounded-full ${
              agent.status === 'active' ? 'bg-green-500/20 text-green-400' :
              agent.status === 'testing' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {agent.status}
            </span>
          </div>
          <div className="text-sm text-gray-400 mb-2 text-ui">{agent.type}</div>
          <p className="text-gray-300 text-body">{agent.description}</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm border border-gray-600 text-gray-300 rounded hover:bg-gray-700/50 hover:text-gray-100 transition-colors duration-200">
            Edit
          </button>
          <button className="px-3 py-1 text-sm bg-yellow-500 text-black rounded hover:bg-yellow-400 transition-colors duration-200 hover:scale-105">
            Deploy
          </button>
        </div>
      </div>
    </div>
  )
} 