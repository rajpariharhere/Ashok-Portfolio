
import React, { useEffect, useRef, useState } from 'react';
import { INTERNSHIPS } from '../constants';

interface InternshipsProps {
  theme: 'light' | 'dark';
}

const Internships: React.FC<InternshipsProps> = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const experiences = [...INTERNSHIPS].reverse();
  const isDark = theme === 'dark';

  useEffect(() => {
    const node = headingRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`space-y-8 transition-colors duration-300 ${isDark ? 'text-slate-100' : 'text-slate-900'}`} id="internships">
      <div ref={headingRef} className={`flex flex-col items-center text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}>
        <div className="mb-5 flex w-full max-w-2xl items-center justify-center gap-3">
          <div className="hidden h-px flex-1 bg-slate-200 opacity-80 sm:block"></div>
          <div className={`flex items-center gap-3 rounded-full border px-4 py-2 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.25)] ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${isDark ? 'bg-slate-800 text-slate-100' : 'bg-slate-100 text-slate-900'}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                <path d="M7 7.5A2.5 2.5 0 0 1 9.5 5h5A2.5 2.5 0 0 1 17 7.5V9h1.5A1.5 1.5 0 0 1 20 10.5v7A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-7A1.5 1.5 0 0 1 5.5 9H7V7.5Z" />
                <path d="M9 9V7.5" />
              </svg>
            </span>
            <h2 className={`text-2xl font-semibold uppercase tracking-[0.18em] sm:text-3xl ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Experience</h2>
          </div>
          <div className="hidden h-px flex-1 bg-slate-200 opacity-40 sm:block"></div>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-[#FDE7D9] md:left-6"></div>

        <div className="space-y-8">
          {experiences.map((intern, index) => {
            return (
              <div key={intern.id} className="relative pl-10 md:pl-16">
                <span className="absolute left-0 top-8 h-4 w-4 rounded-full border-4 border-white bg-[#F97316] shadow-[0_0_0_6px_rgba(249,115,22,0.12)] md:left-2"></span>

                <article className={`rounded-[20px] border p-6 shadow-[0_16px_45px_-24px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316] hover:shadow-[0_22px_55px_-22px_rgba(249,115,22,0.28)] md:p-8 ${isDark ? 'border-slate-800 bg-slate-900' : 'border-[#F2D9DD] bg-white'}`}>
                  <div className="space-y-2">
                    <h3 className={`text-xl font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{intern.title}</h3>
                    <p className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{intern.company}</p>
                  </div>

                  {intern.technologies && intern.technologies.length > 0 && (
                    <div className="mt-6">
                      <h4 className={`text-sm font-semibold uppercase tracking-[0.18em] ${isDark ? 'text-[#F9A26C]' : 'text-[#A13D52]'}`}>Tech Stack</h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {intern.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-200 hover:border-[#F97316] hover:text-[#A13D52] ${isDark ? 'border-slate-700 bg-slate-800 text-slate-300' : 'border-[#F2D9DD] bg-white text-slate-600'}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className={`mt-6 max-w-3xl text-sm leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{intern.description}</p>

                  <div className="mt-6">
                    <h4 className={`text-sm font-semibold uppercase tracking-[0.18em] ${isDark ? 'text-[#F9A26C]' : 'text-[#A13D52]'}`}>Key Responsibilities</h4>
                    <ul className="mt-3 space-y-2">
                      {intern.highlights?.map((item, idx) => (
                        <li key={idx} className={`flex items-start gap-2 text-sm leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Internships;
