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
  { id: 'workflow', label: 'WORKFLOW' },
  { id: 'quote-console', label: 'INTAKE' },
  { id: 'contact', label: 'CONTACT' },
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
          <div className="flex items-center gap-3 px-4 py-2 bg-[#101A2B]/95 backdrop-blur-md border border-[#2A3548] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)] rounded-full text-[10.5px] font-sans text-[#8A9BB0]">
            {/* Live Section Tracker */}
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8975A]" />
              <span className="text-[#F5F0E8] font-semibold tracking-wider whitespace-nowrap">
                {activeSection}
              </span>
            </div>

            <span className="text-[#2A3548] hidden sm:inline">•</span>

            {/* Micro Progress Bar */}
            <div className="hidden sm:flex items-center gap-1.5">
              <div className="w-12 h-1 bg-[#1C2C42] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#B8975A] transition-all duration-150"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
              <span className="text-[#8A9BB0] text-[9px] w-6 font-medium">{scrollProgress}%</span>
            </div>

            <span className="text-[#2A3548]">•</span>

            {/* Quick Action Button */}
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center gap-1 text-[#B8975A] hover:text-[#FFFFFF] font-semibold tracking-wide transition-colors cursor-pointer"
            >
              <span>GET QUOTE</span>
              <ArrowUpRight className="w-3 h-3 text-[#B8975A]" />
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
