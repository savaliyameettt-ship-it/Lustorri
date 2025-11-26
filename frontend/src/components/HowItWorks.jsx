import React from 'react';
import { Heart, Gem, PenTool } from 'lucide-react';
import '../styles/HowItWorks.css';

const steps = [
  {
    id: 1,
    icon: Heart,
    title: "Choose your moment",
    description: "Select the story that defines your love."
  },
  {
    id: 2,
    icon: Gem,
    title: "Choose your ring",
    description: "Pick the design that speaks to you."
  },
  {
    id: 3,
    icon: PenTool,
    title: "Write your story line",
    description: "Add the words only you two understand."
  }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works__container">
        <h2 className="how-it-works__title">How Lustorri Works</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={step.id} className="step-card">
              <div className="step-card__number">{String(index + 1).padStart(2, '0')}</div>
              <div className="step-card__icon">
                <step.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="step-card__title">{step.title}</h3>
              <p className="step-card__description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
