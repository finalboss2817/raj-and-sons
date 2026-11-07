/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Sparkles } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openBookingWithFrame: (frameName?: string) => void;
}

export default function Header({ activeTab, setActiveTab, openBookingWithFrame }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "products", label: "Catalog & Designer" },
    { id: "smart-glasses", label: "AI Smart Glasses", highlight: true, isNew: true },
    { id: "trial", label: "Book Home Trial" },
    { id: "about", label: "Our Legacy" },
    { id: "blogs", label: "Editorial Blogs" },
    { id: "store", label: "Store & Partners" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 md:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Heritage Tagline */}
          <button
            onClick={() => {
              setActiveTab("products");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-3 md:gap-4 text-left cursor-pointer focus:outline-none"
            id="brand-logo"
            aria-label="Raj & Sons Home"
          >
            {/* Authentic Heritage Crest Badge */}
            <div className="relative shrink-0 flex items-center justify-center">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-07_at_12.54.27_PM_6e9ce650.jpeg"
                alt="Raj & Sons Eyewear Crest Logo"
                className="h-11 md:h-13 w-auto object-contain mix-blend-multiply filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Adjacent Large Text Typography */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-navy leading-none">
                  RAJ & SONS
                </span>
                <span className="hidden sm:inline-block border border-coral/30 bg-coral/5 px-1.5 py-0.5 font-mono text-[9px] tracking-widest text-coral uppercase rounded-xs">
                  Since 1992
                </span>
              </div>
              <span className="font-sans text-[10px] md:text-[11px] tracking-widest text-navy/60 uppercase mt-1 font-medium leading-tight">
                A Venture by Meena Technologies
              </span>
            </div>
          </button>


          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative py-2 text-sm tracking-wider uppercase transition-colors cursor-pointer ${
                  activeTab === item.id
                    ? "font-semibold text-coral"
                    : item.highlight
                    ? "font-medium text-navy-light flex items-center gap-1 hover:text-coral"
                    : "text-navy/70 hover:text-navy"
                }`}
                id={`nav-${item.id}`}
              >
                {item.highlight && <Sparkles className="h-3.5 w-3.5 text-coral animate-pulse" />}
                {item.label}
                {item.isNew && (
                  <span className="bg-coral text-white text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full uppercase ml-1 shadow-xs">
                    NEW
                  </span>
                )}
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-coral"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action Trigger */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:9920300750"
              className="flex items-center gap-2 border border-navy/10 hover:border-coral px-4 py-2 text-xs font-medium tracking-wider uppercase text-navy hover:text-coral transition-all rounded-sm"
              id="header-call-btn"
            >
              <Phone className="h-3.5 w-3.5 text-coral" />
              <span>9920300750</span>
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 text-navy hover:text-coral cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-navy/5 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {/* Mobile Drawer Brand Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-navy/5">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-07_at_12.54.27_PM_6e9ce650.jpeg"
                  alt="Raj & Sons Eyewear Crest Logo"
                  className="h-10 w-auto object-contain mix-blend-multiply"
                />
                <div>
                  <span className="font-serif text-xl font-bold tracking-widest text-navy block leading-none">
                    RAJ & SONS
                  </span>
                  <span className="font-sans text-[10px] tracking-widest text-navy/60 uppercase mt-0.5 block">
                    Since 1992 • Bespoke Eyewear
                  </span>
                </div>
              </div>

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 py-2 text-left text-base tracking-widest uppercase transition-colors ${
                    activeTab === item.id ? "font-bold text-coral" : "text-navy/70 hover:text-navy"
                  }`}
                >
                  {item.highlight && <Sparkles className="h-4 w-4 text-coral" />}
                  <span>{item.label}</span>
                  {item.isNew && (
                    <span className="bg-coral text-white text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full uppercase ml-auto shadow-xs">
                      NEW
                    </span>
                  )}
                </button>
              ))}
              <div className="h-[1px] w-full bg-navy/5 my-2" />
              <a
                href="tel:9920300750"
                className="flex items-center justify-center gap-3 bg-navy py-3.5 text-center text-sm font-medium tracking-widest uppercase text-white hover:bg-coral transition-all rounded-sm"
              >
                <Phone className="h-4 w-4" />
                <span>Call Expert: 9920300750</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
