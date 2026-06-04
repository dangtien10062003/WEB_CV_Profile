import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Download, Github, Linkedin, Mail, Sparkles, Code, Coffee, User, Monitor, Server } from 'lucide-react';
import CVUpload from '../components/CVUpload';
import tienImage from '../assets/tien.jpg';
import CV from '../assets/CV_DangNgocTien2.pdf';

const Home = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  
  // Typewriter effect states
  const roles = [
    'Frontend Engineer',
    'Full Stack Developer',
    'AI Data Developer',
    'Programming Instructor',
    'Software Developer'
  ];
  
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentFullText = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <section id="home" className="min-h-screen pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 dark:bg-primary-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`space-y-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    Welcome to my portfolio
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white slide-up">
                  {t('home.title')}
                </h1>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text bounce-in">
                  {t('home.name')}
                </h2>
                
                {/* Typewriter Effect for Role */}
                <div className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 slide-in-left">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    {displayText}
                    <span className="animate-pulse text-primary-500">|</span>
                  </span>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed slide-in-left">
                {t('home.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 slide-up">
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  className="btn-primary flex items-center justify-center space-x-2 hover-glow transform hover:scale-105 transition-all duration-300"
                >
                  <span>{t('home.cta')}</span>
                </button>
                <button 
                  className="btn-secondary flex items-center justify-center space-x-2 hover-lift cv-download-animation transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    // Tải file CV thật của bạn
                    const link = document.createElement('a');
                    link.href = CV;
                    link.download = 'CV_DangNgocTien2.pdf';
                    link.click();
                  }}
                >
                  <Download className="w-5 h-5" />
                  <span>{t('home.download_cv')}</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 slide-in-left">
                <a
                  href="https://github.com/dangtien10062003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12 hover-glow group"
                >
                  <Github className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary-600 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ti%E1%BA%BFn-%C4%91%E1%BA%B7ng-515906372/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12 hover-glow group"
                >
                  <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 transition-colors" />
                </a>
                <a
                  href="mailto:dangngoctien10062003@gmail.com"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12 hover-glow group"
                >
                  <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-green-600 transition-colors" />
                </a>
              </div>
            </div>

            {/* Image/Illustration */}
            <div className="flex justify-center lg:justify-end slide-in-right">
              <div className="relative">
                {/* Main Image Container */}
                <div className="w-80 h-80 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center glow float relative overflow-hidden">
                  <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden border-4 border-white/20">
                    <img 
                      src={tienImage}  
                      alt="Đặng Ngọc Tiến" 
                      className="w-64 h-64 object-cover rounded-full hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Rotating Border Effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-300 animate-spin" style={{animationDuration: '20s'}}></div>
                </div>

                {/* Enhanced Floating Developer Icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full developer-jump flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group">
                  <User className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full developer-jump-2 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group" style={{animationDelay: '1s'}}>
                  <Monitor className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-full developer-jump-3 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group">
                  <Server className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute top-1/4 -right-12 w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full developer-jump flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group" style={{animationDelay: '2s'}}>
                  <Code className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute bottom-1/4 -right-6 w-6 h-6 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full developer-jump-2 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group" style={{animationDelay: '3s'}}>
                  <Coffee className="w-3 h-3 text-white group-hover:scale-110 transition-transform" />
                </div>

                {/* Additional Floating Elements */}
                <div className="absolute top-10 left-10 w-4 h-4 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-10 right-10 w-3 h-3 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center scroll-reveal hover-lift group">
              <div className="relative">
                <div className="text-4xl font-bold text-primary-600 mb-2 counter-animation group-hover:scale-110 transition-transform">50+</div>
                <div className="absolute -top-2 -right-2">
                  <Code className="w-6 h-6 text-primary-400 animate-pulse group-hover:animate-bounce" />
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-300 group-hover:text-primary-600 transition-colors">Projects Completed</div>
            </div>
            <div className="text-center scroll-reveal hover-lift group">
              <div className="relative">
                <div className="text-4xl font-bold text-primary-600 mb-2 counter-animation group-hover:scale-110 transition-transform">3+</div>
                <div className="absolute -top-2 -right-2">
                  <Coffee className="w-6 h-6 text-primary-400 animate-pulse group-hover:animate-bounce" />
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-300 group-hover:text-primary-600 transition-colors">Years Experience</div>
            </div>
            <div className="text-center scroll-reveal hover-lift group">
              <div className="relative">
                <div className="text-4xl font-bold text-primary-600 mb-2 counter-animation group-hover:scale-110 transition-transform">100%</div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-6 h-6 text-primary-400 animate-pulse group-hover:animate-bounce" />
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-300 group-hover:text-primary-600 transition-colors">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;