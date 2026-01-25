
import React, { useState } from 'react';
import Icon from './Icon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-border-color bg-white/80 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary flex items-center justify-center text-white">
            <Icon name="terminal" className="text-xl" />
          </div>
          <h2 className="text-lg font-bold tracking-tight uppercase">Ashok Raj Singh</h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-accent transition-colors uppercase tracking-widest" href="#journey">Journey</a>
          <a className="text-sm font-medium hover:text-accent transition-colors uppercase tracking-widest" href="#internships">Internships</a>
          <a className="text-sm font-medium hover:text-accent transition-colors uppercase tracking-widest" href="#projects">Projects</a>
          <a href="#contact" className="bg-accent hover:bg-orange-600 text-white px-5 py-2 text-sm font-bold transition-all active:scale-95 uppercase">
            Contact Me
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex items-center justify-center p-2 text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name={isMenuOpen ? "close" : "menu"} className="text-2xl" />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-border-color flex flex-col p-6 gap-4 animate-in slide-in-from-top duration-200 shadow-xl">
          <a className="text-lg font-bold hover:text-accent uppercase tracking-widest" href="#journey" onClick={() => setIsMenuOpen(false)}>Journey</a>
          <a className="text-lg font-bold hover:text-accent uppercase tracking-widest" href="#internships" onClick={() => setIsMenuOpen(false)}>Internships</a>
          <a className="text-lg font-bold hover:text-accent uppercase tracking-widest" href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a className="bg-accent text-white p-4 text-center font-bold uppercase" href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
