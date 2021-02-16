import React, { Component } from "react";
import { Link } from "react-router-dom";
import TaskSummary from "./TaskSummary";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list section">
      {tasks &&
        tasks.map((task) => {
          return (
            <Link to={`/task/${task.id}`}>
              <TaskSummary task={task} key={task.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default TaskList;
