import React, { useState, useRef } from "react";
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

  const renderParagraphs = (text) => {
    return text
      .split("\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div class="topnav">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#concert">Concerte</a>
          <a href="#conferinta">Conferinte</a>
          <div class="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Titlu sau oras" name="search" />
              <button type="submit">
                Cauta
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
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
              {renderParagraphs(EventsDescription[selectedCard].description)}
              <h2>Details</h2>
              {renderParagraphs(EventsDescription[selectedCard].details)}
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
