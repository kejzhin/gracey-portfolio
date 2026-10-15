import { ServiceItem, SkillItem, ToolItem, TestimonialItem, GalleryItem, WorkExperience, Education } from '../types/portfolio';
import heroPortraitImg from '../assets/images/gracy.jpeg';
import galleryImg1 from '../assets/images/4.jpeg'; // EXPERIENCE THE ART OF COFFEE!
import galleryImg2 from '../assets/images/3.jpeg'; // AMBER ROAST
import galleryImg3 from '../assets/images/1.jpeg'; // BUT FIRST, COFFEE
import galleryImg4 from '../assets/images/2.jpeg'; // PAYDAY SALE!

// Local high-fidelity assets matching the PDF slides
export const PORTFOLIO_ASSETS = {
  heroPortrait: heroPortraitImg,
  gallery1: galleryImg1,
  gallery2: galleryImg2,
  gallery3: galleryImg3,
  gallery4: galleryImg4,
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'work-1',
    company: 'LUNEX SOLAR',
    location: 'Tampa, FL',
    type: 'Full-time',
    position: 'Administrative Assistant',
    period: 'Jan 2025 - June 2026',
    description: [
      'Prepared and processed change orders for individual solar projects to ensure compliance and prevent post-installation issues.',
      'Created system sites and solar layout designs to support project planning and monitor progress across various internal portals.',
      'Developed and maintained Standard Operating Procedures (SOPs) for key workflows to improve consistency, efficiency, and onboarding processes.',
      'Provided cross-functional administrative support to the Permitting and Engineering departments to streamline project operations.',
      'Managed document flow by downloading, organizing, and uploading essential files into internal systems for accurate and accessible record-keeping.',
      'Generated and updated daily reports to track projects with missing documentation or information, ensuring timely resolution and follow-up.'
    ]
  },
  {
    id: 'work-2',
    company: 'MADERA SAI CAPITAL',
    location: 'San Francisco, CA',
    type: 'Full-time',
    position: 'Executive Assistant',
    period: 'Jan 2023 - Dec 2024',
    description: [
      'Provide comprehensive support to the CEO, managing both personal and professional responsibilities to optimize daily operations.',
      'Conduct initial candidate interviews, managing recruitment efforts and ensuring a streamlined hiring process.',
      'Prepare detailed reports, coordinate complex travel itineraries, and oversee the seamless management of executive schedules.',
      'Assist with company commissions, bookkeeping tasks, and certificate preparation within the construction industry.',
      'Ensure confidentiality in all matters, enhancing administrative efficiency and reducing task turnaround time by 25%.'
    ]
  },
  {
    id: 'work-3',
    company: 'CASH HOUSE BUYERS 4 YOU',
    location: 'Atlanta, GA',
    type: 'Full-time',
    position: 'Acquisitions Agent Manager',
    period: 'Dec 2020 - Dec 2022',
    description: [
      'Evaluate and improve the acquisition process, focusing on strategy, execution, and performance measurement.',
      'Prepare detailed reports for senior management, providing updates on ongoing acquisitions, pipeline development, and strategic insights.',
      'Lead and manage a team of acquisition agents, analysts, and support staff, ensuring team alignment with company goals and objectives.'
    ]
  },
  {
    id: 'work-4',
    company: 'AEM INVESTS',
    location: 'Dayton, OH',
    type: 'Part-time',
    position: 'Administrative Virtual Assistant',
    period: 'Sep 2020 - Dec 2020',
    description: [
      'Prepared documents, presentations, and reports using Microsoft Office and Google Suite to support daily operations.',
      'Conducted in-depth online research and presented findings in a clear, organized manner to inform decision-making.',
      'Managed social media accounts by creating and scheduling posts, engaging with audiences, and maintaining consistent brand messaging.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'edu-1',
    institution: 'EASTERN VISAYAS STATE UNIVERSITY',
    degree: 'Bachelor of Science & Mathematics',
    period: '2018 - 2022'
  }
];

export const PERSONAL_INFO = {
  name: 'GRACEY VILLANUEVA',
  nickname: 'Gracey',
  title: 'Virtual Assistant',
  headline: 'Hi! I am a Virtual Assistant!',
  email: 'vagracey1@gmail.com',
  phone: '+639958850127',
  displayPhone: '+63 995 885 0127',
  linkedin: 'www.linkedin.com/in/gracelle-villanueva',
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
    image: PORTFOLIO_ASSETS.gallery1,
    caption: 'Exclusive blends crafted for coffee lovers. Monday-Saturday 9:00 AM - 10:00 PM, Downtown Main Street.',
    tags: ['Branding', 'Social Media', 'Typography', 'Canva'],
    specs: 'Instagram & Facebook Feed (1:1)'
  },
  {
    id: 'gallery-2',
    title: 'AMBER ROAST',
    subtitle: 'Bloom Coffee Co. Product Showcase',
    category: 'Product Spotlight',
    image: PORTFOLIO_ASSETS.gallery2,
    caption: 'Lovers of smooth, balanced coffee with a luxurious feel.',
    tags: ['Product Launch', 'Visual Identity', 'Social Campaign'],
    specs: 'Social Media Feed (1:1)'
  },
  {
    id: 'gallery-3',
    title: 'BUT FIRST, COFFEE',
    subtitle: 'Bloom Coffee Co. Lifestyle Series',
    category: 'Brand Awareness',
    image: PORTFOLIO_ASSETS.gallery3,
    caption: 'Artisan morning brew promotion with heart latte art and coffee beans illustration.',
    tags: ['Brand Lifestyle', 'Organic Content', 'Canva'],
    specs: 'Social Media Feed (1:1)'
  },
  {
    id: 'gallery-4',
    title: 'PAYDAY SALE!',
    subtitle: 'Bloom Coffee Co. Promotional Poster',
    category: 'Marketing Poster',
    image: PORTFOLIO_ASSETS.gallery4,
    caption: 'Get cashback for every coffee purchase. Order Now. Cashback up to 25%.',
    tags: ['Promo Design', 'Sales Campaign', 'Food & Beverage'],
    specs: 'Promotional Social Ad (1:1)'
  }
];
