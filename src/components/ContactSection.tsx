import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#477977]/10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Big Speech Bubble "Let's Work Together" matching PDF Slide 8 exactly */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start">
          <div className="relative w-full max-w-md bg-[#477977] text-white rounded-3xl p-10 sm:p-14 shadow-xl flex flex-col items-center justify-center text-center min-h-[320px] sm:min-h-[380px]">
            
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
              Let's Work<br />Together
            </h2>

            {/* Speech bubble tail pointer matching PDF Slide 8 */}
            <div className="absolute -bottom-4 right-12 sm:right-16 w-0 h-0 border-l-[18px] border-l-transparent border-t-[22px] border-t-[#477977] border-r-[18px] border-r-transparent" />
          </div>
        </div>

        {/* Right Column: Contact Details matching PDF Slide 8 with bars */}
        <div className="lg:col-span-6 space-y-9">
          
          {/* EMAIL */}
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              {/* Peach vertical indicator bar matching PDF */}
              <div className="w-1.5 h-7 bg-[#E8AF9B] rounded-full" />
              <h3 className="font-display font-bold text-base sm:text-lg tracking-widest uppercase text-[#537574]">
                EMAIL
              </h3>
            </div>
            <div className="pl-4.5">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-display font-semibold text-xl sm:text-2xl md:text-3xl text-[#2A4F4E] hover:text-[#477977] transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          {/* MOBILE */}
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              {/* Teal vertical indicator bar matching PDF */}
              <div className="w-1.5 h-7 bg-[#477977] rounded-full" />
              <h3 className="font-display font-bold text-base sm:text-lg tracking-widest uppercase text-[#537574]">
                MOBILE
              </h3>
            </div>
            <div className="pl-4.5">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="font-display font-semibold text-xl sm:text-2xl md:text-3xl text-[#2A4F4E] hover:text-[#477977] transition-colors"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </div>

          {/* MAILING ADDRESS */}
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              {/* Peach vertical indicator bar matching PDF */}
              <div className="w-1.5 h-7 bg-[#E8AF9B] rounded-full" />
              <h3 className="font-display font-bold text-base sm:text-lg tracking-widest uppercase text-[#537574]">
                MAILING ADDRESS
              </h3>
            </div>
            <div className="pl-4.5">
              <p className="font-display font-semibold text-xl sm:text-2xl md:text-3xl text-[#2A4F4E]">
                {PERSONAL_INFO.city}
              </p>
            </div>
          </div>

          {/* LINKEDIN */}
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              {/* Teal vertical indicator bar matching PDF */}
              <div className="w-1.5 h-7 bg-[#477977] rounded-full" />
              <h3 className="font-display font-bold text-base sm:text-lg tracking-widest uppercase text-[#537574]">
                LINKEDIN
              </h3>
            </div>
            <div className="pl-4.5">
              <a
                href={`https://${PERSONAL_INFO.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-semibold text-xl sm:text-2xl md:text-3xl text-[#2A4F4E] hover:text-[#477977] transition-colors break-all"
              >
                {PERSONAL_INFO.linkedin}
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
