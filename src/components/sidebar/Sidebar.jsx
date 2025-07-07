// components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaUserTie,
  FaUsers,
  FaAddressBook,
  FaTasks,
  FaCalendarAlt,
  FaFolderOpen,
  FaUserCircle,
} from "react-icons/fa";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h4 className="logo-text">
          CRM<span>HUB</span>
        </h4>
      </div>

      <ul className="sidebar-section">
        <li>
          <NavLink to="/dashboard" className="sidebar-link">
            <FaHome className="sidebar-icon" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/homepage" className="sidebar-link">
            <FaChartBar className="sidebar-icon" />
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink to="/sales-analytics" className="sidebar-link">
            <FaChartBar className="sidebar-icon" />
            Sales Analytics
          </NavLink>
        </li>
      </ul>

      <ul className="sidebar-section">
        <li>
          <NavLink to="/contacts" className="sidebar-link">
            <FaAddressBook className="sidebar-icon" />
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink to="/leads" className="sidebar-link">
            <FaUsers className="sidebar-icon" />
            Leads
          </NavLink>
        </li>
        <li>
          <NavLink to="/calendar" className="sidebar-link">
            <FaCalendarAlt className="sidebar-icon" />
            Calendar
          </NavLink>
        </li>
      </ul>

      <ul className="sidebar-section">
        <li>
          <NavLink to="/cases" className="sidebar-link">
            <FaFolderOpen className="sidebar-icon" />
            Cases
          </NavLink>
        </li>
        <li>
          <NavLink to="/activities" className="sidebar-link">
            <FaTasks className="sidebar-icon" />
            Activities
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks" className="sidebar-link">
            <FaTasks className="sidebar-icon" />
            Task
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className="sidebar-link">
            <FaUserCircle className="sidebar-icon" />
            Users
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
