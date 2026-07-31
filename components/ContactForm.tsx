
import React, { useState } from 'react';
import Icon from './Icon';

interface ContactFormProps {
  theme: 'light' | 'dark';
}

const ContactForm: React.FC<ContactFormProps> = ({ theme }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const isDark = theme === 'dark';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className={`space-y-12 py-12 transition-colors duration-300 ${isDark ? 'text-slate-100' : 'text-slate-900'}`} id="contact">
      <div className="flex flex-col items-center">
        <h2 className={`mb-2 text-3xl font-black uppercase tracking-tighter ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Get In Touch</h2>
        <div className="h-1 w-20 bg-[#F97316]"></div>
      </div>

      <div className={`mx-auto max-w-2xl border p-8 shadow-xl md:p-12 ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
        {status === 'success' ? (
          <div className="text-center space-y-4 py-12">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#F97316]/20 text-[#F97316]">
              <Icon name="check" className="text-3xl" />
            </div>
            <h3 className={`text-2xl font-black uppercase ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Message Sent!</h3>
            <p className={isDark ? 'text-slate-400' : 'text-slate-500'}>Thanks for reaching out. I'll get back to you soon.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="font-black uppercase text-[#F97316] hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={`text-xs font-black uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Your name"
                  className="w-full bg-slate-50 border border-border-color p-4 text-sm focus:ring-0 focus:border-accent text-primary font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className={`text-xs font-black uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Email</label>
                <input 
                  required
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full bg-slate-50 border border-border-color p-4 text-sm focus:ring-0 focus:border-accent text-primary font-medium"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className={`text-xs font-black uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Subject</label>
              <input 
                required
                type="text" 
                placeholder="What is this about?"
                className="w-full bg-slate-50 border border-border-color p-4 text-sm focus:ring-0 focus:border-accent text-primary font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className={`text-xs font-black uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Message</label>
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
              className="w-full bg-[#F97316] py-5 font-black uppercase tracking-widest text-white transition-all hover:bg-orange-600 disabled:opacity-50"
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
