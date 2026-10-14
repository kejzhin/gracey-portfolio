import React, { useState } from 'react';
import { Maximize2, X, Sparkles, ExternalLink } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/portfolioData';
import { GalleryItem } from '../types/portfolio';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#477977]/10">
      
      {/* Header matching PDF Slide 7 */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#2A4F4E] tracking-tight mb-3">
          GALLERY
        </h2>
        <p className="text-sm sm:text-base text-[#537574] max-w-xl mx-auto">
          Sample creative marketing assets, social media graphics, and promotional layouts produced for client brand campaigns.
        </p>
      </div>

      {/* 4 Gallery Cards matching Slide 7 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative bg-white rounded-2xl overflow-hidden border border-[#477977]/20 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col"
          >
            {/* Image Container with 1:1 Aspect Ratio */}
            <div className="relative aspect-square overflow-hidden bg-[#E2DDD5]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Scrim */}
              <div className="absolute inset-0 bg-[#2A4F4E]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-4 text-white text-center">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center mb-2">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase">View Design</span>
              </div>
            </div>

            {/* Bottom Caption Box */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#E8AF9B] block mb-1">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-sm text-[#2A4F4E] group-hover:text-[#477977] transition-colors leading-snug line-clamp-2">
                  {item.title}
                </h3>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#F3ECE1] flex items-center justify-between text-xs text-[#537574]">
                <span>{item.subtitle}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#477977] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-[#FAF5EB] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border-2 border-[#477977]/30 flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="md:w-1/2 aspect-square md:aspect-auto bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#E8AF9B]">
                    {selectedItem.category}
                  </span>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="p-1 rounded-lg text-[#537574] hover:text-[#2A4F4E] hover:bg-[#EEF5F5] transition-colors cursor-pointer"
                    aria-label="Close dialog"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#2A4F4E] mb-2 leading-tight">
                  {selectedItem.title}
                </h3>
                
                <p className="text-sm text-[#477977] font-medium mb-4">
                  {selectedItem.subtitle}
                </p>

                <p className="text-sm text-[#385B5A] leading-relaxed mb-5">
                  {selectedItem.caption}
                </p>

                <div className="space-y-3 pt-3 border-t border-[#D8E7E6]">
                  <div>
                    <span className="text-xs font-semibold text-[#537574] block mb-1">
                      Tags & Skillset:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedItem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs bg-white text-[#2A4F4E] border border-[#477977]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedItem.specs && (
                    <div className="text-xs text-[#537574]">
                      <span className="font-semibold text-[#2A4F4E]">Format: </span>
                      {selectedItem.specs}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D8E7E6] flex items-center justify-between">
                <span className="text-xs text-[#719493]">
                  Bloom Coffee Co. Marketing Campaign
                </span>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#477977] text-white hover:bg-[#396361] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
