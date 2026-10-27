'use client';

import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG } from '@/config/brand.config';
import { WayforthLogo } from '@/components/brand/WayforthLogo';
import { ArrowUpRight, ShieldCheck, Menu, X, Mail } from 'lucide-react';

interface NavbarProps {
  onRequestQuote: () => void;
}

export function Navbar({ onRequestQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#D8E2EC] shadow-xs'
          : 'bg-[#FFFFFF] border-b border-[#D8E2EC]/80'
      }`}
    >
      {/* Top Folio Banner Notice - Deep Academic Navy */}
      <div className="bg-[#12324E] text-[#F0F4F8] px-4 py-1.5 text-[11px] font-mono tracking-wide flex items-center justify-between border-b border-[#12324E]">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse"></span>
            <span>100% HUMAN-RESEARCHED DELIVERABLES • ZERO PLAGIARISM • PAY-AS-YOU-GO MODEL</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px] text-[#A6C0D7]">
            <a
              href={`mailto:${BRAND_CONFIG.contactEmail}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3 h-3 text-[#38BDF8]" />
              <span>{BRAND_CONFIG.contactEmail}</span>
            </a>
            <span>•</span>
            <span className="text-[#38BDF8] font-semibold">15% INAUGURAL GOODWILL DISCOUNT</span>
          </div>
        </div>
      </div>

      {/* Main Masthead Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Editorial Subline */}
        <div className="flex items-center gap-4">
          <a href="#" className="group">
            <WayforthLogo variant="full" theme="dark" />
          </a>
          <span className="hidden md:inline-block h-6 w-px bg-[#D8E2EC]"></span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-[10px] font-mono text-[#42586E] bg-[#F4F7FB] px-2.5 py-1 border border-[#D8E2EC]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1D5382]" />
            WAYFORTH.IN // OFFICIAL ADVISORY
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-[#42586E]">
          <a
            href="#manifesto"
            className="hover:text-[#12324E] transition-colors hover:underline underline-offset-8 decoration-[#12324E]"
          >
            Why We Exist
          </a>
          <a
            href="#disciplines"
            className="hover:text-[#12324E] transition-colors hover:underline underline-offset-8 decoration-[#12324E]"
          >
            Disciplines & Samples
          </a>
          <a
            href="#pricing"
            className="hover:text-[#12324E] transition-colors hover:underline underline-offset-8 decoration-[#12324E]"
          >
            Pricing Architecture
          </a>
          <a
            href="#workflow"
            className="hover:text-[#12324E] transition-colors hover:underline underline-offset-8 decoration-[#12324E]"
          >
            7-Step Process
          </a>
          <a
            href="/terms"
            className="hover:text-[#12324E] transition-colors hover:underline underline-offset-8 decoration-[#12324E] text-xs font-mono"
          >
            Terms & Refunds
          </a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onRequestQuote}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#12324E] text-[#FFFFFF] text-xs font-mono uppercase tracking-wider border border-[#12324E] hover:bg-[#1D5382] hover:border-[#1D5382] transition-all cursor-pointer shadow-xs active:translate-y-px"
          >
            <span>Get a Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#38BDF8]" />
          </button>

          {/* Mobile menu hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#12324E] hover:bg-[#F4F7FB] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#D8E2EC] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-[#12324E]">
            <a
              href="#manifesto"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#D8E2EC]"
            >
              Why We Exist
            </a>
            <a
              href="#disciplines"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#D8E2EC]"
            >
              Disciplines & Samples
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#D8E2EC]"
            >
              Pricing Architecture
            </a>
            <a
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#D8E2EC]"
            >
              7-Step Process
            </a>
            <a
              href="/terms"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#D8E2EC] text-xs font-mono"
            >
              Terms, Policies & Refunds
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onRequestQuote();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-3 bg-[#12324E] text-white text-xs font-mono uppercase tracking-widest cursor-pointer"
            >
              Open Live Pricing Calculator
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
