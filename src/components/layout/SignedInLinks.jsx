import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = ({ profile }) => {
  const dispatch = useDispatch();
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Task</NavLink>
      </li>
      <li>
        <a onClick={() => dispatch(signOut())}>Logout</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-float pink lighten-1">
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
