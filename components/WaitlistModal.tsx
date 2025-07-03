'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import validator from 'validator'

// TODO: Replace with your Supabase project URL and anon key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'YOUR_SUPABASE_URL'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    investorType: '',
    investment_experience: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(false)

  // Email validation using validator library
  const validateEmail = (email: string): boolean => {
    return validator.isEmail(email)
  }

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    setFormData({
      ...formData,
      [name]: value
    })

    // Real-time email validation
    if (name === 'email') {
      if (value === '') {
        setEmailError('')
        setIsEmailValid(false)
      } else if (!validateEmail(value)) {
        setEmailError('Please enter a valid email address')
        setIsEmailValid(false)
      } else {
        setEmailError('')
        setIsEmailValid(true)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Validate email before submission
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address')
      setIsSubmitting(false)
      return
    }

    try {
      const { data, error } = await supabase
        .from('waitlist')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            investor_type: formData.investorType,
            investment_experience: formData.investment_experience,
            company: formData.company,
            message: formData.message
          }
        ])

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          throw new Error('This email address has already been registered.')
        }
        throw new Error(error.message)
      }

      // If no error, the insert was successful
      setIsSubmitted(true)
      setFormData({ name: '', email: '', investorType: '', investment_experience: '', company: '', message: '' })
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetModal = () => {
    setIsSubmitted(false)
    setError('')
    setEmailError('')
    setIsEmailValid(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-600/40 w-full max-w-md max-h-[90vh] overflow-y-auto financial-glow">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 z-10"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-rocket text-white text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2 text-heading">Join Our Waitlist</h2>
                <p className="text-gray-300 text-body">
                  Be the first to experience AI-driven rational investing. Get early access to DeepFund.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200 backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-800/60 border rounded-lg text-white placeholder-slate-400 focus:outline-none transition-colors duration-200 backdrop-blur-sm pr-10 ${
                        emailError 
                          ? 'border-red-500 focus:ring-2 focus:ring-red-500' 
                          : isEmailValid 
                            ? 'border-green-500 focus:ring-2 focus:ring-green-500' 
                            : 'border-slate-600/50 focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {formData.email && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        {isEmailValid ? (
                          <i className="fas fa-check text-green-500"></i>
                        ) : emailError ? (
                          <i className="fas fa-exclamation-triangle text-red-500"></i>
                        ) : null}
                      </div>
                    )}
                  </div>
                  {emailError && (
                    <p className="mt-2 text-sm text-red-400">{emailError}</p>
                  )}
                </div>

                {/* Investor Type */}
                <div>
                  <label htmlFor="investorType" className="block text-sm font-medium text-gray-300 mb-2">
                    I am a *
                  </label>
                  <select
                    id="investorType"
                    name="investorType"
                    required
                    value={formData.investorType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200 backdrop-blur-sm"
                  >
                    <option value="individual-investor">Individual Investor</option>
                    <option value="financial-expert">Financial Expert</option>
                    <option value="academic-researcher">Academic Researcher</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Investment Experience */}
                <div>
                  <label htmlFor="investment_experience" className="block text-sm font-medium text-gray-300 mb-2">
                    Rate your investment experience *
                  </label>
                  <select
                    id="investment_experience"
                    name="investment_experience"
                    required
                    value={formData.investment_experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200 backdrop-blur-sm"
                  >
                    <option value="No experience">No experience</option>
                    <option value="0-1 years">0-1 years</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5+ years">5+ years</option>
                  </select>
                </div>

                {/* Company/Organization */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200 backdrop-blur-sm"
                    placeholder="Company or organization (optional)"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Comments
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200 resize-none backdrop-blur-sm"
                    placeholder="Tell us about your investing interests (optional)"
                  />
                </div>

                {/* Error message */}
                {error && (
                  <div className="text-red-400 text-sm text-center bg-red-900/20 border border-red-800 rounded-lg p-3">
                    {error}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="fas fa-spinner fa-spin"></i>
                      Joining Waitlist...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <i className="fas fa-rocket"></i>
                      Join the Waitlist
                    </span>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Success state */
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check text-white text-2xl"></i>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 text-heading">Welcome Aboard!</h2>
              <p className="text-gray-300 mb-6 text-body leading-relaxed">
                Thank you for joining our waitlist! We'll keep you updated on our progress and notify you 
                when DeepFund is ready for early access.
              </p>
              <button
                onClick={resetModal}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 