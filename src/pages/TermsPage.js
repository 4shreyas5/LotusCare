import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const TermsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="page-pt-navbar bg-cream min-h-screen" data-testid="terms-page">
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-lotus-border">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-lotus-text-muted hover:text-sage transition-colors">
              {t('breadcrumb_home')}
            </Link>
            <ChevronRight size={14} className="text-lotus-text-muted" />
            <span className="text-sage-dark font-medium">{t('terms_title', 'Terms and Conditions')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="heading-display mb-6">{t('terms_title', 'Terms and Conditions')}</h1>

          <div className="prose prose-sm text-lotus-text-mid space-y-8">
            {/* Last Updated */}
            <p className="text-sm text-lotus-text-muted italic">
              {t('terms_last_updated', 'Last Updated: December 2024')}
            </p>

            {/* 1. Acceptance of Terms */}
            <section>
              <h2 className="heading-sm mb-4">{t('terms_section_1', '1. Acceptance of Terms')}</h2>
              <p className="text-sm leading-relaxed mb-4">
                {t('terms_content_1', 'By accessing and using the Lotus Care website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.')}
              </p>
            </section>

            {/* 2. Use License */}
            <section>
              <h2 className="heading-sm mb-4">{t('terms_section_2', '2. Use License')}</h2>
              <p className="text-sm leading-relaxed mb-4">
                {t('terms_content_2a', 'Permission is granted to temporarily download one copy of the materials (information or software) on Lotus Care\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-lotus-text-mid mb-4">
                <li>{t('terms_license_1', 'Modifying or copying the materials.')}</li>
                <li>{t('terms_license_2', 'Using the materials for any commercial purpose or for any public display.')}</li>
                <li>{t('terms_license_3', 'Attempting to reverse engineer, disassemble, or decompile any software contained on the website.')}</li>
                <li>{t('terms_license_4', 'Removing any copyright or other proprietary notations from the materials.')}</li>
                <li>{t('terms_license_5', 'Transferring the materials to another person or "mirroring" the materials on any other server.')}</li>
              </ul>
            </section>

            {/* 3. Disclaimer */}
            <section>
              <h2 className="heading-sm mb-4">{t('terms_section_3', '3. Disclaimer')}</h2>
              <p className="text-sm leading-relaxed">
                {t('terms_content_3', 'The materials on Lotus Care\'s website are provided on an \'as is\' basis. Lotus Care makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.')}
              </p>
            </section>

            {/* 4. Limitations */}
            <section>
              <h2 className="heading-sm mb-4">{t('terms_section_4', '4. Limitations')}</h2>
              <p className="text-sm leading-relaxed">
                {t('terms_content_4', 'In no event shall Lotus Care or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Lotus Care\'s website, even if Lotus Care or an authorized representative has been notified orally or in writing of the possibility of such damage.')}
              </p>
            </section>

            {/* 5. Accuracy of Materials */}
            <section>
              <h2 className="heading-sm mb-4">{t('terms_section_5', '5. Accuracy of Materials')}</h2>
              <p className="text-sm leading-relaxed">
                {t('terms_content_5', 'The materials appearing on Lotus Care\'s website could include technical, typographical, or photographic errors. Lotus Care does not warrant that any of the materials on the website are accurate, complete, or current. Lotus Care may make changes to the materials contained on its website at any time without notice.')}
              </p>
            </section>

            {/* 6. Materials and Website Contents */}
            <section>
              <h2 className="heading-sm mb-4">{t('terms_section_6', '6. Materials and Website Contents')}</h2>
              <p className="text-sm leading-relaxed mb-4">
                {t('terms_content_6', 'The materials on Lotus Care\'s website are protected by copyright law and international treaties. Unauthorized use of the materials is prohibited and may result in criminal and civil penalties.')}
              </p>
            </section>

            {/* 7. Links */}
            <section>
              <h2 className="heading-sm mb-4">{t('terms_section_7', '7. Links')}</h2>
              <p className="text-sm leading-relaxed">
                {t('terms_content_7', 'Lotus Care has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Lotus Care of the site. Use of any such linked website is at the user\'s own risk.')}
              </p>
            </section>

            {/* 8. Modifications */}
            <section>
              <h2 className="heading-sm mb-4">{t('terms_section_8', '8. Modifications')}</h2>
              <p className="text-sm leading-relaxed">
                {t('terms_content_8', 'Lotus Care may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.')}
              </p>
            </section>

            {/* 9. Governing Law */}
            <section>
              <h2 className="heading-sm mb-4">{t('terms_section_9', '9. Governing Law')}</h2>
              <p className="text-sm leading-relaxed">
                {t('terms_content_9', 'These terms and conditions are governed by and construed in accordance with the laws of the applicable jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that location.')}
              </p>
            </section>

            {/* 10. User Responsibilities */}
            <section>
              <h2 className="heading-sm mb-4">{t('terms_section_10', '10. User Responsibilities')}</h2>
              <p className="text-sm leading-relaxed mb-4">
                {t('terms_content_10', 'Users are responsible for:')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-lotus-text-mid">
                <li>{t('terms_responsibility_1', 'Maintaining the confidentiality of account information and passwords.')}</li>
                <li>{t('terms_responsibility_2', 'Accepting responsibility for all activities that occur under your account.')}</li>
                <li>{t('terms_responsibility_3', 'Notifying Lotus Care of any unauthorized use of your account.')}</li>
                <li>{t('terms_responsibility_4', 'Complying with all applicable laws and regulations.')}</li>
              </ul>
            </section>

            {/* Contact for Questions */}
            <section className="bg-sage-pale rounded-lg p-6">
              <h3 className="heading-sm mb-2">{t('terms_contact', 'Questions?')}</h3>
              <p className="text-sm text-lotus-text-mid mb-4">
                {t('terms_contact_desc', 'If you have any questions about these Terms and Conditions, please contact us.')}
              </p>
              <Link to="/contact" className="btn-primary inline-block">
                {t('terms_contact_btn', 'Contact Us')}
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
