import React, { useState } from 'react';
import { 
  Sparkles,
  Wrench,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { ToolIcon } from './ToolIcon';

interface FlatTool {
  name: string;
  category: string;
  categoryId: string;
}

const ALL_TOOLS: FlatTool[] = [
  // Google Workspace
  { name: 'Gmail', category: 'Google Workspace', categoryId: 'google-workspace' },
  { name: 'Calendar', category: 'Google Workspace', categoryId: 'google-workspace' },
  { name: 'Docs', category: 'Google Workspace', categoryId: 'google-workspace' },
  { name: 'Sheets', category: 'Google Workspace', categoryId: 'google-workspace' },
  { name: 'Slides', category: 'Google Workspace', categoryId: 'google-workspace' },
  { name: 'Forms', category: 'Google Workspace', categoryId: 'google-workspace' },
  { name: 'Drive', category: 'Google Workspace', categoryId: 'google-workspace' },
  { name: 'Meet', category: 'Google Workspace', categoryId: 'google-workspace' },
  { name: 'Chat', category: 'Google Workspace', categoryId: 'google-workspace' },

  // Property Management
  { name: 'AppFolio', category: 'Property Management', categoryId: 'property-management' },
  { name: 'Buildium', category: 'Property Management', categoryId: 'property-management' },
  { name: 'Rent Manager', category: 'Property Management', categoryId: 'property-management' },
  { name: 'DoorLoop', category: 'Property Management', categoryId: 'property-management' },
  { name: 'Stessa', category: 'Property Management', categoryId: 'property-management' },

  // Communication & Meetings
  { name: 'Slack', category: 'Communication', categoryId: 'communication' },
  { name: 'Microsoft Teams', category: 'Communication', categoryId: 'communication' },
  { name: 'Discord', category: 'Communication', categoryId: 'communication' },
  { name: 'Front', category: 'Communication', categoryId: 'communication' },
  { name: 'WhatsApp', category: 'Communication', categoryId: 'communication' },
  { name: 'Zoom', category: 'Communication', categoryId: 'communication' },
  { name: 'RingCentral', category: 'Communication', categoryId: 'communication' },

  // Project Management
  { name: 'Notion', category: 'Project Management', categoryId: 'project-management' },
  { name: 'Trello', category: 'Project Management', categoryId: 'project-management' },
  { name: 'Asana', category: 'Project Management', categoryId: 'project-management' },
  { name: 'Monday.com', category: 'Project Management', categoryId: 'project-management' },
  { name: 'ClickUp', category: 'Project Management', categoryId: 'project-management' },

  // CRM & Sales
  { name: 'HubSpot', category: 'CRM & Sales', categoryId: 'crm' },
  { name: 'Zoho CRM', category: 'CRM & Sales', categoryId: 'crm' },
  { name: 'GoHighLevel', category: 'CRM & Sales', categoryId: 'crm' },
  { name: 'Pylon', category: 'CRM & Sales', categoryId: 'crm' },

  // Finance & Bookkeeping
  { name: 'QuickBooks', category: 'Finance', categoryId: 'finance' },
  { name: 'Xero', category: 'Finance', categoryId: 'finance' },
  { name: 'Zoho Expense', category: 'Finance', categoryId: 'finance' },

  // AI & Transcription
  { name: 'ChatGPT', category: 'AI & Transcription', categoryId: 'ai' },
  { name: 'Claude', category: 'AI & Transcription', categoryId: 'ai' },
  { name: 'Gemini', category: 'AI & Transcription', categoryId: 'ai' },
  { name: 'Otter.ai', category: 'AI & Transcription', categoryId: 'ai' },
  { name: 'Fireflies', category: 'AI & Transcription', categoryId: 'ai' },

  // Marketing & Design
  { name: 'Canva', category: 'Marketing & Design', categoryId: 'marketing' },
  { name: 'Mailchimp', category: 'Marketing & Design', categoryId: 'marketing' },
  { name: 'Hootsuite', category: 'Marketing & Design', categoryId: 'marketing' },

  // Scheduling & E-Signatures
  { name: 'Calendly', category: 'Scheduling', categoryId: 'scheduling' },
  { name: 'Acuity', category: 'Scheduling', categoryId: 'scheduling' },
  { name: 'DocuSign', category: 'Scheduling', categoryId: 'scheduling' },
  { name: 'PandaDoc', category: 'Scheduling', categoryId: 'scheduling' },
  { name: 'Adobe Acrobat', category: 'Scheduling', categoryId: 'scheduling' }
];

const CATEGORIES = [
  { id: 'all', name: 'All Tools', count: ALL_TOOLS.length },
  { id: 'google-workspace', name: 'Google Workspace', count: ALL_TOOLS.filter(t => t.categoryId === 'google-workspace').length },
  { id: 'property-management', name: 'Property Management', count: ALL_TOOLS.filter(t => t.categoryId === 'property-management').length },
  { id: 'communication', name: 'Communication', count: ALL_TOOLS.filter(t => t.categoryId === 'communication').length },
  { id: 'project-management', name: 'Project Management', count: ALL_TOOLS.filter(t => t.categoryId === 'project-management').length },
  { id: 'crm', name: 'CRM & Sales', count: ALL_TOOLS.filter(t => t.categoryId === 'crm').length },
  { id: 'finance', name: 'Finance', count: ALL_TOOLS.filter(t => t.categoryId === 'finance').length },
  { id: 'ai', name: 'AI & Transcription', count: ALL_TOOLS.filter(t => t.categoryId === 'ai').length },
  { id: 'marketing', name: 'Marketing & Design', count: ALL_TOOLS.filter(t => t.categoryId === 'marketing').length },
  { id: 'scheduling', name: 'Scheduling & E-Sign', count: ALL_TOOLS.filter(t => t.categoryId === 'scheduling').length }
];

export const ToolsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTools = ALL_TOOLS.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.categoryId === selectedCategory;
    const matchesSearch = !searchQuery.trim() || 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tools" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#477977]/15">
      
      {/* Header */}
      <div className="text-center mb-12 relative">
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-[#2A4F4E] tracking-tight mb-8">
          Tool kit & Stack
        </h2>

        {/* Category Filter Pills - Horizontally Scrollable */}
        <div className="flex flex-nowrap items-center justify-start gap-2 overflow-x-auto pb-4 scroll-smooth snap-x">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs whitespace-nowrap snap-start ${
                selectedCategory === cat.id
                  ? 'bg-[#2A4F4E] text-white shadow-md scale-105'
                  : 'bg-white text-[#385B5A] hover:bg-[#EEF5F5] border border-[#477977]/20'
              }`}
            >
              {cat.name} <span className="opacity-70 ml-1">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Individual Tool Cards */}
      {filteredTools.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-[#477977]/30 max-w-md mx-auto shadow-sm">
          <Wrench className="w-10 h-10 text-[#477977]/40 mx-auto mb-3" />
          <h3 className="font-display font-bold text-lg text-[#2A4F4E] mb-1">
            No tools found matching "{searchQuery}"
          </h3>
          <p className="text-xs text-[#537574] mb-5 px-4">
            Gracelle quickly adapts to any custom or proprietary software.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="px-5 py-2.5 rounded-xl bg-[#2A4F4E] text-white text-xs font-semibold cursor-pointer shadow-sm hover:bg-[#1D3736] transition-all"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {filteredTools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border-2 border-[#477977]/15 hover:border-[#477977]/55 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-center justify-center text-center group cursor-default"
            >
              <ToolIcon type={tool.name} className="w-14 h-14 shrink-0 shadow-sm mb-3.5 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="font-display font-bold text-sm sm:text-base text-[#2A4F4E] tracking-tight group-hover:text-[#477977] transition-colors">
                {tool.name}
              </h3>
            </div>
          ))}
        </div>
      )}

    </section>
  );
};
