import React from "react";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, tasks, status }) => {
  return (
    <div className="card flex-fill p-3 shadow-sm">
      <h6 className="mb-3">{title}</h6>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskColumn;
