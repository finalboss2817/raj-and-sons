/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Calendar, Phone, ArrowDown, Check, Copy } from "lucide-react";
import { GENERATED_IMAGES } from "../data";

interface HeroProps {
  setActiveTab: (tab: string) => void;
  scrollToCatalog: () => void;
}

export default function Hero({ setActiveTab, scrollToCatalog }: HeroProps) {
  const [showCallModal, setShowCallModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText("9920300750");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex min-h-[calc(100vh-80px)] flex-col justify-between bg-navy-dark text-ivory overflow-hidden">
      
      {/* Background Image with Cinematic Zoom/Fade Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 0.35 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src={GENERATED_IMAGES.hero}
          alt="Luxury Eyewear Craftsmanship"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center filter grayscale contrast-125"
        />
        {/* Soft, deep gradient shading */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/40 to-transparent" />
      </div>

      {/* Floating Decorative Lens Wireframes (Slow, subtle premium tilt & hover) */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden items-center justify-end lg:flex lg:pr-24">
        <motion.div
          animate={{ 
            y: [-15, 15, -15],
            rotate: [-3, 3, -3]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative h-96 w-96 rounded-full border border-ivory/10 bg-white/[0.02] backdrop-blur-[3px] p-8 flex items-center justify-center shadow-2xl"
        >
          {/* Subtle Inner elements to resemble high-end lens geometry */}
          <div className="absolute inset-4 rounded-full border border-dashed border-ivory/5 animate-[spin_120s_linear_infinite]" />
          <div className="h-full w-full rounded-full border border-coral/10 flex items-center justify-center">
            <span className="font-serif text-xs tracking-[0.25em] text-ivory/30 uppercase">
              R & S • 1992
            </span>
          </div>
          
          {/* Floating frame node overlay */}
          <motion.div 
            animate={{ rotate: [5, -5, 5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-12 border border-coral/20 bg-navy-dark/80 px-4 py-2 font-mono text-[10px] tracking-widest text-coral uppercase rounded-sm shadow-lg"
          >
            Handcrafted
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Core Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-16 md:px-12 flex-grow flex flex-col justify-center">
        <div className="max-w-3xl">
          
          {/* Legacy Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 flex items-center gap-2"
          >
            <div className="h-[1px] w-12 bg-coral" />
            <span className="font-mono text-xs font-semibold tracking-[0.3em] text-coral uppercase flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              Three Decades of Trusted Vision
            </span>
          </motion.div>

          {/* Headline (Elegant Serif, large and readable) */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="font-serif text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            A Legacy of Vision <br />
            <span className="font-normal italic text-coral">Since 1992</span>
          </motion.h1>

          {/* Subheadline (Modern Sans, spacious and warm) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 font-sans text-lg font-light leading-relaxed tracking-wide text-ivory/80 md:text-xl"
          >
            Premium Eyewear, Expert Guidance, and Trusted Vision Care for Over Three Decades. 
            Experience family-owned precision engineered for the modern era.
          </motion.p>

          {/* Luxury Buttons Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToCatalog}
              className="border-b-2 border-coral hover:bg-coral px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white hover:text-navy-dark transition-all duration-300 rounded-xs cursor-pointer"
              id="hero-explore"
            >
              Explore Collection
            </button>

            <button
              onClick={() => setActiveTab("trial")}
              className="flex items-center gap-2.5 border border-ivory/20 hover:border-coral bg-white/5 hover:bg-white/10 px-8 py-4 text-sm font-semibold tracking-widest uppercase text-ivory hover:text-coral transition-all duration-300 rounded-xs cursor-pointer"
              id="hero-trial"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Home Trial</span>
            </button>

            <button
              onClick={() => setShowCallModal(true)}
              className="flex items-center gap-2 border border-transparent hover:border-ivory/20 px-6 py-4 text-sm font-semibold tracking-widest uppercase text-ivory/70 hover:text-white transition-all cursor-pointer"
              id="hero-call"
            >
              <Phone className="h-4 w-4 text-coral" />
              <span>Call Now</span>
            </button>
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Indicator & Brand Footer Credit */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-6 md:px-12 flex flex-col sm:flex-row items-center justify-between border-t border-ivory/5 text-ivory/40 text-xs tracking-widest uppercase font-mono">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <span>RAJ & SONS</span>
          <span>•</span>
          <span className="text-coral">Meena Technologies</span>
        </div>
        <button 
          onClick={scrollToCatalog}
          className="flex items-center gap-2 text-ivory/40 hover:text-coral transition-colors duration-200 cursor-pointer"
        >
          <span>Scroll To Discover</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>

      {/* Call Dialog modal */}
      <AnimatePresence>
        {showCallModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCallModal(false)}
              className="absolute inset-0 bg-navy-dark/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-md bg-white text-navy p-8 rounded-sm shadow-2xl border border-navy/10"
            >
              <span className="font-mono text-[10px] tracking-widest text-coral uppercase block mb-2">
                Priority Concierge Line
              </span>
              <h3 className="font-serif text-2xl font-bold tracking-wide text-navy mb-4">
                Connect with our Vision Care Team
              </h3>
              <p className="font-sans text-sm text-navy/70 leading-relaxed mb-6">
                Our Optical Specialists are standing by to guide your frame selection, discuss lens technologies, or book custom home visits.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="tel:9920300750"
                  className="flex items-center justify-between bg-navy hover:bg-coral text-white hover:text-navy-dark px-6 py-4 rounded-sm font-sans font-semibold tracking-widest text-lg transition-all"
                >
                  <span className="font-mono">9920300750</span>
                  <Phone className="h-5 w-5" />
                </a>

                <div className="flex gap-2">
                  <button
                    onClick={handleCopyNumber}
                    className="flex-1 flex items-center justify-center gap-2 border border-navy/10 hover:border-navy/30 py-3 text-xs tracking-wider uppercase font-medium rounded-sm transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                    <span>{copied ? "Copied" : "Copy Number"}</span>
                  </button>
                  <button
                    onClick={() => setShowCallModal(false)}
                    className="flex-1 border border-navy px-4 py-3 text-xs tracking-wider uppercase font-medium rounded-sm hover:bg-navy hover:text-white transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
