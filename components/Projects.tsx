
import React from 'react';
import Icon from './Icon';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  theme: 'light' | 'dark';
}

const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section className={`space-y-8 transition-colors duration-300 ${isDark ? 'text-slate-100' : 'text-slate-900'}`} id="projects">
      <div className="flex flex-col items-center text-center">
        <div className="mb-5 flex w-full max-w-2xl items-center justify-center gap-3">
          <div className="hidden h-px flex-1 bg-slate-200 opacity-80 sm:block"></div>
          <div className={`flex items-center gap-3 rounded-full border px-4 py-2 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-0.5 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${isDark ? 'bg-slate-800 text-slate-100' : 'bg-slate-100 text-slate-900'}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h3.2a1.5 1.5 0 0 1 1.06.44l1.48 1.48a1.5 1.5 0 0 0 1.06.44h5.2A1.5 1.5 0 0 1 18.5 8v9.5A1.5 1.5 0 0 1 17 19H5.5A1.5 1.5 0 0 1 4 17.5v-12Z" />
                <path d="M9 13l2 2 4-4" />
              </svg>
            </span>
            <h2 className={`text-2xl font-semibold uppercase tracking-[0.18em] sm:text-3xl ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Projects</h2>
          </div>
          <div className="hidden h-px flex-1 bg-slate-200 opacity-40 sm:block"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <article key={project.id} className={`group overflow-hidden rounded-[20px] border shadow-[0_14px_40px_-24px_rgba(107,33,42,0.32)] transition-all duration-300 hover:-translate-y-2 hover:border-[#F97316] hover:shadow-[0_20px_56px_-22px_rgba(249,115,22,0.24)] ${isDark ? 'border-slate-800 bg-slate-900' : 'border-[#D7B8BC] bg-[#F8EDEE]'}`}>
            <div className="p-6 md:p-7">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${isDark ? 'border-slate-700 bg-slate-800 text-[#F9A26C]' : 'border-[#D7B8BC] bg-[#FDECEC] text-[#8E3045]'}`}>
                  {project.tag}
                </span>
                <div className={`flex h-10 w-10 items-center justify-center rounded-full shadow-sm ${isDark ? 'bg-slate-800 text-[#F9A26C]' : 'bg-[#FFF8F8] text-[#A13D52]'}`}>
                  <Icon name={project.icon} className="text-lg" />
                </div>
              </div>

              <h3 className={`mb-2 text-[1.35rem] font-semibold leading-tight ${isDark ? 'text-slate-100' : 'text-[#2B1B1D]'}`}>{project.title}</h3>
              <p className={`text-[15px] leading-7 ${isDark ? 'text-slate-400' : 'text-[#5B4A4A]'}`}>{project.description}</p>
            </div>

            <div className={`border-t p-6 md:p-7 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-[#D7B8BC] bg-[#F8EDEE]'}`}>
              <div className="mb-6">
                <h4 className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-[#F9A26C]' : 'text-[#8E3045]'}`}>Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.slice(0, 6).map((tech) => (
                    <span key={tech} className="rounded-full border border-[#D7B8BC] bg-[#FFF8F8] px-3.5 py-2 text-sm font-medium text-[#5B4A4A] transition-all duration-300 hover:border-[#A13D52] hover:text-[#A13D52]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`rounded-[16px] border p-4 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-[#D7B8BC] bg-[#FFF8F8]'}`}>
                <h4 className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-[#F9A26C]' : 'text-[#8E3045]'}`}>Key Features</h4>
                <div className="space-y-2.5">
                  {project.highlights?.slice(0, 4).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm leading-7 text-[#5B4A4A]">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#A13D52]"></span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
