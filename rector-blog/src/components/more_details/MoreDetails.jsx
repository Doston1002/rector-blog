import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { RecommendContent, SkeletonPost } from "..";
import { CalendarIcon } from "../../assets/icons";
import { newsActions, UsersContext } from "../../context";

const MoreDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const all = useParams();
  const navigate = useNavigate();
  const { newById, error, isLoading } = useContext(UsersContext);

  useEffect(() => {
    newsActions.getNewById(all?.id);
    if (error) {
      navigate("/404");
    }
  }, [id]);

  return (
    <div className=" container mx-auto w-[90%] flex justify-between gap-5 lg:flex-row flex-col py-10">
       <div className="lg:w-9/12 w-full">
        <div className="lg:w-9/12 w-full flex flex-wrap gap-5">
          <CalendarIcon inner={true} />{" "}
          <span className="font-bold">{newById.date}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">
          {t("MoreDetails.title", { more_details_title: `${newById?.[`title_${i18next.language}`]}` })}
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: t("MoreDetails.body", {
              more_details_body: `${newById?.[`body_${i18next.language}`]}`,
            }),
          }}
        />
      </div>
      <div className="lg:w-3/12 w-full">
        <RecommendContent
          inner={true}
          url={"news/all"}
          category={all?.category}
        />
      </div>
    </div>
  );
};

export default MoreDetails;
