import React from "react";
import backGroundVideo from "../videos/backgroundVdo.mov";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="v-header v-container">
        <div className="fullscreen-video-wrap">
          <video src={backGroundVideo} autoPlay loop muted />
        </div>
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>
            Welcome to <span className="text-primary">Techno</span>
            <span className="text-warning">Valley</span>
          </h1>
          <p>
            Web, mobile, infrastructure, cloud and software development
            solutions for all your enterprise needs. we will turn your idea into
            a market.
          </p>
          <Link exact className="btn btn-warning text-capitalize" to="/service">
            get started
          </Link>
        </div>
      </header>
    </>
  );
};

export default Home;
