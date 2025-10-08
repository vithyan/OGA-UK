import React from 'react';
import HeroSection from '../components/HeroSection';
import QuickStatsSection from '../components/QuickStatsSection';
import GatewaySection from '../components/GatewaySection';
import CollaborativeSection from '../components/CollaborativeSection';
import MissionSection from '../components/MissionSection';

const Home = () => {
  return (
    <div className="page-content">
      {/* Hero Section - 40th Anniversary Valentine's Dinner & Dance */}
      <HeroSection />
      
      {/* Quick Stats - Our Impact by Numbers */}
      <QuickStatsSection />
      
      {/* Gateway Section - Original content */}
      <GatewaySection />
      
      {/* Collaborative Section - Original content */}
      <CollaborativeSection />
      
      {/* Mission Section - Original content */}
      <MissionSection />
    </div>
  );
};

export default Home;