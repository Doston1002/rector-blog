import React, { useContext, useEffect, useState } from "react";

import {
  EditForm,
  Form,
  FormHeader,
  SkeletonPost,
  Table,
} from "../../../components";
import { DeleteIcon, EditIcon } from "../../../assets/icons";

import { newsActions, UsersContext } from "../../../context";
const News = () => {
  const [status, setStatus] = useState("read");
  const [onEdit, setOnEdit] = useState("");
  const { news, isLoading, error, alert, modalClose } =
    useContext(UsersContext);

  function categoryChecker(category) {
    let categoryName = "";
    return (categoryName =
      category === "a"
        ? "So'ngi yangiliklar"
        : category === "b"
        ? "Dolzarb yangiliklar"
        : category === "c"
        ? "Foto yangiliklar"
        : "Video yangiliklar");
  }

  useEffect(() => {
    newsActions.getNews("news/all");
  }, [onEdit.open, status]);

  const analyseNameTableHead = [
    "T/r",
    "Yangilik nomi",
    "Kataegoriya",
    "Sanasi",
    "Amallar",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const renderBody = (item, index) => {
    return (
      <tr key={index} className="cursor-pointer hover:bg-gray-100">
        <td>{index + 1}</td>
        <td>{item.title_uz}</td>
        <td>{categoryChecker(item.category)}</td>
        <td>{item.date}</td>
        <td className="">
          <button
            className="mr-4 hover:scale-125"
            onClick={() => {
              setOnEdit({ open: true, id: item._id });
            }}
          >
            <EditIcon />
          </button>
          <button
            className="hover:scale-125"
            onClick={() => {
              const deleteConfirm = confirm(
                "Malumotni o'chirishga tayyormisiz? ⚠"
              );
              deleteConfirm && newsActions.deleteNew(item._id);
            }}
          >
            <span className="">
              <DeleteIcon />
            </span>
          </button>
        </td>
      </tr>
    );
  };

  let content = null;
  let fetchedContent = isLoading ? (
    [...Array(10).keys()].map((i) => <SkeletonPost key={i} />)
  ) : error ? (
    <h1 className="text-3xl text-center p-10 bg-gray-100">
      Malumotlar topilmadi
    </h1>
  ) : (
    <>
      {alert && (
        <div className="absolute bottom-4 left-4 py-4 px-10 bg-red-700 rounded-xl z-50 text-white transition-opacity">
          Malumot o'chirildi
        </div>
      )}
      {modalClose && (
        <div className="absolute bottom-4 left-4 py-4 px-10 bg-amber-500 rounded-xl z-50 text-white transition-opacity">
          Muvaffaqiyatli yangilindi
        </div>
      )}
      <Table
        headData={analyseNameTableHead}
        renderHead={renderHead}
        bodyData={news}
        renderBody={renderBody}
        limit={10}
      />
    </>
  );
  let formData = isLoading ? (
    [...Array(10).keys()].map((i) => <SkeletonPost key={i} />)
  ) : (
    <>
      {alert && (
        <div className="absolute bottom-4 left-4 py-4 px-10 bg-green-700 rounded-xl z-50 text-white transition-opacity">
          Malumotlar qo`shildi
        </div>
      )}
      <Form />
    </>
  );

  status === "read"
    ? (content = fetchedContent)
    : status === "create"
    ? (content = formData)
    : (content = null);
  return (
    <div>
      {onEdit.open && (
        <EditForm
          id={onEdit.id}
          closeModal={() => setOnEdit({ open: false })}
        />
      )}
      <FormHeader
        title="Yangiliklar"
        event2="Qo'shish"
        handleEvent2={() => setStatus("create")}
        event1="Barcha yangililar"
        handleEvent1={() => setStatus("read")}
      />
      {content}
    </div>
  );
};

export default News;
