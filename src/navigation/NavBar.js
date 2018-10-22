import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>

          <Link className="navbar-brand" to="/">
            the Spot Social
          </Link>
          <Link className="navbar-item" to="/commentSection">
            Comment Section
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
