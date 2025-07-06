import React, { useState } from "react";

const Calendar = () => {
  const [currentView, setCurrentView] = useState("monthly");

  const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const dates = new Array(35).fill(null).map((_, i) => i + 27);

  const events = [
    { date: 27, title: "Rewording Marketing", time: "09:30 AM - 11:00 AM", color: "bg-danger-subtle text-danger" },
    { date: 6, title: "Rewording Marketing", time: "12:00 AM - 03:00 AM", color: "bg-primary-subtle text-primary" },
    { date: 1, title: "Rewording Marketing", time: "10:00 AM - 12:00 PM", color: "bg-success-subtle text-success" },
    { date: 15, title: "Rewording Marketing", time: "03:30 PM - 06:00 PM", color: "bg-warning-subtle text-warning" },
    { date: 29, title: "Rewording Marketing", time: "01:00 PM - 03:00 PM", color: "bg-info-subtle text-info" },
  ];

  const calendarGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    border: "1px solid #dee2e6",
    borderRadius: "0.375rem",
    overflow: "hidden"
  };

  return (
    <div className="p-4" style={{ marginLeft: "250px" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold">Calendar</h4>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button className={`btn btn-outline-dark ${currentView === "weekly" && "active"}`} onClick={() => setCurrentView("weekly")}>Weekly</button>
          <button className={`btn btn-dark ${currentView === "monthly" && "active"}`} onClick={() => setCurrentView("monthly")}>Monthly</button>
          <button className={`btn btn-outline-dark ${currentView === "timeline" && "active"}`} onClick={() => setCurrentView("timeline")}>Timeline</button>
          <button className="btn btn-primary ms-3">+ Add Event</button>
        </div>
      </div>

      <div style={calendarGridStyle}>
        {days.map((day, i) => (
          <div key={i} className="text-center fw-bold py-2 border-end border-bottom bg-light">{day}</div>
        ))}

        {dates.map((date, index) => (
          <div key={index} className="border p-2" style={{ minHeight: "120px" }}>
            <div className="fw-medium">{date <= 31 ? date : date - 31}</div>
            {events.filter(e => e.date === date).map((event, i) => (
              <div key={i} className={`mt-2 p-2 rounded ${event.color}`}>
                <div className="small fw-semibold">{event.title}</div>
                <div className="small">{event.time}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
