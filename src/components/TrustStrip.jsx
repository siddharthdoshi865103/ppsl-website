import React from 'react';
import { Home, Wrench, HeartHandshake, CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';

export default function TrustStrip() {
  return (
    <section className="bg-white py-14 sm:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Layout (1 large feature card + 2 complementary cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* ── CARD 1: Deep Architectural Anchor Card (6 Cols) ── */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            {/* Ambient deep light reflection */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-sky-400 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  <Home className="w-3.5 h-3.5" />
                  <span>Comprehensive Coverage</span>
                </div>
                <span className="text-xs font-bold text-slate-400">Since 2012</span>
              </div>

              <div className="space-y-3">
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  500+ Properties
                </div>
                <h3 className="text-xl font-bold text-sky-300">
                  Domestic & Commercial Engineering
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
                  Trusted across luxury coastal villas, smart city residences, commercial office parks, and restaurants across all 9 districts of Mauritius.
                </p>
              </div>

              {/* District Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['Grand Baie', 'Port Louis', 'Ebene Cybercity', 'Tamarin & Black River', 'Moka Smart City'].map((d) => (
                  <span key={d} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-sky-400 flex-shrink-0" />
                    <span>{d}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between relative z-10">
              <div className="flex items-center space-x-2 text-xs text-slate-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Licensed Trade Contractors</span>
              </div>

              <a 
                href="#services"
                className="text-xs font-bold text-sky-400 hover:text-white transition-colors flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ── CARD 2 & 3: Side Stacked Cards (6 Cols) ── */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Card 2: Careful Workmanship */}
            <div className="metallic-card rounded-3xl p-7 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    Prompt Mobile Dispatch
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  24/7 Rapid Diagnostics
                </div>

                <h4 className="text-sm font-bold text-slate-800">
                  Careful Workmanship & Tidy Execution
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Equipped service vans deployed with calibrated acoustic leak detectors, replacement valves, and precision PPR welding equipment for immediate remediation.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-700">
                <span>Shoe covers & drop cloths guaranteed</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </div>

            {/* Card 3: Clear Communication */}
            <div className="metallic-card rounded-3xl p-7 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                    Zero Surprises
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  100% Upfront Pricing
                </div>

                <h4 className="text-sm font-bold text-slate-800">
                  Clear Communication & Transparent Scopes
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  No unexpected callout fees. We diagnose the root cause, explain your repair options in plain English, and provide a fixed written quote before turning a wrench.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900">
                <span>Written quote before any work starts</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
