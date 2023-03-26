import { useState } from "react";

import "./FormHeader.css";

const FormHeader = (props) => {
  const {
    title = "sahifa nomi",
    event1,
    event2,
    event3,
    event4,
    handleEvent1,
    handleEvent2,
    handleEvent3,
    handleEvent4,
  } = props;
  const [active, setActive] = useState(1);
  return (
    <div className="form-header">
      <h2 className="text-3xl">{title}</h2>
      <div className="">
      { event1 !== undefined &&  <button className={`header-btn ${active === 1 ? "active-btn" : "hover:bg-gray-400"}`} onClick={() => handleEvent1 && (handleEvent1(), setActive(1))}>{event1}</button>}
      { event2 !== undefined &&  <button className={`header-btn ${active === 2 ? "active-btn" : "hover:bg-gray-400"}`} onClick={() => handleEvent2 && (handleEvent2(), setActive(2))}>{event2}</button>}
      { event3 !== undefined &&  <button className={`header-btn ${active === 3 ? "active-btn" : "hover:bg-gray-400"}`} onClick={() => handleEvent3 && (handleEvent3(), setActive(3))}>{event3}</button>}
      { event4 !== undefined &&  <button className={`header-btn ${active === 4 ? "active-btn" : "hover:bg-gray-400"}`} onClick={() => handleEvent4 && (handleEvent4(), setActive(4))}>{event4}</button>}
      </div>
    </div>
  );
};

export default FormHeader;
