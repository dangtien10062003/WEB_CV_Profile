import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { ArrowUpRight, Bot, Building2, Globe2, Megaphone, Trophy } from 'lucide-react';
import aiChatbotScreenshot from '../assets/project-screenshots/ai-customer-service-chatbot.png';
import aiContentScreenshot from '../assets/project-screenshots/ai-content-facebook-auto-posting.png';
import managementScreenshot from '../assets/project-screenshots/hotel-resort-restaurant-management.png';
import carpeDScreenshot from '../assets/project-screenshots/carpe-d-website.png';

const Achievements = () => {
  const { t } = useTranslation();
  const projects = t('achievements.projects', { returnObjects: true });

  const projectMeta = [
    { icon: Bot, label: 'AI Chatbot', screenshot: aiChatbotScreenshot },
    { icon: Megaphone, label: 'Automation', screenshot: aiContentScreenshot },
    { icon: Building2, label: 'Management', screenshot: managementScreenshot },
    { icon: Globe2, label: 'Website', screenshot: carpeDScreenshot },
  ];

  return (
    <section id="achievements" className="relative overflow-hidden">
      <div className="section-shell">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="section-kicker">
              <Trophy className="mr-2 h-3.5 w-3.5" />
              Selected work
            </div>
            <h2 className="section-title">{t('achievements.title')}</h2>
            <p className="section-copy">{t('achievements.subtitle')}</p>
          </div>
          <a href="https://github.com/dangtien10062003" target="_blank" rel="noopener noreferrer" className="btn-secondary w-fit">
            GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const meta = projectMeta[index % projectMeta.length];
            const Icon = meta.icon;

            return (
              <article key={project.title} className="glass-card group overflow-hidden p-0">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-zinc-900">
                  <img
                    src={meta.screenshot}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 grid h-14 w-14 place-items-center rounded-lg bg-zinc-950 text-white shadow-xl">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="absolute bottom-5 right-5 rounded-full bg-zinc-950/80 px-3 py-1 text-xs font-semibold text-white">
                    {meta.label}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-200 transition hover:text-white"
                  >
                    View source
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {[
            ['4', 'CV projects'],
            ['3', 'Companies'],
            ['2021-2026', 'Teaching experience'],
            ['3.00/4.00', 'GPA'],
          ].map(([value, label]) => (
            <div key={label} className="glass-panel p-5 text-center">
              <div className="text-3xl font-black text-white">{value}</div>
              <div className="mt-1 text-sm text-zinc-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
