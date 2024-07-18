// DetailedView.js
import React from 'react';
import './DetailedView.css';

const DetailedView = ({ onClose, university }) => {
  return (
    <>
      <div className="Overlay" onClick={onClose}></div>
      <div className={`DetailedViewContainer ${university ? 'visible' : ''}`}>
        <div className="DetailedViewContent">
          <h2>Detailed Information</h2>
          <p>University: {university.name}</p>
          <p>Address: {university.address}</p>
          <p>Contact: {university.contact}</p>
          <p>Email: {university.email}</p>
          <p>Website: <a href={university.website} target="_blank" rel="noopener noreferrer">{university.website}</a></p>
          <p>Description: {university.description}</p>
          <button className="CloseButton" onClick={onClose}>Close</button>
          
        </div>
      </div>
    </>
  );
};

export default DetailedView;
