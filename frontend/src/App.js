import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import FeaturedRings from './components/FeaturedRings';
import EngravedCard from './components/EngravedCard';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import StoriesTeaser from './components/StoriesTeaser';
import Footer from './components/Footer';
import BiteBand from './pages/BiteBand';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroCarousel />
        <FeaturedRings />
        <EngravedCard />
        <HowItWorks />
        <Testimonials />
        <StoriesTeaser />
      </main>
      <Footer />
    </div>
  );
}

export default App;
