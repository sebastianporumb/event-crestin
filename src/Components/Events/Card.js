import React from "react";
import "./Card.css";

const Card = ({ title, date, location, city, image }) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="card-title">{title}</p>
        <p className="card-location">{location}</p>
        <p className="card-city">{city}</p>
        <p className="card-date">Date: {date}</p>
      </div>
      <img className="card-image" src={image} alt={title} />
    </div>
  );
};

export default Card;
