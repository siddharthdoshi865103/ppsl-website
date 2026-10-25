import React, { useState, useEffect, useRef } from 'react';
import { galleryData, galleryFilters } from '../data/galleryData';
import { 
  Camera, 
  MapPin, 
  ZoomIn, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  SlidersHorizontal, 
  ChevronRight, 
  Send, 
  Layers, 
  Sparkles 
} from 'lucide-react';

export default function Gallery({ onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeItem, setActiveItem] = useState(null);
  const [activeTransformationIdx, setActiveTransformationIdx] = useState(0);
  const [comparisonSlider, setComparisonSlider] = useState(50);
  const [containerWidth, setContainerWidth] = useState(500);
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setContainerWidth(sliderRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // 3 Distinct Real-World Transformations
  const transformations = [
    {
      id: 'ensuite',
      tag: 'Bathroom Transformation',
      location: 'Grand Baie, North Mauritius',
      title: 'Acoustic Leak Rectification & Modern Ensuite Fit-out',
      desc: 'Corroded galvanized pipework causing water-hammer noise and drywall dampness was isolated and replaced with soundproofed PPR pipelines and a flush thermostatic shower column.',
      duration: '4 Days',
      materials: 'PPR PN20, Grohe Thermostatic Mixer, SS316 Linear Floor Drain',
      beforeLabel: 'BEFORE (Aging Galvanized)',
      afterLabel: 'AFTER (PPSL Finish)',
      beforeImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      afterImg: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'manifold',
      tag: 'Precision Pipework',
      location: 'Ebene Cybercity',
      title: 'Tangled Under-Sink Lines to Copper Manifold',
      desc: 'Messy flexible braided lines with pinhole pressure leaks replaced with high-pressure Grade-A copper distribution lines with individual shutoff isolating valves.',
      duration: '2 Days',
      materials: 'Solid Copper Tubing, Brass Quarter-Turn Valves, Anti-Vibration Clamps',
      beforeLabel: 'BEFORE (Tangled PVC & Leaks)',
      afterLabel: 'AFTER (Precision Manifold)',
      beforeImg: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
      afterImg: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'fixtures',
      tag: 'Sanitaryware Upgrade',
      location: 'Tamarin Coastal Villa',
      title: 'Outdated Mixer to Matte Black Countertop Basin',
      desc: 'Limescale-encrusted taps and leaking P-traps replaced with aerated water-saving matte black mixers, reinforced flexible steel feeds, and pop-up clean-out traps.',
      duration: '1 Day',
      materials: 'Matte Black Solid Brass, Braided SS304 Hoses, High-Flow Trap',
      beforeLabel: 'BEFORE (Limescale & Corrosion)',
      afterLabel: 'AFTER (Matte Black Finish)',
      beforeImg: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1000&q=80',
      afterImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    }
  ];

  const currentTransformation = transformations[activeTransformationIdx];

  const projectDetails = {
    1: { duration: '4 Days', scope: 'Master ensuite overhaul', client: 'Private Villa', materials: 'PPR Concealed, Grohe Fixtures' },
    2: { duration: '2 Days', scope: 'High-pressure copper manifold installation', client: 'Corporate Office', materials: 'Grade-A Copper & Brass Valves' },
    3: { duration: '1 Day', scope: 'Matte black modern fixtures & drainage', client: 'Coastal Residence', materials: 'Solid Brass & Braided Steel' },
    4: { duration: '5 Days', scope: 'Linear channel wet-room drainage', client: 'Modern Villa', materials: 'SS316 Linear Drains & Thermostats' },
    5: { duration: '2 Hours', scope: 'Acoustic leak detection & rapid pipe seal', client: 'Commercial Unit', materials: 'Ultrasonic Detection Tech' },
    6: { duration: '1 Day', scope: 'Pressure gauge test & certification', client: 'Boutique Hotel', materials: 'Calibrated Digital Manometers' },
  };

  const filteredItems = activeFilter === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter);

  const getCount = (filterId) => {
    if (filterId === 'all') return galleryData.length;
    return galleryData.filter(item => item.category === filterId).length;
  };

  const handleInquireProject = (project) => {
    setActiveItem(null);
    if (onOpenQuote) {
      onOpenQuote(`Project Inquiry: ${project.title} (${project.location})`);
    } else {
      const contactEl = document.querySelector('#contact');
      if (contactEl) {
        window.scrollTo({ top: contactEl.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-md border border-sky-200">
            <Camera className="w-3.5 h-3.5 text-sky-700" />
            <span>Interactive Workmanship Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Proof of Workmanship Across Mauritius
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Drag the interactive comparison slider horizontally to reveal before-and-after transformations delivered by the PPSL engineering team.
          </p>
        </div>

        {/* ── Interactive Multi-Project Transformation Studio ── */}
        <div className="mb-16 craft-card rounded-3xl p-6 sm:p-10 bg-[#F8FAFC] border border-slate-200 shadow-xl">
          
          {/* Project Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 hidden sm:inline">
              Select Transformation Case:
            </span>
            {transformations.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTransformationIdx(idx);
                  setComparisonSlider(50);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                  activeTransformationIdx === idx
                    ? 'bg-slate-900 text-white shadow-md scale-[1.02]'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <span>{item.tag}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${activeTransformationIdx === idx ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Transformation Content & Interactive Slider */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 justify-between">
            
            {/* Left Case Details */}
            <div className="space-y-4 max-w-lg">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100/70 px-3 py-1 rounded-md border border-sky-200">
                <MapPin className="w-3.5 h-3.5 text-sky-700" />
                <span>{currentTransformation.location}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                {currentTransformation.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {currentTransformation.desc}
              </p>

              {/* Specs & Materials Box */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Installed Materials Standard:</div>
                <div className="text-xs font-semibold text-slate-800">
                  {currentTransformation.materials}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
                  <Clock className="w-4 h-4 text-sky-700" />
                  <span>Completion: {currentTransformation.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Pressure Certified</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenQuote(currentTransformation.title)}
                  className="btn-primary text-xs px-5 py-3 rounded-xl flex items-center space-x-2"
                >
                  <span>Request Similar Transformation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Interactive Drag Slider Frame */}
            <div ref={sliderRef} className="w-full lg:w-[500px] aspect-[4/3] relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-2xl select-none bg-slate-900">
              {/* After Image (Background) */}
              <img 
                src={currentTransformation.afterImg} 
                alt={currentTransformation.afterLabel}
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-slate-900/90 text-white text-[11px] font-bold shadow-md border border-white/20 backdrop-blur-xs">
                {currentTransformation.afterLabel}
              </div>

              {/* Before Image (Clipped Left Layer) */}
              <div 
                className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-2xl"
                style={{ width: `${comparisonSlider}%` }}
              >
                <img 
                  src={currentTransformation.beforeImg} 
                  alt={currentTransformation.beforeLabel}
                  className="absolute inset-0 w-full h-full object-cover max-w-none filter sepia-[0.3]"
                  style={{ width: `${containerWidth}px`, height: '100%' }}
                />
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-900/90 text-amber-300 text-[11px] font-bold shadow-md border border-amber-400/30 backdrop-blur-xs">
                  {currentTransformation.beforeLabel}
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-0.5 bg-white z-20 pointer-events-none"
                style={{ left: `${comparisonSlider}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-2xl border-2 border-sky-600">
                  <SlidersHorizontal className="w-4 h-4 text-sky-700" />
                </div>
              </div>

              {/* Native range slider overlay for drag and touch */}
              <input 
                type="range"
                min="0"
                max="100"
                value={comparisonSlider}
                onChange={(e) => setComparisonSlider(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Drag before and after slider"
              />

              <div className="absolute bottom-3 inset-x-3 z-10 text-center pointer-events-none">
                <span className="text-[10px] font-bold tracking-wider text-white bg-black/70 px-3 py-1 rounded-full backdrop-blur-xs border border-white/10">
                  ◀ DRAG SLIDER HORIZONTALLY TO COMPARE ▶
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Completed Projects Directory:
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {galleryFilters.map((filter) => {
              const isActive = activeFilter === filter.id;
              const count = getCount(filter.id);
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{filter.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${isActive ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-600'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Gallery Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const meta = projectDetails[item.id] || { duration: '1-2 Days', client: 'Private Client' };

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="metallic-card rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-xs text-slate-800 border border-slate-200 shadow-xs">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center space-x-1 font-medium bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                      <MapPin className="w-3 h-3 text-sky-400" />
                      <span className="truncate max-w-[150px]">{item.location}</span>
                    </div>

                    <div className="bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-xs font-bold text-[10px]">
                      {meta.duration}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-700">
                    <span>Inspect specifications</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full bg-slate-900">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-md border border-sky-200">
                  {activeItem.categoryLabel}
                </span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-700" />
                  {activeItem.location}
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900">{activeItem.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{activeItem.description}</p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-slate-900">Materials & Fitting Standard:</div>
                <div>{projectDetails[activeItem.id]?.materials || 'Standard PPSL Trade Components'}</div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => handleInquireProject(activeItem)}
                  className="btn-primary w-full sm:flex-1 text-xs py-3.5"
                >
                  Request Similar Project Quote
                </button>
                <a
                  href={`https://wa.me/23050000000?text=${encodeURIComponent(`Hello PPSL! I am inquiring about project: ${activeItem.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full sm:w-auto text-xs py-3.5"
                >
                  WhatsApp Inquire
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
