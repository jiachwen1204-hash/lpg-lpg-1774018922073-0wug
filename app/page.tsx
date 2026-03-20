import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AI Platform — Unified Automation & Analytics | Meh Ai",
  description: "Integrated AI solutions unifying automation, analytics, and intelligent workflows. Enhance efficiency, optimize decisions, and scale innovation. Get started fre",
  openGraph: {
    title: "Meh Ai — Unified AI Intelligence for Limitless Innovation",
    description: "Streamline operations with integrated AI solutions combining automation, analytics, and intelligent workflows. Enhance efficiency and drive scalable digital inn",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Meh Ai — Unified AI Intelligence for Limitless Innovation",
    description: "Streamline operations with integrated AI solutions combining automation, analytics, and intelligent workflows. Enhance efficiency and drive scalable digital inn",
  },
}

// @lpg: This is the 1-page layout — sections scroll vertically.
// Add section IDs, adjust order if needed, remove any unused sections.
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <About />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}
