'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ShieldCheck, FileCheck, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { BrandName } from '@/config/brand.config';

interface EditorialHeroProps {
  brandName: BrandName;
  onRequestQuote: () => void;
}

const ROTATING_WORDS = [
  'Opportunities.',
  'Internships.',
  'Ambitions.',
  'Practical Skills.',
  'New Ventures.',
  'What Truly Matters.',
];

const editorial = [0.16, 1, 0.3, 1] as const;

const revealItem = (delay: number) => ({
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: editorial, delay },
  },
});

export function EditorialHero({ brandName, onRequestQuote }: EditorialHeroProps) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] text-[#12324E] pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-[#D8E2EC]">
      {/* Subtle Architectural Blueprint Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 lg:grid-cols-12 border-x border-[#D8E2EC]">
          <div className="border-r border-[#D8E2EC]/50 hidden lg:block col-span-2" />
          <div className="border-r border-[#D8E2EC]/50 col-span-5" />
          <div className="border-r border-[#D8E2EC]/50 hidden lg:block col-span-5" />
        </div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Top Folio Rubric Bar */}
        <motion.div
          className="flex items-center justify-between border-b border-[#D8E2EC] pb-4 mb-12 text-[11px] font-mono uppercase tracking-wider text-[#4A607A]"
          variants={revealItem(0)}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1D5382] animate-pulse" />
            <span className="text-[#12324E] font-semibold">ACADEMIC RESEARCH & THESIS ADVISORY</span>
            <span className="hidden sm:inline text-[#B8C9D8]">•</span>
            <span className="hidden sm:inline text-[#1D5382] font-medium">100% GENUINE HUMAN AUTHORSHIP</span>
          </div>
          <span className="text-[#1D5382] font-bold tracking-widest">WAYFORTH ARCHIVAL FOLIO // 2026</span>
        </motion.div>

        {/* 12-Column Asymmetric Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column (Columns 1 to 7): Commanding Headline with Rotating "More" Feature */}
          <div className="lg:col-span-7">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#F4F7FB] border border-[#D8E2EC] text-[#1D5382] text-[10.5px] font-mono uppercase tracking-widest mb-6 font-semibold shadow-2xs"
              variants={revealItem(0.05)}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#1D5382]" />
              <span>PAY-AS-YOU-GO MILESTONE MODEL • 50% DEPOSIT TO BEGIN</span>
            </motion.div>

            {/* Main Headline with Dynamic Rotating Feature */}
            <motion.div className="mb-8" variants={revealItem(0.12)}>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-normal tracking-[-0.03em] text-[#12324E] leading-[1.06]">
                Make Room for More{' '}
                <span className="relative inline-flex items-baseline text-[#1D5382] font-serif italic underline decoration-[#D8E2EC] decoration-2 underline-offset-8">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.35, ease: editorial }}
                      className="inline-block"
                    >
                      {ROTATING_WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-[#364B62] font-sans font-normal leading-relaxed max-w-2xl mb-10"
              variants={revealItem(0.22)}
            >
              Your future is <strong className="text-[#12324E]">bigger</strong> than your next submission. We believe your university career should be about more than keeping up with an endless cycle of deadlines. Through accessible, dependable academic project, report, and research support by <strong className="text-[#12324E]">{brandName}</strong>, we help you reclaim bandwidth for off-campus internships, skills, and ventures that truly matter.
            </motion.p>

            {/* Kinetic Action CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
              variants={revealItem(0.32)}
            >
              <button
                onClick={onRequestQuote}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#12324E] text-[#FFFFFF] text-xs font-mono uppercase tracking-widest font-bold hover:bg-[#1D5382] transition-all duration-200 cursor-pointer shadow-md rounded-[2px]"
              >
                <span>Calculate Project Quote</span>
                <ArrowUpRight className="w-4 h-4 text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#disciplines"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#F4F7FB] text-[#12324E] text-xs font-mono uppercase tracking-widest border border-[#D8E2EC] hover:border-[#12324E] hover:bg-[#FFFFFF] transition-all rounded-[2px]"
              >
                <span>Inspect Sample Dossiers</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#1D5382]" />
              </a>
            </motion.div>

            {/* Quick Scope Chip Matrix */}
            <motion.div
              className="flex flex-wrap items-center gap-2 text-[10.5px] font-mono text-[#4A607A]"
              variants={revealItem(0.4)}
            >
              <span className="px-3 py-1 bg-[#F4F7FB] border border-[#D8E2EC] text-[#12324E]">UNDERGRADUATE</span>
              <span className="px-3 py-1 bg-[#F4F7FB] border border-[#D8E2EC] text-[#12324E]">POSTGRADUATE / MBA</span>
              <span className="px-3 py-1 bg-[#F4F7FB] border border-[#D8E2EC] text-[#12324E]">THESIS & DISSERTATION</span>
              <span className="px-3 py-1 bg-[#F4F7FB] border border-[#D8E2EC] text-[#1D5382] font-bold">DATA ANALYSIS & EXCEL</span>
            </motion.div>
          </div>

          {/* Right Column (Columns 8 to 12): Tactile Layered Paper Manuscript Specimen Card */}
          <motion.div
            className="lg:col-span-5 relative"
            variants={revealItem(0.28)}
          >
            {/* Background Layer 2 (Rotated shadow paper) */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 bg-[#F4F7FB] border border-[#D8E2EC] rounded-[3px] shadow-sm pointer-events-none"
            />

            {/* Main Foreground Physical Paper Sheet */}
            <div className="relative bg-[#FFFFFF] border-2 border-[#12324E] p-6 sm:p-8 rounded-[3px] shadow-xl space-y-5 transition-transform duration-300 hover:-translate-y-1">
              {/* Paper Top Margin Folio Header */}
              <div className="flex items-center justify-between border-b border-[#D8E2EC] pb-3 text-[10.5px] font-mono text-[#4A607A]">
                <span className="text-[#1D5382] font-semibold flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>MBA // HARVARD CITATIONS</span>
                </span>
                <span className="bg-[#12324E] text-white px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider">
                  FOLIO p. 01 OF 45
                </span>
              </div>

              {/* Manuscript Title & Metadata */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#1D5382] block mb-1 font-semibold">
                  Exemplar Project Deliverable
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#12324E] font-medium leading-snug mb-2">
                  Empirical Valuation & Working Capital Dynamics in D2C Banking
                </h3>
                <p className="text-xs text-[#4A607A] leading-relaxed">
                  Submitted in partial fulfilment of institutional requirements. Complete with statistical tables and verified academic citations.
                </p>
              </div>

              {/* Simulated Typeset Academic Text Lines & Data Structure */}
              <div className="space-y-2 py-1" aria-hidden="true">
                <div className="h-2 rounded-full bg-[#12324E]/15 w-[96%]" />
                <div className="h-2 rounded-full bg-[#12324E]/10 w-[88%]" />
                <div className="h-2 rounded-full bg-[#12324E]/15 w-[92%]" />
                <div className="h-2 rounded-full bg-[#12324E]/10 w-[65%]" />
              </div>

              {/* Interactive Inset: Methodology Excerpt */}
              <div className="p-3.5 bg-[#F4F7FB] border-l-2 border-[#12324E] border-y border-r border-[#D8E2EC] text-[11.5px] font-mono text-[#364B62] space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#1D5382] block tracking-wider">
                  Methodology & Regressions
                </span>
                <p className="text-[11px] leading-relaxed font-sans text-[#4A607A]">
                  Cross-sectional regression (R² = 0.84, p &lt; 0.001) confirms working capital cycle compression improves asset turnover by 14.2%.
                </p>
              </div>

              {/* Authorship & Milestone Safeguard Badges */}
              <div className="pt-3 border-t border-[#D8E2EC] flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[#1D5382]">
                <span className="flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D5382]" />
                  <span>100% Genuine Human Writing</span>
                </span>
                <span className="px-2 py-0.5 bg-[#EBF3FB] border border-[#C5DCF0] font-bold text-[#12324E]">
                  50% Milestone Deposit
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Core Value Anchor Pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-[#D8E2EC] text-xs font-mono"
          variants={revealItem(0.45)}
        >
          <div className="flex items-start gap-3 p-4 bg-[#F4F7FB] border border-[#D8E2EC] rounded-[2px]">
            <div className="p-1.5 bg-[#FFFFFF] border border-[#D8E2EC] text-[#1D5382] mt-0.5 shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#1D5382]" />
            </div>
            <div>
              <strong className="block text-[#12324E] font-sans text-sm mb-1 font-semibold">
                Pay-As-You-Go Milestone Safeguard
              </strong>
              <p className="text-[#4A607A] leading-relaxed">
                50% deposit to begin research. Review representative watermarked excerpts before releasing the milestone balance. Zero 100% upfront risk.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-[#F4F7FB] border border-[#D8E2EC] rounded-[2px]">
            <div className="p-1.5 bg-[#FFFFFF] border border-[#D8E2EC] text-[#1D5382] mt-0.5 shrink-0">
              <FileCheck className="w-4 h-4 text-[#1D5382]" />
            </div>
            <div>
              <strong className="block text-[#12324E] font-sans text-sm mb-1 font-semibold">
                100% Genuine Human Research
              </strong>
              <p className="text-[#4A607A] leading-relaxed">
                Authored by dedicated domain scholars. Legitimate, verifiable academic citations tailored strictly to university evaluation rubrics.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-[#F4F7FB] border border-[#D8E2EC] rounded-[2px]">
            <div className="p-1.5 bg-[#FFFFFF] border border-[#D8E2EC] text-[#1D5382] mt-0.5 shrink-0">
              <Layers className="w-4 h-4 text-[#1D5382]" />
            </div>
            <div>
              <strong className="block text-[#12324E] font-sans text-sm mb-1 font-semibold">
                1 Included Revision Round
              </strong>
              <p className="text-[#4A607A] leading-relaxed">
                Comprehensive revision round included with every engagement for consolidated feedback and fine-tuning within the agreed brief.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
