import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  eyebrow: 'Transform Your Operations',
  heading: 'Unified AI Intelligence for Limitless Innovation',
  subtext: 'Empower your organization with integrated AI solutions that unify automation, analytics, and intelligent workflows into a centralized platform. Enhance efficiency, optimize decision-making, and drive scalable digital innovation.',
  cta: { label: 'Request Demo', href: '#contact' },
  secondary: { label: 'Learn More', href: '#features' },
}

export default function CTA() {
  return (
    <section className="py-section relative overflow-hidden bg-surface">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />

      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <div className="w-[700px] h-[700px] rounded-full bg-brand-500/15 blur-[160px] animate-pulse-glow" />
      </div>

      <div
        aria-hidden
        className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-400/10 blur-[120px] pointer-events-none"
      />

      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimateIn>
          <p className="text-sm font-medium tracking-widest uppercase text-brand-400 mb-4 font-heading">
            {CONTENT.eyebrow}
          </p>
          <h2 className="font-heading font-black text-display-xl text-white leading-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-200 to-white bg-[length:200%_auto] animate-shimmer">
              {CONTENT.heading}
            </span>
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed font-body font-light">
            {CONTENT.subtext}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative inline-flex">
              <div className="absolute inset-0 bg-brand-500/50 blur-2xl rounded-card scale-110 pointer-events-none" />
              <a
                href={CONTENT.cta.href}
                className="relative px-8 py-4 font-body font-semibold bg-brand-500 text-white rounded-card hover:bg-brand-400 transition-all ease-expo-out active:scale-[0.97] shadow-glow"
              >
                {CONTENT.cta.label}
              </a>
            </div>
            <a
              href={CONTENT.secondary.href}
              className="px-8 py-4 font-body font-medium border border-white/20 text-white/80 rounded-card hover:border-brand-400 hover:text-brand-400 hover:bg-brand-500/5 transition-all ease-expo-out"
            >
              {CONTENT.secondary.label}
            </a>
          </div>
        </AnimateIn>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3/4 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(99, 102, 241, 0.5), transparent)',
        }}
      />
    </section>
  )
}