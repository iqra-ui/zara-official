import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Link, Outlet, useParams } from "react-router-dom";
// import Categories from "./SubComponents/Catagories";
import useCategory from "../hooks/useCategories";

import { toast } from "react-toastify";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth } from "../context/Author";
import { useCart } from "../context/Cart";


function Navigation() {
  const [cart] = useCart();
  const params = useParams();
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const [index, setIndex] = useState(0);
  const [womenD, setWomenD] = useState(100);
  const [manD, setManD] = useState(0);
  const [kidsD, setKidsD] = useState(0);
  const [sidebar, setSidebar] = useState("0 invisible");

  const women = [
    "NEW",
    "DRESS TIME",
    "JACKETS | TRENCH COATS",
    "BLAZERS | WAISTCOATS",
    "DRESSES | JUMPSUITS",
    "KNITWEAR",
    "SHIRTS",
    "T-SHIRTS | BODYSUITS",
    "TOPS",
    "SWEATSHIRTS",
    "SKIRTS",
    "TROUSERS",
    "JEANS",
    "SHORTS | SKORTS",
    "COATS",
    "SHOES",
    "BAGS",
    "ACCESSORIES",
    "BASICS",
    "SUITS",
  ];
  const man = [
    "NEW",
    "ZARA ATHLETICZ",
    "BASICS",
    "TROUSERS",
    "CARGO | PARACHUTE",
    "JEANS",
    "JACKETS | OVERSHIRTS",
    "HOODIES | SWEATSHIRTS",
    "T-SHIRTS",
    "SHIRTS",
    "POLO SHIRTS",
    "SHORTS",
    "SWEATERS | CARDIGANS",
    "SUITS",
    "TRENCH COATS",
    "BLAZERS",
    "SHOES",
    "BAGS | BAGPACKS",
    "ACCESSORIES",
  ];
  const kids = [
    "GIRL | 6-14 YEARS",
    "BOY | 6-14 YEARS",
    "BABY GIRL | 9 MONTHS - 6 YEARS",
    "BABY BOY | 9 MONTHS - 6 YEARS",
    "NEWBORN | 0-12 MTH",
    "ACCESSORIES | SHOES",
  ];

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <div>
      <div className=" flex fixed top-0 w-full font-light text-xs z-10">
        <div className="w-100 flex justify-between  p-3 md:p-4">
          <div className="left">
            <MenuRoundedIcon
              onClick={() => setSidebar("100 visible")}
              className="cursor-pointer"
            />
            <Link to="/">
              <svg
                aria-label="ZARA International logo. Go to home page"
                className="layout-logo__icon layout-header-logo__icon  w-44 md:w-56 ml-2 float-right block"
                viewBox="0 0 132 55"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z"
                ></path>
              </svg>
            </Link>
          </div>

          <div className="flex flex-col-reverse items-end md:block">
            <Link to="/search">
              <button className="search md:mx-5 my-4 md:my-0 border-b border-black md:pr-5">
                SEARCH
              </button>
            </Link>

            {!auth.user ? (
              <>
               
                <button className="logIn mx-2.5 hidden md:inline">
                  <Link to="/login" className="hover:text-black">
                    LOG IN
                  </Link>
                </button>
              </>
            ) : (
              <>
              
                <button className="dashboard mx-2.5 hidden md:inline">
                  <Link
                    to={`/dashboard/${
                      auth?.user?.role === 1
                        ? "admin"
                        : auth?.user?.role === 2
                        ? "modrate"
                        : "user"
                    }`}
                    className="hover:text-black uppercase text-black"
                  >
                    {auth?.user?.firstName}
                  </Link>
                </button>
              </>
            )}
             {/* <Link to="/login">
              <button className="logIn mx-2.5 hidden md:inline">LOG IN</button>
            </Link> */}
            <button className="help mx-2.5 hidden md:inline">HELP</button>

            <Link to="/cartPage">
              <span className=" cursor-pointer">
                <svg
                  class="layout-header-shop-cart-link__icon"
                  className="mx-2.5  md:inline relative"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="inherit"
                  stroke="inherit"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.708 5a2.5 2.5 0 0 1 4.584 0H9.708zM8.645 5a3.502 3.502 0 0 1 6.71 0H19v15H5V5h3.645zM6 6v13h12V6H6z"
                  >
              
                  </path>
                </svg>
                <span
                  class="layout-header-shop-cart-link__count"
                  className="absolute right-[25px] top-[20px] md:top-[41px] mx-2.5  md:inline"
                >
                  {cart?.length}
                </span>
              </span>
            </Link>
            {/* <ShoppingBagOutlinedIcon className="  md:mx-2.5" /> */}
          </div>
        </div>
        <div
          className={
            "bg-white top-0 left-0 fixed h-screen w-full md:w-4/12 font-light text-xs transition duration-500 p-8 transition duration-500 opacity-" +
            sidebar
          }
        >
          <div className="mb-5 w-full flex justify-between">
            <CloseIcon
              className="cursor-pointer"
              onClick={() => setSidebar("0 invisible")}
            />
            <div className="md:hidden">
              <SearchIcon className="cursor-pointer mx-3" />
              <ShoppingBagOutlinedIcon className="cursor-pointer" />
            </div>
          </div>


          {/* {categories?.map((c) => (  */}
          <div className=" my- 5 flex w-full justify-center md:justify-start">

           
            <span>
              <input
                type="radio"
                name="category"
                id="women"
                className="hidden peer"
              />
              <label
                htmlFor="women"
                className="cursor-pointer text-black w-full peer-checked:font-bold relative before:absolute before:w-2/12 before:h-0.5 peer-checked:before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
                onClick={() => {
                  setIndex(0);
                  setWomenD(100);
                  setManD(0);
                  setKidsD(0);
                }}
              >
                WOMEN
              
              </label>
            </span>
           

            
            <span className="mx-4">
              <input
                type="radio"
                name="category"
                id="man"
                className="hidden peer"
              />
              <label
                htmlFor="man"
                className="cursor-pointer w-full peer-checked:font-bold relative before:absolute before:w-2/12 before:h-0.5 peer-checked:before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
                onClick={() => {
                  setIndex(1);
                  setWomenD(0);
                  setManD(100);
                  setKidsD(0);
                }}
              >
                MEN
             
              </label>
            </span>
            

         
            <span>
              <input
                type="radio"
                name="category"
                id="kids"
                className="hidden peer"
              />
              <label
                htmlFor="kids"
                className="cursor-pointer w-full peer-checked:font-bold relative before:absolute before:w-2/12 before:h-0.5 peer-checked:before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
                onClick={() => {
                  setIndex(2);
                  setWomenD(0);
                  setManD(0);
                  setKidsD(100);
                }}
              >
                KIDS
              
              </label>
            </span>
          
          </div>

            {/* ))} */}



          {/* <Categories/> */}

          <section
            className={`no-underline text-black overflow-scroll h-3/5 md:h-3/4 my-8 absolute w-full left-0 md:pl-8 transition duration-500 opacity-${womenD} z-${
              womenD / 10
            } `}
          >
            <p className="my-3 mb-5 flex justify-center md:justify-start">
              <a href="" className="no-underline text-black"></a>
            </p>
            <ul className="p-0 flex flex-col items-center md:items-start">
              {women.map((w) => (
                <li className="my-2">
                  <a href="#" className="no-underline text-black ">
                    {w}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="p-0 flex flex-col items-center md:items-start">
              <li className="my-5">
                <a href="#" className="no-underline text-black">
                  JOIN LIFE
                </a>
              </li>
              <li>
                <a href="#" className="no-underline text-black">
                  + INFO
                </a>
              </li>
            </ul>
          </section>
          <section
            className={`no-underline text-black overflow-scroll h-3/5 md:h-3/4 my-8 absolute w-full left-0 md:pl-8 transition duration-500 opacity-${manD} z-${
              manD / 10
            } `}
          >
            <p className="my-3 mb-5 flex justify-center md:justify-start">
              <a href="" className="no-underline text-black">
                SWIMWEAR <sup>NEW</sup>
              </a>
            </p>
            <ul className="p-0 flex flex-col items-center md:items-start">
              {man.map((m) => (
                <li className="my-2">
                  <a href="#" className="no-underline text-black ">
                    {m}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="p-0 flex flex-col items-center md:items-start">
              <li className="my-5">
                <a href="#" className="no-underline text-black">
                  JOIN LIFE
                </a>
              </li>
              <li>
                <a href="#" className="no-underline text-black">
                  + INFO
                </a>
              </li>
            </ul>
          </section>
          <section
            className={`no-underline md:text-left  sm:text-center text-black overflow-scroll h-3/5 md:h-3/4 my-8 absolute w-full left-0 md:pl-8 transition duration-500 opacity-${kidsD} z-${
              kidsD / 10
            } `}
          >
            <p className="my-3 mb-5 flex justify-center md:justify-start">
              <a href="" className="no-underline text-black">
                TRUE NEUTRALS <sup>NEW</sup>
              </a>
            </p>
            <ul className="p-0 flex flex-col items-center md:items-start">
              {kids.map((k) => (
                <li className="my-2">
                  <a href="#" className="no-underline text-black ">
                    {k}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="p-0 flex flex-col items-center md:items-start">
              <li className="my-5">
                <a href="#" className="no-underline text-black">
                  JOIN LIFE
                </a>
              </li>
              <li>
                <a href="#" className="no-underline text-black">
                  + INFO
                </a>
              </li>
            </ul>
          </section>


          <div className="flex justify-between absolute bottom-0 border-t border-black w-100 left-0 p-3 text-small md:hidden">
            <span>HOME</span>
            <span>MY ACCOUNT</span>
          </div>
        </div>

      
    
      </div>
      <Outlet />
    </div>
  );
}

export default Navigation;
