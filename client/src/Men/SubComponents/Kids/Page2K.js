import React, { useState } from 'react'
import { Link, Outlet } from "react-router-dom";
function Page2K() {


    const [newK, setNewK] =useState(
        "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
      );
      const [girl, setGirl] = useState("");
      const [boy, setBoy] = useState("");
      const [newBorn, setNewBorn] = useState("");
      const[swimmer, setSwimmer]=useState("");
      
  return (
    <div>
    <div className="w-full fixed flex flex-col-reverse items-center md:flex-row justify-center mt-32 z-10 ">
      <div className="mx-20"></div>
      <div>
        <span
          className={
            "mx-3 md:mx-3 text-[11px] md:text-xs cursor-pointer " + newK
          }
          onClick={() => {
            setNewK(
              "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
            );
            setGirl("");
            setBoy("");
            setNewBorn("");
            setSwimmer("");
            
          }}
        >
          <Link to="/kids" className="no-underline text-black">
            NEW
          </Link>
        </span>
        <span
          className={
            " md:mx-3 text-[11px] md:text-xs cursor-pointer " + girl
          }
          onClick={() => {
          
            setGirl(
              "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
            );
           
            setNewK("");
            setBoy("");
            setNewBorn("");
            setSwimmer("");
          }}
        >
          <Link to="girl" className="no-underline text-black">
          GIRL
          </Link>
        </span>
       
       
        <span
          className={"mx-3 text-[11px] md:text-xs cursor-pointer " + boy}
          onClick={() => {
            setBoy(
              "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
            );
            setNewK("");
            setGirl("");
            setNewBorn("");
            setSwimmer("");
            
          }}
        >
          <Link to="boy" className="no-underline text-black">
            BOY
          </Link>
        </span>


        <span
          className={"mx-3 text-[11px] md:text-xs cursor-pointer " + newBorn}
          onClick={() => {
            setNewBorn(
              "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
            );
            setNewK("");
            setGirl("");
            setBoy("");
            setSwimmer("");
            
          }}
        >
          <Link to="newBorn" className="no-underline text-black">
            NEWBORN
          </Link>
        </span>

        <span
          className={"mx-3 text-[11px] md:text-xs cursor-pointer " + swimmer}
          onClick={() => {
            setSwimmer(
              "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
            );
            setNewK("");
            setGirl("");
            setNewBorn("");
            setBoy("")
            
          }}
        >
          <Link to="swimmer" className="no-underline text-black">
            SWIMMER
          </Link>
        </span>
      </div>
    </div>

    <Outlet />
  </div>
  )
}

export default Page2K
