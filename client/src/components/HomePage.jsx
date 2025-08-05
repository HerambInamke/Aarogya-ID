import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeatureCards from './FeatureCards';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeatureCards />
    </div>
  );
};

export default HomePage; 