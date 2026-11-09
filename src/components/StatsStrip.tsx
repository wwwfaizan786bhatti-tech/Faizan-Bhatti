import React from 'react';
import { Calendar, Compass, Layers, Code, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const StatsStrip: React.FC = () => {
  const statCards = [
    {
      value: "20+",
      label: "Years of Professional Experience",
      subtext: "Decades of advertising, search algorithms & web evolution",
      icon: Calendar,
      accent: "text-blue-400"
    },
    {
      value: "Multi-Platform",
      label: "Advertising Expertise",
      subtext: "Google Ads, Meta, Instagram, TikTok & YouTube",
      icon: Layers,
      accent: "text-indigo-400"
    },
    {
      value: "Strategic",
      label: "Performance & Growth",
      subtext: "Data-driven targeting, conversion funnels & CRO",
      icon: Compass,
      accent: "text-sky-400"
    },
    {
      value: "Full-Stack",
      label: "Website Development Specialist",
      subtext: "High-speed business portals, WordPress & custom web apps",
      icon: Code,
      accent: "text-purple-400"
    }
  ];

  return (
    <div className="relative border-y border-white/[0.08] bg-[#0A0E1A]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statCards.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] ${stat.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                    0{idx + 1}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight tabular-nums">
                    {stat.value}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-200 mt-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {stat.subtext}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] text-blue-400/80">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Professional Domain</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
