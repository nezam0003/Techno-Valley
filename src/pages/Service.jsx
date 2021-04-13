import React from "react";
import Title from "../components/Title";

import {
  WebDevelopment,
  CloudAdoption,
  DigitalMarketing,
} from "../components/services/ServiceContent";

import webdev from "../images/services/web-dev.png";
import cloud from "../images/services/cloud.png";
import marketing from "../images/services/digital-marketing.png";

const services = [
  {
    id: 1,
    img: webdev,
    title: "Web & Apps Development",
    text:
      "We create Innovative web & mobile app to empower businesses around the world.",
  },
  {
    id: 2,
    img: cloud,
    title: "Cloud Adoption Services",
    text:
      "We are the principal Partner of Oracle Cloud, Techno-Valley is the Only CIP ( cloud Implementation partner ) in Bangladesh market . Techno-Valley has the partnership with other cloud vendors as well.",
  },
  {
    id: 3,
    img: marketing,
    title: "Digital Marketing",
    text:
      "Gone are the days when using social media for business was optional. Today almost every company is using social media to market their products or services. We deliver Premium Concept & Design, Maximum Interaction with the target audience for individual company.",
  },
];

const Service = () => {
  return (
    <>
      <div className="service">
        <Title title="Our" subtitle="Services" />
        <div className="container">
          {services.map((serviceItem) => {
            return (
              <>
                <div key={serviceItem.id} className="row mb-5">
                  <div className="col-10 mx-atuo mb-4 mb-lg-0  col-lg-6">
                    <div className="service-image">
                      <img
                        src={serviceItem.img}
                        alt="images"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-10 mx-auto col-lg-6 ">
                    <h2 className="text-capitalize fw-bold title pb-1">
                      {serviceItem.title}
                    </h2>
                    <div className="underline"></div>
                    <p className="text-capitalize text-start">
                      {serviceItem.text}
                    </p>
                    {serviceItem.id === 1 && <WebDevelopment />}
                    {serviceItem.id === 2 && <CloudAdoption />}
                    {serviceItem.id === 3 && <DigitalMarketing />}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
