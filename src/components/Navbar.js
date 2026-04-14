import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav_healthcare'), path: '/category/healthcare' },
    { name: t('nav_home_support'), path: '/category/home-support' },
    { name: t('nav_personal_support'), path: '/category/personal-support' },
    { name: t('nav_how_it_works'), path: '/#how-it-works' },
    { name: t('nav_for_providers'), path: '/#providers' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-lotus-border">
      
      {/* ✅ Proper Container */}
      <div className="max-w-[1200px] mx-auto px-4 w-full">
        
        {/* ✅ Navbar Row */}
        <div className="flex items-center justify-between h-16 sm:h-20 w-full">
          
          {/* ✅ Logo (Protected from overflow) */}
          <Link
            to="/"
            className="flex items-center gap-2 flex-shrink-0 max-w-[65%] overflow-hidden"
          >
            <span className="text-2xl sm:text-3xl">🪷</span>

            <div className="flex flex-col truncate">
              <span className="font-serif text-base sm:text-xl font-semibold text-sage-dark truncate">
                Lotus Care
              </span>
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.15em] text-lotus-text-muted font-medium">
                Home Service Marketplace
              </span>
            </div>
          </Link>

          {/* ✅ Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-sage ${
                  location.pathname === link.path
                    ? 'text-sage'
                    : 'text-lotus-text-mid'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ✅ Desktop Buttons (NO overflow now) */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.lotuscare"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-3 py-2 whitespace-nowrap"
            >
              {t('download_android')}
            </a>
            <a
              href="https://apps.apple.com/app/lotus-care/id000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm px-3 py-2 whitespace-nowrap"
            >
              {t('download_ios')}
            </a>
          </div>

          {/* ✅ Mobile Menu Button */}
          <button
            className="lg:hidden p-2 flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ✅ Mobile Menu (FULL FIXED) */}
        {isOpen && (
          <div className="lg:hidden mt-2 pt-4 pb-6 border-t border-lotus-border w-full max-w-full overflow-hidden">
            
            <div className="flex flex-col gap-4">
              
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-base font-medium text-lotus-text-mid hover:text-sage"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <hr className="border-lotus-border my-4" />

              <button className="btn-ghost text-sm w-fit">
                {t('nav_sign_in')}
              </button>

              {/* ✅ Mobile Buttons (stacked properly) */}
              <div className="flex flex-col gap-2 w-full">
                <a
                  href="https://play.google.com/store/apps/details?id=com.lotuscare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {t('download_android')}
                </a>

                <a
                  href="https://apps.apple.com/app/lotus-care/id000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {t('download_ios')}
                </a>
              </div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;