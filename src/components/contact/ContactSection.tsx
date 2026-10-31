'use client';

import React from 'react';
import { BRAND_CONFIG } from '@/config/brand.config';
import { Mail, MessageSquare, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0C1220] border-b border-[#2A3548] text-[#F5F0E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-sans uppercase tracking-[0.14em] text-[#B8975A] block mb-2 font-semibold">
            Direct Communications Desk
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F0E8] leading-tight mb-4">
            Connect directly with an academic advisor.
          </h2>
          <p className="text-[#CBD8E6] text-base leading-relaxed">
            Have questions regarding your institutional rubric, custom datasets, or delivery timeline? 
            Reach out through our direct advisory channels. All project briefs receive confidential evaluation.
          </p>
        </div>

        {/* 3 Contact Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: WhatsApp Advisory */}
          <div className="bg-[#101A2B] border border-[#2A3548] p-8 flex flex-col justify-between shadow-xl hover:border-[#B8975A]/60 transition-all rounded-2xl">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#16233B] border border-[#2A3548] flex items-center justify-center text-[#B8975A] mb-5">
                <MessageSquare className="w-5 h-5 text-[#B8975A]" />
              </div>
              <span className="text-[11px] font-sans uppercase tracking-[0.14em] text-[#B8975A] block mb-1 font-semibold">
                Instant Advisory Desk
              </span>
              <h3 className="font-serif text-xl text-[#F5F0E8] font-medium mb-2">
                Direct WhatsApp Channel
              </h3>
              <p className="text-[13.5px] text-[#8A9BB0] leading-relaxed mb-6 font-sans">
                Connect directly for swift project scoping, rubric clarification, and milestone progress updates.
              </p>
            </div>

            <div>
              <div className="text-xs font-sans font-semibold text-[#CBD8E6] mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8975A] animate-pulse" />
                <span>Encrypted Advisory Line</span>
              </div>
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappRawNumber}?text=${encodeURIComponent(
                  'Hello Wayforth Advisory, I would like to inquire about academic project support.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#B8975A] text-[#0C1220] text-xs font-sans uppercase tracking-[0.14em] hover:bg-[#c9a767] transition-colors rounded-xl font-bold border border-[#B8975A]"
              >
                <span>Message on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#0C1220]" />
              </a>
            </div>
          </div>

          {/* Card 2: Formal Email Desk */}
          <div className="bg-[#101A2B] border border-[#2A3548] p-8 flex flex-col justify-between shadow-xl hover:border-[#B8975A]/60 transition-all rounded-2xl">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#16233B] border border-[#2A3548] flex items-center justify-center text-[#B8975A] mb-5">
                <Mail className="w-5 h-5 text-[#B8975A]" />
              </div>
              <span className="text-[11px] font-sans uppercase tracking-[0.14em] text-[#B8975A] block mb-1 font-semibold">
                Formal Inquiries & Documents
              </span>
              <h3 className="font-serif text-xl text-[#F5F0E8] font-medium mb-2">
                Official Advisory Inbox
              </h3>
              <p className="text-[13.5px] text-[#8A9BB0] leading-relaxed mb-6 font-sans">
                Transmit complete syllabus briefs, large dataset attachments (.xlsx, .csv), and departmental guidelines for formal evaluation.
              </p>
            </div>

            <div>
              <div className="text-xs font-sans font-bold text-[#F5F0E8] mb-4 break-all">
                {BRAND_CONFIG.contactEmail}
              </div>
              <a
                href={`mailto:${BRAND_CONFIG.contactEmail}?subject=Academic%20Advisory%20Inquiry`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 border border-[#2A3548] bg-[#16233B] text-[#F5F0E8] text-xs font-sans uppercase tracking-[0.14em] hover:border-[#B8975A] transition-colors rounded-xl font-semibold"
              >
                <span>Send Formal Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B8975A]" />
              </a>
            </div>
          </div>

          {/* Card 3: Operating Standards & Hours */}
          <div className="bg-[#101A2B] border border-[#2A3548] p-8 flex flex-col justify-between shadow-xl hover:border-[#B8975A]/60 transition-all rounded-2xl">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#16233B] border border-[#2A3548] flex items-center justify-center text-[#B8975A] mb-5">
                <Clock className="w-5 h-5 text-[#B8975A]" />
              </div>
              <span className="text-[11px] font-sans uppercase tracking-[0.14em] text-[#B8975A] block mb-1 font-semibold">
                Advisory Schedule
              </span>
              <h3 className="font-serif text-xl text-[#F5F0E8] font-medium mb-2">
                Operational Availability
              </h3>
              <ul className="text-[13.5px] sm:text-[14px] text-[#8A9BB0] space-y-2 mb-6 font-sans">
                <li className="flex justify-between border-b border-[#1C2C42] pb-1.5">
                  <span>Mon – Sat:</span>
                  <span className="text-[#F5F0E8] font-semibold">12:00 PM – 12:00 AM IST</span>
                </li>
                <li className="flex justify-between border-b border-[#1C2C42] pb-1.5">
                  <span>Sunday:</span>
                  <span className="text-[#F5F0E8] font-semibold">Priority Deadlines Only</span>
                </li>
                <li className="flex justify-between pt-0.5">
                  <span>Initial Scoping:</span>
                  <span className="text-[#B8975A] font-semibold">Within 2 Hours</span>
                </li>
              </ul>
            </div>

            <div className="p-3 bg-[#0E1726] border border-[#2A3548] text-[12px] font-sans text-[#8A9BB0] flex items-center gap-2 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-[#B8975A] shrink-0" />
              <span>Strict institutional confidentiality maintained.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}