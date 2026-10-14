import React, { useState } from 'react';
import { TOOLS_LIST } from '../data/portfolioData';
import { ToolIcon } from './ToolIcon';

export const ToolsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeTooltipTool, setActiveTooltipTool] = useState<string | null>(null);

  const categories = ['All', 'Productivity', 'CRM & Sales', 'Finance', 'Communication', 'Property'];

  const filteredTools = selectedFilter === 'All'
    ? TOOLS_LIST
    : TOOLS_LIST.filter((t) => t.category === selectedFilter);

  return (
    <section id="tools" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#477977]/10">
      
      {/* Header: Tool Kit in playful organic typography matching PDF Slide 5 */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#2A4F4E] tracking-tight mb-3">
          Tool Kit
        </h2>
        <p className="text-sm sm:text-base text-[#537574] max-w-lg mx-auto">
          Proficient in modern enterprise & small business software for seamless collaboration and task execution.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-[#477977] text-white shadow-xs'
                  : 'bg-white text-[#385B5A] hover:bg-[#EEF5F5] border border-[#477977]/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Tools matching PDF layout (5 columns on desktop, 2-3 on mobile) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {filteredTools.map((tool) => {
          const isSelected = activeTooltipTool === tool.id;

          return (
            <div
              key={tool.id}
              onClick={() => setActiveTooltipTool(isSelected ? null : tool.id)}
              onMouseEnter={() => setActiveTooltipTool(tool.id)}
              onMouseLeave={() => setActiveTooltipTool(null)}
              className="relative flex flex-col items-center justify-center p-5 rounded-2xl bg-white/70 hover:bg-white border border-[#477977]/15 hover:border-[#477977]/40 shadow-2xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center"
            >
              {/* Tool Icon component */}
              <div className="mb-3 transform transition-transform duration-300 group-hover:scale-110">
                <ToolIcon type={tool.iconType} className="w-14 h-14" />
              </div>

              {/* Tool Name */}
              <span className="font-display font-semibold text-sm sm:text-base text-[#2A4F4E] group-hover:text-[#477977] transition-colors leading-tight">
                {tool.name}
              </span>

              {/* Category Subtext */}
              <span className="text-[11px] text-[#719493] mt-1 font-medium">
                {tool.category}
              </span>

              {/* Interactive Tooltip / Detail popover */}
              {isSelected && (
                <div className="absolute -top-16 inset-x-0 mx-auto w-48 p-2.5 rounded-xl bg-[#2A4F4E] text-white text-[11px] leading-snug shadow-xl z-20 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                  <span className="font-semibold block text-[#E8AF9B] mb-0.5">{tool.name}</span>
                  {tool.description}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#2A4F4E]" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom quick summary strip */}
      <div className="mt-12 text-center text-xs text-[#537574]">
        Quick to adopt client-specific tech stacks, project portals, and internal workflows.
      </div>

    </section>
  );
};
