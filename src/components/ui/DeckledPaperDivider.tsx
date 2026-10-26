import React from 'react';

interface DeckledPaperDividerProps {
  topColor?: string; // Color of the section above (default #FFFFFF)
  bottomColor?: string; // Color of the section below (default #F4F7FB)
  flip?: boolean;
  className?: string;
}

export function DeckledPaperDivider({
  topColor = '#FFFFFF',
  bottomColor = '#F4F7FB',
  flip = false,
  className = '',
}: DeckledPaperDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden leading-none select-none pointer-events-none z-20 ${className} ${
        flip ? 'transform rotate-180' : ''
      }`}
      style={{ height: '38px', backgroundColor: topColor }}
    >
      {/* Subtle physical drop shadow behind the torn deckled paper edge */}
      <svg
        className="absolute top-0 left-0 w-full h-[38px] opacity-15 translate-y-[2px]"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 
             L0,22 
             C35,25 70,19 110,24 
             C155,29 190,18 235,26 
             C280,33 315,22 360,25 
             C405,28 440,36 485,30 
             C530,24 570,33 615,26 
             C660,19 700,28 745,23 
             C790,18 830,30 875,25 
             C920,20 960,34 1005,28 
             C1050,22 1090,29 1135,24 
             C1180,19 1220,33 1265,27 
             C1310,21 1350,30 1395,24 
             C1420,21 1435,26 1440,23 
             L1440,48 L0,48 Z"
          fill="#12324E"
        />
      </svg>

      {/* Primary Organic Deckled Torn Cotton-Rag Paper Edge */}
      <svg
        className="relative block w-full h-[38px]"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 
             L0,20 
             C25,23 55,18 85,21 
             C115,24 135,29 165,23 
             C195,17 225,25 255,28 
             C285,31 310,21 340,24 
             C370,27 395,35 425,31 
             C455,27 485,20 515,24 
             C545,28 570,34 600,29 
             C630,24 660,18 690,22 
             C720,26 745,31 775,26 
             C805,21 835,17 865,23 
             C895,29 920,35 950,30 
             C980,25 1010,20 1040,24 
             C1070,28 1095,33 1125,27 
             C1155,21 1185,18 1215,23 
             C1245,28 1275,34 1305,29 
             C1335,24 1365,20 1395,23 
             C1415,25 1430,21 1440,22 
             L1440,48 L0,48 Z"
          fill={bottomColor}
        />

        {/* Delicate Cotton Paper Fiber Hairline Highlights along the torn ridge */}
        <path
          d="M0,20 
             C25,23 55,18 85,21 
             C115,24 135,29 165,23 
             C195,17 225,25 255,28 
             C285,31 310,21 340,24 
             C370,27 395,35 425,31 
             C455,27 485,20 515,24 
             C545,28 570,34 600,29 
             C630,24 660,18 690,22 
             C720,26 745,31 775,26 
             C805,21 835,17 865,23 
             C895,29 920,35 950,30 
             C980,25 1010,20 1040,24 
             C1070,28 1095,33 1125,27 
             C1155,21 1185,18 1215,23 
             C1245,28 1275,34 1305,29 
             C1335,24 1365,20 1395,23 
             C1415,25 1430,21 1440,22"
          fill="none"
          stroke="#E2DED4"
          strokeWidth="1.2"
          strokeDasharray="4 3 8 2"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}
