import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Healthcare', path: '/category/healthcare' },
    { name: 'Home Support', path: '/category/home-support' },
    { name: 'Personal Support', path: '/category/personal-support' },
    { name: 'How It Works', path: '/#how-it-works' },
    { name: 'For Providers', path: '/#providers' },
  ];

  return (
    <nav className="nav-sticky fixed top-0 left-0 right-0 z-50" data-testid="navbar">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" data-testid="logo-link">
            <span className="text-3xl">🪷</span>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold text-sage-dark tracking-tight">
                Lotus Care
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-lotus-text-muted font-medium -mt-0.5">
                India's Care Marketplace
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-sage ${
                  location.pathname === link.path ? 'text-sage' : 'text-lotus-text-mid'
                }`}
                data-testid={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              className="btn-ghost text-sm"
              data-testid="sign-in-btn"
            >
              Sign in
            </button>
            <Link 
              to="/category/healthcare" 
              className="btn-primary text-sm"
              data-testid="find-caregiver-btn"
            >
              Find a Caregiver
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-sage-dark"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-lotus-border mt-2 pt-4" data-testid="mobile-menu">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-base font-medium text-lotus-text-mid hover:text-sage transition-colors"
                  onClick={() => setIsOpen(false)}
                  data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-lotus-border my-2" />
              <button className="btn-ghost text-sm w-fit" data-testid="mobile-sign-in-btn">
                Sign in
              </button>
              <Link 
                to="/category/healthcare" 
                className="btn-primary text-sm w-fit"
                onClick={() => setIsOpen(false)}
                data-testid="mobile-find-caregiver-btn"
              >
                Find a Caregiver
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
