export interface Link {
  url: string;
  label: string;
  type: 'github' | 'linkedin' | 'email' | 'website' | 'phone';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: Link[];
  category: 'Data' | 'ML' | 'Web' | 'System Design';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  projects?: {
    name: string;
    details: string[];
  }[];
  images?: string[]; // Array of image URLs for the carousel
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  details?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
