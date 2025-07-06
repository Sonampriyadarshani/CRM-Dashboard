import React from "react";

const StatCards = ({ title, value, diff, avg }) => {
  const diffColor = diff.startsWith("+") ? "text-success" : "text-danger";

  return (
    <div className="card shadow-sm p-3 rounded-4 h-100">
      <div className="d-flex justify-content-between align-items-start">
        <p className="text-uppercase text-muted small mb-0">{title}</p>
        <span className="text-muted fs-6">● ● ●</span>
      </div>
      <h4 className="fw-bold mt-2">{value}</h4>
      <div className="d-flex justify-content-between mt-3 small">
        <span className={`${diffColor} fw-semibold`}>{diff}</span>
        <span className="text-muted">{avg}</span>
      </div>
    </div>
  );
};

export default StatCards;
