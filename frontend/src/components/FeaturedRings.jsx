import React from 'react';
import { ArrowRight } from 'lucide-react';
import { featuredRings } from '../mock';
import '../styles/FeaturedRings.css';

const FeaturedRings = () => {
  return (
    <section className="featured-rings" id="rings">
      <div className="featured-rings__container">
        <div className="section-header">
          <h2 className="section-title">Shop the Stories</h2>
          <p className="section-subtitle">
            Each piece is crafted to hold the weight of your moment.
          </p>
        </div>

        <div className="rings-grid">
          {featuredRings.map((ring) => (
            <div key={ring.id} className="ring-card">
              <div className="ring-card__image-wrapper">
                <img
                  src={ring.image}
                  alt={ring.name}
                  className="ring-card__image"
                />
                <div className="ring-card__overlay">
                  <button className="ring-card__cta">
                    View ring
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
              <div className="ring-card__content">
                <h3 className="ring-card__name">{ring.name}</h3>
                <p className="ring-card__tagline">{ring.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRings;
