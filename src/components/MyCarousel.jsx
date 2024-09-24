import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const MyCarousel = () => {
  return (
    <>
      <Carousel infiniteLoop>
        <div className="h-96">
          <img src="../assets/1.jpg" className="" />
          <p className="legend">Legend 1</p>
        </div>
        <div className="h-96">
          <img src="../assets/2.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div className="h-96">
          <img src="../assets/3.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div className="h-96">
          <img src="../assets/4.jpg" />
          <p className="legend">Legend 4</p>
        </div>
        <div className="h-96">
          <img src="../assets/5.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </>
  );
};

export default MyCarousel;
