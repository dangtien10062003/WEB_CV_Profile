import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { ExternalLink, Github, Calendar, Users, Award, Trophy, Star, Zap, ShoppingCart, HardDrive, BookOpen } from 'lucide-react';

const Achievements = () => {
  const { t } = useTranslation();
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [visibleStats, setVisibleStats] = useState([]);
  const projects = t('achievements.projects', { returnObjects: true });

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setVisibleProjects([0, 1, 2]);
    }, 300);
    
    const timer2 = setTimeout(() => {
      setVisibleStats([0, 1, 2, 3]);
    }, 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const projectIcons = [
    <ShoppingCart className="w-8 h-8 text-pink-500" />,
    <HardDrive className="w-8 h-8 text-blue-500" />,
    <BookOpen className="w-8 h-8 text-green-500" />,
  ];

  const projectColors = [
    'from-pink-500 to-rose-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
  ];

  return (
    <section id="achievements" className="min-h-screen pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-pink-900"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-200 dark:bg-yellow-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 gradient-text">
              {t('achievements.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto slide-up">
              {t('achievements.subtitle')}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`card group hover:shadow-xl transition-all duration-500 hover:scale-105 hover-lift ${
                  visibleProjects.includes(index) ? 'slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${projectColors[index % 3]} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {projectIcons[index % 3]}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </a>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full hover:scale-105 transition-transform duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{index === 1 ? '2024' : '2023'}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>Academic</span>
                    </div>
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { number: '3+', label: 'Years Experience', icon: <Zap className="w-6 h-6" />, color: 'from-blue-500 to-blue-600' },
              { number: '4', label: 'Companies Worked', icon: <Award className="w-6 h-6" />, color: 'from-green-500 to-green-600' },
              { number: '50+', label: 'Projects Completed', icon: <Trophy className="w-6 h-6" />, color: 'from-purple-500 to-purple-600' },
              { number: '100+', label: 'Students Taught', icon: <Users className="w-6 h-6" />, color: 'from-orange-500 to-orange-600' }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`card text-center hover-lift ${
                  visibleStats.includes(index) ? 'bounce-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 counter-animation`}>
                    {stat.number}
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color} text-white`}>
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Key Highlights */}
          <div className="card hover-lift">
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-yellow-500 mr-3 animate-pulse" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white gradient-text">
                Key Highlights
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Full Stack Development', desc: 'Built complete systems from frontend to backend, database design to API integration', color: 'from-blue-500 to-blue-600' },
                { title: 'AI & Automation', desc: 'Deployed AI Agents (OpenClaw, AI Hammers) to automate business workflows and boost productivity', color: 'from-purple-500 to-purple-600' },
                { title: 'Teaching & Mentoring', desc: 'Taught programming to 100+ students at Teky, designed STEM curriculum and mini-game projects', color: 'from-green-500 to-green-600' },
                { title: 'Agile Teamwork', desc: 'Experienced in Scrum, code review, documentation, and cross-functional collaboration', color: 'from-orange-500 to-orange-600' },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
