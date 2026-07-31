import { Project, Internship, JourneyMilestone, SkillCategory } from './types';
import AshokImage from './imgs/Ashok.jpg';

export const PROFILE_IMAGE = AshokImage;

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Vyntra – Full-Stack E-Commerce Platform',
    description: 'Scalable multi-role e-commerce web application with Spring Security authentication and automated payment gateway processing.',
    tag: 'Full-Stack Java Web App',
    icon: 'shopping_cart',
    technologies: ['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'Hibernate ORM', 'MySQL', 'ReactJS', 'Razorpay SDK', 'Vercel', 'Render'],
    highlights: [
      'Engineered a complete full-stack e-commerce system featuring Role-Based Access Control (RBAC) across Customer, Seller, and Admin modules.',
      'Secured backend REST endpoints using stateless JWT authentication filters and Spring Security authorization mechanisms.',
      'Designed 15+ RESTful API endpoints for catalog management, shopping cart state, order workflows, and user profile management.',
      'Integrated Razorpay payment gateway with transaction status confirmation, inventory sync, and automated email triggers.',
      'Configured CI/CD deployment pipelines hosting the React frontend on Vercel and containerized backend services on Render.'
    ]
  },
  {
    id: '2',
    title: 'Dream Hope Development – Company Web Portal',
    description: 'High-performance agency platform optimized for speed, cross-device responsiveness, and technical SEO performance.',
    tag: 'Client-Facing Web Application',
    icon: 'language',
    technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design', 'Technical SEO'],
    highlights: [
      'Developed the official responsive web platform with clean semantic HTML and modular CSS layouts for seamless mobile/desktop UX.',
      'Implemented on-page technical SEO enhancements including structured meta tags, semantic hierarchy, and XML sitemaps.',
      'Collaborated with core team members to build custom blog modules and optimize overall DOM rendering speeds.'
    ]
  }
];

export const INTERNSHIPS: Internship[] = [
  {
    id: '1',
    title: 'Java Full Stack Engineer Trainee',
    company: 'JSpiders',
    description: 'Specialized training in enterprise Java backend development, Spring ecosystem, relational database design, and React UI.',
    icon: 'data_object',
    isHighlight: true,
    location: 'Bangalore, India',
    dateRange: '06/2025 – 12/2025',
    technologies: ['Java 17', 'Spring Boot', 'Spring MVC', 'Hibernate ORM', 'MySQL', 'ReactJS', 'REST APIs'],
    highlights: [
      'Built layered backend architecture using Spring Boot, Hibernate ORM, and DAO patterns for clean code separation.',
      'Designed and normalized 8+ relational database tables in MySQL, executing efficient SQL queries and join operations.',
      'Developed 20+ responsive ReactJS components linked to backend REST APIs using modern state management.',
      'Performed API testing and debugging using Postman, resolving data binding and exception handling edge cases.'
    ],
    competencies: ['Spring Boot', 'Relational Databases', 'RESTful API Architecture'],
    tech: 'Java Full Stack'
  },
  {
    id: '2',
    title: 'Freelance Web Developer',
    company: 'Dream Hope Development',
    description: 'Delivered responsive business websites with a strong focus on performance, accessibility, SEO, and clean user experience.',
    icon: 'developer_board',
    technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Bootstrap', 'Tailwind CSS', 'Git', 'GitHub'],
    highlights: [
      'Developed responsive business website pages using HTML5, CSS3, JavaScript (ES6+), and Bootstrap/Tailwind CSS.',
      'Built reusable UI components and interactive layouts to ensure a consistent user experience across the website.',
      'Optimized website performance by reducing page load time, compressing assets, and improving Core Web Vitals.',
      'Implemented on-page technical SEO, including semantic HTML, meta tags, structured headings, image optimization, and XML sitemap support.',
      'Ensured cross-browser compatibility and mobile responsiveness across Chrome, Edge, Firefox, and mobile devices.',
      'Collaborated with the client to gather requirements, implement design changes, and deliver features according to project needs.',
      'Improved website accessibility by using semantic HTML elements and maintaining proper document structure.',
      'Used Git and GitHub for version control, project collaboration, and maintaining source code history.',
      'Performed testing, debugging, and issue resolution to ensure stable functionality before project delivery.',
      'Maintained clean, modular, and reusable code following modern front-end development best practices.'
    ]
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages used to build reliable and scalable applications.',
    icon: 'code',
    items: ['Java', 'JavaScript (ES6+)', 'SQL']
  },
  {
    title: 'Backend Development',
    description: 'Server-side architecture, APIs, security, and persistence layers.',
    icon: 'storage',
    items: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate ORM', 'JDBC', 'REST APIs']
  },
  {
    title: 'Frontend Development',
    description: 'Modern UI development with responsive user experiences.',
    icon: 'desktop_windows',
    items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    title: 'Database & Tools',
    description: 'Data management, version control, and development workflow tools.',
    icon: 'dataset',
    items: ['MySQL', 'Git', 'GitHub', 'Maven', 'Postman', 'VS Code']
  },
  {
    title: 'Core Concepts',
    description: 'Foundational software engineering principles and design patterns.',
    icon: 'psychology',
    items: ['OOP', 'Collections Framework', 'Exception Handling', 'Multithreading', 'MVC Architecture']
  }
];

export const JOURNEY: JourneyMilestone[] = [
  {
    year: '2021',
    label: 'B.Tech Computer Science',
    icon: 'school',
    isCompleted: true,
    organization: 'Technocrats Institute',
    description: 'Started my computer science journey and built a strong foundation in programming, problem solving, and core engineering concepts.'
  },
  {
    year: '2024',
    label: 'Freelance Web Developer',
    icon: 'code',
    isCompleted: true,
    organization: 'Dream Hope Development',
    description: 'Built responsive websites and improved SEO performance while delivering polished, user-focused client experiences.'
  },
  {
    year: '2025',
    label: 'Java Full Stack Training',
    icon: 'rocket_launch',
    isCompleted: true,
    organization: 'JSpiders Bangalore',
    description: 'Deepened my skills in enterprise Java, Spring Boot, Hibernate, React, and database-driven full-stack development.'
  }
];

export const SOCIAL_LINKS = {
  linkedIn: 'https://www.linkedin.com/in/ashokrajsingh',
  github: 'https://github.com/rajpariharhere',
  twitter: 'https://twitter.com',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  email: 'rajparihar407@gmail.com',
  phone: '+91 7024791886'
};
