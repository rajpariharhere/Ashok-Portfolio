
import React, { useEffect, useState } from 'react';
import Icon from './Icon';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('journey');

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 8);
    updateScroll();
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    const sections = ['journey', 'internships', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -45% 0px' }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const isDark = theme === 'dark';
  const navLinkClasses = (id: string) =>
    `relative text-sm font-medium uppercase tracking-[0.2em] transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#F97316] after:transition-transform after:duration-300 hover:text-[#F97316] hover:after:scale-x-100 ${activeSection === id ? 'text-[#F97316] after:scale-x-100' : isDark ? 'text-slate-200' : 'text-slate-700'}`;

  return (
    <header className={`sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300 ${isDark ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-white/80'} ${isScrolled ? 'shadow-[0_10px_30px_-20px_rgba(15,23,42,0.25)]' : ''}`}>
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a href="#" className="flex items-center gap-4 transition-transform duration-300 hover:-translate-y-0.5">
          <div className="flex h-9 w-9 items-center justify-center bg-[#F97316] text-white shadow-[0_10px_24px_-12px_rgba(249,115,22,0.75)]">
            <Icon name="terminal" className="text-xl" />
          </div>
          <h2 className={`text-base font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Ashok Raj Singh</h2>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a className={navLinkClasses('journey')} href="#journey">Journey</a>
          <a className={navLinkClasses('internships')} href="#internships">Experience</a>
          <a className={navLinkClasses('projects')} href="#projects">Projects</a>
          <button
            type="button"
            onClick={toggleTheme}
            className={`flex items-center gap-2 rounded-full border px-3 py-2 transition-all duration-300 ${isDark ? 'border-slate-700 bg-slate-800 text-slate-100' : 'border-slate-200 bg-white text-slate-700'}`}
            aria-label="Toggle theme"
          >
            <Icon name={theme === 'dark' ? 'light_mode' : 'dark_mode'} className="text-base" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <a href="#contact" className="rounded-full bg-[#F97316] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-orange-600 active:scale-95">
            Contact Me
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${isDark ? 'border-slate-700 bg-slate-800 text-slate-100' : 'border-slate-200 bg-white text-slate-700'}`}
            aria-label="Toggle theme"
          >
            <Icon name={theme === 'dark' ? 'light_mode' : 'dark_mode'} className="text-lg" />
          </button>
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${isDark ? 'border-slate-700 bg-slate-800 text-slate-100' : 'border-slate-200 bg-white text-slate-700'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} className="text-xl" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`border-t px-6 py-5 shadow-xl md:hidden ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <div className="flex flex-col gap-3">
            <a className="text-base font-semibold uppercase tracking-[0.2em] text-[#F97316]" href="#journey" onClick={() => setIsMenuOpen(false)}>Journey</a>
            <a className={`text-base font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-slate-200' : 'text-slate-700'}`} href="#internships" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a className={`text-base font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-slate-200' : 'text-slate-700'}`} href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a className="rounded-full bg-[#F97316] px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white" href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
