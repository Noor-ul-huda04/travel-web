import React, { useState } from 'react';

function bookNowButton() {
  const [booked, setBooked] = useState(false);

  const handleBookNow = () => {
    setBooked(true);
    alert('Booking Confirmed!');
  };

  return (
    <button onClick={handleBookNow} disabled={booked}>
      {booked ? 'Booked' : 'Book Now'}
    </button>
  );
}

export default bookNowButton;
