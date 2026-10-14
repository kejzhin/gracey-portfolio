import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, ArrowRight, Wrench, Briefcase, Star, Sparkles } from 'lucide-react';
import { SERVICES_LIST, TOOLS_LIST, TESTIMONIALS_LIST, SKILLS_LIST } from '../data/portfolioData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const matches: Array<{
      id: string;
      title: string;
      snippet: string;
      category: string;
      sectionId: string;
      icon: any;
    }> = [];

    // Search Services
    SERVICES_LIST.forEach((s) => {
      if (
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.deliverables.some((d) => d.toLowerCase().includes(q))
      ) {
        matches.push({
          id: s.id,
          title: s.title,
          snippet: s.description,
          category: 'Service',
          sectionId: 'services',
          icon: Briefcase,
        });
      }
    });

    // Search Tools
    TOOLS_LIST.forEach((t) => {
      if (
        t.name.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
      ) {
        matches.push({
          id: t.id,
          title: t.name,
          snippet: `${t.category} — ${t.description}`,
          category: 'Tool Kit',
          sectionId: 'tools',
          icon: Wrench,
        });
      }
    });

    // Search Skills
    SKILLS_LIST.forEach((sk) => {
      if (sk.title.toLowerCase().includes(q) || sk.description.toLowerCase().includes(q)) {
        matches.push({
          id: sk.id,
          title: sk.title,
          snippet: sk.description,
          category: 'Skill',
          sectionId: 'skills',
          icon: Sparkles,
        });
      }
    });

    // Search Testimonials
    TESTIMONIALS_LIST.forEach((tm) => {
      if (
        tm.client.toLowerCase().includes(q) ||
        tm.quote.toLowerCase().includes(q) ||
        tm.industry.toLowerCase().includes(q)
      ) {
        matches.push({
          id: tm.id,
          title: `Feedback from ${tm.client}`,
          snippet: tm.quote,
          category: 'Review',
          sectionId: 'testimonials',
          icon: Star,
        });
      }
    });

    return matches;
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#FAF5EB] rounded-2xl shadow-2xl border-2 border-[#477977]/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center p-4 border-b border-[#D8E7E6]">
          <Search className="w-5 h-5 text-[#477977] ml-2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skills, tools, services, reviews (e.g., AppFolio, calendar, bookkeeping)..."
            autoFocus
            className="w-full bg-transparent px-4 py-2 text-[#2A4F4E] placeholder-[#719493] text-base focus:outline-hidden"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 hover:bg-[#EEF5F5] rounded-full text-[#477977] transition-colors"
              aria-label="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-2 py-1 text-xs text-[#537574] bg-[#EEF5F5] rounded-md border border-[#D8E7E6]"
            >
              ESC
            </button>
          )}
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <div className="py-8 text-center">
              <p className="text-sm text-[#537574]">
                Type keywords like <span className="font-semibold text-[#2A4F4E]">"QuickBooks"</span>, <span className="font-semibold text-[#2A4F4E]">"Scheduling"</span>, or <span className="font-semibold text-[#2A4F4E]">"Property"</span> to jump directly to sections.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['General Business Admin', 'AppFolio', 'Google Suite', 'Notion', 'Bookkeeping', 'Tacloban City'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1 text-xs rounded-full bg-[#EEF5F5] text-[#2A4F4E] hover:bg-[#D8E7E6] transition-colors border border-[#477977]/20"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            results.map((item) => {
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.sectionId);
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-xl hover:bg-[#EEF5F5] transition-colors group flex items-start gap-3 border border-transparent hover:border-[#477977]/20"
                >
                  <div className="p-2 rounded-lg bg-[#477977]/10 text-[#477977] mt-0.5 shrink-0">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-[#2A4F4E] group-hover:text-[#1F3D3C]">
                        {item.title}
                      </span>
                      <span className="text-[11px] uppercase tracking-wider text-[#537574] font-medium bg-[#FAF5EB] px-2 py-0.5 rounded-full border border-[#D8E7E6]">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-[#537574] line-clamp-2 mt-1">
                      {item.snippet}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#477977] opacity-0 group-hover:opacity-100 transition-opacity self-center shrink-0" />
                </button>
              );
            })
          ) : (
            <div className="py-8 text-center text-[#537574]">
              No matches found for <span className="font-semibold text-[#2A4F4E]">"{query}"</span>. Try searching for "Admin", "Calendar", or "Services".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
