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
        <div className="flex items-center justify-between border-b border-[#D8E2EC] pb-4 mb-16 text-xs font-mono text-[#4A607A]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#12324E]" />
            <span className="uppercase tracking-widest text-[#12324E] font-semibold">
              CONTRACTUAL LIFECYCLE // SEVEN-STAGE PROCESS
            </span>
          </div>
          <span className="text-[#1D5382] uppercase font-semibold">
            TRANSPARENT MILESTONES
          </span>
        </div>

        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1D5382] block mb-2 font-semibold">
            Structured Engagement Process
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#12324E] leading-tight mb-4">
            An unbroken workflow from initial brief to final delivery.
          </h2>
          <p className="text-[#364B62] text-base leading-relaxed">
            Every project follows a defined, orderly progression designed to eliminate ambiguity, protect university deadlines, and ensure complete satisfaction before final payment release.
          </p>
        </div>

        {/* ── Visual Progression Spine ── */}
        <div className="hidden lg:block mb-16 bg-[#FFFFFF] border border-[#D8E2EC] p-6 shadow-xs relative">
          <div className="flex items-center justify-between mb-6 text-[10px] font-mono text-[#4A607A] uppercase tracking-wider">
            <span>ENGAGEMENT MILESTONES</span>
            <span className="text-[#12324E] font-semibold">ALL STAGES MONITORED</span>
          </div>

          {/* Continuous Connecting Line */}
          <div className="relative flex items-center justify-between">
            {/* The base connecting rail */}
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-[#D8E2EC] z-0" />
            
            {/* Subtle accent thread along the line */}
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#12324E] via-[#1D5382] to-[#12324E] opacity-40 z-0" />

            {BRAND_CONFIG.workflowSteps.map((step, idx) => {
              const isGate4 = step.step === '04';
              const isGate7 = step.step === '07';
              const isHovered = activeStep === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="relative z-10 flex flex-col items-center group cursor-pointer"
                  data-cursor="INSPECT"
                >
                  {/* Node Circle */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                      isGate4
                        ? 'bg-[#1D5382] text-white ring-4 ring-[#1D5382]/20 shadow-sm scale-110'
                        : isGate7
                        ? 'bg-[#12324E] text-white ring-4 ring-[#12324E]/20 shadow-sm scale-110'
                        : isHovered
                        ? 'bg-[#12324E] text-white shadow-xs'
                        : 'bg-[#FFFFFF] border-2 border-[#12324E]/40 text-[#12324E]'
                    }`}
                  >
                    {step.step}
                  </div>

                  {/* Micro Node Title */}
                  <div className="mt-3 text-center">
                    <span className="block text-[10px] font-mono font-medium text-[#12324E] truncate max-w-[110px]">
                      {isGate4 ? 'Preview Review' : isGate7 ? 'Final Release' : step.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 7-Step Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {BRAND_CONFIG.workflowSteps.map((step, idx) => {
            const isGate4 = step.step === '04';
            const isGate7 = step.step === '07';
            const isHovered = activeStep === idx;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                data-cursor="INSPECT"
                className={`bg-[#FFFFFF] border p-6 flex flex-col justify-between transition-all duration-300 relative group ${
                  isGate7
                    ? 'border-[#12324E] shadow-md ring-2 ring-[#12324E]/15 bg-gradient-to-b from-[#FFFFFF] to-[#F4F7FB]'
                    : isGate4
                    ? 'border-[#1D5382] shadow-md ring-2 ring-[#1D5382]/15 bg-gradient-to-b from-[#FFFFFF] to-[#F0F5FA]'
                    : isHovered
                    ? 'border-[#12324E] shadow-sm -translate-y-0.5'
                    : 'border-[#D8E2EC] hover:border-[#12324E]/50'
                }`}
              >
                {/* Milestone Ribbon for Key Gates */}
                {isGate4 && (
                  <div className="absolute top-0 right-0 bg-[#1D5382] text-white text-[9px] font-mono uppercase tracking-widest px-3 py-1 flex items-center gap-1.5 shadow-xs font-semibold">
                    <ShieldCheck className="w-3 h-3 text-[#38BDF8]" />
                    <span>Safeguard Milestone</span>
                  </div>
                )}
                {isGate7 && (
                  <div className="absolute top-0 right-0 bg-[#12324E] text-white text-[9px] font-mono uppercase tracking-widest px-3 py-1 flex items-center gap-1.5 shadow-xs font-semibold">
                    <KeyRound className="w-3 h-3 text-[#38BDF8]" />
                    <span>Complete Handover</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#4A607A] mb-3">
                    <span className="font-bold text-sm text-[#12324E]">
                      STAGE {step.step}
                    </span>
                    <span className="px-2 py-0.5 bg-[#F4F7FB] border border-[#D8E2EC] text-[10px] uppercase font-medium text-[#1D5382]">
                      {step.actor}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#12324E] font-medium leading-snug mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs font-mono text-[#1D5382] font-medium mb-3">
                    {step.summary}
                  </p>

                  <p className="text-xs text-[#364B62] leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#F4F7FB] flex items-center justify-between text-[10px] font-mono text-[#4A607A]">
                  <span>CONTRACTUAL PROTOCOL</span>
                  <span className="text-[#12324E] font-semibold">STEP {step.step} OF 07</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
