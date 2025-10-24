import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Code, Database, Wrench, Star, Zap, Target, TrendingUp } from 'lucide-react';

const Skills = () => {
  const { t } = useTranslation();
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 text-primary-600" />,
      title: t('skills.frontend'),
      skills: t('skills.frontend_skills', { returnObjects: true }),
      color: 'from-blue-500 to-blue-600',
      delay: 0
    },
    {
      icon: <Database className="w-8 h-8 text-primary-600" />,
      title: t('skills.backend'),
      skills: t('skills.backend_skills', { returnObjects: true }),
      color: 'from-green-500 to-green-600',
      delay: 200
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary-600" />,
      title: t('skills.tools'),
      skills: t('skills.tools_skills', { returnObjects: true }),
      color: 'from-purple-500 to-purple-600',
      delay: 400
    }
  ];

  const additionalSkills = [
    { name: 'Agile', icon: <Target className="w-4 h-4" />, color: 'from-green-400 to-green-600' },
    { name: 'Scrum', icon: <TrendingUp className="w-4 h-4" />, color: 'from-blue-400 to-blue-600' },
    { name: 'DevOps', icon: <Zap className="w-4 h-4" />, color: 'from-purple-400 to-purple-600' },
    { name: 'CI/CD', icon: <Code className="w-4 h-4" />, color: 'from-red-400 to-red-600' },
    { name: 'Testing', icon: <Star className="w-4 h-4" />, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Performance', icon: <Zap className="w-4 h-4" />, color: 'from-indigo-400 to-indigo-600' },
    { name: 'Security', icon: <Target className="w-4 h-4" />, color: 'from-pink-400 to-pink-600' },
    { name: 'Accessibility', icon: <Star className="w-4 h-4" />, color: 'from-teal-400 to-teal-600' },
    { name: 'SEO', icon: <TrendingUp className="w-4 h-4" />, color: 'from-orange-400 to-orange-600' },
    { name: 'Analytics', icon: <Database className="w-4 h-4" />, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Monitoring', icon: <Zap className="w-4 h-4" />, color: 'from-emerald-400 to-emerald-600' },
    { name: 'Documentation', icon: <Code className="w-4 h-4" />, color: 'from-violet-400 to-violet-600' }
  ];

  return (
    <section id="skills" className="min-h-screen pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-200 dark:bg-green-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 gradient-text">
              {t('skills.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto slide-up">
              {t('skills.subtitle')}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`card group hover:shadow-xl transition-all duration-500 hover:scale-105 hover-lift ${
                  visibleCards.includes(index) ? 'slide-up' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${category.delay}ms`,
                  transitionDelay: `${category.delay}ms`
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg transition-all duration-300"
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                    >
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={`w-4 h-4 transition-all duration-300 ${
                              starIndex < 4 ? 'text-yellow-400 fill-current hover:scale-125' : 'text-gray-300'
                            }`}
                            style={{ animationDelay: `${starIndex * 100}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Animated Progress bar */}
                <div className="mt-6">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 group-hover:w-full hover-glow`}
                      style={{ 
                        width: '85%',
                        animationDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <div className="mt-20">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 gradient-text">
                Additional Expertise
              </h2>
              <p className="text-gray-600 dark:text-gray-300 slide-up">
                Continuous learning and adaptation to new technologies
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {additionalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="card text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover-lift group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 transition-colors duration-300">
                      {skill.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Progress Visualization */}
          <div className="mt-20">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 gradient-text">
                Skill Proficiency
              </h2>
              <p className="text-gray-600 dark:text-gray-300 slide-up">
                My expertise levels across different technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { skill: 'React/Next.js', level: 95, color: 'from-blue-500 to-blue-600' },
                { skill: 'Node.js/Express', level: 90, color: 'from-green-500 to-green-600' },
                { skill: 'TypeScript', level: 85, color: 'from-purple-500 to-purple-600' },
                { skill: 'AWS/Cloud', level: 80, color: 'from-orange-500 to-orange-600' },
                { skill: 'Database Design', level: 88, color: 'from-pink-500 to-pink-600' },
                { skill: 'UI/UX Design', level: 75, color: 'from-indigo-500 to-indigo-600' }
              ].map((item, index) => (
                <div key={index} className="card hover-lift">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{item.skill}</span>
                    <span className="text-sm text-primary-600 font-bold">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${item.color} h-2 rounded-full transition-all duration-1000`}
                      style={{ 
                        width: `${item.level}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    ></div>
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

export default Skills;
