/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Phone, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Loader2, 
  RefreshCw, 
  Check, 
  Clock, 
  User, 
  Glasses, 
  MessageSquare,
  ClipboardList,
  Smile,
  Gift,
  Briefcase,
  Layers,
  Sparkle
} from "lucide-react";

interface HomeTrialAssistantProps {
  selectedFrame: string;
  setSelectedFrame: (frame: string) => void;
}

// Gamified dynamic steps
const STEPS_DATA = [
  { id: 1, label: "1. Curate Trunk" },
  { id: 2, label: "2. Personal Vibe" },
  { id: 3, label: "3. Rendezvous Hour" },
  { id: 4, label: "4. VIP Ticket" }
];

const PRESETS = [
  {
    id: "tr90-frames",
    name: "TR90 Series",
    description: "Swiss lightweight polymer. Extremely flexible, playground proof, and incredibly comfortable.",
    badge: "Ultralight Flex",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "metal-frames",
    name: "Architectural Metals",
    description: "Constructed with fine gold, matte silver, and titanium plating. Ultra-slim luxury profiles.",
    badge: "Classic Gold & Steel",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "acetate-frames",
    name: "Acetate Block",
    description: "Hand-polished organic block acetate. Yields rich colors, glossy depth, and high durability.",
    badge: "Glossy Organic Block",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "fancy-frames",
    name: "Aesthetic Moderns",
    description: "Bold dual-tones, geometric outlines, and retro keyhole bridges for trendsetters.",
    badge: "Fashion Forward",
    image: "https://images.unsplash.com/photo-1513673054901-2b5f51551112?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "magnetic-frames",
    name: "Magnetic Magic Clips",
    description: "Seamless custom optical frame with instant matching polarized sun clips.",
    badge: "Modular Sun Clip",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "womens-collection",
    name: "Elite Women's Shape",
    description: "Elegant cat-eyes, soft subtle curves, and delicate pastel acetates with custom jewelry detailing.",
    badge: "Refined Sculpt",
    image: "https://images.unsplash.com/photo-1502419655700-11a93e77f240?auto=format&fit=crop&w=400&q=80"
  }
];

const QUICK_NEIGHBORHOODS = [
  "Kandivali East",
  "Kandivali West",
  "Malad East",
  "Malad West",
  "Borivali East",
  "Borivali West",
  "Andheri East",
  "Andheri West",
  "Bandra",
  "South Mumbai"
];

const VIP_SLOTS = [
  { id: "morning", label: "Morning Daylight Hour", hours: "10:00 AM – 1:00 PM", desc: "Best for pure ambient daylight & eye styling" },
  { id: "afternoon", label: "Brunch Stylist Session", hours: "1:00 PM – 5:00 PM", desc: "Ideal for natural lighting lens recommendations" },
  { id: "evening", label: "Sunset Executive Session", hours: "5:00 PM – 9:00 PM", desc: "Perfect for comfortable after-work consultations" }
];

const FITTING_TARGETS = [
  { id: "myself", label: "For Myself", desc: "I want to upgrade my daily look and get a dynamic vision check.", icon: Smile },
  { id: "parents", label: "For My Parents", desc: "Help my elders select lightweight progressive frames at ease.", icon: User },
  { id: "kids", label: "For My Children", desc: "Find safe, bendable glasses that kids love wearing all day.", icon: Gift },
  { id: "corporate", label: "Corporate Group Fitting", desc: "Stylist visiting office for team eyewear alignment & blue-cut lenses.", icon: Briefcase }
];

const VIBE_MOODS = [
  { id: "bold", label: "Bold & Artistic", desc: "Slogan-making frames, heavy profiles, or statement bridges." },
  { id: "minimalist", label: "Ultra Minimalist", desc: "Rimless, transparent acetates, or featherweight wireframes." },
  { id: "vintage", label: "Retro Vintage", desc: "Nostalgic double-bars, classic clubmasters, and warm tones." },
  { id: "versatile", label: "Everyday Professional", desc: "Clean, universally flattering silhouettes for all-day office wear." }
];

