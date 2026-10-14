import React, { useState } from 'react';
import { Clock, Mail, MessageSquare, Users, Settings, ChevronRight } from 'lucide-react';
import { SKILLS_LIST, PORTFOLIO_ASSETS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeSkillId, setActiveSkillId] = useState<string | null>(SKILLS_LIST[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'clock':
        return <Clock className="w-6 h-6 stroke-[2.2]" />;
      case 'mail':
        return <Mail className="w-6 h-6 stroke-[2.2]" />;
      case 'chat':
        return <MessageSquare className="w-6 h-6 stroke-[2.2]" />;
      case 'users':
        return <Users className="w-6 h-6 stroke-[2.2]" />;
      case 'gear':
        return <Settings className="w-6 h-6 stroke-[2.2]" />;
      default:
        return <Clock className="w-6 h-6" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#477977]/10">
      
      {/* Section Header with vertical indicator */}
      <div className="flex items-center gap-3 mb-10 md:mb-14">
        <div className="w-1.5 h-8 sm:h-10 bg-[#477977] rounded-full" />
        <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#2A4F4E] tracking-tight">
          SKILLS AND EXPERTISE
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: 5 Skill Items with circular teal icons */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-5">
          {SKILLS_LIST.map((skill) => {
            const isSelected = activeSkillId === skill.id;
            return (
              <div
                key={skill.id}
                onClick={() => setActiveSkillId(isSelected ? null : skill.id)}
                className={`p-3.5 sm:p-4 rounded-2xl transition-all duration-200 cursor-pointer border flex items-start gap-4 ${
                  isSelected
                    ? 'bg-white shadow-md border-[#477977]/40 scale-101'
                    : 'bg-white/60 hover:bg-white border-[#477977]/15 hover:border-[#477977]/30'
                }`}
              >
                {/* Circular Teal Icon matching Slide 3 */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#477977] bg-[#EEF5F5] text-[#477977] flex items-center justify-center shrink-0 shadow-2xs">
                  {getIcon(skill.iconName)}
                </div>

                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-semibold text-base sm:text-lg text-[#2A4F4E] leading-snug">
                      {skill.title}
                    </h3>
                    <ChevronRight 
                      className={`w-4 h-4 text-[#477977] shrink-0 transition-transform duration-200 ${
                        isSelected ? 'rotate-90' : ''
                      }`} 
                    />
                  </div>
                  
                  {/* Expandable detail description */}
                  {isSelected && (
                    <p className="mt-2 text-xs sm:text-sm text-[#537574] leading-relaxed animate-in fade-in duration-200">
                      {skill.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Retro Browser/OS Window Frame matching Slide 3 */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border-2 border-[#477977]/30 overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
            
            {/* Window Title Bar with 3 circular control dots */}
            <div className="bg-[#FAF5EB] px-4 py-3 border-b border-[#477977]/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full border-2 border-[#E8AF9B] bg-white inline-block" />
                <span className="w-3.5 h-3.5 rounded-full border-2 border-[#F6C358] bg-white inline-block" />
                <span className="w-3.5 h-3.5 rounded-full border-2 border-[#477977] bg-white inline-block" />
              </div>
              <span className="text-xs font-mono text-[#537574]">workspace.app</span>
              <div className="w-10" />
            </div>

            {/* Photo Container */}
            <div className="relative aspect-4/3 bg-[#EDF4F4] overflow-hidden group">
              <img
                src={PORTFOLIO_ASSETS.workingCafe}
                alt="Gracelle Villanueva working efficiently on laptop"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white text-xs">
                <span>Focused administrative task execution & remote ops</span>
              </div>
            </div>

            {/* Bottom Window Frame & Scroll Bar Simulation matching Slide 3 */}
            <div className="bg-[#FAF5EB] border-t border-[#477977]/20 px-3 py-2 flex items-center justify-between text-[#477977] text-xs">
              <div className="w-4 h-4 border border-[#477977]/40 flex items-center justify-center rounded-xs bg-white text-[10px]">
                ◀
              </div>
              {/* Pink/peach accent scroll track from PDF slide 3 */}
              <div className="flex-1 mx-3 h-2 bg-[#F3D5CA] rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-[#E8AF9B] rounded-full" />
              </div>
              <div className="w-4 h-4 border border-[#477977]/40 flex items-center justify-center rounded-xs bg-white text-[10px]">
                ▶
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
