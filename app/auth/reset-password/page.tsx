'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'

export default function AuthResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const { updatePassword, signOut } = useAuth()
  const router = useRouter()
  
  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    
    try {
      await updatePassword(password)
      setSuccess('Updated! Please log in with your new password.')
    } catch (error: any) {
      setError(error.message)
    } finally {
      await signOut()
      router.push('/auth/login')
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Branding */}
      <div className="flex-1 relative overflow-hidden h-[60vh] lg:min-h-screen bg-gray-900">
        {/* Logo */}
        <div className="absolute top-4 left-4 lg:top-8 lg:left-8 z-20">
          <Link href="/" className="inline-block">
            <svg className="w-32 h-6 lg:w-44 lg:h-8" viewBox="0 0 244 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M48 11C48 11 59.2894 11 61.3596 11C63.4298 11 65.5 13.8655 65.5 16.7313C65.5 19.5972 63.4298 23.1789 61.3596 23.1791C59.2894 23.1793 49.9736 23.1791 49.9736 23.1791V35" stroke="white" strokeWidth="4"/>
              <path d="M89 11C89 11 100.289 11 102.36 11C104.43 11 106.5 13.8655 106.5 16.7313C106.5 19.5972 104.43 23.1789 102.36 23.1791C100.289 23.1793 91 23.1791 91 23.1791V24L102.36 33.5" stroke="white" strokeWidth="4"/>
              <path d="M111 35C111 35 111 35 111 23M111 23H127M111 23V11H119C127 11 127 11 127 23M127 23C127 35 127 35 127 35" stroke="white" strokeWidth="4"/>
              <path d="M201 35C201 35 201 35 201 23M201 23H217M201 23V11H209C217 11 217 11 217 23M217 23C217 35 217 35 217 35" stroke="#FFCB00" strokeWidth="4"/>
              <path d="M70 35C70 35 70 35 70 23M70 23H86M70 23V11H78C86 11 86 11 86 23M86 23C86 35 86 35 86 35" stroke="white" strokeWidth="4"/>
              <path d="M132 11.0005C132 11.0005 133 11.0007 140 11.0005C147 11.0002 148 11.0005 148 22.0005C148 33.0005 147 33.0005 140 33.0005C133 33.0005 132 33.0005 132 33.0005V11.0005Z" stroke="white" strokeWidth="4"/>
              <path d="M170 22L161.5 11H153V22V33H161.5L170 22ZM170 22L178.5 33H187V22V11H178.5L170 22Z" stroke="white" strokeWidth="4"/>
              <path d="M220 11H230.133M239 11H230.133M230.133 11V33H220H239" stroke="#FFCB00" strokeWidth="4"/>
              <path d="M16.6464 15.9566L32.0806 5.25977L39.3878 27.9381L16.6464 15.9566Z" fill="white"/>
              <path d="M28.4912 38.4373L39.7977 30.0379L24.7322 36.4131L28.4912 38.4373Z" fill="white"/>
              <path d="M7 27.9381V13.6591L16.6464 38.4373L7 27.9381Z" fill="white"/>
              <path d="M8.23047 11.9794L15.2 4H26.6792L14.38 12.8193L8.23047 11.9794Z" fill="#FFCB00"/>
              <path d="M18.6239 37.8573L12.7505 16.9194L35.5393 28.9527L18.6239 37.8573Z" fill="#FFCB00"/>
              <path d="M41.0274 27.5178L35.6978 5.67944L41.4374 14.4988L41.0274 27.5178Z" fill="#FFCB00"/>
              <rect x="192" y="31" width="4" height="4" fill="white"/>
            </svg>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-center h-full px-6 lg:px-16 relative z-10 pt-12 lg:pt-0">
          {/* Slogan */}
          <div className="mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
              Secure Account
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Recovery
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light">
              Reset your password to continue your investment journey.
            </p>
          </div>

          {/* Security Info */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-gray-700/50">
            <h3 className="text-white font-semibold mb-4">Security Notice</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Choose a strong password</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                <span>a-z, A-Z, and 0-9 combination</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>At least 6 characters required</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Reset Form */}
      <div className="w-full lg:w-2/5 xl:w-1/3 bg-gray-100 flex flex-col justify-center p-6 lg:p-12 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>

        {/* Main Card */}
        <div className="w-full bg-white/70 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl p-6 lg:p-8 relative z-10" style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
        }}>
          <div className="">
            {/* Header */}
            <div className="text-center mb-6 lg:mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Set New Password
              </h2>
              <p className="text-gray-600 text-base lg:text-lg">
                Enter your new password below
              </p>
            </div>

            {/* Password Reset Form */}
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter your new password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Confirm your new password"
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Error and Success Messages */}
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm">
                  {success}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200"
              >
                Update Password
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600">
                Remember your password?{' '}
                <Link href="/auth/login" className="text-yellow-600 hover:text-yellow-500 font-medium">
                  Back to Sign In
                </Link>
              </p>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-4 lg:mt-6">
              <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm inline-flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}