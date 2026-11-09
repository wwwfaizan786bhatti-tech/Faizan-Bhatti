import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#090D1A] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
            <span>Frequently Asked Questions</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Clarity & Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Common Inquiries & Answers
          </h2>
          <p className="text-base text-slate-400 mt-4 leading-relaxed max-w-2xl">
            Everything you need to know about working with Faizan Bhatti, campaign onboarding, international collaboration, and engagement structures.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {SITE_CONFIG.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border transition-all duration-200 overflow-hidden bg-[#0B1123]"
                style={{
                  borderColor: isOpen ? 'rgba(59, 130, 246, 0.4)' : 'rgba(255, 255, 255, 0.07)',
                }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-lg bg-white/[0.04] text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-400 bg-blue-500/10' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
