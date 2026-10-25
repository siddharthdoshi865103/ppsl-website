import React, { useState } from 'react';
import { MapPin, Clock, Phone, ArrowRight, ShieldCheck, Wrench, CheckCircle2 } from 'lucide-react';

export default function DistrictCoverage({ onOpenQuote }) {
  const [selectedDistrict, setSelectedDistrict] = useState('north');

  const districts = [
    {
      id: 'north',
      name: 'Grand Baie & North',
      areas: 'Grand Baie, Pereybere, Trou aux Biches, Pereybere, Calodyne',
      dispatchTime: '30 – 45 Minutes',
      vans: 2,
      challenges: 'High coastal air humidity & hard calcium deposits. Requires anti-corrosion brass fittings.',
      popularJob: 'Villa ensuite modernizations & booster pump pressure calibration.'
    },
    {
      id: 'port-louis',
      name: 'Port Louis Capital',
      areas: 'Port Louis Business District, Pailles, Cassis, Bell Village',
      dispatchTime: '25 – 40 Minutes',
      vans: 2,
      challenges: 'High-density commercial lines, older infrastructure piping, after-hours business access.',
      popularJob: 'Emergency leak shutoffs & commercial grease line maintenance.'
    },
    {
      id: 'central',
      name: 'Ebene & Plaines Wilhems',
      areas: 'Ebene Cybercity, Rose Hill, Quatre Bornes, Curepipe, Beau Bassin',
      dispatchTime: '30 – 45 Minutes',
      vans: 3,
      challenges: 'Multi-storey apartment water pressure balancing & high-rise concealed piping routing.',
      popularJob: 'Apartment pressure balancing & linear bathroom drainage overhauls.'
    },
    {
      id: 'west',
      name: 'Tamarin & Black River',
      areas: 'Tamarin, Rivière Noire, Flic-en-Flac, Le Morne, La Preneuse',
      dispatchTime: '35 – 50 Minutes',
      vans: 2,
      challenges: 'Coastal saline air accelerating metal tap corrosion. UV-stabilized PPR required for outdoor solar.',
      popularJob: 'Luxury villa wet-room renovations & thermostatic rainfall showers.'
    },
    {
      id: 'moka',
      name: 'Moka Smart City & Centre',
      areas: 'Moka, Saint Pierre, Telfair, Helvetia, Bagatelle',
      dispatchTime: '30 – 40 Minutes',
      vans: 2,
      challenges: 'New residential builds requiring compliance certification and smart water metering integration.',
      popularJob: 'Pre-handover pressure testing & sanitaryware installation.'
    }
  ];

  const current = districts.find(d => d.id === selectedDistrict) || districts[0];

  return (
    <section id="coverage" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-md border border-sky-200">
            <MapPin className="w-3.5 h-3.5 text-sky-700" />
            <span>Interactive Island Dispatch Network</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Prompt Service Across All Districts
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Select your region to see live technician standby times, localized water challenges, and prompt dispatch options.
          </p>
        </div>

        {/* ── Interactive District Selector Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* District Buttons (5 Cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {districts.map((d) => {
              const isActive = selectedDistrict === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDistrict(d.id)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-[1.01]'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold">{d.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      )}
                    </div>
                    <div className={`text-xs mt-0.5 truncate max-w-[260px] ${isActive ? 'text-slate-400' : 'text-slate-500'}`}>
                      {d.areas}
                    </div>
                  </div>

                  <div className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                    isActive ? 'bg-sky-600 text-white' : 'bg-white text-sky-700 border border-slate-200'
                  }`}>
                    {d.dispatchTime.split('–')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* District Real-Time Information Panel (7 Cols) */}
          <div className="lg:col-span-7 craft-card rounded-3xl p-7 sm:p-9 bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <MapPin className="w-4 h-4 text-sky-700" />
                  <span>District Coverage Hub</span>
                </div>

                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{current.vans} Mobile Units Assigned</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {current.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  Serving: {current.areas}
                </p>
              </div>

              {/* Localized Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                  <span className="text-[11px] uppercase font-bold text-slate-400 block">Avg Arrival Window</span>
                  <div className="text-lg font-black text-sky-800 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-sky-700" />
                    <span>{current.dispatchTime}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                  <span className="text-[11px] uppercase font-bold text-slate-400 block">Most Frequent Job</span>
                  <div className="text-xs font-bold text-slate-800">
                    {current.popularJob}
                  </div>
                </div>
              </div>

              {/* District Local Water Notes */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                <span className="text-[11px] uppercase font-bold text-slate-400 block">Regional Water & Climate Factors:</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {current.challenges}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenQuote(`District Dispatch Booking: ${current.name}`)}
                className="btn-primary w-full sm:flex-1 text-xs py-3.5 flex items-center justify-center space-x-2"
              >
                <span>Book Technician for {current.name.split('&')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/23050000000?text=${encodeURIComponent(`Hello PPSL! I am located in ${current.name} (${current.areas}). I need plumbing assistance.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto text-xs py-3.5 flex items-center justify-center space-x-2"
              >
                <span>WhatsApp Regional Desk</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
