import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Partners: React.FC = () => {
  return (
    <div className="py-16 bg-[#070A12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
            Brands & Businesses I've Worked With
          </span>
          <p className="text-[11px] text-slate-500 mt-1">
            Enterprise clients, direct-to-consumer innovators & strategic partners (Editable Showcase)
          </p>
        </div>

        {/* Logo strip with grayscale to color hover */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {SITE_CONFIG.partnerBrands.map((brand, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col items-center justify-center text-center cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-600/20 group-hover:border-blue-500/40 transition-colors mb-2">
                {brand.symbol}
              </div>
              <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                {brand.name}
              </span>
              <span className="text-[9px] text-slate-500 mt-0.5">
                {brand.tier}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
