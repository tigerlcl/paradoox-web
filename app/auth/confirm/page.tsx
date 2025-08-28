'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'

export default function ConfirmPage() {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { user } = useAuth()


  useEffect(() => {
      try {
        if (user) {
          setSuccess(true)
          setLoading(false)  // Set loading false here
          setTimeout(() => {
            router.push('/demo')
          }, 3000)
        } else {
          setError('Authentication failed. Please try again.')
          setLoading(false)  // Set loading false here
        }
      } catch (err) {
        setError('An error occurred during authentication. Please try again.')
        setLoading(false)  // Set loading false here
      }  
  }, [user, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Authenticating...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          {success ? (
            <>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Authentication Successful!</h1>
              <p className="text-gray-600 mb-6">
                You'll be redirected to your console shortly.
              </p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Authentication Failed</h1>
              <p className="text-gray-600 mb-6">{error}</p>
              <Link
                href="/auth/login"
                className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
              >
                Try Again
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
} 