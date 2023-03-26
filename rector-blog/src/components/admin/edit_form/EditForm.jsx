import React, { useContext, useEffect } from "react";
import { Form, SkeletonPost } from "../..";
import { newsActions, UsersContext } from "../../../context";

const EditForm = ({ id, closeModal }) => {
  const { newById, isLoading, error, alert, modalClose } = useContext(UsersContext);
  useEffect(() => {
    newsActions.getNewById(id);
}, []);

if (modalClose) {closeModal()}

  let content = isLoading ? (
    [...Array(10).keys()].map((i) => <SkeletonPost key={i} />)
  ) : (
    <Form
      title={{
        uz: newById.title_uz,
        ru: newById.title_ru,
        en: newById.title_en,
      }}
      body={{ uz: newById.body_uz, ru: newById.body_ru, en: newById.body_en }}
      category={newById.category}
      date={newById.date}
      id={id}
    />
  );

  return (
    <div className="absolute top-0 left-0 z-50 h-screen w-screen bg-white p-10 overflow-y-scroll">
      <div className="container mx-auto w-[90%]">
        <button
          onClick={() => closeModal()}
          className="text-lg bg-gray-100 rounded-full w-10 h-10 float-right  hover:bg-gray-800 hover:text-white"
        >
          X
        </button>
        <br />
        <br />
        {content}
      </div>
    </div>
  );
};

export default EditForm;
