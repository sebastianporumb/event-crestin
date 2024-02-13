import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import EventsList from "./Components/Events/EventsList";
import EventsListData from "./Components/Events/EventsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main className="App-main">
        <div className="main_1">
          <EventsList />
        </div>
        <div className="main_2">Buna Ziua</div>
      </main>

      <footer className="App-footer">
        <p>App 2024</p>
      </footer>
    </div>
  );
}

export default App;
