import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Paradoox AI - The Next-Generation Trusted AI FinTech Middleware',
  description: 'Reinventing how financial institutions evaluate, deploy, and trust AI. Infrastructure for trusted, intelligent, and responsible AI adoption in finance.',
  keywords: 'Trusted AI, FinTech Middleware, AI Governance, Financial AI, Model Evaluation, Risk-Aware AI, LLM Finance, Paradoox AI',
  icons: {
    icon: '/icon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body className="antialiased bg-background text-primary selection:bg-accent/30 selection:text-accent">
        {children}
      </body>
    </html>
  )
}