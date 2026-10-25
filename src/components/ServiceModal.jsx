import React from 'react';
import { X, CheckCircle, Clock, Building, ArrowRight, Phone, MessageSquare } from 'lucide-react';

export default function ServiceModal({ service, onClose, onSelectForQuote }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-dark/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge & Title */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-brand-primary uppercase tracking-wider mb-2">
            {service.badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
            {service.title}
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            {service.longDesc}
          </p>
        </div>

        {/* Service Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6 text-xs sm:text-sm">
          <div className="flex items-center space-x-2.5 text-slate-700">
            <Building className="w-4 h-4 text-brand-primary flex-shrink-0" />
            <div>
              <span className="text-slate-400 block text-[11px] font-medium uppercase">Scope</span>
              <span className="font-semibold">{service.propertyType}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2.5 text-slate-700">
            <Clock className="w-4 h-4 text-brand-primary flex-shrink-0" />
            <div>
              <span className="text-slate-400 block text-[11px] font-medium uppercase">Turnaround</span>
              <span className="font-semibold">{service.typicalDuration}</span>
            </div>
          </div>
        </div>

        {/* Feature List */}
        <div className="space-y-3 mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            What is Included & Solved:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feat, i) => (
              <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={() => {
              onClose();
              onSelectForQuote(service.title);
            }}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-brand-primary to-brand-navy rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <span>Request Quote for {service.title}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>

          <a
            href={`https://wa.me/23050000000?text=Hello%20PPSL,%20I%20need%20assistance%20with%20${encodeURIComponent(service.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 text-sm font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
          >
            <MessageSquare className="w-4 h-4 mr-2 text-emerald-600" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

      </div>
    </div>
  );
}
