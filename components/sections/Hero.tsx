import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  badge: 'Integrated AI Solutions Platform',
  headline: 'Unified AI Intelligence',
  highlight: 'Limitless Innovation',
  tagline: 'Unified AI Intelligence for Limitless Innovation',
  description: 'We provide integrated AI solutions that unify automation, analytics, and intelligent workflows into a centralized platform. Our technology empowers organizations to enhance efficiency, optimize decision-making, and drive scalable digital innovation.',
  cta: 'Request Demo',
  stats: [
    { value: '10K+', label: 'Automations Running' },
    { value: '500+', label: 'Organizations' },
    { value: '99.9%', label: 'Uptime SLA' },
  ],
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-surface pt-nav"
    >
      {/* Ambient gradient orbs for depth */}
      <div
        aria-hidden
        className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-brand-500/10 blur-[180px] pointer-events-none animate-float"
      />
      <div
        aria-hidden
        className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-500/8 blur-[150px] pointer-events-none animate-float [animation-delay:3s]"
      />

      {/* Dot grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section text-center">
        {/* Badge */}
        <AnimateIn delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-brand-500/20 bg-brand-500/5 text-sm text-brand-700 mb-10">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            {CONTENT.badge}
          </div>
        </AnimateIn>

        {/* Headline with gradient highlight */}
        <AnimateIn delay={80}>
          <h1 className="font-heading font-black text-[clamp(2.5rem,6vw,5rem)] md:text-display-xl lg:text-display-2xl text-content-primary mb-6 leading-[1.05] tracking-[-0.03em]">
            {CONTENT.headline}{' '}
            <span className="bg-gradient-to-r from-brand-500 via-brand-700 to-brand-500 bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent italic">
              {CONTENT.highlight}
            </span>
          </h1>
        </AnimateIn>

        {/* Tagline */}
        <AnimateIn delay={160}>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl font-heading font-light text-brand-700 mb-6">
            {CONTENT.tagline}
          </p>
        </AnimateIn>

        {/* Description */}
        <AnimateIn delay={200}>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-content-secondary leading-relaxed mb-12">
            {CONTENT.description}
          </p>
        </AnimateIn>

        {/* CTAs with glow effect on primary */}
        <AnimateIn delay={280}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500/40 blur-2xl rounded-pill scale-110 pointer-events-none" />
              <a
                href="#contact"
                className="relative z-10 px-10 py-5 font-body font-semibold text-lg text-white bg-brand-500 rounded-card hover:bg-brand-700 hover:shadow-glow transition-all ease-expo-out active:scale-[0.97]"
              >
                {CONTENT.cta}
              </a>
            </div>
            <a
              href="#about"
              className="px-10 py-5 font-body font-medium text-lg border-2 border-surface-border text-content-primary rounded-card hover:border-brand-500 hover:text-brand-500 transition-all ease-expo-out"
            >
              Explore Platform
            </a>
          </div>
        </AnimateIn>

        {/* Stats */}
        <AnimateIn delay={360}>
          <div className="inline-flex flex-wrap justify-center gap-8 md:gap-16 px-8 py-6 rounded-card-lg bg-surface-raised border border-surface-border">
            {CONTENT.stats.map((stat) => (
              <div key={stat.label} className="text-center min-w-[120px]">
                <div className="font-heading font-black text-4xl md:text-5xl text-brand-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-content-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Floating logo accent */}
        <AnimateIn delay={400}>
          <div className="mt-16 flex items-center justify-center gap-3 opacity-40">
            <img
              src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1774018920481-ai-artificial-intelligence-improves-emai-600nw-2655586379.webp"
              alt="Meh Ai logo"
              className="h-8 w-auto object-contain"
            />
            <span className="font-heading font-semibold text-content-muted text-lg">Meh Ai</span>
          </div>
        </AnimateIn>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs text-content-muted uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-surface-border to-transparent" />
        </div>
      </div>
    </section>
  )
}