import { Checkbox } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Item from "./Men/Page2/Item";

const CategoryByProduct = () => {
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [checked, setChecked] = useState([]);

  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `https://zara-hof3.onrender.com/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);

  //filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) all.push(id);
    else all = all.filter((c) => c !== id);
    setChecked(all);
  };

  //lifecycle method ~ initial time get
  useEffect(() => {
    if (!checked.length) getProductsByCat();
  }, []);

  // fetch on the base of radio  and check
  useEffect(() => {
    if (checked.length) filterProduct();
  }, [checked]);

  // get filter
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        "https://zara-hof3.onrender.com/api/v1/product/product-filters",
        { checked }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://zara-hof3.onrender.com/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllCategory();
  }, []);


  const checkboxStyle = {
    backgroundColor: '#f3f3f3',
    borderColor: '#d9d9d9',
    
  };
  return (
    <div className="mt-40">
      <Container>
        {/* <Row> */}
          {/* <Col sm={12} md={3} lg={3} xl={3} xxl={3}> */}

            <div className="">
              <p className="text-xl  font-bold">Filter by Category</p>
              <div className="flex  flex-row">
                {categories?.map((c) => (
                  <Checkbox
                    key={c._id}
                    style={checkboxStyle}
                    className="peer group"
                    onChange={(e) => {
                      handleFilter(e.target.checked, c._id);
                    }}

                    
                  >
                    {/* <span className="peer-hidden">
    <input type="checkbox" className=" opacity-0 pointer-events-none" />
    <svg
      className=""
      viewBox="0 0 16 16"
    >
      <line
        x1="4" y1="8" x2="12" y2="8"
        className=""
        stroke="currentColor" strokeWidth="2"
      />
    </svg>
                   </span> */}
                   {c.name}
                    {/* <label
                    className="cursor-pointer w-full peer-checked:font-bold  before:w-2/12 before:h-0.5 peer-checked:before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
                    >
                    {c.name}
                    </label> */}
                   
                  </Checkbox>
                ))}
              </div>
            </div>
          {/* </Col> */}
          <Row>
          <Col sm={12} md={9} lg={9} xl={9} xxl={9}>
            <div className="">
              {/* <p>{category?.name}</p>
        <p>{products?.length}result :</p> */}
              <div className="w-100">
              <div
          className="flex flex-wrap  m-2 mt-20 gap-3"
          xs={3}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          xxl={3}
        >
          {products?.map((p, i) => (
            <div
              className="card m-2 border-0  flex column  cursor-pointer"
              style={{ width: "12rem" }}
            >
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
          </Col>
        </Row>{" "}
      </Container>
    </div>
  );
};

export default CategoryByProduct;
