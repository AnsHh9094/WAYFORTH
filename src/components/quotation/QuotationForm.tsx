'use client';

import React, { useState, useMemo } from 'react';
import { BRAND_CONFIG } from '@/config/brand.config';
import {
  Send,
  CheckCircle,
  Calculator,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  Clock,
  Layers,
  Check,
  AlertCircle,
} from 'lucide-react';

export function QuotationForm() {
  const [level, setLevel] = useState('Undergraduate');
  const [pages, setPages] = useState<number>(12);
  const [urgencyId, setUrgencyId] = useState('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [discipline, setDiscipline] = useState('');
  const [institution, setInstitution] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [brief, setBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Selected level pricing parameters
  const currentTier = useMemo(() => {
    return (
      BRAND_CONFIG.pricingTiers.find((t) => t.level === level) ||
      BRAND_CONFIG.pricingTiers[0]
    );
  }, [level]);

  // Selected urgency tier
  const currentUrgency = useMemo(() => {
    return (
      BRAND_CONFIG.urgencyTiers.find((u) => u.id === urgencyId) ||
      BRAND_CONFIG.urgencyTiers[1]
    );
  }, [urgencyId]);

  // Pricing calculations
  const baseSubtotal = currentTier.startingBase + pages * currentTier.perPageRate;
  const urgencyFee = Math.round(baseSubtotal * (currentUrgency.multiplier / 100));

  const addOnsTotal = useMemo(() => {
    return selectedAddons.reduce((sum, addId) => {
      const addon = BRAND_CONFIG.customAddOns.find((a) => a.id === addId);
      return sum + (addon ? addon.price : 0);
    }, 0);
  }, [selectedAddons]);

  const grossTotal = baseSubtotal + urgencyFee + addOnsTotal;
  const discountAmount = Math.round(
    (grossTotal * BRAND_CONFIG.introductoryDiscountPercent) / 100
  );
  const finalTotal = grossTotal - discountAmount;
  const totalWords = pages * 275;

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Construct structured WhatsApp URL
  const whatsappUrl = useMemo(() => {
    const selectedAddonLabels = selectedAddons
      .map((id) => BRAND_CONFIG.customAddOns.find((a) => a.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const messageText = `*Wayforth Academic Advisory — Project Quotation Request*
----------------------------------------
*Client Name:* ${name || 'Prospective Scholar'}
*Institution:* ${institution || 'Unspecified'}
*Discipline / Area:* ${discipline || 'General Academic'}
*Academic Level:* ${level}
*Selected Volume:* ${pages} Pages (~${totalWords} Words at 275w/page)
*Delivery Target:* ${currentUrgency.label} (${currentUrgency.sublabel})
*Special Add-ons:* ${selectedAddonLabels || 'Standard Delivery Scope'}

*Financial Estimate:*
• Base + Page Rate: ₹${baseSubtotal.toLocaleString()}
${urgencyFee > 0 ? `• Urgency Surcharge (+${currentUrgency.multiplier}%): ₹${urgencyFee.toLocaleString()}\n` : ''}${addOnsTotal > 0 ? `• Special Add-ons: ₹${addOnsTotal.toLocaleString()}\n` : ''}• Introductory Discount (15%): -₹${discountAmount.toLocaleString()}
*Estimated Total:* ₹${finalTotal.toLocaleString()}
*Payment Terms:* Pay-As-You-Go Milestone Model (50% Deposit to Begin: ₹${Math.round(finalTotal / 2).toLocaleString()} • 50% Balance on Preview Approval: ₹${Math.round(finalTotal / 2).toLocaleString()})

*Project Brief & Rubric:*
${brief || 'Brief will be shared in discussion.'}
----------------------------------------
_Initiated via wayforth.in official quotation calculator_`;

    return `https://wa.me/${BRAND_CONFIG.whatsappRawNumber}?text=${encodeURIComponent(
      messageText
    )}`;
  }, [
    name,
    institution,
    discipline,
    level,
    pages,
    totalWords,
    currentUrgency,
    selectedAddons,
    baseSubtotal,
    urgencyFee,
    addOnsTotal,
    discountAmount,
    finalTotal,
    brief,
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setServerError(null);

    try {
      // 1. Server-side validation & rate-limiting check (/api/quote)
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          level,
          pages,
          urgencyId,
          selectedAddons,
          name,
          institution,
          discipline,
          brief,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || 'Unable to process quotation. Please try again.');
        setIsSubmitting(false);
        return;
      }

      setSubmitted(true);
      // Automatically launch WhatsApp with prepared requirements
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Graceful fallback to WhatsApp direct launch
      setSubmitted(true);
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="quote-console"
      className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#D8E2EC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Live Interactive Ledger Summary */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#1D5382] block mb-2 font-semibold">
                Mathematical Transparency
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#12324E] leading-tight mb-3">
                Live Quotation Calculator
              </h2>
              <p className="text-xs sm:text-sm text-[#42586E] leading-relaxed">
                Configure your academic level, page volume, turnaround deadline, and custom design needs.
                Includes our <strong>15% introductory discount</strong> automatically.
              </p>
            </div>

            {/* The Live Ledger Matrix Card */}
            <div className="bg-[#FFFFFF] border-2 border-[#12324E] p-6 sm:p-7 space-y-4 shadow-sm relative rounded-2xl">
              <div className="flex items-center justify-between text-xs font-mono border-b border-[#D8E2EC] pb-3">
                <span className="flex items-center gap-1.5 text-[#12324E] font-semibold">
                  <Calculator className="w-4 h-4 text-[#1D5382]" />
                  <span>TRANSPARENT LEDGER</span>
                </span>
                <span className="bg-[#12324E] text-white px-3 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full">
                  {level.toUpperCase()}
                </span>
              </div>

              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex justify-between items-center text-[#42586E]">
                  <span>Base Fee Floor:</span>
                  <span className="text-[#12324E] font-medium">₹{currentTier.startingBase.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-[#42586E]">
                  <span>
                    Volume ({pages} Pages × ₹{currentTier.perPageRate}/pg):
                  </span>
                  <span className="text-[#12324E] font-medium">
                    ₹{(pages * currentTier.perPageRate).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#738A9E] text-[11px]">
                  <span>Standard Page Metric:</span>
                  <span>~{totalWords.toLocaleString()} Words (275 w/page)</span>
                </div>

                {/* Urgency Surcharge */}
                <div className="flex justify-between items-center text-[#42586E] pt-1">
                  <span>Turnaround Urgency Fee:</span>
                  <span className={urgencyFee > 0 ? 'text-[#1D5382] font-semibold' : 'text-[#738A9E]'}>
                    {urgencyFee > 0 ? `+₹${urgencyFee.toLocaleString()} (${currentUrgency.multiplier}%)` : 'Standard (+₹0)'}
                  </span>
                </div>

                {/* Special Add-ons */}
                {addOnsTotal > 0 && (
                  <div className="flex justify-between items-center text-[#12324E] pt-1">
                    <span>Custom Add-on Scope:</span>
                    <span className="font-semibold text-[#1D5382]">+₹{addOnsTotal.toLocaleString()}</span>
                  </div>
                )}

                {/* 15% Introductory Discount */}
                <div className="flex justify-between items-center text-[#12324E] pt-2 border-t border-[#F4F7FB] bg-[#F0F5FA] p-2.5 rounded-xl">
                  <span className="flex items-center gap-1 font-semibold text-[#1D5382]">
                    <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Introductory Discount:</span>
                  </span>
                  <span className="font-bold text-[#1D5382]">
                    -15% (-₹{discountAmount.toLocaleString()})
                  </span>
                </div>

                {/* Final Estimated Total */}
                <div className="flex justify-between items-baseline pt-3 border-t-2 border-[#12324E]">
                  <div>
                    <span className="text-xs uppercase font-bold text-[#12324E] block">
                      Estimated Net Total:
                    </span>
                    <span className="text-[10px] text-[#738A9E]">
                      Includes 1 comprehensive revision round
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#738A9E] line-through block font-normal">
                      ₹{grossTotal.toLocaleString()}
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#12324E]">
                      ₹{finalTotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Pay-as-you-go Balanced Milestones Breakdown */}
              <div className="p-3.5 bg-[#F4F7FB] border border-[#D8E2EC] text-[11px] font-mono text-[#12324E] space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-[#1D5382]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1D5382]" />
                  <span>PAY-AS-YOU-GO MILESTONES (50 / 50)</span>
                </div>
                <div className="flex justify-between text-[#42586E]">
                  <span>50% Advance to Begin:</span>
                  <span className="font-bold text-[#12324E]">₹{Math.round(finalTotal / 2).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#42586E]">
                  <span>50% Balance on Preview Approval:</span>
                  <span className="font-bold text-[#12324E]">₹{Math.round(finalTotal / 2).toLocaleString()}</span>
                </div>
                <p className="text-[#4A607A] text-[10px] leading-relaxed pt-1.5 border-t border-[#D8E2EC]">
                  Pay 50% deposit to initiate research → review watermarked representative preview → 1 included revision round → release final balance.
                </p>
              </div>

              <p className="text-[10px] text-center font-mono text-[#738A9E]">
                Questions? Direct email: <strong>{BRAND_CONFIG.contactEmail}</strong>
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Parameter Console & Intake Form */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#D8E2EC] p-6 sm:p-10 shadow-xs rounded-2xl">
            {serverError && (
              <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-800 text-xs font-mono flex items-center gap-2 rounded-xl">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{serverError}</span>
              </div>
            )}

            {submitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-14 h-14 bg-[#F0F5FA] border border-[#D8E2EC] text-[#1D5382] flex items-center justify-center mx-auto rounded-full">
                  <CheckCircle className="w-8 h-8 text-[#1D5382]" />
                </div>
                <h3 className="font-serif text-3xl text-[#12324E]">
                  Quotation Prepared for Dispatch
                </h3>
                <p className="text-sm text-[#42586E] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{name || 'Client'}</strong>. Your brief for <strong>{level}</strong> ({pages} pages, estimated total ₹{finalTotal.toLocaleString()}) has been verified and formatted for instant WhatsApp transmission to our chief advisory desk.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-[#12324E] text-white text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1D5382] transition-colors rounded-xl font-bold"
                  >
                    <MessageSquare className="w-4 h-4 text-[#38BDF8]" />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 border border-[#D8E2EC] text-[#12324E] text-xs font-mono uppercase tracking-wider hover:border-[#12324E] rounded-xl"
                  >
                    Adjust Parameters
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 1. Academic Level Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#12324E] mb-3 font-semibold">
                    1. Select Academic Category *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {BRAND_CONFIG.pricingTiers.map((tier) => {
                      const isSelected = level === tier.level;
                      return (
                        <button
                          key={tier.level}
                          type="button"
                          onClick={() => setLevel(tier.level)}
                          className={`p-4 text-left border transition-all cursor-pointer rounded-xl ${
                            isSelected
                              ? 'border-[#12324E] bg-[#F4F7FB] shadow-2xs ring-1 ring-[#12324E]'
                              : 'border-[#D8E2EC] bg-[#FFFFFF] hover:border-[#12324E]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-serif text-sm font-semibold text-[#12324E]">
                              {tier.level}
                            </span>
                            <span className="text-[10px] font-mono text-[#1D5382] font-bold">
                              ₹{tier.perPageRate}/pg
                            </span>
                          </div>
                          <span className="text-[11px] text-[#4A607A] block leading-tight font-sans">
                            {tier.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Page Volume Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="page-volume-slider" className="text-xs font-mono uppercase tracking-wider text-[#12324E] font-semibold">
                      2. Required Volume: <strong>{pages} Content Pages</strong>
                    </label>
                    <span className="text-xs font-mono text-[#1D5382] font-semibold">
                      (~{totalWords.toLocaleString()} Words at 275w/pg)
                    </span>
                  </div>
                  <input
                    id="page-volume-slider"
                    name="pages"
                    aria-label="Required Content Pages Slider"
                    type="range"
                    min="3"
                    max="80"
                    value={pages}
                    onChange={(e) => setPages(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#D8E2EC] appearance-none cursor-pointer accent-[#12324E] rounded-full"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-[#4A607A] mt-1.5">
                    <span>3 pgs (Short Essay)</span>
                    <span>15–20 pgs (Standard Term Project)</span>
                    <span>80+ pgs (Dissertation)</span>
                  </div>
                </div>

                {/* 3. Turnaround Deadline & Variable Urgency Fees */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#12324E] font-semibold">
                      3. Target Submission Deadline (Variable Urgency Rate) *
                    </label>
                    <span className="text-[10px] font-mono text-[#4A607A] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#1D5382]" />
                      <span>Confirms specialist sprint allocation</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {BRAND_CONFIG.urgencyTiers.map((urg) => {
                      const isSelected = urgencyId === urg.id;
                      return (
                        <button
                          key={urg.id}
                          type="button"
                          onClick={() => setUrgencyId(urg.id)}
                          className={`p-3 text-left border transition-all cursor-pointer rounded-xl ${
                            isSelected
                              ? 'border-[#12324E] bg-[#12324E] text-white shadow-xs'
                              : 'border-[#D8E2EC] bg-[#FFFFFF] text-[#42586E] hover:border-[#12324E]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-xs font-mono font-semibold">
                              {urg.label}
                            </span>
                            {urg.multiplier > 0 && (
                              <span
                                className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${
                                  isSelected
                                    ? 'bg-white text-[#12324E]'
                                    : 'bg-[#EBF3FB] text-[#1D5382] border border-[#C5DCF0]'
                                }`}
                              >
                                +{urg.multiplier}%
                              </span>
                            )}
                          </div>
                          <span
                            className={`text-[10px] block font-sans ${
                              isSelected ? 'text-white/80' : 'text-[#4A607A]'
                            }`}
                          >
                            {urg.sublabel}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Special Custom Requirements Checkboxes */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#12324E] font-semibold flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#1D5382]" />
                      <span>4. Custom Scope Additions (Graphs, Instruments & Analysis)</span>
                    </label>
                    <span className="text-[10px] font-mono text-[#1D5382]">Select all that apply</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {BRAND_CONFIG.customAddOns.map((addon) => {
                      const isChecked = selectedAddons.includes(addon.id);
                      const isCharts = addon.id === 'charts';
                      return (
                        <div
                          key={addon.id}
                          onClick={() => toggleAddon(addon.id)}
                          className={`p-3.5 border flex items-start gap-3 transition-colors cursor-pointer rounded-xl ${
                            isChecked
                              ? 'bg-[#F0F5FA] border-[#12324E] shadow-2xs'
                              : isCharts
                              ? 'bg-[#FAFCFF] border-[#B8C9D8] hover:border-[#12324E]'
                              : 'bg-[#FFFFFF] border-[#D8E2EC] hover:border-[#B8C9D8]'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-md border mt-0.5 flex items-center justify-center shrink-0 ${
                              isChecked
                                ? 'bg-[#12324E] border-[#12324E] text-white'
                                : 'border-[#94A3B8] bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                          <div className="space-y-0.5 w-full">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-mono font-semibold text-[#12324E]">
                                {addon.label}
                              </span>
                              <span className="text-[10px] font-mono text-[#1D5382] font-bold shrink-0">
                                +₹{addon.price}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#4A607A] leading-tight font-sans">
                              {addon.description}
                            </p>
                            {isCharts && (
                              <span className="inline-block mt-1 text-[9px] font-mono text-[#1D5382] bg-[#EBF3FB] px-2 py-0.5 border border-[#C5DCF0] rounded-full">
                                Custom data graphs & visual models
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 5. Contact & Institutional Details */}
                <div className="pt-2 border-t border-[#D8E2EC] space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="client-name" className="block text-xs font-mono uppercase tracking-wider text-[#12324E] mb-1.5 font-semibold">
                        Your Full Name *
                      </label>
                      <input
                        id="client-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Aryan Sharma"
                        className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#D8E2EC] text-xs text-[#12324E] focus:border-[#12324E] focus:outline-none rounded-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="client-contact" className="block text-xs font-mono uppercase tracking-wider text-[#12324E] mb-1.5 font-semibold">
                        WhatsApp Contact / Email *
                      </label>
                      <input
                        id="client-contact"
                        name="contact"
                        type="text"
                        autoComplete="tel"
                        required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="+91 ... / student@university.edu"
                        className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#D8E2EC] text-xs text-[#12324E] focus:border-[#12324E] focus:outline-none rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="client-institution" className="block text-xs font-mono uppercase tracking-wider text-[#12324E] mb-1.5 font-semibold">
                        University / College / Board *
                      </label>
                      <input
                        id="client-institution"
                        name="institution"
                        type="text"
                        autoComplete="organization"
                        required
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        placeholder="e.g. Delhi University / NMIMS / IIM"
                        className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#D8E2EC] text-xs text-[#12324E] focus:border-[#12324E] focus:outline-none rounded-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="client-discipline" className="block text-xs font-mono uppercase tracking-wider text-[#12324E] mb-1.5 font-semibold">
                        Subject / Discipline Area *
                      </label>
                      <input
                        id="client-discipline"
                        name="discipline"
                        type="text"
                        autoComplete="off"
                        required
                        value={discipline}
                        onChange={(e) => setDiscipline(e.target.value)}
                        placeholder="e.g. Corporate Finance / Supply Chain"
                        className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#D8E2EC] text-xs text-[#12324E] focus:border-[#12324E] focus:outline-none rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="client-brief" className="block text-xs font-mono uppercase tracking-wider text-[#12324E] mb-1.5 font-semibold">
                      Project Topic, Rubric & Faculty Instructions *
                    </label>
                    <textarea
                      id="client-brief"
                      name="brief"
                      rows={3}
                      required
                      value={brief}
                      onChange={(e) => setBrief(e.target.value)}
                      placeholder="Outline your project title, referencing style (APA, Harvard, etc.), faculty guidelines, or paste rubric requirements..."
                      className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#D8E2EC] text-xs text-[#12324E] focus:border-[#12324E] focus:outline-none rounded-xl font-sans"
                    ></textarea>
                  </div>
                </div>

                {/* Single Consolidated Submission Button */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#12324E] text-white hover:bg-[#1D5382] transition-colors text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50 font-bold rounded-xl"
                  >
                    <span>{isSubmitting ? 'Formatting Brief...' : 'Send Requirements & Lock Quote via WhatsApp'}</span>
                    <Send className="w-4 h-4 text-[#38BDF8]" />
                  </button>

                  <p className="text-[10px] text-center font-mono text-[#4A607A]">
                    Submitting automatically prepares your quotation brief and transmits it directly to our advisory WhatsApp. Pay-as-you-go milestone model (50% deposit to begin).
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
