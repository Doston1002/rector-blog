import { useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import { smallActions } from "../../context";

const Researcher = () => {
  const { t } = useTranslation();
  const [alert, setAlert] = useState(false)
  async function postData(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("tel", e.target.tel.value);
    formData.append("email", e.target.email.value);
    formData.append("type", e.target.type.value);
    formData.append("body", e.target.body.value);
    e.target.file.files[0] && formData.append("file", e.target.file.files[0]);

    smallActions.addApplication(formData, "application/add")

    confirm("Arizangiz yuborildi"); window.location.reload()
  }

  setTimeout(() => {setAlert(false)}, 5000)
  return (
    <div>
      <h1 className="container flex justify-center text-blue-800 mx-auto w-[80%] mt-10 font-semibold text-3xl">
        {t("Researcher.title")}
      </h1>
      <div className="container mx-auto w-[90%] my-10 lg:flex  lg:justify-between lg:gap-10 md:w-  transition-all">
        <div className="lg:w-[80%] lg:m-auto md:w-full sm:w-full  lg:relative ">
          <form className="contactForm" onSubmit={postData}>
            <label className=" ">
              <span className="  text-slate-900">{t("Researcher.FIO")}</span>
              <input
                name="name"
                type="text"
                required
                minLength={5}
                className="required  mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-md sm:text-sm focus:ring-1"
                placeholder={t("Researcher.FIO")}
              />
            </label>
            <div className="mx-auto w-[100%] my-5 lg:flex justify-between gap-10  transition-all">
              <label className="lg:w-1/2 md:w-full ">
                <span className="  text-slate-900">
                  {t("Researcher.phone")}
                </span>

                <input
                  name="tel"
                  type="tel"
                  minLength={7}
                  required
                  className="  mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="+(998) --- -- -- "
                />
              </label>

              <label className="lg:w-1/2">
                <span className="text-slate-900">{t("Researcher.email")}</span>

                <input
                  name="email"
                  type="email"
                  minLength={5}
                  required
                  className="  mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder={t("Researcher.email")}
                />
              </label>
            </div>

            <div>
              <span className="mt-5 text-slate-900">
                {t("Researcher.applicationType")}
              </span>
              <select
                name="type"
                required
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-md sm:text-sm focus:ring-1"
              >
                <option value={t("Researcher.applicationType1")}>{t("Researcher.applicationType1")}</option>
                <option value={t("Researcher.applicationType2")}>{t("Researcher.applicationType2")} </option>
                <option value={t("Researcher.applicationType3")}>{t("Researcher.applicationType3")}</option>
                <option value={t("Researcher.applicationType4")}>{t("Researcher.applicationType4")}</option>
                <option value={t("Researcher.applicationType5")}>{t("Researcher.applicationType5")}</option>
              </select>
            </div>

            <div>
              <span className=" mt-5  text-slate-900">
                {t("Researcher.applicationTypeDesc")}
              </span>
              <textarea
                name="body"
                cols="30"
                required
                rows="10"
                minLength={300}
                className="  mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-md sm:text-sm focus:ring-1"
                placeholder={t("Researcher.applicationTypeDesc")}
              ></textarea>
            </div>

            <label>
              <span className=" mt-5 text-slate-900">
                {t("Researcher.file-upload")}
              </span>

              <input
                name="file"
                type="file"
                className="  mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-md sm:text-sm focus:ring-1"
              />
            </label>

            <button 
              type="submit"
              className="rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white bg-sky-600 shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg  focus:border-sky-500 focus:ring-sky-500 active:bg-primary-800 active:shadow-lg float-right mt-2"
              onClick={() => setAlert(true)}
            >
              {t("Researcher.send")}
            </button>
          </form>
          {/* {
            alert && (<div className="bg-green-500 p-4 mt-12 text-white rounded">Arizangiz yuborildi xodimlar ko`rib chiqib siz bilan bog`lanishadi</div>)
          } */}
        </div>
      </div>
    </div>
  );
};

export default Researcher;
