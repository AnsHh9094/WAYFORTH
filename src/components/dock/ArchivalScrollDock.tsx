'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ArchivalScrollDockProps {
  onRequestQuote: () => void;
}

const SECTIONS = [
  { id: 'hero', label: 'THESIS' },
  { id: 'manifesto', label: 'MANIFESTO' },
  { id: 'disciplines', label: 'DISCIPLINES' },
  { id: 'comparison', label: 'THE STANDARD' },
  { id: 'pricing', label: 'FEES' },
  { id: 'workflow', label: 'WORKFLOW' },
  { id: 'quote-console', label: 'INTAKE' },
];

export function ArchivalScrollDock({ onRequestQuote }: ArchivalScrollDockProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('THESIS');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Show dock only after scrolling past the initial hero header
      setIsVisible(scrollY > 220);

      // Scroll Progress (0 to 100%)
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.round((scrollY / totalHeight) * 100)));
      }

      // Check current active section
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(SECTIONS[i].label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label="Document Navigation Dock"
          key="scroll-dock"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 select-none max-w-[92vw]"
        >
          <div className="flex items-center gap-3 px-3.5 py-1.5 bg-[#FFFFFF]/90 backdrop-blur-md border border-[#D8E2EC] shadow-[0_10px_25px_-5px_rgba(18,50,78,0.12)] rounded-[3px] text-[10px] font-mono text-[#4A607A]">
            {/* Live Section Tracker */}
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#12324E]" />
              <span className="text-[#12324E] font-semibold tracking-wider whitespace-nowrap">
                {activeSection}
              </span>
            </div>

            <span className="text-[#D8E2EC] hidden sm:inline">•</span>

            {/* Micro Progress Bar */}
            <div className="hidden sm:flex items-center gap-1.5">
              <div className="w-12 h-1 bg-[#EDF2F7] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#12324E] transition-all duration-150"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
              <span className="text-[#4A607A] text-[9px] w-6 font-medium">{scrollProgress}%</span>
            </div>

            <span className="text-[#D8E2EC]">•</span>

            {/* Quick Action Button */}
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center gap-1 text-[#1D5382] hover:text-[#12324E] font-semibold tracking-wide transition-colors cursor-pointer"
            >
              <span>GET QUOTE</span>
              <ArrowUpRight className="w-3 h-3 text-[#38BDF8]" />
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
