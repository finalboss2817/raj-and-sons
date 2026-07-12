/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Clock, MapPin, Phone, MessageSquare, ShieldCheck, Heart } from "lucide-react";
import { LENS_PARTNERS } from "../data";

export default function StoreSection() {
  const timings = [
    { day: "Monday to Saturday", hours: "10:00 AM – 9:00 PM" },
    { day: "Sunday", hours: "11:00 AM – 7:00 PM" },
    { day: "Home Trials Available", hours: "Daily (Pre-booking required)" }
  ];

  return (
    <section className="bg-white py-24 text-navy border-t border-navy/5" id="store-section">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-24">
          
          {/* LEFT PANEL: Showroom Timings & Direct Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-semibold tracking-[0.3em] text-coral uppercase mb-3 block">
                Flagship Showroom
              </span>
              <h2 className="font-serif text-4xl font-light tracking-tight text-navy leading-tight mb-6">
                Visit Our <span className="italic font-normal text-coral">Showroom</span>
              </h2>
              <p className="font-sans text-sm text-navy/70 leading-relaxed mb-8">
                Experience heritage luxury eyewear curation in person. Get your prescription verified with our digital diagnostic systems, and enjoy complimentary frame styling from Shri Rajendra Trivedi.
              </p>

              {/* Consultation Hours */}
              <div className="bg-ivory-light border border-navy/5 p-6 rounded-sm mb-8">
                <h4 className="font-serif text-lg font-bold text-navy flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-coral" />
                  <span>Consultation Hours</span>
                </h4>
                <div className="space-y-3">
                  {timings.map((time, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm border-b border-navy/5 pb-2 last:border-0 last:pb-0">
                      <span className="font-sans text-navy/70 font-medium">{time.day}</span>
                      <span className="font-mono text-xs text-navy font-bold">{time.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium Touch Actions */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:9920300750"
                className="w-full flex items-center justify-center gap-2.5 bg-navy hover:bg-coral text-white hover:text-navy-dark py-4 text-xs font-semibold tracking-widest uppercase rounded-sm transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Call Concierge: 9920300750</span>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=919920300750&text=Hello%20Raj%20and%20Sons%2C%20I%20would%20like%20to%20visit%20your%20showroom%20for%20a%20prescription%20fitting."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 py-4 text-xs font-semibold tracking-widest uppercase rounded-sm transition-all"
              >
                <MessageSquare className="h-4 w-4 text-emerald-600" />
                <span>Coordinate on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* RIGHT PANEL: Embedded Map with luxury styling frame */}
          <div className="lg:col-span-7 h-full min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full h-full border border-navy/10 p-2 rounded-sm bg-ivory-light shadow-2xl relative"
            >
              {/* Premium location label */}
              <div className="absolute top-6 left-6 z-10 bg-navy text-white px-4 py-2 font-mono text-[9px] tracking-widest uppercase rounded-xs shadow-lg flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-coral" />
                <span>Flagship Curation Center</span>
              </div>

              {/* Large hyper-realistic responsive embedded map */}
              <iframe
                title="Raj & Sons Flagship Showroom Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.433989045543!2d72.8601831!3d19.2081512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e1d88bb005%3A0x673dbb1ee758c55c!2sKandivali%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full rounded-xs grayscale contrast-110 filter hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

        </div>

        {/* LENS BRAND PARTNERS SECTION (Celebrations & Boscher Highlight) */}
        <div className="border-t border-navy/5 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-semibold tracking-[0.3em] text-coral uppercase mb-2 block">Authorized Milling Partners</span>
            <h3 className="font-serif text-3xl font-light tracking-tight text-navy">Certified Lens Collaborations</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LENS_PARTNERS.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-ivory-light/50 border border-navy/5 p-6 rounded-sm text-left relative flex flex-col justify-between hover:border-coral transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-navy/5 pb-4 mb-4">
                    <h4 className="font-serif text-xl font-bold text-navy">
                      {partner.name}
                    </h4>
                    <span className="bg-coral/10 border border-coral/20 px-2 py-0.5 font-mono text-[9px] tracking-widest text-coral uppercase rounded-sm">
                      {partner.badge}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-navy/70 leading-relaxed mb-6">
                    {partner.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-navy/40 text-[10px] font-mono uppercase tracking-wider">
                  <ShieldCheck className="h-4 w-4 text-coral" />
                  <span>100% Genuine Certified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
