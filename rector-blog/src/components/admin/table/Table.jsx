import React, { useEffect, useState } from "react";

import "./Table.css";
const Table = ({
  bodyData,
  headData,
  renderHead,
  renderBody,
  limit,
  search,
}) => {
  let initDataShow =
    limit && bodyData ? bodyData?.slice(0, Number(limit)) : bodyData;

  const [dataShow, setDataShow] = useState(initDataShow);

  let pages = 1;

  let range = [];

  if (limit !== undefined) {
    let page = Math.floor(bodyData.length / Number(limit));
    pages = bodyData.length % Number(limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const [currPage, setCurrPage] = useState(0);

  const selectPage = (page) => {
    const start = Number(limit) * page;
    const end = start + Number(limit);

    setDataShow(bodyData.slice(start, end));

    setCurrPage(page);
  };

  useEffect(() => {
    setDataShow((prevState) => (prevState = initDataShow));
  }, [bodyData]);

  return (
    <div>
      <div className="generic-table">
        <table>
          {headData && renderHead ? (
            <thead>
              <tr>{headData.map((item, index) => renderHead(item, index))}</tr>
            </thead>
          ) : null}
          {bodyData && renderBody ? (
            <tbody>
              {dataShow
                .filter((item) => {
                  if (search && search.length > 0) {
                    if (item.name_uz) {
                      return item.name_uz
                        .toLowerCase()
                        .includes(search.toLowerCase());
                    } else if (item.title_uz) {
                      return item.title_uz
                        .toLowerCase()
                        .includes(search.toLowerCase());
                    } else if (item.kod) {
                      return item.kod
                        .toLowerCase()
                        .includes(search.toLowerCase());
                    } else if (item.analyseName) {
                      return item.analyseName
                        .toLowerCase()
                        .includes(search.toLowerCase());
                    }
                  } else {
                    return item;
                  }
                })
                .map((item, index) => renderBody(item, index))}
            </tbody>
          ) : null}
        </table>
      </div>
      <div>
        {pages > 1 ? (
          <div className="table__pagination">
            {range.map((item, index) => (
              <div
                key={index}
                className={`table__pagination-item ${
                  currPage === index ? "active" : ""
                }`}
                onClick={() => selectPage(index)}
              >
                {item + 1}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Table;
