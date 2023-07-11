import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useCart } from "../../../context/Cart";

function NavigationBottom() {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useCart();
 
   //total
   const totalPrice=()=>{
    try{
      let total= 0;
      cart?.map((p)=>{
        total += quantity* p.price;

      })
      return total.toLocaleString("EUR", {
        style:"currency",
        currency:"EUR",
      })
    }catch(error){
      console.log(error)
    }
  };
  return (
    <div>

      <div>
      <div className="">
        {/* <Navbar expand="lg"  fixed="bottom" bg="white" className=" z-20  w-full   ">
          <Container  className="">
            <div className="">
              <div className="flex justify-end container-fluid justify-content flex-end ">
                <span className=" font-bold text-[12px]" >
                  TOTAL
                </span>
                <span className="font-bold text-[12px] ml-8"> {totalPrice()} EUR</span>
                <button className="px-7 py-2 mx-6 bg-black hover:bg-black text-white">
                  CONTINUE
                </button>
              </div>
            </div>
          </Container>
        </Navbar> */}
        <nav className="bg-white z-20 pt-3 navbar navbar-expand-lg navbar-light fixed-bottom">
        <div class=" flex justify-end container-fluid"
         style={{display: "flex", justifyContent:"flex-end"}}
         
         ><div class="flex column">
          <span class=" font-medium text-[12px] px-2">TOTAL </span>
          <span class="font-medium text-[12px] px-2">{totalPrice()} EUR</span>
          <button class="px-6 py-2 mx-6 bg-black hover:bg-black text-white">
            <a class="hover:text-white" href="/checkOut"> CONTINUE</a>
            </button>
            </div>
        </div>
        </nav>
      </div>
    </div>
    </div>
  );
}

export default NavigationBottom;
