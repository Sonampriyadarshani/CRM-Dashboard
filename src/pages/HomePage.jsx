// pages/Homepage.jsx
import React from "react";

const Homepage = () => {
  return (
    <div className="container-fluid p-4 bg-light min-vh-100">
      <div className="bg-white p-4 rounded shadow-sm mb-4">
        <h4 className="fw-bold mb-3">Welcome to CRMHub!</h4>
        <p className="text-muted mb-0">
          This is your central dashboard where you can view key business data,
          manage leads and contacts, track activities, and analyze your sales
          performance.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="bg-white p-4 rounded shadow-sm h-100">
            <h5 className="fw-semibold mb-3">Getting Started</h5>
            <ul className="list-unstyled">
              <li className="mb-2">✅ Add your contacts and leads</li>
              <li className="mb-2">📅 Schedule your first meeting</li>
              <li className="mb-2">📊 Review your sales pipeline</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="bg-white p-4 rounded shadow-sm h-100">
            <h5 className="fw-semibold mb-3">Quick Stats</h5>
            <div className="row">
              <div className="col-6 mb-3">
                <p className="mb-1 text-muted">New Leads</p>
                <h4 className="text-primary">58</h4>
              </div>
              <div className="col-6 mb-3">
                <p className="mb-1 text-muted">Upcoming Tasks</p>
                <h4 className="text-success">12</h4>
              </div>
              <div className="col-6">
                <p className="mb-1 text-muted">Meetings Today</p>
                <h4 className="text-warning">3</h4>
              </div>
              <div className="col-6">
                <p className="mb-1 text-muted">Pending Cases</p>
                <h4 className="text-danger">6</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
