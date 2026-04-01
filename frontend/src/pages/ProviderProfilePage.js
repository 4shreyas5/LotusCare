import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Star, Check, Shield, Clock, MapPin, MessageCircle, Calendar, Settings, Award } from 'lucide-react';

// Mock provider profile data
const profileData = {
  1: {
    id: 1,
    name: 'Priya Sharma',
    avatar: 'PS',
    title: 'Certified Nurse | Post-Surgery & Recovery Specialist',
    tagline: 'Bringing compassionate care to your home',
    bio: 'With over 8 years of experience in post-operative care, I specialize in helping patients recover comfortably at home. My approach combines clinical expertise with genuine compassion — because healing happens best when you feel truly cared for.',
    location: 'Mumbai, India',
    memberSince: 'January 2020',
    experience: '8 years',
    rating: 4.9,
    totalReviews: 312,
    totalBookings: 456,
    responseTime: 'Within 1 hour',
    languages: ['English', 'Hindi', 'Marathi'],
    verified: true,
    topRated: true,
    areasServed: ['Mumbai', 'Thane', 'Navi Mumbai'],
    workingStyle: 'I believe in building a relationship with my patients and their families. My care approach includes regular health updates, family education on patient care, and 24/7 availability for emergencies.',
    services: [
      {
        id: 1,
        title: 'Post-Surgery Recovery Care',
        description: 'Complete nursing care for patients recovering from surgery',
        price: 28,
        unit: '/hr',
        rating: 4.9,
        reviews: 156,
      },
      {
        id: 2,
        title: 'Elderly Daily Care',
        description: 'Compassionate daily assistance for senior family members',
        price: 25,
        unit: '/hr',
        rating: 4.8,
        reviews: 98,
      },
      {
        id: 3,
        title: 'Wound Care & Dressing',
        description: 'Professional wound management and dressing changes',
        price: 18,
        unit: '/visit',
        rating: 5.0,
        reviews: 58,
      },
    ],
    credentials: [
      { name: 'B.Sc Nursing', institution: 'Mumbai University', year: '2015', verified: true },
      { name: 'Post-Surgery Care Certification', institution: 'Apollo Hospitals', year: '2018', verified: true },
      { name: 'BLS & ACLS Certified', institution: 'American Heart Association', year: '2023', verified: true },
      { name: 'Geriatric Care Specialist', institution: 'Indian Nursing Council', year: '2021', verified: true },
    ],
    reviews: [
      {
        id: 1,
        author: 'Vikram Mehta',
        avatar: 'VM',
        rating: 5,
        date: '2 weeks ago',
        service: 'Post-Surgery Recovery Care',
        text: 'Priya took care of my mother after her hip replacement surgery. Her professionalism and warmth made a difficult time so much easier. She was always punctual and kept us informed about everything.',
      },
      {
        id: 2,
        author: 'Emma van Dijk',
        avatar: 'EV',
        rating: 5,
        date: '1 month ago',
        service: 'Elderly Daily Care',
        text: 'Exceptional care for my father! Priya treated him with such dignity and patience. She even taught us how to help with his exercises when she wasn\'t there.',
      },
      {
        id: 3,
        author: 'Rahul Kapoor',
        avatar: 'RK',
        rating: 5,
        date: '2 months ago',
        service: 'Post-Surgery Recovery Care',
        text: 'Very knowledgeable and caring. The daily updates gave us peace of mind while we were at work. Highly recommend!',
      },
    ],
  },
};

// Generate similar data for other providers
for (let i = 2; i <= 10; i++) {
  profileData[i] = {
    ...profileData[1],
    id: i,
    name: ['Meera Reddy', 'Rajesh Kumar', 'Lakshmi Nair', 'Sunita Kumari', 'Geeta Devi', 'Fatima Khan', 'Arjun Patel', 'Dr. Neha Gupta', 'Ravi Menon'][i - 2],
    avatar: ['MR', 'RK', 'LN', 'SK', 'GD', 'FK', 'AP', 'NG', 'RM'][i - 2],
  };
}

