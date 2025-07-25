'use client'

import { CommunityPost as CommunityPostType } from '../types'
import CommunityPost from './CommunityPost'

interface CommunityProps {
  posts: CommunityPostType[]
}

export default function Community({ posts }: CommunityProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Community</h2>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
          New Post
        </button>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <CommunityPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
} 