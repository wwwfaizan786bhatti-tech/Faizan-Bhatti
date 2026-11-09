import React, { useState } from 'react';
import { Download, Check, Sparkles, FileText, ArrowRight, ShieldCheck, Target, Award } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface AboutProps {
  onOpenCvModal: () => void;
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCvModal, onOpenContact }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCv = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenCvModal();
  };

  const careerHighlights = [
    {
      year: "20-Year Trajectory",
      title: "Two Decades of Digital Marketing Mastery",
      description: "From early web development and search engine beginnings to complex multi-channel paid ad ecosystems and algorithmic scaling."
    },
    {
      year: "Cross-Platform Leadership",
      title: "Comprehensive Paid Advertising Architect",
      description: "Expert deployment across Google Ads (Search, PMax, YouTube), Meta Ads (Facebook & Instagram), and TikTok performance campaigns."
    },
    {
      year: "Technical Web Execution",
      title: "Full-Stack Development & Speed Optimization",
      description: "Building custom, conversion-optimized business websites and high-speed web infrastructure that maximizes paid traffic ROI."
    },
    {
      year: "Client Growth Partner",
      title: "Strategy Focused on Sustainable Unit Economics",
      description: "Dedicated to building long-term digital business assets, clean attribution tracking, and scalable customer acquisition pipelines."
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-[#070A12]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
            <span>Biography & Journey</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Strategic Partner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Meet Faizan Bhatti
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image, Monogram & Philosophy Card */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-blue-500/20 via-white/5 to-transparent border border-white/10 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#0A0F1F]">
                <img
                  src="/assets/aistudio/my_1_pic_9c84b1e7.png"
                  alt="Faizan Bhatti Portrait"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Lead Strategist
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mt-1">
                    Faizan Bhatti
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    20 Years in Performance Marketing & Web Technology
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Philosophy Quote Card */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] relative">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Professional Philosophy
              </span>
              <blockquote className="text-sm text-slate-200 italic leading-relaxed">
                "{SITE_CONFIG.brand.philosophy}"
              </blockquote>
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Faizan Bhatti</span>
                <span>Data-Driven Growth</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDownloadCv}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 hover:text-white font-medium text-xs tracking-wide transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View & Download Curriculum Vitae</span>
              </button>
            </div>
          </div>

          {/* Right Column: Detailed Biography & Career Highlights */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            {/* Bio paragraphs */}
            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {SITE_CONFIG.brand.mainBio.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "text-slate-100 font-medium text-lg sm:text-xl leading-relaxed" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Core Strengths Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Full-Funnel Strategy</h4>
                  <p className="text-xs text-slate-400 mt-1">Harmonizing search intent with high-converting landing experiences.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Server-Side Tracking</h4>
                  <p className="text-xs text-slate-400 mt-1">Ensuring 100% attribution accuracy via GA4 & Meta CAPI.</p>
                </div>
              </div>
            </div>

            {/* Career Highlights Timeline */}
            <div className="pt-6 border-t border-white/[0.08]">
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Career Highlights & Competencies
              </h3>
              
              <div className="space-y-6">
                {careerHighlights.map((highlight, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-blue-500/30 group">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-[#070A12] group-hover:scale-125 transition-transform" />
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block">
                      {highlight.year}
                    </span>
                    <h4 className="text-base font-semibold text-white mt-0.5">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Consultation CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/60 via-indigo-950/40 to-slate-900/60 border border-blue-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-semibold text-white">Ready to scale your business?</h4>
                <p className="text-xs text-slate-300 mt-0.5">Direct 1-on-1 strategic growth consulting with Faizan Bhatti.</p>
              </div>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs whitespace-nowrap shadow-md transition-all"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
