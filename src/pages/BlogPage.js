import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, User } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const BlogPage = () => {
  const { t } = useLanguage();

  const posts = [
    {
      id: 1,
      title: t('blog_post_1_title', 'Tips for Finding the Right Caregiver'),
      excerpt: t('blog_post_1_excerpt', 'Learn how to identify and select the perfect caregiver for your family needs.'),
      author: t('blog_author', 'Lotus Care Team'),
      date: 'March 10, 2025',
    },
    {
      id: 2,
      title: t('blog_post_2_title', 'Understanding Home Care Options'),
      excerpt: t('blog_post_2_excerpt', 'A comprehensive guide to different types of home care services available on our platform.'),
      author: t('blog_author', 'Lotus Care Team'),
      date: 'March 5, 2025',
    },
    {
      id: 3,
      title: t('blog_post_3_title', 'Building Trust in Caregiving Relationships'),
      excerpt: t('blog_post_3_excerpt', 'Expert advice on how families can establish strong, trustworthy relationships with caregivers.'),
      author: t('blog_author', 'Lotus Care Team'),
      date: 'February 28, 2025',
    },
    {
      id: 4,
      title: t('blog_post_4_title', 'Health & Wellness Tips for Seniors'),
      excerpt: t('blog_post_4_excerpt', 'Essential health practices and wellness tips for maintaining quality of life in your senior years.'),
      author: t('blog_author', 'Lotus Care Team'),
      date: 'February 20, 2025',
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 bg-cream min-h-screen" data-testid="blog-page">
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-lotus-border">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-lotus-text-muted hover:text-sage transition-colors">
              {t('breadcrumb_home')}
            </Link>
            <ChevronRight size={14} className="text-lotus-text-muted" />
            <span className="text-sage-dark font-medium">{t('blog_title', 'Blog')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <h1 className="heading-display mb-4">{t('blog_title', 'Blog')}</h1>
          <p className="text-lg text-lotus-text-mid mb-12">
            {t('blog_subtitle', 'Insights, tips, and stories from the Lotus Care community.')}
          </p>

          {/* Blog Posts */}
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-lotus-border p-8 hover:border-sage transition-colors">
                <h2 className="heading-sm text-sage-dark mb-2">{post.title}</h2>
                <div className="flex flex-wrap gap-4 text-xs text-lotus-text-muted mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </div>
                </div>
                <p className="text-base text-lotus-text-mid leading-relaxed mb-4">{post.excerpt}</p>
                <button className="text-sage font-medium text-sm hover:text-sage-dark transition-colors">
                  {t('blog_read_more', 'Read More →')}
                </button>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lotus-text-mid mb-4">{t('blog_subscribe', 'Subscribe to our newsletter for updates.')}</p>
            <div className="flex gap-2 max-w-sm mx-auto">
              <input
                type="email"
                placeholder={t('blog_email_placeholder', 'your@email.com')}
                className="flex-1 px-4 py-2 border border-lotus-border rounded-lg focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition"
              />
              <button className="btn-primary">{t('blog_subscribe_btn', 'Subscribe')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
