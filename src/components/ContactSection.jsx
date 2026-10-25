import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle, 
  Copy, 
  Sparkles,
  ExternalLink,
  Lock
} from 'lucide-react';

export default function ContactSection({ prefilledData, clearPrefilled }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Plumbing repairs',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefilledData) {
      setFormData(prev => ({
        ...prev,
        service: prefilledData.service || prev.service,
        details: prefilledData.details ? `${prev.details ? prev.details + '\n\n' : ''}${prefilledData.details}` : prev.details
      }));
    }
  }, [prefilledData]);

  const serviceOptions = [
    'Plumbing repairs',
    'Leak detection & repairs',
    'Bathroom installations',
    'Pipework & fittings',
    'Commercial plumbing',
    'Maintenance & upgrades',
    'Other enquiry'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // User spec behavior: Opens visitor's email app with enquiry prepared
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.details) {
      alert('Please fill in your Name, Phone, and Project Details.');
      return;
    }

    const subject = encodeURIComponent(`PPSL Service Request: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
`Hello Perfect Plumbing Services Ltd (PPSL),

I would like to request a quote / service for my property:

--- CLIENT DETAILS ---
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}

--- SERVICE SCOPE ---
Service Required: ${formData.service}
Service Area: Mauritius

--- PROJECT DETAILS ---
${formData.details}

---
Sent via PPSL Official Website`
    );

    window.location.href = `mailto:info@yourbusiness.com?subject=${subject}&body=${body}`;
    setTicketId(`PPSL-${Math.floor(100000 + Math.random() * 900000)}`);
    setSubmitted(true);
  };

  // Direct WhatsApp dispatch option
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.details) {
      alert('Please fill in your Name, Phone, and Project Details.');
      return;
    }

    const message = `Hello PPSL!
I would like to request plumbing assistance:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Service: ${formData.service}
- Details: ${formData.details}`;

    window.open(`https://wa.me/23050000000?text=${encodeURIComponent(message)}`, '_blank');
    setTicketId(`PPSL-WA-${Math.floor(100000 + Math.random() * 900000)}`);
    setSubmitted(true);
  };

  const handleCopySummary = () => {
    const text = `PPSL Enquiry Ticket: ${ticketId}\nClient: ${formData.name} (${formData.phone})\nService: ${formData.service}\nDetails: ${formData.details}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Plumbing repairs',
      details: ''
    });
    if (clearPrefilled) clearPrefilled();
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-brand-primary text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact & Booking</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Tell Us What You Need
          </h2>

          <p className="text-slate-600 text-base">
            Request an on-site evaluation, emergency repair, or project estimate. We respond promptly with practical recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Operations */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 space-y-6">
              <h3 className="text-xl font-bold text-brand-navy">
                Perfect Plumbing Services Ltd
              </h3>

              <div className="space-y-4">
                
                {/* Phone */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-brand-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Phone</span>
                    <a href="tel:+2305000000" className="text-base font-bold text-brand-navy hover:text-brand-primary transition-colors">
                      +230 5000 0000
                    </a>
                    <span className="text-xs text-slate-500 block">Island-wide call & emergency hotline</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-brand-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Email Address</span>
                    <a href="mailto:info@yourbusiness.com" className="text-base font-bold text-brand-navy hover:text-brand-primary transition-colors">
                      info@yourbusiness.com
                    </a>
                    <span className="text-xs text-slate-500 block">Quotes & general enquiries</span>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-brand-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Service Area</span>
                    <span className="text-base font-bold text-brand-navy block">
                      Mauritius
                    </span>
                    <span className="text-xs text-slate-500">North, Plaines Wilhems, West, South & East Coast</span>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-brand-primary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Opening Hours</span>
                    <span className="text-sm font-bold text-brand-navy block">
                      Mon – Sat: 7:30 AM – 6:00 PM
                    </span>
                    <span className="text-xs text-emerald-600 font-semibold block">
                      24/7 On-Call Emergency Service
                    </span>
                  </div>
                </div>

              </div>

              {/* Instant WhatsApp Quick Box */}
              <div className="pt-4 border-t border-slate-200">
                <a
                  href="https://wa.me/23050000000?text=Hello%20PPSL,%20I%20have%20an%20urgent%20plumbing%20request."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-emerald-600" />
                    <div>
                      <div className="text-xs font-bold">Fast WhatsApp Response</div>
                      <div className="text-[11px] text-emerald-700">Chat with a technician right now</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-emerald-600 transform group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-xl relative">
              
              {!submitted ? (
                <form className="space-y-5">
                  
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-2xl font-extrabold text-brand-navy tracking-tight">
                      Request a Service or Quote
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out the form below. Clicking <strong className="text-brand-navy">Prepare Email</strong> will open your email app with your message formatted, or choose <strong className="text-emerald-700">Send via WhatsApp</strong>.
                    </p>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jean Dupont"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+230 5..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Email Address <span className="text-slate-400 font-normal">(optional)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Required Service <span className="text-rose-500">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm bg-white font-medium transition-all"
                      >
                        {serviceOptions.map((svc) => (
                          <option key={svc} value={svc}>
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Project Details & Description <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="details"
                      required
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Please describe the issue, property type, location in Mauritius, and any specific preferences or urgency..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submission Action Buttons */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleEmailSubmit}
                      className="w-full inline-flex items-center justify-center px-5 py-3.5 text-sm font-bold text-white bg-brand-navy hover:bg-brand-card rounded-xl shadow-md transition-all group"
                    >
                      <Mail className="w-4 h-4 mr-2 text-brand-sky" />
                      <span>Prepare in Email App</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="w-full inline-flex items-center justify-center px-5 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/20 transition-all group"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span>Your information is confidential and will only be used to contact you regarding your plumbing service.</span>
                  </p>

                </form>
              ) : (
                /* Interactive Confirmation Card */
                <div className="py-8 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                      Enquiry Prepared Successfully
                    </span>
                    <h3 className="text-2xl font-extrabold text-brand-navy">
                      Thank You, {formData.name}!
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                      Your enquiry has been prepared. Your reference ticket is <strong className="text-brand-navy">{ticketId}</strong>.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Selected Service:</span>
                      <span className="font-bold text-slate-700">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Phone Contact:</span>
                      <span className="font-bold text-slate-700">{formData.phone}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
                      <span className="text-slate-400">Reference:</span>
                      <button
                        onClick={handleCopySummary}
                        className="inline-flex items-center text-brand-primary font-bold hover:underline"
                      >
                        <Copy className="w-3.5 h-3.5 mr-1" />
                        <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-3 pt-3">
                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                    <a
                      href="tel:+2305000000"
                      className="px-6 py-2.5 rounded-xl bg-brand-primary text-white text-xs font-bold hover:bg-brand-navy transition-colors shadow-sm"
                    >
                      Call Dispatch Immediately
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
