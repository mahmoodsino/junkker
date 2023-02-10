import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImagesType from "../../helper/type/live-bids-types/ImagesType";

interface Props {
  images: ImagesType[];
}

const DetailsPhotoSlider = ({ images }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    rows: 1,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "button__bar",
  };

  return (
    <div className=" w-[800px] max-w-[100%] m-auto">
      <Slider {...settings}>
        {images.map((img, i) => {
          return (
            <div key={i}>
              <div className="w-[100%] h-fit justify-around flex md:flex-row sm:items-center sm:flex-col  bg-cover">
                <div className="sm:hidden md:block h-96">
                  <img className="" src={img.path} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default DetailsPhotoSlider;
