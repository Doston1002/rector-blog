import React from "react";
import Slider from "react-slick";

import "./Carusel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  VerticalLineIcon,
  YouTubeIcon,
} from "../../assets/icons";

import bgVideo from '../../assets/images/blog.jpg'
import bgVideo1 from '../../assets/images/blog2.jpg'
export const Carusel = () => {
  const arr = [1, 2, 3, 4, 5, 5, 6, 76, 7];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="h-full">
     
      <Slider
        {...settings}
        autoplay={true}
        cssEase="linear"
        autoplaySpeed={2000}
        fade={true}
        pauseOnHover={false}
      >
       <div className=" w-full">
          <img src={bgVideo} alt="" className="w-full h-[62rem]" />{" "}
          <div className="bannerInfo  mx-auto container w-[90%] flex items-center gap-10 box-border mt-24 xl:flex-row flex-col-reverse">
        {/* SOCIAL MEDIAS */}
        <div className="flex flex-row items-center gap-5 xl:flex-col">
          <VerticalLineIcon />
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
          <TelegramIcon />
          <VerticalLineIcon />
        </div>

        {/* INTRO TEXT */}
        <div className="2xl:w-[700px] " >
          <h1 className="2xl:text-5xl max-xl:text-3xl text-white mb-8 font-bold text-5xl">
           Botir Usmonov Shukrullayev
          </h1>
          <button className="rounded bg-[#F06D06] py-2 text-white text-bold px-4 block text-center">
            <a href="#">
          <p className="text-white text-xl">Virtual Qabulxona</p>

            </a>

          </button>
        </div>
      </div>
        </div>
        <div>
          <img src={bgVideo1} alt="" className="w-full h-[62rem]" />{" "}
          <div className="bannerInfo  mx-auto container w-[90%] flex items-center gap-10 box-border mt-24 xl:flex-row flex-col-reverse">
        {/* SOCIAL MEDIAS */}
        <div className="flex flex-row items-center gap-5 xl:flex-col">
          <VerticalLineIcon />
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
          <TelegramIcon />
          <VerticalLineIcon />
        </div>

        {/* INTRO TEXT */}
        <div className="2xl:w-[700px] " >
          <h1 className="2xl:text-5xl max-xl:text-3xl text-white mb-8 font-bold text-5xl">
           Botir Usmonov Shukrullayev
          </h1>
          <button className="rounded bg-[#F06D06] py-2 text-white text-bold px-4 block text-center">
            <a href="#">
          <p className="text-white text-xl">Virtual Qabulxona</p>

            </a>

          </button>
        </div>
      </div>
        </div>
    
        <div>
          <img src={bgVideo} alt="" className="w-full h-[62rem]" />{" "}
          <div className="bannerInfo  mx-auto container w-[90%] flex items-center gap-10 box-border mt-24 xl:flex-row flex-col-reverse">
        {/* SOCIAL MEDIAS */}
        <div className="flex flex-row items-center gap-5 xl:flex-col">
          <VerticalLineIcon />
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
          <TelegramIcon />
          <VerticalLineIcon />
        </div>

        {/* INTRO TEXT */}
        <div className="2xl:w-[700px] " >
          <h1 className="2xl:text-5xl max-xl:text-3xl text-white mb-8 font-bold text-5xl">
           Botir Usmonov Shukrullayev
          </h1>
          <button className="rounded bg-[#F06D06] py-2 text-white text-bold px-4 block text-center">
            <a href="#">
          <p className="text-white text-xl">Virtual Qabulxona</p>

            </a>

          </button>
        </div>
      </div>
        </div>
        <div>
          <img src={bgVideo1} alt="" className="w-full h-[62rem]" />{" "}
          <div className="bannerInfo  mx-auto container w-[90%] flex items-center gap-10 box-border mt-24 xl:flex-row flex-col-reverse">
        {/* SOCIAL MEDIAS */}
        <div className="flex flex-row items-center gap-5 xl:flex-col">
          <VerticalLineIcon />
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
          <TelegramIcon />
          <VerticalLineIcon />
        </div>

        {/* INTRO TEXT */}
        <div className="2xl:w-[700px] " >
          <h1 className="2xl:text-5xl max-xl:text-3xl text-white mb-8 font-bold text-5xl">
           Botir Usmonov Shukrullayev
          </h1>
          <button className="rounded bg-[#F06D06] py-2 text-white text-bold px-4 block text-center">
            <a href="#">
          <p className="text-white text-xl">Virtual Qabulxona</p>

            </a>

          </button>
        </div>
      </div>
        </div>
        
      </Slider>
    </div>
  );
};
