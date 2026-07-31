
export interface Project {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon: string;
  technologies?: string[];
  highlights?: string[];
}

export interface Internship {
  id: string;
  title: string;
  company: string;
  description: string;
  icon: string;
  isHighlight?: boolean;
  competencies?: string[];
  tech?: string;
  location?: string;
  dateRange?: string;
  technologies?: string[];
  highlights?: string[];
}

export interface JourneyMilestone {
  year: string;
  label: string;
  icon: string;
  isCompleted: boolean;
  organization?: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  items: string[];
}
