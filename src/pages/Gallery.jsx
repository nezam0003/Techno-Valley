import React from "react";
import GalleryLightBox from "../components/GalleryLightBox";
import Title from "../components/Title";
import SimpleReactLightbox from "simple-react-lightbox";

const Gallery = () => {
  return (
    <div className="gallery">
      <Title title="our" subtitle="gallery" />
      <SimpleReactLightbox>
        <GalleryLightBox />
      </SimpleReactLightbox>
    </div>
  );
};

export default Gallery;
