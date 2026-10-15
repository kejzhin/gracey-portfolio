import React from 'react';
import { Clock, Mail, MessageSquare, Users, Settings } from 'lucide-react';
import { SKILLS_LIST } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'clock':
        return <Clock className="w-5 h-5 text-[#477977]" />;
      case 'mail':
        return <Mail className="w-5 h-5 text-[#477977]" />;
      case 'chat':
        return <MessageSquare className="w-5 h-5 text-[#477977]" />;
      case 'users':
        return <Users className="w-5 h-5 text-[#477977]" />;
      case 'gear':
        return <Settings className="w-5 h-5 text-[#477977]" />;
      default:
        return <Clock className="w-5 h-5 text-[#477977]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#477977]/10">
      
      <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#2A4F4E] tracking-tight mb-16 text-center">
        SKILLS & EXPERTISE
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {SKILLS_LIST.map((skill) => (
          <div key={skill.id} className="flex flex-col gap-3 group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#EEF5F5] rounded-lg">
                {getIcon(skill.iconName)}
              </div>
              <h3 className="font-display font-bold text-lg text-[#2A4F4E] tracking-tight">
                {skill.title}
              </h3>
            </div>
            <p className="text-sm text-[#537574] leading-relaxed pl-[44px]">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
