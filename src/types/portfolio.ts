export interface PersonalDetails {
  name: string;
  title: string;
  tagline: string;
  location: string;
  availability: string;
  experience: string;
  workMode: string;
}

export interface HeroMetric {
  value: string;
  label: string;
}

export interface HeroSystemPanel {
  label: string;
  value: string;
  detail: string;
}

export interface HeroContent {
  headline: string[];
  supportingCopy: string;
  orbitText: string;
  metrics: HeroMetric[];
  systemPanels: HeroSystemPanel[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  copy: string;
}

export interface CaseStudyAction {
  label: string;
  href: string;
  external?: boolean;
}

export interface ProjectCaseStudy {
  index: string;
  title: string;
  category: string;
  year: string;
  description: string;
  stack: string[];
  impact: string[];
  imagePosition: string;
  accent: "blue" | "cyan" | "violet";
  actions: CaseStudyAction[];
}

export interface TimelineItem {
  range: string;
  title: string;
  copy: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface PortfolioContent {
  personal: PersonalDetails;
  hero: HeroContent;
  stats: StatItem[];
  skills: string[];
  services: ServiceItem[];
  projects: ProjectCaseStudy[];
  timeline: TimelineItem[];
  testimonials: TestimonialItem[];
}
