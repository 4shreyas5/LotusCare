import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Lock } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const PrivacyPage = () => {
  const { t } = useLanguage();

  return (
    <div className="page-pt-navbar bg-cream min-h-screen" data-testid="privacy-page">
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-lotus-border">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-lotus-text-muted hover:text-sage transition-colors">
              {t('breadcrumb_home')}
            </Link>
            <ChevronRight size={14} className="text-lotus-text-muted" />
            <span className="text-sage-dark font-medium">{t('privacy_title', 'Privacy Policy')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="heading-display mb-6">{t('privacy_title', 'Privacy Policy')}</h1>

          <div className="prose prose-sm text-lotus-text-mid space-y-8">
            {/* Last Updated */}
            <p className="text-sm text-lotus-text-muted italic">
              {t('privacy_last_updated', 'Last Updated: December 2024')}
            </p>

            {/* Intro */}
            <p className="text-base leading-relaxed">
              {t('privacy_intro', 'At Lotus Care, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.')}
            </p>

            {/* 1. Information We Collect */}
            <section>
              <h2 className="heading-sm mb-4">{t('privacy_section_1', '1. Information We Collect')}</h2>

              <h3 className="font-semibold text-sage-dark mb-2">{t('privacy_personal_info', 'Personal Information')}</h3>
              <p className="text-sm leading-relaxed mb-4">
                {t('privacy_personal_info_desc', 'We collect personal information you voluntarily provide to us, such as when you create an account, book services, or contact us. This may include:')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-lotus-text-mid mb-6">
                <li>{t('privacy_info_1', 'Full name and contact information')}</li>
                <li>{t('privacy_info_2', 'Email address and phone number')}</li>
                <li>{t('privacy_info_3', 'Address and location data')}</li>
                <li>{t('privacy_info_4', 'Payment information')}</li>
                <li>{t('privacy_info_5', 'Service preferences and requirements')}</li>
                <li>{t('privacy_info_6', 'Profile information and photographs')}</li>
              </ul>

              <h3 className="font-semibold text-sage-dark mb-2">{t('privacy_auto_info', 'Automatically Collected Information')}</h3>
              <p className="text-sm leading-relaxed">
                {t('privacy_auto_info_desc', 'When you access our website, we automatically collect certain information about your device and browsing activity, including IP address, browser type, operating system, pages visited, and duration of visits.')}
              </p>
            </section>

            {/* 2. How We Use Your Information */}
            <section>
              <h2 className="heading-sm mb-4">{t('privacy_section_2', '2. How We Use Your Information')}</h2>
              <p className="text-sm leading-relaxed mb-4">
                {t('privacy_use_intro', 'We use the information we collect for various purposes:')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-lotus-text-mid">
                <li>{t('privacy_use_1', 'To provide and maintain our services')}</li>
                <li>{t('privacy_use_2', 'To process transactions and send related information')}</li>
                <li>{t('privacy_use_3', 'To send promotional communications (with your consent)')}</li>
                <li>{t('privacy_use_4', 'To respond to your inquiries and provide customer support')}</li>
                <li>{t('privacy_use_5', 'To improve and personalize your experience')}</li>
                <li>{t('privacy_use_6', 'To monitor and analyze trends and usage')}</li>
                <li>{t('privacy_use_7', 'To comply with legal obligations')}</li>
                <li>{t('privacy_use_8', 'To prevent fraud and ensure security')}</li>
              </ul>
            </section>

            {/* 3. Information Sharing */}
            <section>
              <h2 className="heading-sm mb-4">{t('privacy_section_3', '3. Information Sharing')}</h2>
              <p className="text-sm leading-relaxed mb-4">
                {t('privacy_sharing_intro', 'We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-lotus-text-mid">
                <li>{t('privacy_sharing_1', 'With service providers who perform functions on our behalf under confidentiality agreements')}</li>
                <li>{t('privacy_sharing_2', 'When required by law or court order')}</li>
                <li>{t('privacy_sharing_3', 'To protect the rights, privacy, safety, or property of Lotus Care or others')}</li>
                <li>{t('privacy_sharing_4', 'With your explicit consent')}</li>
              </ul>
            </section>

            {/* 4. Data Security */}
            <section>
              <h2 className="heading-sm mb-4 flex items-center gap-2">
                <Lock size={20} className="text-sage" />
                {t('privacy_section_4', '4. Data Security')}
              </h2>
              <p className="text-sm leading-relaxed">
                {t('privacy_security_desc', 'We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and access controls. However, no method of transmission over the internet is completely secure.')}
              </p>
            </section>

            {/* 5. Cookies and Tracking */}
            <section>
              <h2 className="heading-sm mb-4">{t('privacy_section_5', '5. Cookies and Tracking')}</h2>
              <p className="text-sm leading-relaxed">
                {t('privacy_cookies_desc', 'Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of certain features on our website.')}
              </p>
            </section>

            {/* 6. Your Rights */}
            <section>
              <h2 className="heading-sm mb-4">{t('privacy_section_6', '6. Your Privacy Rights')}</h2>
              <p className="text-sm leading-relaxed mb-4">
                {t('privacy_rights_intro', 'Depending on your location, you may have the following rights:')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-lotus-text-mid">
                <li>{t('privacy_right_1', 'Right to access your personal information')}</li>
                <li>{t('privacy_right_2', 'Right to correct inaccurate information')}</li>
                <li>{t('privacy_right_3', 'Right to request deletion of your information')}</li>
                <li>{t('privacy_right_4', 'Right to opt-out of marketing communications')}</li>
                <li>{t('privacy_right_5', 'Right to data portability')}</li>
                <li>{t('privacy_right_6', 'Right to withdraw consent')}</li>
              </ul>
            </section>

            {/* 7. Third-Party Links */}
            <section>
              <h2 className="heading-sm mb-4">{t('privacy_section_7', '7. Third-Party Links')}</h2>
              <p className="text-sm leading-relaxed">
                {t('privacy_links_desc', 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We recommend reviewing their privacy policies before providing any personal information.')}
              </p>
            </section>

            {/* 8. Children\'s Privacy */}
            <section>
              <h2 className="heading-sm mb-4">{t('privacy_section_8', '8. Children\'s Privacy')}</h2>
              <p className="text-sm leading-relaxed">
                {t('privacy_children_desc', 'Lotus Care does not knowingly collect personal information from children under the age of 13. If we become aware that a child has provided us with personal information, we will take steps to delete such information and terminate the child\'s account.')}
              </p>
            </section>

            {/* 9. Policy Updates */}
            <section>
              <h2 className="heading-sm mb-4">{t('privacy_section_9', '9. Policy Updates')}</h2>
              <p className="text-sm leading-relaxed">
                {t('privacy_updates_desc', 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of the website constitutes acceptance of the updated policy.')}
              </p>
            </section>

            {/* 10. Contact Us */}
            <section className="bg-sage-pale rounded-lg p-6">
              <h3 className="heading-sm mb-2">{t('privacy_contact', 'Contact Us')}</h3>
              <p className="text-sm text-lotus-text-mid mb-4">
                {t('privacy_contact_desc', 'If you have questions about this Privacy Policy or our privacy practices, please contact us using the form below.')}
              </p>
              <Link to="/contact" className="btn-primary inline-block">
                {t('privacy_contact_btn', 'Contact Us')}
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
