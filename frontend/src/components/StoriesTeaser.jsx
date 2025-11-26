import React from 'react';
import { ArrowRight } from 'lucide-react';
import { stories } from '../mock';
import '../styles/StoriesTeaser.css';

const StoriesTeaser = () => {
  return (
    <section className="stories-teaser" id="stories">
      <div className="stories-teaser__container">
        <div className="stories-teaser__header">
          <h2 className="stories-teaser__title">Read the love stories</h2>
          <p className="stories-teaser__subtitle">
            Real couples. Real moments. Real forever.
          </p>
        </div>

        <div className="stories-grid">
          {stories.map((story) => (
            <div key={story.id} className="story-card">
              <div className="story-card__image-wrapper">
                <img
                  src={story.image}
                  alt={story.title}
                  className="story-card__image"
                />
                <span className="story-card__tag">{story.tag}</span>
              </div>
              <div className="story-card__content">
                <h3 className="story-card__title">{story.title}</h3>
                <a href="#" className="story-card__link">
                  Read story
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesTeaser;
