'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_CONFIG } from '@/config/brand.config';
import { Plus, Sparkles, BookOpen, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';

interface ManifestoSectionProps {
  onRequestQuote?: () => void;
}

const editorial = [0.16, 1, 0.3, 1] as const;

export function ManifestoSection({ onRequestQuote }: ManifestoSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const togglePillar = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getUSPIcon = (id: string) => {
    switch (id) {
      case 'all-subjects':
        return <BookOpen className="w-5 h-5 text-[#1D5382]" />;
      case 'human-written':
        return <ShieldCheck className="w-5 h-5 text-[#12324E]" />;
      case 'stellar-caliber':
        return <Award className="w-5 h-5 text-[#1D5382]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#38BDF8]" />;
    }
  };

  return (
    <section id="manifesto" className="py-20 sm:py-28 bg-[#F4F7FB] border-b border-[#D8E2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Identifier Header */}
        <div className="flex items-center justify-between border-b border-[#D8E2EC] pb-4 mb-16 text-xs font-mono text-[#738A9E]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#12324E]" />
            <span className="uppercase tracking-widest text-[#12324E] font-semibold">FOUNDATIONAL MANIFESTO // WHY WE EXIST</span>
          </div>
        </div>

        {/* ── PART 1: The Core Thesis ("Why We Exist") ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Left Column: Big Editorial Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <span className="text-xs font-mono uppercase tracking-widest text-[#1D5382] block mb-3 font-semibold">
              Why We Exist // The Thesis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#12324E] leading-[1.12] mb-6">
              Your future is <span className="italic font-serif font-light text-[#1D5382]">bigger</span> than your next submission.
            </h2>
            <div className="p-4 bg-[#FFFFFF] border-l-3 border-[#12324E] border-y border-r border-[#D8E2EC] text-xs font-mono text-[#12324E] mb-6 shadow-xs">
              <span className="text-base font-serif italic text-[#12324E] block">&ldquo;Make Room for More.&rdquo;</span>
            </div>

            <p className="text-xs font-mono text-[#738A9E] uppercase tracking-wider">
              {BRAND_CONFIG.name} Academic Advisory • Est. 2026
            </p>
          </div>

          {/* Right Column: Full Narrative Body */}
          <div className="lg:col-span-7 space-y-6 text-[#42586E] text-base leading-relaxed font-sans">
            <div className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#D8E2EC] shadow-xs space-y-4">
              <p className="text-[#12324E] font-serif text-lg sm:text-xl leading-relaxed italic">
                &ldquo;{BRAND_CONFIG.manifestoLead}&rdquo;
              </p>
              {BRAND_CONFIG.manifestoBody.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-[15px] leading-relaxed text-[#42586E]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* ── PART 2: Core Foundational USPs (Prominently Placed Right Beside Identity) ── */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b border-[#D8E2EC] pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#1D5382] block mb-1 font-semibold">
                The Foundational Pillars
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#12324E]">
                The Four Guiding Commitments
              </h3>
            </div>
            <p className="text-xs font-mono text-[#738A9E] max-w-sm">
              Non-negotiable operational standards governing every single project deliverable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_CONFIG.coreUSPs.map((usp, uIdx) => (
              <TiltCard
                key={usp.id}
                className="bg-[#FFFFFF] border border-[#D8E2EC] hover:border-[#12324E] hover:shadow-xl transition-all p-6 flex flex-col justify-between shadow-xs group rounded-[3px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[2px] bg-[#F4F7FB] border border-[#D8E2EC] flex items-center justify-center group-hover:border-[#12324E] transition-colors">
                      {getUSPIcon(usp.id)}
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-[#1D5382] bg-[#EBF3FB] px-2 py-0.5 border border-[#C5DCF0] font-semibold">
                      {usp.badge}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-[#738A9E] uppercase tracking-widest block mb-1">
                    PILLAR 0{uIdx + 1}
                  </span>

                  <h4 className="font-serif text-xl text-[#12324E] mb-2 font-medium leading-snug">
                    {usp.title}
                  </h4>

                  <p className="text-xs text-[#1D5382] font-medium font-mono mb-3">
                    {usp.lead}
                  </p>

                  <p className="text-xs text-[#42586E] leading-relaxed">
                    {usp.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#F4F7FB] text-[10px] font-mono text-[#738A9E] flex items-center justify-between">
                  <span>AUTHENTIC HUMAN INQUIRY</span>
                  <span className="text-[#12324E] font-semibold">WAYFORTH</span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* ── PART 3: The 6 Pillars of "Make Room for More" ── */}
        <div className="bg-[#FFFFFF] border border-[#12324E] p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D8E2EC] pb-6 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#1D5382] block mb-1 font-semibold">
                Philosophical Architecture
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#12324E]">
                The 6 Dimensions of &ldquo;More&rdquo;
              </h3>
            </div>
            {onRequestQuote && (
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#12324E] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#1D5382] transition-colors cursor-pointer self-start sm:self-auto"
              >
                <span>Get a Written Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8]" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BRAND_CONFIG.pillars.map((pillar, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border transition-all duration-200 bg-[#FFFFFF] ${
                    isOpen ? 'border-[#12324E] shadow-xs' : 'border-[#D8E2EC] hover:border-[#B8C9D8]'
                  }`}
                >
                  <button
                    onClick={() => togglePillar(idx)}
                    aria-expanded={isOpen}
                    className="w-full px-5 py-4 text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs text-[#1D5382] font-bold pt-0.5">
                        0{idx + 1}
                      </span>
                      <h4 className="font-serif text-base sm:text-lg text-[#12324E] font-medium leading-snug">
                        {pillar.title}
                      </h4>
                    </div>
                    <motion.div
                      className="pt-0.5 text-[#12324E] shrink-0"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: editorial }}
                    >
                      <Plus className={`w-4 h-4 ${isOpen ? 'text-[#1D5382]' : 'text-[#738A9E]'}`} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={`pillar-content-${idx}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: editorial }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-xs text-[#42586E] leading-relaxed border-t border-[#D8E2EC] ml-7 font-sans">
                          <p>{pillar.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
