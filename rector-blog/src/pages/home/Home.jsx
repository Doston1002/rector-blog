import { useContext, useEffect, useState } from "react";
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
  // Researcher,
  RecommendContent,
} from "../../components";

import { imgPrefix } from "../../context/provider";
import { newsActions, UsersContext } from "../../context";
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
  const { news } = useContext(UsersContext);
  const [alert, setAlert] = useState(localStorage.getItem("alert"));

  const [activeAccordion, setActiveAccordion] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? -1 : index);
  };

  useEffect(() => {
    newsActions.getNews("news/all");
    localStorage.setItem("alert", true);
  }, []);

  return (
    <div>
      <LazyLoadComponent>
        <Carusel />
      </LazyLoadComponent>

      {/* About Me */}
      <div className="bg-[#F2F2F2]">
        <div className="container mx-auto w-[100%] my-10 flex xl:flex-row flex-col gap-10">
          <RectorBlog />
        </div>
      </div>
      {/* About Me */}

      {/* Latest News */}
      <div id="news">
        <h1 className="container mx-auto w-[90%] mt-14 -mb-6 font-semibold text-3xl">
          {t("Header.news")}
        </h1>
        <div className="container mx-auto w-[90%]  gap-5 my-10 lg:flex-row flex-col">
          <div className=" w-full flex flex-row gap-5 ">
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
          {/* <div className="lg:w-3/12 w-full">
          <RecommendContent
            title={t("Header.news")}
            inner={false}
            url={"news/all"}
            category={"a"}
            ownRoute={`/${i18next.language}/latest-news`}
          />
        </div> */}
        </div>
      </div>
      {/* Latest News */}

      {/* Image Gallary */}
      <div className="container mx-auto w-[90%] my-10">
        <h1 className=" mt-14 mb-4 font-semibold text-3xl">
          {t("Header.research")}
        </h1>
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
      {/* Image Gallary */}

      <Chartjs />
    </div>
  );
};

export default Home;
