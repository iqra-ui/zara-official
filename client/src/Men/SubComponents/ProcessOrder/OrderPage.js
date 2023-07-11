import React, { useState, useEffect } from "react";
import NavigationProcess from "./NavigationProcess";
import NavigationBottom from "./NavigationBottom";
import { Container, Col, Row } from "react-bootstrap";
import RightGridSection  from "./RightGridSection";
import LeftGridSection from "./LeftGridSection";
import { useCart } from "../../../context/Cart";
import { BsBookmark } from "react-icons/bs";
import axios from "axios";


function OrderPage({props}) {
  const [cart1, setCart1] = useState("block");
  const [favourite, setFavourite] = useState("none");
  const [cart, setCart] = useCart();
  const [data1, setData1]= useState([]);

  useEffect(() => {
    async function getAllProduct() {
      const response = await axios.get(
        "http://localhost:8080/api/v1/product/get-product"
      );
      setData1(response.data.products);
    }
    getAllProduct();
  }, []);
 
  return (
    <div>
     <div className="w-75  top-[25%] fixed left-[5%] flex justify-left overflow-x-hidden">
        <span>
          <input
            type="radio"
            name="category"
            id="women"
            className="hidden peer "
            defaultChecked
            onClick={() => {
              setCart1("block");
              setFavourite("none");
            }}
          />
          <label
            htmlFor="women"
            className="cursor-pointer w-full peer-checked:font-medium relative before:absolute before:w-2/12 before:h-0.5 peer-checked:before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4 text-[12px] font-sans"
          >
            CART ( {cart?.length} )
          </label>
        </span>
        <span className="mx-4">
          <input
            type="radio"
            name="category"
            id="man"
            className="hidden peer"
            onClick={() => {
              setCart1("none");
              setFavourite("block");
            }}
          />
          <label
            htmlFor="man"
            className="cursor-pointer w-full peer-checked:font-medium relative before:absolute before:w-[10px] before:h-0.5 peer-checked:before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4 text-[12px] font-sans flex mt-1"
          >
            FAVOURITES
            <span className=" ml-1 text-[9px] mt-1">
              <BsBookmark />
            </span>
          </label>
        </span>
      </div>
    <p style={{display:cart}}></p>
      <Container fluid>
        <Row className="">
          <Col xs={12} sm={12} md={8} lg={8} xl={8} className=" pt-48">
            <LeftGridSection  />
          </Col>
          <Col
            
          
            md={3}
            lg={3}
            xl={3}
            className="md:h-[65%]   md:fixed sm:right-20 right-1  md:top-[25%]  md:pt-10"
          >
            <RightGridSection   
            data={data1}
            filter={"6470bfdf76880bcb9a668e42"} />
          </Col>
        </Row>
      </Container>

      <NavigationBottom />
    </div>
  );
}

export default OrderPage;
