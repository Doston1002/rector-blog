import React, { useContext, useEffect, useState } from "react";

import { EditForm, FormHeader, SkeletonPost, Table } from "../../../components";
import { DeleteIcon, EditIcon } from "../../../assets/icons";

import { userActions, UsersContext } from "../../../context";
const News = () => {
  const { users, isLoading, error, alert } =
    useContext(UsersContext);

  useEffect(() => {
    userActions.getUsers("user/users");
  }, []);

  const analyseNameTableHead = [
    "T/r",
    "Ismi",
    "telefon raqami",
    "Paroli",
    "Amallar",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const renderBody = (item, index) => {
    return (
      <tr key={index} className="cursor-pointer hover:bg-gray-100">
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{item.phone}</td>
        <td>{item.password}</td>
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
              deleteConfirm && userActions.deleteUser(item._id);
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

      <Table
        headData={analyseNameTableHead}
        renderHead={renderHead}
        bodyData={users}
        renderBody={renderBody}
        limit={10}
      />
    </>
  );

  return (
    <div>
      <FormHeader title="Adminlar" />
      {fetchedContent}
    </div>
  );
};

export default News;
