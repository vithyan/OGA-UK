import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="animate-fade-down">About OGA-UK</h1>
          <p className="lead animate-fade-up">
            Connecting generations of women who walked these halls
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Our Story</h2>
              <p>
                The Old Girls' Association UK was founded to maintain and strengthen 
                the bonds formed during our school years. We are a vibrant community 
                of alumni who share a common heritage and commitment to excellence.
              </p>
              <p>
                Through decades of growth and evolution, we've built a network that 
                spans continents, connecting old girls across the United Kingdom and 
                beyond, fostering lifelong friendships and professional relationships.
              </p>
            </div>
            <div className="col-md-6">
              <div className="about-image-placeholder">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop" 
                  alt="Heritage & Legacy"
                  className="about-image"
                />
                <div className="image-overlay">
                  <span>📚</span>
                  <p>Heritage & Legacy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mission-card">
                <h3>🎯 Our Mission</h3>
                <p>
                  To foster a strong, supportive community of alumni that promotes 
                  lifelong connections, professional development, and gives back to 
                  our alma mater and society.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="vision-card">
                <h3>👁️ Our Vision</h3>
                <p>
                  To be the leading alumni network that empowers women through 
                  mentorship, networking, and collaborative opportunities while 
                  preserving our rich heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="text-center mb-5">Our Core Values</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h4>Community</h4>
                <p>Building lasting connections</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="value-card">
                <div className="value-icon">💪</div>
                <h4>Empowerment</h4>
                <p>Supporting each other's growth</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="value-card">
                <div className="value-icon">🌟</div>
                <h4>Excellence</h4>
                <p>Maintaining high standards</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="value-card">
                <div className="value-icon">❤️</div>
                <h4>Service</h4>
                <p>Giving back to community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <div className="container">
          <h2 className="text-center mb-5">Our Leadership Team</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="leader-card">
                <div className="leader-avatar">👩‍💼</div>
                <h4>President</h4>
                <p className="leader-name">To be announced</p>
                <p className="leader-bio">Leading our community forward</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="leader-card">
                <div className="leader-avatar">👩‍💻</div>
                <h4>Vice President</h4>
                <p className="leader-name">To be announced</p>
                <p className="leader-bio">Supporting our initiatives</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="leader-card">
                <div className="leader-avatar">👩‍🏫</div>
                <h4>Secretary</h4>
                <p className="leader-name">To be announced</p>
                <p className="leader-bio">Keeping us organized</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
