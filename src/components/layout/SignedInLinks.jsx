import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">New Task</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-float pink lighten-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
