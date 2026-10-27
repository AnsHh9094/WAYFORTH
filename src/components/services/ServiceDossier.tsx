'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_CONFIG, SampleSpecimen } from '@/config/brand.config';
import {
  Check,
  ArrowUpRight,
  Lock,
  BookOpen,
  BarChart3,
  GraduationCap,
  FileCheck,
  FileText,
  Eye,
  X,
  ShieldCheck,
  CheckCircle2,
  Clock,
} from 'lucide-react';

interface ServiceDossierProps {
  onRequestQuote: () => void;
}

const editorial = [0.16, 1, 0.3, 1] as const;

export function ServiceDossier({ onRequestQuote }: ServiceDossierProps) {
  const [activeTab, setActiveTab] = useState(BRAND_CONFIG.services[0].id);
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

  const currentService =
    BRAND_CONFIG.services.find((s) => s.id === activeTab) || BRAND_CONFIG.services[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'undergrad':
        return <GraduationCap className="w-4 h-4 text-[#1D5382]" />;
      case 'postgrad':
        return <BookOpen className="w-4 h-4 text-[#1D5382]" />;
      case 'research':
        return <FileCheck className="w-4 h-4 text-[#1D5382]" />;
      case 'quantitative':
        return <BarChart3 className="w-4 h-4 text-[#1D5382]" />;
      default:
        return <Lock className="w-4 h-4 text-[#1D5382]" />;
    }
  };

  return (
    <section id="disciplines" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#D8E2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#D8E2EC] pb-4 mb-12 text-xs font-mono text-[#738A9E]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#12324E]" />
            <span className="uppercase tracking-widest text-[#12324E] font-semibold">
              ACADEMIC DISCIPLINES & RESEARCH SCOPE
            </span>
          </div>
          <span className="text-[#1D5382] uppercase font-semibold">FOUR COMPREHENSIVE TIERS</span>
        </div>

        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1D5382] block mb-2 font-semibold">
            Academic Scope & Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#12324E] leading-tight mb-4">
            Specialized academic support with representative research portfolios.
          </h2>
          <p className="text-[#42586E] text-base leading-relaxed">
            Every academic level demands distinct analytical rigor, formatting styles, and citation standards.
            Explore each discipline below along with its representative project sample.
          </p>
        </div>

        {/* Tab Selector Matrix */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-[#D8E2EC] bg-[#F4F7FB] mb-8 shadow-2xs">
          {BRAND_CONFIG.services.map((service) => {
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`p-4 text-left border-r border-[#D8E2EC] last:border-r-0 transition-colors cursor-pointer relative ${
                  isActive
                    ? 'bg-[#FFFFFF] text-[#12324E] shadow-xs'
                    : 'text-[#42586E] hover:bg-[#EBF1F6]'
                }`}
              >
                {/* Active tab indicator bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#12324E]"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className="p-1.5 bg-[#F4F7FB] border border-[#D8E2EC]">
                    {getIcon(service.id)}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#1D5382] font-semibold">
                    {service.badge}
                  </span>
                </div>
                <div className="font-serif text-sm sm:text-base font-semibold leading-tight mb-1 text-[#12324E]">
                  {service.title}
                </div>
                <div className="text-[11px] font-mono text-[#738A9E] truncate">
                  {service.targetAudience}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Discipline Deep Dossier */}
        <div className="bg-[#FFFFFF] border border-[#D8E2EC] p-6 sm:p-10 shadow-xs mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: editorial }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Column: Scope Details & Deliverables */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#1D5382] block mb-2 font-semibold">
                      Target Audience: {currentService.targetAudience}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#12324E] leading-snug mb-3">
                      {currentService.title}
                    </h3>
                    <p className="text-sm text-[#42586E] leading-relaxed">
                      {currentService.description}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#12324E] block mb-3 font-semibold">
                      Core Academic Deliverables & Focus Areas:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentService.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 bg-[#F4F7FB] border border-[#D8E2EC] text-xs text-[#42586E]"
                        >
                          <Check className="w-3.5 h-3.5 text-[#1D5382] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={onRequestQuote}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#12324E] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#1D5382] transition-colors cursor-pointer"
                    >
                      <span>Calculate Quote for This Discipline</span>
                      <ArrowUpRight className="w-4 h-4 text-[#38BDF8]" />
                    </button>

                    {currentService.sample && (
                      <button
                        onClick={() => setSelectedSample(currentService.sample!)}
                        className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#F4F7FB] border border-[#D8E2EC] text-[#12324E] text-xs font-mono uppercase tracking-wider hover:border-[#12324E] transition-colors cursor-pointer"
                      >
                        <Eye className="w-4 h-4 text-[#1D5382]" />
                        <span>Examine Exemplar Sample</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Column: Integrated Live Sample Specimen Card */}
                {currentService.sample && (
                  <div className="lg:col-span-5 bg-[#F4F7FB] border border-[#D8E2EC] p-6 space-y-4 relative">
                    <div className="flex items-center justify-between text-[10px] font-mono border-b border-[#D8E2EC] pb-3">
                      <span className="text-[#1D5382] uppercase font-bold flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        <span>PORTFOLIO SPECIMEN</span>
                      </span>
                      <span className="text-[#738A9E]">{currentService.sample.pageCount} PAGES</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#738A9E] block mb-1">
                        {currentService.sample.category}
                      </span>
                      <h4 className="font-serif text-lg text-[#12324E] leading-snug font-medium mb-2">
                        {currentService.sample.title}
                      </h4>
                      <p className="text-xs text-[#42586E] leading-relaxed line-clamp-3">
                        {currentService.sample.executiveSummary}
                      </p>
                    </div>

                    <div className="bg-[#FFFFFF] border border-[#D8E2EC] p-3 text-xs font-mono space-y-1.5">
                      <div className="flex justify-between text-[#738A9E]">
                        <span>Standard Metric:</span>
                        <span className="text-[#12324E] font-semibold">{currentService.sample.institutionFormat}</span>
                      </div>
                      <div className="flex justify-between text-[#738A9E]">
                        <span>Volume Caliber:</span>
                        <span className="text-[#12324E] font-semibold">{currentService.sample.wordCount}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedSample(currentService.sample!)}
                      className="w-full py-2.5 bg-[#FFFFFF] border border-[#12324E] text-[#12324E] text-xs font-mono uppercase tracking-wider hover:bg-[#12324E] hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Representative Excerpts</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── COMING SOON: Class 10, 11 & 12 School Boards ── */}
        <div className="p-6 bg-[#F4F7FB] border border-[#D8E2EC] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#12324E] text-white text-[10px] font-mono uppercase tracking-wider font-semibold">
                <Clock className="w-3 h-3" />
                <span>COMING SOON</span>
              </span>
              <span className="text-xs font-mono text-[#1D5382] font-semibold">
                CBSE • CISCE (ICSE/ISC) • State Boards
              </span>
            </div>
            <h4 className="font-serif text-lg text-[#12324E] font-normal">
              Class 10, 11 & 12 Secondary School Project Advisory
            </h4>
            <p className="text-xs text-[#42586E] leading-relaxed max-w-2xl">
              Board-related practical files, subject-specific reports, and handwritten document structuring aligned with individual school guidelines will launch in an upcoming cohort.
            </p>
          </div>
          <span className="text-xs font-mono text-[#738A9E] shrink-0 border border-[#D8E2EC] bg-white px-3 py-1.5">
            Under Development
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
                className="bg-[#FFFFFF] border-2 border-[#12324E] max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10 select-none overscroll-contain"
              >
                {/* Modal Masthead */}
                <div className="flex items-center justify-between border-b border-[#D8E2EC] pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1D5382]" />
                    <span className="text-xs font-mono uppercase tracking-widest text-[#12324E] font-semibold">
                      WAYFORTH ARCHIVAL SPECIMEN // {selectedSample.category.toUpperCase()}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedSample(null)}
                    className="p-1.5 text-[#738A9E] hover:text-[#12324E] transition-colors cursor-pointer"
                    aria-label="Close sample preview"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Exemplar Academic Page Excerpt */}
                <div className="relative border border-[#D8E2EC] bg-[#F4F7FB] p-6 sm:p-8 space-y-6">
                  {/* Header Monospace */}
                  <div className="flex justify-between text-[11px] font-mono text-[#738A9E] border-b border-[#D8E2EC] pb-2">
                    <span>{selectedSample.institutionFormat}</span>
                    <span>{selectedSample.wordCount}</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl text-[#12161A] leading-snug mb-3">
                      {selectedSample.title}
                    </h3>
                    <p className="text-xs text-[#42586E] leading-relaxed italic bg-[#FFFFFF] p-3 border-l-2 border-[#12324E]">
                      <strong>Executive Abstract:</strong> {selectedSample.executiveSummary}
                    </p>
                  </div>

                  {/* Manuscript Excerpts */}
                  <div className="space-y-4">
                    {selectedSample.sampleExcerpts.map((excerpt, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <h4 className="font-mono text-xs text-[#1D5382] uppercase font-bold tracking-wider">
                          {excerpt.sectionHeading}
                        </h4>
                        <p className="text-xs text-[#42586E] leading-relaxed font-sans">
                          {excerpt.content}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Deliverable Scope */}
                  <div className="pt-4 border-t border-[#D8E2EC]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#738A9E] block mb-2">
                      Full Client Package Includes:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#12324E]">
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
                  <div className="flex items-center gap-2 text-xs font-mono text-[#738A9E]">
                    <ShieldCheck className="w-4 h-4 text-[#1D5382]" />
                    <span>Pay-as-you-go milestone model • 1 revision included</span>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedSample(null)}
                      className="px-4 py-2.5 text-xs font-mono border border-[#D8E2EC] text-[#42586E] hover:border-[#12324E] transition-colors cursor-pointer w-1/2 sm:w-auto"
                    >
                      Close Specimen
                    </button>
                    <button
                      onClick={() => {
                        setSelectedSample(null);
                        onRequestQuote();
                      }}
                      className="px-5 py-2.5 bg-[#12324E] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#1D5382] transition-colors cursor-pointer w-1/2 sm:w-auto flex items-center justify-center gap-1.5"
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
