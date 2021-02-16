import moment from "moment";
import React, { Component } from "react";

const TaskSummary = ({ task }) => {
  return (
    <div className="card z-depth-0 task-summry">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{task.title}</span>
        <p>Posted by {task.authorFirstname}</p>
        <p className="grey-text">
          {moment(task.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default TaskSummary;
