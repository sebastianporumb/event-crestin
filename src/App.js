import React, { useState } from "react";
import "./App.css";
import { EventsListData } from "./Components/Events/EventsList";
import EventsList from "./Components/Events/EventsList";
import logo from "./Components/Images/EVENT.png";
import EventsDescription from "./Components/Events/EventsDescription";
import EventPopup from "./Components/Events/EventPopup";
import LoginForm from "./Components/Login/LoginForm";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedEventType, setSelectedEventType] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);

  const onEventClick = (eventId) => {
    setSelectedCard(eventId);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  const handleEventTypeClick = (eventType) => {
    setSelectedEventType(eventType);
    setSelectedCard(null);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
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

      {showLoginForm && <LoginForm onClose={() => setShowLoginForm(false)} />}

      <div className="App">
        <header className="App-header">
          <div class="topnav">
            <a
              id="logo-image"
              className={selectedEventType === "all" ? "active" : ""}
              onClick={() => handleEventTypeClick("all")}
              href="#home"
            >
              <img className="logo" src={logo} alt="Logo" />
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
            <button
              className="login-button"
              onClick={() => setShowLoginForm(true)}
            >
              Login
            </button>
          </div>
        </header>

        <main className="App-main">
          <div className="main_1">
            <EventsList
              onEventClick={onEventClick}
              filteredEvents={filteredEvents}
            />
          </div>
        </main>

        <footer className="App-footer">
          <img className="logo-footer" src={logo} />
        </footer>
      </div>
    </div>
  );
}

export default App;
