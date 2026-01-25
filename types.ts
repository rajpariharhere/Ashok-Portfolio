
export interface Project {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon: string;
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
}

export interface JourneyMilestone {
  year: string;
  label: string;
  icon: string;
  isCompleted: boolean;
}
