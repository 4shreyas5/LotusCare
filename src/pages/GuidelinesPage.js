import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const GuidelinesPage = () => {
  const { t } = useLanguage();

  const sections = [
    {
      title: t('guidelines_respect_title', 'Respect & Professionalism'),
      content: t('guidelines_respect_content', 'All community members must treat each other with respect and professionalism. Harassment, discrimination, or abusive behavior is strictly prohibited.'),
    },
    {
      title: t('guidelines_honest_title', 'Honesty & Integrity'),
      content: t('guidelines_honest_content', 'Be truthful in your profile information, ratings, and reviews. Fraudulent activity or misrepresentation is grounds for immediate account suspension.'),
    },
    {
      title: t('guidelines_confidential_title', 'Confidentiality'),
      content: t('guidelines_confidential_content', 'Caregivers must respect the privacy of families. All personal information shared during care is strictly confidential.'),
    },
    {
      title: t('guidelines_quality_title', 'Quality Service'),
      content: t('guidelines_quality_content', 'Caregivers must provide services as promised. Cancellations should be made with advance notice when possible.'),
    },
    {
      title: t('guidelines_safety_title', 'Safety First'),
      content: t('guidelines_safety_content', 'Never engage in illegal activities or activities that compromise safety. Report suspicious behavior immediately.'),
    },
    {
      title: t('guidelines_communication_title', 'Clear Communication'),
      content: t('guidelines_communication_content', 'Maintain open and transparent communication. Address concerns promptly through our platform.'),
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 bg-cream min-h-screen" data-testid="guidelines-page">
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-lotus-border">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-lotus-text-muted hover:text-sage transition-colors">
              {t('breadcrumb_home')}
            </Link>
            <ChevronRight size={14} className="text-lotus-text-muted" />
            <span className="text-sage-dark font-medium">{t('guidelines_title', 'Community Guidelines')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="heading-display mb-6">{t('guidelines_title', 'Community Guidelines')}</h1>

          {/* Intro */}
          <p className="text-lg text-lotus-text-mid leading-relaxed mb-12">
            {t('guidelines_intro', 'These guidelines help us maintain a safe, respectful, and trustworthy community for everyone. All members must adhere to these standards.')}
          </p>

          {/* Guidelines */}
          <div className="space-y-6 mb-12">
            {sections.map((section, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-lotus-border p-8">
                <h2 className="heading-sm mb-3 text-sage-dark">{section.title}</h2>
                <p className="text-sm text-lotus-text-mid leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Violations */}
          <div className="bg-sage-pale rounded-xl p-8 mb-12">
            <h2 className="heading-sm mb-4">{t('guidelines_violations_title', 'Violations & Enforcement')}</h2>
            <p className="text-sm text-lotus-text-mid leading-relaxed mb-4">
              {t('guidelines_violations_content', 'Violations of these guidelines may result in warnings, account suspension, or permanent removal from the platform.')}
            </p>
            <p className="text-sm text-lotus-text-mid leading-relaxed">
              {t('guidelines_report_content', 'If you witness a violation, please report it immediately to our support team.')}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/contact" className="btn-primary">
              {t('guidelines_contact', 'Report a Violation')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidelinesPage;
