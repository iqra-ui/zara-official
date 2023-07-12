import React from "react";
import Item from "../Men/Page2W/Item";
import { useNavigate } from "react-router-dom";

function Boy({ data, filter }) {
  const navigate= useNavigate();
  return (
    <div>
      <div class="flex mx-auto w-4/5 pt-44 md:pt-48 md:px-16 lg:px-36 cursor-pointer">
        <div class="  mx-auto " xs={12} md={12}>
          {data
            ?.filter((d) => {
              return d.description === "BC1";
            })
            .map((d, i) => (
              <div
                key={i}
                className="  md:pt-30 md:px-16 lg:px-36 cursor-pointer"
              >
                <Item
                  img={`https://zara-hof3.onrender.com/` + d.images[0]}
                  img2={`https://zara-hof3.onrender.com/` + d.images[1]}
                  img3={`https://zara-hof3.onrender.com/` + d.images[2]}
                  img4={`https://zara-hof3.onrender.com/` + d.images[3]}
                  name={d.name}
                  price={d.price}
                />
              </div>
            ))}
          {/* <img src="../../images/kids/newBorn/1.jpg" /> */}
        </div>
      </div>

      <div className="grid w-full  gap-3 md:gap-x-2 gap-y-5 grid-cols-2  md:grid-cols-3 lg:grid-cols-6 pt-20  md:pt-30 md:px-16 lg:px-36">
        {data
          ?.filter((d) => {
            return d.description === "BR1";
          })
          .map((d, i) => (
            <div key={i}
            onClick={() => navigate(`/productK/${d._id}`)}>
              <Item
                img={`https://zara-hof3.onrender.com/` + d.images[0]}
                img2={`https://zara-hof3.onrender.com/` + d.images[1]}
                img3={`https://zara-hof3.onrender.com/` + d.images[2]}
                img4={`https://zara-hof3.onrender.com/` + d.images[3]}
                name={d.name}
                price={d.price}
              />
            </div>
          ))}
      </div>


      <div className="grid w-full gap-3 md:gap-x-2 gap-y-5 grid-cols-2  md:grid-cols-3 lg:grid-cols-6 pt-10  md:pt-10 md:px-16 lg:px-36">
        {data
          ?.filter((d) => {
            return d.description === "BR2";
          })
          .map((d, i) => (
            <div key={i}
            onClick={() => navigate(`/productK/${d._id}`)}>
              <Item
                img={`https://zara-hof3.onrender.com/` + d.images[0]}
                img2={`https://zara-hof3.onrender.com/` + d.images[1]}
                img3={`https://zara-hof3.onrender.com/` + d.images[2]}
                img4={`https://zara-hof3.onrender.com/` + d.images[3]}
                name={d.name}
                price={d.price}
              />
            </div>
          ))}
      </div>


      <div class="flex mx-auto w-2/3 pt-10 md:pt-20 md:px-16 lg:px-36 cursor-pointer">
        <div class="  mx-auto " xs={12} md={12}>
          {data
            ?.filter((d) => {
              return d.description === "BC2";
            })
            .map((d, i) => (
              <div
                key={i}
                className="  md:pt-30 md:px-16 lg:px-36 cursor-pointer"
              >
                <Item
                  img={`https://zara-hof3.onrender.com/` + d.images[0]}
                  img2={`https://zara-hof3.onrender.com/` + d.images[1]}
                  img3={`https://zara-hof3.onrender.com/` + d.images[2]}
                  img4={`https://zara-hof3.onrender.com/` + d.images[3]}
                  
                  name={d.name}
                  price={d.price}
                />
              </div>
            ))}
          {/* <img src="../../images/kids/newBorn/1.jpg" /> */}
        </div>
      </div>
    </div>
  );
}

export default Boy;
