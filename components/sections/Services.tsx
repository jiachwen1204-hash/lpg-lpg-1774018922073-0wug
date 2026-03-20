import AnimateIn from '@/components/ui/AnimateIn'
import { Cpu, BarChart3, Workflow, Brain, Lock, Cloud } from 'lucide-react'

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const services: ServiceItem[] = [
  {
    icon: Brain,
    title: 'AI Automation',
    description: 'Streamline complex workflows with intelligent automation that adapts and evolves with your business processes.',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Transform raw data into actionable insights with machine learning models that forecast trends and optimize decision-making.',
  },
  {
    icon: Workflow,
    title: 'Intelligent Workflows',
    description: 'Orchestrate cross-functional operations with AI-driven workflows that eliminate bottlenecks and maximize efficiency.',
  },
  {
    icon: Cpu,
    title: 'Unified Integration',
    description: 'Connect disparate systems into a centralized platform with seamless API integrations and data synchronization.',
  },
  {
    icon: Cloud,
    title: 'Scalable Infrastructure',
    description: 'Deploy enterprise-grade AI solutions that scale effortlessly to meet growing demands without compromising performance.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Protect sensitive data with end-to-end encryption, compliance certifications, and robust access controls.',
  },
]

const HEADING = 'Unified AI Intelligence'
const SUBTEXT =
  'Our integrated AI platform unifies automation, analytics, and intelligent workflows into one centralized system—empowering your organization to enhance efficiency, optimize decisions, and drive scalable digital innovation.'

export default function Services() {
  return (
    <section id="services" className="relative py-section bg-[#0f0f13] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/[0.06] blur-[180px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateIn direction="up" className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-brand-400 mb-3">
            Platform Capabilities
          </p>
          <h2 className="font-heading font-black text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.1] text-white mb-4">
            {HEADING}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/50 leading-relaxed">{SUBTEXT}</p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 80} direction="up">
              <div className="group relative h-full p-8 rounded-card-lg border border-white/5 bg-white/[0.03] hover:border-brand-500/40 transition-all duration-500 ease-expo-out overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.04] transition-colors duration-500 rounded-card-lg" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-500/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svc.icon className="w-7 h-7 text-brand-400" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">{svc.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}