import React, { useState } from "react";
import "./LoginForm.css";
import users from "./LoginData";
import NewEvent from "../Events/NewEvents";

const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    onClose();
  };

  return (
    <div className="fullscreen-popup-overlay1" onClick={onClose}>
      <div
        className="fullscreen-popup1 login-form"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="close-button1" onClick={onClose}>
          CLOSE X
        </span>
        {!isLoggedIn ? (
          <form onSubmit={handleSubmit}>
            {
              <div>
                <h2>Login</h2>
                <label>
                  Email:
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="name@email.com"
                  />
                </label>
                <label>
                  Password:
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                  />
                </label>
                <label>
                  Remember me
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="remember"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                </label>
                <div className="form-actions">
                  <button type="submit">Login</button>
                </div>
                <div className="form-links">
                  <a href="#">Forgot Password?</a>
                </div>
              </div>
            }
          </form>
        ) : (
          <div>
            <NewEvent />
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
