import React, { useState } from 'react';
import { 
  Stethoscope, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Wrench, 
  Droplet, 
  Flame, 
  HelpCircle,
  MessageSquare,
  Sparkles,
  Sliders,
  Bath,
  Utensils,
  Zap
} from 'lucide-react';

export default function DiagnosticTool({ onOpenQuote }) {
  const [activeZone, setActiveZone] = useState('bathroom');
  const [activeSymptom, setActiveSymptom] = useState(0);

  const diagnosticZones = [
    {
      id: 'bathroom',
      name: 'Bathroom & Ensuite',
      icon: Bath,
      symptoms: [
        {
          id: 'hammer',
          title: 'Banging / Rumbling Sound (Water Hammer)',
          cause: 'High water velocity suddenly stopped by valves, vibrating loose pipes inside cavity walls.',
          risk: 'Moderate (Can cause pipe joints to fracture)',
          time: '1 – 2 Hours',
          fix: 'Install water hammer arrestors & tighten acoustic pipe clamps.',
          guide: 'Rs 1,800 – 3,500'
        },
        {
          id: 'shower-pressure',
          title: 'Sudden Drop in Shower Water Pressure',
          cause: 'Limescale/mineral buildup in thermostatic cartridge or faulty booster pump check valve.',
          risk: 'Low to Moderate',
          time: '1 – 3 Hours',
          fix: 'Ultrasonic cartridge descaling or pressure regulator recalibration.',
          guide: 'Rs 1,500 – 3,200'
        },
        {
          id: 'damp-wall',
          title: 'Damp Stains or Peeling Paint Beside Shower',
          cause: 'Concealed micro-leak in mixer elbow or failure of shower drain seal.',
          risk: 'Urgent (Structural drywall rot & mold risk)',
          time: 'Same-day Diagnosis',
          fix: 'Acoustic leak isolation, replace damaged elbow & reseal.',
          guide: 'Rs 2,500 – 5,500'
        }
      ]
    },
    {
      id: 'kitchen',
      name: 'Kitchen & Scullery',
      icon: Utensils,
      symptoms: [
        {
          id: 'under-sink-leak',
          title: 'Puddle or Moisture Under Sink Cabinet',
          cause: 'Deteriorated rubber gasket on P-trap or pinhole corrosion in flexible braided feeds.',
          risk: 'Moderate (Damages wooden cabinet bases)',
          time: '45 mins – 1.5 Hours',
          fix: 'Replace flexible stainless feeds & install anti-leak compression trap.',
          guide: 'Rs 1,200 – 2,400'
        },
        {
          id: 'faucet-drip',
          title: 'Mixer Tap Drips Continuously When Shut',
          cause: 'Worn ceramic disc cartridge eroded by Mauritius lime/calcium minerals.',
          risk: 'Low (Wastes up to 20L/day water)',
          time: '30 – 60 mins',
          fix: 'Replace internal ceramic disc valve & clean aerator.',
          guide: 'Rs 1,000 – 1,800'
        }
      ]
    },
    {
      id: 'mains',
      name: 'Main Supply & Reservoir',
      icon: Zap,
      symptoms: [
        {
          id: 'meter-spinning',
          title: 'Water Meter Spins When Everything is Off',
          cause: 'Concealed underground main pipe rupture or stuck underground tank float valve.',
          risk: 'Emergency (Massive monthly water bills)',
          time: 'Same-day Diagnostic Dispatch',
          fix: 'Acoustic underground ground survey & rapid pipe isolation.',
          guide: 'Rs 2,800 – 6,500'
        },
        {
          id: 'pump-cycling',
          title: 'Water Pump Turns On Randomly for 2 Seconds',
          cause: 'Pressure drop caused by slow toilet flapper leak or faulty non-return valve.',
          risk: 'Moderate (Premature pump motor burnout)',
          time: '1 – 2 Hours',
          fix: 'Pressure check-valve replacement & toilet mechanism tune-up.',
          guide: 'Rs 1,500 – 3,000'
        }
      ]
    }
  ];

  const currentZone = diagnosticZones.find(z => z.id === activeZone) || diagnosticZones[0];
  const currentSymptom = currentZone.symptoms[activeSymptom] || currentZone.symptoms[0];

  const handleBookDiagnosis = () => {
    onOpenQuote(`Diagnostic Request: ${currentZone.name} - ${currentSymptom.title}`);
  };

  const handleWhatsAppDiagnosis = () => {
    const text = `Hello PPSL! I used your Interactive Plumbing Diagnostic Tool:
- Zone: ${currentZone.name}
- Symptom: ${currentSymptom.title}
- Likely Cause: ${currentSymptom.cause}
- Risk Level: ${currentSymptom.risk}
Please advise when a technician can inspect my property.`;
    window.open(`https://wa.me/23050000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="diagnostics" className="py-24 bg-[#0A101D] text-white relative overflow-hidden border-b border-slate-800">
      {/* Subtle deep ambient glow */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-sky-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-sky-400 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
            <Stethoscope className="w-3.5 h-3.5 text-sky-400" />
            <span>Interactive Self-Diagnostic Tool</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Troubleshoot Your Plumbing Issue
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Select where your issue is occurring to instantly identify root causes, risk levels, and recommended trade solutions.
          </p>
        </div>

        {/* ── Main Interactive Diagnostic Console ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Controls (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Step 1: Zone Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Step 1: Where is the symptom located?
              </label>

              <div className="grid grid-cols-3 gap-2.5">
                {diagnosticZones.map((zone) => {
                  const ZoneIcon = zone.icon;
                  return (
                    <button
                      key={zone.id}
                      onClick={() => {
                        setActiveZone(zone.id);
                        setActiveSymptom(0);
                      }}
                      className={`p-3.5 rounded-2xl border text-center transition-all ${
                        activeZone === zone.id
                          ? 'bg-sky-600 text-white border-sky-500 shadow-lg shadow-sky-600/30 scale-[1.02]'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <ZoneIcon className="w-5 h-5 mx-auto mb-1.5" />
                      <div className="text-xs font-bold leading-tight">{zone.name.split('&')[0]}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Symptom Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Step 2: Choose the exact symptom observed:
              </label>

              <div className="space-y-2">
                {currentZone.symptoms.map((symptom, idx) => (
                  <button
                    key={symptom.id}
                    onClick={() => setActiveSymptom(idx)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      activeSymptom === idx
                        ? 'bg-white text-slate-900 border-white shadow-xl scale-[1.01]'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-bold leading-snug pr-3">{symptom.title}</span>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                      activeSymptom === idx ? 'bg-sky-600 text-white' : 'border border-white/20 text-slate-400'
                    }`}>
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Live Diagnostic Result Card (7 Cols) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-white/[0.09] to-white/[0.03] border border-white/15 rounded-3xl p-6 sm:p-9 backdrop-blur-xl shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Diagnostic Findings</span>
                </div>
                <span className="text-xs font-bold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  {currentSymptom.risk}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-snug mb-2">
                  {currentSymptom.title}
                </h3>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
                  <span className="font-bold text-sky-300 block">Root Cause Identification:</span>
                  <p className="leading-relaxed">{currentSymptom.cause}</p>
                </div>
              </div>

              {/* Technical Remedy Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[11px] uppercase font-bold text-slate-400 block">Recommended PPSL Fix</span>
                  <p className="text-xs font-semibold text-white leading-relaxed">{currentSymptom.fix}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[11px] uppercase font-bold text-slate-400 block">Typical Repair Timeframe</span>
                  <p className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{currentSymptom.time}</span>
                  </p>
                </div>
              </div>

              {/* Pricing Guide */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-sky-950/40 border border-sky-800/40">
                <div>
                  <span className="text-[11px] uppercase font-bold text-slate-400 block">Estimated Guide Bracket</span>
                  <span className="text-xs text-slate-400">Excludes specialized replacement valves</span>
                </div>
                <div className="text-2xl font-black text-sky-300">
                  {currentSymptom.guide}
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleBookDiagnosis}
                className="btn-primary w-full sm:flex-1 py-3.5 text-xs font-bold flex items-center justify-center space-x-2 bg-white text-slate-950 hover:bg-slate-100"
              >
                <span>Book Technician for this Diagnosis</span>
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </button>

              <button
                onClick={handleWhatsAppDiagnosis}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Send to WhatsApp (+230)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
