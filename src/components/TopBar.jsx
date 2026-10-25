import React from 'react';
import { Phone, Clock, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

export default function TopBar({ onOpenQuote }) {
  return (
    <div className="bg-brand-dark text-slate-300 text-xs py-2 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Tagline & Location */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-slate-200 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Reliable plumbing. Quality workmanship.</span>
          </div>
          <div className="flex items-center space-x-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-brand-sky" />
            <span>Serving all districts across Mauritius</span>
          </div>
        </div>

        {/* Right: Hours & Quick Actions */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-brand-sky" />
            <span>Mon - Sat: 7:30 AM - 6:00 PM · 24/7 Urgent Dispatch</span>
          </div>

          <a 
            href="https://wa.me/23050000000?text=Hello%20PPSL,%20I%20would%20like%20to%20request%20a%20plumbing%20service." 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>

          <button 
            onClick={onOpenQuote}
            className="flex items-center space-x-1 text-brand-sky hover:text-white font-semibold transition-colors group"
          >
            <span>Request a service</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}
