import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Đặng Ngọc Tiến
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Full Stack Developer với đam mê tạo ra những ứng dụng web hiện đại và thân thiện với người dùng.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/dangngoctien"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200"
              >
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/dangngoctien"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </a>
              <a
                href="mailto:dangngoctien10062003@gmail.com"
                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Liên kết nhanh
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  Trang chủ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('skills');
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  Kỹ năng
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('achievements');
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  Dự án
                </button>
              </li>
              <li>
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
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  Liên hệ
                </button>
              </li>
              <li>
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
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  CV
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Thông tin liên hệ
            </h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>📧 dangngoctien10062003@gmail.com</p>
              <p>📱 +84 123 456 789</p>
              <p>📍 Ho Chi Minh City, Vietnam</p>
              <p>🏢 TNHH Hệ Thống Thông Tin Nam Việt ASA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © 2024 Đặng Ngọc Tiến. Tất cả quyền được bảo lưu.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm flex items-center mt-2 md:mt-0">
              Được tạo với <Heart className="w-4 h-4 text-red-500 mx-1" /> và React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
