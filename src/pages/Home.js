import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Download, Github, Linkedin, Mail, Sparkles, Code, Coffee, User, Monitor, Server } from 'lucide-react';
import CVUpload from '../components/CVUpload';

const Home = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
                <h3 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 slide-in-left">
                  {t('home.subtitle')}
                </h3>
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
                  className="btn-primary flex items-center justify-center space-x-2 hover-glow"
                >
                  <span>{t('home.cta')}</span>
                </button>
                {uploadedFile ? (
                <button 
                  className="btn-secondary flex items-center justify-center space-x-2 hover-lift cv-download-animation"
                  onClick={() => {
                    // Tải file CV thật của bạn
                    const link = document.createElement('a');
                    link.href = '/CV_DangNgocTien2.pdf';
                    link.download = 'CV_DangNgocTien2.pdf';
                    link.click();
                  }}
                >
                  <Download className="w-5 h-5" />
                  <span>{t('home.download_cv')}</span>
                </button>
                ) : (
                  <button 
                    onClick={() => {
                      const element = document.getElementById('cv');
                      if (element) {
                        element.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }}
                    className="btn-secondary flex items-center justify-center space-x-2 hover-lift"
                  >
                    <Download className="w-5 h-5" />
                    <span>Tải lên CV</span>
                  </button>
                )}
              </div>

              {/* CV Upload Section */}
              {showUpload && !uploadedFile && (
                <div className="mt-6 slide-up">
                  <CVUpload 
                    onFileSelect={(file) => {
                      setUploadedFile(file);
                      setShowUpload(false);
                    }}
                    currentFile={uploadedFile}
                  />
                </div>
              )}

              {/* Social Links */}
              <div className="flex space-x-4 slide-in-left">
                <a
                  href="https://github.com/dangtien10062003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12 hover-glow"
                >
                  <Github className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ti%E1%BA%BFn-%C4%91%E1%BA%B7ng-515906372/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12 hover-glow"
                >
                  <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </a>
                <a
                  href="mailto:dangngoctien10062003@gmail.com"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12 hover-glow"
                >
                  <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </a>
              </div>
            </div>

            {/* Image/Illustration */}
            <div className="flex justify-center lg:justify-end slide-in-right">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center glow float">
                  <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="/tien.jpg" 
                      alt="Đặng Ngọc Tiến" 
                      className="w-64 h-64 object-cover rounded-full"
                    />
                  </div>
                </div>
                {/* Floating Developer Icons */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full developer-jump flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full developer-jump-2 flex items-center justify-center" style={{animationDelay: '1s'}}>
                  <Monitor className="w-3 h-3 text-white" />
                </div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-red-400 rounded-full developer-jump-3 flex items-center justify-center">
                  <Server className="w-2 h-2 text-white" />
                </div>
                <div className="absolute top-1/4 -right-12 w-5 h-5 bg-blue-400 rounded-full developer-jump flex items-center justify-center" style={{animationDelay: '2s'}}>
                  <Code className="w-2.5 h-2.5 text-white" />
                </div>
                <div className="absolute bottom-1/4 -right-6 w-3 h-3 bg-purple-400 rounded-full developer-jump-2 flex items-center justify-center" style={{animationDelay: '3s'}}>
                  <Coffee className="w-1.5 h-1.5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center scroll-reveal hover-lift">
              <div className="relative">
                <div className="text-4xl font-bold text-primary-600 mb-2 counter-animation">50+</div>
                <div className="absolute -top-2 -right-2">
                  <Code className="w-6 h-6 text-primary-400 animate-pulse" />
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center scroll-reveal hover-lift">
              <div className="relative">
                <div className="text-4xl font-bold text-primary-600 mb-2 counter-animation">3+</div>
                <div className="absolute -top-2 -right-2">
                  <Coffee className="w-6 h-6 text-primary-400 animate-pulse" />
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="text-center scroll-reveal hover-lift">
              <div className="relative">
                <div className="text-4xl font-bold text-primary-600 mb-2 counter-animation">100%</div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-6 h-6 text-primary-400 animate-pulse" />
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
