import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    services: [
      { key: 'footer_healthcare', path: '/category/healthcare' },
      { key: 'footer_home_support', path: '/category/home-support' },
      { key: 'footer_personal_support', path: '/category/personal-support' },
      { key: 'footer_elderly', path: '/category/healthcare' },
      { key: 'footer_post_surgery', path: '/category/healthcare' },
    ],
    company: [
      { key: 'footer_about', path: '#' },
      { key: 'footer_careers', path: '#' },
      { key: 'footer_press', path: '#' },
      { key: 'footer_blog', path: '#' },
      { key: 'footer_partners', path: '#' },
    ],
    support: [
      { key: 'footer_help', path: '#' },
      { key: 'footer_safety', path: '#' },
      { key: 'footer_guidelines', path: '#' },
      { key: 'footer_contact', path: '#' },
      { key: 'footer_accessibility', path: '#' },
    ],
  };

  const certifications = [];

  return (
    <footer className="bg-lotus-text-dark text-white" data-testid="footer">
      <div className="section-container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4" data-testid="footer-logo">
              <span className="text-3xl">🪷</span>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold text-white tracking-tight">
                  Lotus Care
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-white/60 font-medium -mt-0.5">
                  Care Marketplace
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mt-4">
              {t('footer_tagline')}
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-4">{t('footer_col_services')}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-blush transition-colors duration-200"
                    data-testid={`footer-link-${link.key}`}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-4">{t('footer_col_company')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-blush transition-colors duration-200"
                    data-testid={`footer-link-${link.key}`}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-4">{t('footer_col_support')}</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-blush transition-colors duration-200"
                    data-testid={`footer-link-${link.key}`}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            {t('footer_copyright')}
          </p>
          <div className="flex items-center gap-4">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="text-xs text-white/50 border border-white/20 rounded-full px-3 py-1"
                data-testid={`cert-badge-${cert.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
