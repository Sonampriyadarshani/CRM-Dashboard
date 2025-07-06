import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Dashboard from "./pages/Dashboard";
import SalesAnalytics from "./pages/SalesAnalytics";
import Calendar from "./calendar/Calendar";
import Sidebar from "./components/sidebar/Sidebar"; // ✅ Updated path
import PrivateRoute from "./auth/PrivateRoute";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedIn") === "true");

  const handleLogin = () => setIsLoggedIn(true);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn && <Sidebar onLogout={handleLogout} />} {/* ✅ Capital S */}
      <div style={{ marginLeft: isLoggedIn ? "250px" : "0", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/sales-analytics"
            element={
              <PrivateRoute>
                <SalesAnalytics />
              </PrivateRoute>
            }
          />
          <Route
            path="/calendar"
            element={
              <PrivateRoute>
                <Calendar />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
