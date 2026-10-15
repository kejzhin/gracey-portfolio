import React from 'react';
import { Clock, Mail, MessageSquare, Users, Settings } from 'lucide-react';
import { SKILLS_LIST } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
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
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#477977]/10">
      
      {/* Section Header with vertical indicator */}
      <div className="flex items-center gap-3.5 mb-10 md:mb-14">
        <div className="w-1.5 h-8 sm:h-10 bg-[#477977] rounded-full shrink-0" />
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#2A4F4E] tracking-tight">
          SKILLS AND EXPERTISE
        </h2>
      </div>

      {/* Skill List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS_LIST.map((skill) => {
          return (
            <div
              key={skill.id}
              className="bg-white/85 hover:bg-white rounded-3xl p-6 border-2 border-[#477977]/20 hover:border-[#477977]/55 shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-start gap-5 group"
            >
              {/* Peach Background Icon Badge */}
              <div className="w-13 h-13 shrink-0 rounded-2xl border-2 border-[#2A4F4E]/25 bg-[#ECCEC0] text-[#2A4F4E] flex items-center justify-center shadow-2xs group-hover:bg-[#2A4F4E] group-hover:text-white transition-colors duration-200">
                {getIcon(skill.iconName)}
              </div>

              {/* Skill Title and Content */}
              <div className="flex-1">
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#2A4F4E] leading-snug mb-1">
                  {skill.title}
                </h3>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#719493]">
                  Core Competency
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
