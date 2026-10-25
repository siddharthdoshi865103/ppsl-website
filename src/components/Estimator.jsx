import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Building, 
  Home, 
  Utensils, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  Check,
  Sparkles,
  Sliders
} from 'lucide-react';

export default function Estimator({ onSendEstimateToForm }) {
  const [propertyType, setPropertyType] = useState('residential');
  const [serviceType, setServiceType] = useState('plumbing-repairs');
  const [urgency, setUrgency] = useState('standard');
  const [fixturesCount, setFixturesCount] = useState(1);

  const propertyOptions = [
    { id: 'residential', label: 'Villa / House', icon: Home, desc: 'Private residences & villas' },
    { id: 'apartment', label: 'Apartment', icon: Building, desc: 'Flats & gated complexes' },
    { id: 'commercial', label: 'Commercial Unit', icon: Building, desc: 'Offices, shops & retail' },
    { id: 'hospitality', label: 'Restaurant / Hotel', icon: Utensils, desc: 'Commercial kitchens & guest suites' },
  ];

  const serviceOptions = [
    { 
      id: 'plumbing-repairs', 
      name: 'Plumbing Repairs & Fixes', 
      baseRange: 'Rs 1,200 – 3,500', 
      time: '1 – 3 hours',
    },
    { 
      id: 'leak-detection', 
      name: 'Acoustic Leak Detection', 
      baseRange: 'Rs 2,500 – 6,000', 
      time: '2 – 4 hours',
    },
    { 
      id: 'bathroom-installations', 
      name: 'Bathroom Fit-out & Renovation', 
      baseRange: 'Rs 8,000 – 25,000+', 
      time: '1 – 4 days',
    },
    { 
      id: 'pipework-fittings', 
      name: 'Piping Overhaul & Manifolds', 
      baseRange: 'Rs 3,000 – 12,000', 
      time: 'Half to 1 day',
    },
    { 
      id: 'commercial-plumbing', 
      name: 'Commercial Operations Plumbing', 
      baseRange: 'Custom Contract', 
      time: 'Scheduled scope',
    },
    { 
      id: 'maintenance-upgrades', 
      name: 'Preventive Pressure Service', 
      baseRange: 'Rs 2,000 – 5,500', 
      time: '2 – 4 hours',
    },
  ];

  const urgencyOptions = [
    { id: 'standard', label: 'Standard Schedule', tag: 'Within 2–3 days', color: 'text-slate-700' },
    { id: 'priority', label: 'Priority Dispatch', tag: 'Within 24 hours', color: 'text-sky-700' },
    { id: 'emergency', label: 'Immediate Emergency', tag: 'Urgent Island-wide dispatch', color: 'text-amber-700 font-bold' },
  ];

  const selectedServiceObj = serviceOptions.find(s => s.id === serviceType) || serviceOptions[0];
  const selectedPropObj = propertyOptions.find(p => p.id === propertyType) || propertyOptions[0];

  const handleSendToWhatsApp = () => {
    const text = `Hello PPSL! I configured an estimate on your website:
- Property Type: ${selectedPropObj?.label}
- Service Needed: ${selectedServiceObj?.name}
- Number of affected points/fixtures: ${fixturesCount}
- Urgency: ${urgency.toUpperCase()}
- Estimated Guide Range: ${selectedServiceObj?.baseRange}
Please advise on availability and provide an exact formal confirmation.`;
    window.open(`https://wa.me/23050000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleApplyToForm = () => {
    onSendEstimateToForm({
      service: selectedServiceObj?.name,
      details: `[Interactive Scope Estimator]
- Property: ${selectedPropObj?.label} (${selectedPropObj?.desc})
- Fixtures/Points: ${fixturesCount}
- Service: ${selectedServiceObj?.name}
- Expected Duration: ${selectedServiceObj?.time}
- Dispatch Urgency: ${urgency.toUpperCase()}`
    });
  };

  return (
    <section id="estimator" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-md border border-sky-200">
            <Calculator className="w-3.5 h-3.5 text-sky-700" />
            <span>Interactive Scope & Budget Configurator</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Transparent Estimates in Under 60 Seconds
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Configure your property details below to calculate typical repair durations, guide budgets, and transfer directly into our dispatch scheduler.
          </p>
        </div>

        {/* Main Calculator */}
        <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Options (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-8 bg-white">
              
              {/* Step 1: Property */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] flex items-center justify-center font-bold">1</span>
                    <span>Property Category</span>
                  </label>
                  <span className="text-xs font-bold text-sky-700">{selectedPropObj.label}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {propertyOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isActive = propertyType === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setPropertyType(opt.id)}
                        className={`p-3.5 rounded-2xl border text-left transition-all ${
                          isActive
                            ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-[1.02]'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-white'
                        }`}
                      >
                        <Icon className={`w-5 h-5 mb-2 ${isActive ? 'text-sky-400' : 'text-slate-700'}`} />
                        <div className="text-xs font-bold leading-tight">{opt.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Service Selection */}
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] flex items-center justify-center font-bold">2</span>
                  <span>Primary Service Scope</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {serviceOptions.map((opt) => {
                    const isActive = serviceType === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setServiceType(opt.id)}
                        className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all ${
                          isActive
                            ? 'bg-sky-50 border-sky-600 text-slate-900 ring-1 ring-sky-600/30'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-900">{opt.name}</div>
                          <div className="text-[11px] text-slate-500 mt-0.5">{opt.baseRange}</div>
                        </div>
                        {isActive && <Check className="w-4 h-4 text-sky-700 flex-shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Fixtures & Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex justify-between items-center text-xs font-black text-slate-900">
                    <span className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center">3</span>
                      <span>Affected Fixtures:</span>
                    </span>
                    <span className="text-sky-800 bg-white px-2.5 py-0.5 rounded border border-slate-200 shadow-xs font-extrabold text-sm">
                      {fixturesCount} {fixturesCount === 1 ? 'Point' : 'Points'}
                    </span>
                  </div>
                  
                  <input
                    type="range"
                    min="1"
                    max="8"
                    value={fixturesCount}
                    onChange={(e) => setFixturesCount(parseInt(e.target.value))}
                    className="w-full accent-slate-900 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  
                  <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
                    <span>1 (Single tap/leak)</span>
                    <span>4 (Overhaul)</span>
                    <span>8+ (Whole villa)</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-200 space-y-3">
                  <span className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center">4</span>
                    <span>Schedule / Urgency:</span>
                  </span>
                  
                  <div className="space-y-1.5">
                    {urgencyOptions.map((opt) => (
                      <label key={opt.id} className="flex items-center justify-between p-2 rounded-xl border border-slate-200 bg-white cursor-pointer text-xs">
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="urgency"
                            checked={urgency === opt.id}
                            onChange={() => setUrgency(opt.id)}
                            className="text-slate-900 focus:ring-slate-900"
                          />
                          <span className={urgency === opt.id ? 'font-bold text-slate-900' : 'text-slate-700'}>{opt.label}</span>
                        </div>
                        <span className="text-[10px] text-slate-400">{opt.tag}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Summary (5 Cols) — Deep Architectural Obsidian */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0A101D] text-white p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800 relative overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[10px] uppercase font-extrabold tracking-widest text-sky-400">Instant Scope Card</span>
                    <h4 className="text-xl font-black text-white mt-0.5">{selectedServiceObj.name}</h4>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-sky-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-slate-400">Property:</span>
                    <span className="font-bold text-white">{selectedPropObj.label}</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-slate-400">Magnitude:</span>
                    <span className="font-bold text-white">{fixturesCount} {fixturesCount === 1 ? 'Point' : 'Points / Fixtures'}</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-slate-400">Estimated Duration:</span>
                    <span className="font-bold text-sky-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {selectedServiceObj.time}
                    </span>
                  </div>

                  {/* Range Highlight */}
                  <div className="pt-3 pb-2 rounded-2xl bg-white/5 border border-white/10 p-4 space-y-1">
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Estimated Guide Bracket</span>
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white">
                      {selectedServiceObj.baseRange}
                    </div>
                    <p className="text-[10px] text-slate-400">Includes labor and diagnostic inspection.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>PPSL Written Pricing: Full diagnostics reviewed before physical work begins. Zero surprises.</span>
                </div>
              </div>

              <div className="space-y-3 pt-6">
                <button
                  type="button"
                  onClick={handleApplyToForm}
                  className="w-full py-4 px-5 rounded-2xl text-xs sm:text-sm font-extrabold text-slate-950 bg-white hover:bg-slate-100 shadow-xl flex items-center justify-center space-x-2 transition-all"
                >
                  <span>Apply Estimate to Booking Form</span>
                  <ArrowRight className="w-4 h-4 text-slate-900" />
                </button>

                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center space-x-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Send Estimate to WhatsApp (+230)</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
