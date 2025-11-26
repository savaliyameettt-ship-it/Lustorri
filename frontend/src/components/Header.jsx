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

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <a href="/">
            <span className="logo-text">Lustorri</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          {navigationLinks.map((link) => (
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
