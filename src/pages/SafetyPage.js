import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Check, AlertCircle } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const SafetyPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16 sm:pt-20 bg-cream min-h-screen" data-testid="safety-page">
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-lotus-border">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-lotus-text-muted hover:text-sage transition-colors">
              {t('breadcrumb_home')}
            </Link>
            <ChevronRight size={14} className="text-lotus-text-muted" />
            <span className="text-sage-dark font-medium">{t('safety_title', 'Safety Center')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="heading-display mb-6">{t('safety_title', 'Safety Center')}</h1>

          {/* Intro */}
          <p className="text-lg text-lotus-text-mid leading-relaxed mb-12">
            {t('safety_intro', 'Your safety is our top priority. We are committed to maintaining a secure platform for both families and care professionals.')}
          </p>

          {/* Verification Process */}
          <div className="bg-white rounded-xl border border-lotus-border p-8 mb-8">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <Shield size={24} className="text-sage" />
              {t('safety_verification_title', 'Caregiver Verification Process')}
            </h2>
            <div className="space-y-4">
              {[
                { title: t('safety_verify_1', 'Identity Verification'), desc: t('safety_verify_1_desc', 'Government-issued ID verification and address confirmation.') },
                { title: t('safety_verify_2', 'Background Check'), desc: t('safety_verify_2_desc', 'Comprehensive criminal background screening.') },
                { title: t('safety_verify_3', 'Reference Check'), desc: t('safety_verify_3_desc', 'Verification of professional references and work history.') },
                { title: t('safety_verify_4', 'Skill Certification'), desc: t('safety_verify_4_desc', 'Verification of certifications and relevant qualifications.') },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <Check size={20} className="text-sage flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-sage-dark">{item.title}</h3>
                    <p className="text-sm text-lotus-text-mid">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Tips */}
          <div className="bg-white rounded-xl border border-lotus-border p-8 mb-8">
            <h2 className="heading-sm mb-6 flex items-center gap-3">
              <AlertCircle size={24} className="text-sage" />
              {t('safety_tips_title', 'Safety Tips for Families')}
            </h2>
            <ul className="space-y-3 text-lotus-text-mid text-sm leading-relaxed">
              <li>• {t('safety_tip_1', 'Always conduct a video call before confirming a booking.')}</li>
              <li>• {t('safety_tip_2', 'Share caregiver details with trusted family members.')}</li>
              <li>• {t('safety_tip_3', 'Start with shorter service periods to build trust.')}</li>
              <li>• {t('safety_tip_4', 'Maintain clear communication channels for real-time updates.')}</li>
              <li>• {t('safety_tip_5', 'Report any concerns immediately to our support team.')}</li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="bg-sage-pale rounded-xl p-8">
            <h2 className="heading-sm mb-4">{t('safety_data_title', 'Data Security & Privacy')}</h2>
            <p className="text-sm text-lotus-text-mid leading-relaxed">
              {t('safety_data_desc', 'We use industry-standard encryption to protect your personal information. All data is stored securely and never shared with third parties without your consent.')}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lotus-text-mid mb-4">{t('safety_concern', 'Have a safety concern?')}</p>
            <Link to="/contact" className="btn-primary">
              {t('safety_report', 'Report an Issue')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyPage;
