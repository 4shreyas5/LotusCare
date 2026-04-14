import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Briefcase, MapPin, DollarSign } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const CareersPage = () => {
  const { t } = useLanguage();

  const jobs = [
    {
      id: 1,
      title: t('career_title_1', 'Senior Full-Stack Engineer'),
      location: t('career_location_1', 'India / Europe'),
      type: t('career_type_full', 'Full-time'),
    },
    {
      id: 2,
      title: t('career_title_2', 'Care Operations Manager'),
      location: t('career_location_2', 'India'),
      type: t('career_type_full', 'Full-time'),
    },
    {
      id: 3,
      title: t('career_title_3', 'Community Support Specialist'),
      location: t('career_location_3', 'Remote'),
      type: t('career_type_full', 'Full-time'),
    },
    {
      id: 4,
      title: t('career_title_4', 'Marketing Coordinator'),
      location: t('career_location_4', 'Europe'),
      type: t('career_type_contract', 'Contract'),
    },
  ];

  return (
    <div className="page-pt-navbar bg-cream min-h-screen" data-testid="careers-page">
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-lotus-border">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-lotus-text-muted hover:text-sage transition-colors">
              {t('breadcrumb_home')}
            </Link>
            <ChevronRight size={14} className="text-lotus-text-muted" />
            <span className="text-sage-dark font-medium">{t('careers_title', 'Careers')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="heading-display mb-6">{t('careers_title', 'Join Our Team')}</h1>

          {/* Intro */}
          <div className="bg-sage-pale rounded-xl p-8 mb-12">
            <p className="text-base leading-relaxed text-lotus-text-mid">
              {t('careers_intro', 'We\'re building the future of home care. Join us in our mission to connect families with compassionate, verified caregivers. We offer competitive compensation, flexible work arrangements, and meaningful work that impacts lives.')}
            </p>
          </div>

          {/* Open Positions */}
          <h2 className="heading-sm mb-6">{t('careers_open_positions', 'Open Positions')}</h2>
          <div className="space-y-4 mb-12">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl border border-lotus-border p-6 hover:border-sage transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sage-dark mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-lotus-text-mid">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-sage" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase size={14} className="text-sage" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-lg border border-sage text-sage hover:bg-sage-pale transition-colors">
                    {t('careers_apply', 'Apply')}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <h2 className="heading-sm mb-6">{t('careers_benefits_title', 'Why Join Lotus Care?')}</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl border border-lotus-border p-6">
              <h3 className="font-semibold mb-2">{t('careers_benefit_1', 'Competitive Benefits')}</h3>
              <p className="text-sm text-lotus-text-mid">{t('careers_benefit_1_desc', 'Health insurance, paid leave, and professional development opportunities.')}</p>
            </div>
            <div className="bg-white rounded-xl border border-lotus-border p-6">
              <h3 className="font-semibold mb-2">{t('careers_benefit_2', 'Flexible Work')}</h3>
              <p className="text-sm text-lotus-text-mid">{t('careers_benefit_2_desc', 'Remote-friendly roles with flexible schedules that fit your lifestyle.')}</p>
            </div>
            <div className="bg-white rounded-xl border border-lotus-border p-6">
              <h3 className="font-semibold mb-2">{t('careers_benefit_3', 'Mission-Driven')}</h3>
              <p className="text-sm text-lotus-text-mid">{t('careers_benefit_3_desc', 'Work on projects that directly impact families and care professionals.')}</p>
            </div>
            <div className="bg-white rounded-xl border border-lotus-border p-6">
              <h3 className="font-semibold mb-2">{t('careers_benefit_4', 'Growth Opportunities')}</h3>
              <p className="text-sm text-lotus-text-mid">{t('careers_benefit_4_desc', 'Learn, grow, and advance your career with a supportive team.')}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lotus-text-mid mb-4">{t('careers_cta', 'Didn\'t find what you\'re looking for?')}</p>
            <Link to="/contact" className="btn-primary">
              {t('careers_contact_us', 'Contact Us')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
