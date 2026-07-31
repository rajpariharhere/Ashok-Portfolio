
import React from 'react';
import Raj from "../imgs/Ashok.jpg"

interface FloatingStatusProps {
  theme: 'light' | 'dark';
}

const FloatingStatus: React.FC<FloatingStatusProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <div className="fixed bottom-8 left-8 z-[60] hidden xl:flex flex-col items-center gap-4 group cursor-pointer">
      <div className="relative">
        <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/40 transition-all"></div>
        <div className={`relative size-14 border-2 p-1 backdrop-blur-sm overflow-hidden transition-colors ${isDark ? 'border-slate-700 bg-slate-900/80 group-hover:border-[#F97316]' : 'border-slate-200 bg-white/80 group-hover:border-[#F97316]'}`}>
          <div 
            className="w-full h-full bg-center bg-no-repeat bg-cover" 
            style={{ backgroundImage: `url("${Raj}")` }}
          ></div>
        </div>
        <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white rounded-full"></div>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
        <div className={`backdrop-blur-md border px-3 py-1.5 rounded-lg shadow-xl ${isDark ? 'border-slate-700 bg-slate-900/90' : 'border-slate-200 bg-white/90'}`}>
          <p className={`text-[10px] font-black uppercase tracking-tighter whitespace-nowrap ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Available for Hire</p>
        </div>
      </div>
    </div>
  );
};

export default FloatingStatus;
