import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Icon from './Icon';

interface ContactFormProps {
  theme: 'light' | 'dark';
}

const ContactForm: React.FC<ContactFormProps> = ({ theme }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const [error, setError] = useState('');

  const isDark = theme === 'dark';

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!formRef.current) {
      setError('Form is not available.');
      setStatus('error');
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setError('EmailJS configuration is missing.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setError('');

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Unable to send your message. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className={`space-y-12 py-12 ${
        isDark ? 'text-slate-100' : 'text-slate-900'
      }`}
    >
      <h2 className="mb-2 text-3xl font-black uppercase tracking-tighter">
        Get In Touch
      </h2>

      <div
        className={`mx-auto max-w-2xl border p-8 shadow-xl md:p-12 ${
          isDark
            ? 'border-slate-800 bg-slate-900'
            : 'border-slate-200 bg-white'
        }`}
      >
        {status === 'success' ? (
          <div className="space-y-4 py-12 text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#F97316]/20 text-[#F97316]">
              <Icon name="check" className="text-3xl" />
            </div>

            <h3 className="text-2xl font-black uppercase">
              Message Sent!
            </h3>

            <p
              className={
                isDark ? 'text-slate-400' : 'text-slate-500'
              }
            >
              Thanks for reaching out. I'll get back to you soon.
            </p>

            <button
              type="button"
              onClick={() => {
                setStatus('idle');
                setError('');
              }}
              className="font-black uppercase text-[#F97316] hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {status === 'error' && (
              <p className="text-sm text-red-500">
                {error}
              </p>
            )}

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-black uppercase tracking-widest text-slate-500"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full border border-border-color bg-slate-50 p-4 text-sm font-medium text-primary focus:border-accent focus:ring-0"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-black uppercase tracking-widest text-slate-500"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full border border-border-color bg-slate-50 p-4 text-sm font-medium text-primary focus:border-accent focus:ring-0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-xs font-black uppercase tracking-widest text-slate-500"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What is this about?"
                className="w-full border border-border-color bg-slate-50 p-4 text-sm font-medium text-primary focus:border-accent focus:ring-0"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-xs font-black uppercase tracking-widest text-slate-500"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="How can I help you?"
                className="w-full resize-none border border-border-color bg-slate-50 p-4 text-sm font-medium text-primary focus:border-accent focus:ring-0"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-[#F97316] py-5 font-black uppercase tracking-widest text-white transition-all hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === 'sending'
                ? 'Sending...'
                : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;