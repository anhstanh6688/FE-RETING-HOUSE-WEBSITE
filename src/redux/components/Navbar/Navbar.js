import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          Renting House
        </NavLink>
        {/* Navbar Toggler (dùng cho mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/user">
                User
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/house">
                House
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          {/* Login and Register Buttons */}
          <div className="d-flex">
            <button className="btn btn-outline-light me-2">Login</button>
            <button className="btn btn-light">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


//API 