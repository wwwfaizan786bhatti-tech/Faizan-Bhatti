import React from 'react';
import { Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const PlatformsEcosystem: React.FC = () => {
  return (
    <section id="platforms" className="relative py-24 sm:py-32 bg-[#080C16] border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
            <span>Advertising Platforms Ecosystem</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Multi-Channel Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Mastering the Platforms That Grow Businesses.
          </h2>
          <p className="text-base text-slate-400 mt-4 leading-relaxed">
            From search intent capture on Google to algorithmic social prospecting across Meta and TikTok, we orchestrate cross-platform synergies that eliminate media waste.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* 8 Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.platforms.map((platform, idx) => (
            <div
              key={platform.id}
              className="group relative rounded-2xl p-6 bg-[#0B1020]/90 border border-white/[0.08] hover:border-blue-500/40 hover:bg-[#0E152B] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-blue-300">
                    {platform.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                  {platform.name}
                </h3>
                
                <p className="text-xs font-medium text-slate-300 mt-1">
                  {platform.tagline}
                </p>

                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                  {platform.summary}
                </p>

                {/* Platform Capabilities */}
                <div className="mt-4 pt-3 border-t border-white/[0.05] space-y-2">
                  {platform.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-blue-400 font-medium">{platform.badge}</span>
                <span className="text-slate-500">Verified Stack</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
