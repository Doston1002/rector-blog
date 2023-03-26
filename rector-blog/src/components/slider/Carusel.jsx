import { useContext, useEffect } from "react";
import Slider from "react-slick";

import "./Carusel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { UsersContext, smallActions } from "../../context";
import { imgPrefix } from "../../context/provider";

export const Carusel = () => {
  const { banner } = useContext(UsersContext);
  useEffect(() => {
    smallActions.getBanner("banner/get/all");
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mb-10">
      <Slider
        {...settings}
        autoplay={true}
        cssEase="linear"
        autoplaySpeed={2000}
        fade={true}
        pauseOnHover={false}
      >
        {/* <div>
          <img src={"http://localhost:4000/uploads/file-1679853233905.jpg"} alt="" className="w-full" />{" "}
        </div>
        <div>
          <img src={"http://localhost:4000/uploads/file-1679853233905.jpg"} alt="" className="w-full" />{" "}
        </div>
        <div>
          <img src={"http://localhost:4000/uploads/file-1679853233905.jpg"} alt="" className="w-full" />{" "}
        </div>
        <div>
          <img src={"http://localhost:4000/uploads/file-1679853233905.jpg"} alt="" className="w-full" />{" "}
        </div>
        <div>
          <img src={"http://localhost:4000/uploads/file-1679853233905.jpg"} alt="" className="w-full" />{" "}
        </div>
        <div>
          <img src={"http://localhost:4000/uploads/file-1679853233905.jpg"} alt="" className="w-full" />{" "}
        </div> */}
        {banner.map((item) => (
          <div>
            <img src={imgPrefix + item.banner_img} alt="img alt" className="w-full object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
