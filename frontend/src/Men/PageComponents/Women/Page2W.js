import React, { useState, useEffect } from "react";
// import Nav from "../../SubComponents/Nav";
// import Collection from "../../SubComponents/Men/Page2W/Collection";
// import View from "../../SubComponents/Men/Page2/View";
// import { Routes, Route } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";


function Page2() {
  // const [neww, setNeww] = useState(
  //   "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
  // );
  const [collection, setCollection] = useState(
    "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
  );
  const [dresses, setDresses] = useState("");
  const [accessories, setAccessories] = useState("");
  const [shoes, setShoes] = useState("");
  const [view, setView] = useState("");

  return (
    <div>
      <div className="w-full fixed flex flex-col-reverse items-center md:flex-row justify-center mt-32 z-10 ">
        <div className="mx-20"></div>
        <div>
          <span
            className={
              "mx-3 md:mx-3 text-[11px] md:text-xs cursor-pointer " + collection
            }
            onClick={() => {
              setCollection(
                "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
              );
              setDresses("");
              setAccessories("");
              setView("");
              setShoes("");
            }}
          >
            <Link to="/women" className="no-underline text-black">
              COLLECTION
            </Link>
          </span>
          <span
            className={
              " md:mx-3 text-[11px] md:text-xs cursor-pointer " + dresses
            }
            onClick={() => {
              setCollection("");
              setDresses(
                "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
              );
              setAccessories("");
              setView("");
              setShoes("");
            }}
          >
            <Link to="dresses" className="no-underline text-black">
              DRESSES
            </Link>
          </span>
          <span
            className={
              "mx-3 md:mx-3 text-[11px] md:text-xs cursor-pointer " +
              accessories
            }
            onClick={() => {
              setAccessories(
                "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
              );
              setCollection("");
              setDresses("");
              setView("");
              setShoes("");
            }}
          >
            <Link to="accessories" className="no-underline text-black">
              ACCESSORIES|JEWELLERY
            </Link>
          </span>
          {/* <span
            className={"mx-3 text-[11px] md:text-xs cursor-pointer " + view}
            onClick={() => {
              setView(
                "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4 "
              );
              setCollection("");
             setDresses("");
              setAccessories("");
              setShoes("");
            }}
          >
            <Link to="view" className="no-underline text-black">
              VIEW ALL
            </Link>
          </span> */}
          <span
            className={"mx-3 text-[11px] md:text-xs cursor-pointer " + shoes}
            onClick={() => {
              setShoes(
                "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
              );
              setCollection("");
              setAccessories("");
              setDresses("");
              setView("");
            }}
          >
            <Link to="shoes" className="no-underline text-black">
              SHOES
            </Link>
          </span>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Page2;