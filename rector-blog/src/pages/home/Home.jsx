import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Pdf } from "../../assets/icons";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import { Carusel } from "../../components/slider";
import ChartImg from "../../assets/images/chart.png";
import {
  NewsCard,
  
  RecommendContent,
} from "../../components";

import { imgPrefix } from "../../context/provider";
import { newsActions, smallActions, UsersContext } from "../../context";
import RectorBlog from "../../components/rectorBlog/RectorBlog";
import Chart from "../../components/chart/Chart";
import Chartjs from "../../components/researcher/Researcher";

function Accordion({ title, content, isActive, onClick }) {
  const [open, setOpen] = useState(isActive);

  const handleClick = () => {
    setOpen(!open);
    onClick();
  };
}

const Home = () => {
  const { t } = useTranslation();
  const { news, application } = useContext(UsersContext);
  const [alert, setAlert] = useState(localStorage.getItem("alert"));

  const [activeAccordion, setActiveAccordion] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? -1 : index);
  };

  useEffect(() => {
    newsActions.getNews("news/all");
    smallActions.getApplication("application/");
    localStorage.setItem("alert", true);
  }, []);

  return (
    <div>
      <LazyLoadComponent>
        <Carusel />
      </LazyLoadComponent>

   
      <div className="bg-[#F2F2F2]">
        <div className="container mx-auto w-[100%] my-10 flex xl:flex-row flex-col gap-10">
          <RectorBlog />
        </div>
      </div>
   
      <div id="news">
      <div className="container w-[90%] mx-auto flex items-center justify-between my-5 ">
        <h3 className="font-semibold lg:text-3xl md:text-2xl sm:text-xl ">
        {t("Header.news")}
        </h3>

        <Link
          className="lg:text-2xl text-blue-700 cursor-pointer"
          to={`${i18next.language}/latest-news`}
        >
          Barchasini ko'rish
        </Link>
      </div>
        <div className="container mx-auto w-[90%]  gap-5 my-10 lg:flex-row md:flex-col md:w-[100%]">
          <div className="container  mx-auto w-[90%]   lg:flex md:block md:my-3 flex-row gap-5 ">
            {news
              .filter((item) => item.category === "a")
              .slice(0, 3)
              .map((subItem) => (
                <NewsCard
                  key={subItem._id}
                  id={subItem}
                  video={false}
                  inner={false}
                  endpoint={subItem._id}
                  category={subItem.category}
                  dateProps={subItem.date}
                  img={imgPrefix + subItem.photo}
                  title={t("NewsCard.title", {
                    news_card_title: `${
                      subItem?.[`title_${i18next.language}`]
                    }`,
                  })}
                />
              ))}
          </div>
         
        </div>
      </div>
   
      <div className="container mx-auto w-[90%] my-10">
      <div className=" mx-auto flex items-center justify-between my-5 ">
        <h3 className="font-semibold lg:text-3xl md:text-2xl sm:text-xl ">
        {t("Header.research")}
        </h3>

        <Link
          className="lg:text-2xl text-blue-700 cursor-pointer"
          to={`${i18next.language}/actual-news`}
        >
          Barchasini ko'rish
        </Link>
      </div>
        <div className=" w-full flex flex-col gap-5 ">
          {news
            .filter((item) => item.category === "b")
            .slice(0, 3)
            .map((subItem) => (
              <NewsCard
                key={subItem._id}
                id={subItem}
                video={false}
                inner={true}
                endpoint={subItem._id}
                category={subItem.category}
                dateProps={subItem.date}
                img={imgPrefix + subItem.photo}
                title={t("NewsCard.title", {
                  news_card_title: `${subItem?.[`title_${i18next.language}`]}`,
                })}
              />
            ))}
        </div>
      </div>
    

      <Chartjs />
    </div>
  );
};

export default Home;
