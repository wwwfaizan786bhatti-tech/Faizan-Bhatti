import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, ShieldCheck, Award, Linkedin, MessageCircle } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const Hero: React.FC = () => {
  const { siteData } = useSite();
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting and gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-700/20 via-indigo-600/15 to-purple-800/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Experience & Trust Kicker (clean unboxed text with subtle separator) */}
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-blue-400">
              <span className="flex items-center gap-1.5 py-1 px-3 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300">
                <Award className="w-3.5 h-3.5 text-blue-400" />
                20 Years of Professional Excellence
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400 hidden sm:inline">Global Marketing & Web Authority</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] text-balance">
              Transforming Businesses Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200">
                Digital Marketing
              </span>{' '}
              & Technology.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed max-w-2xl">
              Hi, I'm <strong className="text-white font-semibold">Faizan Bhatti</strong> — A Digital Marketing Expert with{' '}
              <span className="text-blue-400 font-semibold">20 Years of Experience</span> in Performance Marketing, Paid Advertising, Business Growth, and Website Development.
            </p>

            {/* Supporting Text */}
            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
              I help businesses build powerful digital identities, attract high-quality customers, generate leads, increase conversions, and achieve measurable online growth through intelligent marketing strategies.
            </p>

            {/* Expertise Tags (Unboxed clean text) */}
            <div className="pt-1 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm font-medium text-slate-300">
              <span className="text-blue-400 font-semibold">Specializations:</span>
              <span>Google Ads</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Meta Ads</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Instagram Ads</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>TikTok Ads</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Website Development</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm tracking-wide shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Let's Grow Your Business</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('#expertise')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-200 hover:text-white font-medium text-sm transition-all duration-200"
              >
                <span>Explore My Expertise</span>
              </button>

              <a
                href={siteData.contact.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                title="Connect with Faizan Bhatti on LinkedIn"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#0A66C2]/15 hover:bg-[#0A66C2]/30 border border-[#0A66C2]/40 text-blue-300 hover:text-white font-medium text-sm transition-all duration-200"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2] fill-[#0A66C2]" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>

            {/* Key trust bullets */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Data-Driven ROI Focus</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Cross-Platform Strategy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Full-Stack Web Engineering</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Portrait & Visual Identity */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Glowing backdrop rings */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-blue-600/25 via-indigo-600/20 to-purple-600/15 blur-2xl -z-10" />
            <div className="absolute inset-0 border border-blue-500/20 rounded-full scale-105 pointer-events-none animate-pulse -z-10" />

            {/* Profile Frame */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-3xl p-2 bg-gradient-to-b from-blue-500/30 via-white/10 to-transparent shadow-2xl shadow-blue-950/80">
              <div className="relative overflow-hidden rounded-[22px] bg-[#0A0F1F] aspect-square flex items-center justify-center">
                <img
                  src="/assets/aistudio/my_1_pic_9c84b1e7.png"
                  alt="Faizan Bhatti – Digital Marketing Expert & Performance Strategist"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback container if image fails
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="flex flex-col items-center justify-center p-8 text-center text-slate-300">
                          <div class="w-20 h-20 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-2xl font-bold mb-4">FB</div>
                          <h3 class="text-xl font-bold text-white">Faizan Bhatti</h3>
                          <p class="text-xs text-slate-400 mt-1">Digital Marketing & Performance Strategist</p>
                        </div>
                      `;
                    }
                  }}
                />

                {/* Subtle bottom gradient scrim */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070A12] via-[#070A12]/60 to-transparent pointer-events-none" />

                {/* Floating identity pill at bottom of photo */}
                <div className="absolute bottom-4 left-4 right-4 py-2.5 px-4 rounded-xl bg-[#0B132B]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white tracking-wide">FAIZAN BHATTI</span>
                    <span className="text-[10px] text-blue-400 font-medium">Digital Marketing & Web Specialist</span>
                  </div>
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-blue-600/30 text-blue-300 border border-blue-500/40">
                    20 Years
                  </span>
                </div>
              </div>

              {/* Floating Mini Stat Cards */}
              <div className="absolute -top-3 -right-3 sm:-right-5 py-2 px-3.5 rounded-xl bg-[#0D162B]/90 backdrop-blur-md border border-blue-500/30 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Performance ROI</span>
                  <span className="text-[10px] text-slate-400">High-Converting Funnels</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-3 sm:-left-5 py-2 px-3.5 rounded-xl bg-[#0D162B]/90 backdrop-blur-md border border-indigo-500/30 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Full-Funnel Tracking</span>
                  <span className="text-[10px] text-slate-400">GA4 & Meta CAPI Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
