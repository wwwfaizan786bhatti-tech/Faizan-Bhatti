import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { siteData } = useSite();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-xl bg-[#0B1124] border border-emerald-500/30 text-white text-xs shadow-2xl animate-fade-in">
          <span>Chat directly with Faizan on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={siteData.contact.socials.whatsapp}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Direct WhatsApp Chat with Faizan Bhatti"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-2xl shadow-emerald-950/80 hover:scale-108 hover:shadow-emerald-500/40 transition-all duration-200 group"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
};
