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
      <h1 className="container mx-auto w-[90%] my-10 font-semibold text-3xl">{t("Header.lastNews")}</h1>
      <div className="container mx-auto w-[90%] flex justify-between gap-5 lg:flex-row flex-col">
        <div className="lg:w-9/12 w-full flex flex-col gap-5">
          {news
            .filter((item) => item.category === "a")
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
                title={t("NewsCard.title", {news_card_title: `${subItem?.[`title_${i18next.language}`]}`})}
              />
            ))}
        </div>
        <div className="lg:w-3/12 w-full">
          <RecommendContent inner={true} url={"news/all"} category={"a"} />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
