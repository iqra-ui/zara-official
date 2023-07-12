import React, { useState, useEffect } from "react";
import { Col, Container, Card, Row } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import { Checkbox } from "antd";
import AdminMenu from "./AdminMenu";
import Item from "../Men/Page2W/Item";

const Products = () => {
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [checked, setChecked] = useState([]);

  const getAllProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://zara-hof3.onrender.com/api/v1/product/get-product`
      );
      if (data?.success) {
        setProducts(data?.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `https://zara-hof3.onrender.com/api/v1/product/product-category`
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

  // const checkboxStyle = {
  //   backgroundColor: '#f3f3f3',
  //   borderColor: '#d9d9d9',

  // };

  return (
    <div>
      <Container>
        <Row>
          <Col md={3}>
            <AdminMenu />
          </Col>
          <Col md={9}>
            <p className=" text-3xl mt-40 text-center font-bold">
              All Products
            </p>
            <div className="flex justify-center text-[12px] font-medium pt-5 flex-row">
              {categories?.map((c) => (
                <Checkbox
                  key={c._id}
                  // style={checkboxStyle}
                  className="peer group"
                  onChange={(e) => {
                    handleFilter(e.target.checked, c._id);
                  }}
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>
           
            <div
              className="grid grid-cols-2 lg:grid-cols-6 m-2 mt-20 gap-3"
             
            >
              {products?.map((p, i) => (
                <Link
                key={p._id}
                to={`/dashboard/admin/products/${p._id}`}
                className="text-black  hover:text-black"
              >
                <div
                  className="card m-2 border-0  flex column  cursor-pointer"
            
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
                </Link>
              ))}
            </div>
          </Col>
        </Row>
    
      </Container>
    </div>
  );
};

export default Products;
