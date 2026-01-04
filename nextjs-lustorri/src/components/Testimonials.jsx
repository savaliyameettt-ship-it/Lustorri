'use client'

import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../mock';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">Love Notes</h2>
        <div className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${
                index === currentIndex ? 'testimonial-card--active' : ''
              }`}
            >
              <div className="testimonial-card__stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="var(--champagne-gold)" color="var(--champagne-gold)" />
                ))}
              </div>
              <blockquote className="testimonial-card__quote">
                "{testimonial.quote}"
              </blockquote>
              <p className="testimonial-card__author">— {testimonial.author}</p>
            </div>
          ))}
        </div>
        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'dot--active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
