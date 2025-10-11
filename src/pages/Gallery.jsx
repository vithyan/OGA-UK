import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    { id: 1, category: 'events', title: 'Annual Reunion 2024', year: '2024' },
    { id: 2, category: 'events', title: 'Networking Dinner', year: '2024' },
    { id: 3, category: 'heritage', title: 'Historic Campus', year: '1960s' },
    { id: 4, category: 'events', title: 'Sports Day', year: '2023' },
    { id: 5, category: 'heritage', title: 'Founding Members', year: '1950s' },
    { id: 6, category: 'events', title: 'Charity Gala', year: '2024' },
    { id: 7, category: 'heritage', title: 'Old School Building', year: '1970s' },
    { id: 8, category: 'events', title: 'Career Workshop', year: '2024' },
    { id: 9, category: 'community', title: 'Volunteer Day', year: '2023' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <h1 className="animate-fade-down">Photo Gallery</h1>
          <p className="lead animate-fade-up">
            Memories captured through the years
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="gallery-filters">
        <div className="container">
          <div className="filter-buttons">
            <button
              className={selectedCategory === 'all' ? 'active' : ''}
              onClick={() => setSelectedCategory('all')}
            >
              All Photos
            </button>
            <button
              className={selectedCategory === 'events' ? 'active' : ''}
              onClick={() => setSelectedCategory('events')}
            >
              Events
            </button>
            <button
              className={selectedCategory === 'heritage' ? 'active' : ''}
              onClick={() => setSelectedCategory('heritage')}
            >
              Heritage
            </button>
            <button
              className={selectedCategory === 'community' ? 'active' : ''}
              onClick={() => setSelectedCategory('community')}
            >
              Community
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid">
        <div className="container">
          <div className="row">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="gallery-item">
                  <div className="gallery-image-placeholder">
                    <span className="placeholder-icon">📸</span>
                  </div>
                  <div className="gallery-info">
                    <h4>{item.title}</h4>
                    <p className="gallery-year">{item.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="gallery-cta">
        <div className="container text-center">
          <h2>Share Your Photos</h2>
          <p>
            Have memorable photos from OGA events? We'd love to feature them in
            our gallery!
          </p>
          <button className="btn-share">Submit Your Photos</button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
