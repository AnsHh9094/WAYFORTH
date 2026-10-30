'use client';

import React from 'react';
import { BRAND_CONFIG } from '@/config/brand.config';
import { ArrowUpRight } from 'lucide-react';

interface ManifestoSectionProps {
  onRequestQuote?: () => void;
}

export function ManifestoSection({ onRequestQuote }: ManifestoSectionProps) {
  return (
    <section id="manifesto" className="relative bg-[#0C1220] text-[#F5F0E8] overflow-hidden">
      {/* Editorial Hairline Top Rule in Antique Brass */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#B8975A]/40" />

      {/* Subtle Architectural Blueprint Grid (Dark Navy Overlay) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 lg:grid-cols-12 border-x border-[#2A3548]">
          <div className="border-r border-[#2A3548] hidden lg:block col-span-2" />
          <div className="border-r border-[#2A3548] col-span-5" />
          <div className="border-r border-[#2A3548] hidden lg:block col-span-5" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-24 sm:py-32 lg:py-40">
        
        {/* Kicker — Small caps, tracked, institutional label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8975A] animate-pulse" />
          <p className="text-[#8A9BB0] text-[11px] font-mono tracking-[0.25em] uppercase font-medium">
            Foundational Manifesto // Why We Exist
          </p>
        </div>

        {/* The Core Thesis Pull Quote */}
        <blockquote className="space-y-6 max-w-4xl mb-12">
          <h2
            className="text-[#F5F0E8] font-rumelaz text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.2] tracking-[-0.01em]"
            style={{ fontFamily: "'RumelazGekinsa', Georgia, serif" }}
          >
            Your future is <span className="text-[#FFFFFF] font-normal underline decoration-[#B8975A]/60 decoration-1 underline-offset-8">bigger</span> than your next submission.
            The difference is not effort — it is{' '}
            <span
              className="italic font-rumelaz text-[#B8975A]"
              style={{ fontFamily: "'RumelazGekinsa', Georgia, serif" }}
            >
              reclaiming bandwidth for what truly matters.
            </span>
          </h2>
        </blockquote>

        {/* Typographic Divider — Editorial Hairline */}
        <div className="flex items-center gap-6 my-12">
          <div className="h-px bg-[#B8975A] w-16 flex-none" />
          <div className="h-px bg-[#2A3548] flex-1" />
          <span className="text-[10px] font-mono text-[#8A9BB0] tracking-widest uppercase flex-none">
            {BRAND_CONFIG.name} Advisory • Est. 2026
          </span>
        </div>

        {/* Two-Column Supporting Narrative (No generic card boxes) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 text-sm sm:text-base leading-[1.85] font-light text-[#8A9BB0]">
          <div className="lg:col-span-6 space-y-5">
            <p
              className="text-[#F5F0E8] font-rumelaz text-lg sm:text-xl font-normal leading-relaxed italic border-l-2 border-[#B8975A] pl-5"
              style={{ fontFamily: "'RumelazGekinsa', Georgia, serif" }}
            >
              &ldquo;{BRAND_CONFIG.manifestoLead}&rdquo;
            </p>
            <p
              className="font-rumelaz text-[#CBD8E6] text-base leading-relaxed tracking-normal font-normal"
              style={{ fontFamily: "'RumelazGekinsa', Georgia, serif" }}
            >
              When exhaustive documentation, data formatting, and formatting compliance consume your entire waking bandwidth, it is your off-campus internships, startup ventures, and career placements that suffer.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <p
              className="font-rumelaz text-[#CBD8E6] text-base leading-relaxed tracking-normal font-normal"
              style={{ fontFamily: "'RumelazGekinsa', Georgia, serif" }}
            >
              Wayforth was founded on the conviction that elite academic advisory should operate with the intellectual rigour of an independent research consultancy and the complete discretion of a private office.
            </p>
            <p
              className="font-rumelaz text-[#CBD8E6] text-base leading-relaxed tracking-normal font-normal"
              style={{ fontFamily: "'RumelazGekinsa', Georgia, serif" }}
            >
              We do not provide generic automated shortcuts. We construct rigorous, peer-reviewed methodological frameworks and custom empirical workbooks—empowering you to defend with total confidence.
            </p>
          </div>
        </div>

        {/* Broadsheet Ledger: The Four Guiding Commitments (Hairline divided, ZERO cards) */}
        <div className="pt-12 border-t border-[#2A3548]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10 pb-4 border-b border-[#2A3548]">
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-[#B8975A] font-medium">
              Operational Standards
            </p>
            <p className="text-xs font-mono text-[#8A9BB0]">
              Non-negotiable protocols governing every client commission
            </p>
          </div>

          <div className="divide-y divide-[#2A3548]">
            {BRAND_CONFIG.coreUSPs.map((usp, idx) => (
              <div
                key={usp.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 items-start group hover:bg-[#0F172A]/50 transition-colors px-2 -mx-2 rounded-[2px]"
              >
                {/* Ghost Ordinal + Title */}
                <div className="md:col-span-4 flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[#B8975A] font-bold tracking-widest flex-none">
                    [0{idx + 1}]
                  </span>
                  <div>
                    <h3
                      className="font-rumelaz text-xl sm:text-2xl text-[#F5F0E8] font-normal tracking-tight group-hover:text-white transition-colors"
                      style={{ fontFamily: "'RumelazGekinsa', Georgia, serif" }}
                    >
                      {usp.title}
                    </h3>
                    <span className="inline-block mt-1 text-[10px] font-mono uppercase tracking-wider text-[#B8975A]/90">
                      {usp.badge}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Lead */}
                <div className="md:col-span-3">
                  <p
                    className="font-rumelaz text-xs text-[#CBD8E6] font-medium leading-relaxed"
                    style={{ fontFamily: "'RumelazGekinsa', Georgia, serif" }}
                  >
                    {usp.lead}
                  </p>
                </div>

                {/* Detailed Description */}
                <div className="md:col-span-5">
                  <p
                    className="font-rumelaz text-xs sm:text-[13px] text-[#A2B4C7] leading-relaxed font-normal"
                    style={{ fontFamily: "'RumelazGekinsa', Georgia, serif" }}
                  >
                    {usp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Strip */}
          <div className="mt-14 pt-8 border-t border-[#2A3548] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-xs font-mono text-[#8A9BB0]">
              All engagements operate under strict academic discretion and NDAs.
            </p>
            {onRequestQuote && (
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#B8975A] text-[#0C1220] text-xs font-mono uppercase tracking-widest font-bold hover:bg-[#D4AF37] transition-all cursor-pointer rounded-xl shadow-sm"
              >
                <span>Calculate Engagement Fee</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#0C1220]" />
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Editorial Hairline Bottom Rule in Antique Brass */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#B8975A]/40" />
    </section>
  );
}
