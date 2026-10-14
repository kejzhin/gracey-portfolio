import { ServiceItem, SkillItem, ToolItem, TestimonialItem, GalleryItem } from '../types/portfolio';

// Local high-fidelity generated images matching the PDF slides
export const PORTFOLIO_ASSETS = {
  heroPortrait: '/src/assets/images/gracelle_hero_portrait_1792015175406.jpg',
  aboutOutdoor: '/src/assets/images/gracelle_about_outdoor_1792015176197.jpg',
  workingCafe: '/src/assets/images/gracelle_working_cafe_1792015176643.jpg',
  galleryCoffeeArt: '/src/assets/images/gallery_coffee_art_1792015176302.jpg',
  galleryCoffeeIced: '/src/assets/images/gallery_coffee_iced_1792015176107.jpg',
};

export const PERSONAL_INFO = {
  name: 'GRACELLE VILLANUEVA',
  nickname: 'Gracey',
  title: 'Virtual Assistant',
  headline: 'Hi! I am a Virtual Assistant!',
  email: 'vagracey1@gmail.com',
  phone: '+639958850127',
  displayPhone: '+63 995 885 0127',
  location: 'Philippines',
  city: 'Tacloban City, Philippines',
  ctaText: 'work with me :)',
  experienceHighlights: [
    'Administrative Operations',
    'Executive Calendar Management',
    'Real Estate & Property Management',
    'Social Media & Graphic Design',
    'Financial Bookkeeping'
  ],
  aboutSummary: [
    "Hi!! I am an experienced administrative assistant working with business owners in industries like real estate, education, and insurance. I've honed my skills in managing schedules, handling emails, and ensuring smooth day-to-day operations. Highly organized with extensive experience in scheduling, calendar management and executive support.",
    "Let's connect and discuss how I can contribute to your success as a Virtual Assistant. I look forward to the opportunity to work together and make a positive impact to your business."
  ]
};

export const SKILLS_LIST: SkillItem[] = [
  {
    id: 'skill-1',
    title: 'Excellent organizational and time management abilities',
    iconName: 'clock',
    description: 'Prioritizing critical tasks, managing executive deadlines, and establishing streamlined operational rhythms.'
  },
  {
    id: 'skill-2',
    title: 'Email management, scheduling and data entry',
    iconName: 'mail',
    description: 'Inbox zero triage, multi-timezone calendar scheduling, CRM maintenance, and accurate record keeping.'
  },
  {
    id: 'skill-3',
    title: 'Strong communication and interpersonal skills',
    iconName: 'chat',
    description: 'Liaising with stakeholders, clients, and team members with warmth, promptness, and professional clarity.'
  },
  {
    id: 'skill-4',
    title: 'Sourcing, recruiting, onboarding and employer management',
    iconName: 'users',
    description: 'Candidate filtering, interview coordination, new-hire onboarding checklists, and team documentation.'
  },
  {
    id: 'skill-5',
    title: 'Proactive problem solving and troubleshooting',
    iconName: 'gear',
    description: 'Anticipating administrative bottlenecks, finding independent solutions, and creating repeatable SOPs.'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'general-business-admin',
    title: 'GENERAL BUSINESS ADMIN',
    description: 'Efficiently managing daily business operations, including document handling, data entry and workflow optimization ensuring your business runs smoothly and stays organized.',
    barColor: 'teal',
    category: 'Operations',
    deliverables: [
      'Daily inbox triage & customer responses',
      'Complex calendar & multi-timezone scheduling',
      'Document formatting, archiving & data entry',
      'Standard Operating Procedure (SOP) documentation'
    ]
  },
  {
    id: 'social-media-management',
    title: 'SOCIAL MEDIA MANAGEMENT',
    description: "Enhance your online presence by creating, scheduling, and engaging with content across social media platforms, tailored to reflect your brand's voice and goals.",
    barColor: 'teal',
    category: 'Marketing',
    deliverables: [
      'Social content planning & monthly scheduling',
      'Community engagement & direct message handling',
      'Hashtag & industry trend research',
      'Performance analytics & engagement reports'
    ]
  },
  {
    id: 'bookkeeping',
    title: 'BOOKKEEPING',
    description: 'Maintain accurate financial records by managing accounts payable and receivable, tracking expenses and preparing financial reports to keep your finances in order.',
    barColor: 'peach',
    category: 'Finance',
    deliverables: [
      'Accounts payable and receivable logging',
      'Monthly expense tracking & receipt reconciliation',
      'Client invoice generation & follow-ups',
      'Clear, formatted weekly financial summaries'
    ]
  },
  {
    id: 'graphic-designing',
    title: 'GRAPHIC DESIGNING',
    description: 'Create visually appealing designs for marketing materials, social media, and branding, tailored to effectively communicate your message and capture your audiences attention.',
    barColor: 'peach',
    category: 'Creative',
    deliverables: [
      'Custom social media feed & story graphics',
      'Promotional banners, flyers & print materials',
      'Slide decks & presentation templates',
      'Brand guideline alignment & typography styling'
    ]
  },
  {
    id: 'property-management',
    title: 'PROPERTY MANAGEMENT',
    description: 'Comprehensive property management services, overseeing operations, utilities, billing, and project coordination with a focus on efficiency and transparency.',
    barColor: 'teal',
    category: 'Real Estate',
    deliverables: [
      'AppFolio tenant & lease records coordination',
      'Utility tracking, vendor dispatch & maintenance logs',
      'Rent collection logs & tenant communications',
      'Move-in / move-out administrative checklists'
    ]
  }
];

