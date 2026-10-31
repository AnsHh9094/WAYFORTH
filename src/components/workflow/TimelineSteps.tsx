'use client';

import React, { useState } from 'react';
import { BRAND_CONFIG } from '@/config/brand.config';
import { ShieldCheck, KeyRound } from 'lucide-react';
import { motion } from 'framer-motion';

export function TimelineSteps() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="workflow" className="py-20 sm:py-28 bg-[#0C1220] border-b border-[#2A3548] text-[#F5F0E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#2A3548] pb-4 mb-16 text-[11px] font-sans font-medium uppercase tracking-[0.16em] text-[#8A9BB0]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8975A]" />
            <span className="uppercase tracking-widest text-[#F5F0E8] font-semibold">
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
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F0E8] leading-tight mb-4">
            An unbroken workflow from initial brief to final delivery.
          </h2>
          <p className="text-[#CBD8E6] text-base leading-relaxed">
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
                className={`p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group rounded-2xl ${
                  isGate6
                    ? 'border border-[#B8975A] shadow-lg ring-1 ring-[#B8975A]/50 bg-gradient-to-b from-[#101A2B] to-[#16233B]'
                    : isGate4
                    ? 'border border-[#B8975A]/60 shadow-lg ring-1 ring-[#B8975A]/30 bg-gradient-to-b from-[#101A2B] to-[#142236]'
                    : isHovered
                    ? 'border border-[#B8975A] bg-[#101A2B] shadow-md -translate-y-0.5'
                    : 'border border-[#2A3548] bg-[#101A2B] hover:border-[#8A9BB0]'
                }`}
              >
                {/* Milestone Ribbon for Key Gates — Rounded-full Capsule */}
                {isGate4 && (
                  <div className="absolute top-4 right-4 bg-[#B8975A]/20 border border-[#B8975A]/40 text-[#B8975A] text-[10px] font-sans uppercase tracking-wider px-3 py-1 flex items-center gap-1.5 shadow-xs font-semibold rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B8975A]" />
                    <span>Safeguard Milestone</span>
                  </div>
                )}
                {isGate6 && (
                  <div className="absolute top-4 right-4 bg-[#B8975A] text-[#0C1220] text-[10px] font-sans uppercase tracking-wider px-3 py-1 flex items-center gap-1.5 shadow-xs font-bold rounded-full">
                    <KeyRound className="w-3.5 h-3.5 text-[#0C1220]" />
                    <span>Complete Handover</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between text-xs font-sans text-[#8A9BB0] mb-4">
                    <span className="font-bold text-sm font-sans text-[#F5F0E8] tracking-tight">
                      Stage {step.step}
                    </span>
                    <span className="px-2.5 py-0.5 bg-[#16233B] border border-[#2A3548] text-[10.5px] uppercase font-sans font-semibold text-[#B8975A] rounded-full">
                      {step.actor}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#F5F0E8] font-medium leading-snug mb-2">
                    {step.title}
                  </h3>

                  <p className="text-[14px] font-sans text-[#B8975A] font-semibold mb-3 leading-relaxed">
                    {step.summary}
                  </p>

                  <p className="text-[13.5px] sm:text-[14px] text-[#8A9BB0] leading-relaxed font-sans font-normal">
                    {step.detail}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#1C2C42] flex items-center justify-between text-[11px] font-sans text-[#8A9BB0]">
                  <span className="uppercase tracking-wider">Contractual Protocol</span>
                  <span className="text-[#CBD8E6] font-semibold">Step {step.step} of 06</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
