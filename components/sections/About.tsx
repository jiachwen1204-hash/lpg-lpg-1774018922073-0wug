import AnimateIn from '@/components/ui/AnimateIn'
import { CheckCircle } from 'lucide-react'

const CONTENT = {
  label:      'About Us',
  heading:    'Unified AI Intelligence for Limitless Innovation',
  description: 'We provide integrated AI solutions that unify automation, analytics, and intelligent workflows into a centralized platform. Our technology empowers organizations to enhance efficiency, optimize decision-making, and drive scalable digital innovation.',
  stats: [
    { value: 'Unified', label: 'Platform Approach' },
    { value: '3-in-1', label: 'Core Capabilities' },
    { value: '100%', label: 'Scalable Architecture' },
  ] as const,
  values: [
    'Integrated automation, analytics, and intelligent workflows',
    'Centralized platform for streamlined operations',
    'Enhanced efficiency and optimized decision-making',
    'Scalable digital innovation for growth',
  ],
  stat:  { value: 'AI-Powered', label: 'Intelligent Solutions' },
  cta:   { label: 'Request Demo', href: '#contact' },
}

export default function About() {
  return (
    <section id="about" className="py-section bg-surface relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-500/[0.06] blur-[180px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <AnimateIn direction="left">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-card-lg bg-gradient-to-br from-brand-500/20 via-brand-500/5 to-transparent" />
              <div className="absolute inset-4 rounded-card-lg border border-surface-border bg-surface-raised p-8 flex flex-col items-center justify-center">
                <div className="font-heading font-black text-[clamp(2.5rem,6vw,4rem)] text-brand-500 leading-tight mb-2 text-center">
                  {CONTENT.stat.value}
                </div>
                <div className="text-content-muted text-center text-sm">{CONTENT.stat.label}</div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-brand-500/10" />
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-brand-500/10" />
                <div className="absolute top-1/2 right-6 w-2 h-2 rounded-full bg-brand-500" />
              </div>
            </div>
          </AnimateIn>

          {/* Content */}
          <AnimateIn direction="right">
            <p className="text-sm font-medium tracking-widest uppercase text-brand-500 mb-3">
              {CONTENT.label}
            </p>
            <h2 className="font-heading font-black text-display-lg text-content-primary mb-6 leading-tight">
              {CONTENT.heading}
            </h2>
            
            <p className="text-content-secondary leading-relaxed mb-6">
              {CONTENT.description}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-card-lg bg-surface-raised border border-surface-border">
              {CONTENT.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading font-bold text-xl text-brand-500">
                    {stat.value}
                  </div>
                  <div className="text-xs text-content-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <ul className="mt-4 space-y-3 mb-8">
              {CONTENT.values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm text-content-primary">
                  <CheckCircle 
                    className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" 
                    strokeWidth={2.5} 
                  />
                  {v}
                </li>
              ))}
            </ul>

            <a
              href={CONTENT.cta.href}
              className="inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-brand-500 text-white rounded-card hover:bg-brand-700 hover:shadow-glow-sm transition-all ease-expo-out"
            >
              {CONTENT.cta.label}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}