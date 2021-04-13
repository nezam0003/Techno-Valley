import React from "react";
import { HiBadgeCheck } from "react-icons/hi";

const webDevelopment = [
  {
    id: 1,
    icon: <HiBadgeCheck />,
    text: "responsive design",
  },
  {
    id: 2,
    icon: <HiBadgeCheck />,
    text: "UI/UX design",
  },
  {
    id: 3,
    icon: <HiBadgeCheck />,
    text: "mobile app development",
  },
  {
    id: 4,
    icon: <HiBadgeCheck />,
    text: "laravel web development",
  },
  {
    id: 5,
    icon: <HiBadgeCheck />,
    text: "react web development",
  },
  {
    id: 6,
    icon: <HiBadgeCheck />,
    text: " angular web development",
  },
];

const cloudAdoption = [
  {
    id: 1,
    icon: <HiBadgeCheck />,
    text: "Cloud Solution - IaaS, PaaS And SaaS",
  },
  {
    id: 2,
    icon: <HiBadgeCheck />,
    text: "IT Infrastructure Solution",
  },
  {
    id: 3,
    icon: <HiBadgeCheck />,
    text: "Network And Security Solutions",
  },
  {
    id: 4,
    icon: <HiBadgeCheck />,
    text: "ERP Solutions",
  },
];

const marketing = [
  {
    id: 1,
    icon: <HiBadgeCheck />,
    text: "Project Analysis",
  },
  {
    id: 2,
    icon: <HiBadgeCheck />,
    text: "Digital Marketing Strategy",
  },
  {
    id: 3,
    icon: <HiBadgeCheck />,
    text: "Social Media Management & Advertising",
  },
  {
    id: 4,
    icon: <HiBadgeCheck />,
    text: "Strong Clients Relationship",
  },
  {
    id: 5,
    icon: <HiBadgeCheck />,
    text: "Establish Best Practices In Digital Marketing",
  },
  {
    id: 6,
    icon: <HiBadgeCheck />,
    text: "Experienced Management Team",
  },
];

const WebDevelopment = () => {
  return (
    <>
      <div className="row g-3">
        {webDevelopment.map((service) => {
          return (
            <>
              <div key={service.id} className="col-10 mx-auto mx-md-0 col-md-6">
                <div className="card shadow border service-content border-success">
                  <div className="card-body d-flex justify-content-start align-items-center">
                    <div className="text-success fs-2">{service.icon}</div>
                    <div className="text-capitalize mx-2">{service.text} </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

const CloudAdoption = () => {
  return (
    <>
      <div className="row g-3">
        {cloudAdoption.map((service) => {
          return (
            <>
              <div key={service.id} className="col-10 mx-auto mx-md-0 col-md-6">
                <div className="card shadow border service-content border-success">
                  <div className="card-body d-flex justify-content-start align-items-center">
                    <div className="text-success fs-2">{service.icon}</div>
                    <div className="text-capitalize mx-2">{service.text} </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

const DigitalMarketing = () => {
  return (
    <>
      <div className="row g-3">
        {marketing.map((service) => {
          return (
            <>
              <div key={service.id} className="col-10 mx-auto mx-md-0 col-md-6">
                <div className="card shadow border service-content border-success">
                  <div className="card-body d-flex justify-content-start align-items-center">
                    <div className="text-success fs-2">{service.icon}</div>
                    <div className="text-capitalize mx-2">{service.text} </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export { WebDevelopment, CloudAdoption, DigitalMarketing };
