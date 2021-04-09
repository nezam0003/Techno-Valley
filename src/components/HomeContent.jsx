import React from "react";
import Title from "./Title";
import homeImg from "../images/homeImg.jpg";
const HomeContent = () => {
  return (
    <section className="home">
      <Title title="message from" subtitle="chairman" />
      <div className="container">
        <div className="row">
          <div className="col-9 mx-auto mx-md-0 col-md-6 mb-3 mb-md-0 ">
            <img src={homeImg} alt="brand name" className="img-fluid" />
          </div>
          <div className="col-9 mx-auto mx-md-0 col-md-6">
            <p>
              Since 2016, we started this venture with the plan to create a
              difference in the world of technology. Our initial beginning was
              with a limited team. To cope in a world, emerging in the digital
              platforms, we have developed a team of trained experts who are
              specialised in various technical sides. Our aim was to contribute
              as much as possible in helping the economy growth, through this
              advanced sector. Our initial operation started in Japan.
              Eventually we have built our head office in Bangladesh, opening
              wings to various technological service. We take immense pride in
              having involvement in the overall development and growth of
              various companies. We have successfully launched projects and
              innovated new ideas. We plan to keep improving every day,
              motivating our team in selfless contribution towards Digital
              Bangladesh and also flourishing in foreign projects. We thank our
              partners for their continuous support and we would whole heartedly
              welcome you all to experience a journey with Techno Valley
              Limited.
            </p>
            <h2 className="title text-capitalize">Mohammad Nezam Khan</h2>
            <p className="subtitle fst-italic">Chairman(TechnoValley)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
