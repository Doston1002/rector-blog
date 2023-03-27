import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import {
  InstagramIcon,
  FacebookIcon,
  PhoneIcon,
  TelegramIcon,
  YouTubeIcon,
  LeftIcon,
} from "../../assets/icons";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className="bg-blue-800 w-full py-10">
        <div className="container mx-auto w-[90%]  flex  justify-between items-center max-md:flex-col">
          <div className="lg:flex  md:w-[100%] gap-4 items-end justify-between ">
            <div className="lg:flex lg:flex-col   flex-row-reverse my-auto lg:gap-[35px] gap-8  max-md:gap-10 max-md:items-center">
              <div className="flex lg:gap-4 gap-10 ">
                <Link to={``}>
            
                <FacebookIcon color="white" />
                </Link>
                <Link to={``}>
                <InstagramIcon color="white" />
                </Link>
                <Link to={``}>
                <YouTubeIcon color="white" />
                </Link>
                <Link to={``}>
                <TelegramIcon color="white" />
                </Link>
              </div>
              <div className="flex items-center gap-2 my-3 ">
                <PhoneIcon />
                <span className="text-white"> +998 71 244-79-17</span>
              </div>
            </div>

            <div className={` items-center justify-between font-bold my-5`}>
              <h3 className="text-2xl my-3 text-gray-50">Quick Links</h3>
              <NavLink className={`flex items-center my-2`} to="about-us">
                <LeftIcon />
                <span className="mx-3 text-gray-50">{t("Header.about")}</span>{" "}
              </NavLink>
              <NavLink className={`flex items-center my-2`}  to={`${i18next.language}/latest-news`}>
                {" "}
                <LeftIcon />
                <span className="mx-3  text-gray-50">{t("Header.news")}</span>{" "}
              </NavLink>
              <NavLink className={`flex items-center my-2`} to={`${i18next.language}/actual-news`}>
                <LeftIcon />
                <span className="mx-3  text-gray-50"> {t("Header.research")}</span>
              </NavLink>
              <NavLink className={`flex items-center my-2`}   to={`${i18next.language}/virtual-qabulxona`}>
                {" "}
                <LeftIcon />
                <span className="mx-3  text-gray-50"> {t("Header.reception")}</span>
              </NavLink>
            </div>
            <div className={` items-center justify-between  font-bold`}>
              <h3 className="text-2xl my-3 text-gray-50">Contacts</h3>
              <div className={`flex items-center `}>
                <a
                  href="#"
                  className="w-[40px] bg-amber-500 m-0  h-[40px] flex items-center my-2 "
                >
                  <span className="text-2xl flex items-center justify-center mx-auto">
                    P
                  </span>{" "}
                </a>
                <span className="mx-4 text-gray-50"> rector@gmail.com</span>
              </div>
              <div className={`flex items-center `}>
                <a
                  href="#"
                  className="w-[40px] bg-amber-500 m-0  h-[40px] flex items-center my-2"
                >
                  <span className="text-2xl flex items-center justify-center mx-auto">
                    E
                  </span>
                </a>{" "}
                <span className="mx-4 text-gray-50"> Rector-blog.com</span>
              </div>
              <div className={`flex items-center `}>
                <a
                  href="#"
                  className="w-[40px] bg-amber-500 m-0  h-[40px] flex items-center my-2"
                >
                  <span className="text-2xl flex items-center justify-center mx-auto">
                    O
                  </span>
                </a>{" "}
                <span className="mx-4 text-gray-50"> Mon -Fri 9 am 6 pm</span>
              </div>
            </div>
            <div className="my-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11984.900307199561!2d69.23442929282095!3d41.325718815889005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b737f1f4161%3A0xab6842dfd7a53fdf!2sToshkent%20kimyo-texnologiya%20instituti!5e0!3m2!1suz!2s!4v1652868919695!5m2!1suz!2s"
                allowFullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
