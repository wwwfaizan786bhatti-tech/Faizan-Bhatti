import React from 'react';
import { ArrowUp, Mail, MessageCircle, Linkedin, Facebook, Instagram, Lock } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms, onOpenAdmin }) => {
  const { siteData } = useSite();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#05070E] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.06]">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-display font-bold text-white text-base">
                FB
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg text-white tracking-tight">
                  FAIZAN BHATTI
                </span>
                <span className="text-[10px] uppercase font-semibold text-blue-400 tracking-wider">
                  Digital Marketing & Web Specialist
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              20 Years of Professional Experience in Digital Marketing, Online Advertising, Business Growth, Performance Marketing, and Website Development.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <span className="block text-slate-300 font-medium">Direct Inquiries:</span>
              <a href={`mailto:${siteData.contact.email}`} className="text-blue-400 hover:underline">
                {siteData.contact.email}
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-blue-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#expertise" onClick={(e) => handleNavClick(e, '#expertise')} className="hover:text-blue-400 transition-colors">
                  Core Expertise
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="hover:text-blue-400 transition-colors">
                  Portfolio Showcase
                </a>
              </li>
              <li>
                <a href="#case-studies" onClick={(e) => handleNavClick(e, '#case-studies')} className="hover:text-blue-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#insights" onClick={(e) => handleNavClick(e, '#insights')} className="hover:text-blue-400 transition-colors">
                  Marketing Insights
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-blue-400 transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Expertise */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Our Expertise
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">
                  Google Ads & YouTube Advertising
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">
                  Meta Ads & Facebook Advertising
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">
                  Instagram Reels Advertising
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">
                  TikTok Video Ads & Spark Ads
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">
                  High-Speed Website Development
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">
                  Search Engine Optimization (SEO)
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">
                  GA4 & Server-Side Tracking
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect With Me */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Connect With Me
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Available for strategic advisory, full campaign setups, and high-converting web engineering.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={siteData.contact.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn Profile (Faizan Bhatti)"
                className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-blue-600/20 border border-white/[0.08] hover:border-blue-500/40 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteData.contact.socials.facebook}
                target="_blank"
                rel="noreferrer"
                title="Facebook"
                className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-blue-600/20 border border-white/[0.08] hover:border-blue-500/40 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteData.contact.socials.instagram}
                target="_blank"
                rel="noreferrer"
                title="Instagram"
                className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-pink-600/20 border border-white/[0.08] hover:border-pink-500/40 text-slate-300 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteData.contact.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
                className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-emerald-600/20 border border-white/[0.08] hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteData.contact.email}`}
                title="Email"
                className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-blue-600/20 border border-white/[0.08] hover:border-blue-500/40 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-emerald-400 font-medium">
                ● Accepting selective client engagements
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <strong className="text-slate-300 font-semibold">{siteData.brand.name}</strong>. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="hover:text-blue-400 text-slate-400 flex items-center gap-1 transition-colors"
              >
                <Lock className="w-3 h-3 text-blue-400" />
                <span>Admin Portal</span>
              </button>
            )}
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-blue-400 transition-colors"
            >
              Terms & Conditions
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
