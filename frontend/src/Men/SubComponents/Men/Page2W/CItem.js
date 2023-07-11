import React from "react";

function CItem(props) {
  return (
    <div className="mb-10">
      <img src={props.img} alt="" />
      <div className="flex w-full justify-between font-light text-[10px] py-1">
        <span className=" truncate">{props.name}</span>
        <span>{props.price} EUR</span>
      </div>
    </div>
  );
}

export default CItem;