const ProviderProfilePage = () => {
  const { providerId } = useParams();
  const provider = profileData[providerId] || profileData[1];
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'credentials', label: 'Credentials' },
  ];

  return (
    <div className="pt-20 bg-cream min-h-screen" data-testid="provider-profile-page">
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
                    <Check size={12} className="mr-1" /> Verified
                  </span>
                )}
                {provider.topRated && (
                  <span className="bg-gold/20 text-gold rounded-pill px-2.5 py-1 text-xs font-medium">
                    <Award size={12} className="inline mr-1" /> Top Rated
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
                Book a Session
              </Link>
              <button className="btn-outline" data-testid="message-btn">
                <MessageCircle size={18} />
              </button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="font-serif text-2xl font-medium text-sage-dark">{provider.totalBookings}</p>
              <p className="text-sm text-lotus-text-muted">Total Bookings</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="font-serif text-2xl font-medium text-sage-dark">{provider.experience}</p>
              <p className="text-sm text-lotus-text-muted">Experience</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="font-serif text-2xl font-medium text-sage-dark">{provider.responseTime}</p>
              <p className="text-sm text-lotus-text-muted">Response Time</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-1">
                <Star size={18} className="text-gold fill-gold" />
                <span className="font-serif text-2xl font-medium text-sage-dark">{provider.rating}</span>
              </div>
              <p className="text-sm text-lotus-text-muted">{provider.totalReviews} reviews</p>
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
                  activeTab === tab.id
                    ? 'tab-active'
                    : 'tab-inactive'
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
                  <h2 className="font-serif text-xl font-medium text-sage-dark mb-4">About</h2>
                  <p className="text-body leading-relaxed mb-4">{provider.bio}</p>
                  <p className="text-body leading-relaxed">{provider.workingStyle}</p>
                </div>

                {/* Areas Served */}
                <div className="card-lotus p-6 lg:p-8">
                  <h2 className="font-serif text-xl font-medium text-sage-dark mb-4">Areas Served</h2>
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
                  <h2 className="font-serif text-xl font-medium text-sage-dark mb-4">Languages</h2>
                  <div className="flex flex-wrap gap-2">
                    {provider.languages.map((lang) => (
                      <span key={lang} className="badge-blush">{lang}</span>
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
                      <h3 className="font-serif text-lg font-medium text-sage-dark mb-1">{service.title}</h3>
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
                        €{service.price}<span className="text-lotus-text-muted font-normal text-sm">{service.unit}</span>
                      </p>
                      <span className="btn-primary text-sm mt-2 inline-block">View Details</span>
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
                      <p className="font-serif text-5xl font-medium text-sage-dark">{provider.rating}</p>
                      <div className="flex items-center justify-center gap-1 my-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} className="text-gold fill-gold" />
                        ))}
                      </div>
                      <p className="text-sm text-lotus-text-muted">{provider.totalReviews} reviews</p>
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
                            <Star key={i} size={12} className={i < review.rating ? 'text-gold fill-gold' : 'text-lotus-border'} />
                          ))}
                        </div>
                        <p className="text-xs text-sage mb-2">{review.service}</p>
                        <p className="text-body">{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <button className="btn-outline w-full" data-testid="load-more-reviews">
                  Load more reviews
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
                      <p className="font-medium text-sage-dark">Identity Verified</p>
                      <p className="text-sm text-lotus-text-muted">Government ID verified by Lotus Care</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                      <Shield size={20} className="text-sage" />
                    </div>
                    <div>
                      <p className="font-medium text-sage-dark">Background Check</p>
                      <p className="text-sm text-lotus-text-muted">Completed on March 2024</p>
                    </div>
                  </div>
                </div>

                {provider.credentials.map((cred, index) => (
                  <div key={index} className="card-lotus p-6 flex items-start gap-4" data-testid={`credential-${index}`}>
                    <div className="w-12 h-12 rounded-full bg-sage-pale flex items-center justify-center flex-shrink-0">
                      <Award size={20} className="text-sage" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-sage-dark">{cred.name}</h3>
                        {cred.verified && (
                          <span className="badge-sage text-[10px]">
                            <Check size={10} className="mr-1" /> Verified
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
                <p className="text-sm text-lotus-text-muted">Starting from</p>
                <p className="price-highlight text-2xl">€18<span className="text-lotus-text-muted font-normal text-sm">/hr</span></p>
              </div>

              <Link
                to={`/service/${provider.id}`}
                className="btn-primary w-full justify-center"
                data-testid="sidebar-book-btn"
              >
                <Calendar size={18} className="mr-2" /> Book a Session
              </Link>

              <button className="btn-outline w-full" data-testid="sidebar-message-btn">
                <MessageCircle size={18} className="mr-2" /> Message
              </button>

              <div className="pt-4 border-t border-lotus-border space-y-2">
                <div className="flex items-center gap-2 text-sm text-lotus-text-muted">
                  <Clock size={14} className="text-sage" />
                  <span>Usually responds {provider.responseTime.toLowerCase()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-lotus-text-muted">
                  <Shield size={14} className="text-sage" />
                  <span>Verified & background checked</span>
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
