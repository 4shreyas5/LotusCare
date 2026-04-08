import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage, LANGUAGES } from '../lib/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { t, language, changeLanguage } = useLanguage();
  const langRef = useRef(null);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: t('nav_healthcare'), path: '/category/healthcare' },
    { name: t('nav_home_support'), path: '/category/home-support' },
    { name: t('nav_personal_support'), path: '/category/personal-support' },
    { name: t('nav_how_it_works'), path: '/#how-it-works' },
    { name: t('nav_for_providers'), path: '/#providers' },
  ];

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <nav className="nav-sticky fixed top-0 left-0 right-0 z-50" data-testid="navbar">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" data-testid="logo-link">
            <span className="text-3xl">🪷</span>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold text-sage-dark tracking-tight">
                Lotus Care
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-lotus-text-muted font-medium -mt-0.5">
                Care Marketplace
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-sage ${
                  location.pathname === link.path ? 'text-sage' : 'text-lotus-text-mid'
                }`}
                data-testid={`nav-link-${link.path.split('/').pop()}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs + Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-lotus-border text-sm font-medium text-lotus-text-mid hover:border-sage hover:text-sage transition-all duration-200"
                data-testid="lang-switcher-btn"
                aria-label="Switch language"
              >
                <Globe size={14} />
                <span>{currentLang.label}</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {langOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-card border border-lotus-border overflow-hidden z-50"
                  data-testid="lang-dropdown"
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-sage-pale ${
                        language === lang.code
                          ? 'text-sage font-medium bg-sage-pale/50'
                          : 'text-lotus-text-mid'
                      }`}
                      data-testid={`lang-option-${lang.code}`}
                    >
                      <span>{lang.name}</span>
                      <span className="text-xs text-lotus-text-muted">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/category/healthcare"
              className="btn-primary text-sm"
              data-testid="find-caregiver-btn"
            >
              {t('nav_find_caregiver')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-sage-dark"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-lotus-border mt-2 pt-4" data-testid="mobile-menu">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-base font-medium text-lotus-text-mid hover:text-sage transition-colors"
                  onClick={() => setIsOpen(false)}
                  data-testid={`mobile-nav-${link.path.split('/').pop()}`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-lotus-border my-2" />

              {/* Mobile Language Switcher */}
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                      language === lang.code
                        ? 'bg-sage text-white border-sage'
                        : 'border-lotus-border text-lotus-text-mid hover:border-sage hover:text-sage'
                    }`}
                    data-testid={`mobile-lang-${lang.code}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <hr className="border-lotus-border" />
              <button className="btn-ghost text-sm w-fit" data-testid="mobile-sign-in-btn">
                {t('nav_sign_in')}
              </button>
              <Link
                to="/category/healthcare"
                className="btn-primary text-sm w-fit"
                onClick={() => setIsOpen(false)}
                data-testid="mobile-find-caregiver-btn"
              >
                {t('nav_find_caregiver')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
