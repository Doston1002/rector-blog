import { useContext, useEffect, useState } from "react";
import { Pdf } from "../../assets/icons";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import { Carusel } from "../../components/slider";
import ChartImg from '../../assets/images/chart.png'
import {

  NewsCard,
  // Researcher,
  RecommendContent,
} from "../../components";

import { imgPrefix } from "../../context/provider";
import { newsActions, UsersContext } from "../../context";
import RectorBlog from "./rectorBlog/RectorBlog";
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
      <div className="">
        <div className=" container mx-auto w-[90%] lg:flex gap-5 my-10  ">
          {news
            .filter((item) => item.category === "a")
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
          {t("Header.photoNews")}
        </h1>
        <hr />
        <div >
          <span >
          J-08 Asim Abbos, Muhammad Afzal, Jamil Husayn, Taqdir Ali, Hofiz Sayid
          Muhammad Bilol, Sungyoung Li va Seokxi Jeon, " Avtomatik izohlashni
          qo'llab-quvvatlash uchun leksik semantika bilan klinik kontseptsiyani
          olish ", Xalqaro atrof-muhitni o'rganish va jamoat salomatligi jurnali
          (SCIE, IF: 3.390) ), 18-jild, №20, 1-6-betlar, 2021  yil  </span> <sup className="flex justify-end px-40 "><Pdf/></sup><sub></sub>  
        </div>

        <hr />
        <br />
        <br />
        <div >
          <span >
          J-08 Asim Abbos, Muhammad Afzal, Jamil Husayn, Taqdir Ali, Hofiz Sayid
          Muhammad Bilol, Sungyoung Li va Seokxi Jeon, " Avtomatik izohlashni
          qo'llab-quvvatlash uchun leksik semantika bilan klinik kontseptsiyani
          olish ", Xalqaro atrof-muhitni o'rganish va jamoat salomatligi jurnali
          (SCIE, IF: 3.390) ), 18-jild, №20, 1-6-betlar, 2021  yil  </span> <sup className="flex justify-end px-40 "><Pdf/></sup><sub></sub>  
        </div>
      </div>
      {/* Image Gallary */}
    

      <Chartjs />

     
    </div>
  );
};

export default Home;
