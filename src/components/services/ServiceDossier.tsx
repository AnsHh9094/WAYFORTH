'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_CONFIG, SampleSpecimen } from '@/config/brand.config';
import {
  ArrowUpRight,
  Eye,
  X,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';

interface ServiceDossierProps {
  onRequestQuote: () => void;
}

const editorial = [0.16, 1, 0.3, 1] as const;

export function ServiceDossier({ onRequestQuote }: ServiceDossierProps) {
  const [selectedSample, setSelectedSample] = useState<SampleSpecimen | null>(null);

  // Lock background scroll and pause Lenis while modal is open
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (selectedSample) {
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedSample(null);
    };

    if (selectedSample) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedSample]);

  return (
    <section id="disciplines" className="py-24 sm:py-36 bg-[#FAFAF8] border-b border-[#E2DDD5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header — Broadsheet style */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-20 border-b border-[#E2DDD5] pb-8">
          <div>
            <p className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#1D5382] font-semibold mb-2">
              Academic Disciplines // Scope
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#12324E] tracking-tight">
              Four specialized tiers. One standard of scholarship.
            </h2>
          </div>
        </div>

        {/* The Broadsheet Docket List (divide-y replaces card borders completely) */}
        <div className="divide-y divide-[#E2DDD5]">
          {BRAND_CONFIG.services.map((service, idx) => (
            <div
              key={service.id}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 items-start transition-colors hover:bg-[#F3EFE6]/40 px-4 -mx-4 rounded-[2px]"
            >
              {/* LEFT COLUMN: Large Ghost Ordinal + Narrative Scope */}
              <div className="lg:col-span-8 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
                {/* Large Ghost Ordinal */}
                <span
                  className="font-serif text-[4rem] sm:text-[5rem] font-light text-[#D5CEBF] leading-none select-none flex-none w-16 sm:w-20 text-left sm:text-right"
                  aria-hidden="true"
                >
                  0{idx + 1}
                </span>

                <div className="pt-2 space-y-4">
                  <div>
                    <span className="text-[11px] font-sans tracking-[0.16em] uppercase text-[#1D5382] font-semibold block mb-1">
                      {service.badge} • {service.targetAudience}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#12324E] tracking-tight group-hover:text-[#1D5382] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-[#4A607A] text-[14.5px] sm:text-base leading-[1.85] font-light max-w-xl">
                    {service.description}
                  </p>

                  {/* Core Deliverable Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-[13px] sm:text-[13.5px] font-sans px-3.5 py-1 bg-[#FFFFFF] border border-[#E2DDD5] text-[#364B62] rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Deliverable Specimen & Actions */}
              <div className="lg:col-span-4 lg:text-right pt-2 pl-0 sm:pl-28 lg:pl-0 space-y-4">
                <div>
                  <p className="text-[10.5px] font-sans tracking-[0.16em] uppercase text-[#8A9BB0] font-semibold mb-1">
                    Representative Deliverable
                  </p>
                  {service.sample && (
                    <div className="space-y-1">
                      <p className="text-sm font-serif text-[#12324E] font-medium">
                        {service.sample.title}
                      </p>
                      <p className="text-xs font-sans text-[#738A9E]">
                        {service.sample.wordCount} • {service.sample.institutionFormat}
                      </p>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap lg:justify-end gap-3 pt-2">
                  {service.sample && (
                    <button
                      onClick={() => setSelectedSample(service.sample!)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FFFFFF] border border-[#12324E] text-[#12324E] text-xs font-sans uppercase tracking-[0.14em] hover:bg-[#12324E] hover:text-white transition-colors cursor-pointer rounded-xl font-semibold"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Specimen</span>
                    </button>
                  )}

                  <button
                    onClick={onRequestQuote}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#12324E] text-white text-xs font-sans uppercase tracking-[0.14em] hover:bg-[#1D5382] transition-colors cursor-pointer rounded-xl font-bold"
                  >
                    <span>Quote Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Secondary School Boards Notice ── */}
        <div className="mt-16 p-6 sm:p-8 bg-[#FFFFFF] border border-[#E2DDD5] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xs rounded-2xl">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#12324E] text-white text-[10.5px] font-sans uppercase tracking-wider font-semibold rounded-full">
                <Clock className="w-3 h-3" />
                <span>COMING SOON</span>
              </span>
              <span className="text-xs font-sans text-[#1D5382] font-semibold">
                CBSE • CISCE (ICSE/ISC) • State Boards
              </span>
            </div>
            <h4 className="font-serif text-lg text-[#12324E] font-normal">
              Class 10, 11 & 12 Secondary School Project Advisory
            </h4>
            <p className="text-[13px] text-[#4A607A] leading-relaxed max-w-2xl font-normal">
              Board-related practical files, subject-specific reports, and handwritten document structuring aligned with individual school guidelines will launch in an upcoming cohort.
            </p>
          </div>
          <span className="text-xs font-sans text-[#738A9E] shrink-0 border border-[#E2DDD5] bg-[#FAFAF8] px-3.5 py-1.5 font-medium rounded-full">
            Cohort Allocation Pending
          </span>
        </div>

        {/* ── Interactive Full Sample Reader Modal ── */}
        <AnimatePresence>
          {selectedSample && (
            <div
              data-lenis-prevent="true"
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedSample(null);
              }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#091624]/85 backdrop-blur-sm overscroll-contain"
            >
              <motion.div
                data-lenis-prevent="true"
                initial={{ opacity: 0, scale: 0.96, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 14 }}
                transition={{ duration: 0.28, ease: editorial }}
                className="bg-[#FFFFFF] border-2 border-[#12324E] max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10 select-none overscroll-contain rounded-2xl"
              >
                {/* Modal Masthead */}
                <div className="flex items-center justify-between border-b border-[#D8E2EC] pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1D5382]" />
                    <span className="text-xs font-sans uppercase tracking-[0.14em] text-[#12324E] font-semibold">
                      WAYFORTH ARCHIVAL SPECIMEN // {selectedSample.category.toUpperCase()}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedSample(null)}
                    className="p-1.5 text-[#4A607A] hover:text-[#12324E] transition-colors cursor-pointer rounded-full"
                    aria-label="Close sample preview"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Exemplar Academic Page Excerpt */}
                <div className="relative border border-[#D8E2EC] bg-[#FAFAF8] p-6 sm:p-8 space-y-6 rounded-xl">
                  {/* Header */}
                  <div className="flex justify-between text-[11px] font-sans text-[#4A607A] border-b border-[#D8E2EC] pb-2 font-medium">
                    <span>{selectedSample.institutionFormat}</span>
                    <span>{selectedSample.wordCount}</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl text-[#12161A] leading-snug mb-3 font-normal">
                      {selectedSample.title}
                    </h3>
                    <p className="text-[13px] text-[#364B62] leading-relaxed italic bg-[#FFFFFF] p-3 border-l-2 border-[#12324E] rounded-r-lg">
                      <strong>Executive Abstract:</strong> {selectedSample.executiveSummary}
                    </p>
                  </div>

                  {/* Manuscript Excerpts */}
                  <div className="space-y-4">
                    {selectedSample.sampleExcerpts.map((excerpt, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <h4 className="font-sans text-xs text-[#1D5382] uppercase font-bold tracking-wider">
                          {excerpt.sectionHeading}
                        </h4>
                        <p className="text-[13.5px] text-[#364B62] leading-relaxed font-sans font-normal">
                          {excerpt.content}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Deliverable Scope */}
                  <div className="pt-4 border-t border-[#D8E2EC]">
                    <span className="text-[10.5px] font-sans uppercase tracking-wider text-[#4A607A] block mb-2 font-semibold">
                      Full Client Package Includes:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-[#12324E]">
                      {selectedSample.deliverableIncludes.map((inc, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1D5382] shrink-0" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer CTAs */}
                <div className="mt-6 pt-4 border-t border-[#D8E2EC] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-sans text-[#4A607A]">
                    <ShieldCheck className="w-4 h-4 text-[#1D5382]" />
                    <span>Pay-as-you-go milestone model • 1 revision included</span>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedSample(null)}
                      className="px-4 py-2.5 text-xs font-sans border border-[#D8E2EC] text-[#364B62] hover:border-[#12324E] transition-colors cursor-pointer w-1/2 sm:w-auto rounded-xl"
                    >
                      Close Specimen
                    </button>
                    <button
                      onClick={() => {
                        setSelectedSample(null);
                        onRequestQuote();
                      }}
                      className="px-5 py-2.5 bg-[#12324E] text-white text-xs font-sans uppercase tracking-[0.14em] hover:bg-[#1D5382] transition-colors cursor-pointer w-1/2 sm:w-auto flex items-center justify-center gap-1.5 rounded-xl font-semibold"
                    >
                      <span>Inquire Now</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
