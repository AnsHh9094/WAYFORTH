'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Clock, ShieldCheck, BookOpen } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value?: number;
  displayValue?: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

const STATS: StatItem[] = [
  {
    icon: <FileText className="w-5 h-5 text-[#B8975A]" />,
    value: 213,
    suffix: '+',
    label: 'Projects Completed',
    sublabel: 'Across Undergraduate, Master’s & Research projects',
  },
  {
    icon: <BookOpen className="w-5 h-5 text-[#B8975A]" />,
    value: 22,
    suffix: '+',
    label: 'Academic Disciplines Covered',
    sublabel: 'Specialized domain scholars across diverse university fields',
  },
  {
    icon: <Clock className="w-5 h-5 text-[#B8975A]" />,
    displayValue: '< 2 Hours',
    label: 'Average Response Time',
    sublabel: 'Immediate preliminary scoping and rubric evaluation within 2 hours',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#B8975A]" />,
    value: 93.4,
    suffix: '%',
    decimals: 1,
    label: 'On-Time Delivery Rate',
    sublabel: 'Strict adherence to confirmed university deadlines',
  },
];

function CounterNumber({
  value,
  displayValue,
  decimals = 0,
  prefix = '',
  suffix = '',
}: {
  value?: number;
  displayValue?: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView || value === undefined) return;

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
        setCount(decimals > 0 ? parseFloat(start.toFixed(decimals)) : Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, decimals]);

  return (
    <span
      ref={ref}
      className="font-serif font-light text-5xl sm:text-6xl text-[#FFFFFF] tracking-tight"
      style={{ fontSize: 'clamp(2.75rem, 4.5vw, 3.75rem)', lineHeight: 1.1 }}
    >
      {displayValue || `${prefix}${decimals > 0 ? count.toFixed(decimals) : count}${suffix}`}
    </span>
  );
}

export function KineticStatsTicker() {
  return (
    <section
      className="relative py-20 sm:py-24 lg:py-28 bg-[#0C1220] border-b border-[#2A3548] select-none"
      style={{ minHeight: '460px', paddingTop: '5.5rem', paddingBottom: '5.5rem' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Ledger Strip */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-[#2A3548] text-[11px] font-sans font-medium tracking-[0.16em] uppercase text-[#8A9BB0]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B8975A] animate-pulse" />
            <span className="text-[#F5F0E8] font-bold">OPERATIONAL METRICS // AUTUMN 2026</span>
          </div>
          <span className="hidden sm:inline text-[#B8975A] font-semibold">VERIFIED ACADEMIC ASSURANCE</span>
        </div>

        {/* 4 Kinetic Stat Columns (Restored Spacious Layout) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col p-6 sm:p-8 bg-[#101A2B] border border-[#2A3548] rounded-2xl hover:border-[#B8975A]/60 transition-all shadow-md group min-h-[235px]"
              style={{ minHeight: '235px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="p-2.5 bg-[#16233B] border border-[#2A3548] rounded-xl text-[#B8975A] group-hover:border-[#B8975A]/50 transition-colors">
                  {stat.icon}
                </div>
                <span className="text-[10.5px] font-sans font-semibold text-[#B8975A] tracking-widest px-2.5 py-0.5 bg-[#16233B]/60 border border-[#B8975A]/30 rounded-full">
                  [0{idx + 1}]
                </span>
              </div>

              <div className="mb-2">
                <CounterNumber
                  value={stat.value}
                  displayValue={stat.displayValue}
                  decimals={stat.decimals}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>

              <strong className="block text-sm sm:text-[15px] font-sans text-[#F5F0E8] font-semibold mb-1">
                {stat.label}
              </strong>
              <p className="text-[13px] text-[#8A9BB0] leading-relaxed font-sans font-normal">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
