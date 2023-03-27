import { useContext, useEffect, useState } from "react";
import { FormHeader } from "../../../components";

import { smallActions, UsersContext } from "../../../context";

const Application = () => {
  const { application, modalClose } = useContext(UsersContext);
  const [filteredApplications, setFilteredApplications] = useState(application)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    smallActions.getApplication("application/");
    setFilteredApplications(application)
  }, []);

  const time = (arg) => {
    const date = new Date(arg);
    const kun = String(date.getDate()).padStart(2, 0);
    const oy = String(date.getMonth() + 1).padStart(2, 0);
    const soat = String(date.getHours()).padStart(2,0);
    const minut = String(date.getMinutes()).padStart(2.0);
    const yil = date.getFullYear();
    return `${kun}.${oy}.${yil}`;
  };

  const bodyMaker = (obj, status) => {
    const formData = new FormData()
    formData.append("name", obj.name);
    formData.append("tel", obj.tel);
    formData.append("email", obj.email);
    formData.append("type", obj.type);
    formData.append("body", obj.body);
    formData.append("status", status);
    return formData
  }

  const filterByStatus = (status) => {
    if (status){
      const filteredArr = application.filter(item => item.status === status)
      setFilteredApplications(filteredArr)
    } else {
      setFilteredApplications(application)
    }
    console.log(status)
  }
  return (
    <div>
      {
        modal && (
          <div className="absolute top-0 left-0 h-full w-full backdrop-blur-sm z-10 p-10 flex justify-center items-center">
            <div className="relative w-[80%] mx-auto p-8 bg-white shadow-2xl z-20">
              <button className="absolute top-5 right-10" onClick={() => setModal(null)}>X</button>
              <p><b className="mr-2">Arizachi:</b><span>{modal.obj.name}</span></p>
              <p><b className="mr-2">Tel:</b><span>{modal.obj.tel}</span></p>
              <p><b className="mr-2">Email:</b><span>{modal.obj.email}</span></p>
              <p><b className="mr-2">Ariza turi:</b><span>{modal.obj.type}</span></p>
              <div>
                <b>Ariza mazmuni:</b> <br />
                <p dangerouslySetInnerHTML={{__html: modal.obj.body}}></p>
              </div>
              {
                modal.obj.status !== "pending" && 
                <p><b className="mr-2">Status:</b><span className={` p-0.5 rounded ${modal.obj.status === "accepted" ? "bg-green-400" : "bg-red-400"}`}>{modal.obj.status}</span></p>
              }
              <div className="flex gap-4 mt-8">
                {
                  modal.obj.status === "pending" ? (
                    <>
                      <button 
                        className="p-2 bg-green-400 rounded"
                        onClick={() => {
                          smallActions.editApplication(modal.obj._id, bodyMaker(modal.obj, "accepted"))
                          window.location.reload()
                        }}>Qabul qilish
                      </button>
                      <button 
                        className="p-2 bg-red-400 rounded"
                        onClick={() => {
                          smallActions.editApplication(modal.obj._id, bodyMaker(modal.obj, "rejected"))
                          window.location.reload()
                        }}>Rad etish
                      </button>
                    </>
                  ) : <p className="rounded py-5 px-10 text-center bg-gray-400 w-full">Bu ariza ko`rib chiqilgan</p>
                }
              </div>
            </div>
          </div>
        )
      }
      <FormHeader title="Arizalar" event1="Barchasi" event2="Qabul qilingan" event3="Rad editlgan" event4="Ko`rib chiqilayotgan"
      handleEvent1={() => filterByStatus()}
      handleEvent2={() => filterByStatus("accepted")} handleEvent3={() => filterByStatus("rejected")} handleEvent4={() => filterByStatus("pending")}/>
      <div className="flex flex-wrap gap-5">
      {
        filteredApplications.map(item => (
          <div key={item._id} className={`w-80 rounded-md p-4 border bg-gray-100 hover:shadow-xl`}>
            <div className="flex flex-col justify-between">
              <p><b className="mr-2">Arizachi:</b><span>{item.name}</span></p>
              <p><b className="mr-2">Turi:</b><span>{item.type}</span></p>
              <p><b className="mr-2">Tel:</b><span>{item.tel}</span></p>
              <p><b className="mr-2">Email:</b><span>{item.email}</span></p>
              <p><b className="mr-2">Status:</b><span className={`${item.status === "pending" ? "bg-orange-400" : item.status === "accepted" ? "bg-green-400" : "bg-red-400"} p-0.5 rounded`}>{item.status === "pending" ? "Kutmoqda" : item.status === "accepted" ? "Qabul qilingan" : "Rad etilgan"}</span></p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>{time(item.date)}</span>
              <button className="rounded p-2 bg-blue-700 text-white" onClick={() => setModal({open: true, obj: item})}>Ko`rish</button>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Application;
