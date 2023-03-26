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
import Chartjs from "./Chartjs";

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
        {t("Header.actualNews")}
      </h1>
      <div className="container mx-auto w-[90%] flex justify-between gap-5 my-10 lg:flex-row flex-col">
        <div className="lg:w-9/12 w-full flex flex-col gap-5 ">
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
        <div className="lg:w-3/12 w-full">
          <RecommendContent
            title={t("Header.actualNews")}
            inner={false}
            url={"news/all"}
            category={"a"}
            ownRoute={`/${i18next.language}/latest-news`}
          />
        </div>
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
    

      {/* Video News */}
      <h1 className="container mx-auto w-[90%] mt-14 -mb-6 font-semibold text-3xl">
        Virtual Qabulxona
      </h1>

      <div className="container mx-auto w-[90%] my-10 flex justify-between gap-10  transition-all">
        <div className="w-2/3  relative md:block hidden ">
          <form className="contactForm ">
            <label className="block ">
              <span className="block  text-slate-900">F.I.O</span>

              <input
                type="text"
                required
                className="required  mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="F.I.O."
              />
            </label>
            <div className="mx-auto w-[100%] my-5 flex justify-between gap-10  transition-all">
              <label className="block  w-1/2 ">
                <span className="block  text-slate-900">Telefon raqam</span>

                <input
                  type="number"
                  required
                  className="  mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="+(998) --- -- -- "
                />
              </label>

              <label className="block  w-1/2">
                <span className="block  text-slate-900">Elektron pochta</span>

                <input
                  type="email"
                  required
                  className="  mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Elektron pochta"
                />
              </label>
            </div>

            <label className="block ">
              <span className="block  mt-5 text-slate-900">Murojaat turi</span>
              <select
                name=""
                id=""
                required
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              >
                <option value="">Murojaat</option>
                <option value="">Shikoyat </option>
                <option value="">Talabnoma</option>
                <option value="">Rahbariyatning shaxsiy qabuliga yozuv</option>
                <option value="">Sayt ma’muriyatiga murojaat</option>
              </select>
              <span className="block mt-5  text-slate-900">Username</span>

              <textarea
                cols="30"
                required
                rows="10"
                className="  mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="F.I.O."
              ></textarea>
            </label>

            <label className="block ">
              <span className="block mt-5 text-slate-900">Username</span>

              <input
                type="file"
                className="  mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="F.I.O."
              />
            </label>

            <button
              type="submit"
              className="rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white bg-sky-600 shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg  focus:border-sky-500 focus:ring-sky-500 active:bg-primary-800 active:shadow-lg"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Yuborish
            </button>
          </form>
        </div>
        <div className=" md:w-1/3 w-full h-[580px] ">
          <div>
            <Chartjs />
              {/* <img src={ChartImg} alt="" width={"600"} height={"20"} className="mx-4 my-6" /> */}
            
          </div>
        </div>
      </div>
      {/* Video News */}
    </div>
  );
};

export default Home;
