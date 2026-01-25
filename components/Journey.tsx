
import React from 'react';
import Icon from './Icon';
import { JOURNEY } from '../constants';

const Journey: React.FC = () => {
  return (
    <section className="py-12 bg-white px-6 md:px-10 border border-border-color" id="journey">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
          <Icon name="auto_stories" className="text-accent" />
          The Journey
        </h2>
        <div className="h-px flex-1 bg-border-color ml-6"></div>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative">
          <div className="absolute left-5 md:left-0 md:top-1/2 md:-translate-y-1/2 w-0.5 md:w-full h-full md:h-0.5 bg-slate-100 z-0">
            <div className="h-1/2 md:h-full md:w-1/2 bg-accent"></div>
          </div>
          
          {JOURNEY.map((milestone, index) => (
            <div 
              key={index} 
              className={`relative z-10 flex items-center md:flex-col gap-4 md:gap-3 bg-white ${
                index === 0 ? 'pr-4 md:pr-0' : index === JOURNEY.length - 1 ? 'pl-4 md:pl-0' : 'px-4'
              }`}
            >
              <div className={`size-12 flex items-center justify-center border-2 ${
                milestone.isCompleted 
                  ? 'bg-accent border-accent text-white shadow-md shadow-accent/20' 
                  : 'bg-white border-slate-200 text-slate-400'
              }`}>
                <Icon name={milestone.icon} className="text-xl" />
              </div>
              <div className="text-left md:text-center">
                <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${
                  milestone.isCompleted ? 'text-accent' : 'text-slate-500'
                }`}>
                  {milestone.year}
                </p>
                <p className="text-sm font-bold uppercase tracking-tight text-primary">{milestone.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
