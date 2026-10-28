'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_CONFIG } from '@/config/brand.config';
import { Check, Info, Clock, ArrowRight, Sparkles } from 'lucide-react';

interface PricingMatrixProps {
  onRequestQuote: () => void;
}

const editorial = [0.16, 1, 0.3, 1] as const;

const cardReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: editorial, delay: i * 0.08 },
  }),
};

export function PricingMatrix({ onRequestQuote }: PricingMatrixProps) {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#F4F7FB] border-b border-[#D8E2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#D8E2EC] pb-4 mb-16 text-xs font-mono text-[#738A9E]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#12324E]" />
            <span className="uppercase tracking-widest text-[#12324E] font-semibold">
              PRICING & FEE STRUCTURE
            </span>
          </div>
          <span className="text-[#1D5382] uppercase font-semibold">
            PAY-AS-YOU-GO • 15% INTRODUCTORY DISCOUNT
          </span>
        </div>

        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1D5382] block mb-2 font-semibold">
            Transparent Pricing Schedule
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#12324E] leading-tight mb-4">
            Predictable calculations. Pay-as-you-go trust. Zero hidden costs.
          </h2>
          <p className="text-[#42586E] text-base leading-relaxed">
            Every engagement at {BRAND_CONFIG.name} is structured around a clear base floor and a transparent per-page rate. 
            All projects follow milestone reviews with 50% deposit to begin, ensuring you inspect quality before releasing final funds.
          </p>
        </div>

        {/* The Mathematical Formula Banner with Pay-As-You-Go Inset */}
        <div className="bg-[#FFFFFF] border border-[#12324E] p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#1D5382] font-bold block">
              The Fee Formula
            </span>
            <div className="font-serif text-lg sm:text-xl text-[#12324E] font-medium">
              Base Project Floor + Itemized Page Volume — 15% Introductory Discount
            </div>
            <p className="text-xs text-[#738A9E] font-sans">
              Confirmed in writing before initiation. One comprehensive revision round included with all orders.
            </p>
          </div>

          {/* Standard Page Metric Badge */}
          <div className="bg-[#F4F7FB] border border-[#D8E2EC] p-4 text-xs font-mono max-w-sm shrink-0">
            <div className="flex items-center gap-2 text-[#12324E] font-semibold mb-1">
              <Info className="w-4 h-4 text-[#1D5382]" />
              <span>Standard Academic Page:</span>
            </div>
            <p className="text-[#42586E] text-[11px] leading-relaxed">
              1 standard content page ≈ <strong>{BRAND_CONFIG.wordCountPerPage}</strong> (Double-spaced, standard 12pt typeface).
              Preliminary title pages and references itemized transparently.
            </p>
          </div>
        </div>

        {/* 4 Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {BRAND_CONFIG.pricingTiers.map((tier, idx) => {
            const isFeatured = idx === 1; // Tier 02 (Postgraduate / MBA)
            return (
              <motion.div
                key={idx}
                className={`bg-[#FFFFFF] p-6 flex flex-col justify-between transition-all relative ${
                  isFeatured
                    ? 'border-2 border-[#12324E] shadow-md'
                    : 'border border-[#D8E2EC] hover:border-[#12324E]'
                }`}
                variants={cardReveal}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-6 bg-[#12324E] text-white text-[9px] font-mono uppercase tracking-widest px-2.5 py-0.5 flex items-center gap-1 shadow-xs font-semibold">
                    <Sparkles className="w-2.5 h-2.5 text-[#38BDF8]" />
                    <span>Most Requested</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#738A9E] mb-3">
                    <span>CATEGORY {idx + 1}</span>
                    <span className="flex items-center gap-1 text-[#1D5382] font-medium">
                      <Clock className="w-3 h-3" />
                      {tier.turnaround}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#12324E] mb-1">
                    {tier.level}
                  </h3>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#1D5382] block mb-4 font-semibold">
                    {tier.label}
                  </span>

                  <p className="text-xs text-[#42586E] mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="border-t border-b border-[#F4F7FB] py-4 mb-6">
                    <div className="text-[11px] text-[#738A9E] font-mono">Standard Investment:</div>
                    <div className="font-mono text-base font-bold text-[#12324E]">
                      From ₹{tier.startingBase.toLocaleString()} base floor
                    </div>
                    <div className="text-[11px] font-mono text-[#1D5382] mt-0.5 font-semibold">
                      ₹{tier.perPageRate} per standard page
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#738A9E] block">
                      Deliverable Includes:
                    </span>
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#42586E]">
                        <Check className="w-3.5 h-3.5 text-[#1D5382] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onRequestQuote}
                  className={`group w-full py-3 text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isFeatured
                      ? 'bg-[#12324E] text-white hover:bg-[#1D5382]'
                      : 'bg-[#F4F7FB] text-[#12324E] hover:bg-[#12324E] hover:text-white border border-[#D8E2EC]'
                  }`}
                >
                  <span>Configure Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
