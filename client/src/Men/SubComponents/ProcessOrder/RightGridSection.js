import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RightCartProduct from "./RightCartProduct";
import Item from "../Men/Page2W/Item";
// import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/Cart";

function RightGrideSection({data, filter}) {
  const [cart] = useCart();
  
  return (
  //   <div className="py-32 bg-white">
  //   <p className="my-4 text-xs font-light px-4">YOU MAY ALSO LIKE</p>
  //   <div className="grid w- gap-3 grid-cols-2 md:grid-cols-6 px-4 md:px-0">
  //     {data
  //       ?.filter((d) => {
  //         return d.category === filter;
  //       })
  //       .map((d, i) => (
  //         <div
  //           key={i}
  //           // onClick={() => {
  //           //   scrollToTop(); navigate(`/productM/${d._id}`);
  //           // }}
  //           className="top-0 scroll-smooth relative"
  //         >
  //           <Item
  //             img={`https://zara-hof3.onrender.com/` + d.images[3]}
  //             img2={`https://zara-hof3.onrender.com/` + d.images[1]}
  //             img3={`https://zara-hof3.onrender.com/` + d.images[2]}
  //             img4={`https://zara-hof3.onrender.com/` + d.images[0]}
  //             name={d.name}
  //             price={d.price}
  //           />{" "}
  //         </div>
  //       ))}
  //   </div>
  // </div>
  <div className="">
      <Container fluid className="sm:ml-0 mx-auto xl:ml-24 lg:ml-20 md:ml-14">
        <Row className="overflow-y-scroll overflow-x-hidden scrollbar-w-[1px] scrollbar mt-20 md:mt-10  scrollbar-thumb-gray-900 scrollbar-track-gray-200 h-[80vh]">
          <p className="font-sans text-[12px] ml-2 pb-3 tracking-wide font-medium">
            COMPLETE YOUR LOOK
          </p>
          {cart?.length ? (
            <>
              {data
                ?.filter((d) => {
                  return d.category === filter;
                })
                .map((d, i) => (
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div key={i} className="xl:w-[70%] lg:w-[80%] 
                    md:w-[90%]  items-center mt-4">
                      <Item
                        img={`https://zara-hof3.onrender.com/`+ d.images[0]}
                        img2={`https://zara-hof3.onrender.com/`+ d.images[1]}
                        img3={ `https://zara-hof3.onrender.com/` + d.images[2]}
                        name={d.name}
                        price={d.price}
                      />{" "}
                    </div>
                  </Col>
                ))}
            </>
          ) : (
            <> </>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default RightGrideSection;
