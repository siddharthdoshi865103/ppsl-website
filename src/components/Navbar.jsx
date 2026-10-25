import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, PhoneCall, Sparkles, Wrench, Search, Bath,
  GitCommit, Building2, ShieldCheck, ArrowRight, ChevronDown, MessageSquare
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

const iconMap = { Wrench, Search, Bath, GitCommit, Building2, ShieldCheck };

const navLinks = [
  { name: 'Home',        href: '#home',        id: 'home' },
  { name: 'Services',    href: '#services',    id: 'services', hasMega: true },
  { name: 'Estimator',   href: '#estimator',   id: 'estimator' },
  { name: 'Diagnostics', href: '#diagnostics', id: 'diagnostics' },
  { name: 'Gallery',     href: '#gallery',     id: 'gallery' },
  { name: 'Coverage',    href: '#coverage',    id: 'coverage' },
  { name: 'About',       href: '#about',       id: 'about' },
  { name: 'Blog',        href: '#blog',        id: 'blog' },
  { name: 'Contact',     href: '#contact',     id: 'contact' },
];

export default function Navbar({ onOpenQuote }) {
  const [isOpen, setIsOpen]           = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [megaOpen, setMegaOpen]       = useState(false);
  const [pillStyle, setPillStyle]     = useState({});
  const navRef   = useRef(null);
  const linkRefs = useRef({});
  const megaTimer = useRef(null);

  /* ── Scroll watcher ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = navLinks.map(l => l.id);
      let current = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Sliding pill position tracker ── */
  useEffect(() => {
    const el = linkRefs.current[activeSection];
    const nav = navRef.current;
    if (el && nav) {
      const navRect = nav.getBoundingClientRect();
      const elRect  = el.getBoundingClientRect();
      setPillStyle({
        left:  elRect.left - navRect.left,
        width: elRect.width,
        opacity: 1,
      });
    }
  }, [activeSection]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setMegaOpen(false);
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
  };

  const openMega  = () => { clearTimeout(megaTimer.current); setMegaOpen(true); };
  const closeMega = () => { megaTimer.current = setTimeout(() => setMegaOpen(false), 120); };

  return (
    <>
      {/* ════════════════════════════════════════════
          DESKTOP HEADER — morphs on scroll
          ════════════════════════════════════════════ */}
      <header
        className={`hidden lg:block fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-0 bg-transparent'
        }`}
      >
        {/* ── Top full bar (visible only when NOT scrolled) ── */}
        <div className={`transition-all duration-500 origin-top ${
          scrolled
            ? 'opacity-0 h-0 overflow-hidden pointer-events-none'
            : 'opacity-100 bg-white border-b border-slate-200/70 shadow-sm'
        }`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-[72px]">

              {/* Logo */}
              <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="flex items-center space-x-3.5 group flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-brand-primary/15 scale-110 group-hover:scale-125 group-hover:bg-brand-primary/25 transition-all duration-400 blur-sm" />
                  <div className="relative w-[54px] h-[54px] rounded-full overflow-hidden border-2 border-sky-100 shadow-md group-hover:shadow-lg group-hover:shadow-brand-primary/20 group-hover:border-sky-300 transition-all duration-300">
                    <img src="/logo.png" alt="PPSL" className="w-full h-full object-cover scale-110 group-hover:scale-120 transition-transform duration-500"
                      onError={e => { e.target.style.display='none'; e.target.nextElementSibling.style.display='flex'; }} />
                    <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-brand-primary to-brand-navy text-white font-extrabold text-xl">P</div>
                  </div>
                </div>
                <div className="leading-tight">
                  <div className="font-extrabold text-brand-navy text-base tracking-tight group-hover:text-brand-primary transition-colors">Perfect Plumbing</div>
                  <div className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase">Services Ltd · PPSL</div>
                </div>
              </a>

              {/* Nav links with sliding pill */}
              <nav ref={navRef} className="relative flex items-center">
                {/* Sliding active pill */}
                <div
                  className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-sky/10 border border-brand-primary/20 transition-all duration-300 ease-out pointer-events-none"
                  style={pillStyle}
                />
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return link.hasMega ? (
                    <div
                      key={link.name}
                      ref={el => linkRefs.current[link.id] = el}
                      onMouseEnter={openMega}
                      onMouseLeave={closeMega}
                      className="relative"
                    >
                      <button
                        onClick={(e) => scrollTo(e, link.href)}
                        className={`relative flex items-center space-x-1 px-3.5 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                          isActive ? 'text-brand-primary' : 'text-slate-600 hover:text-brand-primary'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Mega menu */}
                      {megaOpen && (
                        <div
                          onMouseEnter={openMega}
                          onMouseLeave={closeMega}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] bg-white rounded-3xl shadow-2xl shadow-brand-navy/15 border border-slate-100 p-5 animate-fadeIn z-50"
                        >
                          {/* Decorative top strip */}
                          <div className="h-1 -mx-5 -mt-5 mb-5 rounded-t-3xl bg-gradient-to-r from-brand-primary via-brand-sky to-brand-cyan" />
                          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-1">All Services</div>
                          <div className="grid grid-cols-2 gap-2.5">
                            {servicesData.map((svc) => {
                              const Icon = iconMap[svc.iconName] || Wrench;
                              return (
                                <button
                                  key={svc.id}
                                  onClick={(e) => scrollTo(e, '#services')}
                                  className="group/svc flex items-start space-x-3 p-3.5 rounded-2xl hover:bg-sky-50 border border-transparent hover:border-sky-100 transition-all duration-200 text-left"
                                >
                                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100 flex items-center justify-center text-brand-primary flex-shrink-0 group-hover/svc:bg-brand-primary group-hover/svc:text-white group-hover/svc:border-brand-primary transition-all duration-200">
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-xs font-bold text-brand-navy group-hover/svc:text-brand-primary transition-colors truncate">{svc.title}</div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5 line-clamp-1">{svc.badge}</div>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-xs text-slate-400">Need help choosing a service?</span>
                            <button onClick={onOpenQuote} className="text-xs font-bold text-brand-primary hover:underline flex items-center space-x-1">
                              <span>Get a custom quote</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      key={link.name}
                      ref={el => linkRefs.current[link.id] = el}
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      className={`relative px-3.5 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                        isActive ? 'text-brand-primary' : 'text-slate-600 hover:text-brand-primary'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </nav>

              {/* Right CTA block */}
              <div className="flex items-center space-x-3 flex-shrink-0">
                <a href="tel:+2305000000"
                  className="flex items-center space-x-2 px-3.5 py-2 rounded-xl hover:bg-sky-50 border border-transparent hover:border-sky-200 transition-all group"
                >
                  <div className="w-7 h-7 rounded-full bg-sky-100 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                    <PhoneCall className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase font-bold text-slate-400 leading-none tracking-wider">Emergency</div>
                    <div className="text-xs font-bold text-brand-navy">+230 5000 0000</div>
                  </div>
                </a>
                <button
                  onClick={onOpenQuote}
                  className="btn-primary text-xs px-5 py-2.5 rounded-xl flex items-center space-x-1.5"
                >
                  <span>Request a Quote</span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ── Floating pill navbar (shows when scrolled) ── */}
        <div className={`transition-all duration-500 ${
          scrolled ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between bg-white/80 backdrop-blur-2xl border border-slate-200/60 shadow-2xl shadow-slate-900/10 rounded-2xl px-4 py-2.5 gap-3">

              {/* Compact circular logo */}
              <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="group flex-shrink-0">
                <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-sky-100 shadow-md group-hover:border-brand-sky group-hover:shadow-brand-primary/20 transition-all duration-300">
                  <img src="/logo.png" alt="PPSL" className="w-full h-full object-cover scale-110"
                    onError={e => { e.target.style.display='none'; e.target.nextElementSibling.style.display='flex'; }} />
                  <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-brand-primary to-brand-navy text-white font-extrabold text-sm">P</div>
                </div>
              </a>

              {/* Floating pill links */}
              <nav className="flex items-center bg-slate-50/80 rounded-xl px-1 py-1 border border-slate-200/60 gap-0.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      className={`relative px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 whitespace-nowrap ${
                        isActive
                          ? 'bg-white text-brand-primary shadow-sm border border-sky-100 scale-105'
                          : 'text-slate-600 hover:text-brand-primary hover:bg-white/60'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute -top-px inset-x-3 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent rounded-full" />
                      )}
                      {link.name}
                    </a>
                  );
                })}
              </nav>

              {/* Compact actions */}
              <div className="flex items-center space-x-2 flex-shrink-0">
                <a href="tel:+2305000000"
                  className="w-8 h-8 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-200"
                  title="Emergency Call"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={onOpenQuote}
                  className="btn-primary text-xs px-3.5 py-1.5 rounded-lg"
                >
                  <span>Quote</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════════
          MOBILE HEADER
          ════════════════════════════════════════════ */}
      <header className="lg:hidden sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
        <div className="flex items-center justify-between px-4 h-[64px]">

          {/* Mobile logo */}
          <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="flex items-center space-x-2.5 group">
            <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden border-2 border-sky-100 shadow-md">
              <img src="/logo.png" alt="PPSL" className="w-full h-full object-cover scale-110"
                onError={e => { e.target.style.display='none'; e.target.nextElementSibling.style.display='flex'; }} />
              <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-brand-primary to-brand-navy text-white font-extrabold">P</div>
            </div>
            <div className="leading-none">
              <div className="font-extrabold text-brand-navy text-sm tracking-tight">PPSL</div>
              <div className="text-[9px] text-slate-500 font-semibold tracking-widest uppercase">Plumbing Services</div>
            </div>
          </a>

          {/* Mobile right */}
          <div className="flex items-center space-x-2">
            <button onClick={onOpenQuote}
              className="btn-primary px-3.5 py-1.5 text-xs font-bold rounded-lg">
              Quote
            </button>
            <button onClick={() => setIsOpen(!isOpen)}
              className="relative w-9 h-9 rounded-xl bg-slate-100 hover:bg-sky-100 text-slate-700 hover:text-brand-primary flex items-center justify-center transition-colors"
              aria-label="Toggle menu">
              <Menu className={`w-5 h-5 absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`w-5 h-5 absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </button>
          </div>
        </div>

        {/* Mobile full-screen overlay menu */}
        {isOpen && (
          <div className="fixed inset-0 top-[64px] z-40 bg-white/98 backdrop-blur-2xl overflow-y-auto animate-fadeIn">
            <div className="max-w-sm mx-auto px-6 pt-8 pb-12 space-y-2">

              {/* Brand tagline in mobile menu */}
              <div className="text-center pb-6 border-b border-slate-100">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">PPSL · Mauritius</div>
                <div className="text-2xl font-extrabold text-brand-navy">Your trusted<br/>plumbing partner.</div>
              </div>

              {/* Nav items — staggered */}
              <div className="space-y-1 pt-4">
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      className={`flex items-center justify-between px-5 py-3.5 rounded-2xl font-semibold transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-brand-primary to-brand-navy text-white shadow-md shadow-brand-primary/20'
                          : 'text-slate-700 hover:bg-sky-50 hover:text-brand-primary'
                      }`}
                      style={{ animationDelay: `${idx * 40}ms` }}
                    >
                      <span className="text-sm">{link.name}</span>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isActive ? 'bg-white/20' : 'bg-slate-100 group-hover:bg-sky-100'}`}>
                        <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Mobile contact strip */}
              <div className="pt-6 mt-4 border-t border-slate-100 space-y-3">
                <a href="tel:+2305000000"
                  className="flex items-center justify-center space-x-2.5 w-full py-3.5 rounded-2xl bg-slate-100 text-brand-navy font-bold text-sm hover:bg-slate-200 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-primary">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <span>Call +230 5000 0000</span>
                </a>
                <a href="https://wa.me/23050000000?text=Hello%20PPSL"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2.5 w-full py-3.5 rounded-2xl bg-emerald-50 text-emerald-700 font-bold text-sm border border-emerald-200 hover:bg-emerald-100 transition-colors">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Chat</span>
                </a>
                <button
                  onClick={() => { setIsOpen(false); onOpenQuote(); }}
                  className="btn-primary w-full py-4 rounded-2xl bg-slate-900 text-white font-bold text-sm shadow-md flex items-center justify-center space-x-2">
                  <span>Request a Quote Now</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </button>
              </div>

            </div>
          </div>
        )}
      </header>

      {/* ── Spacer for desktop fixed header ── */}
      <div className="hidden lg:block h-[72px]" />
    </>
  );
}
