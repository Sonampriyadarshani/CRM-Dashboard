// components/Topbar.jsx
import React from "react";
import { FaUserCircle } from "react-icons/fa"; // React user icon

const Topbar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-3 bg-white border-bottom shadow-sm">
      {/* Search Bar */}
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        style={{ maxWidth: "280px", fontSize: "0.875rem" }}
      />

      {/* User Icon and Name */}
      <div className="d-flex align-items-center ms-3">
        {/* Smaller Icon */}
        <FaUserCircle size={24} className="text-secondary me-2" />
        <div className="d-none d-sm-block" style={{ fontSize: "0.875rem" }}>
          <strong>Sonam</strong>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
