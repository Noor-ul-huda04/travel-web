import React from "react";
import { Link } from "react-router-dom";
import "./aboutUs.css";
import forest from '../assets/forest.jpg';
import becca from '../assets/becca.jpg';
import bella from '../assets/bella.jpg';
import laura from '../assets/laura.jpg';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Rebacca William",
      role: "Lead Guide",
      image: becca,
    },
    {
      name: "Isabella Smith",
      role: "Travel Planner",
      image: bella,
    },
    {
      name: "Laura Johnson",
      role: "Customer Experience Manager",
      image: laura,
    },
  ];

  return (
    <div className="about-us">
      <section className="hero-section">
        <img src={forest} alt="Forest landscape" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About PlanitEarth</h1>
          <p>Your gateway to unforgettable adventures</p>
        </div>
      </section>

      <section className="story-section">
        <div className="container">
          <div className="story-intro">
            <h2>Our Story</h2>
            <p>
              Planit Earth was founded with a single belief: that the world is meant to be explored — not just seen.
              Since 2010, we’ve been curating immersive travel experiences that go beyond the typical tourist trail.
              From historic landmarks and ancient cities to natural wonders and vibrant cultural fun.
            </p>
          </div>

          <div className="story-content">
            <div className="story-image">
              <img src={forest} alt="Forest hiking group" />
            </div>
            <div className="story-text">
              <p>
                What began as a passion project among a few travel enthusiasts has grown into a 
                trusted name in guided adventures. Whether it's hiking through scenic trails, 
                exploring heritage sites, or learning traditional crafts from local communities, 
                Planit Earth brings together history, nature, and fun in every journey.
              </p>
              <p>
                Our team is made up of storytellers, explorers, and cultural ambassadors who ensure
                every trip is as meaningful as it is memorable. We’re committed to responsible tourism,
                supporting local economies, and making travel accessible, educational, and unforgettable.
                At Planit Earth, every trip is more than just a vacation — it’s a chance to discover, 
                connect, and grow.
              </p>
              <p>
                Travel is more than crossing destinations off a list — it’s about the stories you collect,
                the people you meet, and the perspectives you gain. At Planit Earth, we design journeys 
                that spark curiosity and build meaningful connections with the world. Our tours are built to inspire wonder and leave lasting impressions.
              </p>
              <p>
                At Planit Earth, we don’t just book trips — we craft memories. One day you might be sipping 
                tea under Himalayan skies, the next, tracing footsteps through sun-warmed ruins or laughing 
                around a bonfire with strangers who feel like old friends. We believe in travel that dances 
                between discovery and delight. So pack your curiosity, and let’s wander wisely.
              </p>
              <Link to="/packages" className="cta-button">Explore Our Tours</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Mission & Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Our Mission</h3>
              <p>
                To create meaningful, immersive travel experiences that connect people to culture, 
                nature, and community — leaving a positive impact on both travelers and the places 
                they visit.
              </p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>
                We promote responsible tourism by minimizing environmental impact, supporting 
                local communities, and protecting the planet through every journey we offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Meet Our Guides</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Explore?</h2>
          <p>Join us for an unforgettable forest adventure</p>
          <div className="cta-buttons">
            <Link to="/packages" className="cta-button primary">View Tours</Link>
            <Link to="/contact" className="cta-button secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
