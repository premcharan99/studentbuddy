// RectangleBox.js
import React, { useState } from 'react';
import './RectangleBox.css';
import DetailedView from '../DetailedView/DetailedView';

const RectangleBox = ({ university }) => {
  const [showDetailedView, setShowDetailedView] = useState(false);

  const handleViewDetails = () => {
    setShowDetailedView(true);
  };

  const handleCloseDetails = () => {
    setShowDetailedView(false);
  };

  // Function to check if the event is completed based on the date
  const isEventCompleted = () => {
    const currentDate = new Date();
    const eventDate = new Date(university.date);
    return eventDate < currentDate; // Returns true if the event date is in the past
  };

  return (
    <>
      <div className="RectangleBox">
        <img src={university.imageUrl} alt="University" className="BoxImage" />
        <div className="BoxContent">
          <h3>{university.name}</h3>
          <p>Date: {university.date}</p>
          {isEventCompleted() && (
            <div className="EventCompleted">
              <p className="EventCompletedText">Event is completed</p>
            </div>
          )}
          <button className="ViewButton" onClick={handleViewDetails}>View Details</button>
        </div>
      </div>
      {showDetailedView && <DetailedView onClose={handleCloseDetails} university={university} />}
    </>
  );
};

export default RectangleBox;
