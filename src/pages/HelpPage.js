import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, Search } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const HelpPage = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(0);

  const faqs = [
    {
      id: 1,
      question: t('help_faq_1_q', 'How do I find a caregiver?'),
      answer: t('help_faq_1_a', 'Browse our categories, view caregiver profiles, check ratings and reviews, and book directly through our platform.'),
    },
    {
      id: 2,
      question: t('help_faq_2_q', 'Are caregivers verified?'),
      answer: t('help_faq_2_a', 'Yes, all caregivers undergo background checks and verification before joining our platform. Your safety is our priority.'),
    },
    {
      id: 3,
      question: t('help_faq_3_q', 'What payment methods do you accept?'),
      answer: t('help_faq_3_a', 'We accept credit/debit cards, digital wallets, and bank transfers for secure payments.'),
    },
    {
      id: 4,
      question: t('help_faq_4_q', 'Can I cancel a booking?'),
      answer: t('help_faq_4_a', 'Yes, cancellations can be made up to 24 hours before the scheduled service for a full refund.'),
    },
    {
      id: 5,
      question: t('help_faq_5_q', 'How is pricing determined?'),
      answer: t('help_faq_5_a', 'Pricing varies by service type, caregiver experience, location, and demand. Each profile displays hourly or service rates clearly.'),
    },
    {
      id: 6,
      question: t('help_faq_6_q', 'Do you offer 24/7 support?'),
      answer: t('help_faq_6_a', 'Yes, our customer support team is available around the clock to assist with any questions or concerns.'),
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-16 sm:pt-20 bg-cream min-h-screen" data-testid="help-page">
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-lotus-border">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-lotus-text-muted hover:text-sage transition-colors">
              {t('breadcrumb_home')}
            </Link>
            <ChevronRight size={14} className="text-lotus-text-muted" />
            <span className="text-sage-dark font-medium">{t('help_title', 'Help Center')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="heading-display mb-4 text-center">{t('help_title', 'Help Center')}</h1>
          <p className="text-center text-lotus-text-mid mb-8 max-w-xl mx-auto">
            {t('help_subtitle', 'Find answers to common questions and get support when you need it.')}
          </p>

          {/* Search Bar */}
          <div className="mb-12 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-lotus-text-muted" size={20} />
            <input
              type="text"
              placeholder={t('help_search_placeholder', 'Search for help...')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-lotus-border rounded-lg focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition"
            />
          </div>

          {/* FAQs */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg border border-lotus-border overflow-hidden hover:border-sage transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-sage-pale/30 transition-colors"
                >
                  <h3 className="font-semibold text-left text-sage-dark">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-sage flex-shrink-0 transition-transform ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-lotus-border pt-4">
                    <p className="text-sm text-lotus-text-mid leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-lotus-text-mid">{t('help_no_results', 'No results found. Please try another search.')}</p>
            </div>
          )}

          {/* Additional Help */}
          <div className="bg-sage-pale rounded-xl p-8 mt-12 text-center">
            <h2 className="heading-sm mb-4">{t('help_still_need_help', 'Still need help?')}</h2>
            <p className="text-lotus-text-mid mb-6">
              {t('help_contact_support', 'Our support team is here to assist you.')}
            </p>
            <Link to="/contact" className="btn-primary">
              {t('help_contact_us', 'Contact Support')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
