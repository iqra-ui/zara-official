import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";

// import "../Nabigation.css";

function NavigationProcess() {
    const [navColor, setnavColor] = useState("transparent");
   
  
    const listenScrollEvent = () => {
      window.scrollY > 10 ? setnavColor("#ffffff") : setnavColor("transparent");
    };
  
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);
  return (
    <div>
       <nav
        className="fixed w-100 mx-0 z-30"
        style={{
          backgroundColor: navColor,
          // zIndex: "2",
        }}
      >
        {[false].map((expand) => (
          <Navbar
            bg="transparent"
            expand={expand}
            id="navbar"
            className="mt-3 text-xs"
          >
            <Container
              fluid
              className="flex items-start justify-start"
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
             

              <Navbar.Brand className="flex">
                <Nav.Link to="https://www.zara.com/">
                  <img
                    fluid
                    className="xl:w-64 xl:h-28 lg:w-56 lg:h-24 md:w-40 md:h-18 sm:w-40 sm:h-18 w-40 h-18
                  flex xl:ml-16 lg:ml-0 md:ml-14 sm:ml:4 ml-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1024px-Zara_Logo.svg.png"
                  />
                </Nav.Link>{" "}
              </Navbar.Brand>

              <Navbar.Brand
                href="#"
                className="absolute flex right-[11px] text-xs "
              >
               

                <span className="absolute right-[100px] font-sans text-slate-700 hidden md:block">
                  <p>LOG IN</p>
                </span>
                <span className="absolute right-[40px] font-sans text-slate-700 hidden md:block">
                  <p>HELP</p>
                </span>
                <span>
                  <svg height={24} width={24}>
                    <path d="M 9.708 5 a 2.5 2.5 0 0 1 4.584 0 H 9.708 Z M 8.645 5 a 3.502 3.502 0 0 1 6.71 0 H 19 v 15 H 5 V 5 h 3.645 Z M 6 6 v 13 h 12 V 6 H 6 Z"></path>
                  </svg>
                </span>
              </Navbar.Brand>

             
            </Container>
          </Navbar>
        ))}
      </nav>
    </div>
  )
}

export default NavigationProcess
