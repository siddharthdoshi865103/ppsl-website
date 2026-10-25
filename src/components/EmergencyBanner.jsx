import React from 'react';
import { Phone, MessageSquare, ArrowRight, Clock, ShieldAlert } from 'lucide-react';

export default function EmergencyBanner({ onOpenQuote }) {
  return (
    <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded border border-amber-400/20">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Emergency & Scheduled Service</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Facing an Urgent Leak or Burst Pipe?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Don't let water damage escalate. Our mobile technicians are equipped with replacement valves and diagnostic gear ready for prompt dispatch across Mauritius.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto">
            <a
              href="tel:+2305000000"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-slate-950" />
              <span>Call: +230 5000 0000</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold bg-white text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <span>Request Non-Urgent Quote</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
