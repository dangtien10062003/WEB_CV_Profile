import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Code2, Database, Sparkles, Terminal, Wrench } from 'lucide-react';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      icon: Code2,
      title: t('skills.frontend'),
      skills: t('skills.frontend_skills', { returnObjects: true }),
      accent: 'from-sky-300 to-teal-200',
      note: 'Interfaces, states, responsive layouts',
    },
    {
      icon: Database,
      title: t('skills.backend'),
      skills: t('skills.backend_skills', { returnObjects: true }),
      accent: 'from-emerald-300 to-lime-200',
      note: 'APIs, data models, business logic',
    },
    {
      icon: Wrench,
      title: t('skills.tools'),
      skills: t('skills.tools_skills', { returnObjects: true }),
      accent: 'from-violet-300 to-fuchsia-200',
      note: 'Delivery, design, automation',
    },
  ];

  const marqueeSkills = [
    'ReactJS', 'TypeScript', 'TailwindCSS', 'C# ASP.NET Core', 'RESTful API', 'JWT',
    'SQL Server', 'MySQL Workbench', 'MongoDB', 'Docker', 'AI API', 'OpenAI API', 'Facebook Graph API',
  ];

  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="section-shell">
        <div className="mb-12">
          <div className="section-kicker">
            <Terminal className="mr-2 h-3.5 w-3.5" />
            Tech stack
          </div>
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-copy">{t('skills.subtitle')}</p>
        </div>

        <div className="mb-12 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] py-4">
          <div className="marquee-track flex w-max gap-3 px-4">
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <span key={`${skill}-${index}`} className="tech-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {skillCategories.map(({ icon: Icon, title, skills, accent, note }) => (
            <div key={title} className="glass-card group">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <div className={`mb-4 grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br ${accent} text-zinc-950 shadow-lg`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{note}</p>
                </div>
                <Sparkles className="h-5 w-5 text-teal-200 opacity-60 transition group-hover:rotate-12 group-hover:opacity-100" />
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="tech-pill hover:border-teal-300/50 hover:text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {[
            ['90%', 'React / Tailwind'],
            ['85%', 'C# / .NET'],
            ['85%', 'SQL / Data'],
            ['75%', 'AI Automation'],
          ].map(([value, label]) => (
            <div key={label} className="glass-panel p-5">
              <div className="text-3xl font-black text-white">{value}</div>
              <div className="mt-1 text-sm text-zinc-400">{label}</div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-teal-300 to-sky-300" style={{ width: value }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
