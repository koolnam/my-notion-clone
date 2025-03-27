import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import oneCarousel from "../assets/oneCarousel.avif";
import twoCarousel from "../assets/twoCarousel.avif";
import threeCarousel from "../assets/threeCarousel.avif";
import fourCarousel from "../assets/fourCarousel.avif";
import fiveCarousel from "../assets/fiveCarousel.avif";
import sixCarousel from "../assets/sixCarousel.avif";
import React, { useState } from "react";
import Slider from "react-slick";

export const ImageCarousel = () => {
  const [autoplay, setAutoplay] = useState(true);

  const settings = {
    autoplay,
    autoplaySpeed: 2000, // Change the image every 2 seconds
    dots: true, // Show indicators
    beforeChange: () => setAutoplay(false), // Stop autoplay when an indicator is clicked
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={oneCarousel} alt="Image 1" />
        </div>
        <div>
          <img src={twoCarousel} alt="Image 1" />
        </div>
        <div>
          <img src={threeCarousel} alt="Image 1" />
        </div>
        <div>
          <img src={fourCarousel} alt="Image 1" />
        </div>
        <div>
          <img src={fiveCarousel} alt="Image 1" />
        </div>
        <div>
          <img src={sixCarousel} alt="Image 1" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
