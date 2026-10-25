import React, { useState } from 'react';
import { 
  ArrowRight, 
  Phone, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Wrench, 
  Star, 
  CheckCircle2, 
  Sparkles, 
  Droplet,
  ChevronRight,
  Flame,
  Info
} from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const [selectedIssue, setSelectedIssue] = useState('leak');
  const [activeHotspot, setActiveHotspot] = useState(null);

  const quickIssues = [
    { id: 'leak', label: 'Emergency Leak', time: 'Immediate (Under 45m)', guide: 'Rs 1,200 – 3,500', icon: Droplet },
    { id: 'bath', label: 'Bathroom Renovation', time: '1 – 4 Days', guide: 'Rs 8,000 – 25,000+', icon: Wrench },
    { id: 'pressure', label: 'Low Water Pressure', time: 'Same-day Diagnosis', guide: 'Rs 2,000 – 4,500', icon: Flame },
    { id: 'pipe', label: 'Pipework Manifold', time: 'Half to 1 Day', guide: 'Rs 3,000 – 12,000', icon: ShieldCheck },
  ];

  const currentIssue = quickIssues.find(i => i.id === selectedIssue) || quickIssues[0];

  const hotspots = [
    { id: 1, top: '28%', left: '55%', title: 'Thermostatic Rainfall Column', desc: 'Pre-calibrated 3.5 Bar pressure balanced mixing valve.' },
    { id: 2, top: '78%', left: '42%', title: 'SS316 Linear Floor Drain', desc: 'High-flow anti-odor water seal trap with hair catcher.' },
    { id: 3, top: '48%', left: '78%', title: 'Concealed PPR Manifold', desc: 'Sound-dampened PN20 hot/cold distribution lines.' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative hero-luxury-bg pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80 overflow-hidden">
      {/* Decorative architectural background line accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0284C7 1px, transparent 1px)',
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Top Bar Status Strip ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm text-xs font-bold text-slate-800">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>Mauritius Dispatch Network Active</span>
            <span className="text-slate-300">|</span>
            <span className="text-sky-700 font-semibold hidden sm:inline">Port Louis · Grand Baie · Moka · Tamarin</span>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-700" />
              Mon–Sat 7:30 AM–6:00 PM · 24/7 Emergency
            </span>
            <span className="flex items-center gap-1.5 font-bold text-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Licensed & Insured
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* ══════════════════════════════════════════
              LEFT: Bold Editorial Pitch & Interactive HUD
              ══════════════════════════════════════════ */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-100 text-sky-900 text-[11px] font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Premier Plumbing Engineering</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.05]">
                Flow better. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-sky-600 to-cyan-600">
                  Live worry-free.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed pt-1">
                From urgent leak repairs to luxury bathroom architectural renovations, PPSL keeps homes and commercial businesses running smoothly with certified workmanship.
              </p>
            </div>

            {/* ── Interactive Live Issue Configurator directly in Hero ── */}
            <div className="metallic-card p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-sky-700" />
                  <span>Select Your Plumbing Need:</span>
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100">
                  Live Technician Standby
                </span>
              </div>

              {/* 4 Interactive Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {quickIssues.map((issue) => {
                  const Icon = issue.icon;
                  const isActive = selectedIssue === issue.id;
                  return (
                    <button
                      key={issue.id}
                      type="button"
                      onClick={() => setSelectedIssue(issue.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        isActive
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-[1.02]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <Icon className={`w-4 h-4 mb-1.5 ${isActive ? 'text-sky-400' : 'text-sky-700'}`} />
                      <div className="text-xs font-bold leading-tight">{issue.label}</div>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Live Estimate Banner */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-sky-50/70 border border-sky-100 text-xs">
                <div>
                  <div className="text-slate-500 font-medium">Estimated Arrival / Scope:</div>
                  <div className="font-bold text-slate-900">{currentIssue.time}</div>
                </div>

                <div className="sm:border-l sm:border-sky-200 sm:pl-4">
                  <div className="text-slate-500 font-medium">Typical Guide Bracket:</div>
                  <div className="font-extrabold text-sky-800 text-sm">{currentIssue.guide}</div>
                </div>

                <button
                  onClick={() => onOpenQuote(currentIssue.label)}
                  className="w-full sm:w-auto px-4 py-2 rounded-lg bg-sky-700 text-white font-bold hover:bg-sky-800 transition-colors shadow-xs ml-auto"
                >
                  Book This Issue
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                onClick={() => onOpenQuote()}
                className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-4 shadow-lg hover:shadow-xl"
              >
                <span>Request an Upfront Quote</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>

              <a
                href="tel:+2305000000"
                className="btn-secondary inline-flex items-center justify-center gap-2.5 text-base px-6 py-4"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Call Emergency: +230 5000 0000</span>
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
                  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80',
                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80',
                ].map((img, i) => (
                  <img key={i} src={img} alt="Client avatar" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs" />
                ))}
              </div>
              <div className="text-xs text-slate-600">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />)}
                  <span className="font-extrabold text-slate-900 ml-1">4.9 / 5</span>
                </div>
                <span className="text-slate-500">Over 180+ verified residential & commercial clients in Mauritius</span>
              </div>
            </div>

          </div>

          {/* ══════════════════════════════════════════
              RIGHT: Architectural Showcase with Interactive Hotspots
              ══════════════════════════════════════════ */}
          <div className="lg:col-span-5 relative">
            
            {/* The Image Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80"
                alt="Luxury Bathroom Installation by PPSL"
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              {/* ── Interactive Hotspots on the Image ── */}
              {hotspots.map((spot) => (
                <div
                  key={spot.id}
                  style={{ top: spot.top, left: spot.left }}
                  className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <button
                    onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                    className="w-7 h-7 rounded-full bg-white/90 text-sky-800 flex items-center justify-center shadow-lg border border-sky-400 hotspot-pulse hover:scale-110 transition-transform"
                    aria-label={spot.title}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
                  </button>

                  {/* Hotspot Popover */}
                  {activeHotspot === spot.id && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-slate-950/95 text-white p-3 rounded-xl shadow-2xl border border-white/20 text-xs backdrop-blur-md animate-fadeIn z-30">
                      <div className="font-bold text-sky-400 mb-0.5">{spot.title}</div>
                      <div className="text-slate-300 text-[11px] leading-snug">{spot.desc}</div>
                    </div>
                  )}
                </div>
              ))}

              {/* Bottom Card: Live Technician Dispatch HUD */}
              <div className="absolute bottom-4 inset-x-4">
                <div className="luxury-glass rounded-2xl p-4 shadow-xl space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-black text-slate-900">PPSL Master Standards</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded">
                      Tested 100%
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-snug">
                    Concealed piping alignment, acoustic insulation, and high-pressure manifold balancing on every project.
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200/80 text-[11px]">
                    <span className="text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-sky-700 flex-shrink-0" />
                      <span>Grand Baie · Tamarin · Port Louis</span>
                    </span>
                    <a href="#gallery" onClick={(e) => scrollTo(e, '#gallery')} className="font-bold text-sky-700 hover:text-sky-800">
                      View Project Gallery →
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Floating Trade Badge Top Right */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-3 bg-slate-900 text-white px-4 py-2.5 rounded-2xl shadow-xl border border-slate-700 animate-float">
              <div className="w-9 h-9 rounded-xl bg-sky-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-sky-300 tracking-wider">Quality Seal</div>
                <div className="text-xs font-black">Zero Hidden Surcharges</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
