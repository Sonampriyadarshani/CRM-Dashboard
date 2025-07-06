import { NavLink } from "react-router-dom";

const Sidebar = ({ onLogout }) => {
  return (
    <div className="bg-white p-4 vh-100 border-end" style={{ width: "250px", position: "fixed", top: 0, left: 0 }}>
      <h2 className="text-primary fw-bold mb-5">CRMHUB</h2>

      <nav className="d-flex flex-column">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `mb-3 fw-semibold text-decoration-none ${isActive ? "text-primary" : "text-dark"}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/sales-analytics"
          className={({ isActive }) =>
            `mb-3 fw-semibold text-decoration-none ${isActive ? "text-primary" : "text-dark"}`
          }
        >
          Sales Analytics
        </NavLink>

        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            `mb-3 fw-semibold text-decoration-none ${isActive ? "text-primary" : "text-dark"}`
          }
        >
          Calendar
        </NavLink>

        

        
        

        <button onClick={onLogout} className="btn btn-outline-danger mt-4">
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
