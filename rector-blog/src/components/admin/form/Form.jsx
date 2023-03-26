import React, { useContext, useState } from "react";

import "./Form.css";

import { TextEditor } from "../..";
import { newsActions, UsersContext } from "../../../context";

const Form = ({ title, body, category, date, id }) => {
  const { isLoading, modalClose } = useContext(UsersContext);
  const [editor, setEditor] = useState({
    uz: body ? body.uz : "",
    ru: body ? body.ru : "",
    en: body ? body.en : "",
  });

  async function postData(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title_uz", e.target.title_uz.value);
    formData.append("title_ru", e.target.title_ru.value);
    formData.append("title_en", e.target.title_en.value);
    formData.append("body_uz", editor?.uz);
    formData.append("body_ru", editor?.ru);
    formData.append("body_en", editor?.en);
    formData.append("category", e.target.category.value);
    formData.append("photo", e.target.photo.files[0]);
    formData.append("date", e.target.date.value);
    if (id) {
      newsActions.editNews(id, formData);
    } else newsActions.addNews(formData, "news/add");
  }
  return (
    <form className="flex flex-col gap-10" onSubmit={postData}>
      <div className="flex flex-col">
        <label htmlFor="titleUz">Yangilik mavzusi UZB</label>
        <input
          required
          className=" rounded-lg p-2 border border-slate-600"
          type="text"
          name="title_uz"
          id="titleUz"
          defaultValue={title && title.uz}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="titleRu">Yangilik mavzusi RUS</label>
        <input
          required
          className=" rounded-lg p-2 border border-slate-600"
          type="text"
          name="title_ru"
          id="titleRu"
          defaultValue={title && title.ru}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="titleEn">Yangilik mavzusi ING</label>
        <input
          required
          className=" rounded-lg p-2 border border-slate-600"
          type="text"
          name="title_en"
          id="titleEn"
          defaultValue={title && title.en}
        />
      </div>

      <TextEditor
        title={{
          uz: "Yangilik haqida batafsil UZB",
          ru: "Yangilik haqida batafsil RUS",
          en: "Yangilik haqida batafsil ING",
        }}
        name={{ uz: "body_uz", ru: "body_ru", en: "body_en" }}
        value={{
          uz: editor.uz,
          ru: editor.ru,
          en: editor.en,
        }}
        handleValue={{
          uz: (e) => setEditor({ ...editor, uz: e }),
          ru: (e) => setEditor({ ...editor, ru: e }),
          en: (e) => setEditor({ ...editor, en: e }),
        }}
      />

      <div className="flex justify-between">
        <div className="flex flex-col">
          <label htmlFor="photo" className="mb-2">
            Yangilik mavzusi uchun poster
          </label>
          <input
            required
            type="file"
            name="photo"
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black border border-gray-500 rounded cursor-pointer"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="mb-2">
            Yangilik tipini yanlang
          </label>
          <select
            name="category"
            id="category"
            className="border border-gray-500 rounded p-2"
            defaultValue={category ? category : ""}
          >
            <option value="" hidden>
              ...
            </option>
            <option value="a">So`ngi yangiliklar</option>
            <option value="b">Dolzarb yangiliklar</option>
            <option value="c">Foto yangiliklar</option>
            <option value="d">Video yangiliklar</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="date" className="mb-2">
            Yangilik vaqtini kiriting
          </label>
          <input
            id="date"
            type="date"
            name="date"
            className="block border border-gray-500 rounded p-1"
            defaultValue={date ? date : null}
          />
        </div>
      </div>

      <button className="p-2 border border-gray-700 rounded hover:bg-gray-800 hover:text-white">
        Saqlash
      </button>
    </form>
  );
};

export default Form;
