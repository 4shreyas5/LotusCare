import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart, Users, Globe } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="page-pt-navbar bg-cream min-h-screen" data-testid="about-page">
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-lotus-border">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-lotus-text-muted hover:text-sage transition-colors"
            >
              {t('breadcrumb_home')}
            </Link>
            <ChevronRight size={14} className="text-lotus-text-muted" />
            <span className="text-sage-dark font-medium">{t('about_title', 'About Us')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="heading-display mb-6">{t('about_title', 'About Us')}</h1>

          {/* Intro */}
          <div className="prose prose-sm mb-12 text-lotus-text-mid">
            <p className="text-lg leading-relaxed mb-6">
              {t('about_intro', 'Lotus Care is a dedicated platform connecting families with compassionate, verified caregivers across India and Europe.')}
            </p>
            <p className="text-base leading-relaxed">
              {t('about_mission', 'Our mission is to provide accessible, trustworthy home care services that empower both families and care professionals.')}
            </p>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 border border-lotus-border">
              <div className="w-12 h-12 bg-sage-pale rounded-lg flex items-center justify-center mb-4">
                <Heart size={24} className="text-sage" />
              </div>
              <h3 className="heading-sm mb-2">{t('about_value_care', 'Compassionate Care')}</h3>
              <p className="text-sm text-lotus-text-mid">
                {t('about_value_care_desc', 'We prioritize human connection and genuine care in every interaction.')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-lotus-border">
              <div className="w-12 h-12 bg-sage-pale rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-sage" />
              </div>
              <h3 className="heading-sm mb-2">{t('about_value_trust', 'Trust & Safety')}</h3>
              <p className="text-sm text-lotus-text-mid">
                {t('about_value_trust_desc', 'Every caregiver is verified and background-checked for your peace of mind.')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-lotus-border">
              <div className="w-12 h-12 bg-sage-pale rounded-lg flex items-center justify-center mb-4">
                <Globe size={24} className="text-sage" />
              </div>
              <h3 className="heading-sm mb-2">{t('about_value_access', 'Accessibility')}</h3>
              <p className="text-sm text-lotus-text-mid">
                {t('about_value_access_desc', 'Quality care services available across multiple regions and languages.')}
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="bg-sage-pale rounded-xl p-8 mb-12">
            <h2 className="heading-sm mb-4">{t('about_story_title', 'Our Story')}</h2>
            <p className="text-sm text-lotus-text-mid leading-relaxed">
              {t('about_story', 'Founded with the vision of transforming home care services, Lotus Care brings together families seeking quality care and dedicated professionals passionate about making a difference. We understand the challenges families face when arranging reliable home care, and we\'ve built our platform to address those needs with integrity, technology, and human touch.')}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.lotuscare"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-testid="about-download-android-btn"
            >
              {t('download_android')}
            </a>
            <a
              href="https://apps.apple.com/app/lotus-care/id000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              data-testid="about-download-ios-btn"
            >
              {t('download_ios')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
