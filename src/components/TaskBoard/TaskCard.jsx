import React from "react";

const TaskCard = ({ task }) => {
  const getBadgeColor = (priority) => {
    switch (priority) {
      case "Urgent":
        return "bg-danger";
      case "Normal":
        return "bg-warning text-dark";
      case "Low":
        return "bg-success";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="card shadow-sm border-0 mb-3">
      <div className="card-body p-3">
        {/* Header: Date + Priority */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <small className="text-muted">{task.dueDate}</small>
          <span className={`badge ${getBadgeColor(task.priority)} px-2 py-1`}>
            {task.priority}
          </span>
        </div>

        {/* Task Title */}
        <h6 className="fw-bold mb-1">{task.title}</h6>

        {/* Assignee */}
        <div className="text-muted small">
          <i className="bi bi-person-circle me-1" />
          {task.assignee}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
