import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { 
  Briefcase, Calendar, MapPin, ChevronRight, 
  Code, Cpu, GraduationCap, 
  BarChart3, Wrench,
  Zap, Users, Trophy
} from 'lucide-react';

const Experience = () => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState([]);
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems([0, 1, 2, 3, 4]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      id: 0,
      company: 'ASA Soft – ASA Nam Viet System',
      role: 'Frontend Engineer',
      period: '2024 – 2025',
      location: t('experience.asa_location'),
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      modules: ['Landing', 'POS', 'Payment', 'Auth', 'Order'],
      tech: ['ReactJS', 'Vite', 'TailwindCSS', 'TypeScript', '.NET API'],
      description: t('experience.asa_desc'),
      highlights: [
        t('experience.asa_h1'),
        t('experience.asa_h2'),
        t('experience.asa_h3'),
        t('experience.asa_h4'),
      ]
    },
    {
      id: 1,
      company: 'TMA Solutions',
      role: 'Software Intern',
      period: '2023 – 2024',
      location: t('experience.tma_location'),
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      tech: ['Web Technologies', 'Debugging', 'Internal Tools'],
      description: t('experience.tma_desc'),
      highlights: [
        t('experience.tma_h1'),
        t('experience.tma_h2'),
        t('experience.tma_h3'),
      ]
    },
    {
      id: 2,
      company: 'Teky Creative Technology Academy',
      role: t('experience.teky_role'),
      period: '2021 – 2026',
      location: t('experience.teky_location'),
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-purple-500 to-violet-500',
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      tech: ['Teaching Methodology', 'STEM', 'Mini-Game Development'],
      description: t('experience.teky_desc'),
      highlights: [
        t('experience.teky_h1'),
        t('experience.teky_h2'),
        t('experience.teky_h3'),
      ]
    },
    {
      id: 3,
      company: 'Hung Thinh Media Co., Ltd',
      role: t('experience.ht_role'),
      period: '2025 – 2026',
      location: t('experience.ht_location'),
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      tech: ['AI Data Processing', 'Full Stack', 'OpenClaw', 'AI Hammers', 'API Integration'],
      description: t('experience.ht_desc'),
      highlights: [
        t('experience.ht_h1'),
        t('experience.ht_h2'),
        t('experience.ht_h3'),
        t('experience.ht_h4'),
      ]
    }
  ];

  const sports = [
    { name: 'Badminton', icon: '🏸' },
    { name: 'Soccer', icon: '⚽' },
    { name: 'Chess', icon: '♟️' },
    { name: 'Volleyball', icon: '🏐' },
  ];

  const computerSkills = [
    { name: 'C/C++', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Java', level: 85 },
    { name: 'C#', level: 85 },
    { name: 'SQL Server / MySQL', level: 85 },
    { name: 'MongoDB / NoSQL', level: 75 },
    { name: 'React / Angular', level: 80 },
    { name: 'Unit Testing & UI Testing', level: 75 },
    { name: 'UML / System Design', level: 75 },
    { name: 'English', level: 70 },
  ];

  return (
    <section id="experience" className="min-h-screen pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 dark:bg-orange-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 gradient-text">
              {t('experience.page_title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto slide-up">
              {t('experience.page_subtitle')}
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white dark:bg-gray-800 rounded-xl p-1.5 shadow-lg border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'experience'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600'
                }`}
              >
                <Briefcase className="w-5 h-5" />
                <span>{t('experience.tab_experience')}</span>
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'education'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600'
                }`}
              >
                <GraduationCap className="w-5 h-5" />
                <span>{t('experience.tab_education')}</span>
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'skills'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600'
                }`}
              >
                <Wrench className="w-5 h-5" />
                <span>{t('experience.tab_skills')}</span>
              </button>
              <button
                onClick={() => setActiveTab('sports')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'sports'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600'
                }`}
              >
                <Trophy className="w-5 h-5" />
                <span>{t('experience.tab_sports')}</span>
              </button>
            </div>
          </div>

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 transform md:-translate-x-1/2 hidden sm:block"></div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } ${visibleItems.includes(index) ? 'slide-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} transform -translate-x-1/2 border-4 border-white dark:border-gray-900 shadow-lg z-10 hidden sm:block"
                      style={{ top: '2rem' }}
                    ></div>

                    {/* Card */}
                    <div className={`w-full md:w-5/12 ml-10 sm:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="card group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-l-4 ${exp.borderColor}">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2.5 rounded-xl bg-gradient-to-r ${exp.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              {exp.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                                {exp.company}
                              </h3>
                              <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
                                {exp.role}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Period & Location */}
                        <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Modules (ASA only) */}
                        {exp.modules && (
                          <div className="mb-4">
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                              {t('experience.modules')}:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.modules.map((mod, i) => (
                                <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                                  {mod}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Highlights */}
                        <ul className="space-y-2 mb-4">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300">
                              <ChevronRight className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
                          {exp.tech.map((tech, i) => (
                            <span key={i} className={`px-2.5 py-1 ${exp.bgColor} rounded-md text-xs font-medium text-gray-700 dark:text-gray-300`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="max-w-3xl mx-auto">
              <div className={`card hover:shadow-2xl transition-all duration-500 border-l-4 border-indigo-500 ${visibleItems.includes(4) ? 'slide-up' : 'opacity-0'}`}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {t('experience.edu_school')}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg mb-2">
                      {t('experience.edu_major')}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>08/2021 – 05/2025</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <BarChart3 className="w-4 h-4" />
                        <span>GPA: 3.00 / 4.00</span>
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('experience.edu_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Computer Skills Tab */}
          {activeTab === 'skills' && (
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {computerSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${visibleItems.includes(index % 4) ? 'slide-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
                      <span className="text-sm font-bold text-primary-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sports & Hobbies Tab */}
          {activeTab === 'sports' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {t('experience.sports_title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('experience.sports_subtitle')}
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {sports.map((sport, index) => (
                  <div
                    key={index}
                    className={`card text-center hover:shadow-xl transition-all duration-300 hover:scale-110 group ${visibleItems.includes(index % 4) ? 'slide-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                      {sport.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                      {sport.name}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Team Work Skills */}
              <div className="mt-12">
                <div className="card hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {t('experience.teamwork_title')}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      t('experience.teamwork_1'),
                      t('experience.teamwork_2'),
                      t('experience.teamwork_3'),
                      t('experience.teamwork_4'),
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                        <Zap className="w-5 h-5 text-teal-500" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
