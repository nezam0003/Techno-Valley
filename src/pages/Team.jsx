import React from "react";
import Title from "../components/Title";

import team1 from "../images/team/team-1.jpg";
import team2 from "../images/team/team-2.jpg";
import team3 from "../images/team/team-3.jpg";
import team4 from "../images/team/team-4.jpg";
import team5 from "../images/team/team-5.jpg";
import team6 from "../images/team/team-6.jpg";
import team7 from "../images/team/team-7.jpg";
import team8 from "../images/team/team-8.jpg";
import team9 from "../images/team/team-9.jpg";
import team10 from "../images/team/team-10.jpg";
import team11 from "../images/team/team-11.jpg";
import team12 from "../images/team/team-12.jpg";

const members = [
  {
    id: 1,
    image: team1,
    name: "Nezam Khan",
    position: "COO",
  },

  {
    id: 2,
    image: team2,
    name: "tanvir ahmed",
    position: "CEO",
  },
  {
    id: 3,
    image: team3,
    name: "aslam ahmed",
    position: "adviser",
  },
  {
    id: 4,
    image: team4,
    name: "Tahsin Hasan",
    position: "project manager",
  },
  {
    id: 5,
    image: team5,
    name: "juboraz khan",
    position: "design manager",
  },
  {
    id: 6,
    image: team6,
    name: "fhameed khan",
    position: "software enginner",
  },
  {
    id: 7,
    image: team7,
    name: "syka afroja",
    position: "software enginner",
  },
  {
    id: 8,
    image: team8,
    name: "nafiz iqbal",
    position: "software enginner",
  },
  {
    id: 9,
    image: team9,
    name: "shafiqul islam",
    position: "software enginner",
  },
  {
    id: 10,
    image: team10,
    name: "imrose rony",
    position: "software enginner",
  },
  {
    id: 11,
    image: team11,
    name: "tayeb uddin",
    position: "software enginner",
  },
  {
    id: 12,
    image: team12,
    name: "emon ahmed",
    position: "software enginner",
  },
];

const Team = () => {
  return (
    <>
      <div className="team">
        <Title title="Meet Our" subtitle="Expart" />
        <div className="container">
          <div className="row">
            <div className="col-9 text-center mx-auto">
              <p>
                Here is the team behind the success of Techno valley - with a
                strong personality and mindset of some great skills, you will
                have a never ending relation with us.
              </p>
            </div>
          </div>
        </div>
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
                      <div className="team-image">
                        <img
                          src={member.image}
                          alt="team"
                          className="img-responsive img-fluid"
                        />
                      </div>
                      <div className="card-body text-light">
                        <h5 className="card-title text-capitalize  fw-bold">
                          {member.name}
                        </h5>
                        <p className="card-subtitle text-uppercase text-muted">
                          {member.position}
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
