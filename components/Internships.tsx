
import React from 'react';
import Icon from './Icon';
import { INTERNSHIPS } from '../constants';

const Internships: React.FC = () => {
  const highlight = INTERNSHIPS.find(i => i.isHighlight);
  const others = INTERNSHIPS.filter(i => !i.isHighlight);

  return (
    <section className="space-y-12" id="internships">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-2 text-primary">Experience</h2>
        <div className="h-1 w-20 bg-accent"></div>
      </div>
      
      <div className="space-y-8">
        {highlight && (
          <div className="bg-primary text-white p-8 md:p-12 relative overflow-hidden group border border-primary">
            <div className="absolute top-0 right-0 size-96 bg-accent/5 -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                  <Icon name="workspace_premium" className="text-sm text-accent" /> Highlight
                </div>
                <h3 className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tighter">
                  {highlight.title} <br/> 
                  <span className="text-accent text-2xl opacity-90">@ {highlight.company}</span>
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">{highlight.description}</p>
                <div className="bg-accent text-white px-6 py-3 font-black uppercase tracking-widest inline-flex items-center gap-3 hover:bg-orange-600 transition-colors">
                  <Icon name={highlight.icon} /> {highlight.tech}
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 space-y-6 backdrop-blur-sm">
                <h4 className="font-black uppercase tracking-widest text-xl text-accent">Competencies</h4>
                <ul className="space-y-4">
                  {highlight.competencies?.map((comp, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <Icon name="arrow_forward" className="text-accent mt-0.5" />
                      <span className="font-bold text-sm uppercase tracking-tight">{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((intern) => (
            <div key={intern.id} className="bg-white p-8 border border-border-color hover:border-accent transition-all group cursor-pointer shadow-sm hover:shadow-md">
              <div className="size-14 bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                <Icon name={intern.icon} className="text-2xl" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-2 text-primary">{intern.title}</h3>
              <p className="text-accent font-bold text-xs uppercase tracking-widest mb-4">{intern.company}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{intern.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
