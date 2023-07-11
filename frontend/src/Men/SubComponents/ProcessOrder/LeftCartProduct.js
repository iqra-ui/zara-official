import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { BiMinus, BiPlus } from "react-icons/bi";

function LeftCartProduct(props) {
  const [imgState, setImgState] = useState(props.imgUrl);
  const [counter, setCounter] = useState(1);
  return (
    <div className="relative py-0 ">
      <Card
        className=" rounded-none border-none border-0"
        style={{ borderRadius: 0 }}
      >
        <Card.Img
          variant="top"
          src={imgState}
          className="cursor-pointer"
          style={{ borderRadius: 0 }}
        />

        <Card.Body className="p-0 m-0">
          <Card.Text className=" text-[10px] text-gray-600 text-left cursor-pointer pt-2 m-0 font-sans tracking-wide">
            {props.title}
          </Card.Text>
          <Card.Text className=" text-[10px] text-gray-600 text-left pt-2 m-0 font-sans tracking-wide">
            {props.price}
          </Card.Text>
          <Card.Text className=" text-[10px] text-gray-600 tracking-wide  pt-2 m-0 absolute right-0 bottom-6">
            {props.desc}
          </Card.Text>
          <Card.Text className=" text-[10px] text-gray-600 text-left pt-2 m-0 font-sans tracking-wide flex justify-items-center">
            <button className="text-xl pr-3 ">
              <BiMinus
                className="text-gray-400"
                onclick={() => {
                  setCounter(counter - 1);
                }}
              />
            </button>
            <span className="text-xs">{counter} </span>
            <button
              className="text-xl pl-3 "
              onclick={() => {
                setCounter(counter + 1);
              }}
            >
              <BiPlus className="text-gray-400" />
            </button>
          </Card.Text>
          <Card.Text className=" text-[10px] text-gray-600 tracking-wide cursor-pointer  pt-2 m-0 absolute right-0 bottom-0">
            {props.action}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LeftCartProduct;
