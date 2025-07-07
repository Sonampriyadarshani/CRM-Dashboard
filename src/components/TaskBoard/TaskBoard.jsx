// TaskBoard.jsx
import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard"; // Import your TaskCard component

const TaskBoard = () => {
  const tasks = useSelector((state) => state.tasks.tasks); // Access tasks from Redux store

  const statuses = [
    "Not Started",
    "Started",
    "In Progress",
    "Blocked",
    "Completed",
  ];

  return (
    <div className="container-fluid bg-light p-4 min-vh-100">
      <div className="row">
        {statuses.map((status) => (
          <div className="col-md" key={status}>
            <div className="card p-3 shadow-sm mb-4 task-column">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold">{status}</h6>
                <i className="bi bi-three-dots-vertical"></i>
              </div>

              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}

              <button className="btn btn-link text-primary p-0 mt-2">
                + Add Card
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
