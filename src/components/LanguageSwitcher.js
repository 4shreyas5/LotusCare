import React from 'react';
import { useLanguage, LANGUAGES } from '../lib/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="bg-sage-pale border-b border-lotus-border mt-16 sm:mt-20 max-w-[1200px] mx-auto px-4">
      <div className="section-container py-3 flex justify-center">
        <div className="flex flex-wrap gap-3 justify-center items-center w-full min-h-[50px] sm:min-h-[56px]">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`
                px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base
                transition-all duration-200 whitespace-nowrap
                ${
                  language === lang.code
                    ? 'bg-sage text-white shadow-md hover:bg-sage-hover'
                    : 'bg-white border border-lotus-border text-lotus-text-dark hover:border-sage hover:bg-sage-pale'
                }
              `}
              data-testid={`lang-switcher-${lang.code}`}
              aria-label={`Switch to ${lang.name}`}
            >
              <span className="font-semibold">{lang.label}</span>
              <span className="hidden sm:inline ml-1 text-xs opacity-75">
                {lang.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
