import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarCard = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="card shadow-sm p-2" style={{ fontSize: "0.8rem" }}>
      <h6 className="text-center">Calendar</h6>
      <Calendar
        onChange={setDate}
        value={date}
        className="w-100"
        tileClassName={({ date: d }) => {
          if (
            date.getFullYear() === d.getFullYear() &&
            date.getMonth() === d.getMonth() &&
            date.getDate() === d.getDate()
          ) {
            return "bg-primary text-white rounded text-center p-1";
          }
          return "text-center rounded p-1";
        }}
      />
      <p className="mt-2 text-muted text-center">{date.toDateString()}</p>
    </div>
  );
};

export default CalendarCard;
