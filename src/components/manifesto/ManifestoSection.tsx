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

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 py-24 sm:py-32 lg:py-40">
        
        {/* Kicker — Small caps, tracked, institutional label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8975A] animate-pulse" />
          <p className="text-[#8A9BB0] text-[11.5px] font-sans tracking-[0.2em] uppercase font-medium">
            Foundational Manifesto // Why We Exist
          </p>
        </div>

        {/* The Core Thesis Pull Quote */}
        <blockquote className="space-y-6 max-w-5xl mb-12">
          <h2 className="text-[#F5F0E8] font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.18] tracking-[-0.01em]">
            Your future is <span className="text-[#FFFFFF] font-normal underline decoration-[#B8975A]/60 decoration-1 underline-offset-8">bigger</span> than your next submission.
            The difference is not effort — it is{' '}
            <span className="italic font-serif text-[#B8975A]">
              reclaiming bandwidth for what truly matters.
            </span>
          </h2>
        </blockquote>

        {/* Typographic Divider — Editorial Hairline */}
        <div className="flex items-center gap-6 my-12">
          <div className="h-px bg-[#B8975A] w-16 flex-none" />
          <div className="h-px bg-[#2A3548] flex-1" />
          <span className="text-[11px] font-sans font-medium text-[#8A9BB0] tracking-widest uppercase flex-none">
            {BRAND_CONFIG.name} Advisory • Est. 2026
          </span>
        </div>

        {/* Two-Column Supporting Narrative (No generic card boxes) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 text-sm sm:text-base leading-[1.85] text-[#8A9BB0]">
          <div className="lg:col-span-6 space-y-5">
            <p className="text-[#F5F0E8] font-serif text-lg sm:text-xl font-normal leading-relaxed italic border-l-2 border-[#B8975A] pl-5">
              &ldquo;We believe your life should be about more than keeping up with deadlines, submissions, and relentless academic cycles.&rdquo;
            </p>
            <p className="font-sans text-[#CBD8E6] text-sm sm:text-[15px] leading-relaxed font-normal">
              When exhaustive documentation, data formatting, and compliance consume your waking bandwidth, your internships, startup ventures, and career placements suffer.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <p className="font-sans text-[#CBD8E6] text-sm sm:text-[15px] leading-relaxed font-normal">
              Wayforth was founded on the conviction that elite advisory should operate with the intellectual rigor of an independent research consultancy and the discretion of a private office.
            </p>
            <p className="font-sans text-[#CBD8E6] text-sm sm:text-[15px] leading-relaxed font-normal">
              We do not provide generic shortcuts. We construct rigorous, peer-reviewed methodological frameworks and custom empirical workbooks, empowering you to defend with total confidence.
            </p>
          </div>
        </div>

        {/* Broadsheet Ledger: Operational Standards (Distinguishable, Natural Phrasing) */}
        <div className="pt-12 border-t border-[#2A3548]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10 pb-4 border-b border-[#2A3548]">
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#B8975A] font-semibold">
              Operational Standards
            </p>
            <p className="text-xs sm:text-[13px] font-sans text-[#8A9BB0]">
              Institutional commitments governing every client commission
            </p>
          </div>

          <div className="divide-y divide-[#2A3548]">
            {[
              {
                id: 'scope-specialization',
                title: 'Universal Scope & Level Specialization',
                badge: 'SINGLE POINT OF CONTACT',
                lead: 'Dedicated guidance spanning all academic faculties and educational tiers.',
                description:
                  'From undergraduate case analyses and lab reports to postgraduate financial modeling, legal monographs, and doctoral dissertations, we allocate specialist researchers matched strictly to your discipline and university rubric.',
              },
              {
                id: 'human-research',
                title: '100% Original Human Research & Zero Synthetic Filler',
                badge: 'AUTHENTIC AUTHORSHIP',
                lead: 'Critical analysis backed by legitimate, verifiable peer citations.',
                description:
                  'Every brief is researched and authored from scratch by domain scholars. We reject automated AI shortcuts that hallucinate citations or produce generic filler, delivering original, defensible scholarship.',
              },
              {
                id: 'scholastic-standing',
                title: 'Calibrated for Top-Tier Scholastic Standing',
                badge: 'FACULTY RUBRIC ALIGNMENT',
                lead: 'Methodological depth and rigorous formatting engineered for strict evaluation.',
                description:
                  'While final academic evaluations rest with university examiners, our work is built to meet the highest assessment criteria through coherent logical structure, accredited referencing, and defense-ready analysis.',
              },
              {
                id: 'milestone-model',
                title: 'Transparent Milestone Model & Preview Approval',
                badge: 'FINANCIAL SECURITY',
                lead: 'Inspect and approve deliverable quality before releasing final funds.',
                description:
                  'Structured with a 50% initial commitment to begin, followed by a milestone preview stage. Review draft quality and request your included revision round prior to completing final payment.',
              },
            ].map((usp, idx) => (
              <div
                key={usp.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 items-start group hover:bg-[#0F172A]/50 transition-colors px-2 -mx-2 rounded-[2px]"
              >
                {/* Ghost Ordinal + Title */}
                <div className="md:col-span-4 flex items-baseline gap-4">
                  <span className="font-sans text-xs text-[#B8975A] font-bold tracking-wider flex-none">
                    [0{idx + 1}]
                  </span>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F5F0E8] font-normal tracking-tight group-hover:text-white transition-colors">
                      {usp.title}
                    </h3>
                    <span className="inline-block mt-1 text-[10px] font-sans font-semibold uppercase tracking-wider text-[#B8975A]">
                      {usp.badge}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Lead */}
                <div className="md:col-span-3">
                  <p className="font-sans text-sm text-[#CBD8E6] font-medium leading-relaxed">
                    {usp.lead}
                  </p>
                </div>

                {/* Detailed Description */}
                <div className="md:col-span-5">
                  <p className="font-sans text-[13.5px] sm:text-sm text-[#8A9BB0] leading-relaxed font-normal">
                    {usp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Strip */}
          <div className="mt-14 pt-8 border-t border-[#2A3548] flex justify-end">
            {onRequestQuote && (
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#B8975A] text-[#0C1220] text-xs font-sans uppercase tracking-[0.14em] font-bold hover:bg-[#D4AF37] transition-all cursor-pointer rounded-xl shadow-sm"
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
