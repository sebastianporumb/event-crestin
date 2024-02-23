import React, { useState } from "react";
import Card from "./Card";
import { newDate, formatDate } from "./newDate";
import elBetel from "../Images/el-betel.jpg";
import worship_night from "../Images/worship_night.jpg";
import betania_dublin from "../Images/Betania Dublin.jpg";
import Betel_timisoara from "../Images/Betel_timisoara.jpg";

export const EventsListData = [
  {
    id: "e1",
    title: "Concert Betel orchestra",
    date: newDate("16 Martie 2024, 10:00"),
    city: "Cluj",
    location: "Casa de cultura",
    image: elBetel,
    type: "concert",
  },
  {
    id: "e2",
    title: "Concert Betel Timisoara",
    date: newDate("19 Martie 2024, 10:00"),
    city: "Timisoara",
    location: "Casa de cultura",
    image: Betel_timisoara,
    type: "concert",
  },
  {
    id: "e3",
    title: "Betania Dublin ",
    date: newDate("21 Martie 2024, 15:00"),
    city: "Arad",
    location: "Casa de cultura",
    image: betania_dublin,
    type: "conferinta",
  },
  {
    id: "e4",
    title: "Concert Betel worship",
    date: newDate("14 Martie 2024, 18:00"),
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
