import React, { useState } from 'react';
import { X, Sparkles, Send, MessageSquare, CheckCircle, Phone } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialService = 'Plumbing repairs' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService,
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const services = [
    'Plumbing repairs',
    'Leak detection & repairs',
    'Bathroom installations',
    'Pipework & fittings',
    'Commercial plumbing',
    'Maintenance & upgrades',
    'Other enquiry'
  ];

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.details) {
      alert('Please provide your name, phone number, and brief project details.');
      return;
    }

    const subject = encodeURIComponent(`PPSL Quick Quote: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
`Hello PPSL,

I would like to request an immediate quote:
- Client Name: ${formData.name}
- Phone Number: ${formData.phone}
- Service Needed: ${formData.service}
- Project Requirements:
${formData.details}`
    );

    window.location.href = `mailto:info@yourbusiness.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    const message = `Hello PPSL! Quick Quote Request:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Service: ${formData.service}
- Details: ${formData.details || 'To be discussed'}`;

    window.open(`https://wa.me/23050000000?text=${encodeURIComponent(message)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-brand-dark/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center space-x-2 text-brand-primary text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Direct Quote Request</span>
            </div>

            <h3 className="text-2xl font-extrabold text-brand-navy tracking-tight mb-1">
              Request Your Estimate
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Our technicians review requests rapidly across Mauritius.
            </p>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Marie Laurent"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Phone Number (Mauritius) *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+230 5..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Service *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white font-medium outline-none"
                >
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Job Description *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Briefly describe what needs attention or installation..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none resize-none"
                ></textarea>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-white bg-brand-navy hover:bg-brand-card shadow-md text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all"
                >
                  <Send className="w-4 h-4 text-brand-sky" />
                  <span>Prepare in Email App</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-brand-navy">Request Prepared!</h4>
            <p className="text-xs text-slate-500">
              Your inquiry for <strong className="text-brand-navy">{formData.service}</strong> is ready. Our PPSL team looks forward to assisting you.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-brand-primary text-white text-xs font-bold"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
