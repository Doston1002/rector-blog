import { useContext, useEffect } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const Reception = () => {
    const {t} = useTranslation()
  return (
    <div>
        <h1 className="container mx-auto w-[90%] mt-14 -mb-6 font-semibold text-3xl">
        {t("Header.news")}
      </h1>
      <div className="container mx-auto w-[90%] my-10 lg:flex  lg:justify-between lg:gap-10 md:w-  transition-all">
        <div className="lg:w-2/3 md:w-full  relative md:block hidden">
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
       
      </div>
    </div>
  )
}

export default Reception