import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "../Men/Page2W/Item";
import { useNavigate, Outlet } from "react-router-dom";

function New() {
  const navigate = useNavigate();
  return (
    <div>
      {/* 1 large img */}

      <div
        class="flex mx-auto  pt-44 md:pt-48 md:px-16 lg:px-36 cursor-pointer"
        // onClick={() => navigate(`/kids/new/boy`)}
      >
        <div class="shrink  mx-auto " xs={12} md={12}>
          <img src="../images/kids/L1.jpeg" />
        </div>
      </div>

      {/* 1 small img */}
      <div className="flex justify-center shrink mb-5 pt-20 cursor-pointer"
        onClick={() => navigate(`/kids/new/girl`)}>
              <img src={"../images/kids/kidsDresses/1.jpg"} />
            
      </div>

      {/* 2 imges */}

      <div>
        <Container
          className="items-center pt-10  md:pt-20 w-3/4 cursor-pointer"
          onClick={() => navigate(`/kids/new/boy`)}
        >
          <Row>
            <Col md={6}>
              <Item
                img="../images/kids/boys/L/b1.jpg"
                name="STRIPED LINEN BLEND TROUSERS"
                price="18.95"
              />
            </Col>

            <Col md={6}>
              <div className="md:w-3/4 mt-24 ">
                <Item
                  img="../images/kids/boys/2.jpg"
                  name="STRIPED LINEN BLEND TROUSERS"
                  price="18.95"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* vedio*/}
      <div class="flex mx-auto mt-20 cursor-pointer">
        <div
          class="shrink  mx-auto w-3/4 "
          onClick={() => navigate(`/kids/new/swimmer`)}
        >
          <video
            autoPlay
            muted
            loop
            className="hidden md:block snap-always snap-start sticky top-0 h-full w-full object-cover"
            src={"../images/kids.mp4"}
          ></video>
        </div>
      </div>

      {/* 2 imges */}
      <div>
        <Container
          className="items-center pt-10 w-2/3 md:pt-20 lg:px-36 cursor-pointer"
          onClick={() => navigate(`/kids/new/newBorn`)}
        >
          <Row>
            <Col md={6}>
              <Item
                img={"../images/kids/newBorn/R1/KL.jpg"}
                name="EMBROIDERED KNIT JUMPSUIT"
                price="17.95"
              />
            </Col>

            <Col md={6}>
              <div>
                <Item
                  img={"../images/kids/newBorn/shoes.jpg"}
                  name="MINI/ LEATHER SHOES"
                  price="18.95"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 1 small img */}
      <div className="flex justify-center shrink mb-5 pt-20 cursor-pointer" onClick={() => navigate(`/kids/new/girl`)}>
              <img src="../images/kids/kidsDresses/p1.jpeg" />
             
            
      </div>
      <Outlet />
    </div>
  ); 
}

export default New;
