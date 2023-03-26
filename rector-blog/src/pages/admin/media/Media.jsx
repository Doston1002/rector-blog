import React, { useContext, useEffect, useState, useRef } from "react";
import copy from "copy-to-clipboard";

import { FormHeader, SkeletonPost } from "../../../components";
import { UsersContext, smallActions } from "../../../context";
import { imgPrefix } from "../../../context/provider";

const Media = () => {
  const link = useRef(null);
  const { media, isLoading, error, alert } = useContext(UsersContext);
  const [status, setStatus] = useState("read");

  // FETCHED CONTENT
  let fetchedContent = isLoading ? (
    [...Array(10).keys()].map((i) => <SkeletonPost key={i} />)
  ) : error ? (
    <h1 className="text-3xl text-center p-10 bg-gray-100">
      Malumotlar topilmadi
    </h1>
  ) : (
    <div className="w-full flex flex-wrap gap-y-44 gap-x-4">
      {media.map((item) => (
        <FileDisplay file={item} key={item._id} />
      ))}
    </div>
  );
  // FETCHED CONTENT

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
        <div className="flex flex-col">
          <label htmlFor="name">Media uchun biror nom</label>
          <input
            className=" rounded-lg p-2 border border-slate-600"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col w-1/2">
            <label htmlFor="link">Biror file tanlang</label>
            <input
              className=" w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black border border-gray-500 rounded cursor-pointer"
              type="file"
              multiple
              id="link"
              name="link"
              ref={link}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="date">Vaqt kiriting</label>
            <input
              className=" rounded p-1.5 border border-slate-600"
              type="date"
              multiple
              id="date"
              name="date"
            />
          </div>
        </div>
        <button className="p-2 border border-gray-700 rounded hover:bg-gray-800 hover:text-white w-full">
          Saqlash
        </button>
      </form>
    </>
  );
  //FORM HERE

  // ALL CONTENT HERE
  let content =
    status === "read" ? fetchedContent : status === "create" ? form : null;

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", e.target.name.value);
    for (let i = 0; i < link.current.files.length; i++) {
      formData.append("file", link.current.files[i]);
    }
    smallActions.addMedia(formData, "media/add");
  }
  useEffect(() => {
    smallActions.getMedia("media/get/all");
  }, [status]);
  return (
    <div>
      <FormHeader
        title="Media fayllar"
        event2="Qo'shish"
        handleEvent2={() => setStatus("create")}
        event1="Barchasi"
        handleEvent1={() => setStatus("read")}
      />
      {content}
    </div>
  );
};

function FileDisplay({ file }) {
  

  return (
    <div className="w-80 h-32">
      <img src={imgPrefix + file.link} alt={file.name} className="w-80 h-52" />
      <p className="bg-gray-100 p-2">{file.name}</p>
      <div className="flex justify-between w-full">
        <button
          className="py-2 px-4 bg-green-500 hover:bg-green-400 text-white text-sm"
          onClick={() => {
            copy(imgPrefix + file.link);
            alert("COPIED✔" + imgPrefix + file.link)
          }}
        >
          Havolani ko'chirish
        </button>{" "}
        <button
          className="py-2 px-4 bg-red-500  hover:bg-red-400 text-white text-sm"
          onClick={() => {
            const deleteConfirm = confirm("O'chirishni xoxlaysizmi? ⚡");
            deleteConfirm && smallActions.deleteMedia(file._id);
          }}
        >
          Faylni o'chirish
        </button>
      </div>
      <br />
    </div>
  );
}

export default Media;
