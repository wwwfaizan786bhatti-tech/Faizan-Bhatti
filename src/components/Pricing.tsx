import React from 'react';
import { CheckCircle2, ArrowRight, MessageCircle, ShieldCheck, Zap, Tag } from 'lucide-react';
import { PricingPackage } from '../config/siteConfig';

interface PricingProps {
  packages: PricingPackage[];
  onSelectPackage: (packageName: string) => void;
  whatsappNumber: string;
}

export const Pricing: React.FC<PricingProps> = ({ packages, onSelectPackage, whatsappNumber }) => {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-[#080C16] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-blue-400 mb-4 shadow-sm">
            <Tag className="w-3.5 h-3.5 text-blue-400" />
            <span>سروسز چارجز · Official Services Pricing (PKR)</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Digital Marketing & Web Development Charges
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            شفاف سروس فیس (Transparent Service Rates) — All service charges are explicitly listed in <strong className="text-blue-400">Pakistani Rupees (PKR)</strong>. Direct management and strategy execution by Faizan Bhatti.
          </p>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full mt-5" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => {
            const isFeatured = pkg.id === 'pkg-google-ads' || pkg.id === 'pkg-meta-ads';

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#0E1733] to-[#0A1024] border-2 border-blue-500/80 shadow-2xl shadow-blue-900/40 -translate-y-1.5'
                    : 'bg-[#0B1020] border border-white/[0.1] hover:border-blue-500/50 hover:bg-[#0D1429]'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popularBadge && (
                  <div className="absolute -top-3.5 left-8">
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 flex items-center gap-1.5 border border-white/20">
                      <Zap className="w-3 h-3 fill-current" />
                      {pkg.popularBadge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Category & Serial */}
                  <div className="flex items-center justify-between mb-3 mt-1">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-700/40 text-[11px] font-bold uppercase tracking-wider text-blue-300">
                      {pkg.platform} Service
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-2 tracking-tight">
                    {pkg.name}
                  </h3>

                  <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  {/* High-Visibility Price Highlight Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#070B18] border-2 border-blue-500/40 shadow-inner mb-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
                    
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-blue-400 flex items-center gap-1.5">
                        <span>سروس چارجز</span>
                        <span className="text-slate-500">·</span>
                        <span>Service Charges</span>
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        PKR Rate
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2.5 mt-2">
                      <span className="text-xs font-extrabold text-blue-400 tracking-wider">
                        PKR
                      </span>
                      <span className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight tabular-nums">
                        {pkg.pricePKR}
                      </span>
                      <span className="text-xs text-slate-300 font-semibold">
                        / {pkg.billingPeriod}
                      </span>
                    </div>

                    <div className="mt-2 pt-2 border-t border-white/[0.08] text-[11px] text-slate-300 flex items-center justify-between">
                      <span>فیس / Fees:</span>
                      <strong className="text-white font-semibold">PKR {pkg.pricePKR} ({pkg.billingPeriod})</strong>
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-2">
                      Included Deliverables & Strategy:
                    </span>
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-6 border-t border-white/[0.08]">
                  <p className="text-[11px] text-slate-300 mb-3">
                    <strong className="text-white not-italic">Ideal for:</strong> {pkg.recommendedFor}
                  </p>

                  <button
                    onClick={() => onSelectPackage(pkg.name)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50'
                        : 'bg-white/[0.08] hover:bg-blue-600 text-white border border-white/[0.15]'
                    }`}
                  >
                    <span>Book Service (PKR {pkg.pricePKR})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(pkg.whatsappMessage + ` My budget is PKR ${pkg.pricePKR}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 hover:text-emerald-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Inquire via WhatsApp (PKR {pkg.pricePKR})</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Retainer Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#0B1124] border-2 border-blue-500/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                  Custom Enterprise Growth Retainer
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                  Multi-Channel
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                Need a Custom Combined Package? (Google + Meta + Website)
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Combining Google Ads + Meta Ads + High-Speed Website Engineering? Contact directly for a bundled PKR corporate retainer quote.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Faizan! I need a custom multi-channel growth retainer (Google Ads + Meta Ads + Website Development). Let's discuss pricing in PKR.")}`}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-lg shadow-blue-600/25 transition-all shrink-0"
          >
            Get Custom PKR Quote on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
