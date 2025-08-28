'use client'

import { CommunityPost as CommunityPostType } from '../types'

interface CommunityPostProps {
  post: CommunityPostType
}

export default function CommunityPost({ post }: CommunityPostProps) {
  return (
    <div className="dark-card rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-black font-semibold text-sm">
              {post.author.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <div className="font-medium text-gray-100 text-heading">{post.author}</div>
            <div className="text-sm text-gray-400 text-ui">{post.timestamp}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-400 text-ui">Returns</div>
          <div className="font-semibold text-green-400 text-heading">{post.returns}</div>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mb-2 text-gray-100 text-heading">{post.title}</h3>
      <p className="text-gray-300 mb-4 text-body">{post.content}</p>
      
      <div className="flex items-center space-x-6 text-sm text-gray-400">
        <button className="flex items-center space-x-1 hover:text-yellow-400 transition-colors duration-200 text-ui">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-yellow-400 transition-colors duration-200 text-ui">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>{post.comments}</span>
        </button>
        <button className="hover:text-yellow-400 transition-colors duration-200 text-ui">Share</button>
      </div>
    </div>
  )
} 