import React, { useState } from 'react';
import BookNowButton from './bookNowButton';

function bookingForm() {
  const [destination, setDestination] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [guests, setGuests] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showAvailabilityMsg, setShowAvailabilityMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!destination || !fromDate || !toDate || !guests) {
      setErrorMsg(' Please fill in all the fields!');
      setFormValid(false);
      setShowAvailabilityMsg(false);
    } else {
      setErrorMsg('');
      setFormValid(true);
      setShowAvailabilityMsg(true);
    }
  };

  return (
    <section className="booking-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Destination</label>
          <input
            type="text"
            placeholder="e.g., Paris, Tokyo, Dubai"
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
              setFormValid(false);
              setShowAvailabilityMsg(false);
            }}
          />
        </div>

        <div className="row">
          <div>
            <label>From</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => {
                setFromDate(e.target.value);
                setFormValid(false);
                setShowAvailabilityMsg(false);
              }}
            />
          </div>
          <div>
            <label>To</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => {
                setToDate(e.target.value);
                setFormValid(false);
                setShowAvailabilityMsg(false);
              }}
            />
          </div>
        </div>

        <div>
          <label>Guests</label>
          <input
            type="number"
            min="1"
            placeholder="Number of guests"
            value={guests}
            onChange={(e) => {
              setGuests(e.target.value);
              setFormValid(false);
              setShowAvailabilityMsg(false);
            }}
          />
        </div>

        {errorMsg && <p className="error-message">{errorMsg}</p>}

        <button type="submit">Check Availability</button>
      </form>

     
      {showAvailabilityMsg && (
        <>
          <p className="success-message"> Availability confirmed! You can proceed to book.</p>
          <div className="book-now-container">
            <BookNowButton />
          </div>
        </>
      )}
    </section>
  );
}

export default bookingForm;
