
import { Project, Internship, JourneyMilestone } from './types';



export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Online Marketing',
    description: 'Curated marketplace highlighting affordable brands.',
    tag: 'E-Commerce',
    icon: 'shopping_cart'
  },
  {
    id: '2',
    title: 'Gaalibaaz',
    description: 'Social interaction project exploring language.',
    tag: 'Social Web',
    icon: 'forum'
  },
  {
    id: '3',
    title: 'Sports Tracker',
    description: 'Platform to track athletic participation.',
    tag: 'Sports Tech',
    icon: 'sports_score'
  },
  {
    id: '4',
    title: 'Resource Tracker',
    description: 'Internal tool for system monitoring.',
    tag: 'Java',
    icon: 'analytics'
  }
];

export const INTERNSHIPS: Internship[] = [
  {
    id: '1',
    title: 'Java Fullstack Internship',
    company: 'JSpiders',
    description: 'Building enterprise-grade applications using the Java ecosystem.',
    icon: 'data_object',
    isHighlight: true,
    competencies: ['Developing scalable REST APIs using Spring Boot'],
    tech: 'Java'
  },
  {
    id: '2',
    title: 'C/C++ Internship',
    company: 'Generic Systems',
    description: 'Systems programming and memory management algorithms.',
    icon: 'developer_board'
  },
  {
    id: '3',
    title: 'Marketing Strategy',
    company: 'Growth Co',
    description: 'Analyzing market trends and brand positioning.',
    icon: 'campaign'
  }
];

export const JOURNEY: JourneyMilestone[] = [
  { year: '2021', label: 'Start', icon: 'flight_takeoff', isCompleted: true },
  { year: '2022-23', label: 'Activities', icon: 'emoji_events', isCompleted: true },
  { year: '2025', label: 'Completion', icon: 'flag', isCompleted: false }
];

export const SOCIAL_LINKS = {
  linkedIn: 'www.linkedin.com/in/ashokrajsingh',
  github: 'https://github.com/rajpariharhere',
  twitter: 'https://twitter.com',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  email: 'rajparihar407@gmail.com',
  phone: '+91 7024791886'
};

//export const PROFILE_IMAGE = Raj;
