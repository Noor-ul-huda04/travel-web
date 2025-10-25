import React from "react";
import HeroSection from "./heroSection";
import BookingForm from "./bookingForm";
import SuggestedPlaces from "./suggestedPlaces";
import BookNowButton from "./bookNowButton";

import "../App.css";

 function mainBooking() {
  return (
    <div className="booking-container">
      <HeroSection />
      <BookingForm />
      <SuggestedPlaces />
    </div>
  );
}
export default mainBooking;