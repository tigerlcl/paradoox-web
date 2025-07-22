'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [resetLoading, setResetLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { user, loading, signIn, signUp, signInWithOAuth, resetPassword } = useAuth()
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    full_name: '',
    company: '',
    investor_type: 'individual-investor',
    investment_experience: 'No experience'
  })

  // Add quotes array and state for rotation
  const quotes = [
    { text: "Know what you own, and know why you own it.", author: "Peter Lynch" },
    { text: "The stock market is a device for transferring money from the impatient to the patient.", author: "Warren Buffett" },
    { text: "In the short run, the market is a voting machine but in the long run, it is a weighing machine.", author: "Benjamin Graham" },
    { text: "The four most dangerous words in investing are: 'This time it's different.'", author: "Sir John Templeton" },
    { text: "The big money is not in the buying or the selling, but in the waiting.", author: "Charlie Munger" },
    { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
    { text: "Pain + Reflection = Progress.", author: "Ray Dalio" },
    { text: "The individual investor should act consistently as an investor and not as a speculator.", author: "Ben Graham" },
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 1000); // fade out duration
    }, 7000); // change duration
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (user) {
      router.push('/demo')
    }
  }, [user, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      if (isSignUp) {
        const data = await signUp(formData.email, formData.password, {
          full_name: formData.full_name,
          company: formData.company,
          investor_type: formData.investor_type,
          investment_experience: formData.investment_experience
        })

        if (data.user && !data.user.email_confirmed_at) {
          setSuccess('Please check your email for the confirmation link!')
        }
      } else {
        await signIn(formData.email, formData.password)
        // Navigation handled by useEffect when user state changes
      }
    } catch (error: any) {
      setError(error.message)
    }
  }



  const handleGitHubLogin = async () => {
    try {
      await signInWithOAuth('github')
    } catch (error: any) {
      setError(error.message)
    }
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setResetLoading(true)

    if (!formData.email) {
      setError('Please enter your email address')
      setResetLoading(false)
      return
    }

    try {
      await resetPassword(formData.email)
      setSuccess('Password reset email sent! Please check your inbox.')
    } catch (error: any) {
      setError(error.message)
    } finally {
      setResetLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
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
          <div className="mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
              Embrace the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                AI-Driven Investing
              </span>
            </h1>
          </div>

          {/* Add quotes section here */}
          <div className="mb-8 lg:mb-12 min-h-[280px] lg:min-h-[320px] flex items-center">
            <blockquote
              className={`w-full transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-100 font-light italic mb-10 leading-relaxed tracking-wide">
                {quotes[currentQuoteIndex].text}
              </p>
              <cite className="block text-right text-xl lg:text-2xl xl:text-3xl text-gray-300 font-light">
                — {quotes[currentQuoteIndex].author}
              </cite>
            </blockquote>
          </div>

        </div>
      </div>



      {/* Right Side - Login Panel */}
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
                {isForgotPassword ? 'Reset your password' : isSignUp ? 'Create your account' : 'Welcome back!'}
              </h2>
              <p className="text-gray-600 text-base lg:text-lg">
                {isForgotPassword ? 'Enter your email to receive a reset link' : isSignUp ? 'Join Paradoox AI to start your investment journey' : 'Sign in to your account'}
              </p>
            </div>

                        {!isForgotPassword && (
              <>
                {/* Social Login Buttons */}
                <div className="space-y-3 mb-4 lg:mb-6">
                  <button
                    onClick={handleGitHubLogin}
                    disabled={loading}
                    className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50"
                  >
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    {isSignUp ? 'Sign up with GitHub' : 'Sign in with GitHub'}
                  </button>
                </div>

                {/* Divider */}
                <div className="relative mb-4 lg:mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">or</span>
                  </div>
                </div>
              </>
            )}

            {/* Email Form */}
            <form onSubmit={isForgotPassword ? handleForgotPassword : handleEmailLogin} className="space-y-4">
              {!isForgotPassword && isSignUp && (
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    required={isSignUp}
                    value={formData.full_name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>

              {!isForgotPassword && (
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Enter your password"
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
              )}

              {!isForgotPassword && isSignUp && (
                <>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company (Optional)
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="investor_type" className="block text-sm font-medium text-gray-700 mb-1">
                      I am a
                    </label>
                    <select
                      id="investor_type"
                      name="investor_type"
                      value={formData.investor_type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                      <option value="individual-investor">Individual Investor</option>
                      <option value="financial-expert">Financial Expert</option>
                      <option value="academic-researcher">Academic Researcher</option>
                      <option value="student">Student</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="investment_experience" className="block text-sm font-medium text-gray-700 mb-1">
                      Investment Experience
                    </label>
                    <select
                      id="investment_experience"
                      name="investment_experience"
                      value={formData.investment_experience}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                      <option value="No experience">No experience</option>
                      <option value="Basic">Basic (1-2 years)</option>
                      <option value="Intermediate">Intermediate (3-5 years)</option>
                      <option value="Advanced">Advanced (5+ years)</option>
                      <option value="Expert">Expert (10+ years)</option>
                    </select>
                  </div>
                </>
              )}

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
                disabled={isForgotPassword ? resetLoading : loading}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {(isForgotPassword ? resetLoading : loading) ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {isForgotPassword ? 'Sending Reset Email...' : 'Loading...'}
                  </span>
                ) : (
                  isForgotPassword ? 'Send Reset Email' : isSignUp ? 'Create Account' : 'Sign In'
                )}
              </button>

              {/* Forgot Password Link */}
              {!isForgotPassword && !isSignUp && (
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setIsForgotPassword(true)
                      setError('')
                      setSuccess('')
                      setResetLoading(false)
                    }}
                    className="text-sm text-yellow-600 hover:text-yellow-500 underline"
                  >
                    Forgot your password?
                  </button>
                </div>
              )}
            </form>

            {/* Footer */}
            <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600">
                {isForgotPassword ? (
                  <>
                    Remember your password?{' '}
                    <button
                      onClick={() => {
                        setIsForgotPassword(false)
                        setError('')
                        setSuccess('')
                        setResetLoading(false)
                      }}
                      className="text-yellow-600 hover:text-yellow-500 font-medium"
                    >
                      Sign in
                    </button>
                  </>
                ) : (
                  <>
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                    <button
                      onClick={() => {
                        setIsSignUp(!isSignUp)
                        setError('')
                        setSuccess('')
                        setResetLoading(false)
                      }}
                      className="text-yellow-600 hover:text-yellow-500 font-medium"
                    >
                      {isSignUp ? 'Sign in' : 'Sign up'}
                    </button>
                  </>
                )}
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

        {/* Disclaimer */}
        <div className="text-center mt-6 px-4 relative z-10">
          <p className="text-xs text-gray-500 leading-relaxed">
            By continuing, you agree to Paradoox AI's{' '}
            <Link href="/terms" className="text-yellow-600 hover:text-yellow-500 underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-yellow-600 hover:text-yellow-500 underline">
              Privacy Policy
            </Link>
            , and to receive periodic emails with updates.
          </p>
        </div>
      </div>
    </div>
  )
} 