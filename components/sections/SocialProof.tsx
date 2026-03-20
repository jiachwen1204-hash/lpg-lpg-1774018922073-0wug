import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'

const clients = [
  'Nexora Systems',
  'Stratforge Labs',
  'Cogniview Corp',
  'Synerflow AI',
  'DataMesh Solutions',
  'Vertix Intelligence',
]

interface Testimonial {
  quote: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Meh Ai transformed how we handle our analytics pipelines. We reduced processing time by 68% and unlocked insights we were previously unable to extract from our data.',
    author: 'Sarah Chen',
    role: 'Chief Technology Officer, Nexora Systems',
  },
  {
    quote:
      'The unified platform approach eliminated the need for three separate tools. Our team now operates with a clarity and efficiency that was simply impossible before.',
    author: 'Marcus Webb',
    role: 'VP of Operations, Stratforge Labs',
  },
  {
    quote:
      "Implementation was seamless, and the results were immediate. Meh Ai's intelligent workflows have become the backbone of our decision-making infrastructure.",
    author: 'Priya Nair',
    role: 'Director of Digital Innovation, Synerflow AI',
  },
  {
    quote:
      'Scalable, reliable, and genuinely innovative. This is the kind of platform that gives organizations a genuine competitive edge in their respective markets.',
    author: 'James Holloway',
    role: 'Head of Technology, DataMesh Solutions',
  },
]

const metrics = [
  { value: '500+', label: 'Organizations Served' },
  { value: '2.4M', label: 'Workflows Automated' },
  { value: '94%', label: 'Client Retention Rate' },
  { value: '68%', label: 'Avg. Efficiency Gain' },
]

export default function SocialProof() {
  return (
    <section className="py-section bg-surface-raised relative overflow-hidden">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimateIn direction="up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-pill bg-brand-500/10 text-brand-500 text-sm font-medium tracking-wide mb-6">
            Trusted Worldwide
          </span>
          <h2 className="font-heading font-bold text-display-xl text-content-primary">
            Powering the Future of Work
          </h2>
          <p className="mt-4 text-lg text-content-secondary max-w-2xl mx-auto">
            Leading organizations rely on Meh Ai to unify their operations, accelerate intelligent automation, and drive scalable digital innovation.
          </p>
        </AnimateIn>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {metrics.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 80} direction="up">
              <div className="text-center p-6 rounded-card-lg bg-surface border border-surface-border hover:border-brand-500/40 transition-colors duration-300 group">
                <div className="font-heading font-black text-4xl md:text-5xl text-brand-500 mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-content-muted font-medium">
                  {stat.label}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Client Marquee */}
        <div className="relative mb-20 overflow-hidden">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-raised to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-raised to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 animate-marquee w-max">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="whitespace-nowrap px-6 py-3 rounded-card border border-surface-border bg-surface text-content-secondary font-medium text-sm hover:border-brand-500/50 hover:text-brand-500 transition-colors duration-300 cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 100} direction="up">
              <div className="group relative h-full p-8 rounded-card-lg bg-surface border border-surface-border hover:border-brand-500/50 transition-all duration-300 hover:shadow-glow">
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-500/60 transition-all duration-300" />

                {/* Quote icon */}
                <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-brand-500/10 border border-surface-border flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-brand-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-content-primary leading-relaxed mb-6 text-lg font-light">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-heading font-bold text-lg">
                    {t.author
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-content-primary">
                      {t.author}
                    </div>
                    <div className="text-sm text-content-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}