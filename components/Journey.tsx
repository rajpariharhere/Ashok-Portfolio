
import React, { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { JOURNEY } from '../constants';

interface JourneyProps {
  theme: 'light' | 'dark';
}

const Journey: React.FC<JourneyProps> = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isDark = theme === 'dark';

  useEffect(() => {
    const node = sectionRef.current;
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
    <section ref={sectionRef} className={`px-6 py-16 transition-colors duration-300 md:px-10 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`} id="journey">
      <div className={`mx-auto max-w-6xl transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="mb-5 flex w-full max-w-2xl items-center justify-center gap-3">
            <div className="hidden h-px flex-1 bg-slate-200 opacity-80 sm:block"></div>
            <div className={`flex items-center gap-3 rounded-full border px-4 py-2 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-0.5 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
              <span className={`flex h-8 w-8 items-center justify-center rounded-full ${isDark ? 'bg-slate-800 text-slate-100' : 'bg-slate-100 text-slate-900'}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                  <path d="M4 7h16" />
                  <path d="M7 4v16" />
                  <path d="M17 4v16" />
                  <path d="M4 17h16" />
                </svg>
              </span>
              <h2 className={`text-2xl font-semibold uppercase tracking-[0.18em] sm:text-3xl ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Career Journey</h2>
            </div>
            <div className="hidden h-px flex-1 bg-slate-200 opacity-40 sm:block"></div>
          </div>
          <p className={`mx-auto max-w-2xl text-sm leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A concise look at how my skills grew from strong fundamentals into modern full-stack engineering.
          </p>
        </div>

        <div className="relative">
          <div className={`absolute left-0 right-0 top-8 hidden h-1 md:block ${isDark ? 'bg-slate-800' : 'bg-[#FDE7D9]'}`}></div>
          <div className={`absolute left-0 top-8 hidden h-1 bg-[#F97316] transition-all duration-1000 md:block ${isVisible ? 'w-full' : 'w-0'}`}></div>

          <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-4">
            {JOURNEY.map((milestone, index) => (
              <div
                key={`${milestone.year}-${milestone.label}`}
                className={`relative flex-1 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                style={{ transitionDelay: `${index * 140}ms` }}
              >
                <div className="flex flex-col items-center md:items-start">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#F97316] text-white shadow-[0_14px_40px_-20px_rgba(249,115,22,0.55)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_16px_45px_-15px_rgba(249,115,22,0.4)]">
                    <Icon name={milestone.icon} className="text-2xl" />
                  </div>

                  <div className={`mt-4 w-full rounded-[20px] border p-5 shadow-[0_16px_45px_-24px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316] hover:shadow-[0_20px_50px_-20px_rgba(249,115,22,0.24)] ${isDark ? 'border-slate-800 bg-slate-900' : 'border-[#E5E7EB] bg-white'}`}>
                    <span className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${isDark ? 'border-slate-700 bg-slate-800 text-[#F9A26C]' : 'border-[#FDE7D9] bg-[#FFF7F2] text-[#A13D52]'}`}>
                      {milestone.year}
                    </span>
                    <h3 className={`mt-4 text-lg font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{milestone.label}</h3>
                    {milestone.organization && (
                      <p className={`mt-1 text-sm font-medium ${isDark ? 'text-[#F9A26C]' : 'text-[#A13D52]'}`}>{milestone.organization}</p>
                    )}
                    <p className={`mt-3 text-sm leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
