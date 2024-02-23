import React, { useState, useRef } from "react";
import "./App.css";
import { EventsListData } from "./Components/Events/EventsList";
import EventsDescription from "./Components/Events/EventsDescription";
import Card from "./Components/Events/Card";
import EventPopup from "./Components/Events/EventPopup";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedEventType, setSelectedEventType] = useState("all");
  const [searchText, setSearchText] = useState("");

  const onEventClick = (eventId) => {
    setSelectedCard(eventId);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  const handleEventTypeClick = (eventType) => {
    setSelectedEventType(eventType);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const renderParagraphs = (text) => {
    return text
      .split("\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  const filteredEvents =
    selectedEventType === "all"
      ? EventsListData.filter(
          (event) =>
            event.title.toLowerCase().includes(searchText.toLowerCase()) ||
            event.city.toLowerCase().includes(searchText.toLowerCase())
        )
      : EventsListData.filter(
          (event) =>
            event.type === selectedEventType &&
            (event.title.toLowerCase().includes(searchText.toLowerCase()) ||
              event.city.toLowerCase().includes(searchText.toLowerCase()))
        );

  return (
    <div className={`App ${selectedCard ? "card-selected" : ""}`}>
      {selectedCard && (
        <EventPopup
          event={EventsDescription[selectedCard]}
          onClose={closePopup}
        />
      )}

      <div className="App">
        <header className="App-header">
          <div class="topnav">
            <a
              className={selectedEventType === "all" ? "active" : ""}
              onClick={() => handleEventTypeClick("all")}
              href="#home"
            >
              Home
            </a>
            <a
              className={selectedEventType === "concert" ? "active" : ""}
              onClick={() => handleEventTypeClick("concert")}
              href="#concert"
            >
              Concerte
            </a>
            <a
              className={selectedEventType === "conferinta" ? "active" : ""}
              onClick={() => handleEventTypeClick("conferinta")}
              href="#conferinta"
            >
              Conferinte
            </a>
            <div class="search-container">
              <form action="/action_page.php">
                <input
                  type="text"
                  placeholder="Titlu, oras"
                  name="search"
                  value={searchText}
                  onChange={handleSearch}
                />
              </form>
            </div>
          </div>
        </header>

        <main className="App-main">
          <div className="main_1">
            {filteredEvents.map((event) => (
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
        </main>

        <footer className="App-footer">
          <p>App 2024</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
