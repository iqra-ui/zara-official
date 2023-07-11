import React from "react";
import Item from "../Men/Page2W/Item";
import { useNavigate } from "react-router-dom";

function Swimmer({ data, filter }) {
  const navigate= useNavigate();
  return (
    <div>
      <div class="flex mx-auto  pt-44 md:pt-48 md:px-16 lg:px-36 cursor-pointer">
        <div class="shrink  mx-auto " xs={12} md={12}>
          <img src="../../images/kids/swimmer/1.jpg" />
        </div>
      </div>

      <div className="grid  gap-3 md:gap-x-2 gap-y-5 grid-cols-2  md:grid-cols-3 lg:grid-cols-6 pt-20  md:pt-30 md:px-16 lg:px-30">
        {data
          ?.filter((d) => {
            return d.description === "RowS1";
          })
          .map((d, i) => (
            <div key={i}
            onClick={() => navigate(`/productK/${d._id}`)}
            >
              <Item
                img={`http://localhost:8080/` + d.images[0]}
                img2={`http://localhost:8080/` + d.images[1]}
                img3={`http://localhost:8080/` + d.images[2]}
                img4={`http://localhost:8080/` + d.images[3]}
                name={d.name}
                price={d.price}
              />
            </div>
          ))}
      </div>

      <div class="flex mx-auto  pt-10 md:pt-20 md:px-16 lg:px-36 cursor-pointer">
        <div class="shrink  mx-auto " xs={12} md={12}>
          <img src="../../images/kids/swimmer/2.jpg" />
        </div>
      </div>



      <div className="grid w-4/5 mb-20 mx-auto gap-3 md:gap-x-2 gap-y-5 grid-cols-2  md:grid-cols-2 lg:grid-cols-4 pt-20  md:pt-30 md:px-5">
        {data
          ?.filter((d) => {
            return d.description === "RowS2";
          })
          .map((d, i) => (
            <div key={i}
            onClick={() => navigate(`/productK/${d._id}`)}>
              <Item
                img={`http://localhost:8080/` + d.images[0]}
                img2={`http://localhost:8080/` + d.images[1]}
                img3={`http://localhost:8080/` + d.images[2]}
                img4={`http://localhost:8080/` + d.images[3]}
                name={d.name}
                price={d.price}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Swimmer;
