import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const SocialMediaIcon = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <Link to="/">
          <FaFacebook className="fs-3" />
        </Link>
        <Link to="/">
          <FaTwitter className="fs-3" />
        </Link>
        <Link to="/">
          <FaInstagram className="fs-3" />
        </Link>
        <Link to="/">
          <FaLinkedinIn className="fs-3" />
        </Link>
      </div>
    </>
  );
};

export default SocialMediaIcon;
