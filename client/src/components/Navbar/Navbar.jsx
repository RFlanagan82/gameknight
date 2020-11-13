import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Image from "react-bootstrap/Image";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link to="/" className="navbar-brand knight-font">
        <Image className="py-auto pr-1" src="images/knightIcon.png" />
        Game Knight
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavLink to="/events" className="nav-link">
            Events
          </NavLink>
          <NavLink to="/dashboard" className="nav-link">
            Dashboard
          </NavLink>
          {!props.jwt ? (
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          ) : (
            <NavLink
              to="/"
              onClick={() => {
                props.setJwt("");
              }}
              className="nav-link"
            >
              Logout
            </NavLink>
          )}
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
