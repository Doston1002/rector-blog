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

}) => {
  const {t} = useTranslation()
  return (
    <Link to={`/${i18next.language}/news/details/${category}/${endpoint}`}>
      <div >
      
      </div>
      <div className={`lg:flex-col h-[300px] lg:justify-between rounded-xl   border border-red-900 `}>
        <div className={``}>
          
          <LazyLoadImage
            src={img}
            alt={`Image Alt`}
            className={``}
            placeholderSrc={placeholder}
            effect="blur" 
          />
          
        </div>
        <div className={``}>
          <div className="flex items-center gap-2 ">
            <CalendarIcon />{" "}
            <span>{dateProps}</span>
          </div >
          <p className={`font-bold mt-2`}>
            {t("NewsCard.title", {news_card_title: title})}
          </p>
        </div>
        {}
      </div>
    </Link>
  );
};

export default ShortInfoCard;
