import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex flex-wrap text-capitalize justify-content-center mb-5">
          <h1 className="font-weight-bold align-self-center title mx-1">
            {title}
          </h1>
          <h1 className="subtitle mx-1">{subtitle}</h1>
        </div>
      </div>
    </div>
  );
};

export default Title;
