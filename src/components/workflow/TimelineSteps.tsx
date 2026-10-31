'use client';

import React, { useState } from 'react';
import { BRAND_CONFIG } from '@/config/brand.config';
import { ShieldCheck, KeyRound } from 'lucide-react';
import { motion } from 'framer-motion';

export function TimelineSteps() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="workflow" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#D8E2EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#D8E2EC] pb-4 mb-16 text-[11px] font-sans font-medium uppercase tracking-[0.16em] text-[#4A607A]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8975A]" />
            <span className="uppercase tracking-widest text-[#12324E] font-semibold">
              CONTRACTUAL LIFECYCLE // SIX-STAGE PROCESS
            </span>
          </div>
          <span className="text-[#B8975A] uppercase font-semibold">
            TRANSPARENT MILESTONES
          </span>
        </div>

        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-sans uppercase tracking-[0.14em] text-[#B8975A] block mb-2 font-semibold">
            Structured Engagement Process
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#12324E] leading-tight mb-4">
            An unbroken workflow from initial brief to final delivery.
          </h2>
          <p className="text-[#364B62] text-base leading-relaxed">
            Every project follows a defined, orderly progression designed to eliminate ambiguity, protect university deadlines, and ensure complete satisfaction before final payment release.
          </p>
        </div>

        {/* ── 6-Step Cards (Smooth Rounded-2xl Corners) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {BRAND_CONFIG.workflowSteps.map((step, idx) => {
            const isGate4 = step.step === '04';
            const isGate6 = step.step === '06';
            const isHovered = activeStep === idx;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                data-cursor="INSPECT"
                className={`bg-[#FFFFFF] border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group rounded-2xl ${
                  isGate6
                    ? 'border-[#12324E] shadow-md ring-2 ring-[#12324E]/15 bg-gradient-to-b from-[#FFFFFF] to-[#F4F7FB]'
                    : isGate4
                    ? 'border-[#1D5382] shadow-md ring-2 ring-[#1D5382]/15 bg-gradient-to-b from-[#FFFFFF] to-[#F0F5FA]'
                    : isHovered
                    ? 'border-[#12324E] shadow-sm -translate-y-0.5'
                    : 'border-[#D8E2EC] hover:border-[#12324E]/50'
                }`}
              >
                {/* Milestone Ribbon for Key Gates — Rounded-full Capsule */}
                {isGate4 && (
                  <div className="absolute top-4 right-4 bg-[#1D5382] text-white text-[10px] font-sans uppercase tracking-wider px-3 py-1 flex items-center gap-1.5 shadow-xs font-semibold rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B8975A]" />
                    <span>Safeguard Milestone</span>
                  </div>
                )}
                {isGate6 && (
                  <div className="absolute top-4 right-4 bg-[#12324E] text-white text-[10px] font-sans uppercase tracking-wider px-3 py-1 flex items-center gap-1.5 shadow-xs font-semibold rounded-full border border-[#B8975A]/40">
                    <KeyRound className="w-3.5 h-3.5 text-[#B8975A]" />
                    <span>Complete Handover</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between text-xs font-sans text-[#4A607A] mb-4">
                    <span className="font-bold text-sm font-sans text-[#12324E] tracking-tight">
                      Stage {step.step}
                    </span>
                    <span className="px-2.5 py-0.5 bg-[#F4F7FB] border border-[#D8E2EC] text-[10.5px] uppercase font-sans font-semibold text-[#1D5382] rounded-full">
                      {step.actor}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#12324E] font-medium leading-snug mb-2">
                    {step.title}
                  </h3>

                  <p className="text-[14px] font-sans text-[#1D5382] font-semibold mb-3 leading-relaxed">
                    {step.summary}
                  </p>

                  <p className="text-[13.5px] sm:text-[14px] text-[#42586E] leading-relaxed font-sans font-normal">
                    {step.detail}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#F4F7FB] flex items-center justify-between text-[11px] font-sans text-[#4A607A]">
                  <span className="uppercase tracking-wider">Contractual Protocol</span>
                  <span className="text-[#12324E] font-semibold">Step {step.step} of 06</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
