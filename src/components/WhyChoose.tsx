import React from 'react';
import {
  Calendar,
  Compass,
  Layers,
  BarChart,
  Target,
  Sparkles,
  MessageSquare,
  TrendingUp,
  Code2,
  Award,
  CheckCircle2
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const WhyChoose: React.FC = () => {
  const icons = [
    Calendar,
    Compass,
    Layers,
    BarChart,
    Target,
    Sparkles,
    MessageSquare,
    TrendingUp,
    Code2,
    Award
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
            <span>Competitive Advantage</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Why Faizan Bhatti</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            More Than Marketing. A Strategic Partner for Your Business Growth.
          </h2>
          <p className="text-base text-slate-400 mt-4 leading-relaxed">
            Unlike transient marketing freelancers or junior agency account managers, Faizan Bhatti brings 30 years of seasoned business and technical acumen to your brand.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* 10 Core Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {SITE_CONFIG.whyChoose.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className={`group relative rounded-2xl p-6 bg-[#0A0F1D]/80 border border-white/[0.07] hover:border-blue-500/40 hover:bg-[#0E162B] transition-all duration-300 flex flex-col justify-between ${
                  idx === 0 || idx === 8 ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-blue-400 group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] text-blue-400/80">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Strategic Commitment</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
