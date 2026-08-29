import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="border-t border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <h3 className="text-lg font-bold text-white">Ngoc Tien Dang</h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
            Software Development profile focused on ReactJS, C# ASP.NET Core, SQL Server, AI APIs, and automation workflows.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://github.com/dangtien10062003" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/10 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/ti%E1%BA%BFn-%C4%91%E1%BA%B7ng-515906372/" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/10 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:dangngoctien10062003@gmail.com" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/10 hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-zinc-400 sm:grid-cols-3">
          {[
            ['home', 'Home'],
            ['experience', 'Experience'],
            ['skills', 'Skills'],
            ['achievements', 'Projects'],
            ['contact', 'Contact'],
            ['cv', 'CV'],
          ].map(([id, label]) => (
            <button key={id} onClick={() => scrollToSection(id)} className="text-left transition hover:text-white">
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-zinc-500">
        © 2026 Ngoc Tien Dang. Built with React and Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;
