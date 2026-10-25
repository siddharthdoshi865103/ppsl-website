import React from 'react';
import { Phone, MessageSquare, Calculator } from 'lucide-react';

export default function MobileActionDock({ onOpenQuote }) {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 px-3 pt-2 pb-[calc(0.6rem+env(safe-area-inset-bottom,0px))] shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        
        {/* Call Now */}
        <a
          href="tel:+2305000000"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-slate-100 active:bg-slate-200 text-slate-900 border border-slate-200/80 transition-colors"
        >
          <Phone className="w-4 h-4 text-sky-700 mb-0.5" />
          <span className="text-[11px] font-extrabold tracking-tight">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/23050000000?text=Hello%20PPSL,%20I%20need%20plumbing%20assistance."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-emerald-50 active:bg-emerald-100 text-emerald-900 border border-emerald-200/80 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-extrabold tracking-tight">WhatsApp</span>
        </a>

        {/* Get Instant Quote */}
        <button
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-slate-900 active:bg-slate-800 text-white shadow-md transition-colors"
        >
          <Calculator className="w-4 h-4 text-sky-400 mb-0.5" />
          <span className="text-[11px] font-extrabold tracking-tight">Get Quote</span>
        </button>

      </div>
    </div>
  );
}
