'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Zap, Award, BookOpen } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

const STATS: StatItem[] = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#38BDF8]" />,
    value: 100,
    suffix: '%',
    label: 'Genuine Human Writing',
    sublabel: 'Zero AI regurgitation or hallucinated citations',
  },
  {
    icon: <Zap className="w-5 h-5 text-[#38BDF8]" />,
    value: 50,
    suffix: '%',
    label: 'Initial Milestone Deposit',
    sublabel: 'Pay-as-you-go milestone safeguard',
  },
  {
    icon: <Award className="w-5 h-5 text-[#38BDF8]" />,
    value: 1,
    suffix: ' Round',
    label: 'Included Revision',
    sublabel: 'Comprehensive feedback & refinements included',
  },
  {
    icon: <BookOpen className="w-5 h-5 text-[#38BDF8]" />,
    value: 50,
    suffix: '+',
    label: 'Academic Disciplines',
    sublabel: 'Undergrad to PhD doctoral methodologies',
  },
];

function CounterNumber({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    if (value <= 0) {
      return;
    }

    let start = 0;
    const duration = 1400; // ms
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const stepValue = value / totalSteps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif font-light text-4xl sm:text-6xl text-[#FFFFFF] tracking-tight">
      {prefix}{count}{suffix}
    </span>
  );
}

export function KineticStatsTicker() {
  return (
    <section className="relative py-16 bg-[#0E253A] border-b border-[#224A70] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Ledger Strip */}
        <div className="flex items-center justify-between pb-6 mb-10 border-b border-[#224A70] text-[10.5px] font-mono tracking-widest uppercase text-[#CBD5E1]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00FFA3] animate-pulse" />
            <span className="text-[#FFFFFF] font-bold">OPERATIONAL METRICS // AUTUMN 2026</span>
          </div>
          <span className="hidden sm:inline text-[#38BDF8]">VERIFIED ACADEMIC ASSURANCE</span>
        </div>

        {/* 4 Kinetic Stat Columns (Smooth Rounded-2xl Cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col p-6 sm:p-7 bg-[#0B1826]/80 border border-[#224A70] rounded-2xl hover:border-[#38BDF8]/60 transition-all shadow-md group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="p-2.5 bg-[#12324E] border border-[#224A70] rounded-xl text-[#38BDF8] group-hover:border-[#38BDF8]/50 transition-colors">
                  {stat.icon}
                </div>
                <span className="text-[10px] font-mono text-[#94A3B8] tracking-widest px-2 py-0.5 bg-[#12324E]/60 border border-[#224A70] rounded-full">
                  [0{idx + 1}]
                </span>
              </div>

              <div className="mb-2">
                <CounterNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>

              <strong className="block text-sm font-sans text-[#E2ECF5] font-semibold mb-1">
                {stat.label}
              </strong>
              <p className="text-xs text-[#CBD5E1] leading-relaxed font-sans font-normal">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
