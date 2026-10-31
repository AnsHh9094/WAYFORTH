'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
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
    <section className="relative overflow-hidden bg-[#0C1220] text-[#F5F0E8] pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-[#2A3548]">
      {/* Subtle Architectural Blueprint Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 lg:grid-cols-12 border-x border-[#2A3548]">
          <div className="border-r border-[#2A3548] hidden lg:block col-span-2" />
          <div className="border-r border-[#2A3548] col-span-5" />
          <div className="border-r border-[#2A3548] hidden lg:block col-span-5" />
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
          className="flex items-center justify-between border-b border-[#2A3548] pb-4 mb-12 text-[11px] font-sans font-medium uppercase tracking-[0.16em] text-[#8A9BB0]"
          variants={revealItem(0)}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B8975A] animate-pulse" />
            <span className="text-[#F5F0E8] font-semibold">ACADEMIC RESEARCH & THESIS ADVISORY</span>
          </div>
        </motion.div>

        {/* Clean Editorial Hero Layout — Centered Container with Large Left-Aligned Type */}
        <div className="max-w-5xl mx-auto mb-8 text-left">
          {/* Main Headline — Grand Scale Matching Original Editorial Specimen */}
          <motion.div className="mb-8" variants={revealItem(0.08)}>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-[84px] lg:text-[92px] xl:text-[100px] font-normal tracking-[-0.03em] text-[#F5F0E8] leading-[1.05]">
              <span className="block">Make Room for</span>
              <span className="relative block h-[1.18em] overflow-hidden text-[#B8975A] italic font-serif font-light">
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
            className="text-lg sm:text-xl lg:text-[22px] text-[#CBD8E6] font-sans font-normal leading-relaxed max-w-3xl lg:max-w-4xl mb-10 text-left"
            variants={revealItem(0.18)}
          >
            Your future is <strong className="text-[#FFFFFF]">bigger</strong> than your next submission. We believe your university career should be about more than keeping up with an endless cycle of deadlines. Through accessible, dependable academic project, report, and research support by <strong className="text-[#F5F0E8]">{brandName}</strong>, we help you reclaim bandwidth for off-campus internships, skills, and ventures that truly matter.
          </motion.p>

          {/* Kinetic Action CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            variants={revealItem(0.28)}
          >
            <button
              onClick={onRequestQuote}
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#B8975A] text-[#0C1220] text-xs font-sans uppercase tracking-[0.14em] font-bold hover:bg-[#c9a767] transition-all duration-200 cursor-pointer shadow-md rounded-xl border border-[#B8975A]"
            >
              <span>Calculate Project Quote</span>
              <ArrowUpRight className="w-4 h-4 text-[#0C1220] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href="#disciplines"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#101A2B] text-[#F5F0E8] text-xs font-sans uppercase tracking-[0.14em] border border-[#2A3548] hover:border-[#B8975A] hover:bg-[#16233B] transition-all rounded-xl font-semibold"
            >
              <span>Inspect Sample Dossiers</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#B8975A]" />
            </a>
          </motion.div>

          {/* Quick Scope Chip Matrix */}
          <motion.div
            className="flex flex-wrap items-center gap-2 text-[11px] font-sans font-medium uppercase tracking-wider text-[#8A9BB0] mb-14"
            variants={revealItem(0.38)}
          >
            <span className="px-3.5 py-1 bg-[#101A2B] border border-[#2A3548] text-[#CBD8E6] rounded-full">UNDERGRADUATE</span>
            <span className="px-3.5 py-1 bg-[#101A2B] border border-[#2A3548] text-[#CBD8E6] rounded-full">POSTGRADUATE / MBA</span>
            <span className="px-3.5 py-1 bg-[#101A2B] border border-[#2A3548] text-[#CBD8E6] rounded-full">THESIS & DISSERTATION</span>
            <span className="px-3.5 py-1 bg-[#101A2B] border border-[#2A3548] text-[#B8975A] font-bold rounded-full">DATA ANALYSIS & EXCEL</span>
          </motion.div>

          {/* ── Student Workload Statistics Section (Item 2 in Release Spec) ── */}
          <motion.div
            className="pt-10 border-t border-[#2A3548]"
            variants={revealItem(0.46)}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8975A]" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.18em] text-[#B8975A]">
                  Student Workload Burden // Surveyed Reality
                </span>
              </div>
              <span className="text-[11px] font-sans text-[#8A9BB0]">
                Empirical Cohort Study
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="p-6 bg-[#101A2B] border border-[#2A3548] rounded-2xl hover:border-[#B8975A]/60 transition-all shadow-md group">
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#F5F0E8] group-hover:text-[#B8975A] transition-colors block mb-2 tracking-tight">
                  56.3%
                </span>
                <p className="text-[13px] sm:text-[13.5px] text-[#8A9BB0] leading-relaxed font-sans">
                  Of surveyed undergraduate medical students struggled to balance academic work and personal life.
                </p>
              </div>

              <div className="p-6 bg-[#101A2B] border border-[#2A3548] rounded-2xl hover:border-[#B8975A]/60 transition-all shadow-md group">
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#F5F0E8] group-hover:text-[#B8975A] transition-colors block mb-2 tracking-tight">
                  56.6%
                </span>
                <p className="text-[13px] sm:text-[13.5px] text-[#8A9BB0] leading-relaxed font-sans">
                  Described their ongoing academic workload as manageable but heavy.
                </p>
              </div>

              <div className="p-6 bg-[#101A2B] border border-[#2A3548] rounded-2xl hover:border-[#B8975A]/60 transition-all shadow-md group">
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#F5F0E8] group-hover:text-[#B8975A] transition-colors block mb-2 tracking-tight">
                  20.7%
                </span>
                <p className="text-[13px] sm:text-[13.5px] text-[#8A9BB0] leading-relaxed font-sans">
                  Considered their academic workload excessively and unsustainably too heavy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
