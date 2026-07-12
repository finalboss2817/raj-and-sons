/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, ArrowLeft, Check, Shield, Info, HelpCircle } from "lucide-react";

export default function SmartLensSelector() {
  const [visionType, setVisionType] = useState<"single" | "dual" | null>(null);
  const [dualSubType, setDualSubType] = useState<"bifocal" | "progressive" | null>(null);

  const resetFlow = () => {
    setVisionType(null);
    setDualSubType(null);
  };

  return (
    <section className="bg-ivory/30 py-20 text-navy border-y border-navy/5" id="lens-selector-section">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-semibold tracking-[0.3em] text-coral uppercase mb-3">
            Digital Precision
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
            Smart Lens <span className="italic font-normal text-coral">Selector</span>
          </h2>
          <div className="h-0.5 w-16 bg-navy/10 my-4" />
          <p className="font-sans text-sm md:text-base text-navy/70 leading-relaxed">
            Finding your ideal lens should not require an optical degree. Answer these simple questions to find the perfect coating, material, and focus customized for your lifestyle.
          </p>
        </div>

        {/* Dynamic Card Container with elegant shadow */}
        <div className="bg-white border border-navy/5 p-8 md:p-12 shadow-xl shadow-navy/5 rounded-xs relative overflow-hidden">
          
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy via-coral to-navy" />

          <AnimatePresence mode="wait">
            
            {/* STEP 1: Vision Type Choice */}
            {visionType === null && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col items-center"
              >
                <h3 className="font-serif text-2xl font-bold tracking-wide text-center mb-8">
                  Do you require correction for one distance or multiple?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                  {/* Single Vision */}
                  <button
                    onClick={() => setVisionType("single")}
                    className="group border border-navy/10 hover:border-coral bg-ivory-light/50 hover:bg-white p-6 text-left rounded-sm transition-all shadow-xs hover:shadow-lg cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] tracking-widest text-navy/50 uppercase">Recommended Choice</span>
                      <div className="h-3 w-3 rounded-full bg-navy/10 group-hover:bg-coral transition-colors" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-navy group-hover:text-coral transition-colors">
                      Single Vision
                    </h4>
                    <p className="font-sans text-xs text-navy/70 leading-relaxed mt-2.5">
                      Fitted with a single focal power. Best if you only need glasses for reading, or only for seeing far away (driving, theater, street signs).
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold tracking-wider text-coral uppercase font-sans">
                      <span>View Coating Options</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </button>

                  {/* Dual Vision */}
                  <button
                    onClick={() => setVisionType("dual")}
                    className="group border border-navy/10 hover:border-coral bg-ivory-light/50 hover:bg-white p-6 text-left rounded-sm transition-all shadow-xs hover:shadow-lg cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] tracking-widest text-navy/50 uppercase">Advanced Multi-focus</span>
                      <div className="h-3 w-3 rounded-full bg-navy/10 group-hover:bg-coral transition-colors" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-navy group-hover:text-coral transition-colors">
                      Dual / Multi-Vision
                    </h4>
                    <p className="font-sans text-xs text-navy/70 leading-relaxed mt-2.5">
                      Designed to blend near, intermediate, and far focus. Best if you have reading difficulties due to presbyopia or need assistance for both far and close reading.
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold tracking-wider text-coral uppercase font-sans">
                      <span>Choose Bifocal / Progressive</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2A: Single Vision Flow (Coating Options) */}
            {visionType === "single" && (
              <motion.div
                key="single-flow"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <button onClick={resetFlow} className="text-xs tracking-wider uppercase font-medium text-navy/50 hover:text-coral flex items-center gap-1 cursor-pointer">
                    <ArrowLeft className="h-4 w-4" /> Back to start
                  </button>
                </div>

                <div className="text-center mb-8">
                  <span className="font-mono text-[10px] tracking-widest text-coral uppercase">Coating Comparison</span>
                  <h3 className="font-serif text-2xl font-bold mt-1 text-navy">Select Your Optical Defense Shield</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Blue Coating */}
                  <div className="flex flex-col justify-between border border-navy/5 bg-ivory-light/30 p-6 rounded-sm relative">
                    <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                    <div>
                      {/* Hyper-realistic conceptual lens photography container */}
                      <div className="bg-gradient-to-tr from-sky-50 to-blue-100 aspect-[16/9] w-full rounded-xs flex items-center justify-center border border-sky-100 relative mb-4">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.85),transparent)]" />
                        <div className="h-16 w-16 rounded-full border-2 border-blue-400/30 flex items-center justify-center bg-white/40 shadow-inner relative z-10">
                          <div className="h-12 w-12 rounded-full border border-blue-500/50 bg-blue-400/10 backdrop-blur-xs flex items-center justify-center">
                            <span className="font-mono text-[8px] text-blue-600 font-bold uppercase tracking-widest">99% BLK</span>
                          </div>
                        </div>
                      </div>

                      <h4 className="font-serif text-xl font-bold text-navy flex items-center justify-between">
                        <span>Blue Coating Shield</span>
                        <span className="text-coral">₹800</span>
                      </h4>
                      <p className="font-sans text-sm text-navy/70 leading-relaxed mt-3">
                        Blocks high-energy blue light emitted by computer monitors, laptops, and mobile phones. Significantly reduces sleep disruption and fatigue from extended reading on displays.
                      </p>

                      <div className="mt-5 space-y-2 border-t border-navy/5 pt-4">
                        <span className="font-mono text-[9px] uppercase text-navy/50">Core Benefits:</span>
                        <div className="flex items-center gap-2 text-xs text-navy/80"><Check className="h-4 w-4 text-coral" /> Filters digital eye fatigue</div>
                        <div className="flex items-center gap-2 text-xs text-navy/80"><Check className="h-4 w-4 text-coral" /> Minimizes night headlight reflection</div>
                      </div>
                    </div>
                  </div>

                  {/* Green Coating */}
                  <div className="flex flex-col justify-between border border-navy/5 bg-ivory-light/30 p-6 rounded-sm relative">
                    <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <div>
                      {/* Hyper-realistic green lens conceptual photography container */}
                      <div className="bg-gradient-to-tr from-emerald-50 to-emerald-100 aspect-[16/9] w-full rounded-xs flex items-center justify-center border border-emerald-100 relative mb-4">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.85),transparent)]" />
                        <div className="h-16 w-16 rounded-full border-2 border-emerald-400/30 flex items-center justify-center bg-white/40 shadow-inner relative z-10">
                          <div className="h-12 w-12 rounded-full border border-emerald-500/50 bg-emerald-400/10 backdrop-blur-xs flex items-center justify-center">
                            <span className="font-mono text-[8px] text-emerald-600 font-bold uppercase tracking-widest">99% CLR</span>
                          </div>
                        </div>
                      </div>

                      <h4 className="font-serif text-xl font-bold text-navy flex items-center justify-between">
                        <span>Green Coating Shield</span>
                        <span className="text-coral">₹800</span>
                      </h4>
                      <p className="font-sans text-sm text-navy/70 leading-relaxed mt-3">
                        Our premium multi-resistant coating. Maximizes clear light passage through the lens (over 99% light transmission). Perfect for nighttime driving by suppressing streetlamp halos completely.
                      </p>

                      <div className="mt-5 space-y-2 border-t border-navy/5 pt-4">
                        <span className="font-mono text-[9px] uppercase text-navy/50">Core Benefits:</span>
                        <div className="flex items-center gap-2 text-xs text-navy/80"><Check className="h-4 w-4 text-coral" /> Over 99% crystal light transmission</div>
                        <div className="flex items-center gap-2 text-xs text-navy/80"><Check className="h-4 w-4 text-coral" /> Superior dust and scratch resistance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2B: Dual Vision Flow Selection */}
            {visionType === "dual" && dualSubType === null && (
              <motion.div
                key="dual-selection"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col items-center"
              >
                <div className="w-full flex justify-start mb-6">
                  <button onClick={resetFlow} className="text-xs tracking-wider uppercase font-medium text-navy/50 hover:text-coral flex items-center gap-1 cursor-pointer">
                    <ArrowLeft className="h-4 w-4" /> Back to start
                  </button>
                </div>

                <h3 className="font-serif text-2xl font-bold tracking-wide text-center mb-8">
                  Choose your multi-focus optical architecture
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                  {/* Bifocal Choice */}
                  <button
                    onClick={() => setDualSubType("bifocal")}
                    className="group border border-navy/10 hover:border-coral bg-ivory-light/50 hover:bg-white p-6 text-left rounded-sm transition-all shadow-xs hover:shadow-lg cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] tracking-widest text-navy/50 uppercase">Classic Line Bifocal</span>
                      <div className="h-3 w-3 rounded-full bg-navy/10 group-hover:bg-coral transition-colors" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-navy group-hover:text-coral transition-colors">
                      Bifocal Lenses
                    </h4>
                    <p className="font-sans text-xs text-navy/70 leading-relaxed mt-2.5">
                      Features a visible line dividing far-distance vision and reading vision. Offers distinct, wide reading zones at an affordable point.
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold tracking-wider text-coral uppercase font-sans">
                      <span>View Pricing (From ₹550)</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </button>

                  {/* Progressive Choice */}
                  <button
                    onClick={() => setDualSubType("progressive")}
                    className="group border border-navy/10 hover:border-coral bg-ivory-light/50 hover:bg-white p-6 text-left rounded-sm transition-all shadow-xs hover:shadow-lg cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] tracking-widest text-coral uppercase">Modern No-Line Tech</span>
                      <div className="h-3 w-3 rounded-full bg-navy/10 group-hover:bg-coral transition-colors" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-navy group-hover:text-coral transition-colors">
                      Progressive Lenses
                    </h4>
                    <p className="font-sans text-xs text-navy/70 leading-relaxed mt-2.5">
                      Advanced no-line digital design. Glides smoothly from far distance, intermediate desktop/dashboard range, and close reading without any visible lines.
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold tracking-wider text-coral uppercase font-sans">
                      <span>View Premium Options</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3B-1: Bifocal Detail */}
            {visionType === "dual" && dualSubType === "bifocal" && (
              <motion.div
                key="bifocal-flow"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <button onClick={() => setDualSubType(null)} className="text-xs tracking-wider uppercase font-medium text-navy/50 hover:text-coral flex items-center gap-1 cursor-pointer">
                    <ArrowLeft className="h-4 w-4" /> Back to choices
                  </button>
                </div>

                <div className="text-center mb-8">
                  <span className="font-mono text-[10px] tracking-widest text-coral uppercase">Bifocal Curation</span>
                  <h3 className="font-serif text-2xl font-bold mt-1 text-navy">Visually Divided Precision</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Hard Coat Lens */}
                  <div className="border border-navy/5 bg-ivory-light/30 p-6 rounded-sm">
                    <h4 className="font-serif text-xl font-bold text-navy flex items-baseline justify-between">
                      <span>HC Classic Lens</span>
                      <span className="text-coral">₹550</span>
                    </h4>
                    <div className="h-0.5 w-8 bg-navy/10 my-3" />
                    <p className="font-sans text-sm text-navy/70 leading-relaxed">
                      Standard hard-coated bifocal lens. Gives crisp dual far-near vision with solid surface hardness to resist scratches. Visible semi-circle reading segment.
                    </p>
                    <ul className="mt-4 space-y-1 text-xs text-navy/70 font-sans">
                      <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-coral" /> Clear segmented boundary</li>
                      <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-coral" /> Resists basic abrasive friction</li>
                    </ul>
                  </div>

                  {/* Green Coating Bifocal */}
                  <div className="border border-navy/5 bg-ivory-light/30 p-6 rounded-sm">
                    <h4 className="font-serif text-xl font-bold text-navy flex items-baseline justify-between">
                      <span>Green Anti-Reflective Coating</span>
                      <span className="text-coral">₹1000 - ₹1500</span>
                    </h4>
                    <div className="h-0.5 w-8 bg-navy/10 my-3" />
                    <p className="font-sans text-sm text-navy/70 leading-relaxed">
                      Classic bifocal lens enhanced with high-transparency green anti-glare coatings. Protects against glare from lights and monitors, boosting visual contrast.
                    </p>
                    <ul className="mt-4 space-y-1 text-xs text-navy/70 font-sans">
                      <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-coral" /> Reduced light scattering and halos</li>
                      <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-coral" /> Premium hydrophobic protective barrier</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3B-2: Progressive Detail */}
            {visionType === "dual" && dualSubType === "progressive" && (
              <motion.div
                key="progressive-flow"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <button onClick={() => setDualSubType(null)} className="text-xs tracking-wider uppercase font-medium text-navy/50 hover:text-coral flex items-center gap-1 cursor-pointer">
                    <ArrowLeft className="h-4 w-4" /> Back to choices
                  </button>
                </div>

                <div className="text-center mb-8">
                  <span className="font-mono text-[10px] tracking-widest text-coral uppercase">Progressive Tech</span>
                  <h3 className="font-serif text-2xl font-bold mt-1 text-navy">No-Line Invisible Transition</h3>
                </div>

                <div className="max-w-3xl mx-auto bg-ivory-light/30 border border-navy/5 p-6 md:p-8 rounded-sm">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    
                    <div className="flex-1">
                      <span className="font-mono text-[9px] tracking-wider text-coral uppercase">Digital Corridor Design</span>
                      <h4 className="font-serif text-2xl font-bold mt-1 text-navy">
                        Starting from ₹1500 - ₹6000
                      </h4>
                      <p className="font-sans text-sm text-navy/70 leading-relaxed mt-3">
                        Progressive lens pricing scales depending upon three factors:
                      </p>
                      <ul className="mt-4 space-y-2.5 text-xs text-navy/80 font-sans">
                        <li className="flex items-start gap-2">
                          <span className="h-5 w-5 rounded-full bg-navy/5 text-coral font-bold flex items-center justify-center flex-shrink-0 text-[10px]">1</span>
                          <span><strong>Visual Corridor Width:</strong> Higher quality lenses have wider sweet-spots with minimal peripheral distortion.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="h-5 w-5 rounded-full bg-navy/5 text-coral font-bold flex items-center justify-center flex-shrink-0 text-[10px]">2</span>
                          <span><strong>Lens Index (Thickness):</strong> Refined materials provide lighter, thinner glass structures for strong prescription powers.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="h-5 w-5 rounded-full bg-navy/5 text-coral font-bold flex items-center justify-center flex-shrink-0 text-[10px]">3</span>
                          <span><strong>Digital Freeform Milling:</strong> Precision laser-milled on back-surfaces for instantaneous ocular focus.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="w-full md:w-64 bg-white border border-navy/5 p-5 rounded-xs flex flex-col items-center">
                      <span className="font-mono text-[9px] text-navy/40 uppercase tracking-widest mb-3">Lens Architecture</span>
                      
                      {/* Interactive progressive visual helper */}
                      <div className="h-40 w-32 border border-navy/10 rounded-full relative flex flex-col items-center justify-between py-4 bg-gradient-to-b from-blue-50/20 via-white to-coral-dark/[0.03]">
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-y border-dashed border-navy/10 h-10 w-full flex items-center justify-center">
                          <span className="font-mono text-[8px] text-navy/40 uppercase tracking-widest">Intermediate</span>
                        </div>
                        <div className="relative text-[9px] font-mono font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded-xs">Far Sight</div>
                        <div className="relative text-[9px] font-mono font-bold tracking-widest uppercase text-coral bg-coral/5 px-2 py-0.5 rounded-xs">Close Read</div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
