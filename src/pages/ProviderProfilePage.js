import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ChevronRight,
  Star,
  Check,
  Shield,
  Clock,
  MapPin,
  MessageCircle,
  Calendar,
  Award,
} from 'lucide-react';
import { profileData } from '../data/providers';
import { useLanguage } from '../lib/LanguageContext';

const ProviderProfilePage = () => {
  const { providerId } = useParams();
  const provider = profileData[providerId] || profileData[1];
  const [activeTab, setActiveTab] = useState('overview');
  const { t } = useLanguage();

  const tabs = [
    { id: 'overview', label: t('pp_tab_overview') },
    { id: 'services', label: t('pp_tab_services') },
    { id: 'reviews', label: t('pp_tab_reviews') },
    { id: 'credentials', label: t('pp_tab_credentials') },
  ];

  return (
    <div className="page-pt-navbar bg-cream min-h-screen" data-testid="provider-profile-page">
      {/* Cover & Profile Header */}
      <div className="bg-gradient-to-br from-sage-pale via-sage-light/30 to-blush-light/30">
        <div className="section-container py-12">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-end">
            <div className="w-28 h-28 avatar-circle avatar-sage text-4xl font-serif shadow-lg border-4 border-white">
              {provider.avatar}
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                <h1 className="font-serif text-3xl font-medium text-sage-dark">{provider.name}</h1>
                {provider.verified && (
                  <span className="badge-sage">
                    <Check size={12} className="mr-1" /> {t('pp_verified')}
                  </span>
                )}
                {provider.topRated && (
                  <span className="bg-gold/20 text-gold rounded-pill px-2.5 py-1 text-xs font-medium">
                    <Award size={12} className="inline mr-1" /> {t('pp_top_rated')}
                  </span>
                )}
              </div>
              <p className="text-lotus-text-mid mb-2">{provider.title}</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-lotus-text-muted">
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {provider.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> Member since {provider.memberSince}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                to={`/service/${provider.id}`}
                className="btn-primary"
                data-testid="book-session-btn"
              >
                {t('pp_book_session')}
              </Link>
              <button
                className="btn-outline"
                data-testid="message-btn"
                onClick={() => console.log('Message clicked')}
              >
                <MessageCircle size={18} />
              </button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="font-serif text-2xl font-medium text-sage-dark">
                {provider.totalBookings}
              </p>
              <p className="text-sm text-lotus-text-muted">{t('pp_stat_bookings')}</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="font-serif text-2xl font-medium text-sage-dark">{provider.experience}</p>
              <p className="text-sm text-lotus-text-muted">{t('pp_stat_experience')}</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="font-serif text-2xl font-medium text-sage-dark">
                {provider.responseTime}
              </p>
              <p className="text-sm text-lotus-text-muted">{t('pp_stat_response')}</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-1">
                <Star size={18} className="text-gold fill-gold" />
                <span className="font-serif text-2xl font-medium text-sage-dark">
                  {provider.rating}
                </span>
              </div>
              <p className="text-sm text-lotus-text-muted">{provider.totalReviews} {t('pp_stat_reviews')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-warm-white border-b border-lotus-border sticky top-20 z-40">
        <div className="section-container">
          <div className="flex gap-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                  activeTab === tab.id ? 'tab-active' : 'tab-inactive'
                }`}
                onClick={() => setActiveTab(tab.id)}
                data-testid={`tab-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="flex-1">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8" data-testid="overview-tab-content">
                {/* Bio */}
                <div className="card-lotus p-6 lg:p-8">
                  <h2 className="font-serif text-xl font-medium text-sage-dark mb-4">{t('pp_about')}</h2>
                  <p className="text-body leading-relaxed mb-4">{provider.bio}</p>
                  <p className="text-body leading-relaxed">{provider.workingStyle}</p>
                </div>

                {/* Areas Served */}
                <div className="card-lotus p-6 lg:p-8">
                  <h2 className="font-serif text-xl font-medium text-sage-dark mb-4">{t('pp_areas_served')}</h2>
                  <div className="flex flex-wrap gap-2">
                    {provider.areasServed.map((area) => (
                      <span key={area} className="badge-sage">
                        <MapPin size={12} className="mr-1" /> {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="card-lotus p-6 lg:p-8">
                  <h2 className="font-serif text-xl font-medium text-sage-dark mb-4">{t('pp_languages')}</h2>
                  <div className="flex flex-wrap gap-2">
                    {provider.languages.map((lang) => (
                      <span key={lang} className="badge-blush">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="space-y-4" data-testid="services-tab-content">
                {provider.services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/service/${provider.id}`}
                    className="card-lotus p-6 flex flex-col sm:flex-row gap-4 sm:items-center hover:border-sage/30"
                    data-testid={`service-card-${service.id}`}
                  >
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-medium text-sage-dark mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-lotus-text-muted mb-2">{service.description}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className="text-gold fill-gold" />
                        ))}
                        <span className="text-xs text-lotus-text-muted ml-1">
                          {service.rating} ({service.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="price-highlight text-xl">
                        €{service.price}
                        <span className="text-lotus-text-muted font-normal text-sm">{service.unit}</span>
                      </p>
                      <span className="btn-primary text-sm mt-2 inline-block">{t('pp_view_details')}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-6" data-testid="reviews-tab-content">
                {/* Rating Breakdown */}
                <div className="card-lotus p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row gap-6 items-center">
                    <div className="text-center">
                      <p className="font-serif text-5xl font-medium text-sage-dark">
                        {provider.rating}
                      </p>
                      <div className="flex items-center justify-center gap-1 my-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} className="text-gold fill-gold" />
                        ))}
                      </div>
                      <p className="text-sm text-lotus-text-muted">{provider.totalReviews} {t('pp_stat_reviews')}</p>
                    </div>
                    <div className="flex-1 w-full">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-lotus-text-muted w-8">{rating}★</span>
                          <div className="flex-1 h-2 bg-lotus-border rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gold rounded-full"
                              style={{ width: rating === 5 ? '82%' : rating === 4 ? '12%' : '6%' }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Individual Reviews */}
                {provider.reviews.map((review) => (
                  <div key={review.id} className="card-lotus p-6" data-testid={`review-${review.id}`}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 avatar-circle avatar-sage">{review.avatar}</div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-medium text-sage-dark">{review.author}</span>
                          <span className="text-xs text-lotus-text-muted">• {review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={
                                i < review.rating ? 'text-gold fill-gold' : 'text-lotus-border'
                              }
                            />
                          ))}
                        </div>
                        <p className="text-xs text-sage mb-2">{review.service}</p>
                        <p className="text-body">{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  className="btn-outline w-full"
                  data-testid="load-more-reviews"
                  onClick={() => console.log('Load more reviews')}
                >
                  {t('pp_load_more')}
                </button>
              </div>
            )}

            {/* Credentials Tab */}
            {activeTab === 'credentials' && (
              <div className="space-y-4" data-testid="credentials-tab-content">
                <div className="card-lotus p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                      <Check size={20} className="text-sage" />
                    </div>
                    <div>
                      <p className="font-medium text-sage-dark">{t('pp_identity_verified')}</p>
                      <p className="text-sm text-lotus-text-muted">{t('pp_identity_sub')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                      <Shield size={20} className="text-sage" />
                    </div>
                    <div>
                      <p className="font-medium text-sage-dark">{t('pp_background_check')}</p>
                      <p className="text-sm text-lotus-text-muted">{t('pp_background_sub')}</p>
                    </div>
                  </div>
                </div>

                {provider.credentials.map((cred, index) => (
                  <div
                    key={index}
                    className="card-lotus p-6 flex items-start gap-4"
                    data-testid={`credential-${index}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-sage-pale flex items-center justify-center flex-shrink-0">
                      <Award size={20} className="text-sage" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-sage-dark">{cred.name}</h3>
                        {cred.verified && (
                          <span className="badge-sage text-[10px]">
                            <Check size={10} className="mr-1" /> {t('pp_verified')}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-lotus-text-muted">{cred.institution}</p>
                      <p className="text-xs text-lotus-text-muted">{cred.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>

          {/* Sidebar Booking Widget */}
          <aside className="lg:w-80" data-testid="profile-sidebar">
            <div className="booking-widget card-lotus p-6 space-y-4">
              <div>
                <p className="text-sm text-lotus-text-muted">{t('pp_starting_from')}</p>
                <p className="price-highlight text-2xl">
                  €18<span className="text-lotus-text-muted font-normal text-sm">/hr</span>
                </p>
              </div>

              <Link
                to={`/service/${provider.id}`}
                className="btn-primary w-full justify-center"
                data-testid="sidebar-book-btn"
              >
                <Calendar size={18} className="mr-2" /> {t('pp_book_session')}
              </Link>

              <button
                className="btn-outline w-full"
                data-testid="sidebar-message-btn"
                onClick={() => console.log('Message clicked')}
              >
                <MessageCircle size={18} className="mr-2" /> {t('pp_message')}
              </button>

              <div className="pt-4 border-t border-lotus-border space-y-2">
                <div className="flex items-center gap-2 text-sm text-lotus-text-muted">
                  <Clock size={14} className="text-sage" />
                  <span>{t('pp_usually_responds')} {provider.responseTime.toLowerCase()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-lotus-text-muted">
                  <Shield size={14} className="text-sage" />
                  <span>{t('pp_verified_checked')}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfilePage;
