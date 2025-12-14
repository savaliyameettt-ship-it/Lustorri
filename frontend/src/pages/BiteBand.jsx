import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import '../styles/BiteBand.css';

const BiteBand = () => {
  const navigate = useNavigate();
  const [selectedMetal, setSelectedMetal] = useState('14k-yellow-gold');
  const [selectedSize, setSelectedSize] = useState('7');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showHero, setShowHero] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  
  // Card rotation state
  const [cardRotation, setCardRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartRotation, setDragStartRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(currentScroll / totalScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Pure black for 0.5s
    const heroTimer = setTimeout(() => {
      setShowHero(true);
    }, 500);

    // Subtext after hero settles (0.5s after hero starts = 2s total)
    const subtextTimer = setTimeout(() => {
      setShowSubtext(true);
    }, 2000);

    // Scroll indicator after subtext (1s after subtext = 3s total)
    const scrollTimer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 3000);

    return () => {
      clearTimeout(heroTimer);
      clearTimeout(subtextTimer);
      clearTimeout(scrollTimer);
    };
  }, []);

  const metalOptions = [
    { value: '14k-yellow-gold', label: '14K Yellow Gold', price: 1899 },
    { value: '14k-rose-gold', label: '14K Rose Gold', price: 1899 },
    { value: '14k-white-gold', label: '14K White Gold', price: 1899 },
    { value: '18k-yellow-gold', label: '18K Yellow Gold', price: 2499 },
    { value: '18k-rose-gold', label: '18K Rose Gold', price: 2499 },
    { value: '18k-white-gold', label: '18K White Gold', price: 2499 },
    { value: 'platinum', label: 'Platinum', price: 3299 },
    { value: 'silver', label: 'Sterling Silver', price: 799 }
  ];

  const ringSizes = [];
  for (let i = 3; i <= 13; i += 0.5) {
    ringSizes.push(i.toString());
  }

  const selectedMetalData = metalOptions.find(m => m.value === selectedMetal);

  return (
    <div className="bite-band">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/')}>
        <ArrowLeft size={20} />
        <span>Back to Stories</span>
      </button>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-vignette"></div>
        <div className="hero-content">
          <h1 className={`hero-title ${showHero ? 'hero-title--visible' : ''}`}>
            I tasted forever.
          </h1>
          <p className={`hero-subtitle ${showSubtext ? 'hero-subtitle--visible' : ''}`}>
            Some marks were meant to stay.
          </p>
        </div>
        {showScrollIndicator && (
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
          </div>
        )}
      </section>

      {/* Story + Craft Section */}
      <section className="story-craft-section">
        <div className="story-craft-container">
          {/* Left: Rotating Ring */}
          <div className="ring-column">
            <div className="rotating-ring">
              <img 
                src="https://pub-30aaef0fec5e44b39ba9d9bd850cc6dd.r2.dev/BITE%20RING.jpg" 
                alt="The Bite Band - Rotating View"
                className="ring-rotate-image"
              />
            </div>
          </div>

          {/* Right: Interwoven Story & Craft Text */}
          <div className="text-column">
            <div 
              className="interwoven-text"
              style={{ 
                opacity: Math.min(1, Math.max(0, (scrollProgress - 0.08) * 10))
              }}
            >
              <p className="text-line text-line--emotional">
                Love isn't always gentle—
              </p>
              <p className="text-line text-line--craft">
                so we didn't make a gentle ring.
              </p>

              <p className="text-line text-line--emotional stanza-break">
                The bite indents along the edge?
              </p>
              <p className="text-line text-line--craft">
                Passion doesn't leave symmetrical marks.
              </p>

              <p className="text-line text-line--emotional stanza-break">
                The diamond rests where the mark ends—
              </p>
              <p className="text-line text-line--craft text-line--gold">
                light caught in the wound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ring Showcase */}
      <section className="ring-showcase">
        <div className="showcase-container">
          <div className="ring-images">
            <img 
              src="https://pub-30aaef0fec5e44b39ba9d9bd850cc6dd.r2.dev/BITE%20RING.jpg" 
              alt="The Bite Band - Main View"
              className="ring-image main-image"
            />
            <div className="detail-images">
              <img 
                src="https://pub-30aaef0fec5e44b39ba9d9bd850cc6dd.r2.dev/Bite%20Ring%20-%20front%20O%20shape.png" 
                alt="Bite Indents Detail"
                className="ring-image detail-image"
              />
              <img 
                src="https://pub-30aaef0fec5e44b39ba9d9bd850cc6dd.r2.dev/Bite%20ring%20-%2090%20side%20profile%20close-up.png" 
                alt="Diamond Detail"
                className="ring-image detail-image"
              />
            </div>
          </div>
          {/* Purchase Section */}
      <section className="purchase-section">
        <div className="purchase-container">
          <h2 className="purchase-title">Make It Yours</h2>
          
          <div className="purchase-form">
            {/* Metal Selection */}
            <div className="form-group">
              <label className="form-label">Metal</label>
              <select 
                className="form-select"
                value={selectedMetal}
                onChange={(e) => setSelectedMetal(e.target.value)}
              >
                {metalOptions.map(metal => (
                  <option key={metal.value} value={metal.value}>
                    {metal.label} - ${metal.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            {/* Ring Size Selection */}
            <div className="form-group">
              <label className="form-label">Ring Size (US)</label>
              <select 
                className="form-select"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {ringSizes.map(size => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Display */}
            <div className="price-display">
              <span className="price-label">Total</span>
              <span className="price-amount">${selectedMetalData?.price.toLocaleString()}</span>
            </div>

            {/* Add to Cart Button */}
            <button className="add-to-cart-btn">
              <ShoppingCart size={20} />
              <span>Claim This Story</span>
            </button>

            {/* Trust Elements */}
            <div className="trust-elements">
              <p className="trust-item">Ships with engraved metal story card</p>
              <p className="trust-item">Lab-grown diamond · Ethically crafted</p>
              <p className="trust-item">30-day returns · Lifetime warranty</p>
            </div>
          </div>
        </div>
      </section>
          {/* <div className="ring-specs">
            <h2 className="section-title">The Bite Band</h2>
            <div className="specs-list">
              <div className="spec-item">
                <span className="spec-label">Metal</span>
                <span className="spec-value">Black Rhodium</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Stone</span>
                <span className="spec-value">Lab-grown Pear-cut Diamond</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Engraving</span>
                <span className="spec-value">"I tasted forever."</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Includes</span>
                <span className="spec-value">Metal Story Card</span>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Meaning Section */}
      <section className="meaning-section">
        <div className="meaning-grid">
          <div className="meaning-card">
            <h3 className="meaning-title">For those who crave fiercely</h3>
            <p className="meaning-text">
              This ring is for couples who don't love quietly.
            </p>
          </div>
          <div className="meaning-card">
            <h3 className="meaning-title">Passion left its mark</h3>
            <p className="meaning-text">
              The bite indents are intentional imperfection. Real love isn't smooth.
            </p>
          </div>
          <div className="meaning-card">
            <h3 className="meaning-title">A secret only you share</h3>
            <p className="meaning-text">
              The inside engraving is invisible to the world. Just like your best moments.
            </p>
          </div>
        </div>
      </section>

      {/* Engraved Card Preview */}
      <section className="card-preview-section">
        <div className="card-preview-content">
          <div className="card-image">
            <div className="metal-card">
              <p className="card-text">
                Love isn't always gentle.<br/>
                Sometimes it leaves traces—<br/>
                teeth against skin,<br/>
                memory against time.
              </p>
            </div>
          </div>
          <div className="card-info">
            <h2 className="section-title">Every ring tells a story.</h2>
            <p className="card-description">
              This one comes with yours.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bite-footer">
        <div className="footer-content">
          <div className="footer-logo">Lustorri</div>
          <p className="footer-tagline">Where lust meets love.</p>
          <div className="footer-links">
            <a href="#">Shop All</a>
            <a href="#">Our Story</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-social">
            <p>Instagram @lustorri</p>
            <p>info@lustorri.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BiteBand;