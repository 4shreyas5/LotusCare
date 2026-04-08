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
  Heart,
  Share2,
} from 'lucide-react';
import { providerDetails } from '../data/providers';
import { useLanguage } from '../lib/LanguageContext';

const ServiceListingPage = () => {
  const { serviceId } = useParams();
  const provider = providerDetails[serviceId] || providerDetails[1];
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [selectedDate, setSelectedDate] = useState(null);
  const { t } = useLanguage();

  const dates = [
    { day: 'Mon', date: 15, available: true },
    { day: 'Tue', date: 16, available: true },
    { day: 'Wed', date: 17, available: false },
    { day: 'Thu', date: 18, available: true },
    { day: 'Fri', date: 19, available: true },
    { day: 'Sat', date: 20, available: true },
    { day: 'Sun', date: 21, available: false },
  ];

  return (
    <div className="pt-20 bg-cream min-h-screen" data-testid="service-listing-page">
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-lotus-border">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link
              to="/"
              className="text-lotus-text-muted hover:text-sage transition-colors"
              data-testid="breadcrumb-home"
            >
              {t('breadcrumb_home')}
            </Link>
            <ChevronRight size={14} className="text-lotus-text-muted" />
            <Link
              to="/category/healthcare"
              className="text-lotus-text-muted hover:text-sage transition-colors"
              data-testid="breadcrumb-category"
            >
              {t('breadcrumb_healthcare')}
            </Link>
            <ChevronRight size={14} className="text-lotus-text-muted" />
            <span className="text-sage-dark font-medium">{provider.name}</span>
          </nav>
        </div>
      </div>

      <div className="section-container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="flex-1 space-y-8">
            {/* Provider Header */}
            <div className="card-lotus p-6 lg:p-8" data-testid="provider-header">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-24 h-24 avatar-circle avatar-sage text-3xl font-serif flex-shrink-0 mx-auto sm:mx-0">
                  {provider.avatar}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                    <h1 className="font-serif text-2xl font-medium text-sage-dark">
                      {provider.name}
                    </h1>
                    {provider.verified && (
                      <span className="badge-sage text-xs">
                        <Check size={12} className="mr-1" /> {t('pp_verified')}
                      </span>
                    )}
                    {provider.topRated && (
                      <span className="bg-gold/20 text-gold rounded-pill px-2.5 py-1 text-xs font-medium">
                        {t('pp_top_rated')}
                      </span>
                    )}
                  </div>
                  <p className="text-lotus-text-mid mb-3">{provider.title}</p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-lotus-text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {provider.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {provider.experience} {t('sl_experience')}
                    </span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-gold fill-gold" />
                      ))}
                      <span className="font-medium text-sage-dark ml-1">{provider.rating}</span>
                      <span className="text-lotus-text-muted">({provider.reviews} {t('sl_reviews')})</span>
                    </div>
                    <span className="text-sm text-lotus-text-muted">
                      {provider.repeatHire}{t('sl_repeat_hire')}
                    </span>
                  </div>
                </div>
                <div className="flex sm:flex-col gap-2 justify-center">
                  <button
                    className="p-2 rounded-full border border-lotus-border hover:border-sage hover:text-sage transition-colors"
                    data-testid="save-btn"
                    onClick={() => console.log('Saved to favorites')}
                  >
                    <Heart size={20} />
                  </button>
                  <button
                    className="p-2 rounded-full border border-lotus-border hover:border-sage hover:text-sage transition-colors"
                    data-testid="share-btn"
                    onClick={() => console.log('Share clicked')}
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="card-lotus p-6 lg:p-8" data-testid="about-section">
              <h2 className="font-serif text-xl font-medium text-sage-dark mb-4">{t('sl_about_me')}</h2>
              <p className="text-body leading-relaxed">{provider.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {provider.languages.map((lang) => (
                  <span key={lang} className="badge-blush text-xs">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="card-lotus p-6 lg:p-8" data-testid="included-section">
              <h2 className="font-serif text-xl font-medium text-sage-dark mb-4">{t('sl_whats_included')}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {provider.included.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check size={18} className="text-sage flex-shrink-0" />
                    <span className="text-lotus-text-mid">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials */}
            <div className="card-lotus p-6 lg:p-8" data-testid="credentials-section">
              <h2 className="font-serif text-xl font-medium text-sage-dark mb-4">
                {t('sl_credentials')}
              </h2>
              <div className="space-y-4">
                {provider.credentials.map((cred, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-sage-pale/50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                      <Shield size={18} className="text-sage" />
                    </div>
                    <div>
                      <p className="font-medium text-sage-dark">{cred.name}</p>
                      <p className="text-sm text-lotus-text-muted">
                        {cred.institution} • {cred.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="card-lotus p-6 lg:p-8" data-testid="reviews-section">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl font-medium text-sage-dark">
                  {t('sl_reviews_title')} <span className="text-lotus-text-muted font-normal">({provider.reviews})</span>
                </h2>
                <select className="input-lotus py-2 px-3 text-sm w-40" data-testid="reviews-filter">
                  <option value="all">{t('sl_all_ratings')}</option>
                  <option value="5">{t('sl_5_stars')}</option>
                  <option value="4">{t('sl_4_stars')}</option>
                  <option value="3">{t('sl_3_stars')}</option>
                </select>
              </div>

              {/* Rating Breakdown */}
              <div className="mb-6 p-4 bg-sage-pale/30 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-serif text-4xl font-medium text-sage-dark">
                    {provider.rating}
                  </span>
                  <div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-gold fill-gold" />
                      ))}
                    </div>
                    <p className="text-sm text-lotus-text-muted">{provider.reviews} {t('sl_reviews')}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-3">
                      <span className="text-sm text-lotus-text-muted w-16">{rating} {t('sl_stars')}</span>
                      <div className="flex-1 h-2 bg-lotus-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gold rounded-full"
                          style={{ width: rating === 5 ? '85%' : rating === 4 ? '10%' : '5%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Individual Reviews */}
              <div className="space-y-6">
                {provider.reviewsList.map((review) => (
                  <div
                    key={review.id}
                    className="pb-6 border-b border-lotus-border last:border-0 last:pb-0"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 avatar-circle avatar-sage text-sm">
                        {review.author[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sage-dark">{review.author}</span>
                          <span className="text-xs text-lotus-text-muted">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
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
                        <p className="text-body">{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="btn-outline w-full mt-6"
                data-testid="load-more-reviews-btn"
                onClick={() => console.log('Load more reviews')}
              >
                {t('sl_load_more')}
              </button>
            </div>
          </main>

          {/* Booking Widget Sidebar */}
          <aside className="lg:w-96" data-testid="booking-sidebar">
            <div className="booking-widget card-lotus p-6 space-y-6">
              <div>
                <h3 className="font-serif text-lg font-medium text-sage-dark mb-1">{t('sl_book_session')}</h3>
                <p className="text-sm text-lotus-text-muted">{t('sl_book_sub')}</p>
              </div>

              {/* Package Selector */}
              <div className="space-y-3">
                {Object.entries(provider.packages).map(([key, pkg]) => (
                  <button
                    key={key}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      selectedPackage === key
                        ? 'border-sage bg-sage-pale/30'
                        : 'border-lotus-border hover:border-sage/50'
                    }`}
                    onClick={() => setSelectedPackage(key)}
                    data-testid={`package-${key}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sage-dark">{pkg.name}</span>
                      <span className="price-highlight">€{pkg.price}</span>
                    </div>
                    <p className="text-xs text-lotus-text-muted mb-2">{pkg.hours} {t('sl_of_care')}</p>
                    <ul className="space-y-1">
                      {pkg.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-xs text-lotus-text-mid flex items-center gap-2">
                          <Check size={12} className="text-sage" /> {feature}
                        </li>
                      ))}
                      {pkg.features.length > 3 && (
                        <li className="text-xs text-sage">+{pkg.features.length - 3} more</li>
                      )}
                    </ul>
                  </button>
                ))}
              </div>

              {/* Date Picker */}
              <div>
                <label className="text-sm font-medium text-sage-dark block mb-3">{t('sl_select_date')}</label>
                <div className="grid grid-cols-7 gap-2">
                  {dates.map((d, i) => (
                    <button
                      key={i}
                      disabled={!d.available}
                      className={`p-2 rounded-lg text-center transition-colors ${
                        selectedDate === i
                          ? 'bg-sage text-white'
                          : d.available
                          ? 'bg-sage-pale/50 hover:bg-sage-pale text-sage-dark'
                          : 'bg-lotus-border/30 text-lotus-text-muted cursor-not-allowed'
                      }`}
                      onClick={() => d.available && setSelectedDate(i)}
                      data-testid={`date-${d.date}`}
                    >
                      <span className="text-xs block">{d.day}</span>
                      <span className="text-sm font-medium">{d.date}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <Link
                  to={`/booking/${provider.id}?package=${selectedPackage}`}
                  className="btn-primary w-full justify-center"
                  data-testid="book-now-btn"
                >
                  <Calendar size={18} className="mr-2" /> {t('sl_book_now')}
                </Link>
                <button
                  className="btn-outline w-full"
                  data-testid="message-provider-btn"
                  onClick={() => console.log('Message provider clicked')}
                >
                  <MessageCircle size={18} className="mr-2" /> {t('sl_message_provider')}
                </button>
              </div>

              {/* Trust Badges */}
              <div className="space-y-2 pt-4 border-t border-lotus-border">
                <div className="flex items-center gap-2 text-sm text-lotus-text-muted">
                  <Shield size={16} className="text-sage" />
                  <span>{t('sl_safe_payment')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-lotus-text-muted">
                  <Check size={16} className="text-sage" />
                  <span>{t('sl_verified_provider')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-lotus-text-muted">
                  <Clock size={16} className="text-sage" />
                  <span>{t('sl_free_cancel')}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServiceListingPage;
