import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav className="navbar navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <i className="fa fa-address-book-o mr-1"></i>Contact Application
        </a>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link text-light">
              <i className="fa fa-home mr-1"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/addcontact" className="nav-link text-light">
              <i className="fa fa-plus mr-1"></i> Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link text-light">
              <i className="fa fa-question mr-1"></i>About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
