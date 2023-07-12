import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSearch } from "../../context/Search";
import Item from "../SubComponents/Men/Page2W/Item";

const SearchPage = () => {
  const [values, setValues] = useSearch();
  return (
    <div>
      <div>
        <Container fluid>
          <Row className="relative mt-40 z-20">
            <Col md={12}>
              <div>
                <form className=' role="search'>
                  <input
                    type="search"
                    className="peer my-10 md:my-4 py-3 w-full bg-white fixed border-b border-black font-light text-xs outline-none uppercase"
                    placeholder="SEARCH FOR AN ITEM COLOR, COLLECTION..."
                    value={values.keyword}
                    // onChange={(e) => setValues({ ...values, keyword: e.target.value })}
                    autoFocus
                  />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container">
        <div className="font-light text-xs pt-20">
          {/* <h1>SERACH RESULTS</h1> */}
          <h6>
            {values?.results.length < 1
              ? "NO SEARCH FOUND RESULTS"
              : ` ${values?.results.length} RESULTS`}
          </h6>

          <div className="grid grid-cols-2 pt-10  lg:grid-cols-6  gap-2">
            {values?.results.map((p) => (
              <div className="card border-0    cursor-pointer">
                <Item
                  img={`https://zara-hof3.onrender.com/` + p.images[0]}
                  img2={`https://zara-hof3.onrender.com/` + p.images[1]}
                  img3={`https://zara-hof3.onrender.com/` + p.images[2]}
                  img4={`https://zara-hof3.onrender.com/` + p.images[3]}
                  name={p.name}
                  price={p.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
