import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactData = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    title: "phone",
    subtitle: "+8801632146855",
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    title: "E-mail",
    subtitle: "fhameedk.nezam@gmail.com",
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    title: "Address",
    subtitle: "Nikunja-01, khelkhet, Dhaka",
  },
];

const ContactInformation = () => {
  return (
    <>
      <div className="row">
        {contactData.map((data) => {
          return (
            <div
              key={data.id}
              className=" col-10 mx-auto  mb-2 mb-lg-0 col-md-6 col-lg-4"
            >
              <div className="card bg-white shadow text-dark">
                <div className="card-body d-flex justify-content-start align-items-center ">
                  <div className="fs-3">{data.icon}</div>
                  <div className="mx-3">
                    <div className="fw-bold">{data.title}</div>
                    <div className="text-muted">{data.subtitle}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContactInformation;
