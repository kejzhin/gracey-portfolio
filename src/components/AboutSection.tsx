import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#477977]/10">
      
      {/* Section Header with vertical bar indicator matching PDF Slide 2 */}
      <div className="flex items-center gap-3.5 mb-8 md:mb-10">
        <div className="w-1.5 h-8 sm:h-10 bg-[#477977] rounded-full shrink-0" />
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#2A4F4E] tracking-tight">
          ABOUT ME
        </h2>
      </div>

      {/* Narrative Prose matching PDF Slide 2 text */}
      <div className="space-y-6 sm:space-y-7 pl-2 sm:pl-5 text-[#2A4F4E]">
        <p className="text-lg sm:text-xl md:text-[21px] leading-relaxed font-normal text-[#2A4F4E]">
          {PERSONAL_INFO.aboutSummary[0]}
        </p>

        <p className="text-lg sm:text-xl md:text-[21px] leading-relaxed font-normal text-[#385B5A]">
          {PERSONAL_INFO.aboutSummary[1]}
        </p>
      </div>

    </section>
  );
};
