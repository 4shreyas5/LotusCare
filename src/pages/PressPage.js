import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Download, Mail } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const PressPage = () => {
  const { t } = useLanguage();

  const releases = [
    {
      id: 1,
      title: t('press_release_1_title', 'Lotus Care Launches Home Service Marketplace in Europe'),
      date: 'March 15, 2025',
      excerpt: t('press_release_1_excerpt', 'Expanding our commitment to accessible home care services across Europe.'),
    },
    {
      id: 2,
      title: t('press_release_2_title', 'Lotus Care Reaches 10,000 Active Caregivers'),
      date: 'February 28, 2025',
      excerpt: t('press_release_2_excerpt', 'Celebrating a milestone as we continue to grow our network of verified caregivers.'),
    },
    {
      id: 3,
      title: t('press_release_3_title', 'New Safety Features Announced'),
      date: 'February 10, 2025',
      excerpt: t('press_release_3_excerpt', 'Enhanced verification and real-time safety features for families and caregivers.'),
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 bg-cream min-h-screen" data-testid="press-page">
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-lotus-border">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-lotus-text-muted hover:text-sage transition-colors">
              {t('breadcrumb_home')}
            </Link>
            <ChevronRight size={14} className="text-lotus-text-muted" />
            <span className="text-sage-dark font-medium">{t('press_title', 'Press')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <h1 className="heading-display mb-4">{t('press_title', 'Press')}</h1>
          <p className="text-lg text-lotus-text-mid mb-12">
            {t('press_subtitle', 'Latest news and updates from Lotus Care.')}
          </p>

          {/* Press Releases */}
          <div className="space-y-6 mb-12">
            {releases.map((release) => (
              <div key={release.id} className="bg-white rounded-xl border border-lotus-border p-8 hover:border-sage transition-colors">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h2 className="heading-sm text-sage-dark mb-2">{release.title}</h2>
                    <p className="text-xs text-lotus-text-muted mb-3">{release.date}</p>
                    <p className="text-sm text-lotus-text-mid leading-relaxed">{release.excerpt}</p>
                  </div>
                  <Download size={20} className="text-sage flex-shrink-0 mt-1" />
                </div>
              </div>
            ))}
          </div>

          {/* Resources */}
          <div className="bg-sage-pale rounded-xl p-8 mb-12">
            <h2 className="heading-sm mb-6">{t('press_resources_title', 'Press Resources')}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <button className="bg-white rounded-lg p-4 text-left hover:bg-white/70 transition-colors border border-sage/20">
                <h3 className="font-semibold text-sage-dark mb-1">{t('press_resource_1', 'Brand Assets')}</h3>
                <p className="text-xs text-lotus-text-mid">{t('press_resource_1_desc', 'Download logos and brand guidelines')}</p>
              </button>
              <button className="bg-white rounded-lg p-4 text-left hover:bg-white/70 transition-colors border border-sage/20">
                <h3 className="font-semibold text-sage-dark mb-1">{t('press_resource_2', 'Media Kit')}</h3>
                <p className="text-xs text-lotus-text-mid">{t('press_resource_2_desc', 'Complete information about Lotus Care')}</p>
              </button>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h2 className="heading-sm mb-4">{t('press_contact_title', 'Press Inquiries')}</h2>
            <p className="text-lotus-text-mid mb-6">
              {t('press_contact_desc', 'Have a media inquiry? Get in touch with our press team.')}
            </p>
            <a href="mailto:press@lotuscare.com" className="inline-flex items-center gap-2 btn-primary">
              <Mail size={16} />
              {t('press_email', 'press@lotuscare.com')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;
