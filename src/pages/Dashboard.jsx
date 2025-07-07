// pages/Dashboard.jsx
import React from "react";
import SalesChart from "../components/SalesChart";
import Cases from "../components/Cases";
import CalendarCard from "../components/CalendarCard";
import VideoPreview from "../components/VideoPreview";
import MyActivities from "../components/MyActivities";
import Topbar from "../components/Topbar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="container-fluid p-0 bg-light min-vh-100">
      {/* Topbar */}
      <Topbar />
      <div className="container-fluid p-4 bg-light min-vh-100">
        {/* Top Metric Cards */}
        <div className="row g-4 mb-4">
          <div className="col-md-3">
            <div className="metric-card text-center">
              <p>Total Customers</p>
              <h4 className="text-primary">21,978</h4>
              <small>From the last month</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="metric-card text-center">
              <p>Active Customers</p>
              <h4 className="text-info">10,369</h4>
              <small>From the last month</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="metric-card text-center">
              <p>Total Profit</p>
              <h4 className="text-success">$64,981.97</h4>
              <small>From the last month</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="metric-card text-center">
              <p>Total Expense</p>
              <h4 className="text-danger">$18,158.21</h4>
              <small>From the last month</small>
            </div>
          </div>
        </div>

        {/* Sales Overview and Calendar side by side */}
        <div className="row g-4 mb-4">
          <div className="col-md-8">
            <div className="card-custom h-100">
              <h6 className="section-title">Sales Overview</h6>
              <SalesChart />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-custom h-100">
              <CalendarCard />
            </div>
          </div>
        </div>

        {/* Bottom Section: Cases + Right Side */}
        <div className="row g-4">
          <div className="col-md-7">
            <div className="card-custom">
              <h6 className="section-title">My Cases</h6>
              <Cases />
            </div>
          </div>
          <div className="col-md-5">
            <div className="video-preview mb-4">
              <VideoPreview />
            </div>
            <div className="card-custom">
              <h6 className="section-title d-flex justify-content-between align-items-center">
                My Activities{" "}
                <span className="text-primary small">View all</span>
              </h6>
              <MyActivities />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
