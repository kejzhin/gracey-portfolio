/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ToolsSection } from './components/ToolsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // ScrollSpy to track active section
  useEffect(() => {
    const sectionIds = ['home', 'skills', 'services', 'tools', 'testimonials', 'gallery', 'contact'];
    
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

  return (
    <div className="min-h-screen bg-[#FAF5EB] text-[#2A4F4E] flex flex-col font-sans selection:bg-[#E8AF9B]/30 selection:text-[#2A4F4E]">
      
      {/* Top Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero & About Me unified beside the portrait */}
        <HeroSection />

        {/* Skills & Expertise */}
        <SkillsSection />

        {/* Services Offered */}
        <ServicesSection />

        {/* Tool Kit */}
        <ToolsSection />

        {/* Client Feedback & Reviews */}
        <TestimonialsSection />

        {/* Gallery */}
        <GallerySection />

        {/* Contact & "Let's Work Together" */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
