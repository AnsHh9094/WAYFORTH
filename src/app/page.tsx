'use client';

import React from 'react';
import { BRAND_CONFIG } from '@/config/brand.config';
import { SmoothScrollProvider } from '@/components/scroll/SmoothScrollProvider';
import { Navbar } from '@/components/layout/Navbar';
import { EditorialHero } from '@/components/hero/EditorialHero';
import { KineticStatsTicker } from '@/components/stats/KineticStatsTicker';
import { ManifestoSection } from '@/components/manifesto/ManifestoSection';
import { ServiceDossier } from '@/components/services/ServiceDossier';
import { PricingMatrix } from '@/components/pricing/PricingMatrix';
import { TimelineSteps } from '@/components/workflow/TimelineSteps';
import { QuotationForm } from '@/components/quotation/QuotationForm';
import { ContactSection } from '@/components/contact/ContactSection';
import { Footer } from '@/components/layout/Footer';
import { ArchivalScrollDock } from '@/components/dock/ArchivalScrollDock';
import { PrecisionCursor } from '@/components/ui/PrecisionCursor';

export default function HomePage() {
  const brandName = BRAND_CONFIG.name;

  const handleScrollToQuote = () => {
    const el = document.getElementById('quote-console');
    if (el) {
      // Use Lenis if available, or native smooth scroll fallback
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement, options: object) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -60, duration: 1.3 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <SmoothScrollProvider>
      {/* Editorial Precision Spring Cursor */}
      <PrecisionCursor />

      <main className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#12324E]">
        {/* Masthead Navigation */}
        <Navbar onRequestQuote={handleScrollToQuote} />

        {/* Hero Section: Deep Architectural Navy Stage with 3D Monolith */}
        <div id="hero">
          <EditorialHero
            brandName={brandName}
            onRequestQuote={handleScrollToQuote}
          />
        </div>

        {/* Kinetic Operational Metrics Counter Ticker */}
        <KineticStatsTicker />

        {/* The Core Thesis: "Why We Exist", Foundational USPs & The 6 Pillars */}
        <div id="manifesto">
          <ManifestoSection onRequestQuote={handleScrollToQuote} />
        </div>

        {/* Target Segments, Disciplines & Integrated Live Exemplar Samples */}
        <div id="disciplines">
          <ServiceDossier onRequestQuote={handleScrollToQuote} />
        </div>

        {/* Pricing Formula & Page Definition */}
        <div id="pricing">
          <PricingMatrix onRequestQuote={handleScrollToQuote} />
        </div>

        {/* 7-Step Contractual Workflow */}
        <div id="workflow">
          <TimelineSteps />
        </div>

        {/* Interactive Quotation Intake & Live Pricing Calculator Console */}
        <QuotationForm />

        {/* Dedicated Direct Advisory Desk & Contact Section */}
        <ContactSection />

        {/* Print Editorial Footer */}
        <Footer onRequestQuote={handleScrollToQuote} />

        {/* Minimalist Floating Archival Scroll Dock */}
        <ArchivalScrollDock onRequestQuote={handleScrollToQuote} />
      </main>
    </SmoothScrollProvider>
  );
}
