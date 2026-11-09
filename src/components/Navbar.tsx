import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Lock } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface NavbarProps {
  onOpenConsultation?: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Platforms', href: '#platforms' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Insights', href: '#insights' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070A12]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Zone: 1-line clean typographic wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-400 p-[1px] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-[#0B0F1E] rounded-[11px] flex items-center justify-center font-display font-extrabold text-blue-400 text-sm tracking-tight">
                FB
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-white tracking-tight group-hover:text-blue-400 transition-colors">
                FAIZAN BHATTI
              </span>
              <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                Digital Marketing Expert
              </span>
            </div>
          </a>

          {/* Nav Links: Clean typography links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-blue-400 transition-colors relative py-1 text-[13px] tracking-wide whitespace-nowrap shrink-0 hover:underline hover:decoration-blue-500/50 hover:underline-offset-8"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Admin portal trigger + Primary CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAdmin}
              title="Faizan Bhatti Admin Portal (Edit Whole Website)"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-blue-500/40 text-slate-300 hover:text-white text-xs font-semibold tracking-wide transition-all"
            >
              <Lock className="w-3.5 h-3.5 text-blue-400" />
              <span>Admin</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold tracking-wide uppercase shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="sm:hidden px-3 py-1.5 rounded-md bg-blue-600 text-white text-xs font-medium whitespace-nowrap"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070A12]/95 backdrop-blur-xl border-b border-white/[0.1] px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-slate-200 hover:text-blue-400 py-2 border-b border-white/[0.04] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.1] text-slate-300 text-sm font-semibold hover:bg-white/[0.08] transition-colors"
              >
                <Lock className="w-4 h-4 text-blue-400" />
                <span>Admin Portal (Edit Website)</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold tracking-wide shadow-md"
              >
                Let's Work Together
              </a>
              <a
                href={SITE_CONFIG.contact.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-emerald-400 text-sm font-medium hover:bg-white/[0.08] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
