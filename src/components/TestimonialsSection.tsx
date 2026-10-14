import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#477977]/10">
      
      {/* Header matching PDF Slide 6 */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2A4F4E] tracking-tight mb-4">
          CLIENT FEEDBACK AND REVIEWS
        </h2>

        {/* 5 Salmon/Peach stars underneath the header matching PDF */}
        <div className="flex items-center justify-center gap-1.5 text-[#E8AF9B]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-current stroke-none" />
          ))}
        </div>
      </div>

      {/* 4 Testimonial Cards matching Slide 6 layout (4 columns on desktop, 2 on tablet, 1 on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
        {TESTIMONIALS_LIST.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#477977] flex flex-col justify-between shadow-2xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative group"
          >
            {/* Top Stars inside card */}
            <div>
              <div className="flex items-center gap-1 text-[#E8AF9B] mb-5">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-sm sm:text-base text-[#2A4F4E] font-medium leading-relaxed italic mb-6">
                {item.quote}
              </p>
            </div>

            {/* Author Attribution */}
            <div className="pt-4 border-t border-[#477977]/20 flex items-center justify-between">
              <div>
                <h4 className="font-display font-bold text-base text-[#2A4F4E]">
                  {item.client}
                </h4>
                <p className="text-xs text-[#537574]">
                  {item.role}
                </p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#EEF5F5] text-[#477977] flex items-center justify-center shrink-0">
                <Quote className="w-3.5 h-3.5 fill-current opacity-60" />
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
