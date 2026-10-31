'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeItem {
  text: string;
  badge?: string;
}

const TRACK_1: MarqueeItem[] = [
  { text: 'QUANTITATIVE ECONOMETRICS', badge: 'STATA & R' },
  { text: 'MBA STRATEGIC DISSERTATION', badge: 'HARVARD STYLE' },
  { text: 'MOLECULAR BIOCHEMISTRY', badge: 'PEER-REVIEWED' },
  { text: 'CORPORATE VALUATION & DCF', badge: 'FINANCIAL MODELS' },
  { text: 'EMPIRICAL POLICY RESEARCH', badge: 'GMM ESTIMATION' },
  { text: '100% GENUINE HUMAN AUTHORSHIP', badge: 'ZERO AI FILLER' },
  { text: 'APA 7TH, IEEE, HARVARD & CHICAGO', badge: 'ACCREDITED' },
];

const TRACK_2: MarqueeItem[] = [
  { text: 'PAY-AS-YOU-GO MILESTONE SAFEGUARD', badge: '50% DEPOSIT' },
  { text: 'INSPECT REPRESENTATIVE SAMPLES FIRST', badge: 'FULL TRUST' },
  { text: '1 INCLUDED REVISION ROUND', badge: 'GUARANTEED' },
  { text: 'CBSE, CISCE & STATE BOARDS (CLASS 10-12)', badge: 'COMING SOON' },
  { text: 'EXCEL DATA ANALYSIS & MACROS', badge: 'CLEAN DATASETS' },
  { text: 'MAKE ROOM FOR MORE', badge: 'WAYFORTH.IN' },
];

export function InfiniteMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-6 bg-[#0B1826] border-y border-[#224A70] select-none">
      {/* Subtle edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B1826] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B1826] to-transparent z-10 pointer-events-none" />

      {/* Row 1: Leftward Marquee */}
      <div className="flex gap-8 whitespace-nowrap mb-3.5 overflow-hidden">
        <motion.div
          className="flex items-center gap-8 shrink-0"
          animate={{ x: [0, -1400] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 28 }}
        >
          {[...TRACK_1, ...TRACK_1, ...TRACK_1].map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-3 font-sans font-medium text-[11.5px] uppercase tracking-[0.14em] text-[#9BB3C9]">
              <span className="text-[#B8975A] text-xs">✦</span>
              <span className="font-semibold text-[#FFFFFF]">{item.text}</span>
              {item.badge && (
                <span className="px-2 py-0.5 rounded-[2px] bg-[#12324E] border border-[#B8975A]/40 text-[9.5px] text-[#B8975A] font-bold">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Rightward Marquee */}
      <div className="flex gap-8 whitespace-nowrap overflow-hidden">
        <motion.div
          className="flex items-center gap-8 shrink-0"
          animate={{ x: [-1400, 0] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 32 }}
        >
          {[...TRACK_2, ...TRACK_2, ...TRACK_2].map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-3 font-sans font-medium text-[11.5px] uppercase tracking-[0.14em] text-[#7E9AB3]">
              <span className="text-[#1D5382] text-xs">◆</span>
              <span className="font-normal text-[#E2ECF5]">{item.text}</span>
              {item.badge && (
                <span className="px-2 py-0.5 rounded-[2px] bg-[#1D5382]/30 border border-[#B8975A]/40 text-[9.5px] text-[#B8975A] font-semibold">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
