'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function PrecisionCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Buttery spring physics for smooth cursor follow
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable completely on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive elements or custom cursor triggers
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      const clickableTarget = target.closest('button, a, input, select, textarea, [role="button"]');

      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else if (clickableTarget) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Precision Center Pin-Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#1B362A] -translate-x-1/2 -translate-y-1/2"
        style={{ x: mouseX, y: mouseY }}
      />

      {/* Trailing Outer Magnetic Ring */}
      <motion.div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full -translate-x-1/2 -translate-y-1/2 border transition-colors duration-200 ${
          isHovered
            ? 'w-10 h-10 border-[#1B362A] bg-[#1B362A]/5 backdrop-blur-[1px]'
            : 'w-7 h-7 border-[#12161A]/30'
        }`}
        style={{ x: smoothX, y: smoothY }}
      >
        {cursorText && (
          <span className="text-[8px] font-mono font-bold tracking-widest text-[#1B362A] uppercase whitespace-nowrap">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
}
