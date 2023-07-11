import React, { useEffect, useState } from "react";

import Item from "./Item";
import { useCollapse } from "react-collapsed";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, Outlet, Link } from "react-router-dom";

function Collection({ data, filter }) {
  const navigate = useNavigate();
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div>
      {/* 1 large img */}

      <div
        className="pt-44  flex shrink justify-center md:pt-48 cursor-pointer"
        xs={12}
        md={12}
        onClick={() => navigate(`/women/dresses `)}
      >
        <img className="w-5/6" src="../images/women/11.jpg" />
      </div>

      {/* 1 small img */}
      <div
        className="flex justify-center shrink  pt-20 cursor-pointer"
        onClick={() => navigate(`/women/dresses `)}
      >
        <img src={"../images/women/1.jpg"} />
      </div>

      {/* // text  */}
      <div className=" font-sans text-xs text-gray-500 mx-auto w-5/6  pt-20">
        <p className="mb-2">JEANS FOR WOMEN</p>
        When a garment becomes iconic, it's much more than a wardrobe staple. In
        this edit, ZARA presents a range of styles from mom jeans to the super
        skinny jeans. Our collection of clothes for girls takes smart, casual
        and sporty situations into consideration, delivering both comfort and
        style. From blazers, skirts and trousers, to dresses, party tops and
        hoodies, the edit is designed to complement our wider range of
        accessories.
        <span {...getCollapseProps()}>
          {" "}
          Suitable for day or night, few pieces can claim to be as flattering
          and rise to any situation. In this selection of ZARA jeans, every
          woman can find those comfortable jeans in which to radiate confidence
          and assurance. School days, holidays and special occasions are all
          covered with this all-seasons wardrobe.
          <br />
        </span>
        <button
          className="border-b border-black"
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          {isExpanded ? "View less" : "View more"}
        </button>
      </div>

      {/* img  */}
      <div
        className=" flex shrink justify-center md:pt-20 pt-10 cursor-pointer"
        xs={12}
        md={12}
        onClick={() => navigate(`/women/dresses `)}
      >
        <img className="w-5/6" src="../images/women/12.jpg" />
      </div>

      {/* 2 imges   */}
      <div>
        <Container
          className="items-center  pt-10 w-3/4 md:pt-20 lg:px-36 cursor-pointer"
          onClick={() => navigate(`/women/dresses `)}
        >
          <Row>
            <Col md={6}>
              <Item
                img={"../images/women/6.jpg"}
                name="EMBROIDERED KNIT JUMPSUIT"
                price="17.95"
              />
            </Col>

            <Col md={6}>
              <div>
                <Item
                  img={"../images/women/5.jpg"}
                  name="KNIT GRAY TROUSER"
                  price="18.95"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 1 small img */}
      <div
        className="flex justify-center shrink  pt-20 cursor-pointer"
        onClick={() => navigate(`/women/dresses `)}
      >
        <img src={"../images/women/13.jpg"} />
      </div>

      {/* img  */}
      <div
        className="  md:pt-20 pt-10 cursor-pointer"
        xs={12}
        md={12}
        onClick={() => navigate(`/women/dresses `)}
      >
        <img className="w-full" src="../images/womenC/large_1.jpg" />
      </div>

      {/* 2 imges   */}
      <div>
        <Container
          className="items-center  pt-10 w-3/4 md:pt-20 lg:px-36 cursor-pointer"
          onClick={() => navigate(`/women/dresses `)}
        >
          <Row>
            <Col md={6}>
              <Item
                img={"../images/women/15.jpg"}
                name="EMBROIDERED KNIT SHIRT WITH JEANS"
                price="17.95"
              />
            </Col>

            <Col md={6}>
              <div>
                <Item
                  img={"../images/women/16.jpg"}
                  name="KNIT KNITTER RED"
                  price="18.95"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 1 small img */}
      <div
        className="flex justify-center shrink mb-5 pt-20 cursor-pointer"
        onClick={() => navigate(`/women/shoes `)}
      >
        <img src={"../images/women/shoes/s4/2.jpg"} />
      </div>

      <Outlet />
    </div>
  );
}

export default Collection;
