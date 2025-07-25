'use client'

interface CreatePortfolioModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CreatePortfolioModal({ isOpen, onClose }: CreatePortfolioModalProps) {
  if (!isOpen) return null

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Create New Portfolio</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-medium mb-4">Step 1: Budget</h4>
          <input
            type="number"
            placeholder="Enter initial budget"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-4">Step 2: Choose Tickers</h4>
          <input
            type="text"
            placeholder="Enter stock tickers (e.g., AAPL, MSFT, GOOGL)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-4">Step 3: Choose Base LLM</h4>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500">
            <option>GPT-4 Turbo</option>
            <option>Claude 3.5 Sonnet</option>
            <option>Gemini Pro</option>
          </select>
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-4">Additional Settings (Optional)</h4>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Risk tolerance"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
            <input
              type="text"
              placeholder="Trading frequency"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
        </div>
        
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          >
            GO!
          </button>
        </div>
      </div>
    </div>
  )
} 