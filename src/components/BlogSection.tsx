/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Clock, ArrowRight, X, Heart, MessageSquare } from "lucide-react";
import { BLOG_ARTICLES } from "../data";
import { BlogArticle } from "../types";

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  return (
    <section className="bg-ivory-light py-24 text-navy border-t border-navy/5" id="blog-section">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-[0.3em] text-coral uppercase mb-3">
            Optical Editorial
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-navy leading-tight">
            The Eyewear <span className="italic font-normal text-coral">Journal</span>
          </h2>
          <div className="h-0.5 w-16 bg-navy/10 my-4" />
          <p className="font-sans text-navy/70 leading-relaxed text-base">
            Genuine educational articles curated by our optical experts. Demystifying lens technologies, anatomical fitting, and pediatric vision care with clear, human-focused science.
          </p>
        </div>

        {/* Magazine Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {BLOG_ARTICLES.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group bg-white border border-navy/5 p-8 rounded-sm flex flex-col justify-between hover:shadow-2xl hover:shadow-navy/5 transition-all duration-300"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-4 text-[11px] font-mono uppercase text-navy/50 tracking-wider">
                  <span>{article.category}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Article Title (Serif, beautiful) */}
                <h3 className="font-serif text-2xl font-bold tracking-wide text-navy group-hover:text-coral transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="font-sans text-sm text-navy/70 leading-relaxed mt-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Read Action button */}
              <div className="mt-8 pt-6 border-t border-navy/5 flex items-center justify-between">
                <span className="font-mono text-[10px] text-navy/40 uppercase">{article.date}</span>
                
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="flex items-center gap-1 text-xs font-semibold tracking-wider uppercase text-coral group-hover:text-coral-dark transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Screen Immersive Magazine Article Reader Lightbox */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-navy-dark/90 backdrop-blur-md"
                onClick={() => setSelectedArticle(null)}
              />

              <div className="flex min-h-screen items-center justify-center p-4 md:p-12 relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-3xl bg-white-light bg-white p-8 md:p-16 rounded-sm shadow-2xl relative text-left text-navy"
                >
                  {/* Close floating button */}
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-navy/5 text-navy hover:text-coral transition-all cursor-pointer"
                    aria-label="Close article"
                  >
                    <X className="h-6 w-6" />
                  </button>

                  {/* Header metadata */}
                  <div className="flex items-center gap-4 text-xs font-mono uppercase text-navy/40 tracking-widest mb-4">
                    <span>{selectedArticle.category}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                    <span>•</span>
                    <span>{selectedArticle.date}</span>
                  </div>

                  {/* Large readable Title */}
                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-wide leading-tight mb-8">
                    {selectedArticle.title}
                  </h1>

                  {/* Visual Divider */}
                  <div className="h-1 w-20 bg-coral mb-10" />

                  {/* Immersive body text with large, high-readability settings */}
                  <div className="font-sans text-base sm:text-lg leading-relaxed text-navy-light/95 space-y-6 max-w-2xl whitespace-pre-line border-b border-navy/5 pb-12 mb-8">
                    {selectedArticle.content}
                  </div>

                  {/* Editorial Footer brand acknowledgment */}
                  <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-navy/40 uppercase tracking-widest gap-4">
                    <span>© RAJ & SONS Since 1992</span>
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="border border-navy px-6 py-2.5 hover:bg-navy hover:text-white transition-all text-[10px] rounded-sm cursor-pointer"
                    >
                      Return to Journal
                    </button>
                  </div>

                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
