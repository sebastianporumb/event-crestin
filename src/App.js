import React, { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import EventsList, { EventsListData } from "./Components/Events/EventsList";
import EventsDescription from "./Components/Events/EventsDescription";
import Card from "./Components/Events/Card";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const main2ContainerRef = useRef(null);

  const onEventClick = (eventId) => {
    if (main2ContainerRef.current) {
      main2ContainerRef.current.scrollTop = 0;
    }

    setSelectedCard(eventId);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main className="App-main">
        <div className="main_1">
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
        <div className="main_2" ref={main2ContainerRef}>
          {selectedCard && (
            <>
              <img
                className="selected-card-image"
                src={EventsDescription[selectedCard].image}
                alt="Selected Event"
              />
              <h2>Description</h2>
              <p>{EventsDescription[selectedCard].description}</p>
              <h2>Details</h2>
              <p>{EventsDescription[selectedCard].details}</p>
            </>
          )}
        </div>
      </main>

      <footer className="App-footer">
        <p>App 2024</p>
      </footer>
    </div>
  );
}

export default App;
