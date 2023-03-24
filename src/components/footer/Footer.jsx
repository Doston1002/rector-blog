import React from "react";

import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../assets/images/logo.png";
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
   
  
    <footer className="bg-black w-full py-10">
      <div className="container mx-auto w-[90%] lg:block flex justify-between items-center max-md:flex-col">
     
        <div className="flex gap-4 items-end justify-between ">
          <div className="flex lg:flex-col flex-row-reverse my-auto lg:gap-[35px] gap-28 max-md:flex-col max-md:gap-10 max-md:items-center">
            <div className="flex lg:gap-4 gap-10 ">
              <FacebookIcon color="white" />
              <InstagramIcon color="white" />
              <YouTubeIcon color="white" />
              <TelegramIcon color="white" />
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon />
              <span className="text-white"> +998 71 244-79-17</span>
            </div>
          </div>
          
        

        <div className={` items-center justify-between font-bold my-5`}>
        <h3 className="text-2xl my-3 text-gray-50">Quick Links</h3>
        <NavLink className={`flex items-center my-2`} to="about-us"><LeftIcon /><span className="mx-3 text-gray-50">Rector haqida</span> </NavLink>
        <NavLink className={`flex items-center my-2`} to="products"> <LeftIcon/><span className="mx-3  text-gray-50">Yangiliklar</span> </NavLink>
        <NavLink className={`flex items-center my-2`} to="lidership"><LeftIcon/><span className="mx-3  text-gray-50">Ilmiy tadqiqotlar</span></NavLink>
        <NavLink className={`flex items-center my-2`} to="partners"> <LeftIcon/><span className="mx-3  text-gray-50">TKTI.uz</span></NavLink>

       
        
      </div>
      <div className={` items-center justify-between  font-bold`}>
        <h3 className="text-2xl my-3 text-gray-50">Contacts</h3>
        <div className={`flex items-center `}><a href="#" className="w-[40px] bg-amber-500 m-0  h-[40px] flex items-center my-2 "><span className="text-2xl flex items-center justify-center mx-auto">P</span> </a><span className="mx-4 text-gray-50"> +998 71 875 64 56</span></div>
          <div className={`flex items-center `}><a href="#" className="w-[40px] bg-amber-500 m-0  h-[40px] flex items-center my-2"><span className="text-2xl flex items-center justify-center mx-auto">E</span ></a> <span className="mx-4 text-gray-50"> Rector-blog.com</span></div>
          <div className={`flex items-center `}><a href="#" className="w-[40px] bg-amber-500 m-0  h-[40px] flex items-center my-2"><span className="text-2xl flex items-center justify-center mx-auto">O</span ></a> <span className="mx-4 text-gray-50"> Mon -Fri 9 am 6 pm</span></div>
          
       
       
        
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
