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
    suffix: '',
    label: 'Projects Completed',
    sublabel: 'Spanning undergraduate assignments, postgraduate dissertations, and advanced research briefs.',
  },
  {
    icon: <BookOpen className="w-5 h-5 text-[#B8975A]" />,
    value: 22,
    suffix: '+',
    label: 'Disciplines Covered',
    sublabel: 'Specialist domain scholars across diverse academic faculties.',
  },
  {
    icon: <Clock className="w-5 h-5 text-[#B8975A]" />,
    displayValue: '< 2 Hours',
    label: 'Average Response Time',
    sublabel: 'Prompt preliminary scoping and rubric evaluation.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#B8975A]" />,
    value: 93.4,
    suffix: '%',
    decimals: 1,
    label: 'On-Time Delivery Rate',
    sublabel: 'Strict adherence to agreed submission deadlines.',
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
      className="font-serif font-light text-5xl sm:text-6xl lg:text-7xl text-[#FFFFFF] tracking-tight"
      style={{ fontSize: 'clamp(3rem, 4.5vw, 4.25rem)', lineHeight: 1.05 }}
    >
      {displayValue || `${prefix}${decimals > 0 ? count.toFixed(decimals) : count}${suffix}`}
    </span>
  );
}

export function KineticStatsTicker() {
  return (
    <section
      className="relative py-24 sm:py-28 lg:py-32 bg-[#0C1220] border-b border-[#2A3548] select-none"
      style={{ minHeight: '480px', paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Ledger Strip */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-[#2A3548] text-[11px] font-sans font-medium tracking-[0.16em] uppercase text-[#8A9BB0]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CBD8E6] animate-pulse" />
            <span className="text-[#F5F0E8] font-bold">OPERATIONAL METRICS // AUTUMN 2026</span>
          </div>
          <span className="hidden sm:inline text-[#CBD8E6] font-semibold">VERIFIED ACADEMIC ASSURANCE</span>
        </div>

        {/* 4 Kinetic Stat Columns (Restored Spacious Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col justify-between p-7 sm:p-8 lg:p-9 bg-[#101A2B] border border-[#2A3548] rounded-2xl hover:border-[#B8975A]/60 transition-all shadow-xl group min-h-[265px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div>
                <div className="mb-6">
                  <div className="inline-block p-3 bg-[#16233B] border border-[#2A3548] rounded-xl text-[#B8975A] group-hover:border-[#B8975A]/50 transition-colors">
                    {stat.icon}
                  </div>
                </div>

                <div className="mb-3">
                  <CounterNumber
                    value={stat.value}
                    displayValue={stat.displayValue}
                    decimals={stat.decimals}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>

                <strong className="block text-base sm:text-[17px] font-sans text-[#F5F0E8] font-semibold mb-2">
                  {stat.label}
                </strong>
              </div>

              <p className="text-[13px] sm:text-[13.5px] text-[#8A9BB0] leading-relaxed font-sans font-normal min-h-[48px] flex items-start">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