export default function HomeTrialAssistant({ selectedFrame, setSelectedFrame }: HomeTrialAssistantProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  // Interactive Customizer Form State
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [fittingTarget, setFittingTarget] = useState<string>("myself");
  const [vibeMood, setVibeMood] = useState<string>("versatile");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("afternoon");
  const [patientName, setPatientName] = useState<string>("");
  const [mobilePhone, setMobilePhone] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("Kandivali East");
  const [doorstepAddress, setDoorstepAddress] = useState<string>("");
  const [customNotes, setCustomNotes] = useState<string>("");

  // Booking Results
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [assignedVoucherID, setAssignedVoucherID] = useState<string>("");

  // Synchronize chosen catalog frame if user clicked it
  useEffect(() => {
    if (selectedFrame && !selectedStyles.includes(selectedFrame)) {
      setSelectedStyles((prev) => [...prev, selectedFrame]);
    }
  }, [selectedFrame]);

  // Set default appointment date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setSelectedDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleStyleToggle = (styleName: string) => {
    if (selectedStyles.includes(styleName)) {
      setSelectedStyles(selectedStyles.filter((s) => s !== styleName));
      if (selectedFrame === styleName) {
        setSelectedFrame("");
      }
    } else {
      if (selectedStyles.length >= 5) return; // Keep briefcase elite and curated (max 5)
      setSelectedStyles([...selectedStyles, styleName]);
    }
  };

  const handleQuickPresetDate = (daysAhead: number) => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysAhead);
    const yyyy = targetDate.getFullYear();
    const mm = String(targetDate.getMonth() + 1).padStart(2, '0');
    const dd = String(targetDate.getDate()).padStart(2, '0');
    setSelectedDate(`${yyyy}-${mm}-${dd}`);
  };

  const isStepValid = (step: number) => {
    if (step === 1) return selectedStyles.length > 0;
    if (step === 2) return fittingTarget !== "" && vibeMood !== "";
    if (step === 3) return selectedDate !== "" && selectedSlot !== "";
    if (step === 4) return patientName.trim() !== "" && mobilePhone.trim().length >= 10 && doorstepAddress.trim() !== "";
    return true;
  };

  const handleNextStep = () => {
    if (isStepValid(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFinalBooking = async () => {
    setIsSubmitting(true);
    
    const chosenSlotLabel = VIP_SLOTS.find(s => s.id === selectedSlot)?.hours || "Afternoon Slot";
    const mappedPreferredTime = `${selectedDate} (${chosenSlotLabel})`;
    const mappedFrameName = selectedStyles.join(", ");
    const customBriefcaseDescription = `Fitting For: ${fittingTarget.toUpperCase()} | Stylist Vibe Theme: ${vibeMood.toUpperCase()} | Host Note: ${customNotes || "Bespoke digital wizard request."}`;

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: patientName,
          phone: mobilePhone,
          preferredTime: mappedPreferredTime,
          area: neighborhood,
          frameName: mappedFrameName,
          notes: customBriefcaseDescription
        })
      });

      if (res.ok) {
        const uniqueID = "RS-TRUNK-" + Math.floor(100000 + Math.random() * 900000);
        setAssignedVoucherID(uniqueID);
        setBookingSuccess(true);
      } else {
        alert("We had trouble validating your booking slot. Please contact our main showroom hotline: 9920300750.");
      }
    } catch (err) {
      console.error("Trunk appointment booking failure:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetWizard = () => {
    setSelectedStyles([]);
    setSelectedFrame("");
    setFittingTarget("myself");
    setVibeMood("versatile");
    setPatientName("");
    setMobilePhone("");
    setDoorstepAddress("");
    setCustomNotes("");
    setBookingSuccess(false);
    setCurrentStep(1);
  };

  const getWhatsAppMessageUrl = () => {
    const chosenSlotLabel = VIP_SLOTS.find(s => s.id === selectedSlot)?.hours || "Afternoon Slot";
    const targetLabel = FITTING_TARGETS.find(t => t.id === fittingTarget)?.label || "Myself";
    const moodLabel = VIBE_MOODS.find(v => v.id === vibeMood)?.label || "Modern Classic";

    const text = `Hello Raj & Sons Showroom Concierge,

I have just generated a Bespoke Home Trunk Show appointment request!

🎟️ *Reservation Ticket:* ${assignedVoucherID}
👤 *Patient Name:* ${patientName}
📞 *Mobile:* ${mobilePhone}
📍 *Area:* ${neighborhood}
🏠 *Showroom Location:* ${doorstepAddress}
📅 *Date of Visit:* ${selectedDate}
⏰ *Preferred Hour Slot:* ${chosenSlotLabel}

💼 *Fitting Profile:* ${targetLabel} (${moodLabel})
👓 *Curated Frames requested:* ${selectedStyles.join(", ")}
✏️ *Additional Requests:* ${customNotes || "Standard fitting."}`;

    return `https://api.whatsapp.com/send?phone=919920300750&text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="bg-ivory py-20 text-navy min-h-screen flex items-center relative overflow-hidden" id="wizard-section">
      {/* Decorative vector background accents */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] rounded-full bg-coral/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] rounded-full bg-navy/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 w-full relative z-10">
        
        {/* Modern minimal header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center gap-2 bg-coral/10 px-4.5 py-1.5 rounded-full mb-4">
            <Sparkles className="h-3.5 w-3.5 text-coral" />
            <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-coral uppercase">
              Bespoke Showroom Rendezvous
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight leading-tight text-navy">
            Design Your In-Person <span className="italic font-normal text-coral">Trunk Show</span>
          </h2>
          <div className="h-0.5 w-16 bg-navy/15 my-4" />
          <p className="font-sans text-sm md:text-base text-navy/70 leading-relaxed">
            Instead of you traveling, <strong className="text-navy">our styling curators visit you</strong>. Book a slot, choose your vibes, and we'll bring a luxury briefcase carrying your chosen collections directly to your home or office for an intimate, pressure-free fitting session.
          </p>
        </div>

        {/* Step-by-Step Interactive Ribbon */}
        {!bookingSuccess && (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between relative">
              {/* Background Line */}
              <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-navy/10 -translate-y-1/2 z-0" />
              {/* Active animated progress line */}
              <div 
                className="absolute left-0 top-1/2 h-[2px] bg-coral -translate-y-1/2 z-0 transition-all duration-500" 
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              />

              {STEPS_DATA.map((step) => {
                const isActive = step.id === currentStep;
                const isCompleted = step.id < currentStep;

                return (
                  <div key={step.id} className="flex flex-col items-center relative z-10">
                    <button 
                      onClick={() => {
                        // Allow clicking back to completed steps
                        if (isCompleted || step.id < currentStep) {
                          setCurrentStep(step.id);
                        }
                      }}
                      disabled={!isCompleted && step.id > currentStep}
                      className={`h-11 w-11 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                        isActive 
                          ? "bg-navy text-white scale-110 shadow-lg border-2 border-coral" 
                          : isCompleted 
                          ? "bg-coral text-white hover:bg-coral/90 cursor-pointer" 
                          : "bg-white text-navy/40 border border-navy/10 cursor-not-allowed"
                      }`}
                    >
                      {isCompleted ? <Check className="h-4 w-4" /> : step.id}
                    </button>
                    <span className={`text-[10px] font-mono tracking-widest uppercase mt-3 font-semibold transition-colors ${
                      isActive ? "text-coral" : "text-navy/50"
                    }`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Main Interactive Workspace Card (Col Span 8) */}
          <div className="lg:col-span-8 bg-white border border-navy/5 rounded-sm shadow-2xl relative min-h-[580px] flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-coral" />

            {bookingSuccess ? (
              /* LUXURY VVIP RECEIPT/TICKET */
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 md:p-12 text-center flex flex-col items-center justify-center my-auto"
              >
                <div className="h-16 w-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
                  <CheckCircle className="h-9 w-9" />
                </div>

                <span className="font-mono text-xs font-bold text-coral uppercase tracking-[0.3em] mb-2 block">
                  Reservation Logged
                </span>
                <h3 className="font-serif text-2xl md:text-4xl text-navy font-light tracking-tight mb-4">
                  Bespoke Showroom <span className="italic font-normal text-coral">Visit Booked!</span>
                </h3>
                
                <p className="font-sans text-sm text-navy/70 max-w-lg leading-relaxed mb-8">
                  We have successfully blocked a curator slot for you. Your gold-level VIP invitation ticket is generated below. To confirm details instantly with our main styling concierge, tap below to confirm on WhatsApp.
                </p>

                {/* Classic Voucher layout */}
                <div className="w-full max-w-md border border-dashed border-navy/20 bg-ivory/50 p-6 rounded-sm text-left relative overflow-hidden mb-8 shadow-inner">
                  {/* Ticket side punches */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-6 bg-white border border-navy/10 rounded-full z-10 shadow-inner" />
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 bg-white border border-navy/10 rounded-full z-10 shadow-inner" />
                  
                  <div className="flex justify-between items-start border-b border-navy/10 pb-3.5 mb-3.5">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-navy tracking-wide">RAJ & SONS</h4>
                      <span className="font-mono text-[9px] text-navy/40 uppercase tracking-widest block">Showroom Est. 1992</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[8px] text-coral font-bold uppercase block">Rendezvous ID</span>
                      <span className="font-mono text-xs font-bold text-navy">{assignedVoucherID}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5 text-xs font-sans mb-3.5">
                    <div>
                      <span className="font-mono text-[8px] uppercase text-navy/40 block">Host Name</span>
                      <strong className="text-navy">{patientName}</strong>
                    </div>
                    <div>
                      <span className="font-mono text-[8px] uppercase text-navy/40 block">Host Area</span>
                      <strong className="text-navy">{neighborhood}</strong>
                    </div>
                    <div>
                      <span className="font-mono text-[8px] uppercase text-navy/40 block">Preferred Time</span>
                      <strong className="text-coral">
                        {VIP_SLOTS.find(s => s.id === selectedSlot)?.hours}
                      </strong>
                    </div>
                    <div>
                      <span className="font-mono text-[8px] uppercase text-navy/40 block">Preferred Date</span>
                      <strong className="text-navy">{selectedDate}</strong>
                    </div>
                  </div>

                  <div className="border-t border-navy/10 pt-3.5">
                    <span className="font-mono text-[8px] uppercase text-navy/40 block">Selected Curation Series</span>
                    <p className="text-xs text-navy font-semibold mt-1 font-sans">
                      {selectedStyles.join(", ")}
                    </p>
                  </div>
                </div>

                {/* Confirmations */}
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                  <a
                    href={getWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold uppercase text-xs tracking-widest py-3.5 px-6 rounded-sm transition-colors shadow-lg shadow-emerald-600/10"
                  >
                    <MessageSquare className="h-4.5 w-4.5" />
                    <span>Confirm on WhatsApp</span>
                  </a>

                  <button
                    onClick={resetWizard}
                    className="border border-navy/15 hover:bg-navy hover:text-white text-navy font-semibold uppercase text-xs tracking-widest py-3.5 px-6 rounded-sm transition-colors cursor-pointer"
                  >
                    <RefreshCw className="h-4 w-4 inline mr-1" />
                    <span>Book Another Visit</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              /* MAIN PLAYFUL INTERACTIVE PAGES */
              <div className="p-6 md:p-9 flex-grow flex flex-col justify-between">
                
                <AnimatePresence mode="wait">
                  
                  {/* STEP 1: ASSEMBLE TRUNK CURATION */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="flex-grow flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center border-b border-navy/5 pb-4 mb-6">
                          <div>
                            <span className="font-mono text-[9px] text-coral uppercase tracking-widest block font-bold mb-1">
                              Step 01 / Briefcase Assembly
                            </span>
                            <h3 className="font-serif text-xl md:text-2xl font-light text-navy">
                              Curate Your <span className="italic font-normal text-coral">Private Showcase</span>
                            </h3>
                          </div>
                          <div className="text-right">
                            <span className="bg-navy/5 text-navy text-[10px] font-mono tracking-wider font-semibold px-3 py-1.5 rounded-full uppercase">
                              Trunk Capacity: {selectedStyles.length}/5
                            </span>
                          </div>
                        </div>

                        <p className="font-sans text-xs text-navy/60 leading-relaxed mb-6">
                          Choose up to 5 luxury eyewear lines. Tap the cards to slot them into your stylist's physical briefcase.
                        </p>

                        {/* Interactive Frame Collection Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {PRESETS.map((preset) => {
                            const isSelected = selectedStyles.includes(preset.name);
                            return (
                              <div
                                key={preset.id}
                                onClick={() => handleStyleToggle(preset.name)}
                                className={`group cursor-pointer border rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 relative ${
                                  isSelected 
                                    ? "border-coral bg-coral/[0.02] ring-1 ring-coral shadow-lg shadow-coral/5" 
                                    : "border-navy/10 hover:border-navy hover:shadow-md"
                                }`}
                              >
                                <div className="relative h-28 w-full bg-navy/5 overflow-hidden">
                                  <img 
                                    src={preset.image} 
                                    alt={preset.name}
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                  />
                                  <div className="absolute top-2 left-2 bg-navy/90 text-white px-2 py-0.5 font-mono text-[8px] tracking-wider uppercase rounded-xs">
                                    {preset.badge}
                                  </div>
                                  
                                  {isSelected && (
                                    <div className="absolute top-2 right-2 bg-coral text-white h-5 w-5 rounded-full flex items-center justify-center shadow-lg">
                                      <Check className="h-3 w-3 stroke-[3px]" />
                                    </div>
                                  )}
                                </div>

                                <div className="p-3 flex-grow flex flex-col justify-between bg-white">
                                  <div>
                                    <h4 className="font-serif text-xs font-bold text-navy mb-1 group-hover:text-coral transition-colors">
                                      {preset.name}
                                    </h4>
                                    <p className="font-sans text-[10.5px] text-navy/60 leading-relaxed line-clamp-2">
                                      {preset.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Navigation bottom */}
                      <div className="mt-8 pt-5 border-t border-navy/5 flex justify-end">
                        <button
                          onClick={handleNextStep}
                          disabled={!isStepValid(1)}
                          className="bg-navy hover:bg-coral text-white hover:text-navy-dark px-7 py-3.5 text-xs font-semibold tracking-widest uppercase rounded-sm transition-all cursor-pointer flex items-center gap-2 disabled:opacity-35 disabled:cursor-not-allowed shadow-md"
                        >
                          <span>Confirm Briefcase</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: PERSONAL VIBE & TARGET (HIGHLY GAMIFIED QUESTIONNAIRE) */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="flex-grow flex flex-col justify-between"
                    >
                      <div>
                        <div className="border-b border-navy/5 pb-4 mb-6">
                          <span className="font-mono text-[9px] text-coral uppercase tracking-widest block font-bold mb-1">
                            Step 02 / Curation Vibe
                          </span>
                          <h3 className="font-serif text-xl md:text-2xl font-light text-navy">
                            Configure Your <span className="italic font-normal text-coral">Styling Persona</span>
                          </h3>
                        </div>

                        {/* Question A: Who is this session for? */}
                        <div className="mb-6">
                          <label className="font-mono text-[10px] tracking-wider uppercase text-coral block font-bold mb-3">
                            A. Who is this in-person fitting session for?
                          </label>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {FITTING_TARGETS.map((target) => {
                              const isSelected = fittingTarget === target.id;
                              const TargetIcon = target.icon;
                              return (
                                <div
                                  key={target.id}
                                  onClick={() => setFittingTarget(target.id)}
                                  className={`p-4 border rounded-sm cursor-pointer transition-all duration-300 flex items-start gap-3.5 ${
                                    isSelected 
                                      ? "border-coral bg-coral/[0.02] shadow-md ring-1 ring-coral" 
                                      : "border-navy/10 hover:border-navy"
                                  }`}
                                >
                                  <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                                    isSelected ? "bg-coral text-white" : "bg-navy/5 text-navy/40"
                                  }`}>
                                    <TargetIcon className="h-4 w-4" />
                                  </div>
                                  <div>
                                    <h4 className="font-serif text-xs font-bold text-navy">{target.label}</h4>
                                    <p className="font-sans text-[10.5px] text-navy/60 leading-relaxed mt-0.5">{target.desc}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Question B: Curation Vibe Mood */}
                        <div>
                          <label className="font-mono text-[10px] tracking-wider uppercase text-coral block font-bold mb-3">
                            B. Choose Your Primary Aesthetic Mood
                          </label>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {VIBE_MOODS.map((vibe) => {
                              const isSelected = vibeMood === vibe.id;
                              return (
                                <button
                                  key={vibe.id}
                                  type="button"
                                  onClick={() => setVibeMood(vibe.id)}
                                  className={`p-3 border text-left rounded-sm transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[90px] ${
                                    isSelected 
                                      ? "border-navy bg-navy text-white shadow-lg" 
                                      : "border-navy/10 bg-white hover:border-navy text-navy"
                                  }`}
                                >
                                  <span className="font-serif text-xs font-bold block">{vibe.label}</span>
                                  <span className={`font-sans text-[9px] leading-relaxed mt-2 block ${
                                    isSelected ? "text-ivory/70" : "text-navy/50"
                                  }`}>
                                    {vibe.desc}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Navigation bottom */}
                      <div className="mt-8 pt-5 border-t border-navy/5 flex justify-between">
                        <button
                          onClick={handlePrevStep}
                          className="border border-navy/10 hover:border-navy text-navy px-6 py-3.5 text-xs font-semibold tracking-widest uppercase rounded-sm transition-all cursor-pointer flex items-center gap-1.5"
                        >
                          <ArrowLeft className="h-3.5 w-3.5" />
                          <span>Go Back</span>
                        </button>

                        <button
                          onClick={handleNextStep}
                          disabled={!isStepValid(2)}
                          className="bg-navy hover:bg-coral text-white hover:text-navy-dark px-7 py-3.5 text-xs font-semibold tracking-widest uppercase rounded-sm transition-all cursor-pointer flex items-center gap-2"
                        >
                          <span>Confirm Vibe</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: PICK GOLDEN HOUR (APPOINTMENT TIMESLOT) */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step-3"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="flex-grow flex flex-col justify-between"
                    >
                      <div>
                        <div className="border-b border-navy/5 pb-4 mb-6">
                          <span className="font-mono text-[9px] text-coral uppercase tracking-widest block font-bold mb-1">
                            Step 03 / Schedule Rendezvous
                          </span>
                          <h3 className="font-serif text-xl md:text-2xl font-light text-navy">
                            Choose Your <span className="italic font-normal text-coral">Preferred Hour</span>
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                          {/* Calendar Picker (Left Column) */}
                          <div className="md:col-span-5 flex flex-col gap-4">
                            <label className="font-mono text-[10px] tracking-wider uppercase text-coral block font-bold">
                              1. Pick the Date of Visit
                            </label>

                            <div className="bg-ivory/50 border border-navy/5 p-4 rounded-sm">
                              <input 
                                type="date" 
                                required
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="w-full bg-white border border-navy/10 px-4 py-3.5 text-sm font-semibold text-navy rounded-sm focus:outline-none focus:border-coral"
                              />
                            </div>

                            {/* Quick Days Preset Grid */}
                            <div className="grid grid-cols-3 gap-2">
                              <button
                                type="button"
                                onClick={() => handleQuickPresetDate(1)}
                                className="bg-white border border-navy/10 hover:border-coral py-2.5 text-[9px] font-bold font-mono tracking-wider text-navy uppercase rounded-sm cursor-pointer transition-colors"
                              >
                                Tomorrow
                              </button>
                              <button
                                type="button"
                                onClick={() => handleQuickPresetDate(2)}
                                className="bg-white border border-navy/10 hover:border-coral py-2.5 text-[9px] font-bold font-mono tracking-wider text-navy uppercase rounded-sm cursor-pointer transition-colors"
                              >
                                In 2 Days
                              </button>
                              <button
                                type="button"
                                onClick={() => handleQuickPresetDate(3)}
                                className="bg-white border border-navy/10 hover:border-coral py-2.5 text-[9px] font-bold font-mono tracking-wider text-navy uppercase rounded-sm cursor-pointer transition-colors"
                              >
                                In 3 Days
                              </button>
                            </div>
                          </div>

                          {/* Slot List (Right Column) */}
                          <div className="md:col-span-7 flex flex-col gap-4">
                            <label className="font-mono text-[10px] tracking-wider uppercase text-coral block font-bold">
                              2. Select Curator Arrival Window
                            </label>

                            <div className="space-y-3.5">
                              {VIP_SLOTS.map((slot) => {
                                const isSelected = selectedSlot === slot.id;
                                return (
                                  <div
                                    key={slot.id}
                                    onClick={() => setSelectedSlot(slot.id)}
                                    className={`border p-4 rounded-sm cursor-pointer transition-all duration-300 flex items-center justify-between ${
                                      isSelected 
                                        ? "border-coral bg-coral/[0.01] shadow-md ring-1 ring-coral" 
                                        : "border-navy/10 hover:border-navy"
                                    }`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                                        isSelected ? "bg-coral/10 text-coral" : "bg-navy/5 text-navy/40"
                                      }`}>
                                        <Clock className="h-4 w-4" />
                                      </div>
                                      <div>
                                        <h4 className="font-serif text-xs font-bold text-navy">{slot.label}</h4>
                                        <span className="font-sans text-[10px] text-navy/60 block">{slot.desc}</span>
                                      </div>
                                    </div>

                                    <div className="text-right">
                                      <span className="font-mono text-xs font-bold text-navy">{slot.hours}</span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Navigation bottom */}
                      <div className="mt-8 pt-5 border-t border-navy/5 flex justify-between">
                        <button
                          onClick={handlePrevStep}
                          className="border border-navy/10 hover:border-navy text-navy px-6 py-3.5 text-xs font-semibold tracking-widest uppercase rounded-sm transition-all cursor-pointer flex items-center gap-1.5"
                        >
                          <ArrowLeft className="h-3.5 w-3.5" />
                          <span>Go Back</span>
                        </button>

                        <button
                          onClick={handleNextStep}
                          disabled={!isStepValid(3)}
                          className="bg-navy hover:bg-coral text-white hover:text-navy-dark px-7 py-3.5 text-xs font-semibold tracking-widest uppercase rounded-sm transition-all cursor-pointer flex items-center gap-2"
                        >
                          <span>Confirm Hours</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4: CUSTOMER HOST INFO & ADDRESS */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step-4"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="flex-grow flex flex-col justify-between"
                    >
                      <div>
                        <div className="border-b border-navy/5 pb-4 mb-6">
                          <span className="font-mono text-[9px] text-coral uppercase tracking-widest block font-bold mb-1">
                            Step 04 / Dispatch Details
                          </span>
                          <h3 className="font-serif text-xl md:text-2xl font-light text-navy">
                            Where Should Our <span className="italic font-normal text-coral">Curator Arrive?</span>
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                          {/* Inputs Panel (Left) */}
                          <div className="md:col-span-7 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="font-mono text-[9px] tracking-wider uppercase text-coral block mb-1.5 font-bold">
                                  Your Name *
                                </label>
                                <div className="relative">
                                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-navy/30">
                                    <User className="h-4 w-4" />
                                  </span>
                                  <input
                                    type="text"
                                    required
                                    value={patientName}
                                    onChange={(e) => setPatientName(e.target.value)}
                                    placeholder="e.g. Ramesh Patel"
                                    className="w-full bg-ivory-light border border-navy/10 pl-10 pr-4 py-3 text-sm text-navy rounded-sm focus:outline-none focus:border-coral"
                                  />
                                </div>
                              </div>

                              <div>
                                <label className="font-mono text-[9px] tracking-wider uppercase text-coral block mb-1.5 font-bold">
                                  Mobile Phone *
                                </label>
                                <div className="relative">
                                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-navy/30">
                                    <Phone className="h-4 w-4" />
                                  </span>
                                  <input
                                    type="tel"
                                    required
                                    value={mobilePhone}
                                    onChange={(e) => setMobilePhone(e.target.value)}
                                    placeholder="e.g. 98200XXXXX"
                                    className="w-full bg-ivory-light border border-navy/10 pl-10 pr-4 py-3 text-sm text-navy rounded-sm focus:outline-none focus:border-coral"
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <label className="font-mono text-[9px] tracking-wider uppercase text-coral block mb-1.5 font-bold">
                                Fitting Session Location Address *
                              </label>
                              <div className="relative">
                                <span className="absolute top-3 left-3 text-navy/30">
                                  <MapPin className="h-4 w-4" />
                                </span>
                                <textarea
                                  required
                                  rows={3}
                                  value={doorstepAddress}
                                  onChange={(e) => setDoorstepAddress(e.target.value)}
                                  placeholder="Apartment, Wing, Landmark, Street name or Office desk details..."
                                  className="w-full bg-ivory-light border border-navy/10 pl-10 pr-4 py-3 text-sm text-navy rounded-sm focus:outline-none focus:border-coral resize-none"
                                />
                              </div>
                            </div>

                            {/* Additional custom notes */}
                            <div>
                              <label className="font-mono text-[9px] tracking-wider uppercase text-navy/40 block mb-1.5 font-bold">
                                Special requests for the stylist (Optional)
                              </label>
                              <input
                                type="text"
                                value={customNotes}
                                onChange={(e) => setCustomNotes(e.target.value)}
                                placeholder="e.g. Please bring extra high-index lenses or vintage horn-rims"
                                className="w-full bg-ivory-light border border-navy/10 px-4 py-3 text-xs text-navy rounded-sm focus:outline-none focus:border-coral"
                              />
                            </div>
                          </div>

                          {/* Neighborhood Presets (Right) */}
                          <div className="md:col-span-5 bg-ivory/50 border border-navy/5 p-5 rounded-sm flex flex-col justify-between">
                            <div>
                              <label className="font-mono text-[9px] tracking-wider uppercase text-coral block mb-3 font-bold">
                                Select Fitting Suburb Region
                              </label>

                              <div className="flex flex-wrap gap-1.5">
                                {QUICK_NEIGHBORHOODS.map((area) => {
                                  const isSelected = neighborhood === area;
                                  return (
                                    <button
                                      key={area}
                                      type="button"
                                      onClick={() => setNeighborhood(area)}
                                      className={`px-3 py-1.5 font-mono text-[9px] tracking-wider uppercase rounded-full border transition-all cursor-pointer ${
                                        isSelected 
                                          ? "bg-navy text-white border-navy" 
                                          : "bg-white text-navy/60 border-navy/10 hover:border-coral hover:text-coral"
                                      }`}
                                    >
                                      {area}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="text-[10px] text-navy/50 leading-relaxed font-sans mt-5 bg-white p-3 rounded-xs border border-navy/5">
                              📍 Our stylist trunks depart from Kandivali East flagship weekly. Areas above qualify for <strong>Complimentary Bespoke consultation</strong> with zero travel fee.
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Navigation bottom */}
                      <div className="mt-8 pt-5 border-t border-navy/5 flex justify-between">
                        <button
                          onClick={handlePrevStep}
                          className="border border-navy/10 hover:border-navy text-navy px-6 py-3.5 text-xs font-semibold tracking-widest uppercase rounded-sm transition-all cursor-pointer flex items-center gap-1.5"
                        >
                          <ArrowLeft className="h-3.5 w-3.5" />
                          <span>Go Back</span>
                        </button>

                        <button
                          onClick={handleFinalBooking}
                          disabled={!isStepValid(4) || isSubmitting}
                          className="bg-coral hover:bg-coral-dark text-white font-bold px-9 py-3.5 text-xs font-semibold tracking-widest uppercase rounded-sm transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-coral/10"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              <span>Booking...</span>
                            </>
                          ) : (
                            <>
                              <Sparkle className="h-4 w-4 text-white fill-white animate-pulse" />
                              <span>Confirm Free Trunk Show</span>
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>

              </div>
            )}

          </div>

          {/* Right-hand Sidebar: Dynamic Real-time "My Briefcase Curation" Ticket (Col Span 4) */}
          <div className="lg:col-span-4 bg-navy text-white p-6 rounded-sm border border-navy-light flex flex-col justify-between shadow-xl relative overflow-hidden min-h-[500px]">
            {/* Visual ticket receipt styling */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-coral/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="font-mono text-[9px] text-coral tracking-widest uppercase block font-bold mb-1">Live Reservation</span>
                <h4 className="font-serif text-lg tracking-wide">Trunk Dossier</h4>
                <p className="font-mono text-[8px] text-white/40 uppercase mt-1 tracking-widest">Raj & Sons est. 1992</p>
              </div>

              {/* Curated Frames Summary */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-white/50">Trunk Selection</span>
                  <span className="font-mono text-[9px] bg-coral/20 text-coral px-2 py-0.5 rounded-sm font-bold uppercase">
                    {selectedStyles.length} / 5 Curated
                  </span>
                </div>

                {selectedStyles.length === 0 ? (
                  <div className="border border-dashed border-white/10 p-5 text-center rounded-sm">
                    <Glasses className="h-5 w-5 text-white/20 mx-auto mb-2 animate-bounce" />
                    <p className="font-sans text-[11px] text-white/40 leading-relaxed">
                      Your trunk briefcase is empty. Click frame lines on the left to add them.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
                    {selectedStyles.map((style) => (
                      <div key={style} className="flex items-center justify-between text-xs font-sans bg-white/5 p-2 rounded-sm">
                        <span className="font-semibold text-white truncate max-w-[140px]">{style}</span>
                        <button
                          type="button"
                          onClick={() => handleStyleToggle(style)}
                          className="font-mono text-[9px] text-coral hover:text-white transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Real-time Custom Fitting Details summary */}
              <div className="border-t border-white/10 pt-4 space-y-3 text-xs font-sans">
                {fittingTarget && (
                  <div className="flex justify-between items-center bg-white/5 p-2 rounded-sm">
                    <span className="text-white/50 font-mono text-[9px] uppercase">Target Patient</span>
                    <strong className="text-white">
                      {FITTING_TARGETS.find(t => t.id === fittingTarget)?.label}
                    </strong>
                  </div>
                )}

                {vibeMood && (
                  <div className="flex justify-between items-center bg-white/5 p-2 rounded-sm">
                    <span className="text-white/50 font-mono text-[9px] uppercase">Style Theme</span>
                    <strong className="text-white">
                      {VIBE_MOODS.find(v => v.id === vibeMood)?.label}
                    </strong>
                  </div>
                )}

                {selectedDate && (
                  <div className="flex justify-between items-center bg-white/5 p-2 rounded-sm">
                    <span className="text-white/50 font-mono text-[9px] uppercase">Target Date</span>
                    <strong className="text-white font-mono">{selectedDate}</strong>
                  </div>
                )}

                {selectedSlot && (
                  <div className="flex justify-between items-center bg-white/5 p-2 rounded-sm">
                    <span className="text-white/50 font-mono text-[9px] uppercase">Arrival Slot</span>
                    <strong className="text-coral font-mono">
                      {VIP_SLOTS.find(s => s.id === selectedSlot)?.hours}
                    </strong>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 mt-6">
              <div className="bg-white/5 p-3.5 rounded-sm flex items-center gap-3">
                <div className="h-7 w-7 rounded-full bg-coral/20 text-coral flex items-center justify-center flex-shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div className="text-[10px] leading-normal text-white/70">
                  <strong>Free Home Fitting Service</strong>. Fully personalized showcase, zero obligation to buy.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
