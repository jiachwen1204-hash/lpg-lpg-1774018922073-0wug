import Link from 'next/link'
import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'

const BRAND = {
  name:    'Meh Ai',
  tagline: 'Unified AI Intelligence for Limitless Innovation',
  description: 'We provide integrated AI solutions that unify automation, analytics, and intelligent workflows into a centralized platform. Our technology empowers organizations to enhance efficiency, optimize decision-making, and drive scalable digital innovation.',
  email:   'dev@apex.ms',
  address: 'B5-1-3, Forest Green Condominium, Bandar Sungai Long',
}

const links = [
  { label: 'Services',  href: '#services'  },
  { label: 'About',     href: '#about'       },
  { label: 'Platform',  href: '#platform'    },
  { label: 'Contact',   href: '#contact'      },
]

const legal = [
  { label: 'Privacy Policy',    href: '/privacy' },
  { label: 'Terms of Service',  href: '/terms'   },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/5">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Top accent line with brand glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <AnimateIn direction="up" delay={0}>
            <div>
              <Link href="/" className="inline-block group">
                <img 
                  src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1774018920481-ai-artificial-intelligence-improves-emai-600nw-2655586379.webp" 
                  alt="Meh Ai logo" 
                  className="h-10 w-auto object-contain transition-opacity group-hover:opacity-80" 
                />
              </Link>
              <p className="mt-4 text-sm text-white/50 max-w-xs leading-relaxed">
                {BRAND.description}
              </p>
              
              {/* CTA Button */}
              <div className="relative inline-flex mt-6">
                <div className="absolute inset-0 bg-brand-500/30 blur-xl rounded-pill scale-110" />
                <Link 
                  href="#contact" 
                  className="relative z-10 px-5 py-2.5 rounded-pill bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-all hover:scale-[1.02]"
                >
                  Request Demo
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/50 hover:text-brand-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {BRAND.email}
                </a>
                <div className="flex items-start gap-2.5 text-sm text-white/50">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  {BRAND.address}
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Navigation */}
          <AnimateIn direction="up" delay={100}>
            <div>
              <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">
                Navigation
              </h3>
              <ul className="space-y-3">
                {links.map(l => (
                  <li key={l.href}>
                    <a 
                      href={l.href} 
                      className="text-sm text-white/50 hover:text-brand-400 transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-0 h-px bg-brand-500 group-hover:w-3 transition-all duration-300" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          {/* Legal & Social */}
          <AnimateIn direction="up" delay={200}>
            <div>
              <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">
                Connect
              </h3>
              <div className="flex gap-3 mb-8">
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-400 hover:border-brand-500/30 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-400 hover:border-brand-500/30 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
              
              <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Legal
              </h3>
              <ul className="space-y-2.5">
                {legal.map(l => (
                  <li key={l.href}>
                    <Link 
                      href={l.href} 
                      className="text-sm text-white/50 hover:text-brand-400 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/40">
              © {year} {BRAND.name}. All rights reserved.
            </div>
            <div className="text-sm text-white/30">
              Unified AI Intelligence for Limitless Innovation
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}