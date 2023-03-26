import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Pdf } from "../../assets/icons";


import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./Resercher.css";
const Researcher = () => {
  const { t } = useTranslation();
  return (
    
      <div className="container ">
        <div className=" lg:flex items-center mx-auto lg:justify-between w-[90%] my-5 ">
        <h3 className="font-semibold lg:text-3xl">{t("ResearcherOnline.statistics")}</h3>
       

       
        <Link  className="lg:text-2xl" to={`${i18next.language}/virtual-qabulxona`}>Murojaat yuborish</Link>
        
        </div>
        <div className=" mx-10 cursor-pointer bg-blue-700 rounded-lg h-36 flex items-center gap-3  justify-center">
          <div className="w-[50px] h-[50px] rounded border border-l-pink-50 flex justify-center items-center">
            <Pdf />
          </div>
          <div className="text-black ">
            <h4 className="text-3xl font-extrabold">8979 +</h4>
            <span> {t("ResearcherOnline.Received")} </span>
          </div>
        </div>
        <div className="lg:flex md-block md-w-full gap-5 cursor-pointer mx-10 my-4  lg:justify-between ">
          <div className="lg:w-1/3 rounded-lg mx-auto my-4  flex items-center gap-3 justify-center  bg-cyan-300 h-36">
            <div className="text-black mx-5 ">
              <h4 className="text-3xl font-extrabold">8979 +</h4>
              <span> {t("ResearcherOnline.Accepted")}</span>
            </div>

            <div className="progress blue">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">90%</div>
            </div>
          </div>
          <div className="lg:w-1/3 cursor-pointer rounded-lg mx-auto my-4  flex items-center gap-3 justify-center   bg-red-300 h-36 ">
            <div className="text-black mx-5 ">
              <h4 className="text-3xl font-extrabold">8979 +</h4>
              <span>{t("ResearcherOnline.Rejected")}</span>
            </div>
            <div className="progress pink">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">60%</div>
            </div>
           
          </div>
          <div className="lg:w-1/3 cursor-pointer rounded-lg mx-auto my-4  flex items-center gap-3 lg:justify-center    h-36 bg-red-100">
            <div className="text-black mx-5 ">
              <h4 className="text-3xl font-extrabold">8979 +</h4>
              <span>{t("ResearcherOnline.review")}</span>
            </div>
            <div className="progress yellow">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">75%</div>
            </div>
           
          </div>
        </div>
     
    </div>
  );
};

export default Researcher;
