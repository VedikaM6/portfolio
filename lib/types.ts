export interface Basics {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  links: { label: string; url: string }[];
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  location?: string;
  bullets: string[];
  /** Skills to show as tags above bullets (instead of metric chips) */
  highlightSkills?: string[];
}

export interface Achievement {
  text: string;
  context?: string;
  type?: "metric" | "leadership" | "award" | "win";
}

export interface Project {
  title: string;
  stack?: string;
  dates?: string;
  bullets: string[];
  links?: { label: string; url: string }[];
}

export interface Skills {
  [group: string]: string[];
}

export interface Education {
  institution: string;
  degree: string;
  dates: string;
}

export interface ResumeData {
  basics: Basics;
  experience: Experience[];
  achievements: Achievement[];
  projects: Project[];
  skills: Skills;
  education: Education[];
  certifications: string[];
  awards: string[];
  extra: string[];
}
