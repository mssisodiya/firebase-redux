import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <Link className="brand-logo center" to="/">
        Tasks
      </Link>
      <SignedInLinks />
      <SignedOutLinks />
    </nav>
  );
};

export default Navbar;
