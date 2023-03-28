import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import "./NewsCard.css";

import { CalendarIcon } from "../../assets/icons";

import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../assets/images/img-placeholder.png";

const ShortInfoCard = ({
  endpoint,
  category,
  img,
  dateProps,
  title,
  body,
  video,
  inner
}) => {
  const {t} = useTranslation()
  return (
    <Link to={`/${i18next.language}/news/details/${category}/${endpoint}`}>
      <div className={`flex rounded-xl ${inner ? "gap-5 sm:flex-row flex-col rounded-none p-4 shadow-md border border-blue-400 border-y-0 border-l-0 border-r-8" : "flex-col w-[100%] md:w-56 lg:w-72 xl:w-[380] 2xl:w-[430px]"}`}>
        <div className={`relative`}>
          <LazyLoadImage
            src={img}
            alt={`Image Alt`}
            className={`img-lazy ${inner ? "sm:w-60 sm:h-44 w-full h-auto" : "w-full h-full "} rounded-xl`}
            placeholderSrc={placeholder}
            effect="blur" // opacity | black-and-white
          />
          {video && (
            <span className="glightbox_video">
              <span className={`${inner ? "play-btn-inner" : "play-btn"}`} href="#"></span>
            </span>
          )}
        </div>
        <div className={`${inner ? "w-4/6" : ""}`}>
          <div className="flex items-center gap-2 ">
            <CalendarIcon />{" "}
            <span>{dateProps}</span>
          </div>
          <p className={`font-bold mt-2 ${inner ? "xl:text-xl lg:text-lg text-sm" : "news-title"} `}>
            {t("NewsCard.title", {news_card_title: title})}
          </p>
        </div>
        {}
      </div>
    </Link>
  );
};

export default ShortInfoCard;
