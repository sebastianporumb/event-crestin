import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

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
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label>
            Email:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            Remember me
            <input type="checkbox" name="remember" />
          </label>
          <div className="form-actions">
            <button type="submit">Login</button>
          </div>
          <div className="form-links">
            <a href="#">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
