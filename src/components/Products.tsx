/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Eye, MessageSquare, Check, Calendar, Sparkles, X, ZoomIn, ShieldCheck, Tag } from "lucide-react";
import { FRAME_CATEGORIES as allFrames } from "../data";
import { FrameProduct } from "../types";

interface ProductsProps {
  setActiveTab: (tab: string) => void;
  setSelectedFrameForTrial: (frameName: string) => void;
}

export default function Products({ setActiveTab, setSelectedFrameForTrial }: ProductsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeFrameDetail, setActiveFrameDetail] = useState<FrameProduct | null>(null);
  const [selectedColorCode, setSelectedColorCode] = useState<string>("");
  const [isZoomed, setIsZoomed] = useState(false);

  const filters = [
    { id: "All", label: "Show All" },
    { id: "Smart AI", label: "AI Smart Glasses", highlight: true },
    { id: "Haute Couture", label: "Haute Couture Runway" },
    { id: "Fahrenheit Series", label: "Fahrenheit Optical" },
    { id: "Material", label: "Classic Materials" },
    { id: "Specialty", label: "Specialty & Sun" },
  ];

  // Helper to categorize frames for filter tabs
  const getFilterCategory = (frame: FrameProduct) => {
    if (frame.category === "Smart AI" || frame.subCategory === "Smart AI") return "Smart AI";
    if (frame.category === "Haute Couture" || frame.subCategory === "Haute Couture") return "Haute Couture";
    if (frame.category === "Fahrenheit Series" || frame.subCategory === "Fahrenheit Series") return "Fahrenheit Series";
    
    const materials = ["TR90", "Metal", "Acetate", "Rimless", "Half Rim"];
    const specialties = ["Computer", "Sunglasses", "Clip-On", "Magnetic"];
    
    if (materials.includes(frame.category)) return "Material";
    if (specialties.includes(frame.category)) return "Specialty";
    return "Collection";
  };

  const filteredFrames = allFrames.filter((frame) => {
    const matchesSearch = 
      frame.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      frame.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (frame.designerBrand && frame.designerBrand.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (frame.modelCode && frame.modelCode.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = selectedFilter === "All" || getFilterCategory(frame) === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleReserve = (frame: FrameProduct, colorChoice?: string) => {
    const label = colorChoice ? `${frame.name} (${colorChoice})` : frame.name;
    setSelectedFrameForTrial(label);
    setActiveTab("trial");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getWhatsAppLink = (frame: FrameProduct, colorChoice?: string) => {
    const colorText = colorChoice ? `\n🎨 *Color / Code:* ${colorChoice}` : "";
    const modelText = frame.modelCode ? `\n🏷️ *Model:* ${frame.modelCode}` : "";
    const text = encodeURIComponent(
      `Hello Raj & Sons,\n\nI am viewing your luxury eyewear catalog and would like to check availability for:\n✨ *${frame.name}* (Starting ₹${frame.startingPrice})${modelText}${colorText}\n\nCan you guide me on lens fitting options and availability?`
    );
    return `https://api.whatsapp.com/send?phone=919920300750&text=${text}`;
  };

  const openSpecsModal = (frame: FrameProduct) => {
    setActiveFrameDetail(frame);
    setSelectedColorCode(frame.availableColors && frame.availableColors.length > 0 ? frame.availableColors[0] : "");
    setIsZoomed(false);
  };

  return (
    <section className="bg-white py-20 text-navy" id="catalog-section">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-[0.3em] text-coral uppercase mb-3">
            Handcrafted Curation Since 1992
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-navy leading-tight">
            Our Frame <span className="italic font-normal text-coral">Collections</span>
          </h2>
          <div className="h-0.5 w-16 bg-navy/10 my-4" />
          <p className="font-sans text-navy/70 leading-relaxed text-sm md:text-base">
            From world-class Haute Couture runway pieces (Prada, Cartier, Louis Vuitton, DITA) and architectural Fahrenheit optics to next-generation AI smart eyewear. Every frame is hand-inspected for optical balance and structural longevity.
          </p>
        </div>

        {/* Filter and Search Interface */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 border-b border-navy/5 pb-8 mb-12">
          
          {/* Filters List */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-xs tracking-wider uppercase font-medium transition-all rounded-full cursor-pointer ${
                  selectedFilter === filter.id
                    ? "bg-navy text-ivory shadow-md shadow-navy/15 scale-105"
                    : "bg-ivory/40 text-navy/75 hover:bg-ivory hover:text-navy"
                }`}
              >
                {filter.highlight && <Sparkles className="h-3 w-3 text-coral animate-pulse" />}
                {filter.label}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full lg:w-80">
            <input
              type="text"
              placeholder="Search Prada, Cartier, FA-7848, TR90..."
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
              transition={{ delay: (index % 3) * 0.08, duration: 0.5 }}
              className="group relative flex flex-col justify-between bg-ivory-light/60 border border-navy/5 p-6 rounded-sm transition-all duration-300 hover:shadow-2xl hover:shadow-navy/10 hover:-translate-y-1.5"
            >
              <div>
                {/* Image Showcase Container */}
                <div 
                  onClick={() => openSpecsModal(frame)}
                  className="relative overflow-hidden bg-white aspect-square w-full rounded-xs flex items-center justify-center p-6 border border-navy/5 shadow-inner cursor-pointer"
                >
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    src={frame.image}
                    alt={frame.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain filter drop-shadow-md"
                  />
                  
                  {/* Top Left Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1 items-start">
                    <span className="bg-navy px-2.5 py-1 font-mono text-[9px] tracking-widest text-ivory uppercase rounded-xs shadow-xs font-semibold">
                      {frame.category}
                    </span>
                    {frame.badge && (
                      <span className="bg-coral text-navy-dark px-2 py-0.5 font-mono text-[8.5px] tracking-widest uppercase rounded-xs font-bold shadow-xs">
                        {frame.badge}
                      </span>
                    )}
                  </div>

                  {/* Pricing Tag */}
                  <div className="absolute bottom-4 right-4 bg-white/95 border border-navy/5 backdrop-blur-xs px-3 py-1 font-sans font-bold text-xs tracking-wide text-navy shadow-sm rounded-xs">
                    Starting <span className="text-coral">₹{frame.startingPrice}</span>
                  </div>

                  {/* Zoom prompt icon on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-navy/80 text-white p-1.5 rounded-full backdrop-blur-xs">
                    <ZoomIn className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Brand & Model metadata */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-coral">
                    {frame.designerBrand || "Raj & Sons Heritage"}
                  </span>
                  {frame.modelCode && (
                    <span className="font-mono text-[9.5px] bg-navy/5 text-navy/70 px-2 py-0.5 rounded-xs font-semibold">
                      {frame.modelCode}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <div className="mt-2">
                  <h3 className="font-serif text-xl font-bold tracking-wide text-navy group-hover:text-coral transition-colors line-clamp-1">
                    {frame.name}
                  </h3>
                  <p className="font-sans text-xs text-navy/70 leading-relaxed mt-2 h-14 overflow-hidden text-ellipsis line-clamp-3">
                    {frame.description}
                  </p>
                </div>

                {/* Available Color Codes (if present) */}
                {frame.availableColors && frame.availableColors.length > 0 && (
                  <div className="mt-3.5 pt-3 border-t border-navy/5 flex flex-wrap gap-1.5 items-center">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-navy/40 mr-1">
                      Colors:
                    </span>
                    {frame.availableColors.map((col, cIdx) => (
                      <span
                        key={cIdx}
                        className="font-mono text-[9.5px] bg-white border border-navy/10 px-2 py-0.5 rounded-xs text-navy/80 font-medium"
                      >
                        {col}
                      </span>
                    ))}
                  </div>
                )}

                {/* Mini features checklist */}
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono uppercase text-navy/60">
                  {frame.features.slice(0, 2).map((feat, fIdx) => (
                    <span key={fIdx} className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-coral shrink-0" />
                      <span className="truncate max-w-[130px]">{feat}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Area */}
              <div className="mt-6 pt-5 border-t border-navy/5 flex flex-col gap-2">
                
                {/* Main Conversion CTA: Interactive scheduling */}
                <button
                  onClick={() => handleReserve(frame)}
                  className="w-full flex items-center justify-center gap-2 bg-navy hover:bg-coral text-white hover:text-navy-dark py-3 text-xs tracking-widest font-semibold uppercase rounded-xs transition-colors cursor-pointer shadow-sm"
                  id={`btn-reserve-${frame.id}`}
                >
                  <Calendar className="h-4 w-4" />
                  <span>Reserve & Try At Home</span>
                </button>

                {/* Secondary Engagement grid */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => openSpecsModal(frame)}
                    className="flex items-center justify-center gap-1.5 border border-navy/10 hover:border-navy px-3 py-2 text-[11px] font-semibold tracking-wider uppercase text-navy/70 hover:text-navy rounded-xs transition-all cursor-pointer"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>View Details</span>
                  </button>

                  <a
                    href={getWhatsAppLink(frame)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-3 py-2 text-[11px] font-semibold tracking-wider uppercase rounded-xs transition-all"
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
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

      {/* Frame Specifications & High-Res Inspection Modal */}
      <AnimatePresence>
        {activeFrameDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-navy-dark/85 backdrop-blur-sm"
              onClick={() => setActiveFrameDetail(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-3xl bg-white p-6 md:p-8 rounded-sm shadow-2xl text-navy max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveFrameDetail(null)}
                className="absolute top-4 right-4 p-2 text-navy/40 hover:text-navy hover:bg-navy/5 rounded-full transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                
                {/* Product Close-up & Inspection */}
                <div className="flex flex-col gap-3">
                  <div 
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="relative overflow-hidden bg-ivory/40 p-6 rounded-xs flex items-center justify-center border border-navy/5 shadow-inner cursor-zoom-in aspect-square"
                  >
                    <img 
                      src={activeFrameDetail.image} 
                      alt={activeFrameDetail.name} 
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 ${
                        isZoomed ? "scale-150" : "scale-100"
                      }`} 
                    />

                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-mono text-navy/70 flex items-center gap-1 shadow-xs">
                      <ZoomIn className="h-3 w-3 text-coral" />
                      <span>{isZoomed ? "Click to Reset" : "Click to Enlarge"}</span>
                    </div>
                  </div>

                  {/* Packaging / Presentation Badge */}
                  {activeFrameDetail.packageIncludes && (
                    <div className="bg-coral/10 border border-coral/20 p-3 rounded-xs text-xs">
                      <span className="font-mono text-[9.5px] uppercase font-bold text-coral block mb-1">
                        📦 Box & Accessories Included:
                      </span>
                      <span className="font-sans text-navy/80 text-[11px] leading-relaxed">
                        {activeFrameDetail.packageIncludes}
                      </span>
                    </div>
                  )}
                </div>

                {/* Specification Details */}
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] tracking-[0.25em] text-coral uppercase font-bold">
                        {activeFrameDetail.designerBrand || "Raj & Sons Heritage"}
                      </span>
                      {activeFrameDetail.badge && (
                        <span className="bg-navy text-white text-[9px] font-mono px-2 py-0.5 rounded-xs uppercase">
                          {activeFrameDetail.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-navy">
                      {activeFrameDetail.name}
                    </h3>

                    {activeFrameDetail.modelCode && (
                      <span className="inline-block mt-1 font-mono text-xs font-semibold bg-navy/5 text-navy/70 px-2.5 py-0.5 rounded-xs">
                        Model Code: {activeFrameDetail.modelCode}
                      </span>
                    )}

                    <div className="h-0.5 w-12 bg-navy/10 my-3" />
                    
                    <p className="font-sans text-xs md:text-sm text-navy/70 leading-relaxed">
                      {activeFrameDetail.description}
                    </p>

                    {/* Colorway Selection if available */}
                    {activeFrameDetail.availableColors && activeFrameDetail.availableColors.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-navy/5">
                        <span className="font-mono text-[10px] tracking-wider uppercase text-navy/50 block mb-2 font-bold">
                          Select Color Code:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {activeFrameDetail.availableColors.map((col, idx) => (
                            <button
                              key={idx}
                              onClick={() => setSelectedColorCode(col)}
                              className={`px-3 py-1.5 rounded-xs text-xs font-mono font-medium border transition-all cursor-pointer ${
                                selectedColorCode === col
                                  ? "bg-navy text-white border-navy shadow-xs"
                                  : "bg-ivory/50 text-navy/80 border-navy/15 hover:border-navy"
                              }`}
                            >
                              {col}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Feature list */}
                    <div className="mt-5">
                      <span className="font-mono text-[10px] tracking-wider uppercase text-navy/50 block mb-2 font-bold">
                        Craftsmanship & Specifications:
                      </span>
                      <ul className="space-y-1.5">
                        {activeFrameDetail.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-navy/80 font-sans">
                            <Check className="h-3.5 w-3.5 text-coral shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                        <li className="flex items-center gap-2 text-xs text-navy/80 font-sans">
                          <Check className="h-3.5 w-3.5 text-coral shrink-0" />
                          <span>Custom Prescription Lens Milled with Meena Tech Accuracy</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Modal Footer / Actions */}
                  <div className="mt-8 pt-4 border-t border-navy/5">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-xs text-navy/50 uppercase tracking-wider font-mono">Showroom Base Price</span>
                      <span className="text-xl font-bold text-coral">₹{activeFrameDetail.startingPrice} onwards</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        onClick={() => {
                          handleReserve(activeFrameDetail, selectedColorCode);
                          setActiveFrameDetail(null);
                        }}
                        className="flex-1 bg-navy hover:bg-coral text-white hover:text-navy-dark py-3.5 text-xs font-semibold tracking-widest uppercase transition-colors rounded-xs cursor-pointer text-center"
                      >
                        Reserve & Book Home Trial
                      </button>

                      <a
                        href={getWhatsAppLink(activeFrameDetail, selectedColorCode)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 border border-emerald-500 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-4 py-3.5 text-xs font-semibold tracking-wider uppercase rounded-xs transition-all"
                      >
                        <MessageSquare className="h-4 w-4 text-emerald-600" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
