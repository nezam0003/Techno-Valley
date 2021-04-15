import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

import img1 from "../images/gallery/1.jpg";
import img2 from "../images/gallery/2.jpg";
import img3 from "../images/gallery/3.jpg";
import img4 from "../images/gallery/4.jpg";
import img5 from "../images/gallery/5.jpg";
import img6 from "../images/gallery/6.jpg";
import img7 from "../images/gallery/7.jpg";
import img8 from "../images/gallery/8.jpg";
import img9 from "../images/gallery/9.jpg";
import img10 from "../images/gallery/10.jpg";
import img11 from "../images/gallery/11.jpg";
import img12 from "../images/gallery/12.jpg";

const photos = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
  {
    id: 7,
    img: img7,
  },
  {
    id: 8,
    img: img8,
  },
  {
    id: 9,
    img: img9,
  },
  {
    id: 10,
    img: img10,
  },
  {
    id: 11,
    img: img11,
  },
  {
    id: 12,
    img: img12,
  },
];
const options = {
  // Please note that "caption" is singular
  caption: {
    showCaption: false,
  },
};

const GalleryLightBox = () => {
  return (
    <>
      <SRLWrapper options={options}>
        <div className="container-fluid px-0">
          <div className="row g-0">
            {photos.map((photo) => {
              return (
                <>
                  <div className="col-10 gallery-img mx-auto mx-md-0 col-sm-6 col-md-4 col-lg-3">
                    <div className="gallery-img-container">
                      <a href={photo.img}>
                        <img
                          src={photo.img}
                          alt="img"
                          className="img-fluid photo"
                        />
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </SRLWrapper>
    </>
  );
};

export default GalleryLightBox;
