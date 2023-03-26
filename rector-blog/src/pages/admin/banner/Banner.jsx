import React, { useContext, useEffect, useState } from "react";
import { FormHeader, SkeletonPost } from "../../../components";
import { smallActions, UsersContext } from "../../../context";
import { imgPrefix } from "../../../context/provider";

const Banner = () => {
  const { banner, alert, isLoading, error } = useContext(UsersContext);
  const [status, setStatus] = useState("read");
  let fetchedContent = isLoading ? (
    [...Array(10).keys()].map((i) => <SkeletonPost key={i} />)
  ) : error ? (
    <h1 className="text-3xl text-center p-10 bg-gray-100">
      Malumotlar topilmadi
    </h1>
  ) : (
    <div className="w-full flex flex-wrap gap-y-44 gap-x-4">
      {banner.map((item) => (
        <div className="w-80 h-32" key={item._id}>
          <img
            src={imgPrefix + item.banner_img}
            alt={item.title}
            className="w-80 h-52"
          />
          <p className="bg-gray-100 p-2">{item.title}</p>
          <button
            className="py-2 px-4 bg-red-500  hover:bg-red-400 text-white text-sm w-full"
            onClick={() => {
              const deleteConfirm = confirm("O'chirishni xoxlaysizmi? ⚡");
              deleteConfirm && smallActions.deleteBanner(item._id);
            }}
          >
            Faylni o'chirish
          </button>
          <br />
        </div>
      ))}
    </div>
  );

  // FORM HERE
  let form = isLoading ? (
    [...Array(10).keys()].map((i) => <SkeletonPost key={i} />)
  ) : (
    <>
      {alert && (
        <div className="absolute bottom-4 left-4 py-4 px-10 bg-green-700 rounded-xl z-50 text-white transition-opacity">
          Malumotlar qo`shildi
        </div>
      )}
      <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-10 items-center">
          <div className="flex flex-col w-1/2">
            <label htmlFor="title">Banner uchun biror nom</label>
            <input
              className=" rounded-lg p-2 border border-slate-600"
              type="text"
              id="title"
              name="title"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="banner_img">Bir dona rasm tanlang</label>
            <input
              className=" w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black border border-gray-500 rounded cursor-pointer"
              type="file"
              accept=""
              id="banner_img"
              name="banner_img"
            />
          </div>
        </div>
        <button
          type="submit"
          className="p-2 border border-gray-700 rounded hover:bg-gray-800 hover:text-white w-full"
        >
          Saqlash
        </button>
      </form>
    </>
  );
  //FORM HERE

  const content =
    status === "read" ? fetchedContent : status === "create" ? form : null;
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", e.target.title.value);
    formData.append("banner_img", e.target.banner_img.files[0]);
    if (banner.length > 10) null;
    else {
      smallActions.addBanner(formData, "banner/add");
    }
  }

  useEffect(() => {
    smallActions.getBanner("banner/get/all");
  }, [status]);
  return (
    <div>
      <FormHeader
        title="Slider rasmlari"
        event2="Qo'shish"
        handleEvent2={() => setStatus("create")}
        event1="Barchasi"
        handleEvent1={() => setStatus("read")}
      />
      {content}
    </div>
  );
};

export default Banner;
