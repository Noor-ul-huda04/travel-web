import React from 'react';
import './destination.css';
import TopSection from "./topSection";
import BottomSection from "./BottomSection";
import UK from '../assets/uk3.jpg';
import Spain from '../assets/spain.jpg';
import Turkey from '../assets/turkey1.jpg';
import Italy from '../assets/itlay.jpg';
import Japan from '../assets/japan.jpg';
import India from '../assets/india2.jpg';
import Dubai from '../assets/dubai.jpg';
import Pakistan from '../assets/Pakistan.jpg';
import Hungary from '../assets/hungary1.jpg';

const offers = [
  { image: Pakistan, name:"Wonders of Pakistan", price:"$950 (2 People)", highlights:"Mountains, Culture, Unforgettable" },
  { image: Turkey, name: "Turkey Delight", price: "$1000 (3 People)", highlights:"Istanbul, Ruins, Cuisine" },
  { image: Spain, name: "Sunny Spain", price: "$900 (2 People)", highlights:"Beaches, Flamenco, Culture" },
  { image: Italy, name: "Italy Classics", price: "$1100 (2 People)", highlights:"Rome, Venice, Food" },
  { image: Japan, name: "Explore Japan", price: "$1050 (2 People)", highlights:"Tokyo, Cherry Blossoms, Temples" },
  { image: India, name: "Incredible India", price: "$900 (2 People)", highlights:"Taj Mahal, Festivals, Diversity" },
  { image: UK, name: "UK Escape", price: "$1000 (2 People)", highlights:"London, Castles, Countryside" },
  { image: Hungary, name: "Historic Hungary", price: "$1200 (3 People)", highlights:"Budapest, Thermal Baths, Danube" },
  { image: Dubai, name: "Vibes of Dubai", price: "$1100 (4 People)", highlights:"Skyscrapers, Desert Safari, Shopping" }
];

function Offers() {
  return (
    <>
      <TopSection />

      <section className="offers-section">
        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div className="tour-card" key={index}>
              <img src={offer.image} alt={offer.name} className="tour-image" />
              <div className="tour-info">
                <span className="tour-name">{offer.name}</span>
                <span className="tour-price">{offer.price}</span>
              </div>
              <p className="tour-highlights">
                <strong>Why:</strong> {offer.highlights}
              </p>
              <button
                className="book-btn"
                onClick={() =>
                  alert(`🎉 Congrats! Your "${offer.name}" tour package is confirmed!`)
                }
              >
                Avail Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <BottomSection />
    </>
  );
}

export default Offers;
