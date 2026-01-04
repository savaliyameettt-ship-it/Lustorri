import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import { navigationLinks } from '../mock';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split navigation links
  const leftLinks = navigationLinks.slice(0, 2); // Shop Rings, Stories
  const rightLinks = navigationLinks.slice(2, 4); // About, Support (removed Engraved Cards)

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      {/* Navigation Row */}
      <div className="header__nav-row">
        <div className="header__nav-container">
          {/* Left Navigation */}
          <nav className="header__nav header__nav--left">
            {leftLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Logo Spacer - creates gap for logo */}
          <div className="header__logo-spacer"></div>

          {/* Right Navigation */}
          <nav className="header__nav header__nav--right">
            {rightLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="header__icons">
            <button className="icon-btn" aria-label="Account">
              <User size={18} />
            </button>
            <button className="icon-btn" aria-label="Wishlist">
              <Heart size={18} />
            </button>
            <button className="icon-btn" aria-label="Cart">
              <ShoppingCart size={18} />
            </button>
            <button 
              className="icon-btn mobile-menu-btn" 
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Logo Row - breaks through the border */}
      <div className="header__logo-row">
        <div className="header__logo">
          <a href="/">
            <img 
              src="https://customer-assets.emergentagent.com/job_romantic-rings/artifacts/nmqtaxm9_LUSTORRI%20LOGO%20FINAL%20VERSION%20WITHOUT%20BCG.png" 
              alt="Lustorri"
              className="logo-image"
            />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navigationLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
