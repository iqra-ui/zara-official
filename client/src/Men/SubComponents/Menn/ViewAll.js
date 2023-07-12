import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "../Men/Page2W/Item";
import { Link, Outlet, useNavigate } from "react-router-dom";

function ViewAll() {
  const navigate = useNavigate();
  return (
    <div>
      {/* 1 large img */}

      <div
        class="flex mx-auto  pt-44 md:pt-48 md:px-16 lg:px-36 cursor-pointer"
        onClick={() => navigate(`/men/dresses`)}
      >
        <div class="shrink  mx-auto " xs={12} md={12}>
          <Item
            img="../images/men/L1.jpeg"
            name="BLUE CONTRAST EMBROIDERY"
            price="39.95"
          />
        </div>
      </div>

      {/* 1 small img */}
      <div
        className="flex justify-center shrink  pt-20 cursor-pointer"
        onClick={() => navigate(`/men/dresses`)}
      >
        <img src={"../images/men/MenLarge/1.jpg"} />
      </div>

      {/* 2 imges */}
      <div>
        <Container className="items-center  pt-10 w-3/4 md:pt-20 lg:px-36 cursor-pointer">
          <Row>
            <Col md={6} onClick={() => navigate(`/men/dresses`)}>
              <Item
                img={"../images/men/dressesM/mp1/4.jpg"}
                name="FLORAL PRINTED SHIRT"
                price="49.95"
              />
            </Col>
            <Col md={6} onClick={() => navigate(`/men/dresses`)}>
              <Item
                img={"../images/men/dressesM/mp5/4.jpg"}
                name="FLORAL PRINTED SHIRT"
                price="49.95"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* vedio*/}
      <div class="flex mx-auto mt-20">
        <div class="shrink  mx-auto w-3/4 ">
          <video
            autoPlay
            muted
            loop
            className="hidden md:block snap-always snap-start sticky top-0 h-full w-full object-cover"
            src={"../images/man.mp4"}
          ></video>

          <video
            autoPlay
            muted
            loop
            className=" md:hidden snap-always snap-start sticky top-0 h-full w-full object-cover"
            src={"../images/man2.mp4"}
          ></video>
        </div>
      </div>

      {/* 2 imges */}
      <div>
        <Container className="items-center  pt-10 w-3/4 md:pt-20 lg:px-36 cursor-pointer">
          <Row>
            <Col md={6} onClick={() => navigate(`/men/joggers`)}>
              <Item
                img={"../images/men/men-shose/shose_1.jpg"}
                name="JOGGERS WAIST TROUSERS"
                price="59.95"
              />
            </Col>
            <Col md={6} onClick={() => navigate(`/men/joggers`)}>
              <Item
                img={"../images/men/men-shose/shose_2.jpg"}
                name="JOGGERS WAIST TROUSERS"
                price="59.95"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* 1 large img */}
      <div
        className="pt-10 lg:pt-40  flex shrink justify-center md:pt-48 cursor-pointer"
        xs={12}
        md={12}
       
      >
        <img className="w-5/6" src="../images/menC/large_3.jpg" />
      </div>

      {/* 1 small img */}
      <div
        className="flex justify-center shrink  pt-20 cursor-pointer"
        onClick={() => navigate(`/men/dresses`)}
      >
        <img src="../images/men/dressesM/mp13/1.jpg" />
      </div>

         {/* 2 imges */}
         <div>
        <Container className="items-center  pt-10 w-3/4 md:pt-20 lg:px-36 cursor-pointer">
          <Row>
            <Col md={6} onClick={() => navigate(`/men/joggers`)}>
              <Item
                img={"../images/men/dressesM/mp13/3.jpg"}
                name="JOGGERS WAIST TROUSERS"
                price="59.95"
              />
            </Col>
            <Col md={6} onClick={() => navigate(`/men/joggers`)}>
              <Item
                img={"../images/men/dressesM/mp12/3.jpg"}
                name="JOGGERS WAIST TROUSERS"
                price="59.95"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Outlet />
    </div>
  );
}

export default ViewAll;
