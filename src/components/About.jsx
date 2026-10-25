import React from 'react';
import { CheckCircle2, ArrowRight, Phone, ShieldCheck, Sparkles, MapPin, Wrench } from 'lucide-react';

export default function About({ onOpenQuote }) {
  const points = [
    {
      title: 'Tidy Worksite Pledge',
      desc: 'We wear clean shoe covers, lay protective drop cloths over your flooring, and leave every job site spotless.',
      tag: 'Cleanliness Guaranteed'
    },
    {
      title: 'Upfront Written Quotes',
      desc: 'No vague verbal numbers or surprising final bills. You approve a clear, fixed quote before any physical work starts.',
      tag: 'Zero Hidden Fees'
    },
    {
      title: 'Engineered for Mauritius Water',
      desc: 'From high lime scale to coastal air salinity and varying water pressures, we install pipes and valves rated for local conditions.',
      tag: 'Durable Materials'
    },
    {
      title: 'Direct Trade Communication',
      desc: 'You speak directly with experienced plumbing technicians who explain issues in plain English with practical recommendations.',
      tag: 'Jargon-Free'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left: Real Craft Photography */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                alt="PPSL Plumbing Specialists on site"
                className="w-full h-[460px] object-cover"
              />
            </div>

            {/* Inset Credential Card */}
            <div className="mt-4 craft-card rounded-xl p-4 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-700 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900">Certified Plumbing Workmanship</div>
                <div className="text-slate-500">Full pressure testing before physical handover</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-6">

            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-800 bg-white px-3 py-1 rounded border border-slate-200">
              <span>About PPSL · Perfect Plumbing Services Ltd</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Good Service Starts with Doing the Job Right.
              </h2>
              
              <p className="text-slate-600 text-base leading-relaxed">
                Plumbing issues shouldn't cause disruption or stress. PPSL was established to deliver straightforward, dependable plumbing services with honest advice, tidy execution, and long-lasting solutions.
              </p>
            </div>

            {/* 4 Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {points.map((pt, i) => (
                <div key={i} className="craft-card rounded-xl p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">{pt.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="btn-primary text-xs px-6 py-3.5"
              >
                Request an Upfront Quote
              </button>

              <a
                href="tel:+2305000000"
                className="btn-secondary text-xs px-5 py-3.5"
              >
                Call: +230 5000 0000
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
