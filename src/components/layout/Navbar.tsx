'use client';

import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG } from '@/config/brand.config';
import { WayforthLogo } from '@/components/brand/WayforthLogo';
import { ArrowUpRight, Menu, X, Mail } from 'lucide-react';

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
          ? 'bg-[#0C1220]/95 backdrop-blur-md border-b border-[#2A3548] shadow-lg'
          : 'bg-[#0C1220] border-b border-[#2A3548]'
      }`}
    >
      {/* Main Masthead Navigation */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-22 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <a href="#" className="group">
            <WayforthLogo variant="compact" theme="light" sublineText="" />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-9 text-[13.5px] font-medium text-[#CBD8E6]">
          <a
            href="#manifesto"
            className="hover:text-[#FFFFFF] transition-colors hover:underline underline-offset-8 decoration-[#B8975A]"
          >
            Why We Exist
          </a>
          <a
            href="#disciplines"
            className="hover:text-[#FFFFFF] transition-colors hover:underline underline-offset-8 decoration-[#B8975A]"
          >
            Disciplines & Samples
          </a>
          <a
            href="#workflow"
            className="hover:text-[#FFFFFF] transition-colors hover:underline underline-offset-8 decoration-[#B8975A]"
          >
            Workflow
          </a>
          <a
            href="#contact"
            className="hover:text-[#FFFFFF] transition-colors hover:underline underline-offset-8 decoration-[#B8975A]"
          >
            Contact Us
          </a>
          <a
            href="/terms"
            className="hover:text-[#FFFFFF] transition-colors hover:underline underline-offset-8 decoration-[#B8975A]"
          >
            Terms & Refunds
          </a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onRequestQuote}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#B8975A] text-[#0C1220] text-xs font-sans uppercase tracking-[0.14em] font-bold border border-[#B8975A] hover:bg-[#c9a767] transition-all cursor-pointer shadow-xs active:translate-y-px rounded-lg"
          >
            <span>Get a Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#0C1220]" />
          </button>

          {/* Mobile menu hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#CBD8E6] hover:text-[#FFFFFF] hover:bg-[#16233B] transition-colors rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0C1220] border-b border-[#2A3548] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-[#CBD8E6]">
            <a
              href="#manifesto"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#2A3548] hover:text-[#FFFFFF]"
            >
              Why We Exist
            </a>
            <a
              href="#disciplines"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#2A3548] hover:text-[#FFFFFF]"
            >
              Disciplines & Samples
            </a>
            <a
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#2A3548] hover:text-[#FFFFFF]"
            >
              Workflow
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#2A3548] hover:text-[#FFFFFF]"
            >
              Contact Us
            </a>
            <a
              href="/terms"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#2A3548] hover:text-[#FFFFFF]"
            >
              Terms & Refunds
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onRequestQuote();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-3 bg-[#B8975A] text-[#0C1220] text-xs font-sans uppercase tracking-[0.14em] font-bold cursor-pointer rounded-lg hover:bg-[#c9a767] transition-colors"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
