import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const ContactPage = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Contact form submission would be handled here
    alert(t('contact_success', 'Thank you for reaching out. We will respond soon.'));
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-pt-navbar bg-cream min-h-screen" data-testid="contact-page">
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-lotus-border">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-lotus-text-muted hover:text-sage transition-colors">
              {t('breadcrumb_home')}
            </Link>
            <ChevronRight size={14} className="text-lotus-text-muted" />
            <span className="text-sage-dark font-medium">{t('contact_title', 'Contact Us')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="heading-display mb-4 text-center">{t('contact_title', 'Contact Us')}</h1>
          <p className="text-center text-lotus-text-mid mb-12 max-w-xl mx-auto">
            {t('contact_subtitle', 'Have a question? We\'d love to hear from you. Get in touch with our team.')}
          </p>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 border border-lotus-border text-center">
              <div className="w-12 h-12 bg-sage-pale rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-sage" />
              </div>
              <h3 className="font-semibold mb-2">{t('contact_email_label', 'Email')}</h3>
              <p className="text-sm text-lotus-text-mid">support@lotuscare.com</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-lotus-border text-center">
              <div className="w-12 h-12 bg-sage-pale rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-sage" />
              </div>
              <h3 className="font-semibold mb-2">{t('contact_phone_label', 'Phone')}</h3>
              <p className="text-sm text-lotus-text-mid">+91 1800-LOTUS-99</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-lotus-border text-center">
              <div className="w-12 h-12 bg-sage-pale rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-sage" />
              </div>
              <h3 className="font-semibold mb-2">{t('contact_location_label', 'Location')}</h3>
              <p className="text-sm text-lotus-text-mid">India & Europe</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl border border-lotus-border p-8">
            <h2 className="heading-sm mb-6">{t('contact_form_title', 'Send us a Message')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-lotus-text-dark mb-2">
                  {t('contact_name_label', 'Full Name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-lotus-border rounded-lg focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition"
                  placeholder={t('contact_name_placeholder', 'Your name')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-lotus-text-dark mb-2">
                  {t('contact_email_label', 'Email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-lotus-border rounded-lg focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition"
                  placeholder={t('contact_email_placeholder', 'your@email.com')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-lotus-text-dark mb-2">
                  {t('contact_message_label', 'Message')}
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-lotus-border rounded-lg focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition"
                  placeholder={t('contact_message_placeholder', 'Tell us how we can help...')}
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                {t('contact_submit', 'Send Message')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
