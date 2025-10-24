import { useLanguage } from '../contexts/LanguageContext';
import enTranslations from '../locales/en.json';
import viTranslations from '../locales/vi.json';

const translations = {
  en: enTranslations,
  vi: viTranslations,
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key, params = {}) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    // Replace parameters in the translation
    if (typeof value === 'string' && Object.keys(params).length > 0) {
      return value.replace(/\{\{(\w+)\}\}/g, (match, param) => params[param] || match);
    }
    
    return value || key;
  };

  return { t, language };
};
