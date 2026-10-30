'use client';

import React from 'react';
import { BRAND_CONFIG } from '@/config/brand.config';
import { Mail, MessageSquare, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F4F7FB] border-b border-[#D8E2EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1D5382] block mb-2 font-semibold">
            Direct Communications Desk
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#12324E] leading-tight mb-4">
            Connect directly with an academic advisor.
          </h2>
          <p className="text-[#364B62] text-base leading-relaxed">
            Have questions regarding your institutional rubric, custom datasets, or delivery timeline? 
            Reach out through our direct advisory channels. All project briefs receive confidential evaluation.
          </p>
        </div>

        {/* 3 Contact Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: WhatsApp Advisory */}
          <div className="bg-[#FFFFFF] border border-[#D8E2EC] p-8 flex flex-col justify-between shadow-2xs hover:border-[#12324E] transition-all rounded-2xl">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#EBF3FB] border border-[#C5DCF0] flex items-center justify-center text-[#1D5382] mb-5">
                <MessageSquare className="w-5 h-5 text-[#1D5382]" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1D5382] block mb-1 font-semibold">
                Instant Advisory Desk
              </span>
              <h3 className="font-serif text-xl text-[#12324E] font-medium mb-2">
                Direct WhatsApp Channel
              </h3>
              <p className="text-xs text-[#4A607A] leading-relaxed mb-6 font-sans">
                Connect directly for swift project scoping, rubric clarification, and milestone progress updates.
              </p>
            </div>

            <div>
              <div className="text-xs font-mono font-semibold text-[#1D5382] mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Encrypted Advisory Line</span>
              </div>
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappRawNumber}?text=${encodeURIComponent(
                  'Hello Wayforth Advisory, I would like to inquire about academic project support.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#12324E] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#1D5382] transition-colors rounded-xl font-bold"
              >
                <span>Message on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
              </a>
            </div>
          </div>

          {/* Card 2: Formal Email Desk */}
          <div className="bg-[#FFFFFF] border border-[#D8E2EC] p-8 flex flex-col justify-between shadow-2xs hover:border-[#12324E] transition-all rounded-2xl">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#EBF3FB] border border-[#C5DCF0] flex items-center justify-center text-[#1D5382] mb-5">
                <Mail className="w-5 h-5 text-[#1D5382]" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1D5382] block mb-1 font-semibold">
                Formal Inquiries & Documents
              </span>
              <h3 className="font-serif text-xl text-[#12324E] font-medium mb-2">
                Official Advisory Inbox
              </h3>
              <p className="text-xs text-[#4A607A] leading-relaxed mb-6 font-sans">
                Transmit complete syllabus briefs, large dataset attachments (.xlsx, .csv), and departmental guidelines for formal evaluation.
              </p>
            </div>

            <div>
              <div className="text-xs font-mono font-bold text-[#12324E] mb-4 break-all">
                {BRAND_CONFIG.contactEmail}
              </div>
              <a
                href={`mailto:${BRAND_CONFIG.contactEmail}?subject=Academic%20Advisory%20Inquiry`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 border border-[#D8E2EC] bg-[#F4F7FB] text-[#12324E] text-xs font-mono uppercase tracking-wider hover:border-[#12324E] hover:bg-[#FFFFFF] transition-colors rounded-xl font-semibold"
              >
                <span>Send Formal Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#1D5382]" />
              </a>
            </div>
          </div>

          {/* Card 3: Operating Standards & Hours */}
          <div className="bg-[#FFFFFF] border border-[#D8E2EC] p-8 flex flex-col justify-between shadow-2xs hover:border-[#12324E] transition-all rounded-2xl">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#EBF3FB] border border-[#C5DCF0] flex items-center justify-center text-[#1D5382] mb-5">
                <Clock className="w-5 h-5 text-[#1D5382]" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1D5382] block mb-1 font-semibold">
                Advisory Schedule
              </span>
              <h3 className="font-serif text-xl text-[#12324E] font-medium mb-2">
                Operational Availability
              </h3>
              <ul className="text-xs text-[#4A607A] space-y-2 mb-6 font-sans">
                <li className="flex justify-between border-b border-[#D8E2EC]/60 pb-1.5">
                  <span>Mon – Sat:</span>
                  <span className="text-[#12324E] font-semibold">12:00 PM – 12:00 AM IST</span>
                </li>
                <li className="flex justify-between border-b border-[#D8E2EC]/60 pb-1.5">
                  <span>Sunday:</span>
                  <span className="text-[#12324E] font-semibold">Priority Deadlines Only</span>
                </li>
                <li className="flex justify-between pt-0.5">
                  <span>Initial Scoping:</span>
                  <span className="text-[#1D5382] font-semibold">Within 2 Hours</span>
                </li>
              </ul>
            </div>

            <div className="p-3 bg-[#F4F7FB] border border-[#D8E2EC] text-[10.5px] font-sans text-[#4A607A] flex items-center gap-2 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-[#1D5382] shrink-0" />
              <span>Strict institutional confidentiality maintained.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}