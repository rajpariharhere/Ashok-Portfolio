
import React from 'react';
import Raj from "../imgs/Ashok.jpg"

const FloatingStatus: React.FC = () => {
  return (
    <div className="fixed bottom-8 left-8 z-[60] hidden xl:flex flex-col items-center gap-4 group cursor-pointer">
      <div className="relative">
        <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/40 transition-all"></div>
        <div className="relative size-14 border-2 border-border-color p-1 bg-white/80 backdrop-blur-sm overflow-hidden group-hover:border-accent transition-colors">
          <div 
            className="w-full h-full bg-center bg-no-repeat bg-cover" 
            style={{ backgroundImage: `url("${Raj}")` }}
          ></div>
        </div>
        <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white rounded-full"></div>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
        <div className="bg-white/90 backdrop-blur-md border border-border-color px-3 py-1.5 rounded-lg shadow-xl">
          <p className="text-[10px] font-black uppercase tracking-tighter text-primary whitespace-nowrap">Available for Hire</p>
        </div>
      </div>
    </div>
  );
};

export default FloatingStatus;
