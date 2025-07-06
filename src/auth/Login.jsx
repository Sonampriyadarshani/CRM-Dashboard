import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    // Password must be at least 4 characters
    if (password.length < 4) {
      alert("Password must be at least 4 characters long");
      return;
    }

    
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userEmail", email); 
    onLogin();
    navigate("/dashboard"); 
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <form className="bg-white p-5 rounded shadow" onSubmit={handleSubmit}>
        <h2 className="mb-4 text-center">Login</h2>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-4"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
