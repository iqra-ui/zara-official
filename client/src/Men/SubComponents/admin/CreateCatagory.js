import React, { useEffect, useState } from "react";
// import AdminMenu from "./AdminMenu";
import { Col, Container, Row, Button } from "react-bootstrap";
import { toast } from "react-toastify";

import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
// import AdminMenu from "./AdminMenu";
import useCategory from "../../../hooks/useCategories";
import AdminMenu from "./AdminMenu";

// import Layout from "../../Main_Component/Layout";
const { Option } = Select;

const CreateCatagory = () => {
  const navigate = useNavigate();
  const categories = useCategory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("");

  //create category function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const categoryData = new FormData();
      for (let i = 0; i <= images.length; i++) {
        categoryData.append("images", images[i]);
      }
      categoryData.append("name", name);
      categoryData.append("description", description);
      categoryData.append("images", images);
      categoryData.append("category", category);
      const { data } = axios.post(
        "https://zara-hof3.onrender.com/api/v1/category/create-category",
        categoryData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("category Created Successfully");
        console.log(name);
        console.log(description);
        console.log([images]);
        // console.log(category);
        navigate("/dashboard/admin/categorys");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <div title={"Dashboard - Create Category"}>
      <div className="pt-20">
        <Container fluid className="m-3 p-3">
          <Row>
            <Col md={2}>
              <AdminMenu />
            </Col>
            <Col md={10} className="flex justify-center mt-20">
              <div className="m-1 w-75">
                <div className="w-75 text-2xl p-4">Create Category</div>

                <div className="mb-3">
                  <label className="btn btn-outline-secondary col-md-12">
                    {/* {images ? images.name : "Upload images"} */}
                    <input
                      type="file"
                      name="images"
                      accept="images/*"
                      multiple
                      onChange={(e) => setImages(e.target.files)}
                      hidden
                    />
                  </label>
                </div>
                {/* <div className="mb-3">
                  {images && (
                    <div className="text-center flex justify-center">
                      <img
                        src={URL.createObjectURL(images)}
                        alt="product_photo"
                        width={"300px"}
                        height={"400px"}
                        className="img img-responsive"
                      />
                    </div>
                  )}
                </div> */}
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    placeholder="write a name"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={category}
                    placeholder="write a Category"
                    className="form-control"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    type="text"
                    value={description}
                    placeholder="write a description"
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="mb-3"></div>
                <div className="mb-3">
                  <button className="btn btn-primary" onClick={handleCreate}>
                    CREATE category
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CreateCatagory;