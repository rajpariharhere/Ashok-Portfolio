
import React from 'react';
import CubeFrame from './CubeFrame';
import Icon from './Icon';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20 pt-8">
      <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-8">
        <CubeFrame />
        <div className="w-full space-y-4">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {/* LinkedIn */}
            <a className="size-10 bg-slate-50 flex items-center justify-center hover:bg-accent hover:text-white transition-all text-primary border border-border-color" href={SOCIAL_LINKS.linkedIn} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg className="size-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            {/* GitHub */}
            <a className="size-10 bg-slate-50 flex items-center justify-center hover:bg-accent hover:text-white transition-all text-slate-700 border border-border-color" href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg className="size-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            {/* Twitter */}
            <a className="size-10 bg-slate-50 flex items-center justify-center hover:bg-accent hover:text-white transition-all text-slate-700 border border-border-color" href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" title="Twitter">
              <svg className="size-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
              </svg>
            </a>
            {/* Instagram */}
            <a className="size-10 bg-slate-50 flex items-center justify-center hover:bg-accent hover:text-white transition-all text-slate-700 border border-border-color" href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
              <svg className="size-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
            {/* Facebook */}
            <a className="size-10 bg-slate-50 flex items-center justify-center hover:bg-accent hover:text-white transition-all text-slate-700 border border-border-color" href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" title="Facebook">
              <svg className="size-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
              </svg>
            </a>
          </div>
          <div className="space-y-2 border-l-2 border-accent pl-4 py-1">
            <div className="flex items-center gap-3 text-slate-600">
              <Icon name="mail" className="text-sm text-accent" />
              <span className="text-sm font-bold uppercase tracking-tighter">{SOCIAL_LINKS.email}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Icon name="call" className="text-sm text-accent" />
              <span className="text-sm font-bold uppercase tracking-tighter">{SOCIAL_LINKS.phone}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 space-y-8 text-center md:text-left pt-2">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-primary">
            Ashok Raj <span className="text-accent">Singh</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-bold uppercase tracking-widest">
            Fullstack Developer <span className="text-accent mx-2">/</span> Engineering Student
          </p>
          <p className="max-w-2xl text-slate-500 text-lg leading-relaxed">
            Specialized in crafting robust backends and intuitive user interfaces. Currently finishing my B.Tech with a focus on enterprise-grade performance and scalable systems.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <div className="flex items-center gap-2 bg-slate-50 border border-border-color px-4 py-2 text-slate-600">
            <Icon name="location_on" className="text-accent text-xl" />
            <span className="text-xs font-bold uppercase tracking-widest">India</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 border border-border-color px-4 py-2 text-slate-600">
            <Icon name="school" className="text-accent text-xl" />
            <span className="text-xs font-bold uppercase tracking-widest">B.Tech 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
