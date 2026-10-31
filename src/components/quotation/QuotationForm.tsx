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
      className="py-20 sm:py-28 bg-[#0C1220] border-b border-[#2A3548] text-[#F5F0E8]"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Live Interactive Ledger Summary */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div>
              <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#B8975A] block mb-2 font-semibold">
                Mathematical Transparency
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F0E8] leading-tight mb-3">
                Live Quotation Calculator
              </h2>
              <p className="text-xs sm:text-sm text-[#CBD8E6] leading-relaxed">
                Configure your academic level, page volume, turnaround deadline, and custom design needs.
                Includes our <strong className="text-[#B8975A]">15% introductory discount</strong> automatically.
              </p>
            </div>

            {/* The Live Ledger Matrix Card */}
            <div className="bg-[#101A2B] border-2 border-[#2A3548] p-6 sm:p-7 space-y-4 shadow-xl relative rounded-2xl">
              <div className="flex items-center justify-between text-xs font-sans border-b border-[#2A3548] pb-3">
                <span className="flex items-center gap-1.5 text-[#F5F0E8] font-semibold tracking-wide">
                  <Calculator className="w-4 h-4 text-[#B8975A]" />
                  <span>TRANSPARENT LEDGER</span>
                </span>
                <span className="bg-[#B8975A] text-[#0C1220] px-3 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full">
                  {level.toUpperCase()}
                </span>
              </div>

              <div className="space-y-2.5 text-[13px] sm:text-[13.5px] font-sans">
                <div className="flex justify-between items-center text-[#8A9BB0]">
                  <span>Base Fee Floor:</span>
                  <span className="text-[#F5F0E8] font-semibold">₹{currentTier.startingBase.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-[#8A9BB0]">
                  <span>
                    Volume ({pages} Pages × ₹{currentTier.perPageRate}/pg):
                  </span>
                  <span className="text-[#F5F0E8] font-semibold">
                    ₹{(pages * currentTier.perPageRate).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#8A9BB0] text-[12px]">
                  <span>Standard Page Metric:</span>
                  <span>~{totalWords.toLocaleString()} Words (275 w/page)</span>
                </div>

                {/* Urgency Surcharge */}
                <div className="flex justify-between items-center text-[#8A9BB0] pt-1">
                  <span>Turnaround Urgency Fee:</span>
                  <span className={urgencyFee > 0 ? 'text-[#B8975A] font-semibold' : 'text-[#8A9BB0]'}>
                    {urgencyFee > 0 ? `+₹${urgencyFee.toLocaleString()} (${currentUrgency.multiplier}%)` : 'Standard (+₹0)'}
                  </span>
                </div>

                {/* Special Add-ons */}
                {addOnsTotal > 0 && (
                  <div className="flex justify-between items-center text-[#F5F0E8] pt-1">
                    <span>Custom Add-on Scope:</span>
                    <span className="font-semibold text-[#B8975A]">+₹{addOnsTotal.toLocaleString()}</span>
                  </div>
                )}

                {/* 15% Introductory Discount */}
                <div className="flex justify-between items-center text-[#F5F0E8] pt-2 border border-[#B8975A]/40 bg-[#16233B] p-2.5 rounded-xl">
                  <span className="flex items-center gap-1 font-semibold text-[#B8975A]">
                    <Sparkles className="w-3.5 h-3.5 text-[#B8975A]" />
                    <span>Introductory Discount:</span>
                  </span>
                  <span className="font-bold text-[#B8975A]">
                    -15% (-₹{discountAmount.toLocaleString()})
                  </span>
                </div>

                {/* Final Estimated Total */}
                <div className="flex justify-between items-baseline pt-3 border-t-2 border-[#2A3548]">
                  <div>
                    <span className="text-xs uppercase font-bold text-[#F5F0E8] block tracking-wide">
                      Estimated Net Total:
                    </span>
                    <span className="text-[11.5px] text-[#8A9BB0]">
                      Includes 1 comprehensive revision round
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#8A9BB0] line-through block font-normal">
                      ₹{grossTotal.toLocaleString()}
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#B8975A]">
                      ₹{finalTotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Pay-as-you-go Balanced Milestones Breakdown */}
              <div className="p-3.5 bg-[#0E1726] border border-[#2A3548] text-[12.5px] sm:text-[13px] font-sans text-[#CBD8E6] space-y-2 rounded-xl">
                <div className="flex items-center gap-1.5 font-bold text-[#B8975A] text-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B8975A]" />
                  <span>PAY-AS-YOU-GO MILESTONES (50 / 50)</span>
                </div>
                <div className="flex justify-between text-[#8A9BB0]">
                  <span>50% Advance to Begin:</span>
                  <span className="font-bold text-[#F5F0E8]">₹{Math.round(finalTotal / 2).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#8A9BB0]">
                  <span>50% Balance on Preview Approval:</span>
                  <span className="font-bold text-[#F5F0E8]">₹{Math.round(finalTotal / 2).toLocaleString()}</span>
                </div>
                <p className="text-[#8A9BB0] text-[12px] leading-relaxed pt-1.5 border-t border-[#2A3548]">
                  Pay 50% deposit to initiate research → review watermarked representative preview → 1 included revision round → release final balance.
                </p>
              </div>

              <p className="text-[11px] text-center font-sans text-[#8A9BB0]">
                Questions? Direct email: <strong className="text-[#CBD8E6]">{BRAND_CONFIG.contactEmail}</strong>
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Parameter Console & Intake Form */}
          <div className="lg:col-span-7 bg-[#101A2B] border border-[#2A3548] p-6 sm:p-10 shadow-xl rounded-2xl">
            {serverError && (
              <div className="mb-6 p-3 bg-red-950/40 border border-red-500/50 text-red-200 text-xs font-sans flex items-center gap-2 rounded-xl">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{serverError}</span>
              </div>
            )}

            {submitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-14 h-14 bg-[#16233B] border border-[#B8975A]/40 text-[#B8975A] flex items-center justify-center mx-auto rounded-full">
                  <CheckCircle className="w-8 h-8 text-[#B8975A]" />
                </div>
                <h3 className="font-serif text-3xl text-[#F5F0E8]">
                  Quotation Prepared for Dispatch
                </h3>
                <p className="text-sm text-[#CBD8E6] max-w-md mx-auto leading-relaxed font-sans">
                  Thank you, <strong>{name || 'Client'}</strong>. Your brief for <strong>{level}</strong> ({pages} pages, estimated total ₹{finalTotal.toLocaleString()}) has been verified and formatted for instant WhatsApp transmission to our chief advisory desk.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#B8975A] text-[#0C1220] text-xs font-sans uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#c9a767] transition-colors rounded-xl font-bold"
                  >
                    <MessageSquare className="w-4 h-4 text-[#0C1220]" />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3.5 border border-[#2A3548] text-[#CBD8E6] hover:border-[#B8975A] hover:text-[#FFFFFF] text-xs font-sans uppercase tracking-wider rounded-xl font-semibold cursor-pointer"
                  >
                    Adjust Parameters
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 1. Academic Level Selection */}
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-[#F5F0E8] mb-3 font-semibold">
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
                              ? 'border-[#B8975A] bg-[#16233B] shadow-md ring-1 ring-[#B8975A]'
                              : 'border-[#2A3548] bg-[#0E1726] hover:border-[#8A9BB0]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-serif text-sm font-semibold text-[#F5F0E8]">
                              {tier.level}
                            </span>
                            <span className="text-[11px] font-sans text-[#B8975A] font-bold">
                              ₹{tier.perPageRate}/pg
                            </span>
                          </div>
                          <span className="text-[11.5px] text-[#8A9BB0] block leading-tight font-sans">
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
                    <label htmlFor="page-volume-slider" className="text-xs font-sans uppercase tracking-wider text-[#F5F0E8] font-semibold">
                      2. Required Volume: <strong>{pages} Content Pages</strong>
                    </label>
                    <span className="text-xs font-sans text-[#B8975A] font-semibold">
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
                    className="w-full h-2 bg-[#2A3548] appearance-none cursor-pointer accent-[#B8975A] rounded-full"
                  />
                  <div className="flex justify-between text-[11px] font-sans text-[#8A9BB0] mt-1.5">
                    <span>3 pgs (Short Essay)</span>
                    <span>15–20 pgs (Standard Term Project)</span>
                    <span>80+ pgs (Dissertation)</span>
                  </div>
                </div>

                {/* 3. Turnaround Deadline & Variable Urgency Fees */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-sans uppercase tracking-wider text-[#F5F0E8] font-semibold">
                      3. Target Submission Deadline (Variable Urgency Rate) *
                    </label>
                    <span className="text-[11px] font-sans text-[#8A9BB0] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#B8975A]" />
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
                              ? 'border-[#B8975A] bg-[#B8975A] text-[#0C1220] shadow-md font-semibold'
                              : 'border-[#2A3548] bg-[#0E1726] text-[#CBD8E6] hover:border-[#8A9BB0]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-xs font-sans font-semibold">
                              {urg.label}
                            </span>
                            {urg.multiplier > 0 && (
                              <span
                                className={`text-[9.5px] font-sans font-semibold px-2 py-0.5 rounded-full ${
                                  isSelected
                                    ? 'bg-[#0C1220] text-[#B8975A]'
                                    : 'bg-[#16233B] text-[#B8975A] border border-[#B8975A]/30'
                                }`}
                              >
                                +{urg.multiplier}%
                              </span>
                            )}
                          </div>
                          <span
                            className={`text-[10.5px] block font-sans ${
                              isSelected ? 'text-[#0C1220]/80' : 'text-[#8A9BB0]'
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
                    <label className="text-xs font-sans uppercase tracking-wider text-[#F5F0E8] font-semibold flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#B8975A]" />
                      <span>4. Custom Scope Additions (Graphs, Instruments & Analysis)</span>
                    </label>
                    <span className="text-[11px] font-sans text-[#B8975A] font-medium">Select all that apply</span>
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
                              ? 'bg-[#16233B] border-[#B8975A] shadow-md'
                              : isCharts
                              ? 'bg-[#0E1726] border-[#3E4F69] hover:border-[#B8975A]'
                              : 'bg-[#0E1726] border-[#2A3548] hover:border-[#8A9BB0]'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-md border mt-0.5 flex items-center justify-center shrink-0 ${
                              isChecked
                                ? 'bg-[#B8975A] border-[#B8975A] text-[#0C1220]'
                                : 'border-[#4A607A] bg-[#101A2B]'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <div className="space-y-0.5 w-full">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-sans font-semibold text-[#F5F0E8]">
                                {addon.label}
                              </span>
                            </div>
                            <p className="text-[12.5px] sm:text-[13px] text-[#8A9BB0] leading-tight font-sans">
                              {addon.description}
                            </p>
                            {isCharts && (
                              <span className="inline-block mt-1 text-[9.5px] font-sans font-semibold text-[#B8975A] bg-[#16233B] px-2 py-0.5 border border-[#B8975A]/30 rounded-full">
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
                <div className="pt-2 border-t border-[#2A3548] space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="client-name" className="block text-xs font-sans uppercase tracking-wider text-[#F5F0E8] mb-1.5 font-semibold">
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
                        className="w-full px-4 py-2.5 bg-[#0E1726] border border-[#2A3548] text-xs font-sans text-[#F5F0E8] placeholder:text-[#4A607A] focus:border-[#B8975A] focus:outline-none rounded-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="client-contact" className="block text-xs font-sans uppercase tracking-wider text-[#F5F0E8] mb-1.5 font-semibold">
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
                        className="w-full px-4 py-2.5 bg-[#0E1726] border border-[#2A3548] text-xs font-sans text-[#F5F0E8] placeholder:text-[#4A607A] focus:border-[#B8975A] focus:outline-none rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="client-institution" className="block text-xs font-sans uppercase tracking-wider text-[#F5F0E8] mb-1.5 font-semibold">
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
                        className="w-full px-4 py-2.5 bg-[#0E1726] border border-[#2A3548] text-xs font-sans text-[#F5F0E8] placeholder:text-[#4A607A] focus:border-[#B8975A] focus:outline-none rounded-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="client-discipline" className="block text-xs font-sans uppercase tracking-wider text-[#F5F0E8] mb-1.5 font-semibold">
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
                        className="w-full px-4 py-2.5 bg-[#0E1726] border border-[#2A3548] text-xs font-sans text-[#F5F0E8] placeholder:text-[#4A607A] focus:border-[#B8975A] focus:outline-none rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="client-brief" className="block text-xs font-sans uppercase tracking-wider text-[#F5F0E8] mb-1.5 font-semibold">
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
                      className="w-full px-4 py-2.5 bg-[#0E1726] border border-[#2A3548] text-xs text-[#F5F0E8] placeholder:text-[#4A607A] focus:border-[#B8975A] focus:outline-none rounded-xl font-sans"
                    ></textarea>
                  </div>
                </div>

                {/* Single Consolidated Submission Button */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#B8975A] text-[#0C1220] hover:bg-[#c9a767] transition-colors text-xs font-sans uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50 font-bold rounded-xl"
                  >
                    <span>{isSubmitting ? 'Formatting Brief...' : 'Send Requirements & Lock Quote via WhatsApp'}</span>
                    <Send className="w-4 h-4 text-[#0C1220]" />
                  </button>

                  <p className="text-[12px] sm:text-[12.5px] text-center font-sans text-[#8A9BB0]">
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
