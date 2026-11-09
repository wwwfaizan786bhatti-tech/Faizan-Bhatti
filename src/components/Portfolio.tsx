import React, { useState } from 'react';
import { ArrowUpRight, Layers, Eye, CheckCircle2, X } from 'lucide-react';
import { SITE_CONFIG, PortfolioItem } from '../config/siteConfig';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filters = ['All', 'Google Ads', 'Meta Ads', 'Instagram', 'TikTok', 'Websites'];

  const filteredProjects = activeFilter === 'All'
    ? SITE_CONFIG.portfolio
    : SITE_CONFIG.portfolio.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
              <span>Client Deployments & Case Architectures</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Proven Methodologies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Selected Projects & Digital Experiences
            </h2>
            <p className="text-base text-slate-400 mt-3 max-w-2xl">
              A curated selection of performance advertising campaigns, lead funnels, and modern business websites engineered for growth.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-[#0A0F1E] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent opacity-80" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-[#070A12]/80 backdrop-blur-md text-blue-300 border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Industry Tag */}
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] text-slate-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                    {project.clientIndustry}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] text-slate-300 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Benchmark Metrics Strip */}
                  <div className="mt-4 pt-3 border-t border-white/[0.05] grid grid-cols-3 gap-2 text-center">
                    {project.metricsPlaceholder.map((m, mIdx) => (
                      <div key={mIdx} className="p-1.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                        <span className="block text-xs font-bold text-blue-400 tabular-nums">
                          {m.value}
                        </span>
                        <span className="block text-[9px] text-slate-400 truncate">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-blue-600 text-slate-200 hover:text-white font-medium text-xs tracking-wide transition-all duration-200 group-hover:border-blue-500/50"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#0B1021] border border-blue-500/30 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/[0.05] text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              <span>{selectedProject.category}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{selectedProject.clientIndustry}</span>
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-4">
              {selectedProject.title}
            </h3>

            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-6 border border-white/10">
              <img
                src={selectedProject.thumbnail}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 text-sm text-slate-300 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Business Challenge:
                </h4>
                <p className="text-slate-300 leading-relaxed bg-white/[0.02] p-3 rounded-lg border border-white/[0.06]">
                  {selectedProject.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Strategy & Execution:
                </h4>
                <p className="text-slate-300 leading-relaxed bg-white/[0.02] p-3 rounded-lg border border-white/[0.06]">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="mb-6 p-4 rounded-xl bg-blue-950/40 border border-blue-800/40">
              <span className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider block mb-3">
                Key Performance Benchmarks (Client Verified)
              </span>
              <div className="grid grid-cols-3 gap-3 text-center">
                {selectedProject.metricsPlaceholder.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#070A12]/80 border border-white/[0.08]">
                    <span className="block text-base sm:text-lg font-bold text-white tabular-nums">
                      {m.value}
                    </span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">
                      {m.label}
                    </span>
                    <span className="block text-[9px] text-blue-400 mt-1 italic">
                      {m.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
              <a
                href="#contact"
                onClick={() => {
                  setSelectedProject(null);
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs text-center tracking-wide shadow-md"
              >
                Discuss a Similar Project With Faizan
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-slate-300 text-xs font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
