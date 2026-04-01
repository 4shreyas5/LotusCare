import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Check, Shield, Star, ChevronRight, ArrowRight, Quote } from 'lucide-react';

// Mock data for providers
const featuredProviders = [
  {
    id: 1,
    name: 'Priya S.',
    avatar: 'PS',
    title: 'Compassionate in-home nursing for post-surgery recovery',
    category: 'Healthcare',
    badge: 'Top Rated',
    badgeColor: 'bg-gold/20 text-gold',
    rating: 5,
    reviews: 312,
    price: '£25',
    priceUnit: '/hr',
    emoji: '🧑‍⚕️',
    bgColor: 'bg-sage-pale',
  },
  {
    id: 2,
    name: 'Meera R.',
    avatar: 'MR',
    title: 'Specialized dementia and Alzheimer\'s daily care support',
    category: 'Medical',
    badge: 'Medical',
    badgeColor: 'bg-blue-100 text-blue-700',
    rating: 5,
    reviews: 204,
    price: '£22',
    priceUnit: '/hr',
    emoji: '👩‍🦳',
    bgColor: 'bg-blush-light',
  },
  {
    id: 3,
    name: 'Sunita K.',
    avatar: 'SK',
    title: 'Full-home cleaning, organizing, and grocery assistance',
    category: 'Home',
    badge: 'New',
    badgeColor: 'bg-sage/10 text-sage',
    rating: 4,
    reviews: 88,
    price: '£18',
    priceUnit: '/hr',
    emoji: '🏠',
    bgColor: 'bg-blue-50',
  },
  {
    id: 4,
    name: 'Arjun P.',
    avatar: 'AP',
    title: 'Anxiety, grief, and life-transition counseling sessions',
    category: 'Counselor',
    badge: 'Counselor',
    badgeColor: 'bg-purple-100 text-purple-700',
    rating: 5,
    reviews: 176,
    price: '£45',
    priceUnit: '/session',
    emoji: '💆',
    bgColor: 'bg-purple-50',
  },
];

const categories = [
  {
    id: 1,
    title: 'Healthcare Support',
    description: 'Professional medical care at home — from nursing to rehabilitation.',
    icon: '🏥',
    tags: ['Elderly care', 'Post-surgery', 'Dementia care', 'ICU support'],
    providers: '240+',
    link: '/category/healthcare',
    gradient: 'category-healthcare',
  },
  {
    id: 2,
    title: 'Home Support',
    description: 'Trusted help for daily household tasks and family needs.',
    icon: '🏡',
    tags: ['Cleaning', 'Cooking', 'Grocery runs', 'Childminding'],
    providers: '185+',
    link: '/category/home-support',
    gradient: 'category-home',
  },
  {
    id: 3,
    title: 'Personal Support',
    description: 'Emotional wellness, companionship, and guidance when you need it.',
    icon: '💬',
    tags: ['Counseling', 'Life coaching', 'Companionship', 'Grief support'],
    providers: '120+',
    link: '/category/personal-support',
    gradient: 'category-personal',
  },
];

const quickFilters = ['Elderly Care', 'Post-Surgery Nurse', 'House Cleaning', 'Counseling', 'Child Care', 'Companion'];

const howItWorks = [
  { step: 1, title: 'Describe your needs', desc: 'Tell us about the care you\'re looking for and any specific requirements.' },
  { step: 2, title: 'Browse matched providers', desc: 'Review verified profiles, ratings, and reviews of caregivers who fit your needs.' },
  { step: 3, title: 'Connect & confirm', desc: 'Message providers, discuss details, and book with confidence.' },
  { step: 4, title: 'Ongoing support', desc: 'Receive quality care with our satisfaction guarantee and 24/7 support.' },
];

const testimonials = [
  {
    id: 1,
    quote: 'After my mother\'s hip surgery, finding reliable nursing care felt overwhelming. Lotus Care matched us with Priya within hours. She became part of our family.',
    author: 'Vikram Mehta',
    role: 'Son & Family Caregiver',
    city: 'Mumbai',
    avatar: 'VM',
    avatarColor: 'avatar-sage',
  },
  {
    id: 2,
    quote: 'As working parents, we needed someone we could trust with our children. The thorough background checks gave us peace of mind we couldn\'t find elsewhere.',
    author: 'Ananya Sharma',
    role: 'Working Parent',
    city: 'Bangalore',
    avatar: 'AS',
    avatarColor: 'avatar-blush',
  },
  {
    id: 3,
    quote: 'The grief counseling I found through Lotus Care helped me navigate the hardest year of my life. Professional, compassionate, and truly life-changing.',
    author: 'Rahul Kapoor',
    role: 'Individual Client',
    city: 'Delhi',
    avatar: 'RK',
    avatarColor: 'avatar-lavender',
  },
];

