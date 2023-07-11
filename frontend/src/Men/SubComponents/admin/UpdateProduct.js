import React, { useState, useEffect } from "react";
import AdminMenu from "./AdminMenu";
import { Col, Container, Row } from "react-bootstrap";

import axios from "axios";
import { toast } from "react-toastify";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const { Option } = Select;

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [id, setId] = useState("");

  //get single product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/get-product/${params._id}`
      );

      setName(data.products.name);
      setId(data.products._id);
      setDescription(data.products.description);
      setPrice(data.products.price);
      setCategory(data.products.category._id);
      setImages(data.category.images);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
        console.log(name);
        console.log(description);
        console.log([images]);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function (Update)
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      for (let i = 0; i <= images.length; i++) {
        productData.append("images", images[i]);
      }
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("category", category);
      const { data } = axios.put(
        `http://localhost:8080/api/v1/product/update-product/${id}`,
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Updated Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  //delete a product
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are You Sure want to delete this product ? ");
      if (!answer) return;
      const { data } = await axios.delete(
        `http://localhost:8080/api/v1/product/product-delete/${id}`
      );
      toast.success("Product DEleted Succfully");
      navigate("/dashboard/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    // <div>

    //     <div className="mt-20">
    //       <Container fluid className="m-3 p-3">
    //         <Row>
    //           <Col md={2}>
    //             <AdminMenu />
    //           </Col>
    //            <Col md={10} className="flex justify-center mt-20">
    //         <div className="mx-auto md:w-2/3 lg:w-1/2 shadow  flex flex-col p-6">
    //           <div className="text-center text-3xl mb-6 font-bold">
    //         Update Product
    //           </div>

    //           <Select
    //             bordered={false}
    //             placeholder="Select a category"
    //             size="large"
    //             showSearch
    //             className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
    //             onChange={(value) => {
    //               setCategory(value);
    //             }}
    //             value={category}
    //           >
    //             {categories?.map((c) => (
    //               <Option key={c._id} value={c._id}>
    //                 {c.name}
    //               </Option>
    //             ))}
    //           </Select>
    //           <div className="mb-3">

    //             <input
    //               type="file"
    //               accept="image/*"
    //               name="images"
    //               multiple
    //               onChange={(e) => setImages(e.target.files)} hidden
    //               class="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
    //             />
    //           </div>

    //           <div className="mb-3">
    //             <input
    //               type="text"
    //               value={name}
    //               placeholder="write a name"
    //               className="border-b  outline-none border-black p-1 text-sm w-full text-gray-500"
    //               onChange={(e) => setName(e.target.value)}
    //             />
    //           </div>
    //           <div className="mb-3">
    //             <textarea
    //               type="text"
    //               value={description}
    //               placeholder="write a description"
    //               className="border-b  outline-none border-black p-1 text-sm w-full text-gray-500"
    //               onChange={(e) => setDescription(e.target.value)}
    //             />
    //           </div>
    //           <div className="mb-3">
    //             <input
    //               type="number"
    //               value={price}
    //               placeholder="write a Price"
    //               className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
    //               onChange={(e) => setPrice(e.target.value)}
    //             />
    //           </div>

    //           <div className=" flex  column mb-3">
    //             <button
    //               className="text-sm text-center bg-black text-white mt-6  hover:border-gray-400 py-2.5 px-3.5"
    //               onClick={handleUpdate}
    //             >
    //               UPDATE PRODUCT
    //             </button>

    //             <button
    //               className="text-sm text-center bg-black text-white mt-6 ml-48 hover:border-gray-400 py-2.5 px-3.5"
    //               onClick={handleDelete}
    //             >
    //               DELETE PRODUCT
    //             </button>
    //           </div>
    //         </div>
    //       </Col>
    //         </Row>
    //       </Container>
    //     </div>

    // </div>
    <div>
      <div className="pt-20">
        <Container fluid className="m-3 p-3">
          <Row>
            <Col md={2}>
              <AdminMenu />
            </Col>
            <Col md={10} className="flex justify-center mt-20">
              <div className="mx-auto md:w-2/3 lg:w-1/2 shadow  flex flex-col p-6">
                <h1 className="text-center text-3xl mb-6 font-bold">
                  Update Product
                </h1>

                <Select
                  bordered={false}
                  placeholder="Select a category"
                  size="large"
                  showSearch
                  className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
                  onChange={(value) => {
                    setCategory(value);
                  }}
                  value={category}
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
                    className="border-b  outline-none border-black p-1 text-sm w-full text-gray-500"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    type="text"
                    value={description}
                    placeholder="write a description"
                    className="border-b  outline-none border-black p-1 text-sm w-full text-gray-500"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    value={price}
                    placeholder="write a Price"
                    className="border-b  outline-none border-black p-1 text-sm w-full text-gray-500"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="flex column">
                  <div className="mb-3">
                    <button
                      className="text-sm text-center bg-black text-white mt-6  hover:border-gray-400 py-2.5 px-3.5"
                      onClick={handleUpdate}
                    >
                      UPDATE PRODUCT
                    </button>
                  </div>
                  <div className="mb-3">
                    <button
                      className="text-sm text-center ml-48 bg-black text-white mt-6  hover:border-gray-400 py-2.5 px-3.5"
                      onClick={handleDelete}
                    >
                      DELETE PRODUCT
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default UpdateProduct;
