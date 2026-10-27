'use client';

import React from 'react';
import Image from 'next/image';

interface WayforthLogoProps {
  variant?: 'full' | 'mark' | 'compact';
  theme?: 'dark' | 'light' | 'gold';
  className?: string;
  sublineText?: string;
  use3DMark?: boolean;
}

export function WayforthLogo({
  variant = 'full',
  theme = 'dark',
  className = '',
  sublineText = 'ACADEMIC & RESEARCH ADVISORY',
  use3DMark = true,
}: WayforthLogoProps) {
  // Theme color tokens - Champoleon Valley Inspired Palette
  const isLight = theme === 'light'; // Light text for dark backgrounds (Footer)
  const isGold = theme === 'gold';

  const markBg = isLight
    ? 'bg-[#0E253A] border-[#224A70]'
    : 'bg-[#000000] border-[#12324E]/20';

  const textColor = isLight ? 'text-[#FFFFFF]' : 'text-[#12324E]';
  const dotColor = isLight ? '#38BDF8' : '#1D5382';
  const sublineColor = isLight ? 'text-[#CBD5E1]' : 'text-[#4A607A]';

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* 3D Architectural Monolith Monogram Mark */}
      <div
        className={`w-10 h-10 rounded-[3px] ${markBg} overflow-hidden flex items-center justify-center relative shadow-xs border transition-all duration-300 hover:scale-105 shrink-0`}
        aria-hidden="true"
      >
        {use3DMark ? (
          <Image
            src="/brand/wayforth-dp-3d-square.png"
            alt="Wayforth 3D Monolith"
            width={40}
            height={40}
            className="w-full h-full object-cover"
            priority
          />
        ) : (
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full p-1"
          >
            {/* Left Pillar */}
            <path
              d="M4 6L11 26H13.5L8.5 6H4Z"
              fill={isLight ? '#FFFFFF' : '#12324E'}
              opacity="0.95"
            />
            {/* Middle Upward Arrow Vertex */}
            <path
              d="M11.5 22L16 9L20.5 22H18L16 14.5L14 22H11.5Z"
              fill={isLight ? '#38BDF8' : '#1D5382'}
            />
            {/* Right Pillar */}
            <path
              d="M23.5 6L18.5 26H21L28 6H23.5Z"
              fill={isLight ? '#FFFFFF' : '#12324E'}
              opacity="0.95"
            />
            <circle cx="16" cy="5.5" r="1.5" fill={isLight ? '#38BDF8' : '#1D5382'} />
          </svg>
        )}
      </div>

      {variant !== 'mark' && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span
              className={`font-serif text-2xl sm:text-[26px] font-normal tracking-[-0.03em] ${textColor} leading-none`}
            >
              Wayforth
            </span>
            <span
              style={{ color: dotColor }}
              className="font-serif text-2xl font-bold leading-none"
            >
              .in
            </span>
          </div>
          {variant === 'full' && (
            <span
              className={`text-[8.5px] uppercase font-mono tracking-[0.2em] ${sublineColor} mt-1`}
            >
              {sublineText}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
