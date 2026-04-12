import React from 'react';
import { useLanguage, LANGUAGES } from '../lib/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="bg-sage-pale border-b border-lotus-border">
      <div className="section-container py-4 sm:py-6">
        <div className="flex flex-col gap-3">
          {/* Label */}
          <p className="text-sm font-medium text-lotus-text-mid">
            Select Language / भाषा चुनें / Wählen Sie Sprache
          </p>

          {/* Language Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
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
    </div>
  );
};

export default LanguageSwitcher;
