import React, { useState } from 'react';
import { Menu, SkipBack, SkipForward, Repeat, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PORTFOLIO_ASSETS } from '../data/portfolioData';

const PLAYER_IMAGES = [
  {
    url: PORTFOLIO_ASSETS.aboutOutdoor,
    caption: 'Gracelle Villanueva — Bell Garden Retreat',
    tag: 'Moments'
  },
  {
    url: PORTFOLIO_ASSETS.workingCafe,
    caption: 'Focused Remote Workflow & Productivity',
    tag: 'Deep Work'
  },
  {
    url: PORTFOLIO_ASSETS.heroPortrait,
    caption: 'Professional Academic & VA Milestones',
    tag: 'Profile'
  }
];

export const AboutSection: React.FC = () => {
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleNext = () => {
    setCurrentPhotoIdx((prev) => (prev + 1) % PLAYER_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentPhotoIdx((prev) => (prev - 1 + PLAYER_IMAGES.length) % PLAYER_IMAGES.length);
  };

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#477977]/10">
      
      {/* Section Header with vertical bar indicator */}
      <div className="flex items-center gap-3 mb-10 md:mb-14">
        <div className="w-1.5 h-8 sm:h-10 bg-[#477977] rounded-full" />
        <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#2A4F4E] tracking-tight">
          ABOUT ME
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Narrative Copy */}
        <div className="lg:col-span-6 space-y-6 text-[#2A4F4E]">
          <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed font-normal">
            {PERSONAL_INFO.aboutSummary[0]}
          </p>

          <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed font-normal text-[#385B5A]">
            {PERSONAL_INFO.aboutSummary[1]}
          </p>

          {/* Core industries badges */}
          <div className="pt-2">
            <span className="text-xs uppercase tracking-wider text-[#537574] font-semibold block mb-2">
              Industry Experience
            </span>
            <div className="flex flex-wrap gap-2 text-sm">
              {['Real Estate & Property', 'Education & Coaching', 'Insurance Services', 'Executive Operations'].map((ind) => (
                <span
                  key={ind}
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-[#477977]/25 text-[#2A4F4E] font-medium shadow-2xs"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Retro Media Player Widget matching Slide 2 */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border-2 border-[#477977]/30 overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
            
            {/* Player Top Banner: GRACELLE VILLANUEVA */}
            <div className="bg-[#477977] text-white px-5 py-3 text-center">
              <span className="font-display font-bold text-base sm:text-lg tracking-wider">
                GRACELLE VILLANUEVA
              </span>
            </div>

            {/* Sub-bar: VIRTUAL ASSISTANT with menu toggle */}
            <div className="bg-[#F8EFEA] border-y border-[#477977]/20 px-4 py-2 flex items-center justify-between text-[#2A4F4E]">
              <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#2A4F4E]">
                <Sparkles className="w-3.5 h-3.5 text-[#E8AF9B]" />
                <span>VIRTUAL ASSISTANT</span>
              </div>
              <div className="p-1 rounded text-[#477977] hover:bg-white/60 transition-colors cursor-pointer">
                <Menu className="w-4 h-4" />
              </div>
            </div>

            {/* Photo Screen */}
            <div className="relative aspect-4/3 bg-[#EDF4F4] overflow-hidden group">
              <img
                src={PLAYER_IMAGES[currentPhotoIdx].url}
                alt={PLAYER_IMAGES[currentPhotoIdx].caption}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-103"
              />
              
              {/* Photo Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 text-white flex items-center justify-between text-xs">
                <span className="truncate pr-2 font-medium">
                  {PLAYER_IMAGES[currentPhotoIdx].caption}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-xs font-mono text-[10px] shrink-0">
                  {currentPhotoIdx + 1} / {PLAYER_IMAGES.length}
                </span>
              </div>
            </div>

            {/* Retro Player Controls Bar matching PDF */}
            <div className="bg-[#FAF5EB] px-6 py-4 flex items-center justify-between text-[#477977]">
              
              {/* Previous */}
              <button
                onClick={handlePrev}
                className="p-2 rounded-full hover:bg-[#EEF5F5] hover:text-[#2A4F4E] transition-colors cursor-pointer"
                title="Previous photo"
                aria-label="Previous photo"
              >
                <SkipBack className="w-5 h-5 fill-current" />
              </button>

              {/* Next */}
              <button
                onClick={handleNext}
                className="p-2 rounded-full hover:bg-[#EEF5F5] hover:text-[#2A4F4E] transition-colors cursor-pointer"
                title="Next photo"
                aria-label="Next photo"
              >
                <SkipForward className="w-5 h-5 fill-current" />
              </button>

              {/* Loop / Repeat */}
              <button
                onClick={() => setIsLooping(!isLooping)}
                className={`p-2 rounded-full transition-colors cursor-pointer ${
                  isLooping ? 'bg-[#477977] text-white' : 'hover:bg-[#EEF5F5] hover:text-[#2A4F4E]'
                }`}
                title="Toggle continuous replay"
                aria-label="Toggle continuous replay"
              >
                <Repeat className="w-5 h-5" />
              </button>

              {/* Sound / Volume */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-2 rounded-full transition-colors cursor-pointer ${
                  isMuted ? 'text-slate-400 hover:text-slate-600' : 'hover:bg-[#EEF5F5] hover:text-[#2A4F4E]'
                }`}
                title={isMuted ? 'Unmute' : 'Mute'}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
