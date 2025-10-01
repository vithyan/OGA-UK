import React from 'react';
import HeroSection from '../components/HeroSection';
import GatewaySection from '../components/GatewaySection';
import CollaborativeSection from '../components/CollaborativeSection';
import MissionSection from '../components/MissionSection';

const Home = () => {
  return (
    <div className="page-content">
      <HeroSection />
      <GatewaySection />
      <CollaborativeSection />
      <MissionSection />
    </div>
  );
};

export default Home;