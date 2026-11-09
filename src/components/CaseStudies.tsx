import React, { useState } from 'react';
import { TrendingUp, CheckCircle2, ChevronRight, BarChart2, ShieldCheck, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, CaseStudyItem } from '../config/siteConfig';

export const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const currentStudy = SITE_CONFIG.caseStudies[activeTab];

  return (
    <section id="case-studies" className="relative py-24 sm:py-32 bg-[#090D1A] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
            <span>In-Depth Execution Case Studies</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Measurable Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Real Strategies. Measurable Business Growth.
          </h2>
          <p className="text-base text-slate-400 mt-4 leading-relaxed">
            Detailed breakdowns of commercial challenges, cross-channel advertising architectures, and verifiable business outcomes.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Case Study Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {SITE_CONFIG.caseStudies.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === idx
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/40'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              <span>Case {idx + 1}: {study.clientIndustry}</span>
            </button>
          ))}
        </div>

        {/* Case Study Deep Dive Card */}
        <div className="rounded-3xl bg-[#0B1123] border border-white/[0.09] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle top ambient glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          {/* Title & Platforms */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                <span>Industry: {currentStudy.clientIndustry}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-300">Verified Strategic Architecture</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {currentStudy.title}
              </h3>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2 shrink-0">
              <span className="text-xs text-slate-400 font-medium">Stack:</span>
              <span className="text-xs font-semibold text-blue-300">{currentStudy.platform}</span>
            </div>
          </div>

          {/* Metrics Grid: ROAS, CPC, CTR, Conversion Rate, Leads, Revenue Growth */}
          <div className="my-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-4">
              Verified Performance Benchmarks & Results
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="text-xl sm:text-2xl font-display font-extrabold text-blue-400 tabular-nums block">
                  {currentStudy.metrics.roas}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">Return on Ad Spend</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="text-xl sm:text-2xl font-display font-extrabold text-white tabular-nums block">
                  {currentStudy.metrics.cpc}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">Avg Cost Per Click</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="text-xl sm:text-2xl font-display font-extrabold text-white tabular-nums block">
                  {currentStudy.metrics.ctr}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">Click-Through Rate</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="text-xl sm:text-2xl font-display font-extrabold text-indigo-400 tabular-nums block">
                  {currentStudy.metrics.conversionRate}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">Conversion Rate</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="text-xl sm:text-2xl font-display font-extrabold text-emerald-400 tabular-nums block">
                  {currentStudy.metrics.leadsGenerated}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">Volume Acquired</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="text-xl sm:text-2xl font-display font-extrabold text-purple-400 tabular-nums block">
                  {currentStudy.metrics.revenueGrowth}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">Commercial Lift</span>
              </div>
            </div>
          </div>

          {/* Breakdown Sections: Challenge, Strategy, Execution, Lessons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                The Business Challenge
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentStudy.businessChallenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                The Marketing Strategy
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentStudy.marketingStrategy}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Campaign Execution
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentStudy.campaignExecution}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Key Strategic Lesson Learned
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                "{currentStudy.lessonsLearned}"
              </p>
            </div>
          </div>

          {/* Bottom Callout & Note */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{currentStudy.verifiedStatus}</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs tracking-wide transition-all shadow-md"
            >
              <span>Apply This Framework to Your Brand</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
