// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import { Select } from "antd";
// import useProduct from "./hooks/useProduct";
// import Item from "./Men/SubComponents/Men/Page2/Item";
// // import { toast } from "react-toastify";
// const { Option } = Select;
// const InputData = () => {
//   const products= useProduct();
//   const [categories, setCategories] = useState([]);
//   // const [products, setProducts] = useState([]);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [images, setImages] = useState([]);
//   const [category, setCategory] = useState("");
//   const [d, setD]= useState("")

//   //get all category
//   const getCategories = async () => {
//     try {
//       const { data } = await axios.get(
//          process.env.MONGO_URL  + `/api/v1/category/get-category`
//       );
//       if (data?.success) {
//         setCategories(data?.category);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getCategories();
//   }, []);

//   // const getAllProduct = async () => {
//   //   try {
//   //     const { data } = await axios.get(
//   //        process.env.MONGO_URL  + "/api/v1/product/get-product"
//   //     );
//   //     if (data?.success) {
//   //       setProduct(data?.products);
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //   //   toast.error("Something wwent wrong in getting product");
//   //   }
//   // };

//   // useEffect(() => {
//   //   getAllProduct();
//   // }, []);

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     const productData = new FormData();
//     for(let i=0; i<images.length; i++){
//       productData.append("images",images[i]);
//         }
//     try {
//       productData.append("name", name);
//       productData.append("description", description);
//       productData.append("price", price);
//       productData.append("images", images);
//       productData.append("category", category);
//       const { data } = axios.post( process.env.MONGO_URL  + "/api/v1/product/create-product",
//         productData
//       );
//       if (data?.success) {
//         // toast.error(data?.message);
//       } else {
//         // toast.success("product Created Successfully");
//         console.log(name);
//         console.log(description);
//         console.log(price);
//         console.log([images]);
//         console.log(category);
//       }
//     } catch (error) {
//       console.log(error);
//         // toast.error("something went wrong");
//     }
//   };
//   // const handleCreate= async(e)=>{
//   //   e.preventDefault();
//   //   console.log(data);
//   //   const formData = new FormData();
//   //   for(let i=0; i<data.images.length; i++){
//   //     formData.append("images", data.images[i]);

//   //   }
//   //   formData.append('name', data.name);
//   //   formData.append('price', data.price);
//   //   formData.append('description', data.description);
//   //   formData.append('category', data.category);

//   //   const response = axios.post(
//   //            process.env.MONGO_URL  + "/api/v1/product/create-product",
//   //          formData
//   //         );

//   //         setData({
//   //           images:[],
//   //           name:"",
//   //           price:"",
//   //           description:"",
//   //           category:"",


//   //         })
//   // }

  

//   return (
//     <div>
//       <label>image</label>
//       <br />
  
//       <input
//         type="file"
//         name="images"
//         accept="image/*"
//         multiple
//         onChange={(e) => setImages(e.target.files)}
       
//       />
//       <br />
//       <label>name</label>
//       <br />
//       <input
//         type="text"
//         value={name}
//         placeholder="write a name"
//         className="form-control"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />

//       <Select
//         bordered={false}
//         placeholder="Select a category"
//         size="large"
//         showSearch
//         className="form-select mb-3"
//         onChange={(value) => {
//           setCategory(value);
//         }}
//       >
//         {categories?.map((c) => (
//           <Option key={c._id} value={c._id}>
//             {c.name}
//           </Option>
//         ))}
//       </Select>

//       <label>description</label>
//       <br />
//       <input
//         type="text"
//         value={description}
//         placeholder="write a name"
//         className="form-control"
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <br />
//       <label>price</label>
//       <br />
//       <input
//         type="text"
//         value={price}
//         placeholder="price..."
//         className="form-control"
//         onChange={(e) => setPrice(e.target.value)}
//       />
//       <button className="btn btn-primary" onClick={handleCreate}>
//         CREATE PRODUCT
//       </button>

//       <h1>get</h1>
//       <div
//                     className="flex flex-wrap m-2 gap3"
//                     xs={12}
//                     sm={12}
//                     md={4}
//                     lg={4}
//                     xl={4}
//                   >
//         {products?.map((p, i) => (
//           <div className="card m-2 w-64 flex column  cursor-pointer">
//             <Item
//                         img={ process.env.MONGO_URL  + `/` + p.images[0]}
//                         img2={ process.env.MONGO_URL  + `/` + p.images[1]}
//                         img3={ process.env.MONGO_URL  + `/` + p.images[2]}
//                         img4={ process.env.MONGO_URL  + `/` + p.images[3]}
//                         name={p.name}
//                         price={p.price}
//                       />
//           </div>
//         ))}
//      </div>






//       {/* <div> */}
//         {/* <h1 className="ml-5 mt-10">get product list</h1>
//         {products?.map((p,i)=>{
//           <div className=" card m-2">
//       <img src= process.env.MONGO_URL  + "/Uploads//1684990807242logo2.png"/>
//       <p>{p.name}</p>
//           </div>
//         })} */}

// {/* <h1>get</h1>
//         {products?.map((p, i) => (
//           <div className="card m-2" style={{ width: "12rem" }}>
//             <img src={ process.env.MONGO_URL  + `/` + p.images[0]} />
//             <img src={ process.env.MONGO_URL  + `/` + p.images[1]} />
//             <img src={ process.env.MONGO_URL  + `/` + p.images[2]} />
//             <h5 className="card-title">{p.name}</h5>
//             <p className="card-text">{p.description}</p>
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default InputData;
