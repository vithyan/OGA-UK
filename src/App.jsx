import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import GatewaySection from './components/GatewaySection';
import CollaborativeSection from './components/CollaborativeSection';
import MissionSection from './components/MissionSection';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <GatewaySection />
      <CollaborativeSection />
      <MissionSection />
      <Footer />
    </div>
  )
}

export default App
