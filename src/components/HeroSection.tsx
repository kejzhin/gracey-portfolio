import React from 'react';
import { PERSONAL_INFO, PORTFOLIO_ASSETS } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12 lg:gap-16 min-h-[480px]">
        
        {/* Left: Portrait Card */}
        <div className="relative shrink-0 flex justify-center md:sticky md:top-28">
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-92 aspect-3/4 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#EDF4F4] group transition-all duration-300 hover:shadow-3xl">
            <img
              src={PORTFOLIO_ASSETS.heroPortrait}
              alt="Gracelle Villanueva - Virtual Assistant"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
              loading="eager"
            />
            {/* Subtle soft gradient scrim at bottom edge */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A4F4E]/15 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Hand-drawn style decorative teal arrow pointing to name (Desktop) */}
          <div className="hidden md:block absolute -right-10 lg:-right-12 top-20 w-20 lg:w-24 h-20 lg:h-24 pointer-events-none text-[#477977] z-10">
            <svg viewBox="0 0 120 100" fill="none" className="w-full h-full drop-shadow-xs">
              <path
                d="M15 85 C 50 95, 80 50, 45 40 C 25 35, 30 75, 75 45 C 90 35, 100 28, 108 22"
                stroke="currentColor"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M88 18 L 112 20 L 105 42"
                stroke="currentColor"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Right: Typography & Bio Story placed directly beside the portrait */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-5 max-w-xl">
          
          {/* Greeting Pill Tag */}
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-[#E8AF9B] text-white font-display font-medium text-sm sm:text-base tracking-wide shadow-xs transition-transform duration-200 hover:scale-105">
            {PERSONAL_INFO.headline}
          </div>

          {/* Prominent Name Heading */}
          <div className="space-y-0.5">
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#2A4F4E]">
              GRACEY
            </h1>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#2A4F4E]">
              VILLANUEVA
            </h1>
          </div>

          {/* About Me Narrative Text placed directly below the name */}
          <div id="about" className="space-y-4 pt-2 text-[#2A4F4E] text-base sm:text-lg leading-relaxed font-normal">
            <p>
              {PERSONAL_INFO.aboutSummary[0]}
            </p>
            <p className="text-[#385B5A]">
              {PERSONAL_INFO.aboutSummary[1]}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
