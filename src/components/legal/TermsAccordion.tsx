'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandName } from '@/config/brand.config';
import { Plus } from 'lucide-react';

interface TermsAccordionProps {
  brandName: BrandName;
}

const editorial = [0.16, 1, 0.3, 1] as const;

export function TermsAccordion({ brandName }: TermsAccordionProps) {
  const [openSection, setOpenSection] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenSection(openSection === idx ? null : idx);
  };

  const policies = [
    {
      title: 'Cancellation and Refund Policy',
      category: 'Contractual Policy',
      content: (
        <div className="space-y-4 text-xs text-[#364B62] leading-relaxed font-sans">
          <p>
            A customer may request cancellation by communicating the request in writing. The applicable refund depends on how much of the agreed project timeline has elapsed when the cancellation request is received, the work completed, and any reasonable costs incurred:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#FFFFFF] border border-[#D8E2EC]">
              <strong className="block text-[#12324E] font-medium font-sans mb-1">
                A. Cancellation Before &gt;50% of Timeline Has Elapsed
              </strong>
              <p>
                The customer will generally be eligible for a <strong>refund of 50% of the advance payment received</strong>. The remaining portion is retained to account for research hours, reserved time, and preliminary drafting.
              </p>
            </div>
            <div className="p-4 bg-[#FFFFFF] border border-[#D8E2EC]">
              <strong className="block text-[#12324E] font-medium font-sans mb-1">
                B. Cancellation After &gt;50% of Timeline Has Elapsed
              </strong>
              <p>
                The advance payment will generally be <strong>non-refundable</strong> due to reserved specialist researcher allocation and completed structural work.
              </p>
            </div>
          </div>
          <p className="text-[#4A607A]">
            *Timeline is calculated from the confirmed start date to the agreed delivery deadline as specified in your written quotation. Refunds apply to advance payments received, not the total project quote.
          </p>
        </div>
      ),
    },
    {
      title: 'Academic Outcomes & Institutional Compliance Disclaimer',
      category: 'Ethics & Integrity',
      content: (
        <div className="space-y-3 text-xs text-[#364B62] leading-relaxed font-sans">
          <p>
            <strong>{brandName}</strong> provides academic research support, literature reviews, editorial structuring, formatting guidance, and analytical data modeling.
          </p>
          <p>
            <strong>No Guarantee of Academic Grades:</strong> We explicitly do not guarantee academic grades, marks, examination awards, distinctions, or publication outcomes. University evaluation rests exclusively with faculty evaluators and examiners.
          </p>
          <p>
            <strong>Customer Compliance:</strong> Deliverables serve as comprehensive reference materials to assist students in mastering complex concepts while balancing demanding careers and internships. Clients are responsible for ensuring compliance with their institutional policies.
          </p>
        </div>
      ),
    },
    {
      title: '100% Genuine Human Authorship Standard',
      category: 'Authenticity Guarantee',
      content: (
        <div className="space-y-3 text-xs text-[#364B62] leading-relaxed font-sans">
          <p>
            All deliverables are researched and written by human domain specialists from scratch. We do not use robotic AI regurgitation that hallucinates citations or outputs generic filler.
          </p>
          <p>
            <strong>No Immunity from AI Detectors:</strong> Because third-party automated AI detectors produce high false-positive rates and cannot be legally guaranteed by any provider, our commitment is centered on verifiable, authentic scholarly inquiry and transparent referencing.
          </p>
        </div>
      ),
    },
    {
      title: 'Included Revision Scope (1 Revision Round Included)',
      category: 'Revision Terms',
      content: (
        <div className="space-y-3 text-xs text-[#364B62] leading-relaxed font-sans">
          <p>
            One comprehensive revision round is included within the agreed scope. To ensure timely delivery, feedback must be consolidated into a single response following receipt of the watermarked sample preview.
          </p>
          <p>
            Changes that alter the original brief, rubric, word count, or methodology after commencement are quoted separately.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="terms" className="py-20 sm:py-28 bg-[#F4F7FB] border-b border-[#D8E2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#D8E2EC] pb-4 mb-16 text-[11px] font-sans font-medium uppercase tracking-[0.16em] text-[#4A607A]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#12324E]" />
            <span className="uppercase tracking-widest text-[#12324E] font-semibold">
              INSTITUTIONAL GOVERNANCE // TERMS & REFUNDS
            </span>
          </div>
          <span className="text-[#1D5382] uppercase font-semibold">TRANSPARENT COVENANTS</span>
        </div>

        <div className="max-w-3xl mb-12">
          <span className="text-xs font-sans uppercase tracking-[0.14em] text-[#1D5382] block mb-2 font-semibold">
            Institutional Terms
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#12324E] leading-tight mb-4">
            Published policies. No ambiguous fine print.
          </h2>
          <p className="text-[#364B62] text-base leading-relaxed">
            Every engagement with {brandName} is conducted under documented terms governing human authorship, milestone reviews, and cancellation procedures.
          </p>
        </div>

        {/* Policies Accordion Stack */}
        <div className="space-y-3">
          {policies.map((policy, idx) => {
            const isOpen = openSection === idx;
            return (
              <div
                key={idx}
                className={`bg-[#FFFFFF] border transition-all duration-200 ${
                  isOpen ? 'border-[#12324E] shadow-xs' : 'border-[#D8E2EC] hover:border-[#B8C9D8]'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-xs text-[#1D5382] font-semibold">
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="text-[10.5px] font-sans uppercase tracking-[0.14em] text-[#4A607A] block font-semibold">
                        {policy.category}
                      </span>
                      <h3 className="font-serif text-lg text-[#12324E] font-medium">
                        {policy.title}
                      </h3>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: editorial }}
                    className="text-[#12324E] shrink-0"
                  >
                    <Plus className={`w-4 h-4 ${isOpen ? 'text-[#1D5382]' : 'text-[#4A607A]'}`} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: editorial }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-[#D8E2EC]">
                        {policy.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
