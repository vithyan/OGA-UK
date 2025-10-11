import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    { 
      id: 1, 
      category: 'events', 
      title: 'Annual Reunion 2024', 
      year: '2024',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
      description: 'A night of celebration and reconnection'
    },
    { 
      id: 2, 
      category: 'events', 
      title: 'Networking Dinner', 
      year: '2024',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      description: 'Building connections over fine dining'
    },
    { 
      id: 3, 
      category: 'heritage', 
      title: 'Historic Campus', 
      year: '1960s',
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80',
      description: 'Where our journey began'
    },
    { 
      id: 4, 
      category: 'events', 
      title: 'Sports Day', 
      year: '2023',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
      description: 'Competition and camaraderie'
    },
    { 
      id: 5, 
      category: 'heritage', 
      title: 'Founding Members', 
      year: '1950s',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80',
      description: 'The pioneers who started it all'
    },
    { 
      id: 6, 
      category: 'events', 
      title: 'Charity Gala', 
      year: '2024',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
      description: 'Giving back to the community'
    },
    { 
      id: 7, 
      category: 'heritage', 
      title: 'Old School Building', 
      year: '1970s',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
      description: 'Architectural memories'
    },
    { 
      id: 8, 
      category: 'events', 
      title: 'Career Workshop', 
      year: '2024',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      description: 'Empowering professional growth'
    },
    { 
      id: 9, 
      category: 'community', 
      title: 'Volunteer Day', 
      year: '2023',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
      description: 'Making a difference together'
    },
    { 
      id: 10, 
      category: 'events', 
      title: 'Cultural Festival', 
      year: '2024',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
      description: 'Celebrating our rich heritage'
    },
    { 
      id: 11, 
      category: 'community', 
      title: 'Mentorship Program', 
      year: '2024',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      description: 'Guiding the next generation'
    },
    { 
      id: 12, 
      category: 'heritage', 
      title: 'Alumni Awards 1980', 
      year: '1980s',
      image: 'https://images.unsplash.com/photo-1579869847557-1f67382cc158?w=800&q=80',
      description: 'Recognizing excellence'
    },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-container">
          <div className="section-label">
            <span className="label-icon">📸</span>
            OUR MEMORIES
          </div>
          <h1 className="gallery-title">Photo Gallery</h1>
          <p className="gallery-subtitle">
            Capturing moments, preserving memories, celebrating our shared journey through the years
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="gallery-filters-section">
        <div className="gallery-container">
          <div className="filter-buttons">
            <button
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              <span className="filter-icon">🖼️</span>
              All Photos
              <span className="filter-count">{galleryItems.length}</span>
            </button>
            <button
              className={`filter-btn ${selectedCategory === 'events' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('events')}
            >
              <span className="filter-icon">🎉</span>
              Events
              <span className="filter-count">{galleryItems.filter(i => i.category === 'events').length}</span>
            </button>
            <button
              className={`filter-btn ${selectedCategory === 'heritage' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('heritage')}
            >
              <span className="filter-icon">🏛️</span>
              Heritage
              <span className="filter-count">{galleryItems.filter(i => i.category === 'heritage').length}</span>
            </button>
            <button
              className={`filter-btn ${selectedCategory === 'community' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('community')}
            >
              <span className="filter-icon">🤝</span>
              Community
              <span className="filter-count">{galleryItems.filter(i => i.category === 'community').length}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="gallery-container">
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="gallery-image"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-overlay-content">
                      <span className="gallery-year-badge">{item.year}</span>
                      <h3 className="gallery-item-title">{item.title}</h3>
                      <p className="gallery-item-description">{item.description}</p>
                      <button className="gallery-view-btn">
                        <span>View Full Size</span>
                        <span className="view-icon">🔍</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="gallery-cta-section">
        <div className="gallery-container">
          <div className="cta-content">
            <div className="cta-icon">📤</div>
            <h2 className="cta-title">Share Your Memories</h2>
            <p className="cta-description">
              Have memorable photos from OGA-UK events? We'd love to feature them in our gallery and preserve our collective history!
            </p>
            <button className="cta-btn">
              Submit Your Photos
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
