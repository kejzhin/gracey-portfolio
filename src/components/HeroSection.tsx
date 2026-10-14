import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, Copy, ArrowDownRight } from 'lucide-react';
import { PERSONAL_INFO, PORTFOLIO_ASSETS } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[580px]">
        
        {/* Left Column: Portrait with Organic Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="relative w-64 sm:w-80 md:w-96 aspect-3/4 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#EDF4F4] group transition-all duration-300 hover:shadow-2xl">
            <img
              src={PORTFOLIO_ASSETS.heroPortrait}
              alt="Gracelle Villanueva - Virtual Assistant"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
              loading="eager"
            />
            {/* Soft decorative rim gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A4F4E]/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Hand-drawn style decorative arrow overlay towards the name (Desktop only) */}
          <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 w-28 h-28 pointer-events-none text-[#477977]">
            <svg viewBox="0 0 120 100" fill="none" className="w-full h-full">
              <path
                d="M15 85 C 50 95, 80 50, 45 40 C 25 35, 30 75, 75 45 C 90 35, 100 28, 108 22"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M90 18 L 112 20 L 105 40"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Right Column: Hero Typography & Contacts matching PDF Page 1 */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Greeting Pill Tag */}
          <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#E8AF9B] text-white font-medium text-sm sm:text-base tracking-wide shadow-xs transition-transform duration-200 hover:scale-105">
            {PERSONAL_INFO.headline}
          </div>

          {/* Main Name Heading */}
          <div className="space-y-1">
            <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-none tracking-tight text-[#2A4F4E]">
              GRACELLE
            </h1>
            <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-none tracking-tight text-[#2A4F4E]">
              VILLANUEVA
            </h1>
          </div>

          {/* Contact Details List with custom rounded teal icons */}
          <div className="flex flex-col space-y-3 pt-2 w-full max-w-md">
            
            {/* Email */}
            <div className="flex items-center gap-3.5 group text-[#2A4F4E]">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#477977] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#396361] transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-medium text-[#2A4F4E] hover:text-[#477977] transition-colors flex-1 text-left truncate"
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-1.5 text-[#537574] hover:text-[#2A4F4E] hover:bg-[#EEF5F5] rounded-lg transition-colors cursor-pointer"
                title="Copy email"
                aria-label="Copy email"
              >
                {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3.5 group text-[#2A4F4E]">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#477977] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#396361] transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-base sm:text-lg font-medium text-[#2A4F4E] hover:text-[#477977] transition-colors flex-1 text-left"
              >
                {PERSONAL_INFO.phone}
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-1.5 text-[#537574] hover:text-[#2A4F4E] hover:bg-[#EEF5F5] rounded-lg transition-colors cursor-pointer"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3.5 text-[#2A4F4E]">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#477977] text-white flex items-center justify-center shrink-0 shadow-xs">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-base sm:text-lg font-medium text-[#2A4F4E] flex-1 text-left">
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* CTA Button matching the PDF "work with me :)" */}
          <div className="pt-4">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#E8AF9B] hover:bg-[#DE9E88] text-white font-medium text-base sm:text-lg tracking-wide shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{PERSONAL_INFO.ctaText}</span>
              <ArrowDownRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
