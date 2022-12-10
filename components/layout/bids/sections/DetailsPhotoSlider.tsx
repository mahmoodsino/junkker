import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends Component {
  render() {
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
      <div
        className=" w-[800px] max-w-[100%] m-auto"
      >
        <Slider {...settings}>
          <div key={2}>
            <div className="w-[100%] h-fit justify-around flex md:flex-row sm:items-center sm:flex-col  bg-cover">
              <div className="sm:hidden md:block h-96">
                <img className="" src="/Rectangle.png" alt="" />
              </div>
            </div>
          </div>
          <div key={2}>
            <div className="w-[100%] h-fit justify-around flex md:flex-row sm:items-center sm:flex-col  bg-cover">
              <div className="sm:hidden md:block h-96">
                <img src="/Rectangle.png" alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