export const TOOLS_LIST: ToolItem[] = [
  {
    id: 'google-suite',
    name: 'Google Suite',
    category: 'Productivity',
    description: 'Docs, Sheets, Drive, Gmail, and Google Calendar for seamless daily collaboration.',
    badgeColor: '#4285F4',
    iconType: 'google'
  },
  {
    id: 'appfolio',
    name: 'AppFolio',
    category: 'Property',
    description: 'Comprehensive real estate property management, tenant accounts, and maintenance tracking.',
    badgeColor: '#0096D6',
    iconType: 'appfolio'
  },
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    category: 'Finance',
    description: 'Bookkeeping, expense categorization, financial reporting, and invoice generation.',
    badgeColor: '#2CA01C',
    iconType: 'quickbooks'
  },
  {
    id: 'slack',
    name: 'Slack',
    category: 'Communication',
    description: 'Real-time asynchronous team communication, channel coordination, and bot updates.',
    badgeColor: '#4A154B',
    iconType: 'slack'
  },
  {
    id: 'gohighlevel',
    name: 'GoHigh Level',
    category: 'CRM & Sales',
    description: 'Marketing automation, sales funnel pipelines, client follow-up sequences, and CRM.',
    badgeColor: '#1A56DB',
    iconType: 'gohighlevel'
  },
  {
    id: 'notion',
    name: 'Notion',
    category: 'Productivity',
    description: 'Centralized company wikis, SOP repositories, client dashboards, and project trackers.',
    badgeColor: '#000000',
    iconType: 'notion'
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    category: 'Productivity',
    description: 'Task assignments, sprint tracking, workflow automation, and executive progress boards.',
    badgeColor: '#7B68EE',
    iconType: 'clickup'
  },
  {
    id: 'ringcentral',
    name: 'Ring Central',
    category: 'Communication',
    description: 'Business telephony, incoming call triage, SMS support, and voice message routing.',
    badgeColor: '#FF6200',
    iconType: 'ringcentral'
  },
  {
    id: 'zoho',
    name: 'Zoho',
    category: 'CRM & Sales',
    description: 'Customer relationship management, lead management, and integrated business apps.',
    badgeColor: '#E42528',
    iconType: 'zoho'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'CRM & Sales',
    description: 'Inbound contact management, email tracking, pipeline deals, and campaign reporting.',
    badgeColor: '#FF7A59',
    iconType: 'hubspot'
  }
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 'review-1',
    quote: "I admire Gracey's work because she's eager to learn and finds her own solutions when she doesn't know something.",
    client: 'Fatema L.',
    role: 'Founder & Business Owner',
    industry: 'E-commerce & Consulting',
    rating: 5
  },
  {
    id: 'review-2',
    quote: "We hired Gracey as an administrative assistant and she does a great job. I'm sure she will do well for her next client.",
    client: 'Kelsey W.',
    role: 'Operations Director',
    industry: 'Education & Training',
    rating: 5
  },
  {
    id: 'review-3',
    quote: "Gracey did a great job while working for us. We just wish we were able to work together for a longer time.",
    client: 'Luis V.',
    role: 'Managing Broker',
    industry: 'Real Estate & Property',
    rating: 5
  },
  {
    id: 'review-4',
    quote: "We are very happy with her work and feel that she is ready for a bit more responsibility.",
    client: 'Jagger R.',
    role: 'Agency Executive',
    industry: 'Insurance Services',
    rating: 5
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'EXPERIENCE THE ART OF COFFEE!',
    subtitle: 'Bloom Coffee Co. In-Store Campaign',
    category: 'Graphic Design',
    image: PORTFOLIO_ASSETS.galleryCoffeeArt,
    caption: 'Clean, warm promotional banner design crafted for Bloom Coffee Co. highlighting artisanal espresso blends with rich typography and coffee imagery.',
    tags: ['Branding', 'Social Media', 'Typography', 'Canva'],
    specs: 'Instagram & Facebook Feed (1:1)'
  },
  {
    id: 'gallery-2',
    title: 'PAYDAY SALE! 25% OFF SPECIALTY FRAPPES',
    subtitle: 'Bloom Coffee Co. Promotional Poster',
    category: 'Marketing Poster',
    image: PORTFOLIO_ASSETS.galleryCoffeeIced,
    caption: 'High-converting promotional campaign graphic designed for seasonal payday discounts, combining bold typography with decadent beverage photography.',
    tags: ['Promo Design', 'Sales Campaign', 'Food & Beverage', 'Layout'],
    specs: 'Promotional Social Ad (1:1)'
  },
  {
    id: 'gallery-3',
    title: 'AMBER ROAST - SMOOTH & BALANCED',
    subtitle: 'Bloom Coffee Co. Product Showcase',
    category: 'Product Spotlight',
    image: PORTFOLIO_ASSETS.galleryCoffeeIced,
    caption: 'Signature roast introduction post emphasizing premium flavor notes, targeted at coffee connoisseurs looking for everyday luxury.',
    tags: ['Product Launch', 'Copy Alignment', 'Visual Identity'],
    specs: 'Digital Poster & Story'
  },
  {
    id: 'gallery-4',
    title: 'BUT FIRST, COFFEE & ARTISAN BREWS',
    subtitle: 'Bloom Coffee Co. Lifestyle Series',
    category: 'Brand Awareness',
    image: PORTFOLIO_ASSETS.galleryCoffeeArt,
    caption: 'Engaging morning lifestyle graphic featuring minimalist latte art and coffee bean illustrations designed to drive organic daily saves and shares.',
    tags: ['Brand Lifestyle', 'Illustration Accent', 'Organic Content'],
    specs: 'Social Media Feed (1:1)'
  }
];
