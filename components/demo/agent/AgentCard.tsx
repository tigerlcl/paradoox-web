'use client'

import { Agent } from '../types'

interface AgentCardProps {
  agent: Agent
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg font-semibold">{agent.name}</h3>
            <span className={`px-2 py-1 text-xs rounded-full ${
              agent.status === 'active' ? 'bg-green-100 text-green-800' :
              agent.status === 'testing' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {agent.status}
            </span>
          </div>
          <div className="text-sm text-gray-600 mb-2">{agent.type}</div>
          <p className="text-gray-700">{agent.description}</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
            Edit
          </button>
          <button className="px-3 py-1 text-sm bg-yellow-500 text-black rounded hover:bg-yellow-600">
            Deploy
          </button>
        </div>
      </div>
    </div>
  )
} 