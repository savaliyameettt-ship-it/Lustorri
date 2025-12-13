import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { polaroidMoments } from '../mock';
import PixelHeart from './PixelHeart';
import '../styles/HeroCarousel.css';

const HeroCarousel = () => {
  const [moments, setMoments] = useState(polaroidMoments);
  const [hoveredId, setHoveredId] = useState(null);
  const [likes, setLikes] = useState(
    polaroidMoments.reduce((acc, moment) => {
      acc[moment.id] = { count: moment.likes, userLiked: false };
      return acc;
    }, {})
  );
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [autoPlayGif, setAutoPlayGif] = useState(null);
  const [isUserActive, setIsUserActive] = useState(false);
  const autoPlayTimerRef = React.useRef(null);
  const rotateTimerRef = React.useRef(null);

  const resetAutoPlay = () => {
    setIsUserActive(true);
    setAutoPlayGif(null);
    
    // Clear existing timers
    if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    if (rotateTimerRef.current) clearTimeout(rotateTimerRef.current);
    
    // Resume auto-play after 8 seconds of inactivity
    autoPlayTimerRef.current = setTimeout(() => {
      setIsUserActive(false);
    }, 8000);
  };

  const rotateLeft = () => {
    resetAutoPlay();
    setMoments(prev => {
      const newMoments = [...prev];
      const first = newMoments.shift();
      newMoments.push(first);
      return newMoments;
    });
  };

  const rotateRight = () => {
    resetAutoPlay();
    setMoments(prev => {
      const newMoments = [...prev];
      const last = newMoments.pop();
      newMoments.unshift(last);
      return newMoments;
    });
  };

  const bringToFront = (clickedId) => {
    resetAutoPlay();
    setMoments(prev => {
      const clickedIndex = prev.findIndex(m => m.id === clickedId);
      if (clickedIndex === 0) return prev; // Already in front
      
      const newMoments = [...prev];
      const [clickedMoment] = newMoments.splice(clickedIndex, 1);
      newMoments.unshift(clickedMoment);
      return newMoments;
    });
  };

  const handleLike = (momentId, event) => {
    event.stopPropagation(); // Prevent bringing polaroid to front
    resetAutoPlay();
    
    // Always increment instantly - no cooldown, no waiting
    setLikes(prev => ({
      ...prev,
      [momentId]: {
        count: prev[momentId].count + 1,
        userLiked: true
      }
    }));

    // Create floating hearts animation
    const heartCount = 8;
    const newHearts = [];
    const timestamp = Date.now();
    for (let i = 0; i < heartCount; i++) {
      const heartId = `${momentId}-${timestamp}-${Math.random()}-${i}`;
      newHearts.push({
        id: heartId,
        momentId: momentId,
        delay: i * 100
      });
    }
    
    setFloatingHearts(prev => [...prev, ...newHearts]);

    // Remove hearts after animation completes
    setTimeout(() => {
      setFloatingHearts(prev => 
        prev.filter(heart => !newHearts.find(h => h.id === heart.id))
      );
    }, 2000);
  };

  // Auto-play functionality
  React.useEffect(() => {
    if (!isUserActive && moments.length > 0) {
      // Start showing GIF of front polaroid
      setAutoPlayGif(moments[0].id);
      
      // After 4.5 seconds, rotate to next
      rotateTimerRef.current = setTimeout(() => {
        setMoments(prev => {
          const newMoments = [...prev];
          const first = newMoments.shift();
          newMoments.push(first);
          return newMoments;
        });
      }, 4500);
    }
    
    return () => {
      if (rotateTimerRef.current) clearTimeout(rotateTimerRef.current);
    };
  }, [isUserActive, moments]);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
      if (rotateTimerRef.current) clearTimeout(rotateTimerRef.current);
    };
  }, []);

  const getZIndex = (index) => {
    return 40 - index;
  };

  const getTransform = (index) => {
    const transforms = [
      'translate(-50%, -50%) rotate(-4deg) scale(1)',
      'translate(-50%, -50%) rotate(6deg) scale(0.98) translateX(220px) translateY(-35px)',
      'translate(-50%, -50%) rotate(-8deg) scale(0.97) translateX(-240px) translateY(45px)',
      'translate(-50%, -50%) rotate(3deg) scale(0.96) translateX(140px) translateY(90px)',
      'translate(-50%, -50%) rotate(-6deg) scale(0.95) translateX(-140px) translateY(-55px)',
      'translate(-50%, -50%) rotate(7deg) scale(0.94) translateX(350px) translateY(30px)',
      'translate(-50%, -50%) rotate(-5deg) scale(0.93) translateX(-360px) translateY(-20px)'
    ];
    return transforms[index] || 'translate(-50%, -50%) rotate(2deg) scale(0.92)';
  };

  return (
    <section className="hero-carousel">
      <div className="hero-carousel__container">
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
                opacity: index === 0 ? 1 : index <= 2 ? 0.95 : 0.88
              }}
              onMouseEnter={() => {
                setHoveredId(moment.id);
                resetAutoPlay();
              }}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => bringToFront(moment.id)}
            >
              <div className="polaroid__frame">
                <div className="polaroid__image-container">
                  <img
                    src={
                      hoveredId === moment.id 
                        ? moment.gifImage 
                        : autoPlayGif === moment.id 
                        ? moment.gifImage 
                        : moment.staticImage
                    }
                    alt={moment.title}
                    className="polaroid__image"
                  />
                </div>
                <div className="polaroid__footer">
                  <p className="polaroid__caption">{moment.caption}</p>
                  <div className="polaroid__likes">
                    <PixelHeart size={12} />
                    <span className="polaroid__likes-count">
                      {likes[moment.id]?.count.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                {/* Like button - in white area */}
                <button 
                  className={`polaroid__like-btn ${likes[moment.id]?.userLiked ? 'liked' : ''}`}
                  onClick={(e) => handleLike(moment.id, e)}
                  aria-label="Like this moment"
                  disabled={!likes[moment.id]?.canLikeAgain}
                >
                  <PixelHeart size={24} />
                </button>
                
                {/* Floating hearts */}
                {floatingHearts
                  .filter(heart => heart.momentId === moment.id)
                  .map(heart => (
                    <div
                      key={heart.id}
                      className="floating-heart"
                      style={{ animationDelay: `${heart.delay}ms` }}
                    >
                      <PixelHeart size={16} />
                    </div>
                  ))}
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
      </div>
    </section>
  );
};

export default HeroCarousel;
