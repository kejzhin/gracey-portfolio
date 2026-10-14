/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ToolsSection } from './components/ToolsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // ScrollSpy to track active section
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'services', 'tools', 'testimonials', 'gallery', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5EB] text-[#2A4F4E] flex flex-col font-sans selection:bg-[#E8AF9B]/30 selection:text-[#2A4F4E]">
      
      {/* Top Navigation Bar with exact PDF layout and search pill */}
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Page 1: Hero */}
        <HeroSection />

        {/* Page 2: About Me */}
        <AboutSection />

        {/* Page 3: Skills & Expertise */}
        <SkillsSection />

        {/* Page 4: Services Offered */}
        <ServicesSection />

        {/* Page 5: Tool Kit */}
        <ToolsSection />

        {/* Page 6: Client Feedback & Reviews */}
        <TestimonialsSection />

        {/* Page 7: Gallery */}
        <GallerySection />

        {/* Page 8: Contact & "Let's Work Together" */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigateToSection}
      />

    </div>
  );
}
