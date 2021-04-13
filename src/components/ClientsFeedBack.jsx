import React from "react";
import Title from "./Title";

import img1 from "../images/clients-feed-back/feedback-1.jpg";
import img2 from "../images/clients-feed-back/feedback-2.jpg";
import img3 from "../images/clients-feed-back/feedback-3.jpg";
import img4 from "../images/clients-feed-back/feedback-4.jpg";

const ClientsFeedBack = () => {
  const feedBack = [
    {
      id: 1,
      image: img1,
      name: "Nezam Khan",
      designation: "Job Holder",
      description:
        "I was really lucky to meet Techno-Valley.Even difficult challenges are better than you can imagine, as you will be kind enough to deal with them. Thank you ",
    },
    {
      id: 2,
      image: img2,
      name: "Zara Abedin",
      designation: "Businessman",
      description:
        "Great people to work with. You can learn and teach.Work with open minded people Nice offices and views.You have freedom to be proactive. ",
    },
    {
      id: 3,
      image: img3,
      name: "Jakia Reshme",
      designation: "Interpreneour",
      description:
        "Their team has recommended, implemented and documented network and server systems to meet our changing needs. ",
    },
    {
      id: 4,
      image: img4,
      name: "Tahsin Hasan",
      designation: "Frelancer",
      description:
        "Great people to work with. You can learn and teach.Work with open minded people Nice offices and views.You have freedom to be proactive. ",
    },
  ];

  return (
    <div className="clients-feed-back">
      <Title title="Clients" subtitle="Feedback" />
      <div className="container">
        <div className="row">
          {feedBack.map((client) => {
            return (
              <div
                key={client.id}
                className="col-7 mx-auto mx-md-0 mb-3 mb-lg-0 col-sm-6 col-md-4 col-lg-3"
              >
                <div className="card h-100 text-center bg-light text-dark">
                  <img
                    src={client.image}
                    alt="client"
                    className="img-responsive img-fluid rounded-circle"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{client.name}</h5>
                    <h6 className="card-subtitle mb-2 text-info">
                      {client.designation}
                    </h6>
                    <p className="card-text">{client.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientsFeedBack;
