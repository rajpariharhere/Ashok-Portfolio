
import React, { useState } from 'react';
import Icon from './Icon';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="space-y-12 py-12" id="contact">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-2 text-primary">Get In Touch</h2>
        <div className="h-1 w-20 bg-accent"></div>
      </div>

      <div className="max-w-2xl mx-auto bg-white border border-border-color p-8 md:p-12 shadow-xl">
        {status === 'success' ? (
          <div className="text-center space-y-4 py-12">
            <div className="size-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto">
              <Icon name="check" className="text-3xl" />
            </div>
            <h3 className="text-2xl font-black uppercase text-primary">Message Sent!</h3>
            <p className="text-slate-500">Thanks for reaching out. I'll get back to you soon.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-accent font-black uppercase hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Your name"
                  className="w-full bg-slate-50 border border-border-color p-4 text-sm focus:ring-0 focus:border-accent text-primary font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Email</label>
                <input 
                  required
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full bg-slate-50 border border-border-color p-4 text-sm focus:ring-0 focus:border-accent text-primary font-medium"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500">Subject</label>
              <input 
                required
                type="text" 
                placeholder="What is this about?"
                className="w-full bg-slate-50 border border-border-color p-4 text-sm focus:ring-0 focus:border-accent text-primary font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500">Message</label>
              <textarea 
                required
                rows={5}
                placeholder="How can I help you?"
                className="w-full bg-slate-50 border border-border-color p-4 text-sm focus:ring-0 resize-none focus:border-accent text-primary font-medium"
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-accent hover:bg-orange-600 text-white font-black py-5 uppercase tracking-widest transition-all disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
