// src/pages/ActivitiesPage.jsx
import React, { useRef } from "react";

import TaskBoard from "../components/TaskBoard/TaskBoard";

const ActivitiesPage = () => {
  const taskRef = useRef(null);

  const handleScrollToTask = () => {
    taskRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Tasks</h4>

        <div className="dropdown">
          <button
            className="btn btn-outline-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            + Create
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" onClick={handleScrollToTask}>
                Task
              </button>
            </li>
            <li>
              <button className="dropdown-item" disabled>
                Event
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div ref={taskRef} className="mt-4">
        <TaskBoard />
      </div>
    </div>
  );
};

export default ActivitiesPage;
