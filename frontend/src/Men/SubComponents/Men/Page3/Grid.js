import React from "react";

import { useNavigate } from "react-router-dom";
import Item from "../Page2W/Item";



function Grid({ data, filter }) {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-32 bg-white">
      <p className="my-4 text-xs font-light px-4">YOU MAY ALSO LIKE</p>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-6 px-4 md:px-0 ">
        {data
          ?.filter((d) => {
            return d.category === filter;
          })
          .map((d, i) => (
            <div
              key={i}
              onClick={() => {
                scrollToTop(); navigate(`/product/${d._id}`);
              }}
              className="top-0 scroll-smooth relative"
            >
              <Item
                img={`http://localhost:8080/` + d.images[0]}
                img2={`http://localhost:8080/` + d.images[1]}
                img3={`http://localhost:8080/` + d.images[2]}
                img4={`http://localhost:8080/` + d.images[3]}
                name={d.name}
                price={d.price}
              />{" "}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Grid;