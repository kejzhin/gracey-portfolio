import React from 'react';

interface ToolIconProps {
  type: string;
  className?: string;
}

export const ToolIcon: React.FC<ToolIconProps> = ({ type, className = 'w-10 h-10' }) => {
  switch (type) {
    case 'google':
      // Google Suite colorful G
      return (
        <div className={`flex items-center justify-center rounded-full bg-white shadow-sm border border-[#E2DDD5] p-2 ${className}`}>
          <svg viewBox="0 0 48 48" className="w-full h-full">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
        </div>
      );

    case 'appfolio':
      // AppFolio cyan circle with white 'a'
      return (
        <div className={`flex items-center justify-center rounded-full bg-[#00A2D3] text-white font-bold text-2xl shadow-sm ${className}`}>
          <span className="font-sans leading-none transform -translate-y-0.5">a</span>
        </div>
      );

    case 'quickbooks':
      // QuickBooks green circle with 'qb'
      return (
        <div className={`flex items-center justify-center rounded-full bg-[#2CA01C] text-white font-bold text-xl shadow-sm tracking-tighter ${className}`}>
          <span className="font-sans">qb</span>
        </div>
      );

    case 'slack':
      // Slack official 4-color grid
      return (
        <div className={`flex items-center justify-center rounded-xl bg-white shadow-sm border border-[#E2DDD5] p-2 ${className}`}>
          <svg viewBox="0 0 127 127" className="w-full h-full">
            <path d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z" fill="#E01E5A"/>
            <path d="M47 27.2c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.7 39.7.8 47 .8c7.3 0 13.2 5.9 13.2 13.2v13.2H47zm0 6.6c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H14c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33z" fill="#36C5F0"/>
            <path d="M99.8 47c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.8V47zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V14c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33z" fill="#2EB67D"/>
            <path d="M80 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8H80zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80z" fill="#ECB22E"/>
          </svg>
        </div>
      );

    case 'gohighlevel':
      // GoHighLevel navy circle with double upward cyan arrows
      return (
        <div className={`flex items-center justify-center rounded-full bg-[#001D4A] p-2 shadow-sm ${className}`}>
          <div className="flex gap-1 items-end">
            <svg viewBox="0 0 24 24" className="w-4 h-6 text-[#00A3FF]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
            <svg viewBox="0 0 24 24" className="w-4 h-6 text-[#00E5FF]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </div>
        </div>
      );

    case 'notion':
      // Notion classic icon
      return (
        <div className={`flex items-center justify-center rounded-xl bg-white shadow-sm border border-[#E2DDD5] p-2 ${className}`}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-black" fill="currentColor">
            <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.047-.327L17.893 2.1c-.42-.327-1.073-.653-2.193-.56L3.386 2.566c-.373.047-.466.327-.327.56l1.4 1.082zm.84 3.733v12.457c0 .793.42 1.073 1.213 1.026l14.14-.84c.793-.047 1.026-.606 1.026-1.26V6.867c0-.653-.28-.933-.933-.886L5.872 7.007c-.42.047-.573.42-.573.934zm13.167.933c.093.373 0 .746-.373.793l-1.026.186v8.724c-.466.28-.98.42-1.493.42-.84 0-1.26-.28-1.913-1.073l-4.76-7.324v6.858l1.493.327c.373.093.373.466.373.746 0 .28-.187.373-.56.373l-3.36.187c-.373 0-.56-.233-.56-.607 0-.373.187-.653.56-.746l1.167-.28V9.387l-1.447-.14c-.373-.047-.467-.327-.467-.653 0-.327.234-.467.654-.467l3.687-.233 5.04 7.697V9.387l-1.307-.187c-.373-.047-.466-.373-.466-.653 0-.28.187-.467.56-.467l3.78-.186c.373 0 .466.233.466.56z"/>
          </svg>
        </div>
      );

    case 'clickup':
      // ClickUp gradient chevron and dot
      return (
        <div className={`flex items-center justify-center rounded-xl bg-white shadow-sm border border-[#E2DDD5] p-2 ${className}`}>
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path d="M3 17.5l3.5-3c3 3.5 7.5 3.5 10.5 0l3.5 3c-4.5 5-13 5-17.5 0z" fill="#7B68EE"/>
            <path d="M12 4.5l5.5 5.5-2.5 2-3-3-3 3-2.5-2L12 4.5z" fill="#FF005F"/>
          </svg>
        </div>
      );

    case 'ringcentral':
      // RingCentral orange R
      return (
        <div className={`flex items-center justify-center rounded-xl bg-white shadow-sm border border-[#E2DDD5] p-2 ${className}`}>
          <div className="relative flex items-center justify-center font-bold text-2xl text-[#FF6200]">
            <span className="font-display">R</span>
            <span className="absolute -top-1 -right-2 text-xs text-[#0073D1] font-sans">)</span>
          </div>
        </div>
      );

    case 'zoho':
      // Zoho colorful blocks Z O H O
      return (
        <div className={`flex items-center justify-center gap-0.5 rounded-lg bg-white px-2 py-1 shadow-sm border border-[#E2DDD5] ${className}`}>
          <div className="w-4 h-4 bg-[#E42528] rounded text-white flex items-center justify-center font-bold text-[10px]">Z</div>
          <div className="w-4 h-4 bg-[#21B573] rounded text-white flex items-center justify-center font-bold text-[10px]">O</div>
          <div className="w-4 h-4 bg-[#1070CA] rounded text-white flex items-center justify-center font-bold text-[10px]">H</div>
          <div className="w-4 h-4 bg-[#FFB600] rounded text-white flex items-center justify-center font-bold text-[10px]">O</div>
        </div>
      );

    case 'hubspot':
      // HubSpot orange sprocket
      return (
        <div className={`flex items-center justify-center rounded-full bg-white shadow-sm border border-[#E2DDD5] p-2 ${className}`}>
          <svg viewBox="0 0 24 24" className="w-full h-full" fill="#FF7A59">
            <path d="M17.5 10.5V7.7a2.2 2.2 0 10-2 0v2.8a5 5 0 00-3.2 2.1l-4.5-2.6a2.2 2.2 0 10-1.1 1.7l4.4 2.5a5 5 0 000 3.6l-4.4 2.5a2.2 2.2 0 101.1 1.7l4.5-2.6a5 5 0 105.2-9.4zm-1-3a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM5.3 9a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4zm0 8.4a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4zm11.2.6a3 3 0 110-6 3 3 0 010 6z"/>
          </svg>
        </div>
      );

    default:
      return (
        <div className={`flex items-center justify-center rounded-xl bg-[#477977] text-white font-bold ${className}`}>
          {type.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
