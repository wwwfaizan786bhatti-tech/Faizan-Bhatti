import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, User, X } from 'lucide-react';
import { SITE_CONFIG, BlogPostItem } from '../config/siteConfig';

export const BlogInsights: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<BlogPostItem | null>(null);

  const categories = [
    'All',
    'Google Ads',
    'Meta Ads',
    'Performance Marketing',
    'Website Development'
  ];

  const filteredPosts = activeCategory === 'All'
    ? SITE_CONFIG.blogPosts
    : SITE_CONFIG.blogPosts.filter(p => p.category === activeCategory);

  return (
    <section id="insights" className="relative py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
              <span>Articles & Strategy Breakdowns</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Marketing Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Insights, Strategies & Digital Growth.
            </h2>
            <p className="text-base text-slate-400 mt-3 max-w-2xl">
              Practical analysis, algorithmic advertising breakdowns, and technical web architecture lessons from 30 years in the trenches.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl p-6 sm:p-8 bg-[#0B1021] border border-white/[0.08] hover:border-blue-500/40 hover:bg-[#0D152C] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <span className="text-blue-400 font-semibold">{post.category}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {post.publishDate}
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <User className="w-3.5 h-3.5 text-blue-400" />
                  <span>By {post.author}</span>
                </div>

                <button
                  onClick={() => setSelectedArticle(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl rounded-2xl bg-[#0B1021] border border-blue-500/30 p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/[0.05] text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
              <span className="text-blue-400 font-semibold">{selectedArticle.category}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{selectedArticle.publishDate}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight mb-6">
              {selectedArticle.title}
            </h2>

            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/30 mb-6">
              <p className="text-sm font-medium text-blue-200 italic">
                "{selectedArticle.excerpt}"
              </p>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {selectedArticle.content.map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-slate-400">Written by Faizan Bhatti · Digital Marketing Strategist</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="py-2.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
