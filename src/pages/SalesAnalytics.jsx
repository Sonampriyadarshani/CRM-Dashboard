import React from "react";
import LineChart from "../components/LineChart";
import AreaChart from "../components/AreaChart";
import BarChart from "../components/BarChart";
import DonutChart from "../components/DonutChart";

const SalesAnalytics = () => {
  return (
    <div className="container-fluid p-4 bg-light min-vh-100">
      
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="mb-1 text-muted">User Actives</p>
            <h4 className="text-primary mb-0">310</h4>
            <small className="text-muted">Avg: 525</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="mb-1 text-muted">New Users</p>
            <h4 className="text-info mb-0">162</h4>
            <small className="text-muted">Avg: 159</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="mb-1 text-muted">Avg. Time on Page</p>
            <h4 className="text-success mb-0">00:03:12</h4>
            <small className="text-muted">Avg: 00:02:43</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="mb-1 text-muted">Bounce Rate</p>
            <h4 className="text-danger mb-0">86.18%</h4>
            <small className="text-muted">Avg: 85.45%</small>
          </div>
        </div>
      </div>

     
      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="card shadow-sm p-3 rounded-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="fw-semibold">Learning Activity</h6>
              <span className="badge bg-light text-dark">Yearly</span>
            </div>
            <LineChart />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm p-3 rounded-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="fw-semibold">Lead Source</h6>
              <span className="badge bg-light text-dark">Monthly</span>
            </div>
            <AreaChart />
          </div>
        </div>
      </div>

    
      <div className="row g-4">
        <div className="col-md-8">
          <div className="card shadow-sm p-3 rounded-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="fw-semibold">Sales Pipeline</h6>
              <span className="badge bg-light text-dark">6 Months</span>
            </div>
            <BarChart />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-3 rounded-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="fw-semibold">Opportunities by Stage</h6>
              <span className="badge bg-light text-dark">Invoices</span>
            </div>
            <DonutChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAnalytics;
