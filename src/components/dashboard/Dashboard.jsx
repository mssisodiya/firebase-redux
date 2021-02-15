import { render } from "@testing-library/react";
import React, { Component } from "react";
import { useSelector } from "react-redux";
import TaskList from "../tasks/TaskList";
import Notifications from "./Notifications";

const Dashboard = () => {
  const { tasks } = useSelector((state) => state.task);
  return (
    <div className="dashboard container">
      {console.log(tasks)}
      <div className="row">
        <div className="col s12 m6">
          <TaskList tasks={tasks} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
