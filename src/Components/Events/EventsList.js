import React, { useState } from "react";
import Card from "./Card";
import elBetel from "../Images/el-betel.jpg";
import worship_night from "../Images/worship_night.jpg";
import betania_dublin from "../Images/Betania Dublin.jpg";
import Betel_timisoara from "../Images/Betel_timisoara.jpg";

export const EventsListData = [
  {
    id: "e1",
    title: "Concert Betel orchestra",
    date: "16 Martie 2024, ora 10",
    city: "Cluj",
    location: "Casa de cultura",
    image: elBetel,
    type: "concert",
  },
  {
    id: "e2",
    title: "Concert Betel Timisoara",
    date: "16 Martie 2024, ora 10",
    city: "Timisoara",
    location: "Casa de cultura",
    image: Betel_timisoara,
    type: "concert",
  },
  {
    id: "e3",
    title: "Betania Dublin ",
    date: "16 Martie 2024, ora 10",
    city: "Arad",
    location: "Casa de cultura",
    image: betania_dublin,
    type: "conferinta",
  },
  {
    id: "e4",
    title: "Concert Betel worship",
    date: "19 Feb 2024, ora 18:00",
    city: "Cluj",
    location: "Biserica baptista Betel",
    image: worship_night,
    type: "conferinta",
  },
];

const EventsList = ({ onEventClick }) => {
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
          onClick={() => onEventClick(event.id)}
        />
      ))}
    </div>
  );
};
export default EventsList;
