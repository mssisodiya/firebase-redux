import { render } from "@testing-library/react";
import React, { Component } from "react";
import { useSelector } from "react-redux";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import TaskList from "../tasks/TaskList";
import Notifications from "./Notifications";

const Dashboard = () => {
  useFirestoreConnect("tasks");

  const { tasks } = useSelector((state) => state.firestore.ordered);
  const auth = useSelector((state) => state.firebase.auth);
  if (!auth.uid) return <Redirect to="/signin" />;
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
