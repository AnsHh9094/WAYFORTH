'use client';

import React from 'react';
import Link from 'next/link';
import { BRAND_CONFIG } from '@/config/brand.config';
import { WayforthLogo } from '@/components/brand/WayforthLogo';
import { ArrowUp, ShieldCheck, Mail, MessageSquare } from 'lucide-react';

interface FooterProps {
  onRequestQuote: () => void;
}

export function Footer({ onRequestQuote }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#12324E] text-[#F0F4F8] pt-16 pb-12 border-t border-[#12324E]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#224A70]">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <WayforthLogo variant="full" theme="light" />
            
            <p className="font-serif italic text-lg text-[#D0E2F2] max-w-sm">
              &ldquo;{BRAND_CONFIG.tagline}&rdquo;
            </p>
            
            <p className="text-xs text-[#CBD5E1] leading-relaxed max-w-md font-sans">
              Dedicated academic project, research, and report-writing advisory across undergraduate, postgraduate, and doctoral levels.
              100% genuine human research, mathematical pricing transparency, and milestone preview safeguards.
            </p>

            <div className="pt-2 flex flex-col space-y-1.5 text-xs font-mono text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                <a
                  href={`mailto:${BRAND_CONFIG.contactEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {BRAND_CONFIG.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#38BDF8]" />
                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsappRawNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BRAND_CONFIG.whatsappNumber} (Direct Advisory Desk)
                </a>
              </div>
            </div>
          </div>

          {/* Academic Scope Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#93C5FD] font-semibold">
              Active Scope
            </div>
            <ul className="space-y-2 text-xs text-[#E2ECF5]">
              <li>Undergraduate Project Reports & Capstones</li>
              <li>MBA Management & Strategic Case Studies</li>
              <li>Data Analysis, Excel & Financial Modeling</li>
              <li>Doctoral Thesis & Dissertation Chapters</li>
              <li>Systematic Literature Reviews & Methodologies</li>
              <li>Empirical Modeling & Analytical Appendices</li>
            </ul>
          </div>

          {/* Institutional Trust & Policies */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#93C5FD] font-semibold">
              Contractual Assurance
            </div>
            <div className="p-4 bg-[#0E253A] border border-[#224A70] text-xs text-[#CBD5E1] space-y-2 font-mono">
              <div className="flex items-center gap-2 text-[#FFFFFF]">
                <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Pay-As-You-Go Milestone Model</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Initial deposit to commence research → watermarked preview review → 1 included revision round → release balance. No big upfront fees, full trust.
              </p>
            </div>

            <button
              onClick={onRequestQuote}
              className="w-full py-3 bg-[#FFFFFF] text-[#12324E] text-xs font-mono uppercase tracking-widest hover:bg-[#E2ECF5] transition-colors cursor-pointer font-semibold shadow-xs"
            >
              Open Live Quote Calculator
            </button>
          </div>
        </div>

        {/* Legal Policies Quick Links in Smallest Letters */}
        <div className="py-6 border-b border-[#224A70] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#CBD5E1]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono">
            <Link href="/terms" className="hover:text-white underline underline-offset-2 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/terms#cancellation" className="hover:text-white underline underline-offset-2 transition-colors">
              Cancellation & Refund Policy
            </Link>
            <Link href="/terms#ethics" className="hover:text-white underline underline-offset-2 transition-colors">
              Academic Outcomes & Integrity Policy
            </Link>
            <Link href="/terms#human-content" className="hover:text-white underline underline-offset-2 transition-colors">
              Human-Written Standard
            </Link>
          </div>
          <span className="font-mono text-[10px] text-[#CBD5E1]">
            DOMAIN: {BRAND_CONFIG.domain.toUpperCase()}
          </span>
        </div>

        {/* Ethical Notice Disclaimer */}
        <div className="py-6 border-b border-[#224A70] text-[10.5px] text-[#CBD5E1] leading-relaxed font-sans">
          <strong className="text-[#FFFFFF] block mb-1 font-mono uppercase text-[10px]">
            Institutional Compliance & Academic Ethics Notice:
          </strong>
          {BRAND_CONFIG.name} provides research support, reference frameworks, editorial assistance, and quantitative models.
          We do not guarantee academic grades or examination outcomes. Deliverables are intended to serve as comprehensive reference materials
          to assist students in mastering complex requirements while managing demanding career schedules. Customers are responsible for verifying
          compliance with their institutional codes of conduct.
        </div>

        {/* Oversized Brand Watermark */}
        <div className="pt-8 sm:pt-12 overflow-hidden select-none pointer-events-none text-center border-b border-[#224A70]/50">
          <span className="font-serif text-[clamp(3.5rem,15vw,14rem)] font-light tracking-tighter text-[#FFFFFF]/[0.045] leading-none uppercase inline-block whitespace-nowrap">
            WAYFORTH
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#CBD5E1] gap-4">
          <div>
            © 2026 {BRAND_CONFIG.name} Advisory ({BRAND_CONFIG.domain}). All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
