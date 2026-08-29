import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import tienImage from '../assets/tien.jpg';
import CV from '../assets/SOFT_DEV.pdf';

const roles = ['Software Development', 'Full Stack Developer', 'AI & Automation', 'ReactJS + ASP.NET Core'];

const Home = () => {
  const { t } = useTranslation();
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRole];
    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < fullText.length) {
        setDisplayText(fullText.slice(0, displayText.length + 1));
        return;
      }

      if (!isDeleting && displayText.length === fullText.length) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
        return;
      }

      setIsDeleting(false);
      setCurrentRole((value) => (value + 1) % roles.length);
    }, isDeleting ? 45 : 95);

    return () => clearTimeout(timer);
  }, [currentRole, displayText, isDeleting]);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'SOFT_DEV.pdf';
    link.click();
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <div className="section-kicker">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            Software Development - AI & Automation
          </div>

          <p className="text-lg font-medium text-zinc-400">{t('home.title')}</p>
          <h1 className="hero-name mt-3 max-w-4xl text-6xl font-black leading-none sm:text-7xl lg:text-8xl">
            {t('home.name')}
          </h1>

          <div className="mt-6 h-10 text-xl font-semibold text-teal-200 sm:text-2xl">
            {displayText}
            <span className="ml-1 animate-pulse text-white">|</span>
          </div>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">{t('home.description')}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              <Mail className="h-4 w-4" />
              {t('home.cta')}
            </button>
            <button onClick={downloadCV} className="btn-secondary">
              <Download className="h-4 w-4" />
              {t('home.download_cv')}
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { href: 'https://github.com/dangtien10062003', icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/ti%E1%BA%BFn-%C4%91%E1%BA%B7ng-515906372/', icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:dangngoctien10062003@gmail.com', icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-200 transition hover:-translate-y-1 hover:border-teal-300/50 hover:bg-teal-300/10 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-md lg:max-w-lg">
          <div className="hero-portrait relative rounded-[24px] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
              <img src={tienImage} alt="Ngoc Tien Dang" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-2 rounded-lg border border-white/10 bg-zinc-950/90 p-3 text-center shadow-2xl backdrop-blur-xl">
              {[
                ['4', 'Projects'],
                ['3', 'Companies'],
                ['3.00', 'GPA'],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-lg font-black text-white">{value}</div>
                  <div className="text-[11px] uppercase tracking-widest text-zinc-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur transition hover:bg-white/10 md:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
};

export default Home;
