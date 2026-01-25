
import React from 'react';
import Icon from './Icon';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section className="space-y-12" id="projects">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-2 text-primary">Projects</h2>
        <div className="h-1 w-20 bg-accent"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROJECTS.map((project) => (
          <div key={project.id} className="bg-white p-8 border border-border-color hover:border-accent transition-all group flex flex-col justify-between shadow-sm hover:shadow-md">
            <div>
              <div className="size-12 bg-primary text-white flex items-center justify-center mb-6 group-hover:bg-accent transition-all">
                <Icon name={project.icon} />
              </div>
              <h3 className="text-lg font-black uppercase tracking-tighter mb-2 text-primary">{project.title}</h3>
              <p className="text-slate-500 text-xs mb-6 leading-relaxed">{project.description}</p>
            </div>
            <div className="flex">
              <span className="px-3 py-1 bg-slate-50 text-[10px] font-black uppercase tracking-widest text-accent border border-border-color group-hover:bg-accent group-hover:text-white transition-all">
                {project.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
