import React from 'react';
import '../styles/PixelHeart.css';

const PixelHeart = ({ size = 24 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      className="pixel-heart"
      style={{ imageRendering: 'pixelated' }}
    >
      <rect x="4" y="3" width="2" height="2" fill="currentColor"/>
      <rect x="10" y="3" width="2" height="2" fill="currentColor"/>
      <rect x="2" y="5" width="2" height="2" fill="currentColor"/>
      <rect x="4" y="5" width="2" height="2" fill="currentColor"/>
      <rect x="6" y="5" width="2" height="2" fill="currentColor"/>
      <rect x="8" y="5" width="2" height="2" fill="currentColor"/>
      <rect x="10" y="5" width="2" height="2" fill="currentColor"/>
      <rect x="12" y="5" width="2" height="2" fill="currentColor"/>
      <rect x="2" y="7" width="2" height="2" fill="currentColor"/>
      <rect x="4" y="7" width="2" height="2" fill="currentColor"/>
      <rect x="6" y="7" width="2" height="2" fill="currentColor"/>
      <rect x="8" y="7" width="2" height="2" fill="currentColor"/>
      <rect x="10" y="7" width="2" height="2" fill="currentColor"/>
      <rect x="12" y="7" width="2" height="2" fill="currentColor"/>
      <rect x="4" y="9" width="2" height="2" fill="currentColor"/>
      <rect x="6" y="9" width="2" height="2" fill="currentColor"/>
      <rect x="8" y="9" width="2" height="2" fill="currentColor"/>
      <rect x="10" y="9" width="2" height="2" fill="currentColor"/>
      <rect x="6" y="11" width="2" height="2" fill="currentColor"/>
      <rect x="8" y="11" width="2" height="2" fill="currentColor"/>
      <rect x="7" y="13" width="2" height="2" fill="currentColor"/>
    </svg>
  );
};

export default PixelHeart;
