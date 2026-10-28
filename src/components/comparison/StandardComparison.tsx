'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BrandName } from '@/config/brand.config';
import { ShieldCheck, Eye, Target } from 'lucide-react';

interface StandardComparisonProps {
  brandName: BrandName;
}

const editorial = [0.16, 1, 0.3, 1] as const;

const cardReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: editorial, delay: i * 0.1 },
  }),
};

export function StandardComparison({ brandName }: StandardComparisonProps) {
  return (
    <section id="comparison" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#D8E2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-[#D8E2EC] pb-4 mb-16 text-xs font-mono text-[#4A607A]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#12324E]" />
            <span className="uppercase tracking-widest text-[#12324E] font-semibold">THE WAYFORTH STANDARD // INSTITUTIONAL INTEGRITY</span>
          </div>
          <span className="text-[#1D5382] uppercase font-semibold">EXCELLENCE & ACCOUNTABILITY</span>
        </div>

        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1D5382] block mb-2 font-semibold">
            The Trust Dilemma in Academic Support
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#12324E] leading-tight mb-4">
            Designed to protect your peace of mind, your money, and your academic credibility.
          </h2>
          <p className="text-[#364B62] text-base leading-relaxed">
            Many providers in the market spread themselves thin across software, app building, and assignments,
            while enforcing rigid advance payment policies. We believe students deserve
            specialization, transparency, and contractual security.
          </p>
        </div>

        {/* 3 Pillars of Distinction */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Human Authorship */}
          <motion.div
            className="bg-[#FFFFFF] border border-[#D8E2EC] p-8 flex flex-col justify-between hover:border-[#12324E] transition-all shadow-xs"
            variants={cardReveal}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div>
              <div className="w-10 h-10 bg-[#F4F7FB] border border-[#D8E2EC] flex items-center justify-center text-[#12324E] mb-6">
                <ShieldCheck className="w-5 h-5 text-[#1D5382]" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#4A607A] block mb-2">
                Pillar 01 / Authenticity
              </span>
              <h3 className="font-serif text-2xl text-[#12324E] mb-4">
                100% Genuine Human Writing
              </h3>
              
              <div className="space-y-4 text-sm text-[#364B62] mb-6">
                <div className="p-3 bg-[#FFF5F5] border-l-2 border-red-700 text-xs">
                  <span className="font-mono uppercase text-red-800 block font-semibold mb-1">The Industry Risk:</span>
                  Agencies using generic AI generators that output hallucinated citations and robotic phrasing that fail academic scrutiny.
                </div>
                <div className="p-3 bg-[#F0F5FA] border-l-2 border-[#12324E] text-xs">
                  <span className="font-mono uppercase text-[#12324E] block font-semibold mb-1">The {brandName} Standard:</span>
                  Every deliverable is researched and drafted by human domain specialists. We tailor arguments strictly to institutional rubrics with legitimate, verifiable sources.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D8E2EC] text-xs font-mono text-[#4A607A]">
              ZERO AUTOMATED SHORTCUTS
            </div>
          </motion.div>

          {/* Card 2: Pay-As-You-Go Milestone Model */}
          <motion.div
            className="bg-[#FFFFFF] border-2 border-[#12324E] p-8 flex flex-col justify-between relative shadow-sm"
            variants={cardReveal}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="absolute top-0 right-0 bg-[#12324E] text-white text-[10px] font-mono uppercase px-3 py-1 font-semibold">
              Core Safeguard
            </div>
            <div>
              <div className="w-10 h-10 bg-[#12324E] text-white flex items-center justify-center mb-6">
                <Eye className="w-5 h-5 text-[#38BDF8]" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#1D5382] block mb-2 font-semibold">
                Pillar 02 / Risk Mitigation
              </span>
              <h3 className="font-serif text-2xl text-[#12324E] mb-4">
                Pay-As-You-Go Milestone Model
              </h3>
              
              <div className="space-y-4 text-sm text-[#364B62] mb-6">
                <div className="p-3 bg-[#FFF5F5] border-l-2 border-red-700 text-xs">
                  <span className="font-mono uppercase text-red-800 block font-semibold mb-1">The Industry Risk:</span>
                  Competitors demanding full upfront advance payments with terms stating fees are entirely non-refundable before you inspect a single page.
                </div>
                <div className="p-3 bg-[#F0F5FA] border-l-2 border-[#12324E] text-xs">
                  <span className="font-mono uppercase text-[#12324E] block font-semibold mb-1">The {brandName} Standard:</span>
                  50% milestone advance initiates research → inspect representative watermarked excerpts → 1 included revision round → release final balance. Full trust.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D8E2EC] text-xs font-mono text-[#12324E] font-semibold">
              INSPECTION BEFORE FULL SETTLEMENT
            </div>
          </motion.div>

          {/* Card 3: Academic Specialization */}
          <motion.div
            className="bg-[#FFFFFF] border border-[#D8E2EC] p-8 flex flex-col justify-between hover:border-[#12324E] transition-all shadow-xs"
            variants={cardReveal}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div>
              <div className="w-10 h-10 bg-[#F4F7FB] border border-[#D8E2EC] flex items-center justify-center text-[#12324E] mb-6">
                <Target className="w-5 h-5 text-[#1D5382]" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#4A607A] block mb-2">
                Pillar 03 / Domain Focus
              </span>
              <h3 className="font-serif text-2xl text-[#12324E] mb-4">
                100% Academic & Research Focus
              </h3>
              
              <div className="space-y-4 text-sm text-[#364B62] mb-6">
                <div className="p-3 bg-[#FFF5F5] border-l-2 border-red-700 text-xs">
                  <span className="font-mono uppercase text-red-800 block font-semibold mb-1">The Industry Risk:</span>
                  Bloated aggregators that claim to build mobile apps, websites, and school homework all on the same assembly line.
                </div>
                <div className="p-3 bg-[#F0F5FA] border-l-2 border-[#12324E] text-xs">
                  <span className="font-mono uppercase text-[#12324E] block font-semibold mb-1">The {brandName} Standard:</span>
                  We specialize solely in academic project reports, research papers, MBA capstones, and Excel analytics. We master one craft with dedicated domain scholars.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D8E2EC] text-xs font-mono text-[#4A607A]">
              SPECIALISTS, NOT GENERAL AGGREGATORS
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
