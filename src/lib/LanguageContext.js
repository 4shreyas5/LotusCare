import React, { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'hi', label: 'HI', name: 'हिन्दी' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'nl', label: 'NL', name: 'Nederlands' },
  { code: 'fr', label: 'FR', name: 'Français' },
];

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    () => localStorage.getItem('lotuscare_lang') || 'en'
  );

  const changeLanguage = (code) => {
    setLanguage(code);
    localStorage.setItem('lotuscare_lang', code);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  const lang = ctx.language;

  const t = (key) => {
    const val = translations[lang]?.[key] ?? translations.en?.[key] ?? key;
    return val;
  };

  return { language: lang, changeLanguage: ctx.changeLanguage, t };
};
