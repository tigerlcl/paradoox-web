'use client'

import Link from 'next/link'

export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-900">
      {/* Header */}
      <header className="sticky top-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
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
            
            <Link 
              href="/" 
              className="text-gray-300 hover:text-yellow-400 text-sm inline-flex items-center transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="relative py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="bg-slate-800/60 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 rounded-2xl text-gray-300 text-base sm:text-lg leading-relaxed space-y-8 doc-content max-w-none">
            <style jsx global>{`
              .doc-content h2 {
                font-size: 1.875rem;
                line-height: 2.25rem;
                font-weight: 700;
                color: #f3f4f6;
                margin-top: 2.5rem;
                margin-bottom: 1rem;
                border-bottom: 1px solid #475569;
                padding-bottom: 0.5rem;
              }
              .doc-content h3 {
                font-size: 1.5rem;
                line-height: 2rem;
                font-weight: 600;
                color: #e5e7eb;
                margin-top: 2rem;
                margin-bottom: 0.75rem;
              }
              .doc-content p {
                margin-bottom: 1.25rem;
              }
              .doc-content ol {
                list-style-type: decimal;
                padding-left: 2rem;
                margin-bottom: 1.25rem;
              }
              .doc-content ul {
                list-style-type: disc;
                padding-left: 2rem;
                margin-bottom: 1.25rem;
              }
              .doc-content li {
                margin-bottom: 0.5rem;
              }
              .doc-content a {
                color: #f59e0b;
                text-decoration: underline;
              }
              .doc-content a:hover {
                color: #fbbf24;
              }
              .doc-content strong {
                color: #e5e7eb;
                font-weight: 600;
              }
            `}</style>

            <h2>1. Terms</h2>
            <p>
              By accessing the website at <Link href="/">https://paradoox.ai</Link>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
            </p>

            <h2>2. Use License</h2>
            <ol>
              <li>
                Permission is granted to temporarily download one copy of the materials (information or software) on Paradoox AI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                <ul>
                  <li>modify or copy the materials;</li>
                  <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                  <li>attempt to decompile or reverse engineer any software contained on Paradoox AI's website;</li>
                  <li>remove any copyright or other proprietary notations from the materials; or</li>
                  <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>
              </li>
              <li>
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Paradoox AI at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </li>
            </ol>

            <h2>3. Disclaimer</h2>
            <ol>
              <li>
                The materials on Paradoox AI's website are provided on an 'as is' basis. Paradoox AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </li>
              <li>
                Further, Paradoox AI does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </li>
            </ol>

            <h2>4. Limitations</h2>
            <p>
              In no event shall Paradoox AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Paradoox AI's website, even if Paradoox AI or a Paradoox AI authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>

            <h2>5. Accuracy of materials</h2>
            <p>
              The materials appearing on Paradoox AI's website could include technical, typographical, or photographic errors. Paradoox AI does not warrant that any of the materials on its website are accurate, complete or current. Paradoox AI may make changes to the materials contained on its website at any time without notice. However Paradoox AI does not make any commitment to update the materials.
            </p>

            <h2>6. Links</h2>
            <p>
              Paradoox AI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Paradoox AI of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2>7. Modifications</h2>
            <p>
              Paradoox AI may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
} 