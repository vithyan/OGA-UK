import React from "react";
import "./GatewaySection.css";

const GatewaySection = () => {
  const testimonials = [
    {
      quote: "The sisterhood I found at OGA events opened doors across continents. We're truly a global family.",
      name: "Anushka Silva",
      title: "International Lawyer",
      class: "Class of 2001",
      icon: "⚖️"
    },
    {
      quote: "My career in medicine was shaped by the values and confidence I gained through our sisterhood.",
      name: "Dr. Kavitha Perera",
      title: "Pediatric Surgeon",
      class: "Class of 1998",
      icon: "🩺"
    },
    {
      quote: "From school friends to lifelong mentors, OGA connections have been invaluable in my entrepreneurial journey.",
      name: "Nisha Wickramasinghe",
      title: "Tech Entrepreneur",
      class: "Class of 2005",
      icon: "💼"
    }
  ];

  return (
    <section className="gateway">
      <div className="gateway-container">
        {/* Header Section */}
        <div className="gateway-header">
          <span className="section-label">
            <span className="label-icon">✨</span>
            Celebrating 40 Years of Excellence
          </span>
          <h2 className="gateway-title">Voices of Our Sisterhood</h2>
          <p className="gateway-subtitle">
            Hear from accomplished women who continue to embody our values in
            their professional and personal lives, inspiring generations to come.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card-modern">
              <div className="quote-icon">❝</div>
              <blockquote className="modern-quote">
                {testimonial.quote}
              </blockquote>
              <div className="author-section">
                <div className="author-avatar">
                  <span>{testimonial.icon}</span>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-title">{testimonial.title}</p>
                  <p className="author-class">{testimonial.class}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GatewaySection;
