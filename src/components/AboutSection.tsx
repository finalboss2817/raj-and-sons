/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Award, Clock, Users, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  const timeline = [
    {
      year: "1992",
      title: "The Founding Era",
      desc: "Shri Rajendra Gaurishankar Trivedi laid the foundations of Raj & Sons with a hand-selected catalog of metal frames and a focus on visual health, establishing a standard of absolute honesty and personalized ocular care."
    },
    {
      year: "2000",
      title: "Expanded Product Curation",
      desc: "Introduced advanced architectural designs, expanding the product catalog to include high-index materials and lightweight wireframes to cater to a new generation of families."
    },
    {
      year: "2015",
      title: "Modern Lens Laboratories",
      desc: "Partnered with German lens mills like Boscher and Celebrations to introduce computerized diagnostic optics, blue-coat screen defense layers, and customized progressive corridors."
    },
    {
      year: "2025",
      title: "Digital Doorstep Showroom",
      desc: "Launched our luxury interactive digital experience and Home Frame Trial initiative under Meena Technologies, bringing custom vision checks directly to our patients' living rooms."
    }
  ];

  return (
    <section className="bg-white py-24 text-navy border-t border-navy/5" id="about-section">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Core Narrative Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Column: Founder Monochrome Portrait */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] w-full bg-ivory rounded-sm overflow-hidden shadow-2xl border border-navy/5"
            >
              {/* High-quality monochrome portrait seed of a wise elder gentleman */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                alt="Shri Rajendra Gaurishankar Trivedi, Founder"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover filter grayscale contrast-110 sepia-[15%]"
              />
              {/* Ambient Shadow Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-transparent" />
              
              {/* Photo Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold block mb-1">Founder</span>
                <h4 className="font-serif text-xl font-bold tracking-wide">Shri Rajendra G. Trivedi</h4>
                <p className="font-sans text-xs text-white/70 italic mt-1">"Eyewear is not an accessory; it is a lens through which you experience the beauty of life."</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Text Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-mono text-xs font-semibold tracking-[0.3em] text-coral uppercase mb-3 block">
              Established 1992
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
              Our Heritage <span className="italic font-normal text-coral">& Legacy</span>
            </h2>
            <div className="h-0.5 w-16 bg-navy/10 mb-8" />

            <div className="space-y-6 font-sans text-base leading-relaxed text-navy/85">
              <p>
                <strong>Raj & Sons</strong> was founded in 1992 by <strong>Shri Rajendra Gaurishankar Trivedi</strong> with a simple, unyielding mission: to provide high-quality optical eyewear with absolute honesty, pristine precision, and personal care.
              </p>
              <p>
                For over three decades, we have remained a family-owned business, avoiding mass-market templates in favor of bespoke showroom consultations and patient trust. Over the years, our signature has become synonymous with elite lens crafting and meticulous eye health care, serving multiple generations of families in Mumbai.
              </p>
              <p>
                Now managed under <strong>Meena Technologies</strong>, we continue to bridge our core legacy with state-of-the-art vision checking devices, digital freeform lens designs, and interactive home trial styling assistants.
              </p>
            </div>

            {/* Quick Metrics stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-navy/5">
              <div>
                <span className="font-serif text-3xl font-bold text-navy">30+</span>
                <span className="font-mono text-[10px] tracking-wider uppercase text-navy/50 block mt-1">Years of Trust</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-navy">15,000+</span>
                <span className="font-mono text-[10px] tracking-wider uppercase text-navy/50 block mt-1">Happy Patients</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-navy">100%</span>
                <span className="font-mono text-[10px] tracking-wider uppercase text-navy/50 block mt-1">Family Owned</span>
              </div>
            </div>

          </div>

        </div>

        {/* Timeline Interactive Component */}
        <div className="border-t border-navy/5 pt-20">
          <div className="text-center mb-16">
            <span className="font-mono text-xs font-semibold tracking-[0.3em] text-coral uppercase mb-2 block">Chronology of Growth</span>
            <h3 className="font-serif text-3xl font-light tracking-tight">Our Timeline Journey</h3>
          </div>

          <div className="relative border-l border-navy/10 ml-4 md:ml-32 space-y-12">
            {timeline.map((node, idx) => (
              <motion.div
                key={node.year}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Year Badge Node */}
                <div className="absolute -left-[17px] top-1.5 h-8 w-8 rounded-full bg-white border-2 border-coral flex items-center justify-center font-mono text-[11px] font-bold text-navy shadow-xs">
                  {idx + 1}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  {/* Year block */}
                  <div className="md:col-span-2">
                    <span className="font-serif text-3xl font-black text-coral block leading-none">
                      {node.year}
                    </span>
                  </div>

                  {/* Desc block */}
                  <div className="md:col-span-10 bg-ivory/20 border border-navy/5 p-6 rounded-sm">
                    <h4 className="font-serif text-lg font-bold text-navy mb-2">
                      {node.title}
                    </h4>
                    <p className="font-sans text-sm leading-relaxed text-navy/70">
                      {node.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
