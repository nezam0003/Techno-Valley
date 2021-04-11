import React from "react";

import img1 from "../images/partners/casio.jpg";
import img2 from "../images/partners/Dellmc.jpg";
import img3 from "../images/partners/f5.jpg";
import img4 from "../images/partners/fortnite.jpg";
import img5 from "../images/partners/hikvision.jpg";
import img6 from "../images/partners/hp.jpg";
import img7 from "../images/partners/Microsoft.jpg";
import img8 from "../images/partners/oracle.jpg";
import img9 from "../images/partners/pato.jpg";
import img10 from "../images/partners/sophos.jpg";
import img11 from "../images/partners/treand.jpg";
import img12 from "../images/partners/vmware.jpg";

import Title from "./Title";
import { PartnerCard, PartnerImage } from "./MyStyled";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 550,
    itemsToShow: 2,
  },
  {
    width: 768,
    itemsToShow: 4,
  },
  {
    width: 1200,
    itemsToShow: 5,
  },
];

const Partner = () => {
  const allPertner = [
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
  ];
  return (
    <>
      <div className="partner">
        <Title title="our official" subtitle="partner" />
        <div className="container">
          <div className="row">
            <Carousel
              isRTL={true}
              showArrows={false}
              enableAutoPlay
              autoPlaySpeed={1500}
              itemPadding={[5, 24]}
              breakPoints={breakPoints}
            >
              {allPertner.map((partner, index) => {
                return (
                  <PartnerCard key={index}>
                    <PartnerImage src={partner} />
                  </PartnerCard>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
