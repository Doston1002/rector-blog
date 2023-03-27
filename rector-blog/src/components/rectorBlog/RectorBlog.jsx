import React from "react";
import Rector from "../../assets/images/Rector.png";
import "./RectorBlog.css";
const RectorBlog = () => {
  return (
    <div className=" container w-[90%] mx-auto lg:flex items-center">
      <div className="lg:w-1/2   ">
       
        
          <div className="lg:w-[500px] mx-auto flex justify-center items-center ">
            <img
              src={Rector}
              className={`w-[90%] mx-auto  h-auto items-center my-8 `}
              alt="rectorni rasmi"
            />
       
        </div>
      </div>
      <div className="note-of-rector lg:w-1/2 md-w-[100%] ">
        <h3 className="">
          "Ta'lim - bu dunyoni o'zgartirish uchun <br /> ishlatishingiz mumkin
          bo'lgan eng kuchli quroldir."
        </h3>

        <p className="text-justify text-base ">
          O'tmishda ko'p yillar davomida odamlar o'zlarining psixologik
          ehtiyojlarini qondirish orqali omon qolishgan. Bugungi kunda biz
          intellektual qobiliyatlar juda muhim bo'lgan davrda yashash sharafiga
          egamiz. Har qanday ma'lumotni barcha qiziquvchan onglar uchun osongina
          olish mumkin va texnologik evolyutsiya buning uchun doimo mavjud
          bo'lishni ta'minlaydi. Biroq, ma'lumot izlayotganlar va bilimga
          intilganlar o'rtasida aniq farq bor.
        </p>

        <p className="text-2xl text-center ">Usmonov Botir Shukurillayevich</p>

        <button className="rounded-lg">Batafsil </button>
      </div>
    </div>
  );
};

export default RectorBlog;
