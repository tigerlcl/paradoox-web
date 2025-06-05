import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { ResearchSection, AboutSection, DocsSection, BlogSection } from '@/components/Sections'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ResearchSection />
      <AboutSection />
      <DocsSection />
      <BlogSection />
      <Footer />
    </main>
  )
} 