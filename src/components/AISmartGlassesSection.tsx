/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, 
  Camera, Languages, Music, Sun, BatteryCharging, 
  Smartphone, HardDrive, Check, MessageSquare, Calendar, ChevronRight, ShieldCheck
} from "lucide-react";
import { SMART_GLASSES_VIDEOS } from "../data";
import { SmartGlassesVideo } from "../types";

interface AISmartGlassesSectionProps {
  setActiveTab: (tab: string) => void;
  openBookingWithFrame: (frameName?: string) => void;
}

export default function AISmartGlassesSection({ setActiveTab, openBookingWithFrame }: AISmartGlassesSectionProps) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedColor, setSelectedColor] = useState("Obsidian Black");
  const [activeTechTab, setActiveTechTab] = useState<"specs" | "gestures" | "package">("specs");

  const videoRef = useRef<HTMLVideoElement>(null);
  const activeVideo: SmartGlassesVideo = SMART_GLASSES_VIDEOS[activeVideoIndex];

  // Colors available for the smart glasses
  const colors = [
    { name: "Obsidian Black", hex: "#111827", border: "border-gray-800" },
    { name: "Frost White", hex: "#F3F4F6", border: "border-gray-300" },
    { name: "Denim Blue", hex: "#3B82F6", border: "border-blue-500" },
  ];

  const handleVideoSelect = (index: number) => {
    setActiveVideoIndex(index);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  // Re-play video whenever active index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback: mute and play
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, [activeVideoIndex]);

  const getWhatsAppBookingLink = () => {
    const text = encodeURIComponent(
      `Hello Raj & Sons,\n\nI am interested in experiencing the new *Next-Gen AI Smart Glasses* (${activeVideo.model} in ${selectedColor}).\n\nCould you arrange a private demo / home trial or share pricing details?`
    );
    return `https://api.whatsapp.com/send?phone=919920300750&text=${text}`;
  };

  return (
    <section className="relative bg-navy-dark text-white py-20 overflow-hidden" id="ai-smart-glasses">
      {/* Background ambient lighting glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-coral/40 bg-coral/10 px-4 py-1 rounded-full mb-4">
            <Sparkles className="h-3.5 w-3.5 text-coral animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-coral uppercase font-bold">
              Next-Generation Innovation
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
            AI Smart Glasses <span className="italic font-normal text-coral">Showcase</span>
          </h2>
          <div className="h-0.5 w-20 bg-coral/30 my-4" />
          <p className="font-sans text-white/70 leading-relaxed text-sm md:text-base">
            Experience the confluence of high-fashion luxury eyewear and artificial intelligence. 
            Equipped with 4K First-Person View recording, 30+ language dialogue translation, open-ear surround acoustics, and photochromic UV optics.
          </p>
        </div>

        {/* Video Theater & Feature Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Video Screen (Takes 7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Video Player Card */}
            <div className="relative aspect-[16/10] bg-black/80 rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
              <video
                ref={videoRef}
                src={activeVideo.videoSrc}
                playsInline
                loop
                muted={isMuted}
                autoPlay
                className="w-full h-full object-contain"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Top Video Overlay Bar */}
              <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="bg-coral px-2.5 py-0.5 rounded-xs font-mono text-[10px] tracking-widest uppercase font-bold text-navy-dark">
                    Live Demo
                  </span>
                  <span className="font-sans text-xs font-semibold tracking-wide text-white drop-shadow">
                    {activeVideo.model}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] text-white/80 bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
                    HD Preview
                  </span>
                </div>
              </div>

              {/* Bottom Interactive Video Controls */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between transition-opacity duration-300">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-2.5 rounded-full bg-white/20 hover:bg-coral text-white hover:text-navy transition-all cursor-pointer backdrop-blur-xs"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current ml-0.5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2.5 rounded-full bg-white/20 hover:bg-coral text-white hover:text-navy transition-all cursor-pointer backdrop-blur-xs"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                  
                  <span className="hidden sm:inline-block font-sans text-xs text-white/80 font-medium">
                    {activeVideo.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleFullscreen}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/30 text-white transition-all cursor-pointer"
                    title="Fullscreen"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Video Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {SMART_GLASSES_VIDEOS.map((vid, idx) => (
                <button
                  key={vid.id}
                  onClick={() => handleVideoSelect(idx)}
                  className={`flex flex-col text-left p-3 rounded-xs border transition-all cursor-pointer ${
                    activeVideoIndex === idx
                      ? "bg-white/10 border-coral text-white shadow-lg"
                      : "bg-white/5 border-white/5 hover:bg-white/10 text-white/70"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[9px] tracking-wider uppercase text-coral font-bold">
                      Clip 0{idx + 1}
                    </span>
                    {activeVideoIndex === idx && (
                      <span className="flex h-2 w-2 rounded-full bg-coral animate-ping" />
                    )}
                  </div>
                  <span className="font-sans text-xs font-bold text-white line-clamp-1">
                    {vid.model}
                  </span>
                  <span className="font-sans text-[11px] text-white/60 line-clamp-1 mt-0.5">
                    {vid.tags.slice(0, 2).join(" • ")}
                  </span>
                </button>
              ))}
            </div>

          </div>

          {/* Right Product & Specs Panel (Takes 5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white/5 border border-white/10 rounded-sm p-6 md:p-8 backdrop-blur-md">
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs tracking-widest text-coral uppercase font-bold">
                  Bespoke AI Series
                </span>
                <span className="bg-coral/20 text-coral text-xs font-mono font-bold px-2.5 py-1 rounded-sm border border-coral/30">
                  Starts ₹4,999
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
                {activeVideo.title}
              </h3>
              
              <p className="font-sans text-xs md:text-sm text-white/70 leading-relaxed mt-3">
                {activeVideo.description}
              </p>

              {/* Color Edition Selector */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <span className="block font-mono text-xs tracking-wider uppercase text-white/60 mb-2.5">
                  Finish & Colorway: <span className="text-white font-bold">{selectedColor}</span>
                </span>
                <div className="flex items-center gap-3">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${
                        selectedColor === c.name
                          ? "bg-white/20 border-coral text-white font-semibold"
                          : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                      }`}
                    >
                      <span
                        className="h-3.5 w-3.5 rounded-full border border-white/40"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Highlights list */}
              <div className="mt-6 space-y-2.5">
                <span className="block font-mono text-[10px] tracking-widest uppercase text-white/50">
                  Engineered Features Included:
                </span>
                {activeVideo.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-white/80 font-sans">
                    <Check className="h-4 w-4 text-coral shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Action CTA Area */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => openBookingWithFrame("Next-Gen AI Smart Glasses (MT5 Ultra & S2 Max)")}
                className="w-full flex items-center justify-center gap-2 bg-coral hover:bg-coral-dark text-navy-dark font-sans font-bold py-3.5 px-6 rounded-xs text-xs tracking-widest uppercase transition-all shadow-lg shadow-coral/20 cursor-pointer hover:-translate-y-0.5"
                id="btn-book-ai-demo"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Doorstep Home Trial</span>
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={getWhatsAppBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-emerald-500/40 bg-emerald-600/20 hover:bg-emerald-600 text-white py-3 px-4 rounded-xs text-xs font-semibold tracking-wider uppercase transition-all text-center"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <a
                  href="tel:9920300750"
                  className="flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white/90 hover:text-white py-3 px-4 rounded-xs text-xs font-semibold tracking-wider uppercase transition-all text-center"
                >
                  <ShieldCheck className="h-4 w-4 text-coral" />
                  <span>Call 9920300750</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* 6-Card Tech Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-white/10">
          
          {/* Card 1: 4K FPV Camera */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-coral/50 transition-all hover:bg-white/[0.07] group">
            <div className="h-10 w-10 rounded-full bg-coral/20 flex items-center justify-center mb-4 text-coral group-hover:scale-110 transition-transform">
              <Camera className="h-5 w-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white mb-2">
              4K Ultra-HD First-Person View
            </h4>
            <p className="font-sans text-xs text-white/70 leading-relaxed">
              Capture lifelike photos and cinematic video from your exact eye-level perspective. Features realistic color calibration and 32GB onboard flash storage.
            </p>
          </div>

          {/* Card 2: AI Translation */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-coral/50 transition-all hover:bg-white/[0.07] group">
            <div className="h-10 w-10 rounded-full bg-coral/20 flex items-center justify-center mb-4 text-coral group-hover:scale-110 transition-transform">
              <Languages className="h-5 w-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white mb-2">
              AI Dialogue & Live Translation
            </h4>
            <p className="font-sans text-xs text-white/70 leading-relaxed">
              Real-time multi-language simultaneous translation across 30+ languages. Speak naturally, translate speech, and understand foreign conversations hands-free.
            </p>
          </div>

          {/* Card 3: Open-Ear Acoustic Sound */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-coral/50 transition-all hover:bg-white/[0.07] group">
            <div className="h-10 w-10 rounded-full bg-coral/20 flex items-center justify-center mb-4 text-coral group-hover:scale-110 transition-transform">
              <Music className="h-5 w-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white mb-2">
              Open-Ear Surround Sound Audio
            </h4>
            <p className="font-sans text-xs text-white/70 leading-relaxed">
              Dual-channel micro acoustic drivers direct clear stereo audio into your ears without blocking ambient traffic and room sounds. Perfect for music and phone calls.
            </p>
          </div>

          {/* Card 4: Touch Controls */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-coral/50 transition-all hover:bg-white/[0.07] group">
            <div className="h-10 w-10 rounded-full bg-coral/20 flex items-center justify-center mb-4 text-coral group-hover:scale-110 transition-transform">
              <Smartphone className="h-5 w-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white mb-2">
              Smart Temple Touch Gestures
            </h4>
            <p className="font-sans text-xs text-white/70 leading-relaxed">
              Double-tap the temple to play or pause, swipe left/right to adjust volume, and long-press to skip tracks or activate the voice assistant with zero phone reach.
            </p>
          </div>

          {/* Card 5: Photochromic UV Optics */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-coral/50 transition-all hover:bg-white/[0.07] group">
            <div className="h-10 w-10 rounded-full bg-coral/20 flex items-center justify-center mb-4 text-coral group-hover:scale-110 transition-transform">
              <Sun className="h-5 w-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white mb-2">
              UV Auto Color-Changing Lenses
            </h4>
            <p className="font-sans text-xs text-white/70 leading-relaxed">
              Smart photochromic molecular lenses adjust automatically from crystal clear indoors to deep tinted protection outdoors in seconds under UV sunlight.
            </p>
          </div>

          {/* Card 6: Magnetic Charging & Leather Case */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-coral/50 transition-all hover:bg-white/[0.07] group">
            <div className="h-10 w-10 rounded-full bg-coral/20 flex items-center justify-center mb-4 text-coral group-hover:scale-110 transition-transform">
              <BatteryCharging className="h-5 w-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white mb-2">
              Magnetic Snap Charge & Leather Vault
            </h4>
            <p className="font-sans text-xs text-white/70 leading-relaxed">
              High-efficiency magnetic contact pins provide rapid recharges. Accompanied by a handcrafted genuine leather protective travel case that powers your glasses on the go.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
