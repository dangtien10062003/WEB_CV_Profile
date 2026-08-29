import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { Globe2, Menu, Moon, Sun, X } from 'lucide-react';
import jamesDangLogo from '../assets/james-dang-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'achievements', label: t('nav.achievements') },
    { id: 'contact', label: t('nav.contact') },
    { id: 'cv', label: t('nav.cv') },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setIsMenuOpen(false);
  };

  const languages = [
    { code: 'en', name: 'English', label: 'EN' },
    { code: 'vi', name: 'Tiếng Việt', label: 'VI' },
  ];

  const currentLang = languages.find((lang) => lang.code === language);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-zinc-950/65 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => scrollToSection('home')}
          className="group flex items-center gap-3"
          aria-label="Go to home"
        >
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-amber-300/40 bg-zinc-950 shadow-lg shadow-amber-500/10 transition group-hover:scale-105 group-hover:border-amber-200">
            <img
              src={jamesDangLogo}
              alt="James Dang logo"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-semibold leading-none text-white">Ngoc Tien Dang</span>
            <span className="block text-xs text-zinc-400">Software Development</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className="nav-link">
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/10"
            aria-label={isDark ? t('common.light_mode') : t('common.dark_mode')}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <div className="relative">
            <button
              onClick={() => setIsLangOpen((value) => !value)}
              className="flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/10"
            >
              <Globe2 className="h-4 w-4" />
              {currentLang?.label}
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-lg border border-white/10 bg-zinc-950/95 p-1 shadow-2xl backdrop-blur-xl">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full rounded-md px-3 py-2 text-left text-sm transition ${
                      language === lang.code
                        ? 'bg-teal-300/15 text-teal-100'
                        : 'text-zinc-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/10 md:hidden"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-zinc-950/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="nav-link text-left">
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
