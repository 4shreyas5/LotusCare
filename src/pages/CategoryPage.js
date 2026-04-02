import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Star, Check, SlidersHorizontal, X, MapPin } from 'lucide-react';
import { categoryData, specializations } from '../data/homeData';
import { allProviders } from '../data/providers';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = categoryData[categoryId] || categoryData.healthcare;

  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('relevant');
  const [filters, setFilters] = useState({
    priceMin: '',
    priceMax: '',
    availability: [],
    experience: '',
    specialization: [],
    gender: '',
    rating: '',
  });

  // Filter providers
  const filteredProviders = allProviders.filter((p) => p.category === categoryId);

  // Sort providers
  const sortedProviders = [...filteredProviders].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return b.topRated - a.topRated;
    }
  });

  return (
    <div className="pt-20 bg-cream min-h-screen" data-testid="category-page">
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-lotus-border">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-lotus-text-muted hover:text-sage transition-colors"
              data-testid="breadcrumb-home"
            >
              Home
            </Link>
            <ChevronRight size={14} className="text-lotus-text-muted" />
            <span className="text-sage-dark font-medium">{category.title}</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-warm-white border-b border-lotus-border">
        <div className="section-container py-8">
          <div className="flex items-start gap-4">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="heading-section mb-2">{category.title}</h1>
              <p className="text-body max-w-2xl">{category.description}</p>
              <span className="badge-sage mt-3 inline-block">{category.providers}+ providers available</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0" data-testid="filters-sidebar">
            <div className="card-lotus p-6 sticky top-24">
              <h3 className="font-serif text-lg font-medium text-sage-dark mb-6">Filters</h3>

              {/* Price Range */}
              <div className="filter-section">
                <label className="text-sm font-medium text-sage-dark block mb-3">
                  Price Range (€/hr)
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="input-lotus text-sm py-2"
                    value={filters.priceMin}
                    onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                    data-testid="filter-price-min"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="input-lotus text-sm py-2"
                    value={filters.priceMax}
                    onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
                    data-testid="filter-price-max"
                  />
                </div>
              </div>

              {/* Availability */}
              <div className="filter-section">
                <label className="text-sm font-medium text-sage-dark block mb-3">Availability</label>
                <div className="space-y-2">
                  {['Today', 'This week', 'Weekends'].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-lotus-border text-sage focus:ring-sage"
                        data-testid={`filter-availability-${option.toLowerCase().replace(/\s+/g, '-')}`}
                      />
                      <span className="text-sm text-lotus-text-mid">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div className="filter-section">
                <label className="text-sm font-medium text-sage-dark block mb-3">
                  Experience Level
                </label>
                <div className="space-y-2">
                  {['Junior (1-3 yrs)', 'Senior (4-7 yrs)', 'Expert (8+ yrs)'].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="experience"
                        className="w-4 h-4 border-lotus-border text-sage focus:ring-sage"
                        data-testid={`filter-experience-${option.split(' ')[0].toLowerCase()}`}
                      />
                      <span className="text-sm text-lotus-text-mid">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Specialization */}
              <div className="filter-section">
                <label className="text-sm font-medium text-sage-dark block mb-3">Specialization</label>
                <div className="flex flex-wrap gap-2">
                  {(specializations[categoryId] || specializations.healthcare).map((spec) => (
                    <button
                      key={spec}
                      className="px-3 py-1.5 rounded-pill text-xs border border-lotus-border text-lotus-text-mid hover:border-sage hover:text-sage transition-colors"
                      data-testid={`filter-spec-${spec.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="filter-section">
                <label className="text-sm font-medium text-sage-dark block mb-3">Rating</label>
                <div className="space-y-2">
                  {['4★ & above', '4.5★ & above', '5★ only'].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        className="w-4 h-4 border-lotus-border text-sage focus:ring-sage"
                        data-testid={`filter-rating-${option.split('★')[0]}`}
                      />
                      <span className="text-sm text-lotus-text-mid">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                className="btn-primary w-full mt-4 text-sm"
                data-testid="apply-filters-btn"
                onClick={() => console.log('Filters applied:', filters)}
              >
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <button
            className="lg:hidden btn-outline w-full flex items-center justify-center gap-2"
            onClick={() => setShowFilters(true)}
            data-testid="mobile-filter-btn"
          >
            <SlidersHorizontal size={18} /> Filters
          </button>

          {/* Mobile Filter Modal */}
          {showFilters && (
            <div
              className="lg:hidden fixed inset-0 z-50 bg-black/50"
              onClick={() => setShowFilters(false)}
            >
              <div
                className="absolute right-0 top-0 bottom-0 w-80 bg-warm-white p-6 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg font-medium text-sage-dark">Filters</h3>
                  <button onClick={() => setShowFilters(false)} data-testid="close-filters-btn">
                    <X size={24} className="text-lotus-text-mid" />
                  </button>
                </div>
                <button
                  className="btn-primary w-full mt-4"
                  onClick={() => setShowFilters(false)}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Main Content */}
          <main className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-lotus-text-muted">
                <span className="font-medium text-sage-dark">{sortedProviders.length}</span> providers
                found
              </p>
              <div className="flex items-center gap-3">
                <label className="text-sm text-lotus-text-muted">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input-lotus py-2 px-3 text-sm w-44"
                  data-testid="sort-select"
                >
                  <option value="relevant">Most Relevant</option>
                  <option value="rating">Top Rated</option>
                  <option value="price-low">Lowest Price</option>
                  <option value="reviews">Most Reviews</option>
                </select>
              </div>
            </div>

            {/* Provider Cards Grid */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedProviders.map((provider) => (
                <Link
                  key={provider.id}
                  to={`/service/${provider.id}`}
                  className="card-lotus overflow-hidden group"
                  data-testid={`provider-card-${provider.id}`}
                >
                  {/* Image Area */}
                  <div className="bg-sage-pale h-36 flex items-center justify-center relative">
                    <div className="w-20 h-20 avatar-circle avatar-sage text-2xl font-serif">
                      {provider.avatar}
                    </div>
                    {provider.topRated && (
                      <span className="absolute top-3 right-3 bg-gold/20 text-gold rounded-pill px-2.5 py-1 text-xs font-medium">
                        Top Rated
                      </span>
                    )}
                    {provider.verified && (
                      <span className="absolute top-3 left-3 badge-sage text-[10px]">
                        <Check size={12} className="mr-1" /> Verified
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-serif font-medium text-sage-dark">{provider.name}</h3>
                    </div>

                    <p className="text-sm text-lotus-text-mid line-clamp-2 mb-3 min-h-[40px]">
                      {provider.title}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-lotus-text-muted mb-3">
                      <MapPin size={12} />
                      <span>{provider.location}</span>
                      <span className="w-1 h-1 bg-lotus-border rounded-full"></span>
                      <span>{provider.experience}</span>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-lotus-border">
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
                        €{provider.price}
                        <span className="text-lotus-text-muted font-normal text-xs">
                          {provider.priceUnit}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-10">
              <button
                className="w-10 h-10 rounded-full border border-lotus-border text-lotus-text-muted hover:border-sage hover:text-sage transition-colors"
                data-testid="pagination-prev"
              >
                ‹
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-full font-medium transition-colors ${
                    page === 1
                      ? 'bg-sage text-white'
                      : 'border border-lotus-border text-lotus-text-muted hover:border-sage hover:text-sage'
                  }`}
                  data-testid={`pagination-${page}`}
                >
                  {page}
                </button>
              ))}
              <button
                className="w-10 h-10 rounded-full border border-lotus-border text-lotus-text-muted hover:border-sage hover:text-sage transition-colors"
                data-testid="pagination-next"
              >
                ›
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
