export interface WorkExperience {
  id: string;
  company: string;
  location: string;
  type: string;
  position: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  barColor: 'teal' | 'peach';
  category: string;
  deliverables: string[];
}

export interface SkillItem {
  id: string;
  title: string;
  iconName: 'clock' | 'mail' | 'chat' | 'users' | 'gear';
  description: string;
}

export interface ToolItem {
  id: string;
  name: string;
  category: 'Productivity' | 'CRM & Sales' | 'Finance' | 'Communication' | 'Property';
  description: string;
  badgeColor: string;
  iconType: 'google' | 'appfolio' | 'quickbooks' | 'slack' | 'gohighlevel' | 'notion' | 'clickup' | 'ringcentral' | 'zoho' | 'hubspot';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  client: string;
  role: string;
  industry: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  caption: string;
  tags: string[];
  specs?: string;
}
