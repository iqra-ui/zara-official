import React from "react";
import Item from "../Men/Page2W/Item";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function NewBorn({ data, filter }) {
  const navigate= useNavigate();
  return (
    <>
      <div class="flex mx-auto  pt-44 md:pt-48 md:px-16 lg:px-36 cursor-pointer">
        <div class="shrink  mx-auto " xs={12} md={12}>
          <img src="../../images/kids/newBorn/1.jpg" />
        </div>
      </div>

      <div
        //    className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-3 md:px-10 lg:px-3 my-10 md:my-20"
        className="grid w-full gap-3 md:gap-x-2 gap-y-5 grid-cols-2  md:grid-cols-3 lg:grid-cols-5 pt-20  md:pt-30 md:px-16 lg:px-36"
      >
        {data
          ?.filter((d) => {
            return d.description === "Row1";
          })
          .map((d, i) => (
            <div
              key={i}
              onClick={() => navigate(`/productK/${d._id}`)}
            >
              <Item
                img={`https://zara-hof3.onrender.com/` + d.images[0]}
                img2={`https://zara-hof3.onrender.com/` + d.images[1]}
                img3={`https://zara-hof3.onrender.com/` + d.images[2]}
                img4={`https://zara-hof3.onrender.com/` + d.images[3]}
                name={d.name}
                price={d.price}
              />
            </div>
          ))}
      </div>

      <div class="flex mx-auto  pt-20 md:pt-30 md:px-16 lg:px-36 cursor-pointer">
        <div class="shrink  mx-auto " xs={12} md={12}>
          <img src="../../images/kids/newBorn/2.jpg" />
        </div>
      </div>

      <div
        //    className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-3 md:px-10 lg:px-3 my-10 md:my-20"
        className="grid  gap-3 md:gap-x-2 gap-y-5 grid-cols-2  md:grid-cols-3 lg:grid-cols-6 pt-20  md:pt-30 md:px-16 lg:px-30"
      >
        {data
          ?.filter((d) => {
            return d.description === "Row2";
          })
          .map((d, i) => (
            <div key={i}
            onClick={() => navigate(`/productK/${d._id}`)}>
              <Item
                img={`https://zara-hof3.onrender.com/` + d.images[0]}
                img2={`https://zara-hof3.onrender.com/` + d.images[1]}
                img3={`https://zara-hof3.onrender.com/` + d.images[2]}
                img4={`https://zara-hof3.onrender.com/` + d.images[3]}
                name={d.name}
                price={d.price}
              />
            </div>
          ))}
      </div>

      {/* <div class="flex mx-auto  pt-20 md:pt-30 md:px-16 lg:px-36 cursor-pointer">
        <div class="shrink  mx-auto " xs={12} md={12}>
          <Item
          img ="../../images/kids/newBorn/4.jpg" 
          name="PIBBED KNIT SWEATER"
          price="18.95"
          />
        </div>
      </div> */}

<div>
        <Container
         
          className="mt-10"
         
        >
          <Row>
            <Col md={6} sm={12} >
            {data
          ?.filter((d) => {
            return d.description === "Col1";
          })
          .map((d, i) => (
            <div key={i} className="  md:pt-30 md:px-16 lg:px-36 cursor-pointer" 
            onClick={() => navigate(`/productK/${d._id}`)}>
              <Item
                img={`https://zara-hof3.onrender.com/` + d.images[0]}
                img2={`https://zara-hof3.onrender.com/` + d.images[1]}
                img3={`https://zara-hof3.onrender.com/` + d.images[2]}
                img4={`https://zara-hof3.onrender.com/` + d.images[3]}
                name={d.name}
                price={d.price}
              />
            </div>
          ))}
            </Col>
            <Col md={6}  sm={12} >
            <img src="../../images/kids/newBorn/3.jpg" />
            </Col>
          </Row>
        </Container>
      </div>


      <div
           className="grid w-full gap-3 md:gap-x-2 gap-y-5 grid-cols-2  md:grid-cols-3 lg:grid-cols-6 pt-20  md:pt-30 md:px-16 lg:px-36"
        // className="grid  gap-3 md:gap-x-2 gap-y-5 grid-cols-2  md:grid-cols-3 lg:grid-cols-6 pt-20  md:pt-30 md:px-16 lg:px-30"
      >
        {data
          ?.filter((d) => {
            return d.description === "Row3";
          })
          .map((d, i) => (
            <div key={i}
            onClick={() => navigate(`/productK/${d._id}`)}>
              <Item
                img={`https://zara-hof3.onrender.com/` + d.images[0]}
                img2={`https://zara-hof3.onrender.com/` + d.images[1]}
                img3={`https://zara-hof3.onrender.com/` + d.images[2]}
                img4={`https://zara-hof3.onrender.com/` + d.images[3]}
                name={d.name}
                price={d.price}
              />
            </div>
          ))}
      </div>




      <div
           className="grid w-full mb-10 gap-3 md:gap-x-2 gap-y-5 grid-cols-2  md:grid-cols-3 lg:grid-cols-6 pt-20  md:pt-30 md:px-16 lg:px-36"
        // className="grid  gap-3 md:gap-x-2 gap-y-5 grid-cols-2  md:grid-cols-3 lg:grid-cols-6 pt-20  md:pt-30 md:px-16 lg:px-30"
      >
        {data
          ?.filter((d) => {
            return d.description === "Row4";
          })
          .map((d, i) => (
            <div key={i}  onClick={() => navigate(`/productK/${d._id}`)}>
              <Item
                img={`https://zara-hof3.onrender.com/` + d.images[0]}
                img2={`https://zara-hof3.onrender.com/` + d.images[1]}
                img3={`https://zara-hof3.onrender.com/` + d.images[2]}
                img4={`https://zara-hof3.onrender.com/` + d.images[3]}
                name={d.name}
                price={d.price}
              />
            </div>
          ))}
      </div>
      {/* <div
        class=" mx-auto w-2/5 flex pt-20 md:pt-30 md:px-16 lg:px-36 cursor-pointer "
        xs={12}
        md={6}
      >
        {data
          ?.filter((d) => {
            return d.description === "Col1";
          })
          .map((d, i) => (
            <div key={i}>
              <Item
                img={`https://zara-hof3.onrender.com/` + d.images[0]}
                img2={`https://zara-hof3.onrender.com/` + d.images[1]}
                img3={`https://zara-hof3.onrender.com/` + d.images[2]}
                img4={`https://zara-hof3.onrender.com/` + d.images[3]}
                name={d.name}
                price={d.price}
              />
            </div>
          ))}

<div class="flex   pt-10  cursor-pointer">
        <div class="shrink  mx-auto " xs={12} md={6}>
          <img src="../../images/kids/newBorn/3.jpg" />
        </div>
      </div>
      </div> */}


      
    </>
  );
}

export default NewBorn;
