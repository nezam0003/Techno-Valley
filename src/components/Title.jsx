import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col d-flex flex-wrap text-capitalize justify-content-center">
          <h1 class="font-weight-bold align-self-center title mx-1">{title}</h1>
          <h1 class="subtitle mx-1">{subtitle}</h1>
        </div>
      </div>
    </div>
  );
};

export default Title;
