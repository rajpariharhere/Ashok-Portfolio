
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Internships from './components/Internships';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingStatus from './components/FloatingStatus';

type ThemeMode = 'light' | 'dark';

const techCategories = [
  {
    title: 'Backend Development',
    items: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'JDBC', 'MySQL']
  },
  {
    title: 'Frontend Development',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Maven', 'Postman', 'VS Code']
  }
];

const featuredTech = [
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'Spring', icon: 'devicon-spring-plain colored' },
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original colored' }
];

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme') as ThemeMode | null;
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="mx-auto max-w-[1200px] px-6 py-12 space-y-24">
        <Hero theme={theme} />
        <Journey theme={theme} />
        <Internships theme={theme} />
        <Projects theme={theme} />

        <section
          className={`rounded-[32px] border p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)] transition-colors duration-300 md:p-10 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}
          id="skills"
        >
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="mb-5 flex w-full max-w-2xl items-center justify-center gap-3">
              <div className="hidden h-px flex-1 bg-slate-200 opacity-80 sm:block"></div>
              <div className={`flex items-center gap-3 rounded-full border px-4 py-2 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-0.5 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
                <span className={`flex h-8 w-8 items-center justify-center rounded-full ${isDark ? 'bg-slate-800 text-slate-100' : 'bg-slate-100 text-slate-900'}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                    <path d="M8 6 4 10l4 4" />
                    <path d="M16 18l4-4-4-4" />
                    <path d="M13 4 11 20" />
                  </svg>
                </span>
                <h2 className={`text-2xl font-semibold uppercase tracking-[0.18em] sm:text-3xl ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Tech Stack</h2>
              </div>
              <div className="hidden h-px flex-1 bg-slate-200 opacity-40 sm:block"></div>
            </div>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {techCategories.map((category) => (
              <div key={category.title} className={`rounded-2xl border p-5 ${isDark ? 'border-slate-700 bg-slate-800/70' : 'border-slate-200 bg-slate-50'}`}>
                <h3 className={`text-lg font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{category.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F97316] hover:shadow-sm ${isDark ? 'border-slate-700 bg-slate-900 text-slate-300' : 'border-slate-200 bg-white text-slate-700'}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`rounded-3xl border p-6 md:p-8 ${isDark ? 'border-slate-700 bg-slate-800/70' : 'border-slate-200 bg-[#F8FAFC]'}`}>
            <div className="mb-6 flex items-center justify-between">
              <h3 className={`text-sm font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Core Technologies</h3>
              <div className={`ml-4 h-px flex-1 ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}></div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {featuredTech.map((tech) => (
                <div
                  key={tech.name}
                  className={`group flex aspect-square flex-col items-center justify-center rounded-2xl border p-4 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F97316] hover:shadow-md ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}
                >
                  <i className={`${tech.icon} text-4xl md:text-5xl`}></i>
                  <p className={`mt-3 text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm theme={theme} />
      </main>
      <Footer theme={theme} />
      <FloatingStatus theme={theme} />
    </div>
  );
};

export default App;
