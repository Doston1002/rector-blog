import React from 'react'
import Rector from "../../../assets/images/Rector.png";
import './RectorBlog.css'
const RectorBlog = () => {
  return (
    <div className="blog-of-rector container lg:flex w-100 ">
        <div className="picture-of-rector  lg:relative lg:w-1/2 md-w-[100%]">
          <div className="layer-0"></div>
          <div className="layer-1"></div>
          <div className="layer-2">
            <img src={Rector} alt="rectorni rasmi" />
          </div>
        </div>
        <div className="note-of-rector lg:w-1/2 md-w-[100%]">
          <h3>
            "Ta'lim - bu dunyoni o'zgartirish uchun <br /> ishlatishingiz mumkin
            bo'lgan eng kuchli quroldir."
          </h3>

          <p>
            O'tmishda ko'p yillar davomida odamlar o'zlarining psixologik
            ehtiyojlarini qondirish orqali omon qolishgan. Bugungi kunda biz
            intellektual qobiliyatlar juda muhim bo'lgan davrda yashash
            sharafiga egamiz. Har qanday ma'lumotni barcha qiziquvchan onglar
            uchun osongina olish mumkin va texnologik evolyutsiya buning uchun
            doimo mavjud bo'lishni ta'minlaydi. Biroq, ma'lumot izlayotganlar va
            bilimga intilganlar o'rtasida aniq farq bor.
          </p>

          <p className="text-4xl">Usmonov Botir Shukurillayevich</p>

          <button>Rektor blogi</button>
        </div>
      </div>
  )
}

export default RectorBlog