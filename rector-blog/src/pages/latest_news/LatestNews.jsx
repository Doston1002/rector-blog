import { useContext, useEffect } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import { NewsCard, RecommendContent } from "../../components";

import { imgPrefix } from "../../context/provider";
import { newsActions, UsersContext } from "../../context";


const LatestNews = () => {
  const {t} = useTranslation()
  const {news} = useContext(UsersContext)

  useEffect(() => {
    newsActions.getNews("news/all")
  }, []);

  return (
    <div className="w-full">
      <h1 className="container mx-auto w-[90%] my-10 font-semibold text-3xl text-center">{t("Header.news")}</h1>
      <div className="container mx-auto w-[90%]  gap-5 my-10 lg:flex-row  ">
        <div className=" lg:flex  md:my-3 lg:flex-row gap-5  flex-wrap ">
          {news
            .filter((item) => item.category === "a")
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
                title={t("NewsCard.title", {news_card_title: `${subItem?.[`title_${i18next.language}`]}`})}
              />
            ))}
        </div>
        
      </div>
    </div>
  );
};

export default LatestNews;
