import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG, TestimonialItem } from '../config/siteConfig';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = SITE_CONFIG.testimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative py-24 sm:py-32 bg-[#080C16] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
            <span>Client Feedback & Testimonials</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Verified Engagements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Client Endorsements & Strategic Impact
          </h2>
          <p className="text-base text-slate-400 mt-4 leading-relaxed">
            Real feedback from business leaders and executives who partnered with Faizan Bhatti to scale paid acquisition and build digital authority.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-[#0B1124] border border-white/[0.09] shadow-2xl overflow-hidden">
            <Quote className="absolute top-8 right-8 w-20 h-20 text-white/[0.03] pointer-events-none" />

            {/* Verification notice pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-medium mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Client Review (Verified / Editable Placeholder Format)</span>
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg sm:text-2xl font-display font-medium text-slate-100 leading-relaxed italic mb-8">
              "{current.feedback}"
            </blockquote>

            {/* Author info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-white/[0.08] gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.clientName}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/40"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-base font-bold text-white">
                    {current.clientName}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {current.role} at <span className="text-blue-400 font-semibold">{current.businessName}</span>
                  </p>
                  <span className="text-[11px] text-slate-500">
                    {current.industry} · {current.date}
                  </span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonial"
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs font-mono text-slate-400 px-2 tabular-nums">
                  0{currentIndex + 1} / 0{testimonials.length}
                </div>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
