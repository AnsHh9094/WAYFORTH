'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Shield, FileText, Clock, Sparkles } from 'lucide-react';
import { BrandName } from '@/config/brand.config';
import { ArchivalMonolith3D } from '@/components/preview/ArchivalMonolith3D';

interface EditorialHeroProps {
  brandName: BrandName;
  onRequestQuote: () => void;
}

const editorial = [0.16, 1, 0.3, 1] as const;

const revealItem = (delay: number) => ({
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: editorial, delay },
  },
});

export function EditorialHero({ brandName, onRequestQuote }: EditorialHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#091624] text-[#FFFFFF] pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-[#1D3D5E]">
      {/* Cinematic Blueprint Grid & Ambient Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[450px] bg-[#1D5382]/25 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-10 w-[400px] h-[350px] bg-[#38BDF8]/10 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 lg:grid-cols-12 border-x border-[#1D3D5E]/40 opacity-50">
          <div className="border-r border-[#1D3D5E]/25 hidden lg:block col-span-2"></div>
          <div className="border-r border-[#1D3D5E]/25 col-span-5"></div>
          <div className="border-r border-[#1D3D5E]/25 hidden lg:block col-span-5"></div>
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
          className="flex items-center justify-between border-b border-[#1D3D5E] pb-4 mb-12 text-[11px] font-mono uppercase tracking-wider text-[#9BB3C9]"
          variants={revealItem(0)}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00FFA3] animate-pulse"></span>
            <span className="text-[#FFFFFF] font-semibold">ACADEMIC RESEARCH & THESIS ADVISORY</span>
            <span className="hidden sm:inline text-[#38BDF8]">•</span>
            <span className="hidden sm:inline text-[#E2ECF5]">100% GENUINE HUMAN AUTHORSHIP</span>
          </div>
          <span className="text-[#38BDF8] font-bold tracking-widest">WAYFORTH ARCHIVAL FOLIO // 2026</span>
        </motion.div>

        {/* 12-Column Asymmetric Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column (Columns 1 to 7): Commanding Kinetic Headline & Narrative */}
          <div className="lg:col-span-7">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#12324E] border border-[#224A70] text-[#38BDF8] text-[10px] font-mono uppercase tracking-widest mb-6 font-semibold shadow-xs"
              variants={revealItem(0.05)}
            >
              <Sparkles className="w-3 h-3 text-[#38BDF8]" />
              <span>PAY-AS-YOU-GO MILESTONE MODEL • ZERO UPFRONT FEES</span>
            </motion.div>

            <motion.h1
              className="font-serif text-4xl sm:text-6xl lg:text-[72px] font-normal tracking-[-0.03em] text-[#FFFFFF] leading-[1.04] mb-8"
              variants={revealItem(0.12)}
            >
              Your future is{' '}
              <span className="italic font-serif font-light text-[#38BDF8] underline decoration-[#1D5382] decoration-2 underline-offset-8">
                bigger
              </span>{' '}
              than your next submission.
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-[#9BB3C9] font-sans font-normal leading-relaxed max-w-2xl mb-10"
              variants={revealItem(0.22)}
            >
              We believe your university career should be about more than keeping up with an endless cycle of deadlines.
              Through dependable academic project, report, and research support by <strong className="text-[#FFFFFF]">{brandName}</strong>, we help
              you make room for off-campus internships, ventures, skills, and what truly matters beyond the classroom.
            </motion.p>

            {/* Kinetic Action CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
              variants={revealItem(0.32)}
            >
              <button
                onClick={onRequestQuote}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#FFFFFF] text-[#091624] text-xs font-mono uppercase tracking-widest font-bold hover:bg-[#38BDF8] hover:text-[#091624] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-cyan-500/20 rounded-[2px]"
              >
                <span>Submit Project Brief</span>
                <ArrowUpRight className="w-4 h-4 text-[#091624] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#0E253A] text-[#E2ECF5] text-xs font-mono uppercase tracking-widest border border-[#224A70] hover:border-[#38BDF8] hover:text-[#FFFFFF] transition-all rounded-[2px]"
              >
                <span>Explore Fee Ledger</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#38BDF8]" />
              </a>
            </motion.div>

            {/* Quick Scope Chip Matrix */}
            <motion.div
              className="flex flex-wrap items-center gap-2 text-[10.5px] font-mono text-[#9BB3C9]"
              variants={revealItem(0.4)}
            >
              <span className="px-3 py-1 bg-[#0E253A] border border-[#224A70] text-[#E2ECF5]">UNDERGRADUATE</span>
              <span className="px-3 py-1 bg-[#0E253A] border border-[#224A70] text-[#E2ECF5]">POSTGRADUATE / MBA</span>
              <span className="px-3 py-1 bg-[#0E253A] border border-[#224A70] text-[#E2ECF5]">THESIS & DISSERTATION</span>
              <span className="px-3 py-1 bg-[#0E253A] border border-[#224A70] text-[#38BDF8] font-bold">DATA ANALYSIS & EXCEL</span>
            </motion.div>
          </div>

          {/* Right Column (Columns 8 to 12): 3D Monolith Centerpiece Stage */}
          <motion.div
            className="lg:col-span-5 relative"
            variants={revealItem(0.28)}
          >
            <div className="relative p-2 bg-[#0B1826]/80 rounded-[4px] border border-[#224A70] shadow-2xl backdrop-blur-xs">
              <ArchivalMonolith3D brandName={brandName} />
            </div>
          </motion.div>
        </div>

        {/* 3 Value Anchor Pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-[#1D3D5E] text-xs font-mono"
          variants={revealItem(0.45)}
        >
          <div className="flex items-start gap-3 p-4 bg-[#0B1826]/60 border border-[#1D3D5E] rounded-[2px]">
            <div className="p-1.5 bg-[#12324E] border border-[#224A70] text-[#38BDF8] mt-0.5 shrink-0">
              <Shield className="w-4 h-4 text-[#38BDF8]" />
            </div>
            <div>
              <strong className="block text-[#FFFFFF] font-sans text-sm mb-1 font-semibold">
                Pay-As-You-Go Milestone Model
              </strong>
              <p className="text-[#9BB3C9] leading-relaxed">
                No big upfront fees. Inspect watermarked representative excerpts before releasing the milestone balance.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-[#0B1826]/60 border border-[#1D3D5E] rounded-[2px]">
            <div className="p-1.5 bg-[#12324E] border border-[#224A70] text-[#38BDF8] mt-0.5 shrink-0">
              <FileText className="w-4 h-4 text-[#38BDF8]" />
            </div>
            <div>
              <strong className="block text-[#FFFFFF] font-sans text-sm mb-1 font-semibold">
                100% Genuine Human Writing
              </strong>
              <p className="text-[#9BB3C9] leading-relaxed">
                Authored by discipline specialists. Legitimate, verifiable citations tailored strictly to university rubrics.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-[#0B1826]/60 border border-[#1D3D5E] rounded-[2px]">
            <div className="p-1.5 bg-[#12324E] border border-[#224A70] text-[#38BDF8] mt-0.5 shrink-0">
              <Clock className="w-4 h-4 text-[#38BDF8]" />
            </div>
            <div>
              <strong className="block text-[#FFFFFF] font-sans text-sm mb-1 font-semibold">
                1 Included Revision Round
              </strong>
              <p className="text-[#9BB3C9] leading-relaxed">
                24-hour review window after draft sample delivery for consolidated feedback and fine-tuning.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
