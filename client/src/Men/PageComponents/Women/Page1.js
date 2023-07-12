import React, { useState, useEffect } from "react";
import Women from "../../SubComponents/Men/Page1/Women";
import Kids from "../../SubComponents/Men/Page1/Kids";
import Carousel from "react-bootstrap/Carousel";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link, Outlet } from "react-router-dom";
import Man from "../../SubComponents/Men/Page1/Man";

function Page1() {
  const [index, setIndex] = useState(0);

  return (
    <div id="page1" className="scrollbar-none truncate">
      <Carousel activeIndex={index}>
        <Carousel.Item>
          <Link to="/women">
            <Women />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/men">
            <Man />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/kids">
            <Kids />
          </Link>
        </Carousel.Item>
      </Carousel>

      <div className="w-full px-2.5 md:px-10 flex justify-between fixed top-1/2">
        <GrPrevious
          className="cursor-pointer"
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
            }
          }}
        />
        <GrNext
          className="cursor-pointer"
          onClick={() => {
            if (index < 2) {
              setIndex(index + 1);
            }
          }}
        />
      </div>

    
      <Outlet />
    </div>
  );
}

export default Page1;
