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

const Home = () => {
  return (
    <div>
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
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bite-band" element={<BiteBand />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
