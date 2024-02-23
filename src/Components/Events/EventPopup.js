import React from "react";
import "./EventPopup.css";

const EventPopup = ({ event, onClose }) => {
  const renderParagraphs = (text) => {
    return text
      .split("\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("fullscreen-popup-overlay")) {
      onClose();
    }
  };

  return (
    <div className="fullscreen-popup-overlay" onClick={handleOverlayClick}>
      <div className="fullscreen-popup">
        <span className="close-button" onClick={onClose}>
          CLOSE
        </span>
        <div className="popup-content">
          <h2>{event.title}</h2>
          <img src={event.image} alt="Event Image" />
          <h2>Description</h2>
          {renderParagraphs(event.description)}
          <h2>Details</h2>
          {renderParagraphs(event.details)}
        </div>
      </div>
    </div>
  );
};

export default EventPopup;