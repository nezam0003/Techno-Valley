import React from "react";
import { NavLink } from "react-router-dom";
import SocialMediaIcon from "./SocialMediaIcon";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col mx-auto text-center">
            <p className="text-capitalize">
              &copy; copyright
              <span className="text-warning mx-2">
                {new Date().getFullYear()}
              </span>
              All rights reserved by
              <span className="mx-2">
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "#a9c927" }}
                >
                  Techno-Valley
                </NavLink>
              </span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 mx-auto text-center">
            <SocialMediaIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
