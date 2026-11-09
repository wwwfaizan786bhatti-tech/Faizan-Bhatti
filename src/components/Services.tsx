import React, { useState } from 'react';
import {
  Search,
  Share2,
  Instagram,
  Video,
  Layout,
  Database,
  ShoppingBag,
  MousePointerClick,
  Users,
  MessageSquare,
  Globe,
  BarChart3,
  Compass,
  Briefcase,
  ArrowRight,
  Clock,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { SITE_CONFIG, ServiceItem } from '../config/siteConfig';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'advertising' | 'development' | 'strategy'>('all');

  const filteredServices = activeCategory === 'all'
    ? SITE_CONFIG.services
    : SITE_CONFIG.services.filter(s => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-blue-400" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-indigo-400" />;
      case 'Instagram':
        return <Instagram className="w-5 h-5 text-pink-400" />;
      case 'Video':
        return <Video className="w-5 h-5 text-rose-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-amber-400" />;
      case 'MousePointerClick':
        return <MousePointerClick className="w-5 h-5 text-cyan-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-violet-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-blue-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-emerald-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-amber-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-purple-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-indigo-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-blue-400" />;
    }
  };

  const handleGetService = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const topOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
              <span>Full-Stack Marketing & Web Spectrum</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>14 Specialized Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Digital Solutions That Drive Business Growth
            </h2>
            <p className="text-base text-slate-400 mt-3 max-w-2xl">
              Turnkey services managed with strategic precision. Every engagement is personally architected and supervised by Faizan Bhatti.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Zero-Pill Discipline: Clean segmented control) */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Services (14)
            </button>
            <button
              onClick={() => setActiveCategory('advertising')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                activeCategory === 'advertising'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Paid Advertising
            </button>
            <button
              onClick={() => setActiveCategory('development')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                activeCategory === 'development'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Website Development
            </button>
            <button
              onClick={() => setActiveCategory('strategy')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                activeCategory === 'strategy'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Growth & Analytics
            </button>
          </div>
        </div>

        {/* Services Grid (14 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="group relative rounded-2xl p-6 sm:p-7 bg-[#0A0F1D]/80 border border-white/[0.07] hover:border-blue-500/40 hover:bg-[#0D152A] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-105 transition-transform duration-200">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{service.timeline}</span>
                  </div>
                </div>

                <h3 className="text-lg font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key deliverables */}
                <div className="mt-4 pt-4 border-t border-white/[0.05] space-y-1.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block">
                    Core Deliverables
                  </span>
                  {service.deliverables.slice(0, 3).map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2">
                <button
                  onClick={() => handleGetService(service.title)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 hover:border-blue-500 text-blue-300 hover:text-white font-semibold text-xs tracking-wide transition-all duration-200"
                >
                  <span>Get This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(`Hello Faizan! I am interested in your service: ${service.title}. Let's discuss requirements.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  title="Direct WhatsApp Inquiry"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-emerald-500/20 border border-white/[0.08] hover:border-emerald-500/40 text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
