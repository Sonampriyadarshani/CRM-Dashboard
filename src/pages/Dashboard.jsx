import React from "react";
import SalesChart from "../components/SalesChart";
import MyCases from "../components/MyCases";
import CalendarCard from "../components/CalendarCard";
import VideoPreview from "../components/VideoPreview";
import MyActivities from "../components/MyActivities";

const Dashboard = () => {
  return (
    <div className="bg-light p-4 min-vh-100">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <input
          type="text"
          className="form-control me-3"
          placeholder="Search..."
          style={{ maxWidth: "400px", flex: 1 }}
        />
        <div className="d-flex align-items-center">
          <img
            src="https://i.imgur.com/7k12EPD.png"
            alt="Profile"
            className="rounded-circle"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
          <div className="ms-2">
            <div className="fw-bold">Priyanka</div>
            <small className="text-muted">Frontend Developer</small>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="mb-1 text-muted">Total Customers</p>
            <h4 className="text-primary mb-0">21,978</h4>
            <small className="text-muted">From the last month</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="mb-1 text-muted">Active Customers</p>
            <h4 className="text-info mb-0">10,369</h4>
            <small className="text-muted">From the last month</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="mb-1 text-muted">Total Profit</p>
            <h4 className="text-success mb-0">$64,981.97</h4>
            <small className="text-muted">From the last month</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="mb-1 text-muted">Total Expense</p>
            <h4 className="text-danger mb-0">$18,158.21</h4>
            <small className="text-muted">From the last month</small>
          </div>
        </div>
      </div>

      
      <div className="bg-white p-4 rounded shadow-sm mb-4">
        <h5 className="mb-3">Sales Overview</h5>
        <SalesChart />
      </div>

      
      <div className="row">
        <div className="col-md-6">
          <MyCases />
        </div>
        <div className="col-md-6">
          <CalendarCard />
          <VideoPreview />
          <MyActivities />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
