import React, { useState } from 'react';
import { blogPosts } from '../data/blogData';
import ArticleModal from './ArticleModal';
import { BookOpen, Clock, ArrowRight, User } from 'lucide-react';

export default function Blog({ onOpenQuote }) {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section id="blog" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded border border-slate-200">
            <BookOpen className="w-3.5 h-3.5 text-slate-700" />
            <span>Practical Plumbing Knowledge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Trade Insights & Maintenance Guides
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Practical advice from our licensed plumbers on avoiding water damage, maintaining optimal water pressure, and choosing long-lasting fixtures.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="craft-card rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/90 text-slate-800 border border-slate-200">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-2 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-700">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Modal */}
      {activeArticle && (
        <ArticleModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
          onOpenQuote={onOpenQuote}
        />
      )}
    </section>
  );
}
