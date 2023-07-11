// import React from 'react'
import React, {  useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BiMinus, BiPlus } from "react-icons/bi";

import { Link, useParams } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";

import Navbar from "react-bootstrap/Navbar";
import { useCart } from "../../../context/Cart";


function LeftGridSection() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useCart();
  const [cart1, setCart1] = useState("block");
  const [favourite, setFavourite] = useState("none");
  const [c, setC] = useState([]);


  const handleDec = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };
  const handleInc = () => {
    quantity < 1 ? setQuantity(1) : setQuantity(quantity + 1);
  };

  // //total
  // const totalPrice=()=>{
  //   try{
  //     let total= 0;
  //     cart?.map((p)=>{
  //       total += quantity* p.price;

  //     })
  //     return total.toLocaleString("EUR", {
  //       style:"currency",
  //       currency:"EUR",
  //     })
  //   }catch(error){
  //     console.log(error)
  //   }
  // };

  //chnge hndle
  const handleChange = ( d) => {
    // console.log(p,d)
    const ind = cart.indexOf(d);
    const arr = cart;
    arr[ind].quantity += d;
    if (arr[ind].quantity === 0) arr[ind].quantity = 1;
    setC([...arr]);
  };

  //delete item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="md:mt-10 mt-20 ">


      <Container  className=""> 
        <Row className="pb-16">
          {cart?.map((p, index) => (
            <div className="w-[350px]  my-2   ml-16 md:ml-0">
             
              <div className="">
                <img
                  src={`http://localhost:8080/` + p.images[0]}
                  className=""
                  alt={p.name}
                />
              </div>
              <div>
                <div>
                
                  <p className="text-[10px] hover:underline  text-gray-600 cursor-pointer underline-offset-2 decoration-1">
                    {p.name}
                  </p>
                </div>
                <div className=" flex justify-between">
                  <p className="text-gray-600 text-[10px]">{p.price} EUR</p>
                  <p className="text-gray-600 text-[10px]">
                    EU M / US M | BROWN / ECRU
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600 text-[10px] flex items-center">
                    <button className="text-base pr-3 ">
                      <p className="text-gray-400" onClick={() => handleChange( p, -1)}>-</p>
                    </button>
                    <span className="text-xs">{quantity}</span>
                    <button className="text-base pl-3 ">
                      <p className="text-gray-400" onClick={() => handleChange( p,+1)} >+</p>
                    </button>
                  </p>
                  <button
                    className=" text-gray-600 text-xs cursor-pointer"
                    onClick={() => removeCartItem(p._id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Row>
        {/* <div className="">
          <Navbar expand="lg" fixed="bottom" className="bg-white z-20 pt-3">
            <Container fluid className=" ">
              <div className="">
                <div className="flex column ">
                  <span className=" font-medium text-[12px] ml-[1250px]">
                    TOTAL
                  </span>
                  <span className="font-medium text-[12px] ml-8">
                    {totalPrice()}
                  </span>
                  <button className="px-7 py-2 mx-6 bg-black hover:bg-black text-white">
                  <Link to="/checkOut" className="hover:text-white"> CONTINUE</Link> 
                  </button>
                </div>
              </div>
            </Container>
          </Navbar>
        </div> */}
       
      </Container>
    </div>
  );
}

export default LeftGridSection;