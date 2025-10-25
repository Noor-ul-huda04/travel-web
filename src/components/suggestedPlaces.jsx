import React from "react";
import "./Booking.css";

const places = ["Bali", "Paris", "Cappadocia", "Santorini", "Maldives"];

function SuggestedPlaces() {
  return (
    <section className="suggested-places">
      <h3>Popular Destinations</h3>
      <ul>
        {places.map((place, index) => (
          <li key={index}>
            <a
              href={`https://www.google.com/search?q=${place}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {place}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SuggestedPlaces;
