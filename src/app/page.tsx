'use client';

import React from 'react';
import { BRAND_CONFIG } from '@/config/brand.config';
import { Navbar } from '@/components/layout/Navbar';
import { EditorialHero } from '@/components/hero/EditorialHero';
import { ManifestoSection } from '@/components/manifesto/ManifestoSection';
import { ServiceDossier } from '@/components/services/ServiceDossier';
import { StandardComparison } from '@/components/comparison/StandardComparison';
import { PricingMatrix } from '@/components/pricing/PricingMatrix';
import { TimelineSteps } from '@/components/workflow/TimelineSteps';
import { TermsAccordion } from '@/components/legal/TermsAccordion';
import { QuotationForm } from '@/components/quotation/QuotationForm';
import { Footer } from '@/components/layout/Footer';
import { ArchivalScrollDock } from '@/components/dock/ArchivalScrollDock';
import { PrecisionCursor } from '@/components/ui/PrecisionCursor';

export default function HomePage() {
  const brandName = BRAND_CONFIG.name;

  const handleScrollToQuote = () => {
    const el = document.getElementById('quote-console');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Editorial Precision Spring Cursor */}
      <PrecisionCursor />

      <main className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#12324E]">
        {/* Masthead Navigation */}
        <Navbar onRequestQuote={handleScrollToQuote} />

        {/* Hero Section */}
        <div id="hero">
          <EditorialHero
            brandName={brandName}
            onRequestQuote={handleScrollToQuote}
          />
        </div>

        {/* The Core Thesis: "Why We Exist", Foundational USPs & The 6 Pillars */}
        <div id="manifesto">
          <ManifestoSection onRequestQuote={handleScrollToQuote} />
        </div>

        {/* Target Segments, Disciplines & Integrated Live Exemplar Samples */}
        <div id="disciplines">
          <ServiceDossier onRequestQuote={handleScrollToQuote} />
        </div>

        {/* The Standard vs Competitors (Milestone Model & Academic Specialization) */}
        <div id="comparison">
          <StandardComparison brandName={brandName} />
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

        {/* Governance, Cancellation, Ethics & Disclaimers */}
        <div id="terms">
          <TermsAccordion brandName={brandName} />
        </div>

        {/* Print Editorial Footer */}
        <Footer onRequestQuote={handleScrollToQuote} />

        {/* Minimalist Floating Archival Scroll Dock */}
        <ArchivalScrollDock onRequestQuote={handleScrollToQuote} />
      </main>
    </>
  );
}
