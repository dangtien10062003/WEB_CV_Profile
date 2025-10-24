import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { ExternalLink, Github, Calendar, Users, Award, Trophy, Star, Zap } from 'lucide-react';

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

          {/* Academic Projects Section */}
          <div className="mb-16">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 gradient-text">
                Dự án học tập
              </h2>
              <p className="text-gray-600 dark:text-gray-300 slide-up">
                Các sản phẩm và dự án đã thực hiện trong quá trình học tập
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Website bán hàng điện tử",
                  description: "Xây dựng website thương mại điện tử với React, Node.js và MongoDB. Tích hợp thanh toán online và quản lý đơn hàng.",
                  tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
                  link: "#",
                  year: "2023",
                  type: "Đồ án tốt nghiệp"
                },
                {
                  title: "Ứng dụng quản lý thư viện",
                  description: "Phát triển hệ thống quản lý thư viện với giao diện thân thiện, tính năng tìm kiếm và mượn trả sách.",
                  tech: ["Java", "Spring Boot", "MySQL", "Bootstrap"],
                  link: "#",
                  year: "2022",
                  type: "Dự án nhóm"
                },
                {
                  title: "Game đơn giản với Python",
                  description: "Tạo game Snake và Tetris bằng Python với Pygame. Học cách xử lý sự kiện và đồ họa 2D.",
                  tech: ["Python", "Pygame", "OOP"],
                  link: "#",
                  year: "2021",
                  type: "Bài tập cá nhân"
                },
                {
                  title: "Website tin tức",
                  description: "Xây dựng trang tin tức với tính năng đăng bài, bình luận và phân quyền người dùng.",
                  tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
                  link: "#",
                  year: "2021",
                  type: "Dự án nhóm"
                },
                {
                  title: "Ứng dụng quản lý sinh viên",
                  description: "Phần mềm quản lý thông tin sinh viên với tính năng nhập điểm, xem báo cáo và thống kê.",
                  tech: ["C#", "Windows Forms", "SQL Server"],
                  link: "#",
                  year: "2020",
                  type: "Đồ án môn học"
                },
                {
                  title: "Website portfolio cá nhân",
                  description: "Thiết kế và phát triển website giới thiệu bản thân với giao diện responsive và hiệu ứng đẹp mắt.",
                  tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                  link: "#",
                  year: "2020",
                  type: "Bài tập cá nhân"
                }
              ].map((project, index) => (
                <div 
                  key={index} 
                  className={`card group hover:shadow-xl transition-all duration-500 hover:scale-105 hover-lift ${
                    visibleProjects.includes(index) ? 'slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                        {project.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full hover:scale-105 transition-transform duration-300"
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
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
          </div>

          {/* Professional Projects Grid */}
          <div className="mb-16">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 gradient-text">
                Dự án chuyên nghiệp
              </h2>
              <p className="text-gray-600 dark:text-gray-300 slide-up">
                Các dự án thương mại và chuyên nghiệp đã thực hiện
              </p>
            </div>
            
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`card group hover:shadow-xl transition-all duration-500 hover:scale-105 hover-lift ${
                  visibleProjects.includes(index) ? 'slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </a>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full hover:scale-105 transition-transform duration-300"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>2023</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>Team</span>
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
          </div>

          {/* Achievements Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { number: '50+', label: 'Projects Completed', icon: <Zap className="w-6 h-6" />, color: 'from-blue-500 to-blue-600' },
              { number: '25+', label: 'Happy Clients', icon: <Users className="w-6 h-6" />, color: 'from-green-500 to-green-600' },
              { number: '100+', label: 'GitHub Commits', icon: <Github className="w-6 h-6" />, color: 'from-purple-500 to-purple-600' },
              { number: '5+', label: 'Years Experience', icon: <Award className="w-6 h-6" />, color: 'from-orange-500 to-orange-600' }
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

          {/* Teaching Experience */}
          <div className="card hover-lift mb-8">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-blue-500 mr-3 animate-pulse" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white gradient-text">
                Kinh nghiệm giảng dạy
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  name: 'Giảng viên lập trình', 
                  company: 'Teky Education', 
                  period: '2024 - Hiện tại',
                  description: 'Dạy lập trình cho trẻ em và thanh thiếu niên, hướng dẫn các khóa học về Scratch, Python, Web Development',
                  students: '50+ học sinh',
                  color: 'from-blue-500 to-blue-600'
                },
                { 
                  name: 'Mentor sinh viên', 
                  company: 'University Projects', 
                  period: '2023 - 2024',
                  description: 'Hướng dẫn sinh viên trong các dự án học tập, chia sẻ kinh nghiệm phát triển phần mềm',
                  students: '20+ sinh viên',
                  color: 'from-green-500 to-green-600'
                }
              ].map((exp, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300`}>
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{exp.name}</h3>
                    <p className="text-sm text-primary-600 font-medium">{exp.company}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{exp.description}</p>
                    <p className="text-xs text-primary-600 font-medium">{exp.students}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="card hover-lift">
            <div className="flex items-center mb-6">
              <Trophy className="w-8 h-8 text-yellow-500 mr-3 animate-pulse" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white gradient-text">
                Certifications & Awards
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  name: 'AWS Certified Developer', 
                  issuer: 'Amazon Web Services', 
                  icon: 'AWS',
                  color: 'from-orange-500 to-orange-600',
                  delay: 0
                },
                { 
                  name: 'React Developer Certification', 
                  issuer: 'Meta', 
                  icon: 'REACT',
                  color: 'from-blue-500 to-blue-600',
                  delay: 200
                },
                { 
                  name: 'JavaScript Algorithms', 
                  issuer: 'FreeCodeCamp', 
                  icon: 'JS',
                  color: 'from-yellow-500 to-yellow-600',
                  delay: 400
                },
                { 
                  name: 'Node.js Certification', 
                  issuer: 'OpenJS Foundation', 
                  icon: 'NODE',
                  color: 'from-green-500 to-green-600',
                  delay: 600
                }
              ].map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${cert.delay}ms` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mt-20">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 gradient-text">
                Career Timeline
              </h2>
              <p className="text-gray-600 dark:text-gray-300 slide-up">
                My professional journey and key milestones
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-purple-500"></div>
              
              {[
                { year: '2024', title: 'Backend & Frontend Developer', company: 'TNHH Hệ Thống Thông Tin Nam Việt ASA', description: 'Phát triển Backend API và Frontend UI/UX cho các hệ thống thông tin nội bộ' },
                { year: '2024', title: 'Giảng viên lập trình', company: 'Teky Education', description: 'Dạy lập trình cho trẻ em và thanh thiếu niên, hướng dẫn các khóa học về Scratch, Python, Web Development' },
                { year: '2023', title: 'Sinh viên & Freelancer', company: 'University + Freelance', description: 'Học tập tại trường đại học và thực hiện các dự án freelance để tích lũy kinh nghiệm' },
                { year: '2021', title: 'Student Developer', company: 'University Projects', description: 'Bắt đầu học lập trình và thực hiện các dự án học tập đầu tiên' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-1/2 px-6">
                    <div className="card hover-lift">
                      <div className="text-primary-600 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-primary-600 font-medium mb-2">{item.company}</p>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                  <div className="w-1/2"></div>
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