import React from 'react';
import '../styles/EngravedCard.css';

const EngravedCard = () => {
  return (
    <section className="engraved-card" id="cards">
      <div className="engraved-card__container">
        <div className="engraved-card__image">
          <img
            src="https://images.unsplash.com/photo-1606800052052-1e99b66e862a?w=800&q=80"
            alt="Engraved story card with ring"
          />
        </div>
        <div className="engraved-card__content">
          <h2 className="engraved-card__title">Your story, engraved.</h2>
          <p className="engraved-card__text">
            Every piece comes with a custom story card — the words only the two of you understand.
          </p>
          <p className="engraved-card__description">
            Whether it's the line from your first conversation, a promise whispered at midnight, 
            or the inside joke that makes you both smile — we'll etch it onto a metal card that 
            lives beside your ring forever.
          </p>
          <button className="btn btn--secondary">
            See engraving ideas
          </button>
        </div>
      </div>
    </section>
  );
};

export default EngravedCard;
