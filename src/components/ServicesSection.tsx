import React, { useState } from 'react';
import { Check, ChevronDown, Sparkles } from 'lucide-react';
import { SERVICES_LIST } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#477977]/10">
      
      {/* Section Header: Matching PDF Slide 4 typography */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-8 sm:h-10 bg-[#477977] rounded-full" />
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#2A4F4E] tracking-tight">
              SERVICES OFFERED
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#537574] max-w-xl">
            Tailored virtual assistance and administrative execution designed to give founders and executives time back to grow their core business.
          </p>
        </div>

        {/* Subdued decorative badge */}
        <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#477977]/20 text-[#2A4F4E] text-xs font-medium shadow-2xs">
          <Sparkles className="w-4 h-4 text-[#E8AF9B]" />
          <span>Full-Cycle Remote Support</span>
        </div>
      </div>

      {/* Services Grid: matching PDF 2-column & responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {SERVICES_LIST.map((service, index) => {
          const isExpanded = expandedService === service.id;
          const isPeach = service.barColor === 'peach';

          return (
            <div
              key={service.id}
              className={`bg-white rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between hover:shadow-lg relative overflow-hidden group ${
                isExpanded 
                  ? 'border-[#477977]/40 shadow-md ring-1 ring-[#477977]/20' 
                  : 'border-[#477977]/15 hover:border-[#477977]/35 shadow-2xs'
              } ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Subtle top indicator bar matching the PDF accent color */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1.5 ${
                  isPeach ? 'bg-[#E8AF9B]' : 'bg-[#477977]'
                }`} 
              />

              <div>
                {/* Title with Vertical Bar Accent matching PDF */}
                <div className="flex items-start gap-3 mb-4">
                  <div 
                    className={`w-1.5 h-6 rounded-full shrink-0 mt-0.5 ${
                      isPeach ? 'bg-[#E8AF9B]' : 'bg-[#477977]'
                    }`} 
                  />
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#2A4F4E] tracking-tight leading-snug">
                    {service.title}
                  </h3>
                </div>

                {/* Primary Description matching PDF */}
                <p className="text-sm sm:text-base text-[#3A5D5C] leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Expanded Deliverables Checklist */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-[#EEF5F5] space-y-2.5 animate-in fade-in duration-200">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#537574] block mb-2">
                      Key Deliverables
                    </span>
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2A4F4E]">
                        <div className="p-0.5 rounded-full bg-[#EEF5F5] text-[#477977] shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Interactive Expand Toggle */}
              <div className="mt-6 pt-4 border-t border-[#F3ECE1] flex items-center justify-between">
                <span className="text-xs font-medium text-[#719493] uppercase tracking-wider">
                  {service.category}
                </span>

                <button
                  onClick={() => toggleExpand(service.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#477977] hover:text-[#2A4F4E] transition-colors py-1 px-2 rounded-md hover:bg-[#EEF5F5] cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <span>{isExpanded ? 'Less info' : 'View deliverables'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
