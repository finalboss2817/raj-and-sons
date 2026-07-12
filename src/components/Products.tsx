/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Search, Eye, HelpCircle, MessageSquare, Check, Calendar, ArrowRight } from "lucide-react";
import { FRAME_CATEGORIES, FRAME_CATEGORIES as allFrames } from "../data";
import { FrameProduct } from "../types";

interface ProductsProps {
  setActiveTab: (tab: string) => void;
  setSelectedFrameForTrial: (frameName: string) => void;
}

export default function Products({ setActiveTab, setSelectedFrameForTrial }: ProductsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeFrameDetail, setActiveFrameDetail] = useState<FrameProduct | null>(null);

  const filters = [
    { id: "All", label: "Show All" },
    { id: "Material", label: "Premium Materials" },
    { id: "Specialty", label: "Specialty Lenses" },
    { id: "Collection", label: "Heritage Collections" },
  ];

  // Helper to categorize frames for filter tabs
  const getFilterCategory = (frame: FrameProduct) => {
    const materials = ["TR90", "Metal", "Acetate", "Rimless", "Half Rim"];
    const specialties = ["Computer", "Sunglasses", "Clip-On", "Magnetic"];
    const collections = ["Women", "Kids", "Fancy", "Premium"];
    
    if (materials.includes(frame.category)) return "Material";
    if (specialties.includes(frame.category)) return "Specialty";
    if (collections.includes(frame.category)) return "Collection";
    return "Other";
  };

  const filteredFrames = allFrames.filter((frame) => {
    const matchesSearch = frame.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          frame.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "All" || getFilterCategory(frame) === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleReserve = (frame: FrameProduct) => {
    // Save selection to React state and shift tab to the AI trial chat
    setSelectedFrameForTrial(frame.name);
    setActiveTab("trial");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getWhatsAppLink = (frame: FrameProduct) => {
    const text = encodeURIComponent(
      `Hello Raj & Sons,\n\nI am viewing your luxury eyewear showroom and would like to check availability for:\n✨ *${frame.name}* (Starting ₹${frame.startingPrice})\n\nCan you guide me on lens options and availability?`
    );
    return `https://api.whatsapp.com/send?phone=919920300750&text=${text}`;
  };

  return (
    <section className="bg-white py-20 text-navy" id="catalog-section">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-[0.3em] text-coral uppercase mb-3">
            Pure Craftsmanship
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-navy leading-tight">
            Our Frame <span className="italic font-normal text-coral">Collections</span>
          </h2>
          <div className="h-0.5 w-16 bg-navy/10 my-4" />
          <p className="font-sans text-navy/70 leading-relaxed text-base">
            Every frame in our collection is handpicked to meet three standards: structural longevity, optical balance, and absolute comfort. Filter by premium materials or specialized utility to find your perfect match.
          </p>
        </div>

        {/* Filter and Search Interface */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-navy/5 pb-8 mb-12">
          
          {/* Filters List */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-5 py-2.5 text-xs tracking-wider uppercase font-medium transition-all rounded-full cursor-pointer ${
                  selectedFilter === filter.id
                    ? "bg-navy text-ivory shadow-md shadow-navy/15"
                    : "bg-ivory/40 text-navy/75 hover:bg-ivory hover:text-navy"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search optical styles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-ivory/20 border border-navy/10 rounded-full px-5 py-2.5 pl-12 text-sm tracking-wide text-navy placeholder:text-navy/40 focus:outline-none focus:border-coral transition-colors"
            />
            <Search className="absolute left-4 top-3.5 h-4 w-4 text-navy/40" />
          </div>

        </div>

        {/* Product Cards Showroom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFrames.map((frame, index) => (
            <motion.div
              key={frame.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
              className="group relative flex flex-col justify-between bg-ivory-light border border-navy/5 p-6 rounded-sm transition-all duration-300 hover:shadow-2xl hover:shadow-navy/5 hover:-translate-y-1.5"
            >
              <div>
                {/* Image Showcase Container */}
                <div className="relative overflow-hidden bg-white aspect-square w-full rounded-xs flex items-center justify-center p-6 border border-navy/5 shadow-inner">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    src={frame.image}
                    alt={frame.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain filter drop-shadow-md"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 bg-navy px-3 py-1 font-mono text-[9px] tracking-widest text-ivory uppercase rounded-sm">
                    {frame.category}
                  </div>

                  {/* Pricing Tag */}
                  <div className="absolute bottom-4 right-4 bg-white/95 border border-navy/5 backdrop-blur-xs px-3.5 py-1.5 font-sans font-bold text-sm tracking-wide text-navy shadow-xs rounded-sm">
                    Starting <span className="text-coral">₹{frame.startingPrice}</span>
                  </div>
                </div>

                {/* Info Text */}
                <div className="mt-6">
                  <h3 className="font-serif text-xl font-bold tracking-wide text-navy group-hover:text-coral transition-colors">
                    {frame.name}
                  </h3>
                  <p className="font-sans text-sm text-navy/70 leading-relaxed mt-2.5 h-16 overflow-hidden text-ellipsis">
                    {frame.description}
                  </p>
                </div>

                {/* Mini features checklist */}
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono uppercase text-navy/50">
                  {frame.features.slice(0, 2).map((feat, fIdx) => (
                    <span key={fIdx} className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-coral" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Area */}
              <div className="mt-8 pt-6 border-t border-navy/5 flex flex-col gap-2">
                
                {/* Main Conversion CTA: Interactive scheduling */}
                <button
                  onClick={() => handleReserve(frame)}
                  className="w-full flex items-center justify-center gap-2 bg-navy hover:bg-coral text-white hover:text-navy-dark py-3 text-xs tracking-widest font-semibold uppercase rounded-xs transition-colors cursor-pointer"
                  id={`btn-reserve-${frame.id}`}
                >
                  <Calendar className="h-4 w-4" />
                  <span>Reserve & Try At Home</span>
                </button>

                {/* Secondary Engagement grid */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveFrameDetail(frame)}
                    className="flex items-center justify-center gap-1.5 border border-navy/10 hover:border-navy px-3 py-2 text-[11px] font-semibold tracking-wider uppercase text-navy/70 hover:text-navy rounded-xs transition-all cursor-pointer"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>Check Specs</span>
                  </button>

                  <a
                    href={getWhatsAppLink(frame)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-3 py-2 text-[11px] font-semibold tracking-wider uppercase rounded-xs transition-all"
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Showroom visual alert if search returns zero */}
        {filteredFrames.length === 0 && (
          <div className="text-center py-24 bg-ivory/20 rounded-sm border border-dashed border-navy/10">
            <p className="font-serif text-xl text-navy/60 italic">No optical frames matched your search query.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedFilter("All"); }}
              className="mt-4 border-b border-coral text-xs tracking-widest uppercase font-semibold text-coral cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Frame Specifications Detailed Lightbox Modal */}
      {activeFrameDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-navy-dark/85 backdrop-blur-sm"
            onClick={() => setActiveFrameDetail(null)}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 w-full max-w-2xl bg-white p-8 rounded-sm shadow-2xl text-navy"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Product Close-up */}
              <div className="bg-ivory/30 p-6 rounded-xs flex items-center justify-center border border-navy/5 shadow-inner">
                <img 
                  src={activeFrameDetail.image} 
                  alt={activeFrameDetail.name} 
                  referrerPolicy="no-referrer"
                  className="w-full object-contain filter drop-shadow-md" 
                />
              </div>

              {/* Specification Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9px] tracking-[0.3em] text-coral uppercase">
                    Heritage Curation • since 1992
                  </span>
                  <h3 className="font-serif text-3xl font-bold tracking-wide mt-2 text-navy">
                    {activeFrameDetail.name}
                  </h3>
                  <div className="h-0.5 w-12 bg-navy/10 my-3" />
                  <p className="font-sans text-sm text-navy/70 leading-relaxed">
                    {activeFrameDetail.description}
                  </p>

                  <div className="mt-5">
                    <span className="font-mono text-[10px] tracking-wider uppercase text-navy/50 block mb-2">
                      Materials & Quality Assured:
                    </span>
                    <ul className="space-y-2">
                      {activeFrameDetail.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-navy/80 font-sans">
                          <Check className="h-3.5 w-3.5 text-coral" />
                          <span>{feat}</span>
                        </li>
                      ))}
                      <li className="flex items-center gap-2 text-xs text-navy/80 font-sans">
                        <Check className="h-3.5 w-3.5 text-coral" />
                        <span>Fitted with Meena Tech Premium Alignment</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-navy/5">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs text-navy/50 uppercase tracking-wider">Showroom Base Price</span>
                    <span className="text-xl font-bold text-coral">₹{activeFrameDetail.startingPrice} onwards</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        handleReserve(activeFrameDetail);
                        setActiveFrameDetail(null);
                      }}
                      className="flex-1 bg-navy hover:bg-coral text-white hover:text-navy-dark py-3.5 text-xs font-semibold tracking-widest uppercase transition-colors rounded-xs cursor-pointer"
                    >
                      Reserve Frame
                    </button>
                    <button
                      onClick={() => setActiveFrameDetail(null)}
                      className="border border-navy px-5 py-3.5 text-xs font-semibold tracking-widest uppercase rounded-xs hover:bg-navy/5 transition-all cursor-pointer"
                    >
                      Close Specs
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
}
