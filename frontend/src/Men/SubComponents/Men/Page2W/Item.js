import React from "react";
// import "../../../PageComponents/Men/page1.css";

function Item(props) {
  return (
    <div>
      <div className="relative">
        <div
          id="imgs"
          className="w-full flex overflow-scroll  snap-x snap-mandatory"
        >
          <img
            src={props.img}
            alt=""
            className="w-ull snap-start snap-always"
          />
          <img
            src={props.img2}
            alt=""
            className="w-ull snap-start snap-always"
          />
          <img
            src={props.img3}
            alt=""
            className="w-ull snap-start snap-always"
          />
          <img
            src={props.img4}
            alt=""
            className="w-ull snap-start snap-always"
          />
        </div>
        <span className="absolute bg-white/50 py-1 px-2.5 rounded-full top-3/4 left-1/2 -translate-x-1/2">
          +
        </span>
      </div>
 <div className="flex column justify-between">

 
      <p className=" text-[8px] md:text-[9px] lg:text-[9px] my-1 font-light truncate">
        {props.name}
      </p>
      <span className="  text-[8px] md:text-[9px] lg:text-[9px]  my-1 font-light">
        {props.price} EUR
      </span>
      </div>
    </div>
  );
}

export default Item;