const HomePage = () => {
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
                <span className="text-sm font-medium text-sage">Trusted by 40,000+ families across India</span>
              </div>

              {/* Headline */}
              <h1 className="heading-display">
                Care that feels like <span className="italic text-sage">family</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-lotus-text-mid leading-relaxed max-w-lg">
                Find verified nurses, caregivers, home helpers, and counselors — handpicked, 
                background-checked, and ready to help when you need it most.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-xl">
                <input
                  type="text"
                  placeholder="What kind of care are you looking for?"
                  className="w-full rounded-pill border-2 border-lotus-border bg-white pl-5 pr-36 py-4 text-base text-sage-dark placeholder-lotus-text-muted focus:border-sage focus:outline-none focus:ring-4 focus:ring-sage/10 transition-all"
                  data-testid="hero-search-input"
                />
                <button 
                  className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary py-2.5 px-6"
                  data-testid="hero-search-btn"
                >
                  <span className="flex items-center gap-2">
                    Search <ArrowRight size={16} />
                  </span>
                </button>
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2">
                {quickFilters.map((filter) => (
                  <Link
                    key={filter}
                    to={`/category/healthcare?filter=${filter.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-4 py-2 rounded-pill bg-white border border-lotus-border text-sm text-lotus-text-mid hover:border-sage hover:text-sage transition-all"
                    data-testid={`quick-filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {filter}
                  </Link>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2 text-sm text-lotus-text-mid">
                  <Check size={18} className="text-sage" />
                  <span>Background Verified</span>
                </div>
                <div className="w-px h-4 bg-lotus-border"></div>
                <div className="flex items-center gap-2 text-sm text-lotus-text-mid">
                  <Shield size={18} className="text-sage" />
                  <span>Insured</span>
                </div>
                <div className="w-px h-4 bg-lotus-border"></div>
                <div className="flex items-center gap-2 text-sm text-lotus-text-mid">
                  <Star size={18} className="text-gold fill-gold" />
                  <span>Avg 4.9 Rating</span>
                </div>
              </div>
            </div>

            {/* Right - Floating Cards */}
            <div className="relative hidden lg:block h-[500px]">
              {/* Main Provider Card */}
              <div className="absolute top-8 left-0 card-lotus p-5 w-72 float-animation" data-testid="hero-provider-card">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 avatar-circle avatar-sage text-lg">PS</div>
                  <div className="flex-1">
                    <div className="badge-sage text-xs mb-1">✓ Verified Nurse</div>
                    <h4 className="font-serif font-semibold text-sage-dark">Priya Sharma</h4>
                    <p className="text-sm text-lotus-text-muted">Post-Surgery Care • 8 yrs exp</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-gold fill-gold" />
                      ))}
                      <span className="text-xs text-lotus-text-muted ml-1">(312)</span>
                    </div>
                    <p className="text-sage font-serif font-semibold mt-2">Starting at ₹850/hr</p>
                  </div>
                </div>
              </div>

              {/* Booking Confirmed Card */}
              <div className="absolute top-4 right-0 card-lotus p-4 w-64 float-animation-delayed" data-testid="hero-booking-card">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-sage rounded-full"></span>
                  <span className="text-sm font-medium text-sage">Booking confirmed</span>
                </div>
                <p className="text-sm font-medium text-sage-dark">Post-Surgery Care</p>
                <p className="text-xs text-lotus-text-muted">Tomorrow, 9:00 AM - 5:00 PM</p>
                <div className="mt-3 inline-flex items-center gap-2 bg-sage/10 rounded-pill px-3 py-1">
                  <Check size={14} className="text-sage" />
                  <span className="text-xs font-medium text-sage">Caregiver on the way</span>
                </div>
              </div>

              {/* Matched Card */}
              <div className="absolute bottom-16 left-8 card-lotus p-4 w-56 float-animation-delayed-2" data-testid="hero-matched-card">
                <p className="text-xs text-lotus-text-muted mb-2">Matched for you</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 avatar-circle avatar-blush text-sm">MR</div>
                  <div>
                    <p className="text-sm font-medium text-sage-dark">Meera R.</p>
                    <p className="text-xs text-lotus-text-muted">2.5 km away</p>
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
            <span className="label-overline">Our Services</span>
            <h2 className="heading-section mt-3 mb-4">Every kind of care, under one roof</h2>
            <p className="text-body max-w-2xl mx-auto">
              From medical support to everyday help — choose the care that fits your life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className={`${category.gradient} rounded-card p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover`}
                data-testid={`category-card-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Provider count badge */}
                <span className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm rounded-pill px-3 py-1 text-xs font-medium text-sage-dark">
                  {category.providers} providers
                </span>

                <span className="text-5xl mb-4 block">{category.icon}</span>
                <h3 className="heading-card mb-2">{category.title}</h3>
                <p className="text-body text-sm mb-4">{category.description}</p>

                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <span key={tag} className="bg-white/60 backdrop-blur-sm rounded-pill px-3 py-1 text-xs text-sage-dark">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-sage font-medium text-sm group-hover:gap-3 transition-all">
                  Explore <ChevronRight size={16} />
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
              <span className="label-overline">Featured Providers</span>
              <h2 className="heading-section mt-3">Trusted by families like yours</h2>
            </div>
            <Link to="/category/healthcare" className="btn-outline text-sm" data-testid="view-all-providers-btn">
              View all providers
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
                <div className={`${provider.bgColor} h-40 flex items-center justify-center relative`}>
                  <span className="text-6xl">{provider.emoji}</span>
                  <span className={`absolute top-3 right-3 ${provider.badgeColor} rounded-pill px-2.5 py-1 text-xs font-medium`}>
                    {provider.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 avatar-circle avatar-sage text-sm">{provider.avatar}</div>
                    <div>
                      <p className="font-medium text-sage-dark text-sm">{provider.name}</p>
                      <span className="badge-sage text-[10px]">✓ Verified</span>
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
                      {provider.price}<span className="text-lotus-text-muted font-normal">{provider.priceUnit}</span>
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
              <p className="font-serif text-4xl lg:text-5xl font-medium text-white">40K<span className="text-blush">+</span></p>
              <p className="text-white/70 text-sm mt-2">Families served</p>
            </div>
            <div>
              <p className="font-serif text-4xl lg:text-5xl font-medium text-white">4.9<span className="text-blush">★</span></p>
              <p className="text-white/70 text-sm mt-2">Average provider rating</p>
            </div>
            <div>
              <p className="font-serif text-4xl lg:text-5xl font-medium text-white">545<span className="text-blush">+</span></p>
              <p className="text-white/70 text-sm mt-2">Verified caregivers</p>
            </div>
            <div>
              <p className="font-serif text-4xl lg:text-5xl font-medium text-white">98<span className="text-blush">%</span></p>
              <p className="text-white/70 text-sm mt-2">Satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-cream section-padding" id="how-it-works" data-testid="how-it-works-section">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="heading-section">Care in 4 simple steps</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
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
            <span className="label-overline">What Families Say</span>
            <h2 className="heading-section mt-3">Stories of trust and care</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card-lotus p-8 relative" data-testid={`testimonial-${testimonial.id}`}>
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
                    <p className="text-sm text-lotus-text-muted">{testimonial.role}, {testimonial.city}</p>
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
                <h3 className="heading-section mb-4">Are you a caregiver, nurse, or counselor?</h3>
                <p className="text-body mb-6">
                  Join India's fastest-growing care marketplace. Set your own schedule, 
                  connect with families who need you, and grow your practice.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {['Free to join', 'Instant payouts', 'You set your schedule', 'Liability insurance included'].map((perk) => (
                    <span key={perk} className="badge-sage">
                      <Check size={14} className="mr-1" /> {perk}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <button className="btn-primary" data-testid="become-provider-btn">
                  Become a Provider
                </button>
                <button className="btn-outline" data-testid="learn-more-btn">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-cream section-padding" data-testid="final-cta-section">
        <div className="section-container text-center">
          <h2 className="heading-section mb-4">Your family deserves the very best care</h2>
          <p className="text-body max-w-2xl mx-auto mb-8">
            Whether you need medical support, help around the house, or someone to talk to — 
            we're here to connect you with trusted, verified caregivers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/category/healthcare" className="btn-primary" data-testid="final-cta-find-btn">
              Find a Caregiver Today
            </Link>
            <Link to="/category/healthcare" className="btn-outline" data-testid="final-cta-browse-btn">
              Browse All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
