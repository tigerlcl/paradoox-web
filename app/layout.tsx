import './globals.css'
import { Inter, Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata = {
  title: 'Paradoox AI - How AI can shape your trust?',
  description: 'Leading AI research and innovation company building trustworthy artificial intelligence through cutting-edge LLM and Multi-Agent research.',
  keywords: 'AI, artificial intelligence, research, innovation, machine learning, deep learning, LLM, Multi-Agent, trustworthy AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${plusJakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
} 