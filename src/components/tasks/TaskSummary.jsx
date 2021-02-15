import React, { Component } from "react";

const TaskSummary = ({ task }) => {
  return (
    <div className="card z-depth-0 task-summry">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{task.title}</span>
        <p>Posted by Manish</p>
        <p className="grey-text">15 feb, 6am</p>
      </div>
    </div>
  );
};

export default TaskSummary;
