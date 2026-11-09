import React, { useState } from 'react';
import {
  Search,
  Share2,
  Instagram,
  Video,
  Code2,
  TrendingUp,
  Globe,
  Target,
  ArrowRight,
  CheckCircle2,
  X
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ExpertiseProps {
  onSelectService?: (serviceName: string) => void;
}

export const Expertise: React.FC<ExpertiseProps> = ({ onSelectService }) => {
  const [activeModalItem, setActiveModalItem] = useState<any | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-6 h-6 text-blue-400" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-indigo-400" />;
      case 'Instagram':
        return <Instagram className="w-6 h-6 text-pink-400" />;
      case 'Video':
        return <Video className="w-6 h-6 text-rose-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-purple-400" />;
      default:
        return <Search className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="expertise" className="relative py-24 sm:py-32 bg-[#090D18]">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
            <span>Specialized Capabilities</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Strategic Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            My Core Expertise
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-4 leading-relaxed">
            Engineered over 30 years of hands-on advertising, algorithmic search mastery, and full-stack digital development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.coreExpertise.map((item, idx) => (
            <div
              key={item.id}
              className="group relative rounded-2xl p-6 bg-white/[0.02] border border-white/[0.07] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 transition-transform duration-200">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                  {item.description}
                </p>

                {/* Micro checklist preview */}
                <div className="mt-4 pt-3 border-t border-white/[0.04] space-y-1.5">
                  {item.bulletPoints.slice(0, 2).map((bp, bidx) => (
                    <div key={bidx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{bp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Explore More Button */}
              <div className="mt-6 pt-3 border-t border-white/[0.06]">
                <button
                  onClick={() => setActiveModalItem(item)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors"
                >
                  <span>Explore Strategy & Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal for Expertise Item */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl rounded-2xl bg-[#0B1020] border border-blue-500/30 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/[0.05] text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/40">
                {getIcon(activeModalItem.icon)}
              </div>
              <div>
                <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                  Expertise Architecture
                </span>
                <h3 className="text-xl font-display font-bold text-white">
                  {activeModalItem.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeModalItem.description}
            </p>

            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Standard Deliverables & Execution Framework:
            </h4>
            <div className="space-y-2.5 mb-6">
              {activeModalItem.bulletPoints.map((bp: string, i: number) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{bp}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
              <button
                onClick={() => {
                  const title = activeModalItem.title;
                  setActiveModalItem(null);
                  if (onSelectService) {
                    onSelectService(title);
                  }
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide text-center transition-colors"
              >
                Inquire About This Expertise
              </button>
              <button
                onClick={() => setActiveModalItem(null)}
                className="py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-slate-300 text-xs font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
