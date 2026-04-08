import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Shield, Star, ChevronRight, ArrowRight } from 'lucide-react';
import {
  featuredProviders,
  categories,
  howItWorks,
  testimonials,
} from '../data/homeData';
import { useLanguage } from '../lib/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();

  // Translated versions of data-driven arrays
  const translatedQuickFilters = t('quickFilters');

  const translatedCategories = categories.map((cat, i) => ({
    ...cat,
    title: t(`cat${i + 1}_title`),
    description: t(`cat${i + 1}_desc`),
    tags: t(`cat${i + 1}_tags`),
  }));

  const translatedHowItWorks = howItWorks.map((item) => ({
    ...item,
    title: t(`how_step${item.step}_title`),
    desc: t(`how_step${item.step}_desc`),
  }));

  return (
    <div className="pt-20" data-testid="homepage">
      {/* Hero Section */}
      <section className="bg-cream section-padding" data-testid="hero-section">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 bg-sage-pale rounded-pill px-4 py-2">
                <span className="w-2 h-2 bg-sage rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-sage">
                  {t('hero_badge')}
                </span>
              </div>

              {/* Headline */}
              <h1 className="heading-display">
                {t('hero_headline')} <span className="italic text-sage">{t('hero_headline_em')}</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-lotus-text-mid leading-relaxed max-w-lg">
                {t('hero_sub')}
              </p>

              {/* Search Bar */}
              <div className="relative max-w-xl">
                <input
                  type="text"
                  placeholder={t('hero_search_placeholder')}
                  className="w-full rounded-pill border-2 border-lotus-border bg-white pl-5 pr-36 py-4 text-base text-sage-dark placeholder-lotus-text-muted focus:border-sage focus:outline-none focus:ring-4 focus:ring-sage/10 transition-all"
                  data-testid="hero-search-input"
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary py-2.5 px-6"
                  data-testid="hero-search-btn"
                >
                  <span className="flex items-center gap-2">
                    {t('hero_search_btn')} <ArrowRight size={16} />
                  </span>
                </button>
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2">
                {Array.isArray(translatedQuickFilters) && translatedQuickFilters.map((filter, idx) => (
                  <Link
                    key={idx}
                    to={`/category/healthcare?filter=${filter.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-4 py-2 rounded-pill bg-white border border-lotus-border text-sm text-lotus-text-mid hover:border-sage hover:text-sage transition-all"
                    data-testid={`quick-filter-${idx}`}
                  >
                    {filter}
                  </Link>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2 text-sm text-lotus-text-mid">
                  <Check size={18} className="text-sage" />
                  <span>{t('hero_trust_verified')}</span>
                </div>
                <div className="w-px h-4 bg-lotus-border"></div>
                <div className="flex items-center gap-2 text-sm text-lotus-text-mid">
                  <Shield size={18} className="text-sage" />
                  <span>{t('hero_trust_insured')}</span>
                </div>
                <div className="w-px h-4 bg-lotus-border"></div>
                <div className="flex items-center gap-2 text-sm text-lotus-text-mid">
                  <Star size={18} className="text-gold fill-gold" />
                  <span>{t('hero_trust_rating')}</span>
                </div>
              </div>
            </div>

            {/* Right - Floating Cards */}
            <div className="relative hidden lg:block h-[500px]">
              {/* Main Provider Card */}
              <div
                className="absolute top-8 left-0 card-lotus p-5 w-72 float-animation"
                data-testid="hero-provider-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 avatar-circle avatar-sage text-lg">PS</div>
                  <div className="flex-1">
                    <div className="badge-sage text-xs mb-1">{t('hero_card_badge')}</div>
                    <h4 className="font-serif font-semibold text-sage-dark">Priya Sharma</h4>
                    <p className="text-sm text-lotus-text-muted">{t('hero_card_specialty')}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-gold fill-gold" />
                      ))}
                      <span className="text-xs text-lotus-text-muted ml-1">(312)</span>
                    </div>
                    <p className="text-sage font-serif font-semibold mt-2">Starting at €28/hr</p>
                  </div>
                </div>
              </div>

              {/* Booking Confirmed Card */}
              <div
                className="absolute top-4 right-0 card-lotus p-4 w-64 float-animation-delayed"
                data-testid="hero-booking-card"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-sage rounded-full"></span>
                  <span className="text-sm font-medium text-sage">{t('hero_booking_status')}</span>
                </div>
                <p className="text-sm font-medium text-sage-dark">{t('hero_booking_service')}</p>
                <p className="text-xs text-lotus-text-muted">{t('hero_booking_time')}</p>
                <div className="mt-3 inline-flex items-center gap-2 bg-sage/10 rounded-pill px-3 py-1">
                  <Check size={14} className="text-sage" />
                  <span className="text-xs font-medium text-sage">{t('hero_booking_action')}</span>
                </div>
              </div>

              {/* Matched Card */}
              <div
                className="absolute bottom-16 left-8 card-lotus p-4 w-56 float-animation-delayed-2"
                data-testid="hero-matched-card"
              >
                <p className="text-xs text-lotus-text-muted mb-2">{t('hero_matched_label')}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 avatar-circle avatar-blush text-sm">MR</div>
                  <div>
                    <p className="text-sm font-medium text-sage-dark">Meera R.</p>
                    <p className="text-xs text-lotus-text-muted">{t('hero_matched_distance')}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-16 w-32 h-32 bg-sage-light/30 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 right-0 w-24 h-24 bg-blush/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-warm-white section-padding" data-testid="categories-section">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="label-overline">{t('cat_overline')}</span>
            <h2 className="heading-section mt-3 mb-4">{t('cat_heading')}</h2>
            <p className="text-body max-w-2xl mx-auto">
              {t('cat_sub')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {translatedCategories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className={`${category.gradient} rounded-card p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover`}
                data-testid={`category-card-${category.id}`}
              >
                {/* Provider count badge */}
                <span className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm rounded-pill px-3 py-1 text-xs font-medium text-sage-dark">
                  {category.providers} {t('cat_providers_label')}
                </span>

                <span className="text-5xl mb-4 block">{category.icon}</span>
                <h3 className="heading-card mb-2">{category.title}</h3>
                <p className="text-body text-sm mb-4">{category.description}</p>

                <div className="flex flex-wrap gap-2">
                  {Array.isArray(category.tags) && category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/60 backdrop-blur-sm rounded-pill px-3 py-1 text-xs text-sage-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-sage font-medium text-sm group-hover:gap-3 transition-all">
                  {t('cat_explore')} <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Providers Section */}
      <section className="bg-cream section-padding" data-testid="featured-providers-section">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="label-overline">{t('featured_overline')}</span>
              <h2 className="heading-section mt-3">{t('featured_heading')}</h2>
            </div>
            <Link
              to="/category/healthcare"
              className="btn-outline text-sm"
              data-testid="view-all-providers-btn"
            >
              {t('featured_view_all')}
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProviders.map((provider) => (
              <Link
                key={provider.id}
                to={`/provider/${provider.id}`}
                className="card-lotus overflow-hidden group"
                data-testid={`provider-card-${provider.id}`}
              >
                {/* Image Area */}
                <div
                  className={`${provider.bgColor} h-40 flex items-center justify-center relative`}
                >
                  <span className="text-6xl">{provider.emoji}</span>
                  <span
                    className={`absolute top-3 right-3 ${provider.badgeColor} rounded-pill px-2.5 py-1 text-xs font-medium`}
                  >
                    {provider.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 avatar-circle avatar-sage text-sm">
                      {provider.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-sage-dark text-sm">{provider.name}</p>
                      <span className="badge-sage text-[10px]">{t('badge_verified')}</span>
                    </div>
                  </div>

                  <p className="text-sm text-lotus-text-mid line-clamp-2 mb-3 min-h-[40px]">
                    {provider.title}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={i < provider.rating ? 'text-gold fill-gold' : 'text-lotus-border'}
                        />
                      ))}
                      <span className="text-xs text-lotus-text-muted ml-1">({provider.reviews})</span>
                    </div>
                    <p className="price-highlight text-sm">
                      {provider.price}
                      <span className="text-lotus-text-muted font-normal">{provider.priceUnit}</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar py-12" data-testid="stats-section">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl lg:text-5xl font-medium text-white">
                40K<span className="text-blush">+</span>
              </p>
              <p className="text-white/70 text-sm mt-2">{t('stat_families')}</p>
            </div>
            <div>
              <p className="font-serif text-4xl lg:text-5xl font-medium text-white">
                4.9<span className="text-blush">★</span>
              </p>
              <p className="text-white/70 text-sm mt-2">{t('stat_rating')}</p>
            </div>
            <div>
              <p className="font-serif text-4xl lg:text-5xl font-medium text-white">
                545<span className="text-blush">+</span>
              </p>
              <p className="text-white/70 text-sm mt-2">{t('stat_caregivers')}</p>
            </div>
            <div>
              <p className="font-serif text-4xl lg:text-5xl font-medium text-white">
                98<span className="text-blush">%</span>
              </p>
              <p className="text-white/70 text-sm mt-2">{t('stat_satisfaction')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-cream section-padding" id="how-it-works" data-testid="how-it-works-section">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="heading-section">{t('how_heading')}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {translatedHowItWorks.map((item, index) => (
              <div key={item.step} className={`text-center ${index < 3 ? 'step-connector' : ''}`}>
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-sage text-white font-serif text-xl font-semibold flex items-center justify-center shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-serif text-lg font-medium text-sage-dark mb-2">{item.title}</h3>
                <p className="text-sm text-lotus-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-warm-white section-padding" data-testid="testimonials-section">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="label-overline">{t('test_overline')}</span>
            <h2 className="heading-section mt-3">{t('test_heading')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="card-lotus p-8 relative"
                data-testid={`testimonial-${testimonial.id}`}
              >
                <span className="quote-mark">"</span>
                <p className="font-serif text-lg italic text-lotus-text-mid leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 avatar-circle ${testimonial.avatarColor}`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-sage-dark">{testimonial.author}</p>
                    <p className="text-sm text-lotus-text-muted">
                      {testimonial.role}, {testimonial.city}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Recruitment Banner */}
      <section className="bg-warm-white pb-20" id="providers" data-testid="recruitment-section">
        <div className="section-container">
          <div className="bg-sage-pale border border-sage-light rounded-[20px] p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="heading-section mb-4">{t('recruit_heading')}</h3>
                <p className="text-body mb-6">{t('recruit_body')}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    t('perk_free'),
                    t('perk_payouts'),
                    t('perk_schedule'),
                    t('perk_insurance'),
                  ].map((perk) => (
                    <span key={perk} className="badge-sage">
                      <Check size={14} className="mr-1" /> {perk}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <button
                  className="btn-primary"
                  data-testid="become-provider-btn"
                  onClick={() => console.log('Become a Provider clicked')}
                >
                  {t('btn_become_provider')}
                </button>
                <button
                  className="btn-outline"
                  data-testid="learn-more-btn"
                  onClick={() => console.log('Learn more clicked')}
                >
                  {t('btn_learn_more')} <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-cream section-padding" data-testid="final-cta-section">
        <div className="section-container text-center">
          <h2 className="heading-section mb-4">{t('cta_heading')}</h2>
          <p className="text-body max-w-2xl mx-auto mb-8">
            {t('cta_body')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/category/healthcare"
              className="btn-primary"
              data-testid="final-cta-find-btn"
            >
              {t('btn_find_today')}
            </Link>
            <Link
              to="/category/healthcare"
              className="btn-outline"
              data-testid="final-cta-browse-btn"
            >
              {t('btn_browse_services')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
