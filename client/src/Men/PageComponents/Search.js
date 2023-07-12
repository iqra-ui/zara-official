import React, { useState, useEffect } from "react";

// import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Checkbox } from "antd";
import Item from "../SubComponents/Men/Page2W/Item";
import { useSearch } from "../../context/Search";

function Search() {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://zara-hof3.onrender.com/api/v1/product/search/${values.keyword}`
      );

      setValues({ ...values, results: data });
      navigate("/searchPage");
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    // <div>

    //     <div className="pt-20 md:pt-32 px-6">
    //       <div className=" text-xs flex w-full justify-center md:justify-start">
    //         <span
    //           className={women}
    //           onClick={() => {
    //             setWomen(
    //               "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
    //             );
    //             setMan("");
    //             setKids("");
    //           }}
    //         >
    //           <Link className="no-underline text-black" to="/">
    //             WOMEN
    //           </Link>
    //         </span>
    //         <span
    //           className={"mx-4 " + man}
    //           onClick={() => {
    //             setMan(
    //               "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
    //             );
    //             setWomen("");
    //             setKids("");
    //           }}
    //         >
    //           <Link className="no-underline text-black" to="/man">
    //             MAN
    //           </Link>
    //         </span>
    //         <span
    //           className={kids}
    //           onClick={() => {
    //             setKids(
    //               "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
    //             );
    //             setMan("");
    //             setWomen("");
    //           }}
    //         >
    //           <Link className="no-underline text-black" to="/kids">
    //             KIDS
    //           </Link>
    //         </span>
    //       </div>
    //       <input
    //         type="text"
    //         className="peer my-10 md:my-4 py-3 w-full border-b border-black font-light text-xs outline-none uppercase"
    //         placeholder="SEARCH FOR AN ITEM..."
    //         value={input}
    //         onChange={(e) => setInput(e.target.value)}
    //         onKeyDown={(e) => {
    //           if (e.key === "Enter") {
    //             setRecent((r) => [...r, input.toUpperCase()]);
    //           }
    //         }}
    //         autoFocus
    //       />

    //       {!input ? (
    //         recent.length != 0 ? (
    //           <div className="w-full flex justify-between my-3 text-xs">
    //             <span className="font-bold">RECENT</span>
    //             <span className="cursor-pointer" onClick={() => setRecent([])}>
    //               CLEAR
    //             </span>
    //           </div>
    //         ) : null
    //       ) : null}
    //       {!input
    //         ? recent.map((item, i) => (
    //             <button
    //               key={i}
    //               className="text-xs font-light border border-black py-2 pl-2 pr-8 m-2 relative"
    //               value={item}
    //               onClick={(e) => {
    //                 setInput(e.target.value);
    //               }}
    //             >
    //               {item}
    //               <CloseIcon
    //                 data-num={i}
    //                 className="cursor-pointer font-light text-gray-500 scale-75 absolute top-0 right-0"
    //                 onClick={(e) => {
    //                   recent.splice(e.target.dataset.num, 1);
    //                   setRecent((r) => [...r]);
    //                 }}
    //               />
    //             </button>
    //           ))
    //         : null}
    //     </div>

    //     <Routes>
    //       <Route path="/" element={<Grid input={input} items={womenItems} />} />
    //       <Route path="man" element={<Grid input={input} items={manItems} />} />
    //       <Route
    //         path="kids"
    //         element={<Grid input={input} items={kidsItems} />}
    //       />
    //     </Routes>

    // </div>

    <div>
      <Container fluid>
        <Row className="relative mt-40 z-20">
          <Col md={12}>
            {/* <div className="flex text-center mt-40 flex-row ">
        {categories?.map((c) => (
          <Checkbox
            key={c._id}
            className="peer group"
            onChange={(e) => {
              handleFilter(e.target.checked, c._id);
            }}
          >
            {c.name}
          </Checkbox>
        ))}
      </div> */}

            <div>
              <form className=' role="search' onSubmit={handleSubmit}>
                <input
                  type="search"
                  className="peer my-10 md:my-4 py-3 w-full bg-white fixed border-b border-black font-light text-xs outline-none uppercase"
                  placeholder="SEARCH FOR AN ITEM COLOR, COLLECTION..."
                  value={values.keyword}
                  onChange={(e) =>
                    setValues({ ...values, keyword: e.target.value })
                  }
                  autoFocus
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
   

      <div className="container  grid grid-cols-2 pt-20  lg:grid-cols-6 gap-2">
        {products?.map((p, i) => (
          <div className="card  border-0  cursor-pointer">
            <Item
              img={`https://zara-hof3.onrender.com/` + p.images[0]}
              img2={`https://zara-hof3.onrender.com/` + p.images[1]}
              img3={`https://zara-hof3.onrender.com/` + p.images[2]}
              img4={`https://zara-hof3.onrender.com/` + p.images[0]}
              name={p.name}
              price={p.price}
            />
          </div>
        ))}
      </div>
    

      {/* {values.results?(
  <>
    <Container fluid>
  <Row className="relative mt-40 z-20">
   
    <Col md={12}>
      
     


      <div>
        <form className=' role="search' onSubmit={handleSubmit}>
      <input
            type="search"
            className="peer my-10 md:my-4 py-3 w-full bg-white fixed border-b border-black font-light text-xs outline-none uppercase"
            placeholder="SEARCH FOR AN ITEM COLOR, COLLECTION..."
            value={values.keyword}
            onChange={(e) => setValues({ ...values, keyword: e.target.value })}
            autoFocus
          />
          
        </form>
      </div>
      </Col>
  </Row>
  <Row className="absolute">
      <div
        className=" grid grid-cols-2 pt-20  lg:grid-cols-6 m-2 mt-20 gap-2"
       
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
      </Row>
 

</Container>

  </>

):(
  <>
  <div className='container'>
        <div className='text-center mt-28'>
            <h1>SERACH RESULTS</h1>
            <h6>{values?.results.length < 1 ? 'no products found' : `found ${values?.results.length}`}</h6>

            <Container>
                <Row>
                <Col xs={9} sm={9} md={9} lg={9} xl={9} className="">
            
            <div className="w-100">
        
              <div
                className="flex flex-wrap  gap3"
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
              >
                {values?.results.map((p) => (
               
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
          </Col>
                </Row>
            </Container>
        </div>
      
    </div>

  </>

)} */}

      {/* <div className='container'>
        <div className='text-center mt-28'>
            <h1>SERACH RESULTS</h1>
            <h6>{values?.results.length < 1 ? 'no products found' : `found ${values?.results.length}`}</h6>

            <Container>
                <Row>
                <Col xs={9} sm={9} md={9} lg={9} xl={9} className="">
            
            <div className="w-100">
        
              <div
                className="flex flex-wrap  gap3"
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
              >
                {values?.results.map((p) => (
               
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
          </Col>
                </Row>
            </Container>
        </div>
      
    </div> */}
    </div>
  );
}

export default Search;
