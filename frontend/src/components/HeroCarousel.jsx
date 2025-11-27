import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { polaroidMoments } from '../mock';
import '../styles/HeroCarousel.css';

const HeroCarousel = () => {
  const [moments, setMoments] = useState(polaroidMoments);
  const [hoveredId, setHoveredId] = useState(null);

  const rotateLeft = () => {
    setMoments(prev => {
      const newMoments = [...prev];
      const first = newMoments.shift();
      newMoments.push(first);
      return newMoments;
    });
  };

  const rotateRight = () => {
    setMoments(prev => {
      const newMoments = [...prev];
      const last = newMoments.pop();
      newMoments.unshift(last);
      return newMoments;
    });
  };

  const getZIndex = (index) => {
    if (index === 0) return 40;
    if (index === 1) return 35;
    if (index === 2) return 30;
    return 25;
  };

  const getTransform = (index) => {
    if (index === 0) return 'translate(-50%, -50%) rotate(-3deg) scale(1)';
    if (index === 1) return 'translate(-50%, -50%) rotate(5deg) scale(0.98) translateX(180px) translateY(-30px)';
    if (index === 2) return 'translate(-50%, -50%) rotate(-7deg) scale(0.96) translateX(-200px) translateY(40px)';
    return 'translate(-50%, -50%) rotate(4deg) scale(0.94) translateX(120px) translateY(80px)';
  };

  return (
    <section className="hero-carousel">
      <div className="hero-carousel__container">
        <div className="hero-content">
          <h1 className="hero-title">
            Jewelry for the moments
            <br />
            you never forget.
          </h1>
          <p className="hero-subtitle">
            Every ring holds a story. Every story begins with a touch.
          </p>
          <div className="hero-buttons">
            <button className="btn btn--primary">
              Discover the rings
            </button>
            <button className="btn btn--ghost">
              Read the love stories
            </button>
          </div>
        </div>

        <div className="polaroid-stack">
          <button 
            className="carousel-handle carousel-handle--left"
            onClick={rotateLeft}
            aria-label="Previous moment"
          >
            <ChevronLeft size={24} />
          </button>

          {moments.map((moment, index) => (
            <div
              key={moment.id}
              className="polaroid"
              style={{
                zIndex: getZIndex(index),
                transform: getTransform(index),
                opacity: index === 0 ? 1 : 0.7
              }}
              onMouseEnter={() => setHoveredId(moment.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="polaroid__frame">
                <img
                  src={hoveredId === moment.id ? moment.gifImage : moment.staticImage}
                  alt={moment.title}
                  className="polaroid__image"
                />
                <p className="polaroid__caption">{moment.caption}</p>
              </div>
            </div>
          ))}

          <button 
            className="carousel-handle carousel-handle--right"
            onClick={rotateRight}
            aria-label="Next moment"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
