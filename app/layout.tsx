import './globals.css'

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
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}