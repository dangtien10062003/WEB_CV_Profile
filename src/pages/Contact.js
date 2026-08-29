import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { CheckCircle, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2500);
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="section-shell">
        <div className="mb-12">
          <div className="section-kicker">
            <MessageCircle className="mr-2 h-3.5 w-3.5" />
            Contact
          </div>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-copy">{t('contact.subtitle')}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <div className="glass-card">
              <Mail className="h-8 w-8 text-teal-200" />
              <h3 className="mt-4 text-xl font-bold text-white">Email</h3>
              <a href={`mailto:${t('contact.email')}`} className="mt-2 block break-all text-zinc-400 transition hover:text-teal-200">
                {t('contact.email')}
              </a>
            </div>

            <div className="glass-card">
              <MapPin className="h-8 w-8 text-teal-200" />
              <h3 className="mt-4 text-xl font-bold text-white">Location</h3>
              <p className="mt-2 text-zinc-400">{t('contact.location')}</p>
            </div>

            <div className="glass-card">
              <Phone className="h-8 w-8 text-teal-200" />
              <h3 className="mt-4 text-xl font-bold text-white">Phone</h3>
              <a href={`tel:${t('contact.phone')}`} className="mt-2 block text-zinc-400 transition hover:text-teal-200">
                {t('contact.phone')}
              </a>
            </div>

            <div className="glass-card">
              <h3 className="text-xl font-bold text-white">Social</h3>
              <div className="mt-5 flex gap-3">
                <a href="https://github.com/dangtien10062003" target="_blank" rel="noopener noreferrer" className="btn-secondary px-4">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/ti%E1%BA%BFn-%C4%91%E1%BA%B7ng-515906372/" target="_blank" rel="noopener noreferrer" className="btn-secondary px-4">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 sm:p-7">
            {isSubmitted ? (
              <div className="grid min-h-[28rem] place-items-center text-center">
                <div>
                  <CheckCircle className="mx-auto h-16 w-16 text-teal-200" />
                  <h3 className="mt-5 text-2xl font-bold text-white">Message sent</h3>
                  <p className="mt-2 text-zinc-400">Thanks for reaching out. I will reply as soon as possible.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={t('contact.form.name')} name="name" value={formData.name} onChange={handleChange} />
                  <Field label={t('contact.form.email')} name="email" type="email" value={formData.email} onChange={handleChange} />
                </div>
                <Field label={t('contact.form.subject')} name="subject" value={formData.subject} onChange={handleChange} />
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-zinc-300">{t('contact.form.message')}</span>
                  <textarea
                    name="message"
                    rows={7}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-zinc-950/70 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-teal-300/60 focus:ring-4 focus:ring-teal-300/10"
                  />
                </label>
                <button type="submit" className="btn-primary w-full">
                  <Send className="h-4 w-4" />
                  {t('contact.form.send')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, name, type = 'text', value, onChange }) => (
  <label className="block">
    <span className="mb-2 block text-sm font-semibold text-zinc-300">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full rounded-lg border border-white/10 bg-zinc-950/70 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-teal-300/60 focus:ring-4 focus:ring-teal-300/10"
    />
  </label>
);

export default Contact;
