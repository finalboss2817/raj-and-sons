/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Phone, Sparkles, MapPin, Calendar } from "lucide-react";

// Import modular sub-components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import SmartLensSelector from "./components/SmartLensSelector";
import HomeTrialAssistant from "./components/HomeTrialAssistant";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import StoreSection from "./components/StoreSection";
import Footer from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("products");
  const [selectedFrame, setSelectedFrame] = useState<string>("");

  const catalogRef = useRef<HTMLDivElement>(null);

  const scrollToCatalog = () => {
    if (activeTab !== "products") {
      setActiveTab("products");
      // Wait for tab switch animation to mount and then scroll
      setTimeout(() => {
        catalogRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      catalogRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openBookingWithFrame = (frameName?: string) => {
    if (frameName) {
      setSelectedFrame(frameName);
    }
    setActiveTab("trial");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-ivory-light text-navy flex flex-col justify-between selection:bg-navy selection:text-ivory">
      
      {/* Luxury Navigation Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        openBookingWithFrame={openBookingWithFrame} 
      />

      {/* Main Content Area with Page-Fade Route Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {/* Default Landing View: Focus is strictly on Products! */}
          {activeTab === "products" && (
            <motion.div
              key="products-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              {/* Cinematic Fullscreen Parallax Hero */}
              <Hero 
                setActiveTab={setActiveTab} 
                scrollToCatalog={scrollToCatalog} 
              />
              
              {/* Product Collections Catalog Showroom (Anchor destination) */}
              <div ref={catalogRef}>
                <Products 
                  setActiveTab={setActiveTab} 
                  setSelectedFrameForTrial={setSelectedFrame} 
                />
              </div>

              {/* Interactive Precision Lens Selector */}
              <SmartLensSelector />

              {/* Showroom map, timings, and partnership certifications summarizing on the main page */}
              <StoreSection />
            </motion.div>
          )}

          {/* Interactive AI Chat Stylist & Doorstep Booking */}
          {activeTab === "trial" && (
            <motion.div
              key="trial-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <HomeTrialAssistant 
                selectedFrame={selectedFrame} 
                setSelectedFrame={setSelectedFrame} 
              />
            </motion.div>
          )}

          {/* About us: Our Legacy & Family Chronicle since 1992 */}
          {activeTab === "about" && (
            <motion.div
              key="about-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <AboutSection />
            </motion.div>
          )}

          {/* Genuine Educational Blogs */}
          {activeTab === "blogs" && (
            <motion.div
              key="blogs-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <BlogSection />
            </motion.div>
          )}

          {/* Separate Showroom page for standalone navigation link */}
          {activeTab === "store" && (
            <motion.div
              key="store-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <StoreSection />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Luxury Brand Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* NON-OBTRUSIVE STICKY CONCIERGE TRIGGERS (Conversational & Natural) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        
        {/* Sticky WhatsApp Assistant Trigger */}
        <a
          href="https://api.whatsapp.com/send?phone=919920300750&text=Hello%20Raj%20and%20Sons%2C%20I%20am%20visiting%20your%20luxury%20website%20and%20would%20like%20to%20consult%20with%20a%20vision%20specialist."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center h-14 w-14 sm:w-auto sm:px-5 bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl transition-all duration-300 rounded-full hover:-translate-y-1"
          title="Direct WhatsApp Consultation"
          id="sticky-whatsapp"
        >
          <MessageSquare className="h-6 w-6 sm:mr-2" />
          <span className="hidden sm:inline font-sans text-xs tracking-widest font-bold uppercase">WhatsApp Concierge</span>
        </a>

        {/* Floating Interactive Home Trial Quick Trigger */}
        <button
          onClick={() => openBookingWithFrame()}
          className="group flex items-center justify-center h-14 w-14 sm:w-auto sm:px-5 bg-coral hover:bg-coral-dark text-white shadow-2xl transition-all duration-300 rounded-full hover:-translate-y-1 cursor-pointer"
          title="Book Doorstep Consultation"
          id="sticky-booking"
        >
          <Calendar className="h-6 w-6 sm:mr-2 animate-pulse" />
          <span className="hidden sm:inline font-sans text-xs tracking-widest font-bold uppercase">Book Home Trial</span>
        </button>

      </div>

    </div>
  );
}
