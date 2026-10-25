import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, ShieldCheck, MessageSquare, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Cost Estimator', href: '#estimator' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const topOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark text-slate-400 pt-16 pb-24 lg:pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">

          {/* ── Brand Column: CIRCULAR LOGO ── */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-4">
              {/* Circular logo in footer */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-primary/30 to-brand-cyan/20 blur-md scale-110 group-hover:scale-125 transition-transform duration-400" />
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-sky-800/60 group-hover:border-brand-sky transition-colors duration-300 shadow-lg shadow-brand-primary/10">
                  <img
                    src="/logo.png"
                    alt="PPSL Logo"
                    className="w-full h-full object-cover scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-brand-primary to-brand-navy text-white font-extrabold text-xl">
                    P
                  </div>
                </div>
              </div>

              <div>
                <div className="text-lg font-extrabold text-white tracking-tight">PPSL</div>
                <div className="text-[11px] font-medium text-slate-400 tracking-wider uppercase">Perfect Plumbing Services Ltd</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
              Providing dependable residential and commercial plumbing services across Mauritius. Quality workmanship, prompt diagnostics, and fully transparent service delivery.
            </p>

            {/* Certified badge */}
            <div className="inline-flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-400/8 border border-emerald-400/20 px-3.5 py-2 rounded-xl">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>Certified Plumbing Workmanship Guaranteed</span>
            </div>

            {/* WhatsApp quick row */}
            <a
              href="https://wa.me/23050000000?text=Hello%20PPSL,%20I%20need%20plumbing%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 text-xs text-emerald-300 hover:text-emerald-200 font-medium transition-colors group"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Instant WhatsApp Dispatch</span>
              <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* ── Navigation ── */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="group relative flex items-center text-xs text-slate-400 hover:text-white transition-colors py-1.5 pl-3 rounded-lg hover:bg-white/5"
                >
                  {/* Left accent bar that grows in on hover */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 group-hover:h-4 bg-brand-sky transition-all duration-200 rounded-full" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* ── Contact ── */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+2305000000"
                className="flex items-center space-x-2.5 text-xs group hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
                  <Phone className="w-3.5 h-3.5 text-brand-sky group-hover:text-white transition-colors" />
                </div>
                <span className="font-semibold text-white/90 group-hover:text-white">+230 5000 0000</span>
              </a>

              <a
                href="mailto:info@yourbusiness.com"
                className="flex items-center space-x-2.5 text-xs group hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
                  <Mail className="w-3.5 h-3.5 text-brand-sky group-hover:text-white transition-colors" />
                </div>
                <span>info@yourbusiness.com</span>
              </a>

              <div className="flex items-center space-x-2.5 text-xs">
                <div className="w-7 h-7 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5 text-brand-sky" />
                </div>
                <span>Mauritius — Island-wide</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {currentYear} Perfect Plumbing Services Ltd. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-600">Mauritius Plumbing Experts</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-brand-primary/20 border border-white/10 hover:border-brand-primary/40 text-slate-300 hover:text-white transition-all group"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
