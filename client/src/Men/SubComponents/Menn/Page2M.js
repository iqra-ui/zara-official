import React, { useState, useEffect } from "react";

import { Link, Outlet } from "react-router-dom";


function Page2M() {

  const [view, setView] = useState(
    "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
  );
  const [dresses, setDresses] = useState("");
  const [accessories, setAccessories] = useState("");
  const [joggers, setJoggers] = useState("");
  

  return (
    <div>
      <div className="w-full fixed flex flex-col-reverse items-center md:flex-row justify-center mt-32 z-10 ">
        <div className="mx-20"></div>
        <div>
          <span
            className={
              "mx-3 md:mx-3 text-[11px] md:text-xs cursor-pointer " + view
            }
            onClick={() => {
              setView(
                "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
              );
              setDresses("");
            
              setJoggers("");
            }}
          >
            <Link to="/men" className="no-underline text-black">
              VIEWALL
            </Link>
          </span>
          <span
            className={
              " md:mx-3 text-[11px] md:text-xs cursor-pointer " + dresses
            }
            onClick={() => {
            
              setDresses(
                "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
              );
             
              setView("");
              setJoggers("");
            }}
          >
            <Link to="dresses" className="no-underline text-black">
              CARGO|PARACHUTE
            </Link>
          </span>
          {/* <span
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
          </span> */}
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
            className={"mx-3 text-[11px] md:text-xs cursor-pointer " + joggers}
            onClick={() => {
              setJoggers(
                "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
              );
              setView("");
           
              setDresses("");
              
            }}
          >
            <Link to="joggers" className="no-underline text-black">
              JOGGERS
            </Link>
          </span>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Page2M;