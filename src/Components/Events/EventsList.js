import React, { useState } from "react";
import Card from "./Card";
import elBetel from "../Images/el-betel.jpg";
import worship_night from "../Images/worship_night.jpg";

const EventsList = () => {
  const EventsListData = [
    {
      id: "e1",
      title: "Concert Betel orchestra",
      date: "16 Martie 2024, ora 10",
      city: "Cluj",
      location: "Casa de cultura",
      image: elBetel,
      type: "Concert",
    },
    {
      id: "e1",
      title: "Concert Betel orchestra",
      date: "16 Martie 2024, ora 10",
      city: "Cluj",
      location: "Casa de cultura",
      image: elBetel,
      type: "Concert",
    },
    {
      id: "e1",
      title: "Concert Betel orchestra",
      date: "16 Martie 2024, ora 10",
      city: "Cluj",
      location: "Casa de cultura",
      image: elBetel,
      type: "Concert",
    },
    {
      id: "e1",
      title: "Concert Betel orchestra",
      date: "16 Martie 2024, ora 10",
      city: "Cluj",
      location: "Casa de cultura",
      image: elBetel,
      type: "Concert",
    },
    {
      id: "e1",
      title: "Concert Betel orchestra",
      date: "16 Martie 2024, ora 10",
      city: "Cluj",
      location: "Casa de cultura",
      image: elBetel,
      type: "Concert",
    },
    {
      id: "e1",
      title: "Concert Betel orchestra",
      date: "16 Martie 2024, ora 10",
      city: "Cluj",
      location: "Casa de cultura",
      image: elBetel,
      type: "Concert",
    },
    {
      id: "e2",
      title: "Concert Betel worship",
      date: "19 Feb 2024, ora 18:00",
      city: "Cluj",
      location: "Biserica baptista Betel",
      image: worship_night,
      type: "Altele",
    },
  ];

  return (
    <div>
      {EventsListData.map((event) => (
        <Card
          key={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
          city={event.city}
          image={event.image}
        />
      ))}
    </div>
  );
};

export default EventsList;
