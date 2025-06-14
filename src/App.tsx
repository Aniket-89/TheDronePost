import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhoWeAre from './components/WhoWeAre';
import ToolsSolutions from './components/ToolsSolutions';
import FeaturedContent from './components/FeaturedContent';
import WorkWithUs from './components/WorkWithUs';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Header />
      <HeroSection />
      <WhoWeAre />
      <ToolsSolutions />
      <FeaturedContent />
      <WorkWithUs />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;