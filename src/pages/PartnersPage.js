import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Handshake } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const PartnersPage = () => {
  const { t } = useLanguage();

  const partners = [
    { name: t('partner_1', 'Healthcare Network India'), type: t('partner_type_healthcare', 'Healthcare Partner') },
    { name: t('partner_2', 'EuroCare Services'), type: t('partner_type_care', 'Care Partner') },
    { name: t('partner_3', 'Trust Verification Labs'), type: t('partner_type_verification', 'Verification Partner') },
    { name: t('partner_4', 'Digital Pay Solutions'), type: t('partner_type_payment', 'Payment Partner') },
  ];

  return (
    <div className="page-pt-navbar bg-cream min-h-screen" data-testid="partners-page">
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-lotus-border">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-lotus-text-muted hover:text-sage transition-colors">
              {t('breadcrumb_home')}
            </Link>
            <ChevronRight size={14} className="text-lotus-text-muted" />
            <span className="text-sage-dark font-medium">{t('partners_title', 'Partners')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <h1 className="heading-display mb-6">{t('partners_title', 'Our Partners')}</h1>
          <p className="text-lg text-lotus-text-mid leading-relaxed mb-12">
            {t('partners_intro', 'We collaborate with leading organizations to provide the best home care services. Our partners share our commitment to trust, safety, and quality.')}
          </p>

          {/* Partners Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-lotus-border p-8 hover:border-sage transition-colors text-center">
                <Handshake size={32} className="text-sage mx-auto mb-4" />
                <h3 className="font-semibold text-sage-dark mb-2">{partner.name}</h3>
                <p className="text-sm text-lotus-text-mid">{partner.type}</p>
              </div>
            ))}
          </div>

          {/* Partnership Opportunities */}
          <div className="bg-sage-pale rounded-xl p-8">
            <h2 className="heading-sm mb-4">{t('partners_opportunities_title', 'Partnership Opportunities')}</h2>
            <p className="text-lotus-text-mid text-sm leading-relaxed mb-6">
              {t('partners_opportunities_desc', 'We are always looking to collaborate with organizations that share our mission of providing accessible, trustworthy home care services.')}
            </p>
            <p className="text-lotus-text-mid text-sm leading-relaxed mb-6">
              {t('partners_opportunities_contact', 'If you are interested in partnering with Lotus Care, we would love to hear from you.')}
            </p>
            <Link to="/contact" className="btn-primary">
              {t('partners_contact_us', 'Become a Partner')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
