'use client';

import React from 'react';
import Link from 'next/link';
import { BRAND_CONFIG } from '@/config/brand.config';
import { WayforthLogo } from '@/components/brand/WayforthLogo';
import { ArrowUp, Mail, MessageSquare } from 'lucide-react';

interface FooterProps {
  onRequestQuote?: () => void;
}

export function Footer({ onRequestQuote }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#0C1220] text-[#CBD8E6] pt-14 pb-10 border-t border-[#2A3548]">
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#2A3548]">
          
          {/* Brand Column */}
          <div className="md:col-span-7 lg:col-span-8 space-y-4">
            <WayforthLogo variant="compact" theme="light" sublineText="" />
            
            <p className="font-serif italic text-base sm:text-lg text-[#F5F0E8] max-w-md">
              &ldquo;{BRAND_CONFIG.tagline}&rdquo;
            </p>
            
            <p className="text-[13.5px] sm:text-[14px] text-[#8A9BB0] leading-relaxed max-w-xl font-sans">
              Dedicated academic project, research, and report-writing advisory across undergraduate, postgraduate, and doctoral levels.
              100% genuine human research, mathematical pricing transparency, and milestone preview safeguards.
            </p>

            <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-[12.5px] font-sans text-[#CBD8E6]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B8975A]" />
                <a
                  href={`mailto:${BRAND_CONFIG.contactEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {BRAND_CONFIG.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#B8975A]" />
                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsappRawNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Direct Advisory Desk (WhatsApp)
                </a>
              </div>
            </div>
          </div>

          {/* Institutional Governance Links */}
          <div className="md:col-span-5 lg:col-span-4 space-y-3 md:pl-6">
            <div className="text-xs font-sans uppercase tracking-[0.14em] text-[#B8975A] font-semibold">
              Institutional Governance
            </div>
            <ul className="space-y-2.5 text-[12.5px] font-sans text-[#CBD8E6]">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#B8975A]">/</span> Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/terms#cancellation" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#B8975A]">/</span> Cancellation & Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/terms#ethics" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#B8975A]">/</span> Academic Outcomes & Integrity Policy
                </Link>
              </li>
              <li>
                <Link href="/terms#human-content" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#B8975A]">/</span> Human-Written Standard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Ethical Notice Disclaimer */}
        <div className="py-6 border-b border-[#2A3548] text-[12px] sm:text-[12.5px] text-[#8A9BB0] leading-relaxed font-sans">
          <strong className="text-[#FFFFFF] block mb-1 font-sans uppercase text-[10.5px] tracking-wider font-semibold">
            Institutional Compliance & Academic Ethics Notice:
          </strong>
          {BRAND_CONFIG.name} provides research support, reference frameworks, editorial assistance, and quantitative models.
          We do not guarantee academic grades or examination outcomes. Deliverables are intended to serve as comprehensive reference materials
          to assist students in mastering complex requirements while managing demanding career schedules. Customers are responsible for verifying
          compliance with their institutional codes of conduct.
        </div>

        {/* Oversized Subtle Brand Watermark */}
        <div className="pt-6 overflow-hidden select-none pointer-events-none text-center border-b border-[#2A3548]/50">
          <span className="font-serif text-[clamp(2.5rem,10vw,8rem)] font-light tracking-tighter text-[#FFFFFF]/[0.035] leading-none uppercase inline-block whitespace-nowrap">
            WAYFORTH
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[12px] font-sans text-[#8A9BB0] gap-4">
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
