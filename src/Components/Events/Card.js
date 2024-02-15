import React from "react";
import "./Card.css";

const Card = ({ id, title, date, location, city, image, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-content">
        <p className="card-title">{title}</p>
        <p className="card-date">{date}</p>
        <p className="card-location">{location}</p>
        <p className="card-city">{city}</p>
      </div>
      <img className="card-image" src={image} alt={title} />
    </div>
  );
};

export default Card;
