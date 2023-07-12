import React, { useState, useEffect } from "react";
import AdminMenu from "./AdminMenu";
import { Col, Container, Row } from "react-bootstrap";

import axios from "axios";
import { toast } from "react-toastify";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);

  //get all category
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
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    const productData = new FormData();
    for (let i = 0; i < images.length; i++) {
      productData.append("images", images[i]);
    }
    try {
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("images", images);
      productData.append("category", category);
      const { data } = axios.post(
        "https://zara-hof3.onrender.com/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        // toast.error(data?.message);
      } else {
        // toast.success("product Created Successfully");
        console.log(name);
        console.log(description);
        console.log(price);
        console.log([images]);
        console.log(category);
      }
    } catch (error) {
      console.log(error);
      // toast.error("something went wrong");
    }
  };

  return (
    <div className="pt-20">
      <Container fluid className="m-3 p-6">
        <Row>
          <Col>
            <AdminMenu />
          </Col>
          <Col md={10} className="flex justify-center mt-20">
            <div className="mx-auto md:w-2/3 lg:w-1/2 shadow  flex flex-col p-6">
              <div className="text-center text-3xl mb-6 font-bold">
                Create Product
              </div>

              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                
                <input
                  type="file"
                  accept="image/*"
                  name="images"
                  multiple
                  onChange={(e) => setImages(e.target.files)}
                  class="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a name"
                  className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write a description"
                  className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="write a Price"
                  className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <button
                  className="text-sm text-center bg-black text-white mt-6  hover:border-gray-400 py-2.5 px-3.5"
                  onClick={handleCreate}
                >
                  CREATE PRODUCT
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateProduct;
