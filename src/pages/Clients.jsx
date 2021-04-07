import React from "react";
import Title from "../components/Title";

import img1 from "../images/clients/Zash.jpg";
import img2 from "../images/clients/abacus.jpg";
import img3 from "../images/clients/anata.jpg";
import img4 from "../images/clients/Bella.jpg";
import img5 from "../images/clients/bok.jpg";
import img6 from "../images/clients/chocolate.jpg";
import img7 from "../images/clients/Cookie-intertemnet.jpg";
import img8 from "../images/clients/corona-app.jpg";
import img9 from "../images/clients/dBL.jpg";
import img10 from "../images/clients/digital.jpg";
import img11 from "../images/clients/employment.jpg";
import img12 from "../images/clients/eversoft.jpg";
import img13 from "../images/clients/Fakir.jpg";
import img14 from "../images/clients/fakir-kintwear.jpg";
import img15 from "../images/clients/ihost.jpg";
import img16 from "../images/clients/jaihoue.jpg";
import img17 from "../images/clients/Jense.jpg";
import img18 from "../images/clients/kinen-bd.jpg";
import img19 from "../images/clients/live-exchange.jpg";
import img20 from "../images/clients/yardly.jpg";
import img21 from "../images/clients/wash-and-work.jpg";
import img22 from "../images/clients/vella_laser.jpg";
import img23 from "../images/clients/spanish.jpg";
import img24 from "../images/clients/pharma.jpg";
import ClientsFeedBack from "../components/ClientsFeedBack";

const Clients = () => {
  const allImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
  ];
  return (
    <>
      <div className="clients pt-3">
        <div className="pt-5">
          <Title title="our" subtitle="clients" />
        </div>
        <div className="container">
          <div className="row">
            {allImages.map((image, index) => {
              return (
                <div
                  key={index}
                  className="col-7 mx-auto mx-md-0 col-sm-6 col-md-4 col-lg-3  mb-3"
                >
                  <img
                    src={image}
                    alt="img1"
                    className="img-fluid client-img border"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ClientsFeedBack />
    </>
  );
};

export default Clients;
