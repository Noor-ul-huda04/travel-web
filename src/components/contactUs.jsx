import React from "react";
import "./contactUs.css";
import map from '../assets/map.jpg';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
  };

  return (
    <div className="contact-us">
      <section className="hero-section">
        <img src="/placeholder.svg?height=600&width=1600" alt="Forest path" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch to plan your adventure</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p className="contact-intro">
                Have questions about our tours or want to plan a custom experience? We'd love to hear from you!
              </p>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h3>Address</h3>
                    <p>123 Forest Avenue<br />Green Valley, CA 95014</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>info@PlanitEarth.com</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">🕒</div>
                  <div className="info-content">
                    <h3>Office Hours</h3>
                    <p>
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="social-media">
                <h3>Follow Us</h3>
                <div className="social-buttons">
                  <button className="social-btn">📘</button>
                  <button className="social-btn">📷</button>
                  <button className="social-btn">🐦</button>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="form-card">
                <h2>Send us a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" placeholder="Your first name" required />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" placeholder="Your last name" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone (Optional)</label>
                    <input type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input type="text" placeholder="What can we help you with?" required />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="5" placeholder="Tell us about your adventure plans..." required></textarea>
                  </div>
                  <button type="submit" className="submit-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            <img src={map} alt="Map location" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
