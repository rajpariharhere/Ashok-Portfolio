
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Internships from './components/Internships';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingStatus from './components/FloatingStatus';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1200px] mx-auto px-6 py-12 space-y-24">
        <Hero />
        <Journey />
        <Internships />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
      <FloatingStatus />
    </div>
  );
};

export default App;
