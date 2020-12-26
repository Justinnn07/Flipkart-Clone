import React from "react";
import "./Slide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photo = [
  {
    url:
      "https://www.patentlyapple.com/.a/6a0120a5580826970c0240a4acf9ea200d-pi",
  },
  {
    url:
      "https://www.adeevee.com/aimages/201407/19/nordstrom-nordstrom-fashion-clothing-nordstrom-fall-2014-ad-print-362582-adeevee.jpg",
  },
  {
    url:
      "https://img.global.news.samsung.com/in/wp-content/uploads/2018/04/Digital-Inverter-Refrigerator-Newsroom.jpg",
  },
];

const Slides = () => {
  const settings = {
    docs: true,
    fade: true,
    infinite: true,
    speed: 900,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    className: "slides",
  };
  return (
    <div className="slide">
      <Slider {...settings}>
        {photo.map((photo) => (
          <img
            style={({ marginLeft: "10px" }, { objectFit: "contain" })}
            className="img-stling"
            src={photo.url}
            alt=""
            height="300px"
            width="700px"
          />
        ))}
      </Slider>
    </div>
  );
};

export default Slides;
