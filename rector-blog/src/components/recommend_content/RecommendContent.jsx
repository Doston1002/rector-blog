import React, { useContext, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { CalendarIcon } from "../../assets/icons";
import { imgPrefix } from "../../context/provider";
import { newsActions, UsersContext } from "../../context";

const RecommendContent = ({
  title = "Namuna uchun sarlavha",
  inner,
  url,
  video,
  category,
  newsId,
  ownRoute,
}) => {
  const { t } = useTranslation();
  const { news } = useContext(UsersContext);

  useEffect(() => {
    newsActions.getNews(url);
  }, []);

  return (
    <div className="bg-[#F2F2F2] rounded-xl p-4 hover:cursor-pointer">
      {/* Title htmlFor see recommend */}
      {!inner && <h3 className="text-bold text-3xl mb-4">{title}</h3>}

      {/* Date and short info */}
      {news
        .filter((item) => item.category === category)
        .slice(0, 5)
        .map((item) => (
          <Link
            to={`/${i18next.language}/news/details/${category}/${item._id}`}
            key={item._id}
          >
            <div className="mb-4">
              <div className="flex justify-between gap-4">
                {video && (
                  <div className="relative w-1/2">
                    <LazyLoadImage
                      src={imgPrefix + item.photo}
                      alt={`Egamnazar`}
                      className={`img-lazy object-cover rounded-md`}
                      effect="blur" // opacity | black-and-white
                    />
                    <span className="glightbox_video">
                      <span className={`play-btn-inner`}></span>
                    </span>
                  </div>
                )}
                <div className={`${video ? "w-1/2" : "w-full"}`}>
                  <div className="flex items-center gap-2 ">
                    <CalendarIcon />
                    <span>{item.date}</span>
                  </div>
                  <p className="font-bold text-sm pb-4">
                    {t("RecommendContent.title", {
                      recommend_content_title: `${
                        item?.[`title_${i18next.language}`]
                      }`,
                    })}
                  </p>
                </div>
              </div>

              {!video && <hr className="border-1 border-gray-500" />}
            </div>
          </Link>
        ))}

      {/* See more button */}
      {!inner && (
        <Link
          to={ownRoute}
          className="rounded bg-[#F06D06] py-2 text-white text-bold w-full block text-center"
        >
          {t("RecommendContent.button")}
        </Link>
      )}
    </div>
  );
};

export default RecommendContent;
