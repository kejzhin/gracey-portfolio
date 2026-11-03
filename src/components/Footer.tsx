import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF5EB] border-t border-[#477977]/20 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
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
            <a href="#resume" className="hover:text-[#477977] transition-colors">Resume</a>
            <a href="#testimonials" className="hover:text-[#477977] transition-colors">Reviews</a>
            <a href="#gallery" className="hover:text-[#477977] transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-[#477977] transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <div className="flex items-center gap-4">
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

        {/* Bottom divider with copyright & created by credits */}
        <div className="pt-6 border-t border-[#477977]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#719493] text-center sm:text-left">
          <span>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </span>
          <p className="flex items-center justify-center gap-1.5 text-xs text-[#537574]">
            <span>Created by</span>
            <a
              href="https://www.facebook.com/Kejzhin/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#2A4F4E] hover:text-[#477977] underline underline-offset-2 decoration-[#477977]/40 hover:decoration-[#477977] transition-colors"
            >
              Jeric de los Reyes
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
