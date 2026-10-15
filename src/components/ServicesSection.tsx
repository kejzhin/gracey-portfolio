import React from 'react';
import { SERVICES_LIST } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  // Matching PDF Slide 4:
  // Left column: 3 services (General Business Admin, Social Media Management, Bookkeeping)
  // Right column: Large "SERVICES OFFERED" heading + 2 services (Graphic Designing, Property Management)
  const leftServices = SERVICES_LIST.slice(0, 3);
  const rightServices = SERVICES_LIST.slice(3, 5);

  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#477977]/10">
      
      {/* Mobile Heading (Shown only on small screens) */}
      <div className="md:hidden flex items-center gap-3.5 mb-10">
        <div className="w-1.5 h-8 bg-[#477977] rounded-full shrink-0" />
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#2A4F4E] tracking-tight">
          SERVICES OFFERED
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
        
        {/* Left Column: 3 Services matching Slide 4 */}
        <div className="space-y-10 sm:space-y-12">
          {leftServices.map((service) => {
            const isPeach = service.barColor === 'peach';
            return (
              <div key={service.id} className="group">
                {/* Title with Vertical Colored Bar */}
                <div className="flex items-start gap-3.5 mb-3">
                  <div
                    className={`w-1.5 h-6 sm:h-7 rounded-full shrink-0 mt-0.5 ${
                      isPeach ? 'bg-[#E8AF9B]' : 'bg-[#477977]'
                    }`}
                  />
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#2A4F4E] tracking-tight leading-snug">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="pl-5 text-base sm:text-lg text-[#3A5D5C] leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Prominent "SERVICES OFFERED" Heading + 2 Services matching Slide 4 */}
        <div className="space-y-10 sm:space-y-12">
          
          {/* Desktop Heading matching Slide 4 */}
          <div className="hidden md:block pb-2">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-[#2A4F4E] tracking-tight leading-tight">
              SERVICES<br />OFFERED
            </h2>
          </div>

          {rightServices.map((service) => {
            const isPeach = service.barColor === 'peach';
            return (
              <div key={service.id} className="group">
                {/* Title with Vertical Colored Bar */}
                <div className="flex items-start gap-3.5 mb-3">
                  <div
                    className={`w-1.5 h-6 sm:h-7 rounded-full shrink-0 mt-0.5 ${
                      isPeach ? 'bg-[#E8AF9B]' : 'bg-[#477977]'
                    }`}
                  />
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#2A4F4E] tracking-tight leading-snug">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="pl-5 text-base sm:text-lg text-[#3A5D5C] leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
