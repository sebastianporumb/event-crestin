import React, { useState } from "react";
import { EventsListData } from "./EventsList";
import "./NewEvents.css"; // You can create this CSS file for styling if needed

const NewEvents = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    city: "",
    location: "",
    image: "",
    type: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      ...formData,
      id: `e${EventsListData.length + 1}`,
      date: new Date(formData.date),
    };
    EventsListData.push(newEvent); // Add the new event to the existing events array
    setFormData({
      title: "",
      date: "",
      city: "",
      location: "",
      image: "",
      type: "",
    });
  };

  return (
    <div className="new-event-form">
      <h2>Add New Event</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default NewEvents;
