import React from 'react';

interface ToolIconProps {
  type: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const DOMAIN_MAP: Record<string, string> = {
  'gmail': 'mail.google.com',
  'calendar': 'calendar.google.com',
  'docs': 'docs.google.com',
  'sheets': 'docs.google.com', // fallback to docs or drive if needed, or spreadsheets.google.com
  'slides': 'docs.google.com',
  'forms': 'docs.google.com',
  'drive': 'drive.google.com',
  'meet': 'meet.google.com',
  'chat': 'chat.google.com',
  'appfolio': 'appfolio.com',
  'buildium': 'buildium.com',
  'rent manager': 'rentmanager.com',
  'doorloop': 'doorloop.com',
  'stessa': 'stessa.com',
  'slack': 'slack.com',
  'microsoft teams': 'microsoft.com',
  'discord': 'discord.com',
  'front': 'front.com',
  'whatsapp': 'whatsapp.com',
  'zoom': 'zoom.us',
  'ringcentral': 'ringcentral.com',
  'notion': 'notion.so',
  'trello': 'trello.com',
  'asana': 'asana.com',
  'monday.com': 'monday.com',
  'clickup': 'clickup.com',
  'hubspot': 'hubspot.com',
  'zoho crm': 'zoho.com',
  'gohighlevel': 'gohighlevel.com',
  'pylon': 'usepylon.com',
  'quickbooks': 'quickbooks.intuit.com',
  'xero': 'xero.com',
  'zoho expense': 'zoho.com',
  'chatgpt': 'openai.com',
  'claude': 'anthropic.com',
  'gemini': 'gemini.google.com',
  'otter.ai': 'otter.ai',
  'fireflies': 'fireflies.ai',
  'canva': 'canva.com',
  'mailchimp': 'mailchimp.com',
  'hootsuite': 'hootsuite.com',
  'calendly': 'calendly.com',
  'acuity': 'acuityscheduling.com',
  'docusign': 'docusign.com',
  'pandadoc': 'pandadoc.com',
  'adobe acrobat': 'adobe.com'
};

export const ToolIcon: React.FC<ToolIconProps> = ({ type, className = 'w-10 h-10' }) => {
  const normalized = type.toLowerCase().trim();

  // Hand-crafted high-fidelity SVG brand icons for specific major tools
  if (normalized === 'appfolio') {
    return (
      <div className={`shrink-0 flex items-center justify-center rounded-2xl bg-[#00A2D3] text-white font-bold text-lg shadow-xs ${className}`}>
        <span>a</span>
      </div>
    );
  }

  if (normalized === 'quickbooks') {
    return (
      <div className={`shrink-0 flex items-center justify-center rounded-2xl bg-[#2CA01C] text-white font-bold text-sm shadow-xs ${className}`}>
        <span>qb</span>
      </div>
    );
  }

  if (normalized === 'slack') {
    return (
      <div className={`shrink-0 flex items-center justify-center rounded-2xl bg-white shadow-xs border border-[#477977]/15 p-2 ${className}`}>
        <svg viewBox="0 0 127 127" className="w-full h-full">
          <path d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z" fill="#E01E5A"/>
          <path d="M47 27.2c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.7 39.7.8 47 .8c7.3 0 13.2 5.9 13.2 13.2v13.2H47zm0 6.6c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H14c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33z" fill="#36C5F0"/>
          <path d="M99.8 47c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.8V47zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V14c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33z" fill="#2EB67D"/>
          <path d="M80 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8H80zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80z" fill="#ECB22E"/>
        </svg>
      </div>
    );
  }

  if (normalized === 'notion') {
    return (
      <div className={`shrink-0 flex items-center justify-center rounded-2xl bg-white shadow-xs border border-[#477977]/15 p-2 ${className}`}>
        <svg viewBox="0 0 24 24" className="w-full h-full text-black" fill="currentColor">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.047-.327L17.893 2.1c-.42-.327-1.073-.653-2.193-.56L3.386 2.566c-.373.047-.466.327-.327.56l1.4 1.082zm.84 3.733v12.457c0 .793.42 1.073 1.213 1.026l14.14-.84c.793-.047 1.026-.606 1.026-1.26V6.867c0-.653-.28-.933-.933-.886L5.872 7.007c-.42.047-.573.42-.573.934zm13.167.933c.093.373 0 .746-.373.793l-1.026.186v8.724c-.466.28-.98.42-1.493.42-.84 0-1.26-.28-1.913-1.073l-4.76-7.324v6.858l1.493.327c.373.093.373.466.373.746 0 .28-.187.373-.56.373l-3.36.187c-.373 0-.56-.233-.56-.607 0-.373.187-.653.56-.746l1.167-.28V9.387l-1.447-.14c-.373-.047-.467-.327-.467-.653 0-.327.234-.467.654-.467l3.687-.233 5.04 7.697V9.387l-1.307-.187c-.373-.047-.466-.373-.466-.653 0-.28.187-.467.56-.467l3.78-.186c.373 0 .466.233.466.56z"/>
        </svg>
      </div>
    );
  }

  // Specific high-res icon URLs for Google Apps to guarantee exact distinct individual icons
  const googleAppIcons: Record<string, string> = {
    'gmail': 'https://www.gstatic.com/images/branding/product/1x/gmail_48dp.png',
    'calendar': 'https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png',
    'docs': 'https://www.gstatic.com/images/branding/product/1x/docs_48dp.png',
    'sheets': 'https://www.gstatic.com/images/branding/product/1x/sheets_48dp.png',
    'slides': 'https://www.gstatic.com/images/branding/product/1x/slides_48dp.png',
    'forms': 'https://www.gstatic.com/images/branding/product/1x/forms_48dp.png',
    'drive': 'https://www.gstatic.com/images/branding/product/1x/drive_48dp.png',
    'meet': 'https://www.gstatic.com/images/branding/product/1x/meet_48dp.png',
    'chat': 'https://www.gstatic.com/images/branding/product/1x/chat_48dp.png'
  };

  if (googleAppIcons[normalized]) {
    return (
      <div className={`shrink-0 flex items-center justify-center rounded-2xl bg-white shadow-xs border border-[#477977]/15 p-2 ${className}`}>
        <img src={googleAppIcons[normalized]} alt={type} className="w-full h-full object-contain" />
      </div>
    );
  }

  const domain = DOMAIN_MAP[normalized] || `${normalized.replace(/[^a-z0-9]/g, '')}.com`;
  const iconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  return (
    <div className={`shrink-0 flex items-center justify-center rounded-2xl bg-white shadow-xs border border-[#477977]/15 p-2.5 overflow-hidden ${className}`}>
      <img 
        src={iconUrl} 
        alt={type} 
        className="w-full h-full object-contain"
        onError={(e) => {
          (e.target as HTMLImageElement).src = `https://logo.clearbit.com/${domain}`;
        }}
      />
    </div>
  );
};
