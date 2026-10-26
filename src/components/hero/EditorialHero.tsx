'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Shield, FileText, Clock } from 'lucide-react';
import { BrandName } from '@/config/brand.config';
import { ArchivalMonolith3D } from '@/components/preview/ArchivalMonolith3D';

interface EditorialHeroProps {
  brandName: BrandName;
  onRequestQuote: () => void;
}

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
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20">
      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 lg:grid-cols-12 border-x border-[#D8E2EC]/50">
          <div className="border-r border-[#D8E2EC]/30 hidden lg:block col-span-2"></div>
          <div className="border-r border-[#D8E2EC]/30 col-span-5"></div>
          <div className="border-r border-[#D8E2EC]/30 hidden lg:block col-span-5"></div>
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
          className="flex items-center justify-between border-b border-[#D8E2EC] pb-4 mb-10 text-[11px] font-mono uppercase tracking-wider text-[#738A9E]"
          variants={revealItem(0)}
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#12324E]"></span>
            <span className="text-[#12324E] font-semibold">ACADEMIC RESEARCH & THESIS ADVISORY</span>
            <span className="hidden sm:inline text-[#B8C9D8]">|</span>
            <span className="hidden sm:inline">100% GENUINE HUMAN AUTHORSHIP</span>
          </div>
          <span className="text-[#1D5382] font-semibold">WAYFORTH FOLIO 2026</span>
        </motion.div>

        {/* 12-Column Asymmetric Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          {/* Left Column (Columns 1 to 7): Commanding Editorial Headline & Narrative */}
          <div className="lg:col-span-7">
            <motion.h1
              className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-normal tracking-[-0.025em] text-[#12324E] leading-[1.06] mb-8"
              variants={revealItem(0.1)}
            >
              Your future is <span className="italic font-serif font-light text-[#1D5382]">bigger</span> than your next submission.
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-[#42586E] font-sans font-normal leading-relaxed max-w-2xl mb-10"
              variants={revealItem(0.2)}
            >
              We believe your university career should be about more than keeping up with an endless cycle of deadlines.
              Through accessible, dependable academic project and research support by <strong>{brandName}</strong>, we help
              you make room for off-campus internships, technical skills, ventures, and what truly matters beyond the classroom.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
              variants={revealItem(0.3)}
            >
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#12324E] text-[#FFFFFF] text-xs font-mono uppercase tracking-widest hover:bg-[#1D5382] transition-colors cursor-pointer border border-[#12324E]"
              >
                <span>Submit Project Brief</span>
                <ArrowUpRight className="w-4 h-4 text-[#38BDF8]" />
              </button>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#FFFFFF] text-[#12324E] text-xs font-mono uppercase tracking-widest border border-[#D8E2EC] hover:border-[#12324E] transition-colors"
              >
                <span>Explore Fee Ledger</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#738A9E]" />
              </a>
            </motion.div>

            {/* Quick Scope Chip Matrix */}
            <motion.div
              className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-[#738A9E]"
              variants={revealItem(0.35)}
            >
              <span className="px-2.5 py-1 bg-[#F4F7FB] border border-[#D8E2EC]">UNDERGRADUATE</span>
              <span className="px-2.5 py-1 bg-[#F4F7FB] border border-[#D8E2EC]">POSTGRADUATE / MBA</span>
              <span className="px-2.5 py-1 bg-[#F4F7FB] border border-[#D8E2EC]">THESIS & DISSERTATION</span>
              <span className="px-2.5 py-1 bg-[#F4F7FB] border border-[#D8E2EC]">EXCEL QUANTITATIVE</span>
            </motion.div>
          </div>

          {/* Right Column (Columns 8 to 12): Archival Monolith 3D Centerpiece */}
          <motion.div
            className="lg:col-span-5 relative"
            variants={revealItem(0.25)}
          >
            <ArchivalMonolith3D brandName={brandName} />
          </motion.div>
        </div>

        {/* Institutional Trust Matrix */}
        <motion.div
          className="border-t border-[#D8E2EC] pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#42586E]"
          variants={revealItem(0.4)}
        >
          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-[#F4F7FB] border border-[#D8E2EC] mt-0.5 text-[#12324E]">
              <Shield className="w-4 h-4 text-[#1D5382]" />
            </div>
            <div>
              <strong className="block text-[#12324E] font-medium font-sans text-sm mb-0.5">
                Pay-As-You-Go Milestone Model
              </strong>
              <p className="text-[#738A9E] leading-relaxed">
                No big upfront fees, full trust. Review watermarked representative excerpts before releasing the milestone balance.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-[#F4F7FB] border border-[#D8E2EC] mt-0.5 text-[#12324E]">
              <FileText className="w-4 h-4 text-[#1D5382]" />
            </div>
            <div>
              <strong className="block text-[#12324E] font-medium font-sans text-sm mb-0.5">
                100% Genuine Human Writing
              </strong>
              <p className="text-[#738A9E] leading-relaxed">
                Authored by dedicated domain researchers. Transparent research methodologies and genuine academic citations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-[#F4F7FB] border border-[#D8E2EC] mt-0.5 text-[#12324E]">
              <Clock className="w-4 h-4 text-[#1D5382]" />
            </div>
            <div>
              <strong className="block text-[#12324E] font-medium font-sans text-sm mb-0.5">
                Binding Written Quotation
              </strong>
              <p className="text-[#738A9E] leading-relaxed">
                Clear page scope (250–300 words/page), delivery schedule, and 1 included revision round confirmed before work begins.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
