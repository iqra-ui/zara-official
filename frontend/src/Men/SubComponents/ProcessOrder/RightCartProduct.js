import React from "react";
import Card from "react-bootstrap/Card";

function RightCartProduct(props) {
  return (
    <div className="">
      <img src={props.imgUrl1} className="" />
      <Card.ImgOverlay className="d-inline relative p-0 m-0">
        <span className="opacity-[0.5] bg-white rounded-[300px] absolute left-[60px] bottom-2  pl-2 pr-2 pt-0 pb-0 text-sm ">
          <p className="text-lg">+</p>
        </span>
      </Card.ImgOverlay>
      <p className="text-[10px] text-gray-600 text-left pt-2 ml-6 font-sans tracking-wide">
        {props.price}
      </p>
    </div>
  );
}

export default RightCartProduct;
