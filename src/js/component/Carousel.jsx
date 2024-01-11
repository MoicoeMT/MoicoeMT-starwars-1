import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <Slider {...settings} className=" mb-5">
      <div id="slider1">
        <img
          src="https://i.redd.it/ppcbvourk4u31.jpg"
          alt="..."
          className="d-block w-100"
        />
      </div>
      <div id="slider2">
        <img
          src="https://a2so.org/wp-content/uploads/2019/08/star-wars-banner-art.jpg"
          className="d-block w-100"
          alt="..."
        />
      </div>
      <div id="slider3">
        <img
          src="https://www.hollywoodreporter.com/wp-content/uploads/2019/12/star_wars-_the_rise_of_skywalker_still_12.jpg"
          className="d-block w-100"
          alt="..."
        />
      </div>
      <div id="slider4">
        <img
          src="https://i.redd.it/llie6isnmr941.jpg"
          className="d-block w-100"
          alt="..."
        />
      </div>
    </Slider>
  );
};

export default Carousel;
