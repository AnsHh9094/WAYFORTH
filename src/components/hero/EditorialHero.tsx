'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ShieldCheck, FileCheck, Sparkles, Layers } from 'lucide-react';
import { BrandName } from '@/config/brand.config';

interface EditorialHeroProps {
  brandName: BrandName;
  onRequestQuote: () => void;
}

const ROTATING_WORDS = [
  'What Truly Matters.',
  'Opportunities.',
  'Internships.',
  'Ambitions.',
  'Practical Skills.',
  'New Ventures.',
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
          </div>
        </motion.div>

        {/* Clean Editorial Hero Layout — Centered Container with Large Left-Aligned Type */}
        <div className="max-w-4xl mx-auto mb-16 text-left">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4F7FB] border border-[#D8E2EC] text-[#1D5382] text-[11px] sm:text-xs font-mono uppercase tracking-widest mb-7 font-semibold shadow-2xs"
            variants={revealItem(0.05)}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#1D5382]" />
            <span>PAY-AS-YOU-GO MILESTONE MODEL • 50% DEPOSIT TO BEGIN</span>
          </motion.div>

          {/* Main Headline — Grand Scale Matching Original Editorial Specimen */}
          <motion.div className="mb-8" variants={revealItem(0.12)}>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-[80px] lg:text-[88px] xl:text-[94px] font-normal tracking-[-0.03em] text-[#12324E] leading-[1.05]">
              <span className="block">Make Room for</span>
              <span className="relative block h-[1.18em] overflow-hidden text-[#1D5382] italic font-serif font-light">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: '65%', filter: 'blur(3px)' }}
                    animate={{ opacity: 1, y: '0%', filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: '-65%', filter: 'blur(3px)' }}
                    transition={{ duration: 0.45, ease: editorial }}
                    className="block whitespace-nowrap"
                  >
                    {ROTATING_WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-[#364B62] font-sans font-normal leading-relaxed max-w-2xl lg:max-w-3xl mb-10 text-left"
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
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#12324E] text-[#FFFFFF] text-xs font-mono uppercase tracking-widest font-bold hover:bg-[#1D5382] transition-all duration-200 cursor-pointer shadow-md rounded-xl"
            >
              <span>Calculate Project Quote</span>
              <ArrowUpRight className="w-4 h-4 text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href="#disciplines"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#F4F7FB] text-[#12324E] text-xs font-mono uppercase tracking-widest border border-[#D8E2EC] hover:border-[#12324E] hover:bg-[#FFFFFF] transition-all rounded-xl font-semibold"
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
            <span className="px-3.5 py-1 bg-[#F4F7FB] border border-[#D8E2EC] text-[#12324E] rounded-full">UNDERGRADUATE</span>
            <span className="px-3.5 py-1 bg-[#F4F7FB] border border-[#D8E2EC] text-[#12324E] rounded-full">POSTGRADUATE / MBA</span>
            <span className="px-3.5 py-1 bg-[#F4F7FB] border border-[#D8E2EC] text-[#12324E] rounded-full">THESIS & DISSERTATION</span>
            <span className="px-3.5 py-1 bg-[#F4F7FB] border border-[#D8E2EC] text-[#1D5382] font-bold rounded-full">DATA ANALYSIS & EXCEL</span>
          </motion.div>
        </div>

        {/* 3 Core Value Anchor Pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-[#D8E2EC] text-xs font-sans"
          variants={revealItem(0.45)}
        >
          <div className="flex items-start gap-4 p-5 bg-[#F4F7FB] border border-[#D8E2EC] rounded-2xl">
            <div className="p-2 bg-[#FFFFFF] border border-[#D8E2EC] text-[#1D5382] mt-0.5 shrink-0 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-[#1D5382]" />
            </div>
            <div>
              <strong className="block text-[#12324E] font-sans text-sm mb-1 font-semibold">
                Pay-As-You-Go Milestone Safeguard
              </strong>
              <p className="text-[#4A607A] leading-relaxed font-sans">
                50% deposit to begin research. Review representative watermarked excerpts before releasing the milestone balance. Protected milestone safeguard.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-[#F4F7FB] border border-[#D8E2EC] rounded-2xl">
            <div className="p-2 bg-[#FFFFFF] border border-[#D8E2EC] text-[#1D5382] mt-0.5 shrink-0 rounded-xl">
              <FileCheck className="w-4 h-4 text-[#1D5382]" />
            </div>
            <div>
              <strong className="block text-[#12324E] font-sans text-sm mb-1 font-semibold">
                100% Genuine Human Research
              </strong>
              <p className="text-[#4A607A] leading-relaxed font-sans">
                Authored by dedicated domain scholars. Legitimate, verifiable academic citations tailored strictly to university evaluation rubrics.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-[#F4F7FB] border border-[#D8E2EC] rounded-2xl">
            <div className="p-2 bg-[#FFFFFF] border border-[#D8E2EC] text-[#1D5382] mt-0.5 shrink-0 rounded-xl">
              <Layers className="w-4 h-4 text-[#1D5382]" />
            </div>
            <div>
              <strong className="block text-[#12324E] font-sans text-sm mb-1 font-semibold">
                1 Included Revision Round
              </strong>
              <p className="text-[#4A607A] leading-relaxed font-sans">
                Comprehensive revision round included with every engagement for consolidated feedback and fine-tuning within the agreed brief.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
