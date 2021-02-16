import React, { Component } from "react";
import { useSelector } from "react-redux";
import { useFirebaseConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  const user = useSelector((state) => state.firebase.auth);
  const profile = useSelector((state) => state.firebase.profile);

  return (
    <nav className="nav-wrapper grey darken-3">
      <Link className="brand-logo center" to="/">
        Tasks
      </Link>
      {user.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />}
    </nav>
  );
};

export default Navbar;
