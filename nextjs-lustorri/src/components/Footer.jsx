'use client'

import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { footerLinks } from '../mock';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Newsletter Section */}
        <div className="footer__newsletter">
          <h3 className="footer__newsletter-title">
            Stay for the stories, not just the jewelry.
          </h3>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
          {isSubscribed && (
            <p className="newsletter-success">Thank you for subscribing! ✨</p>
          )}
        </div>

        {/* Footer Links */}
        <div className="footer__links">
          <div className="footer__column">
            <h4 className="footer__column-title">Shop</h4>
            {footerLinks.shop.map((link) => (
              <a key={link.name} href={link.href} className="footer__link">
                {link.name}
              </a>
            ))}
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">About</h4>
            {footerLinks.about.map((link) => (
              <a key={link.name} href={link.href} className="footer__link">
                {link.name}
              </a>
            ))}
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Stories</h4>
            {footerLinks.stories.map((link) => (
              <a key={link.name} href={link.href} className="footer__link">
                {link.name}
              </a>
            ))}
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Support</h4>
            {footerLinks.support.map((link) => (
              <a key={link.name} href={link.href} className="footer__link">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="footer__social">
          <a href="#" className="social-icon" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className="social-icon" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="social-icon" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="#" className="social-icon" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2025 Lustorri. All rights reserved. Crafted with love.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
