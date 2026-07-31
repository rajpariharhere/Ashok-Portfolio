
import React from 'react';
import Icon from './Icon';
import Raj from "../imgs/Ashok.jpg"

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <footer className={`relative border-t py-20 transition-colors duration-300 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'}`}>
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-8">
          <div 
            className="size-20 bg-center bg-no-repeat bg-cover border-2 border-accent shadow-lg grayscale hover:grayscale-0 transition-all duration-500" 
            style={{ backgroundImage: `url("${Raj}")` }}
          ></div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="size-6 bg-primary flex items-center justify-center text-white">
                <Icon name="terminal" className="text-sm" />
              </div>
              <span className={`text-xl font-black uppercase tracking-tighter ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Ashok Raj Singh</span>
            </div>
            <p className={`mt-2 max-w-xs text-xs font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Engineering Excellence <br/> Through Code.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-8">
            <a className="text-slate-400 hover:text-accent transition-colors flex items-center gap-2" href="#">
              <Icon name="share" className="text-lg" />
              <span className="text-[10px] font-black uppercase tracking-widest">Connect</span>
            </a>
            <a className={`flex items-center gap-2 transition-colors ${isDark ? 'text-slate-400 hover:text-[#F97316]' : 'text-slate-400 hover:text-[#F97316]'}`} href="#contact">
              <Icon name="mail" className="text-lg" />
              <span className="text-[10px] font-black uppercase tracking-widest">Contact</span>
            </a>
          </div>
          <p className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            © 2024 Ashok Raj Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
