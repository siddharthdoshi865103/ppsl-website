import React from 'react';
import { X, Clock, Calendar, User, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ArticleModal({ article, onClose, onOpenQuote }) {
  if (!article) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-brand-dark/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-9 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge & Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
          <span className="px-3 py-1 rounded-full font-bold uppercase tracking-wider bg-sky-100 text-brand-primary">
            {article.category}
          </span>
          <span className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1" />
            {article.readTime}
          </span>
          <span className="flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1" />
            {article.date}
          </span>
          <span className="flex items-center">
            <User className="w-3.5 h-3.5 mr-1" />
            {article.author}
          </span>
        </div>

        {/* Article Headline */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-4">
          {article.title}
        </h2>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-6 aspect-video bg-slate-100">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Summary Lead */}
        <p className="text-slate-700 text-base font-medium leading-relaxed mb-6 p-4 rounded-2xl bg-sky-50/60 border border-sky-100">
          {article.summary}
        </p>

        {/* Key Takeaways Box */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
            Key Recommendations from PPSL Experts:
          </h4>
          <div className="space-y-2">
            {article.keyPoints.map((point, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full Text */}
        <div className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line mb-8">
          {article.fullContent}
        </div>

        {/* CTA Footer in Article */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 -mx-6 -mb-6 sm:-mx-9 sm:-mb-9 p-6 sm:p-7 rounded-b-3xl">
          <div>
            <div className="text-sm font-bold text-brand-navy">Dealing with this issue right now?</div>
            <div className="text-xs text-slate-500">Contact our certified plumbers for a swift diagnostic.</div>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-brand-primary hover:bg-brand-navy rounded-xl shadow-md transition-colors"
          >
            Request Service
          </button>
        </div>

      </div>
    </div>
  );
}
