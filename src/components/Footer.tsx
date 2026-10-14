import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF5EB] border-t border-[#477977]/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand identity */}
        <div>
          <h3 className="font-display font-bold text-xl text-[#2A4F4E]">
            {PERSONAL_INFO.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#537574] mt-1">
            Executive Virtual Assistant · {PERSONAL_INFO.city}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-[#385B5A]">
          <a href="#home" className="hover:text-[#477977] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#477977] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#477977] transition-colors">Skills</a>
          <a href="#services" className="hover:text-[#477977] transition-colors">Services</a>
          <a href="#tools" className="hover:text-[#477977] transition-colors">Tools</a>
          <a href="#testimonials" className="hover:text-[#477977] transition-colors">Reviews</a>
          <a href="#gallery" className="hover:text-[#477977] transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-[#477977] transition-colors">Contact</a>
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-[#719493]">
            © {new Date().getFullYear()} Gracelle Villanueva
          </span>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white border border-[#477977]/30 text-[#477977] hover:bg-[#EEF5F5] hover:text-[#2A4F4E] flex items-center justify-center transition-all shadow-2xs hover:shadow-xs cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
