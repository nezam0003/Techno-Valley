import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/logosm.png";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link exact className="navbar-brand" to="/">
          <img src={logo} alt="Brand" className="img-fluid" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleClick}
        >
          {click ? (
            <FaTimes style={{ color: "#dc3545", fontSize: "28px" }} />
          ) : (
            <FaBars style={{ color: "#fff", fontSize: "28px" }} />
          )}
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/service">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/team">
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/signup">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
