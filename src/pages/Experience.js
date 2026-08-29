import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { BarChart3, Briefcase, Calendar, ChevronRight, GraduationCap, MapPin, Trophy, Users, Wrench } from 'lucide-react';
import asaLogo from '../assets/company-logos/asa.png';
import tekyLogo from '../assets/company-logos/teky.jpeg';
import tmaLogo from '../assets/company-logos/tma.png';
import kVietnamLogo from '../assets/company-logos/k-vietnam.png';

const Experience = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      company: 'Hung Thinh Media Co., Ltd',
      role: t('experience.ht_role'),
      period: '2025 - 2026',
      location: t('experience.ht_location'),
      logo: kVietnamLogo,
      logoAlt: 'K Vietnam logo',
      tech: ['ReactJS', 'C# ASP.NET Core', 'SQL Server', 'JavaScript', 'Tailwind CSS', 'AI API', 'RESTful API', 'Facebook Graph API'],
      description: t('experience.ht_desc'),
      highlights: [
        t('experience.ht_h1'),
        t('experience.ht_h2'),
        t('experience.ht_h3'),
        t('experience.ht_h4'),
        t('experience.ht_h5'),
        t('experience.ht_h6'),
      ],
    },
    {
      company: 'Teky Creative Technology Academy',
      role: t('experience.teky_role'),
      period: '2021 - 2026',
      location: t('experience.teky_location'),
      logo: tekyLogo,
      logoAlt: 'TEKY logo',
      tech: ['Teaching Methodology', 'STEM', 'Mini-Game Development'],
      description: t('experience.teky_desc'),
      highlights: [t('experience.teky_h1'), t('experience.teky_h2'), t('experience.teky_h3')],
    },
    {
      company: 'ASA Soft - ASA Nam Viet System',
      role: 'Full Stack Developer',
      period: '2023 - 2025',
      location: t('experience.asa_location'),
      logo: asaLogo,
      logoAlt: 'ASA logo',
      tech: ['ReactJS', 'TypeScript', 'Vite', 'Tailwind CSS', 'RESTful API', '.NET backend services'],
      modules: ['Landing', 'POS', 'Payment', 'Authentication', 'Order Management'],
      description: t('experience.asa_desc'),
      highlights: [t('experience.asa_h1'), t('experience.asa_h2'), t('experience.asa_h3'), t('experience.asa_h4')],
    },
    {
      company: 'TMA Solutions',
      role: 'Software Intern',
      period: '2023 - 2023',
      location: t('experience.tma_location'),
      logo: tmaLogo,
      logoAlt: 'TMA Solutions logo',
      tech: ['HTML', 'CSS', 'JavaScript', 'Debugging', 'Testing', 'API Integration', 'UI Improvements'],
      description: t('experience.tma_desc'),
      highlights: [t('experience.tma_h1'), t('experience.tma_h2'), t('experience.tma_h3'), t('experience.tma_h4')],
    },
  ];

  const computerSkills = [
    ['C/C++', 80],
    ['Python', 75],
    ['Java programming language', 85],
    ['C# / ASP.NET Core', 85],
    ['SQL Server / MySQL Workbench', 85],
    ['MongoDB / NoSQL', 75],
    ['ReactJS / Angular', 80],
    ['Unit Testing & UI Testing', 75],
    ['UML / System Design', 75],
    ['English', 70],
    ['Docker / JWT', 75],
  ];

  const tabs = [
    { id: 'experience', label: t('experience.tab_experience'), icon: Briefcase },
    { id: 'education', label: t('experience.tab_education'), icon: GraduationCap },
    { id: 'skills', label: t('experience.tab_skills'), icon: Wrench },
    { id: 'sports', label: t('experience.tab_sports'), icon: Trophy },
  ];

  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="section-shell">
        <div className="mb-10">
          <div className="section-kicker">
            <Briefcase className="mr-2 h-3.5 w-3.5" />
            Timeline
          </div>
          <h2 className="section-title">{t('experience.page_title')}</h2>
          <p className="section-copy">{t('experience.page_subtitle')}</p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-2">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition ${
                activeTab === id ? 'bg-white text-zinc-950' : 'text-zinc-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        {activeTab === 'experience' && (
          <div className="relative grid gap-5">
            {experiences.map((exp, index) => {
              return (
                <article key={exp.company} className="glass-card grid gap-6 md:grid-cols-[13rem_1fr]">
                  <div>
                    <div className="flex h-20 w-32 items-center justify-center rounded-lg border border-white/10 bg-white p-3 shadow-xl shadow-black/20">
                      <img
                        src={exp.logo}
                        alt={exp.logoAlt}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-zinc-400 md:block md:space-y-2">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                        <p className="mt-1 font-semibold text-teal-200">{exp.role}</p>
                      </div>
                      <span className="tech-pill w-fit">0{index + 1}</span>
                    </div>

                    <p className="mt-4 leading-7 text-zinc-400">{exp.description}</p>

                    {exp.modules && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.modules.map((mod) => (
                          <span key={mod} className="tech-pill">{mod}</span>
                        ))}
                      </div>
                    )}

                    <ul className="mt-5 grid gap-2">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2 text-sm leading-6 text-zinc-300">
                          <ChevronRight className="mt-1 h-4 w-4 flex-none text-teal-200" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                      {exp.tech.map((tech) => (
                        <span key={tech} className="tech-pill">{tech}</span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="glass-card max-w-3xl">
            <GraduationCap className="h-10 w-10 text-teal-200" />
            <h3 className="mt-4 text-2xl font-bold text-white">{t('experience.edu_school')}</h3>
            <p className="mt-1 font-semibold text-teal-200">{t('experience.edu_major')}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-400">
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />08/2021 - 05/2025</span>
              <span className="flex items-center gap-2"><BarChart3 className="h-4 w-4" />GPA: 3.00 / 4.00</span>
            </div>
            <p className="mt-5 leading-7 text-zinc-400">{t('experience.edu_desc')}</p>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="grid gap-4 md:grid-cols-2">
            {computerSkills.map(([name, level]) => (
              <div key={name} className="glass-panel p-5">
                <div className="mb-3 flex justify-between text-sm font-semibold">
                  <span className="text-white">{name}</span>
                  <span className="text-teal-200">{level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-teal-300 to-sky-300" style={{ width: `${level}%` }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'sports' && (
          <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
            <div className="glass-card">
              <Trophy className="h-10 w-10 text-teal-200" />
              <h3 className="mt-4 text-2xl font-bold text-white">{t('experience.sports_title')}</h3>
              <p className="mt-3 text-zinc-400">{t('experience.sports_subtitle')}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Badminton', 'Soccer', 'Chess', 'Volleyball'].map((sport) => (
                  <span key={sport} className="tech-pill">{sport}</span>
                ))}
              </div>
            </div>
            <div className="glass-card">
              <Users className="h-10 w-10 text-teal-200" />
              <h3 className="mt-4 text-2xl font-bold text-white">{t('experience.teamwork_title')}</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[t('experience.teamwork_1'), t('experience.teamwork_2'), t('experience.teamwork_3'), t('experience.teamwork_4')].map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">{item}</div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
