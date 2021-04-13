import React from "react";
import Title from "../components/Title";

import team1 from "../images/clients-feed-back/feedback-1.jpg";
import team2 from "../images/clients-feed-back/feedback-2.jpg";
import team3 from "../images/clients-feed-back/feedback-3.jpg";
import team4 from "../images/clients-feed-back/feedback-4.jpg";

const members = [
  {
    id: 1,
    image: team1,
    name: "Nezam Khan",
  },

  {
    id: 2,
    image: team2,
    name: "Zara Abedin",
  },
  {
    id: 3,
    image: team3,
    name: "Jakia Reshme",
  },
  {
    id: 4,
    image: team4,
    name: "Tahsin Hasan",
  },
];

const Team = () => {
  return (
    <>
      <div className="team">
        <Title title="Meet Our" subtitle="Expart" />
        <div className="container">
          <div className="row">
            {members.map((member) => {
              return (
                <>
                  <div
                    key={member.id}
                    className="col-10 mx-auto mx-md-0 g-4 col-md-6 col-lg-4"
                  >
                    <div className="card h-100">
                      <img
                        src={member.image}
                        alt="team"
                        className="img-responsive img-fluid"
                      />
                      <div className="card-body text-light">
                        <h5 className="card-title text-uppercase fw-bold">
                          {member.name}
                        </h5>
                        <p className="card-text text-capitalize text-muted">
                          {member.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
