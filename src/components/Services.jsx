import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import ServiceModal from './ServiceModal';
import {
  Wrench,
  Search,
  Bath,
  GitCommit,
  Building2,
  ShieldCheck,
  ArrowRight,
  Check,
  Clock,
  Home,
  PhoneCall,
  Sparkles,
  HelpCircle,
  Layers
} from 'lucide-react';

const iconMap = {
  Wrench,
  Search,
  Bath,
  GitCommit,
  Building2,
  ShieldCheck,
};

export default function Services({ onSelectServiceForQuote }) {
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Services (6)' },
    { id: 'repairs', label: 'Repairs & Leaks' },
    { id: 'renovation', label: 'Bathrooms & Pipework' },
    { id: 'commercial', label: 'Commercial & Maintenance' },
  ];

  const filteredServices = servicesData.filter((s) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'repairs') return s.id === 'plumbing-repairs' || s.id === 'leak-detection';
    if (activeTab === 'renovation') return s.id === 'bathroom-installations' || s.id === 'pipework-fittings';
    if (activeTab === 'commercial') return s.id === 'commercial-plumbing' || s.id === 'maintenance-upgrades';
    return true;
  });

  return (
    <section id="services" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-md border border-sky-200">
              <Layers className="w-3.5 h-3.5 text-sky-700" />
              <span>Engineered Capabilities</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Specialized Plumbing for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-cyan-600">
                Every Property Standard
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              From microscopic acoustic wall leak diagnosis to luxury multi-bathroom villa renovations, PPSL combines trade experience with precision equipment.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.iconName] || Wrench;

            return (
              <div
                key={service.id}
                className="metallic-card p-7 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-sky-700 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Duration & Property Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200">
                      <Clock className="w-3.5 h-3.5 text-sky-700" />
                      <span>{service.typicalDuration}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200">
                      <Home className="w-3.5 h-3.5 text-sky-700" />
                      <span>{service.propertyType.split('&')[0]}</span>
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {service.features.slice(0, 3).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2.5 text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 group/btn"
                  >
                    <span>Full specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform text-sky-700" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="btn-primary text-xs px-4 py-2.5 rounded-xl shadow-xs"
                  >
                    Request Booking
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-14 bg-slate-900 text-white rounded-3xl p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="flex items-center space-x-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 text-sky-400">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white">Unsure which plumbing service matches your exact issue?</div>
              <div className="text-xs sm:text-sm text-slate-300">Describe what's leaking or send a photo via WhatsApp — our master technician responds immediately.</div>
            </div>
          </div>

          <a
            href="https://wa.me/23050000000?text=Hello%20PPSL,%20I%20need%20plumbing%20advice%20for%20my%20property."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent text-xs px-6 py-3.5 whitespace-nowrap shadow-lg flex items-center gap-2"
          >
            <span>WhatsApp Diagnostic Advice</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectForQuote={(title) => {
            setSelectedService(null);
            onSelectServiceForQuote(title);
          }}
        />
      )}
    </section>
  );
}
