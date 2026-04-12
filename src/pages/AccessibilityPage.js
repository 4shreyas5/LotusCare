import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Zap, Eye } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const AccessibilityPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16 sm:pt-20 bg-cream min-h-screen" data-testid="accessibility-page">
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-lotus-border">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-lotus-text-muted hover:text-sage transition-colors">
              {t('breadcrumb_home')}
            </Link>
            <ChevronRight size={14} className="text-lotus-text-muted" />
            <span className="text-sage-dark font-medium">{t('accessibility_title', 'Accessibility')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <h1 className="heading-display mb-6">{t('accessibility_title', 'Accessibility')}</h1>
          <p className="text-lg text-lotus-text-mid leading-relaxed mb-12">
            {t('accessibility_intro', 'We are committed to making Lotus Care accessible to everyone, including people with disabilities.')}
          </p>

          {/* Features */}
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-xl border border-lotus-border p-8">
              <div className="flex gap-4">
                <Eye size={24} className="text-sage flex-shrink-0" />
                <div>
                  <h2 className="heading-sm text-sage-dark mb-2">{t('accessibility_feature_1', 'Vision Support')}</h2>
                  <p className="text-sm text-lotus-text-mid leading-relaxed">
                    {t('accessibility_feature_1_desc', 'Full screen reader support, high contrast mode, and adjustable text sizes to accommodate users with vision impairments.')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-lotus-border p-8">
              <div className="flex gap-4">
                <Zap size={24} className="text-sage flex-shrink-0" />
                <div>
                  <h2 className="heading-sm text-sage-dark mb-2">{t('accessibility_feature_2', 'Keyboard Navigation')}</h2>
                  <p className="text-sm text-lotus-text-mid leading-relaxed">
                    {t('accessibility_feature_2_desc', 'Complete keyboard navigation support allowing users to navigate without a mouse.')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-lotus-border p-8">
              <div className="flex gap-4">
                <Users size={24} className="text-sage flex-shrink-0" />
                <div>
                  <h2 className="heading-sm text-sage-dark mb-2">{t('accessibility_feature_3', 'Multi-Language Support')}</h2>
                  <p className="text-sm text-lotus-text-mid leading-relaxed">
                    {t('accessibility_feature_3_desc', 'Available in multiple languages to serve diverse communities.')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Standards */}
          <div className="bg-sage-pale rounded-xl p-8 mb-12">
            <h2 className="heading-sm mb-4">{t('accessibility_standards_title', 'Accessibility Standards')}</h2>
            <p className="text-sm text-lotus-text-mid leading-relaxed mb-4">
              {t('accessibility_standards_content', 'We aim to comply with WCAG 2.1 Level AA accessibility standards and continue to improve our platform to ensure it\'s usable by everyone.')}
            </p>
            <p className="text-sm text-lotus-text-mid leading-relaxed">
              {t('accessibility_feedback', 'We welcome feedback on accessibility issues. If you encounter any barriers while using Lotus Care, please let us know.')}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lotus-text-mid mb-4">{t('accessibility_need_help', 'Need accessibility assistance?')}</p>
            <Link to="/contact" className="btn-primary">
              {t('accessibility_contact_us', 'Contact Support')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage;
