import React, { useState } from 'react';
import { GalleryItem } from '../config/siteConfig';
import { Eye, ArrowUpRight, CheckCircle2, X, Sparkles } from 'lucide-react';

interface AdGalleryProps {
  items: GalleryItem[];
  whatsappNumber: string;
}

export const AdGallery: React.FC<AdGalleryProps> = ({ items, whatsappNumber }) => {
  const [activePlatform, setActivePlatform] = useState<string>('All');
  const [previewImage, setPreviewImage] = useState<GalleryItem | null>(null);

  const platforms = ['All', 'Google Ads', 'Meta Ads', 'TikTok Ads', 'Instagram Ads'];

  const filteredItems = activePlatform === 'All'
    ? items
    : items.filter(item => item.platform === activePlatform);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
              <span>Verified Campaign Creatives</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Google, Meta & TikTok Ads Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Campaign Proof & Ad Creatives Gallery
            </h2>
            <p className="text-base text-slate-400 mt-3 max-w-2xl">
              Authentic ad creative layouts, live campaign screenshots, and verified conversion metrics deployed across Google, Meta, and TikTok.
            </p>
          </div>

          {/* Platform Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
            {platforms.map((plat) => (
              <button
                key={plat}
                onClick={() => setActivePlatform(plat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activePlatform === plat
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {plat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id || idx}
              className="group relative rounded-2xl overflow-hidden bg-[#0A0F1E] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div
                onClick={() => setPreviewImage(item)}
                className="relative aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent opacity-80" />

                {/* Platform Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-[#070A12]/80 backdrop-blur-md text-blue-300 border border-white/10">
                    {item.platform}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="px-3.5 py-1.5 rounded-xl bg-blue-600/90 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Screenshot</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Results Metric Banner */}
                  <div className="mb-3 p-2.5 rounded-xl bg-blue-950/40 border border-blue-800/40 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-blue-300 tabular-nums">
                      {item.resultsMetric}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {item.date}
                    </span>
                  </div>

                  {/* Service Charge Badge */}
                  <div className="mb-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-bold text-emerald-400">
                    <span>سروس چارجز:</span>
                    <span>
                      {item.platform === 'Google Ads'
                        ? 'PKR 50,000 / ماہانہ'
                        : item.platform === 'Meta Ads'
                        ? 'PKR 40,000 / ماہانہ'
                        : item.platform === 'Instagram Ads'
                        ? 'PKR 35,000 / ماہانہ'
                        : item.platform === 'TikTok Ads'
                        ? 'PKR 45,000 / ماہانہ'
                        : 'PKR Retainer'}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => setPreviewImage(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Enlarge Proof</span>
                  </button>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Faizan! I saw your campaign proof: "${item.title}". I would like to run a similar campaign for my business.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <span>Run Similar Ad</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screenshot Modal */}
      {previewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl rounded-2xl bg-[#0B1021] border border-blue-500/40 p-4 sm:p-6 shadow-2xl max-h-[95vh] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
              <div>
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">
                  {previewImage.platform} Campaign Screenshot
                </span>
                <h3 className="text-lg font-bold text-white">
                  {previewImage.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewImage(null)}
                className="p-2 rounded-xl bg-white/[0.05] text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto rounded-xl border border-white/[0.08] bg-black/60 flex items-center justify-center">
              <img
                src={previewImage.imageUrl}
                alt={previewImage.title}
                className="max-h-[68vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-blue-600/20 text-blue-300 font-bold border border-blue-500/30">
                  {previewImage.resultsMetric}
                </span>
                <span className="text-slate-400">{previewImage.caption}</span>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Faizan! I am interested in your campaign strategy: "${previewImage.title}". Let's discuss.`)}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs whitespace-nowrap shadow-md transition-all"
              >
                Discuss This Campaign Strategy
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
