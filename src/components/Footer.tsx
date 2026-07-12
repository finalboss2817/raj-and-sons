/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Mail, Phone, MapPin, ShieldAlert, Sparkles, Heart } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="bg-navy-dark text-ivory pt-20 pb-10 border-t border-ivory/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Core footer columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-ivory/5">
          
          {/* Column 1: Brand & Legacy Heritage */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif text-3xl font-black tracking-widest text-white">
                RAJ & SONS
              </span>
              <span className="border border-coral/30 px-1.5 py-0.5 font-mono text-[9px] tracking-widest text-coral uppercase rounded-sm">
                Since 1992
              </span>
            </div>
            
            <p className="font-sans text-sm text-ivory/70 leading-relaxed max-w-sm mb-6">
              Three Decades of Trusted Vision. Over thirty years of family-owned optical care, bespoke glass milling, and premium frame selection.
            </p>

            <span className="font-mono text-[10px] tracking-widest text-coral uppercase font-semibold">
              A Venture by Meena Technologies
            </span>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <span className="font-mono text-[10px] tracking-widest text-ivory/40 uppercase block mb-6">
              Bespoke Showroom
            </span>
            <ul className="space-y-3.5 text-sm font-sans text-ivory/70 font-medium">
              <li>
                <button 
                  onClick={() => { setActiveTab("products"); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
                  className="hover:text-coral transition-colors cursor-pointer"
                >
                  Optical Catalog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab("trial"); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
                  className="hover:text-coral transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Sparkles className="h-3 w-3 text-coral animate-pulse" />
                  <span>Book Doorstep Trial</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab("about"); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
                  className="hover:text-coral transition-colors cursor-pointer"
                >
                  Our Legacy Journey
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab("blogs"); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
                  className="hover:text-coral transition-colors cursor-pointer"
                >
                  Editorial Journals
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts Concierge */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <span className="font-mono text-[10px] tracking-widest text-ivory/40 uppercase block mb-6">
              Direct Contact
            </span>
            <ul className="space-y-4 text-sm font-sans text-ivory/80 font-medium w-full">
              <li className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 text-coral flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-ivory/40 block">Priority Hotline</span>
                  <a href="tel:9920300750" className="hover:text-coral font-mono font-bold transition-colors">9920300750</a>
                </div>
              </li>
              
              <li className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-coral flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-ivory/40 block">Official Mail</span>
                  <a href="mailto:trivedirajendra18@gmail.com" className="hover:text-coral font-mono transition-colors">trivedirajendra18@gmail.com</a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <MapPin className="h-4.5 w-4.5 text-coral flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-ivory/40 block">Showroom Region</span>
                  <span className="text-ivory/70">Kandivali East, Mumbai, MH, India</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs tracking-wider text-ivory/30 uppercase font-mono gap-4">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} RAJ & SONS</span>
            <span>•</span>
            <span className="text-coral">All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span>Developed with</span>
              <Heart className="h-3 w-3 text-coral fill-coral" />
              <span>Meena Technologies</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
